/* global storage leven kissMatches */

{
	class KitsuAPI {
		constructor() {
			this.endpoints = {
				API_OAUTH: 'https://kitsu.io/api/oauth/token',
				API_SEARCH: 'https://kitsu.io/api/edge/anime',
				API_USER_FETCH: 'https://kitsu.io/api/edge/users',
				API_USER_LIBRARY: 'https://kitsu.io/api/edge/library-entries',
				SLUG_BASE: 'https://kitsu.io/anime/',
			};
			this.token = null;
			this.tokenRefresh = null;
			this.userId = null;
			this.init();
		}

		async init() {
			const { kitsu } = storage.local;
			if (kitsu) {
				this.token = kitsu.token;
				this.tokenRefresh = kitsu.tokenRefresh;
				this.fetchUser();
			}
		}

		async login(username, password) {
			try {
				const data = await this.fetch({
					url: this.endpoints.API_OAUTH,
					method: 'POST',
					data: JSON.stringify({
						grant_type: 'password',
						username, password,
					}),
				});
				this.saveToken(data);
				const res = await this.fetchUser();
				if (!res.success)
					throw res.error;
				return res.data;
			} catch (error) {
				this.clearToken();
				throw error;
			}
		}

		async refreshToken() {
			try {
				const data = await this.fetch({
					url: this.endpoints.API_OAUTH,
					method: 'POST',
					data: JSON.stringify({
						grant_type: 'refresh_token',
						refresh_token: this.tokenRefresh,
					}),
				});
				this.saveToken(data);
				await this.fetchUser();
			} catch (error) {
				this.clearToken();
			}
		}

		saveToken(data) {
			this.token = data.access_token;
			this.tokenRefresh = data.refresh_token;
			browser.storage.local.set({
				kitsu: {
					token: this.token,
					tokenRefresh: this.tokenRefresh,
				},
			});
		}

		clearToken() {
			this.token = null;
			this.tokenRefresh = null;
			this.userId = null;
			browser.storage.local.remove('kitsu');
		}

		async fetchUser() {
			if (!this.token)
				return { success: true, data: null };

			let data;

			try {
				data = await this.fetch({
					url: this.endpoints.API_USER_FETCH,
					auth: true,
					data: { 'filter[self]': true },
				});
			} catch (error) {
				return {
					success: false,
					error: error.errors[0],
				};
			}

			const [user] = data.data;

			if (user) {
				this.userId = user.id;
				user.attributes.id = user.id;
			}

			return {
				success: true,
				data: user ? user.attributes : null,
			};
		}

		async fetchEntry({ animeId }) {
			if (!this.userId)
				return { success: true, data: null };

			let data;

			try {
				data = await this.fetch({
					url: this.endpoints.API_USER_LIBRARY,
					auth: true,
					data: {
						'filter[animeId]': animeId,
						'filter[userId]': this.userId,
						'filter[kind]': 'anime',
					},
				});
			} catch (error) {
				return {
					success: false,
					error: error.errors[0],
				};
			}

			const [anime] = data.data;

			if (!anime) {
				return {
					success: true,
					data: null,
				};
			}

			anime.attributes.id = anime.id;

			return {
				success: true,
				data: anime.attributes,
			};
		}

		async addAnime({ animeId }) {
			let data;

			try {
				data = await this.fetch({
					method: 'POST',
					url: this.endpoints.API_USER_LIBRARY,
					auth: true,
					data: JSON.stringify({
						data: {
							attributes: {
								status: 'planned',
							},
							relationships: {
								anime: {
									data: {
										id: animeId,
										type: 'anime',
									},
								},
								user: {
									data: {
										id: this.userId,
										type: 'users',
									},
								},
							},
							type: 'library-entries',
						},
					}),
				});
			} catch (error) {
				return {
					success: false,
					error: error.errors[0],
				};
			}

			const anime = data.data;

			anime.attributes.id = anime.id;

			return {
				success: true,
				data: anime.attributes,
			};
		}

		async updateAnime({ entryId, attributes }) {
			let data;

			try {
				data = await this.fetch({
					method: 'PATCH',
					url: `${this.endpoints.API_USER_LIBRARY}/${entryId}`,
					auth: true,
					data: JSON.stringify({
						data: {
							id: entryId,
							attributes,
							type: 'library-entries',
						},
					}),
				});
			} catch (error) {
				return {
					success: false,
					error: error.errors[0],
				};
			}

			const anime = data.data;

			anime.attributes.id = anime.id;

			return {
				success: true,
				data: anime.attributes,
			};
		}

		async deleteAnime({ entryId }) {
			try {
				await this.fetch({
					method: 'DELETE',
					url: `${this.endpoints.API_USER_LIBRARY}/${entryId}`,
					auth: true,
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

			const match = await kissMatches.get(path, 'kitsu');

			for (const title of titles) {

				let response;

				try {
					response = await this.fetch({
						url: this.endpoints.API_SEARCH + (match ? `/${match}` : ''),
						data: { 'filter[text]': title },
					});
				} catch (err) {
					continue;
				}

				if (match) {
					const anime = response.data.attributes;
					anime.id = response.data.id;
					anime.url = this.endpoints.SLUG_BASE + anime.slug;
					return {
						success: true,
						data: anime,
					};
				}

				if (!response.data.length) {
					continue;
				}

				/**
				 * attributes.abbreviatedTitles = Array of Strings
				 * attributes.canonicalTitle = String
				 * attributes.titles.en = String
				 * attributes.titles.en_jp = String
				 * attributes.titles.ja_jp = String
				 */

				const result = response.data.find(r => {
					const data = r.attributes;
					const arrTitles = [
						...(data.abbreviatedTitles || []),
						data.canonicalTitle,
						data.titles.en,
						data.titles.en_jp,
						data.titles.ja_jp,
					];

					for (const t of arrTitles) {
						if (!t) continue;
						const score = leven(title.toLowerCase(), t.toLowerCase());
						if (score <= 1)
							return r;
						continue;
					}

					return false;
				});

				if (!result)
					continue;

				const anime = result.attributes;
				anime.id = result.id;
				anime.url = this.endpoints.SLUG_BASE + anime.slug;

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

		fetch(data, reattempt = false) {
			return new Promise((resolve, reject) => {
				const options = {
					url: data.url,
					method: data.method || 'GET',
					data: data.data || null,
					timeout: data.timeout || 10000,
					accepts: { 'application/vnd.api+json': 'application/vnd.api+json' },
					contentType: 'application/vnd.api+json',
					headers: {},
				};

				if (data.auth)
					options.headers.Authorization = `Bearer ${this.token}`;

				$.ajax(options).then(resolve).catch(async error => {
					console.error(options, error);

					if (error.status === 403) {
						if (this.tokenRefresh && !reattempt) {
							await this.refreshToken();
							return resolve(this.fetch(data, true));
						}
						this.clearToken();
					}

					reject(error.responseJSON || error);
				});
			});
		}
	}

	/* Globals */

	window.kitsuAPI = new KitsuAPI();
}
