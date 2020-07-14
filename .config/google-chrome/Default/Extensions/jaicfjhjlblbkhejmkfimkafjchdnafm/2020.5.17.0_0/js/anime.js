/* global Vue iziToast AnilistAnime MalAnime KitsuAnime */

if (/\/+$/.test(window.location.pathname)) {
	window.history.replaceState({}, '', window.location.pathname.replace(/\/+$/, ''));
	window.location.reload();
}

$(document).ready(async () => {
	if (!/^\/Anime\/([^/]*)(\/+)?$/.test(window.location.pathname)) return;

	/* Storage */

	const storageSync = await browser.storage.sync.get(config.defaultOptions);

	/* Pinned List */

	storageSync.pinnedList = Utils.decompress(storageSync.pinnedList, []);

	/* Misc Variables */

	const animeTitle = $('.barContent > div > a.bigChar').text().trim();
	const animeTitles = Array.from($('span:contains("Other name:")')
		.parent().find('a')).map(el => el.textContent.trim());

	animeTitles.unshift(animeTitle.replace(/.\((sub|dub)\)/i, ''));

	const path = window.location.pathname.replace(/\/+$/, '');
	const poster = $('#rightside img[src*="/Uploads/"]').attr('src');

	/* Parent Container */

	$('span[id*="spanBookmark"]').parent().after('<p id="ke-container" class="p-container"></p>');

	 /* Find in Reddit (anime:reddit) */

	if (storageSync.enableReddit) {
		const searchTemplate = 'subreddit:anime self:yes (selftext:MyAnimeList OR selftext:MAL) ';
		let searchTitles = [];
		for (const query of animeTitles) searchTitles.push(`title:"${query.replace('(TV)', '')}"`);
		let searchQuery = `https://reddit.com/r/anime/search?q=${encodeURIComponent(`${searchTemplate}(${searchTitles.join(' OR ')})`)}&restrict_sr=on&sort=new&t=all`;

		$('#ke-container').append(`
			<span>
				<i class="fab fa-reddit-alien"></i>&nbsp;
				<a href="${searchQuery}" target="_blank" rel="noopener">Reddit Discussions</a>
			</span>
		`);

		$('.listing td:first-child').each((i, el) => {

			const element = $(el).find('a');

			let episode = $(element)
				.text()
				.split('Episode')
				.pop();

			episode = parseInt(episode, 10);

			if (!episode) return;

			searchTitles = [];
			for (const query of animeTitles) searchTitles.push(`title:"${query.replace('(TV)', '')} - Episode ${episode}"`);
			searchQuery = `https://reddit.com/r/anime/search?q=${encodeURIComponent(`${searchTemplate}(${searchTitles.join(' OR ')})`)}&restrict_sr=on&sort=new&t=all`;

			$(element).after(` - <a href="${searchQuery}" target="_blank" rel="noopener">Reddit Discussion</a>`);

		});
	}

	/* Find Torrents (anime:torrents) */

	if (storageSync.enableTorrents) {
		$('#ke-container').append(`
			<span>
				<i class="fas fa-cloud-download-alt"></i>&nbsp;
				<a
					href="https://nyaa.si/?f=0&c=1_2&q=${animeTitles.join(' | ').replace(/ /g, '+')}"
					target="_blank"
					rel="noopener">
					Search for Torrent (Nyaa.si)
				</a>
			</span>
		`);
	}

	/* Use alternate date format (anime:alt_date_format) */

	if (storageSync.enableAltDateFormat) {
		$('.listing tr td:last-child').each((_, el) => {
			const date = el.innerText.split('/');
			const a = b => (`0${b}`).slice(-2);
			el.innerText = `${a(date[1])}/${a(date[0])}/${date[2]}`;
		});
	}

	/* Pinned List  (anime:pinned_list) */

	if (storageSync.enablePinned) {
		$('#ke-container').append(`
			<span id="pinned-toggle">
				<i class="fas" :class="icon"></i>&nbsp;
				<span @click="togglePinned">{{ label }}</span>
			</span>
		`);

		new Vue({
			el: '#pinned-toggle',
			data() {
				return {
					pinnedIndex: -1,
				};
			},
			computed: {
				pinned() {
					return this.pinnedIndex > -1;
				},
				label() {
					return this.pinned ? 'Remove from Pinned List' : 'Add to Pinned List';
				},
				icon() {
					return this.pinned ? 'fa-minus' : 'fa-plus';
				},
			},
			beforeMount() {
				this.getIndex();
			},
			mounted() {
				this.initStorageWatcher();
			},
			methods: {
				initStorageWatcher() {
					browser.storage.onChanged.addListener(changes => {
						for (const key in changes) {
							if (key === 'pinnedList') {
								storageSync.pinnedList = Utils.decompress(changes[key].newValue, []);
								this.getIndex();
							}
						}
					});
				},
				getIndex() {
					this.pinnedIndex = storageSync.pinnedList.findIndex(item => path === item.path);
				},
				togglePinned() {
					if (this.pinned) {
						storageSync.pinnedList.splice(this.pinnedIndex, 1);
					} else {
						if (storageSync.pinnedList.length > config.settings.pinnedListLimit) {
							return iziToast.info({ title: 'Pinned List', message: 'Max number of items reached!' });
						}

						storageSync.pinnedList.push({
							title: animeTitle,
							path, poster,
							updatedAt: Date.now(),
							history: null,
						});
					}
					browser.storage.sync.set({
						pinnedList: Utils.compress(storageSync.pinnedList),
					});
				},
			},
		});


	}

	/* Register components for Anime List Integrations (anime:vue) */

	if (storageSync.enableMAL || storageSync.enableKitsu || storageSync.enableAniList) {
		Vue.component('loading-pulse', {
			template: `<div class='loading-pulse'></div>`,
		});

		Vue.component('anime-list-container', {
			props: {
				id: { 'type': String, 'default': '' },
				title: { 'type': String, 'default': '' },
			},
			template: `
				<div class="rightBox animelist-container">
					<div class="barTitle">{{ title }}</div>
					<div class="barContent">
						<div class="arrow-general"></div>
						<slot></slot>
					</div>
				</div>
			`,
		});

		Vue.component('anime-link', {
			props: {
				href: { 'type': String, 'default': '' },
				label: { 'type': String, 'default': '' },
			},
			template: `
				<div>
					<a :href="href" target="_blank" rel="noopener">{{ label }}</a>
				</div>
			`,
		});

		Vue.component('anime-rating', {
			props: {
				rating: { 'type': [String, Number], 'default': 'N/A' },
			},
			computed: {
				text() {
					return this.rating === null ? 'N/A' : this.rating;
				},
			},
			template: `
				<div>
					<span class="info">Rating:</span> {{ text }}
				</div>
			`,
		});

		Vue.component('no-anime', {
			template: `
				<span>
					Either we were not able to find a match or the
					anime does not exists in this service's database.
				</span>
			`,
		});

		Vue.component('error', {
			props: {
				data: {
					'type': [String, Object], 'default': null,
				},
			},
			computed: {
				text() {
					if (typeof this.data === 'string')
						return this.data;
					const { message, title } = this.data;
					return message || title;
				},
			},
			template: `<h4 v-if="data">Error: {{ text }}</h4>`,
		});
	}

	if (storageSync.enableKitsu || storageSync.enableAniList) {
		Vue.component('anime-toggle', {
			props: {
				entry: { 'type': Object, 'default': null },
			},
			template: `
				<div>
					<a @click="$emit('click')">
						<i class="fas" :class="{ 'fa-minus': entry, 'fa-plus': !entry }"></i>
						&nbsp;
						{{ entry ? 'Remove from' : 'Add to' }} your Library
					</a>
				</div>
			`,
		});

		Vue.component('anime-user-rating', {
			props: {
				value: { 'type': Number, 'default': 0 },
				anilist: { 'type': Boolean, 'default': false },
			},
			computed: {
				score: {
					set(value) {
						this.value = value;
						this.$emit('input', this.value);
					},
					get() {
						return this.value;
					},
				},
			},
			template: `
				<div>
					<span class="info">Score:</span>
					<select v-model="score" @change="$emit('change')">
						<option :value="anilist ? 0 : null">-</option>
						<option v-for="i of 10" :key="i" :value="i * (anilist ? 1 : 2)">{{ i }}</option>
					</select>
				</div>
			`,
		});

		Vue.component('anime-user-status', {
			props: {
				value: { 'type': String, 'default': '' },
				options: { 'type': Array, 'default': [] },
			},
			computed: {
				status: {
					set(value) {
						this.value = value;
						this.$emit('input', this.value);
					},
					get() {
						return this.value;
					},
				},
			},
			template: `
				<div>
					<span class="info">Status:</span>
					<select v-model="status" @change="$emit('change')">
						<option
							v-for="option of options"
							:key="option.value"
							:value="option.value">
							{{ option.label }}
						</option>
					</select>
				</div>
			`,
		});

		Vue.component('anime-user-rewatches', {
			props: {
				value: { 'type': Number, 'default': 0 },
			},
			computed: {
				rewatches: {
					set(value) {
						this.value = value;
						this.$emit('input', this.value);
					},
					get() {
						return this.value;
					},
				},
			},
			template: `
				<div>
					<span class="info">Rewatches:</span>
					<input v-model="rewatches" type="number" min="0" @blur="$emit('blur')">
				</div>
			`,
		});

		Vue.component('anime-episodes', {
			props: {
				value: { 'type': Number, 'default': 0 },
				total: { 'type': Number, 'default': null },
			},
			computed: {
				watched: {
					set(value) {
						this.value = value;
						this.$emit('input', this.value);
					},
					get() {
						return this.value;
					},
				},
			},
			methods: {
				verifyEpisodeCount() {
					if (!this.total)
						return;
					if (this.watched > this.total)
						this.watched = this.total;
				},
			},
			template: `
				<div>
					<span class="info">Eps Watched:</span>
					<input
						v-model="watched"
						type="number" min="0"
						:max="total"
						@keyup="verifyEpisodeCount"
						@blur="$emit('blur')">
					of
					<input :value="total || '-'" type="text" disabled>
				</div>
			`,
		});

		Vue.component('anime-date-picker', {
			props: {
				label: { 'type': String, 'default': '' },
				value: { 'type': String, 'default': '' },
				anilist: { 'type': Boolean, 'default': false },
			},
			data() {
				return {
					timeout: null,
				};
			},
			computed: {
				date: {
					set(value) {
						if (this.anilist) {
							const parts = value.split('-');
							this.value.year = parseInt(parts[0], 10) || null;
							this.value.month = parseInt(parts[1], 10) || null;
							this.value.day = parseInt(parts[2], 10) || null;
						} else {
							this.value = value ? new Date(value).toISOString() : null;
						}
						this.$emit('input', this.value);
						clearTimeout(this.timeout);
						this.timeout = setTimeout(() => {
							this.$emit('change');
						}, 1000);

					},
					get() {
						if (this.anilist) {
							const { year, month, day } = this.value;
							return year ? new Date(`${year}-${month}-${day}`).toISOString().split('T')[0] : null;
						}
						return this.value ? this.value.split('T')[0] : null;
					},
				},
			},
			methods: {
				cleanUp() {
					if (this.value === null) {
						this.date = null;
					}
				},
			},
			template: `
				<div>
					<span class="info">{{ label }}:</span>
					<input v-model="date" type="date" @blur="cleanUp">
				</div>
			`,
		});
	}

	/* MyAnimeList (anime:mal) */

	if (storageSync.enableMAL) {
		$('#rightside .rightBox:first-child').after(`
			<anime-list-container id="mal-container" title="MyAnimeList">
				<template v-if="ready">
					<template v-if="anime">
						<anime-link :href="anime.url" label="MyAnimeList Page"></anime-link>
						<anime-rating :rating="anime.score"></anime-rating>
					</template>
					<no-anime v-if="!anime && !error"></no-anime>
					<error :data="error"></error>
				</template>
				<loading-pulse v-else></loading-pulse>
			</anime-list-container>
		`);

		new Vue({
			el: '#mal-container',
			data() {
				this.api = new MalAnime(animeTitles, path);
				return {
					ready: false,
					anime: null,
					error: null,
				};
			},
			async beforeMount() {
				try {
					this.anime = await this.api.fetchAnime();
				} catch (error) {
					this.error = error;
				} finally {
					this.ready = true;
				}
			},
		});
	}

	/* Kitsu (anime:kitsu) */

	if (storageSync.enableKitsu) {
		$('#rightside .rightBox:first-child').after(`
			<anime-list-container id="kitsu-container" title="Kitsu">
				<template v-if="ready">
					<template v-if="anime">
						<anime-link :href="anime.url" label="Kitsu Page"></anime-link>
						<anime-rating :rating="anime.averageRating"></anime-rating>
						<anime-toggle v-if="user" :entry="entry" @click="toggleAnime"></anime-toggle>
						<template v-if="entry">
							<anime-user-status v-model="entry.status" :options="statusOptions" @change="updateAnime('status')"></anime-user-status>
							<anime-user-rewatches v-model="entry.reconsumeCount" @blur="updateAnime('reconsumeCount')"></anime-user-rewatches>
							<anime-user-rating v-model="entry.ratingTwenty" @change="updateAnime('ratingTwenty')"></anime-user-rating>
							<anime-episodes v-model="entry.progress" :total="anime.episodeCount" @blur="updateAnime('progress')"></anime-episodes>
							<anime-date-picker v-model="entry.startedAt" label="Started" @change="updateAnime('startedAt')"></anime-date-picker>
							<anime-date-picker v-model="entry.finishedAt" label="Finished" @change="updateAnime('finishedAt')"></anime-date-picker>
						</template>
					</template>
					<no-anime v-if="!anime && !error"></no-anime>
					<error :data="error"></error>
				</template>
				<loading-pulse v-else></loading-pulse>
			</anime-list-container>
		`);

		new Vue({
			el: '#kitsu-container',
			data() {
				this.api = new KitsuAnime(animeTitles, path);
				return {
					ready: false,
					anime: null,
					entry: null,
					user: null,
					error: null,
				};
			},
			computed: {
				statusOptions() {
					return [
						{ label: 'Currently Watching', value: 'current' },
						{ label: 'Want to Watch', value: 'planned' },
						{ label: 'Completed', value: 'completed' },
						{ label: 'On Hold', value: 'on_hold' },
						{ label: 'Dropped', value: 'dropped' },
					];
				},
			},
			async beforeMount() {
				try {
					this.anime = await this.api.fetchAnime();
				} catch (error) {
					this.error = error;
				} finally {
					this.ready = true;
				}

				if (!this.anime) return;

				try {
					this.user = await this.api.fetchUser();
				} catch (error) {
					iziToast.error({ title: error.title });
				}

				if (!this.user) return;

				try {
					this.entry = await this.api.fetchEntry();
				} catch (error) {
					iziToast.error({ title: error.title });
				}
			},
			methods: {
				toggleAnime() {
					this.entry ? this.deleteAnime() : this.addAnime();
				},
				async addAnime() {
					try {
						this.entry = await this.api.add();
					} catch (error) {
						iziToast.error({ title: error.title });
					}
				},
				async updateAnime(attribute) {
					try {
						this.entry = await this.api.update(attribute, this.entry[attribute]);
					} catch (error) {
						iziToast.error({ title: error.title });
					}
				},
				async deleteAnime() {
					try {
						this.entry = await this.api.delete();
					} catch (error) {
						iziToast.error({ title: error.title });
					}
				},
			},
		});


	}

	/* AniList (anime:anilist) */

	if (storageSync.enableAniList) {
		$('#rightside .rightBox:first-child').after(`
			<anime-list-container id="anilist-container" title="AniList">
				<template v-if="ready">
					<template v-if="anime">
						<anime-link :href="anime.siteUrl" label="AniList Page"></anime-link>
						<anime-rating :rating="anime.averageScore"></anime-rating>
						<anime-toggle v-if="user" :entry="anime.mediaListEntry" @click="toggleAnime"></anime-toggle>
						<template v-if="anime.mediaListEntry">
							<anime-user-status v-model="anime.mediaListEntry.status" :options="statusOptions" @change="updateAnime('status')"></anime-user-status>
							<anime-user-rewatches v-model="anime.mediaListEntry.repeat" @blur="updateAnime('repeat')"></anime-user-rewatches>
							<anime-user-rating v-model="anime.mediaListEntry.score" anilist @change="updateAnime('score')"></anime-user-rating>
							<anime-episodes v-model="anime.mediaListEntry.progress" :total="anime.episodes" @blur="updateAnime('progress')"></anime-episodes>
							<anime-date-picker v-model="anime.mediaListEntry.startedAt" label="Started" anilist @change="updateAnime('startedAt')"></anime-date-picker>
							<anime-date-picker v-model="anime.mediaListEntry.completedAt" label="Finished" anilist @change="updateAnime('completedAt')"></anime-date-picker>
						</template>
					</template>
					<no-anime v-if="!anime && !error"></no-anime>
					<error :data="error"></error>
				</template>
				<loading-pulse v-else></loading-pulse>
			</anime-list-container>
		`);

		new Vue({
			el: '#anilist-container',
			data() {
				this.api = new AnilistAnime(animeTitles, path);
				return {
					ready: false,
					anime: null,
					user: null,
					error: null,
				};
			},
			computed: {
				statusOptions() {
					return [
						{ label: 'Watching', value: 'CURRENT' },
						{ label: 'Plan to Watch', value: 'PLANNING' },
						{ label: 'Completed', value: 'COMPLETED' },
						{ label: 'Rewatching', value: 'REPEATING' },
						{ label: 'Paused', value: 'PAUSED' },
						{ label: 'Dropped', value: 'DROPPED' },
					];
				},
			},
			async beforeMount() {
				try {
					this.anime = await this.api.fetchAnime();
				} catch (error) {
					return this.error = error;
				} finally {
					this.ready = true;
				}

				if (!this.anime) return;

				try {
					this.user = await this.api.fetchUser();
				} catch (error) {
					iziToast.error({ title: error.message });
				}
			},
			methods: {
				toggleAnime() {
					this.anime.mediaListEntry ? this.deleteAnime() : this.addAnime();
				},
				async addAnime() {
					try {
						this.anime = await this.api.add();
					} catch (error) {
						iziToast.error({ title: error.message });
					}
				},
				async updateAnime(key) {
					try {
						this.anime = await this.api.update(key, this.anime.mediaListEntry[key]);
					} catch (error) {
						iziToast.error({ title: error.message });
					}
				},
				async deleteAnime() {
					try {
						this.anime = await this.api.delete();
					} catch (error) {
						iziToast.error({ title: error.message });
					}
				},
			},
		});
	}
});
