window.kissMatches = {
	cache: new Map(),
	fetching: false,
	async get(path, type) {
		while (this.fetching)
			await this.wait();

		const cache = this.cache.get(path);

		if (!cache || Date.now() > cache.expiresAt) {
			this.cache.delete(path);
			this.fetching = true;
			const data = await this.fetch(path);
			this.fetching = false;
			this.set(path, data);
			return data ? data[type] : null;
		}

		return cache.data ? cache.data[type] : null;
	},
	set(path, data) {
		this.cache.set(path, {
			data, expiresAt: Date.now() + 108e5, // 3 hours
		});
	},
	fetch(path) {
		return $.ajax({
			url: config.endpoints.API_GRAPHQL,
			method: 'POST',
			data: JSON.stringify({
				query: config.queries.kissMatch,
				variables: { path },
			}),
			timeout: 10000,
			contentType: 'application/json',
		}).then(data => data.data.kissMatch).catch(() => null);
	},
	wait(time = 100) {
		return new Promise(resolve => {
			setTimeout(() => resolve(), time);
		});
	},
};
