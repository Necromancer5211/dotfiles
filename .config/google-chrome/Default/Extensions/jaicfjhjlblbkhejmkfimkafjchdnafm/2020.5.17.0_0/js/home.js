/* global Vue */

/**
 * Tooltip lib used by the site itself within other pages.
 * Injecting to homepage myself since it is not normally used
 * here therefore not already loaded.
 *
 * Using Cloudflare CDN instead of using the version hosted by KissAnime
 * since I don't trust the site admin to not use this against me somehow
 * considering our past history. No offence to the site admin if you're
 * reading this.
 */

$(document).ready(() => {
	$.getScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-tools/1.2.7/jquery.tools.min.js')
		.always(() => $(document).trigger('ke-ready'));
});

let seasonsListVue;

/* Document Ready */

$(document).on('ke-ready', async () => {

	if (!$('#containerRoot').length) return;

	const { version, version_name } = Utils.manifest;

	const user = $('#aDropDown > span').length
		? $('#aDropDown > span').contents()[0].textContent.trim()
		: null;

	/* Storage */

	const storageSync = await browser.storage.sync.get(config.defaultOptions);
	const storageLocal = await browser.storage.local.get(['pinnedListExtra']);

	/* Pinned List */

	storageSync.pinnedList = Utils.decompress(storageSync.pinnedList, []);

	/*  */

	browser.runtime.sendMessage({
		type: 'graphql',
		data: {
			query: config.queries.extensionInfo,
		},
	}).then(data => {
		if (!data.success) return;

		const {
			extensionVersion: latestVersion,
			extensionUpdateText: updateText,
			extensionAlerts: alerts,
			extensionBanners: banners,
		} = data.data;

		console.log(data);

		/* Version Check */

		const updateAvailable = Utils.versionCompare(latestVersion.version, version) === 1;

		console.group('%c ℹ️ %c KissEssentials %c Version Check ', console._s('start'), console._s('middle', 3), console._s('end', 2));
		console._log(` %c Installed Version %c ${version} (${version_name}) `, console._s('start', 3), console._s('end', 2));
		console._log(` %c Latest Version %c ${latestVersion.version} (${latestVersion.label}) `, console._s('start', 3), console._s('end', 2));
		console._log(` %c Update Available %c ${updateAvailable} `, console._s('start', 3), console._s('end', 2));
		console.groupEnd();

		/* Update Box (homepage:update_box) */

		if (updateAvailable) {

			const changelog = config.endpoints.URL_CHANGELOG;

			const helpTooltip = `
				<h1>Manually Updating your Extensions</h1>
				<ol>
					<li>Click on the following link <strong><a id="openExtPage">chrome://extensions</a></strong>.</li>
					<li>At the top right of the extensions page, enable <strong>Developer mode</strong>.</li>
					<li>Click on the <strong>Update</strong> button located under the searchbar.</li>
					<li>Optional: Disable <strong>Developer mode</strong> after updating extensions.</li>
				</ol>
			`;

			$('#container').before(`
				<div id="version-container">
					<div id="version-box-content">
						<div id="version-box-title">Newer Version Available!</div>
						<div id="version-box-content-text">
							A newer version of <strong>Essentials for KissAnime</strong> is available.
							Installed Version: <a href="${changelog}#v${version}" tagert="_blank" rel="noopener">${version_name}</a>.
							Latest Version: <a id="latest-version" href="${changelog}#current" tagert="_blank" rel="noopener"></a>.
							<br><span id="update-text"></span> For a full list of changes, view the <a href="${changelog}#current" target="_blank" rel="noopener">Changelog</a>.
							<br>Please wait a few hours and the newest version will automatically be installed. Alternatively, you can manually update if you want the update immediately.
							<br><a style="cursor:pointer" id="update-help" title='${helpTooltip}'>How to Manually Update your Extensions</a>
						</div>
					</div>
				</div>
			`);

			/* Inserting the data via .text() to avoid potential security issues in the case my webserver were to ever be compromised */
			$('#latest-version').text(latestVersion.label);
			$('#update-text').text(updateText);

			Utils.inject.script(() => {
				$('#update-help').tooltip({ offset: [5, 0], effect: 'slide', predelay: 200, tipClass: 'update-help-tooltip' }).dynamic({ bottom: { direction: 'down', bounce: true } });
			});

			$(document).on('click', '#openExtPage', () => {
				browser.runtime.sendMessage({ type: 'extPage' });
			});

		}

		/* Notices (homepage:alerts) */

		$('#container').before(`<div id="external-alerts"></div>`);

		if (alerts.fill.enabled) {

			$('#external-alerts').append(`
				<div id="alert-fill" class="alert-box">
					<div class="alert-title">
						<span></span>
					</div>
					<div class="alert-content">
						<div class="alert-arrow"></div>
						<div class="alert-text"></div>
					</div>
				</div>
			`);

			$('#alert-fill .alert-title span').text(alerts.fill.data.title);
			$('#alert-fill .alert-text').html(Utils.sanitizeHtml(alerts.fill.data.content));

		}

		if (alerts.small.enabled) {

			$('#external-alerts').append(`
				<div id="alert-small" class="alert-box">
					<div class="alert-title">
						<span></span>
					</div>
					<div class="alert-content">
						<div class="alert-arrow"></div>
						<div class="alert-text"></div>
					</div>
				</div>
			`);

			$('#alert-small .alert-title span').text(alerts.small.data.title);
			$('#alert-small .alert-text').html(Utils.sanitizeHtml(alerts.small.data.content));

		}

		/* Cycle Alerts (homepage:cycle_alerts) */

		if (banners.length) {
			$('#leftside').prepend('<div id="cycle-alerts"></div>');
			const alert = banners[Math.floor(Math.random() * banners.length)];
			$('#cycle-alerts').html(Utils.sanitizeHtml(alert));
		}

	});

	/* Seasons List (homepage:seasons_list) */

	if (storageSync.enableSeasonList) {

		const seasonEntryComponent = {
			props: {
				anime: { 'type': Object, 'default': {} },
			},
			data() {
				return {
					showDubbed: storageSync.enableSeasonListDub,
				};
			},
			computed: {
				tooltip() {
					return `
						<img class="tooltip-img" src="${this.anime.cover}">
						<div class="tooltip-info">
							<a class="bigChar" href="${this.anime.kissanime}">
								${Utils.sanitizeHtml(this.anime.title)}
							</a>
							<p>${Utils.sanitizeHtml(this.anime.description)}</p>
							${this.airDate || ''}
						</div>
					`;
				},
				airDate() {
					if (!this.anime.airingSchedule)
						return null;

					const airDate = new Date(this.anime.airingSchedule.airingAt * 1000).toLocaleString('en-us', {
						weekday: 'long',
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					});

					return `
						<hr><p>
							<strong>Next Episode: ${airDate}</strong>
							<br><i>The date above may not be 100% accurate.</i>
						</p>
					`;
				},
			},
			template: `
				<div class="season-entry">
					<i class="fas" :class="anime.recommended ? 'fa-star' : 'fa-paperclip'"></i>
					<a
						:class="anime.status.toLowerCase()"
						:title="tooltip"
						:href="anime.kissanime">
						{{ anime.title }}
					</a>
					<template v-if="anime.kissanimeDub && showDubbed">
						| <a :class="anime.status.toLowerCase()" :href="anime.kissanimeDub">
							(Dub)
						</a>
					</template>
				</div>
			`,
		};

		$('#rightside').prepend(`
			<div id="seasons-list" class="rightBox">
				<div class="barTitle">Season List</div>
				<div class="barContent">
					<div class="arrow-general"></div>
					<p v-if="user">
						Welcome, <span id="seasons-user">{{ user }}</span>!
					</p>
					<div v-if="seasons.length" id="seasons-list-content">
						<select v-model="active">
							<option
								v-for="(season, index) of seasons"
								:key="index"
								:value="index">
								{{ season.year }} {{ fixCase(season.season) }} {{ season.current ? '(Current)' : '' }}
							</option>
						</select>

						<div id="color-box-container">
							<span class="nya">Not Yet Aired</span>
							<span class="airing">Airing</span>
							<span class="completed">Completed</span>
						</div>

						<p v-if="activeSeason.current">
							<a @click="toggleListView" href="javascript:void(0)">
								<i class="fas" :class="viewTypeLabel.icon"></i>
								Switch to {{ viewTypeLabel.label }}
							</a>
						</p>

						<div v-if="!activeSeason.current || viewType === 1">
							<season-entry v-for="anime of activeSeason.anime" :key="anime.id" :anime="anime">
						</div>

						<div v-if="activeSeason.current && viewType === 2">
							<h2>
								<i class="fas fa-chevron-left" @click="changeDay(-1)"></i>
								『 {{ activeDay.label }} 』
								<i class="fas fa-chevron-right" @click="changeDay(1)"></i>
							</h2>
							<template v-if="activeDay.anime.length">
								<season-entry v-for="anime of activeDay.anime" :key="anime.id" :anime="anime">
							</template>
							<p v-else><strong>Nothing Here</strong></p>
						</div>

						<div v-if="activeSeason.current && viewType === 3">
							<div v-for="day of activeSeason.days" :key="day.label">
								<h2 style="justify-content: center;">『 {{ day.label }} 』</h2>
								<template v-if="day.anime.length">
									<season-entry v-for="anime of day.anime" :key="anime.id" :anime="anime">
								</template>
								<p v-else><strong>Nothing Here</strong></p>
							</div>
						</div>

						<p>
							Anime marked with a <i class="fas fa-star"></i> are my recommendations.
						</p>

						<p>
							Last Updated:<br>
							{{ timestamp(activeSeason) }}
						</p>
					</div>
					<p v-if="error" style="color: var(--danger);">
						Could not load Seasons List<br>
						Error: {{ error.message }} ({{ error.code }})
					</p>
				</div>
			</div>
		`);

		seasonsListVue = new Vue({
			el: '#seasons-list',
			components: {
				seasonEntry: seasonEntryComponent,
			},
			data() {
				return {
					user,
					active: 0,
					seasons: [],
					error: null,
					viewType: storageSync.seasonListViewType,
					dayActive: new Date().getDay(),
				};
			},
			computed: {
				activeSeason() {
					if (!this.seasons.length)
						return null;

					const season = Utils.clone(this.seasons[this.active]);

					if (!storageSync.enableSeasonListShorts)
						season.anime = season.anime.filter(a => a.format === 'TV');

					if (season.current) {
						let days = [
							{ label: 'Sunday', anime: [] },
							{ label: 'Monday', anime: [] },
							{ label: 'Tuesday', anime: [] },
							{ label: 'Wednesday', anime: [] },
							{ label: 'Thursday', anime: [] },
							{ label: 'Friday', anime: [] },
							{ label: 'Saturday', anime: [] },
							{ label: 'Unknown', anime: [] },
						];

						season.anime.map(a => {
							const date = a.airingSchedule
								? new Date(a.airingSchedule.airingAt * 1000)
								: null;
							const index = date ? date.getDay() : 7;
							days[index].anime.push(a);
						});

						/* We do not want the unknown object to appear if there is nothing in it. */
						days = days.filter(d => {
							if (d.label === 'Unknown')
								return Boolean(d.anime.length);
							return true;
						});

						season.days = days;
					}

					return season;
				},
				activeDay() {
					return this.activeSeason.days[this.dayActive];
				},
				viewTypeLabel() {
					switch (this.viewType) {
						case 1:
							return { label: 'Schedule Day View', icon: 'fa-calendar-day' };
						case 2:
							return { label: 'Schedule List View', icon: 'fa-calendar-alt' };
						case 3:
							return { label: 'List View', icon: 'fa-list' };
						default:
							return {};
					}
				},
			},
			watch: {
				viewType(newValue) {
					browser.storage.sync.set({ seasonListViewType: newValue });
				},
			},
			updated() {
				Utils.inject.script(() => {
					$('.tooltip').remove();
					$('.season-entry a[title]').tooltip({ offset: [5, 0], effect: 'slide', predelay: 200 }).dynamic({ bottom: { direction: 'down', bounce: true } });
				});
			},
			methods: {
				toggleListView() {
					this.viewType = this.viewType + 1 > 3 ? 1 : this.viewType + 1;
				},
				fixCase(text) {
					if (typeof text !== 'string') return;
					return text[0].toUpperCase() + text.slice(1).toLowerCase();
				},
				timestamp(season) {
					return new Date(season.updatedAt || season.createdAt).toLocaleString();
				},
				changeDay(int) {
					const totalDays = this.activeSeason.days.length;
					this.dayActive = this.dayActive + int > (totalDays - 1)
						? 0
						: this.dayActive + int < 0
							? totalDays - 1
							: this.dayActive += int;
				},
			},
		});

		browser.runtime.sendMessage({
			type: 'graphql',
			data: {
				query: config.queries.seasons,
			},
		}).then(res => {
			console.log(res);
			if (res.success) {
				const { publicSeasons } = res.data;
				seasonsListVue.seasons = publicSeasons;
				seasonsListVue.active = publicSeasons.findIndex(s => s.current) || 0;
				$(document).trigger('season-list-ready');
			} else {
				seasonsListVue.error = res.error;
			}
		});

	}

	/* Pinned List (homepage:pinned_list) */

	if (storageSync.enablePinned) {

		const target = storageSync.enableAltPinned
			? $('#rightside .rightBox:not(#seasons-list)').first()
			: $('#leftside .bigBarContainer:not(#watch-history)');

		target.before(`
			<div id="pinned-list" :class="containerClass">
				<div class="barTitle">
					<span>
						Pinned
						<small>({{ pinnedList.length }})</small>
					</span>
					<span v-if="pinnedList.length" class="edit" @click="toggleEdit">Edit</span>
				</div>
				<div class="barContent">
					<div class="arrow-general"></div>
					<draggable
						v-if="pinnedList.length"
						ref="pinnedContent"
						class="list-content"
						:list="pinnedList"
						:disabled="!editActive"
						:scrollSensitivity="1000"
						:class="{ 'edit-active': editActive }"
						@update="updatePinned"
						@wheel.native="scroll">
						<div
							v-for="(entry, index) of combinedPinnedList"
							:key="entry.path"
							class="entry">
							<span
								v-if="gridView || editActive"
								class="item-remove"
								@click.prevent="removePinned(index)">
								<i class="fas fa-trash-alt"></i>
							</span>
							<span v-else>
								<i class="fas fa-paperclip"></i>
							</span>
							<a
								:href="entry.path"
								:data-status="entry.extraData ? entry.extraData.status : null"
								@click="checkEditMode">
								<template v-if="gridView">
									<div v-show="!editActive" class="overlay">
										<div v-if="getTimeUntil(entry)">
											Next Episode In:<br>{{ getTimeUntil(entry) }}
										</div>
									</div>
									<img :src="entry.poster">
								</template>
								<div>{{ entry.title }}</div>
							</a>
							<div v-if="entry.history && gridView">
								<span class="info">{{ entry.history.continuing ? 'Cont: ' : 'Next: ' }}</span>
								<a :href="entry.history.path">{{ entry.history.episode }}</a>
							</div>
							<div
								v-if="entry.extraData"
								:style="{ display: gridView ? 'block': 'inline' }">
								<span v-if="gridView" class="info">Latest: </span>
								<a
									:href="entry.extraData.latestEpisode.path"
									class="latest"
									:class="{ info: !gridView }">
									{{ entry.extraData.latestEpisode.episode }}
								</a>
							</div>
						</div>
					</draggable>
					<strong v-else>Nothing to see here. You can add stuff to this list from the anime synopsis page.</strong>
				</div>
			</div>
		`);

		new Vue({
			el: '#pinned-list',
			components: {
				draggable: vuedraggable // eslint-disable-line
			},
			data() {
				return {
					pinnedList: storageSync.pinnedList || [],
					extraData: storageLocal.pinnedListExtra || [], // I want this separate from the pinnedList
					gridView: !storageSync.enableAltPinned,
					editActive: false,
					updating: false,
					currentTime: Date.now(),
					scrolling: false,
					scrollingTimeout: null,
				};
			},
			computed: {
				combinedPinnedList() {
					/**
					 * We don't want the extraData to be added to the
					 * pinnedList data so we clone it to remove its reactivity.
					 * Probably not the best way to go about this issue but I am
					 * tired af and just want this finished.
					 */
					return Utils.clone(this.pinnedList).map(e => {
						e.extraData = this.extraData.find(d => d.path === e.path) || null;
						return e;
					});
				},
				containerClass() {
					return {
						grid: this.gridView,
						bigBarContainer: this.gridView,
						rightBox: !this.gridView,
					};
				},
			},
			async beforeMount() {
				this.updateExtraData();
			},
			mounted() {
				setInterval(() => {
					this.currentTime = Date.now();
				}, 1000);
				this.initStorageWatcher();
			},
			methods: {
				scroll(event) {
					if (!this.gridView) return;
					const el = this.$refs.pinnedContent.$el;
					el.scrollLeft -= (event.deltaY < 0 ? 20 : -20);
					if (
						el.scrollLeft > 0 &&
						(el.scrollWidth - el.scrollLeft) !== el.clientWidth
					) {
						this.scrolling = true;
					} else {
						clearTimeout(this.scrollingTimeout);
						this.scrollingTimeout = setTimeout(() => {
							this.scrolling = false;
						}, 1000);
					}
					if (this.scrolling) {
						event.preventDefault();
					}
				},
				initStorageWatcher() {
					browser.storage.onChanged.addListener(changes => {
						for (const key in changes) {
							if (!Object.prototype.hasOwnProperty.call(changes, key)) continue;
							switch (key) {
								case 'pinnedList': {
									storageSync[key] = Utils.decompress(changes[key].newValue, []);
									this.pinnedList = storageSync[key];
									break;
								}
								case 'pinnedListExtra': {
									storageLocal[key] = changes[key].newValue || [];
									this.extraData = storageLocal[key];
									break;
								}
							}
						}
					});
				},
				checkEditMode() {
					if (this.editActive) event.preventDefault();
				},
				toggleEdit() {
					this.editActive = !this.editActive;
				},
				async updatePinned() {
					await browser.storage.sync.set({
						pinnedList: Utils.compress(this.pinnedList),
					});
					/**
					 * Apparently firefox doesn't handle storing reactive
				 	 * objects properly so we have to clone it to remove its
				 	 * reactivity before we store it.
				 	 */
					await browser.storage.local.set({
						pinnedListExtra: Utils.clone(this.extraData),
					});
				},
				removePinned(index) {
					/**
					 * I'm making the choice to not remove the pinned item's
					 * extra data since next time the page is loaded it will
					 * clear out any data that is not in the pinned list anyways.
					 */
					this.pinnedList.splice(index, 1);
					this.updatePinned();
				},
				async updateExtraData() {
					this.updating = true;

					/* Just in case the user navigates away we should save what was updated */
					const beforeUnload = () => { this.updatePinned(); };
					$(window).on('beforeunload', beforeUnload);

					let updated = false;
					let postersUpdated = 0;
					let extraDataUpdated = 0;

					/* Clear out data that is not in the pinned list. */
					this.extraData = this.extraData.filter(d => { // eslint-disable-line
						const exists = Boolean(this.pinnedList.find(e => e.path === d.path));
						if (!exists)
							updated = true;
						return exists;
					});

					for (const entry of this.pinnedList) {
						const i = this.extraData.findIndex(d => d.path === entry.path);
						const posterUpdate = Date.now() > (entry.updatedAt || 0) + 6048e5; // 1 week
						const dataUpdate = Date.now() > (i > -1 ? this.extraData[i].updatedAt : 0) + 18e5; // 30 minutes

						if (!(posterUpdate || dataUpdate)) continue;

						updated = true;

						let $html;
						let dom;

						try {
							const response = await $.ajax(`${window.location.origin}${entry.path}`);
							$html = response;
							dom = new DOMParser().parseFromString(Utils.sanitizeHtml(response), 'text/html');
						} catch (error) {
							if (error.status !== 200)
								continue;
						}

						const status = $('p span:contains("Status:")', dom).parent().text()
							.match(/status: (completed|ongoing)/i);
						const poster = $('.rightBox:first-child img', dom).attr('src');
						const airsInTime = $html.match(/\.countdown\(\D+(\d+)\)/i);
						const latestEpEl = $('.listing tr:nth-child(3) a:contains("Episode")', dom);
						const latestEpPath = latestEpEl.attr('href');
						const latestEpTitle = latestEpEl.text().replace(/.*(?=Episode)/i, '').trim();

						if (posterUpdate && poster) {
							entry.poster = poster;
							entry.updatedAt = Date.now();
							postersUpdated++;
							Utils.isDev && console.debug(`'${entry.title}' poster was updated.`);
						}

						if (dataUpdate) {
							const data = {
								path: entry.path,
								status: status ? status[1].toLowerCase() : null,
								latestEpisode: {
									episode: latestEpTitle,
									path: latestEpPath,
								},
								airsAt: airsInTime
									? Date.now() + parseInt(airsInTime[1], 10)
									: null,
								updatedAt: Date.now(),
							};
							i > -1 ? this.$set(this.extraData, i, data) : this.extraData.push(data);
							extraDataUpdated++;
							Utils.isDev && console.debug(`'${entry.title}' extra data was updated.`);
						}
					}

					/* Save what updated values into storage */
					if (updated) {
						this.updatePinned();
						console.log(`${postersUpdated} posters updated.`);
						console.log(`${extraDataUpdated} extra data updated.`);
					}

					this.updating = false;

					/* We're done so we no longer need this */
					$(window).off('beforeunload', beforeUnload);
				},
				getTimeUntil(entry) {
					return entry.extraData && entry.extraData.airsAt
						? this._getTime(entry.extraData.airsAt)
						: null;
				},
				_getTime(time) {
					/* Parse Time */
					time = parseInt(time, 10) - this.currentTime;
					time /= 1000;
					/* Break time down to days, hours, minutes, seconds */
					const d = Math.floor(time / (3600 * 24));
					const h = Math.floor((time / 3600) - (d * 24));
					const m = Math.floor(time % 3600 / 60);
					const s = Math.floor(time % 3600 % 60);
					/* Format it to be displayed */
					const days = d ? `${d}d ` : '';
					const hours = h ? `${h}h ` : '';
					const minutes = m ? `${m}m ` : '';
					const seconds = s ? `${s}s` : '';
					/* Final Result */
					if (time < 0)
						return null;
					return days + hours + minutes + seconds;
				},
			},
		});

	}

	/* Watch History (homepage:watch_history) */

	if (storageSync.enableHistory) {

		$('#leftside .bigBarContainer:not(#pinned-list)').before(`
			<div id="watch-history" class="bigBarContainer grid">
				<div class="barTitle">
					<span>Watch History</span>
					<span v-if="history.length" class="edit" @click="toggleEdit">Edit</span>
					<span v-if="editActive" class="edit" @click="clearHistory">Clear All History</span>
				</div>
				<div class="barContent">
					<div class="arrow-general"></div>
					<div
						v-if="history.length"
						ref="history"
						class="list-content"
						:class="{ 'edit-active': editActive }"
						@wheel="scroll">
						<div
							v-for="(entry, index) of watchHistory"
							:key="entry.path"
							class="entry">
							<span
								class="item-remove"
								@click.prevent="removeFromHistory(index)">
								<i class="fas fa-trash-alt"></i>
							</span>
							<div>
								<a :href="entry.animePath">
									<img :src="entry.poster">
									<div>{{ entry.title }}</div>
								</a>
								<a class="info" :href="entry.path">
									{{ entry.episode }}
								</a>
							</div>
						</div>
					</div>
					<strong v-else>Nothing here. Go watch something you weeb.</strong>
				</div>
			</div>
		`);

		new Vue({
			el: '#watch-history',
			data() {
				return {
					history: storageSync.history || [],
					editActive: false,
					scrolling: false,
					scrollingTimeout: null,
				};
			},
			computed: {
				watchHistory() {
					return this.history.map(h => {
						h.animePath = h.path.substr(0, h.path.lastIndexOf('/'));
						return h;
					});
				},
			},
			mounted() {
				this.initStorageWatcher();
			},
			methods: {
				scroll(event) {
					const el = this.$refs.history;
					el.scrollLeft -= (event.deltaY < 0 ? 20 : -20);
					if (
						el.scrollLeft > 0 &&
						(el.scrollWidth - el.scrollLeft) !== el.clientWidth
					) {
						this.scrolling = true;
					} else {
						clearTimeout(this.scrollingTimeout);
						this.scrollingTimeout = setTimeout(() => {
							this.scrolling = false;
						}, 1000);
					}
					if (this.scrolling) {
						event.preventDefault();
					}
				},
				initStorageWatcher() {
					browser.storage.onChanged.addListener(changes => {
						for (const key in changes) {
							if (key === 'history') {
								storageSync.history = changes[key].newValue || [];
								this.history = changes[key].newValue || [];
							}
						}
					});
				},
				toggleEdit() {
					this.editActive = !this.editActive;
				},
				removeFromHistory(index) {
					this.history.splice(index, 1);
					browser.storage.sync.set({ history: Utils.clone(this.history)	});
				},
				clearHistory() {
					iziToast.show({ // eslint-disable-line
						close: false,
						overlay: true,
						timeout: false,
						position: 'center',
						title: 'Are you sure you want to clear your history?',
						message: 'This cannot be undone!',
						buttons: [
							['<button><b>Clear History</b></button>', (instance, toast) => {
								browser.storage.sync.set({ history: [] });
								instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
							}],
							['<button>Cancel</button>', (instance, toast) => {
								instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
							}, true],
						],
					});
				},
			},
		});

	}

	/* Alt Recents Box (homepage:alt_recents) */

	if (storageSync.enableAltLatest) {

		/* Reusing the existing container */
		// $('#leftside > .bigBarContainer > .barContent').attr('id', 'recents-list');
		$('#recently-nav').parent().attr('id', 'recents-list-title');
		$('#recents-list-title').parent().attr('id', 'recents-list');
		$('#recently-nav, #recents-list-title > div.clear').remove();
		$('#recents-list .barContent').empty();

		/* Recents Refresh */
		$('#recents-list-title').append(`
			<div id="refresh-recents">
				<i class="fas fa-redo-alt"></i>
			</div>
		`);

		/* Recents List */
		$('#recents-list .barContent').append(`
			<div class='arrow-general'></div>
			<div class='loading-pulse'></div>
			<div id="listing"></div>
		`);

		const recentsList = {
			isLoading: false,
			getData() {

				if (recentsList.isLoading) return;

				recentsList.isLoading = true;

				$('#refresh-recents').addClass('spin');
				$('#recents-list .loading-pulse').slideDown(200);
				$('#listing').slideUp(400);

				$.ajax({
					url: `${window.location.origin}/AnimeList/LatestUpdate`,
					attempts: 0,
					maxAttempts: 10,
					success: data => {
						$('#listing').empty();

						let dom = new DOMParser().parseFromString(Utils.sanitizeHtml(data), 'text/html');
						let listingEl = $('.listing', dom);

						if (!listingEl.length) {
							return $('#listing').html('<div>Unable to display recents list.</div>');
						}

						$('#listing').append(listingEl);

						if (storageSync.enableSeasonList && storageSync.enableOnlyAiring) {
							$.ajax({
								url: `${window.location.origin}/AnimeList/LatestUpdate?page=2`,
								attempts: 0,
								maxAttempts: 10,
								success: data => {
									dom = new DOMParser().parseFromString(Utils.sanitizeHtml(data), 'text/html');
									listingEl = $('.listing tbody tr:not(.head, .head + tr)', dom);
									$('.listing tbody').append(listingEl);
									$('#listing tr.odd').removeClass('odd');
									recentsList.airingOnly();
									recentsList.done();
								},
								error: function(err) {
									if (this.attempts < this.maxAttempts) {
										this.attempts++;
										return $.ajax(this);
									}
									recentsList.airingOnly();
									recentsList.done();
									console.error(err);
								},
							});
						} else {
							recentsList.done();
						}

					},
					error: function(err) {
						if (this.attempts < this.maxAttempts) {
							this.attempts++;
							return $.ajax(this);
						}
						$('#listing').html('<div>Unable to display recents list.</div>');
						recentsList.done();
						console.error(err);
					},
				});

			},
			done() {
				$('#listing').slideDown(400);
				$('#refresh-recents').removeClass('spin');
				$('#recents-list .loading-pulse').slideUp(200);
				recentsList.isLoading = false;
				recentsList.tooltips();
			},
			airingOnly() {
				$(document).one('season-list-ready', () => {
					const currentSeason = seasonsListVue.seasons.find(s => s.current);
					console.log('season list loaded', currentSeason);
					if (!currentSeason) return;
					$('#listing tr td:first-child a').each((index, el) => {
						const animePath = new URL(el.href).pathname;
						const exists = currentSeason.anime.find(e => e.kissanime === animePath || e.kissanimeDub === animePath);
						!exists && $(el).closest('tr').remove();
					});
				});

				/* If the season list already loaded before we get here, trigger the event again. */
				seasonsListVue.seasons.length && $(document).trigger('season-list-ready');
			},
			tooltips() {
				Utils.inject.script(() => {
					$('.tooltip').remove();
					$('.listing td[title]').tooltip({ offset: [10, 200], effect: 'slide', predelay: 300 }).dynamic({ bottom: { direction: 'down', bounce: true } });
				});
			},
		};

		recentsList.getData();

		$('#refresh-recents').click(recentsList.getData);

	}

});
