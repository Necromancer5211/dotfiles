/* eslint-disable no-unused-vars */

/*
	Cloning all responses here just in case I decide to use the returned data in a
	vue instance. I don't want this data to be affected by reactivity.
*/

class KitsuAnime {
	constructor(titles, path) {
		this.titles = titles;
		this.path = path || '';
		this.anime = null;
		this.user = null;
		this.entry = null;
	}

	_request(method, data) {
		return browser.runtime.sendMessage({
			type: 'kitsu', method, data,
		}).then(res => {
			console.log('kitsu', method, data, res);
			return res;
		});
	}

	async fetchAnime() {
		const res = await this._request('search', {
			titles: this.titles,
			path: this.path.replace('-Dub', ''),
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.anime = res.data;

		return Utils.clone(this.anime);
	}

	async fetchUser() {
		const res = await this._request('fetchUser');

		if (!res.success)
			return Promise.reject(res.error);

		this.user = res.data;

		return Utils.clone(this.user);
	}

	async fetchEntry() {
		const res = await this._request('fetchEntry', {
			animeId: this.anime.id,
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.entry = res.data;

		return Utils.clone(this.entry);
	}

	async add() {
		const res = await this._request('addAnime', {
			animeId: this.anime.id,
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.entry = res.data;

		return Utils.clone(this.entry);
	}

	async update(key, value) {
		const res = await this._request('updateAnime', {
			entryId: this.entry.id,
			attributes: {
				[key]: value,
			},
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.entry = res.data;

		return Utils.clone(this.entry);
	}

	async delete() {
		const res = await this._request('deleteAnime', {
			entryId: this.entry.id,
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.entry = null;

		return Utils.clone(this.entry);
	}
}

class AnilistAnime {
	constructor(titles, path) {
		this.titles = titles;
		this.path = path;
		this.anime = null;
		this.user = null;
	}

	_request(method, data) {
		return browser.runtime.sendMessage({
			type: 'anilist', method, data,
		}).then(res => {
			console.log('anilist', method, data, res);
			return res;
		});
	}

	async fetchAnime() {
		const res = await this._request('search', {
			titles: this.titles,
			path: this.path.replace('-Dub', ''),
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.anime = res.data;

		return Utils.clone(this.anime);
	}

	async fetchUser() {
		const res = await this._request('fetchUser');

		if (!res.success)
			return Promise.reject(res.error);

		this.user = res.data;

		return Utils.clone(this.user);
	}

	async add() {
		const res = await this._request('addAnime', {
			mediaId: this.anime.id,
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.anime = res.data;

		return Utils.clone(this.anime);
	}

	async update(key, value) {
		if (!this.anime.mediaListEntry)
			return Promise.reject({ status: 400, message: 'Anime is not in user\'s list. Cannot update.' });

		const res = await this._request('updateAnime', {
			entryId: this.anime.mediaListEntry.id,
			[key]: value,
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.anime = res.data;

		return Utils.clone(this.anime);
	}

	async delete() {
		const res = await this._request('deleteAnime', {
			entryId: this.anime.mediaListEntry.id,
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.anime.mediaListEntry = null;

		return Utils.clone(this.anime);
	}
}

class MalAnime {
	constructor(titles, path) {
		this.titles = titles;
		this.path = path;
		this.anime = null;
	}

	_request(method, data) {
		return browser.runtime.sendMessage({
			type: 'mal', method, data,
		}).then(res => {
			console.log('mal', method, data, res);
			return res;
		});
	}

	async fetchAnime() {
		const res = await this._request('search', {
			titles: this.titles,
			path: this.path.replace('-Dub', ''),
		});

		if (!res.success)
			return Promise.reject(res.error);

		this.anime = res.data;

		return Utils.clone(this.anime);
	}
}
