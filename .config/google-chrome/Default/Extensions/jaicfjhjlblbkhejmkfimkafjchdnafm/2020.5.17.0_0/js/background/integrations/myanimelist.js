/* global leven kissMatches */

{
	class MyAnimeListAPI {
		constructor() {
			this.endpoints = {
				API_ANIME: 'https://api.jikan.moe/v3/anime',
				API_SEARCH: 'https://api.jikan.moe/v3/search/anime',
			};
		}

		async search({ titles, path }) {
			if (!Array.isArray(titles)) {
				return {
					success: false,
					error: { status: 400, message: 'No valid titles were provided.' },
				};
			}

			const match = await kissMatches.get(path, 'mal');

			for (const title of titles) {

				let response;

				try {
					response = await this.fetch({
						url: match
							? `${this.endpoints.API_ANIME}/${match}`
							: this.endpoints.API_SEARCH,
						data: {
							q: title,
							limit: 10,
						},
					});
				} catch (err) {
					console.error(err);
					await this.sleep();
					continue;
				}

				if (match) {
					return {
						success: true,
						data: response,
					};
				}

				if (!response.results.length)
					continue;

				response.results.sort((a, b) => a.title === b.title ? 0 : (a.title > b.title || -1));
				console.log(response.results);

				const result = response.results.find(r => {
					const score = leven(title.toLowerCase(), r.title.toLowerCase());
					return score <= 1;
				});

				if (!result) {
					await this.sleep();
					continue;
				}

				console.groupCollapsed(`MAL Search (${result.title})`);
				console.log(response.results);
				console.log(result);
				console.groupEnd();

				return {
					success: true,
					data: result,
				};

			}

			return {
				success: true,
				data: null,
			};
		}

		// Trying to respect the 2 requests/second limit
		sleep() {
			return new Promise(resolve => setTimeout(() => resolve(), 1000));
		}

		fetch(data) {
			return new Promise((resolve, reject) => {
				const options = {
					url: data.url,
					method: data.method || 'GET',
					data: data.data || null,
					timeout: data.timeout || 10000,
				};

				$.ajax(options).then(resolve).catch(reject);
			});
		}
	}

	/* Globals */

	window.malAPI = new MyAnimeListAPI();
}
