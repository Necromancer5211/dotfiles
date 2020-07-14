/* global storage leven kissMatches */

{
	class AniListAPI {
		constructor() {
			this.endpoints = {
				API: 'https://graphql.anilist.co',
				SLUG_BASE: 'https://anilist.co/anime/',
			};
			this.token = null;
			this.ratelimit = null;
			this.init();
		}

		async init() {
			const { anilist } = storage.local;
			if (anilist) {
				this.token = anilist.token;
				this.fetchUser();
			}
		}

		saveToken(token) {
			this.token = token;
			browser.storage.local.set({
				anilist: { token: this.token },
			});
		}

		async clearToken() {
			this.token = null;
			browser.storage.local.remove('anilist');
		}

		async fetchUser() {
			if (!this.token)
				return { success: true, data: null };

			let data;

			try {
				data = await this.gql({
					query: `
					query {
						Viewer { id, name }
					}
				`,
				});
			} catch (error) {
				return {
					success: false,
					error: error.errors[0],
				};
			}

			return {
				success: true,
				data: data.data.Viewer,
			};
		}

		async addAnime({ mediaId }) {
			let data;

			try {
				data = await this.gql({
					query: `
					mutation($mediaId: Int!) {
						SaveMediaListEntry(mediaId: $mediaId, status: PLANNING) {
							id
							status
							progress
							score(format: POINT_10)
							repeat
							startedAt {
								year, month, day
							}
							completedAt {
								year, month, day
							}
							media {
								id
								siteUrl
								title {
									romaji, english, native
								}
								averageScore
								episodes
								startDate {
									year, month, day
								}
								endDate {
									year, month, day
								}
							}
						}
					}
				`,
					variables: { mediaId },
				});
			} catch (error) {
				return {
					success: false,
					error: error.errors[0],
				};
			}

			/* Restructuring the data so it's consistent */
			const { media } = data.data.SaveMediaListEntry;
			delete data.data.SaveMediaListEntry.media;
			media.mediaListEntry = data.data.SaveMediaListEntry;

			return {
				success: true,
				data: media,
			};
		}

		async updateAnime(variables) {
			let data;

			try {
				data = await this.gql({
					query: `
					mutation(
						$entryId: Int!,
						$status: MediaListStatus,
						$score: Float,
						$progress: Int,
						$repeat: Int,
						$startedAt: FuzzyDateInput,
						$completedAt: FuzzyDateInput
					) {
						SaveMediaListEntry(
							id: $entryId
							status: $status,
							score: $score,
							progress: $progress,
							repeat: $repeat
							startedAt: $startedAt,
							completedAt: $completedAt
						) {
							id
							status
							progress
							score(format: POINT_10)
							repeat
							startedAt {
								year, month, day
							}
							completedAt {
								year, month, day
							}
							media {
								id
								siteUrl
								title {
									romaji, english, native
								}
								averageScore
								episodes
								startDate {
									year, month, day
								}
								endDate {
									year, month, day
								}
							}
						}
					}
				`,
					variables,
				});
			} catch (error) {
				return {
					success: false,
					error: error.errors[0],
				};
			}

			/* Restructuring the data so it's consistent */
			const { media } = data.data.SaveMediaListEntry;
			delete data.data.SaveMediaListEntry.media;
			media.mediaListEntry = data.data.SaveMediaListEntry;

			return {
				success: true,
				data: media,
			};
		}

		async deleteAnime({ entryId }) {
			try {
				await this.gql({
					query: `
					mutation($id: Int!) {
						DeleteMediaListEntry(id: $id) {
							deleted
						}
					}
				`,
					variables: {
						id: entryId,
					},
				});
			} catch (error) {
				return {
					success: false,
					error: error.errors[0],
				};
			}

			return {
				success: true,
			};
		}

		async search({ titles, path }) {
			if (!Array.isArray(titles)) {
				return {
					success: false,
					error: { status: 400, message: 'No valid titles were provided.' },
				};
			}

			const match = await kissMatches.get(path, 'anilist');

			for (const title of titles) {
				let response;

				const variables = {};

				if (match)
					variables.id = match;
				else
					variables.search = title;

				try {
					response = await this.gql({
						query: `
						query ($search: String, $id: Int) {
							Page (perPage: 10) {
								media (search: $search, id: $id, type: ANIME) {
									id
									siteUrl
									title {
										romaji, english, native
									}
									averageScore
									episodes
									startDate {
										year, month, day
									}
									endDate {
										year, month, day
									}
									mediaListEntry {
										id
										status
										progress
										score(format: POINT_10)
										repeat
										startedAt {
											year, month, day
										}
										completedAt {
											year, month, day
										}
									}
								}
							}
						}
					`,
						variables,
					});
				} catch (error) {
					if (error.errors[0].status === 429) {
						return {
							success: false,
							error: error.errors[0],
						};
					}
					continue;
				}

				console.log('response', response);

				if (response.data.Page.media.length === 0)
					continue;

				if (match) {
					return {
						success: true,
						data: response.data.Page.media[0],
					};
				}

				const anime = response.data.Page.media.find(r => {
					for (const key in r.title) {
						if (!r.title.hasOwnProperty(key) || !r.title[key]) continue;
						const score = leven(title.toLowerCase(), r.title[key].toLowerCase());
						if (score <= 1)
							return r;
						continue;
					}

					return false;
				});

				if (!anime)
					continue;

				return {
					success: true,
					data: anime,
				};
			}

			return {
				success: true,
				data: null,
			};
		}

		gql(data, reattempt = false) {
			return new Promise((resolve, reject) => {
				const options = {
					url: this.endpoints.API,
					method: 'POST',
					data: JSON.stringify(data) || null,
					timeout: 10000,
					contentType: 'application/json',
					headers: {},
				};

				if (this.token)
					options.headers.Authorization = `Bearer ${this.token}`;

				if (this.ratelimit && (Date.now() / 1000) <= this.ratelimit.resetAt) {
					reject({
						errors: [{
							message: 'Too Many Requests. Try again shortly.',
							status: 429,
						}],
					});
				}

				if (this.ratelimit)
					this.ratelimit = null;

				$.ajax(options).then(resolve).catch(error => {
					console.error(options, error);

					if (error.responseJSON.errors[0].message === 'Invalid token' && !reattempt) {
						this.clearToken();
						return resolve(this.gql(data, true));
					}

					if (error.responseJSON.errors[0].status === 429) {
						this.ratelimit = {
							retryAfter: error.getResponseHeader('Retry-After'),
							resetAt: error.getResponseHeader('X-RateLimit-Reset'),
						};
					}

					reject(error.responseJSON || error);
				});
			});
		}
	}

	/* Globals */

	window.anilistAPI = new AniListAPI();
}
