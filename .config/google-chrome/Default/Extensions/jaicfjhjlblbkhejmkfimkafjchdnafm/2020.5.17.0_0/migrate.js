const migrationMap = {
	toggles: {
		/* Global */
		enableCustomLogo: 'enableCustomLogo',
		enableSlimHeader: 'enableSlimHeader',
		enableCustomScheme: 'enableCustomScheme',
		enableCommentSections: 'enableComments',
		enableFooter: 'enableFooter',
		/* Homepage */
		enableWelcomeBox: 'enableSeasonList',
		enablePinnedBox: 'enablePinned',
		enableAltPinnedBox: 'enableAltPinned',
		enableBanner: 'enableBanner',
		enableAltRecentList: 'enableAltLatest',
		enableShowOnlyAiring: 'enableOnlyAiring',
		/* Anime Page */
		enableFindinKitsu: 'enableKitsu',
		enableFindinMAL: 'enableMAL',
		enableFindRedditDiscussions: 'enableReddit',
		/* Bookmark Page */
		relocateAiringBookmarks: 'enableSortAiring',
		/* Video Page */
		enableCustomPlayer: 'enableCustomPlayer',
		enableLastVideo: 'enableHistory',
		enableLightsOff: 'enableLights',
		enableBookmarkLink: 'enableBookmark',
		enableAutoAdvEp: 'enableAutoAdvance',
		enableKeyboardShortcuts: 'enableShortcuts',
		enableAutoFullscreen: 'enableAutoFullscreen',
		enableTheaterMode: 'enableTheater',
		enableTheaterBacklight: 'enableTheaterBacklight',
		enablePauseOnSwitch: 'enableAutoPause',
		enableStretchFullscreenVid: 'enableStretch',
	},
	customScheme: {
		/* Background */
		cs_background: 'bgType',
		cs_background_color: 'bgColor',
		cs_background_image: 'bgImage',
		cs_background_image_position_x: 'bgImagePosX',
		cs_background_image_position_y: 'bgImagePosY',
		cs_background_image_color: 'bgImageColor',
		/* Navbar */
		cs_navbar_background_color: 'navBGColor',
		cs_navbar_tab_current_background_color: 'navTabActiveBGColor',
		cs_navbar_tab_current_text_color: 'navTabActiveTextColor',
		cs_navbar_tab_other_background_color: 'navTabBGColor',
		cs_navbar_tab_other_text_color: 'navTabTextColor',
		cs_navbar_tab_hover_background_color: 'navTabHoverBGColor',
		cs_navbar_sub_background_color: 'navSubBGColor',
		cs_navbar_sub_link_color: 'navSubLinkColor',
		cs_navbar_sub_link_hover_color: 'navSubLinkHoverColor',
		/* Userbox */
		cs_topholderbox_background_color: 'userBoxBGColor',
		cs_topholderbox_text_color: 'userBoxTextColor',
		cs_topholderbox_link_color: 'userBoxLinkColor',
		cs_topholderbox_link_hover_color: 'userBoxLinkHoverColor',
		/* Content Boxes */
		cs_contentboxes_background_color: 'contentBoxBGColor',
		// cs_contentboxes_background_hover_color: '',
		cs_contentboxes_titlebar_background_color: 'contentBoxTitleBGColor',
		cs_contentboxes_titlebar_text_color: 'contentBoxTitleTextColor',
		cs_contentboxes_text_color: 'contentBoxTextColor',
		cs_contentboxes_link_color: 'contentBoxLinkColor',
		cs_contentboxes_link_hover_color: 'contentBoxLinkHoverColor',
		cs_contentboxes_link_visited_color: 'contenetBoxLinkVisitedColor',
		/* Footer */
		cs_footer_background_color: 'footerBGColor',
		cs_footer_text_color: 'footerTextColor',
		cs_footer_link_color: 'footerLinkColor',
		cs_footer_link_hover_color: 'footerLinkHoverColor',
		/* Banner */
		cs_banner_background_color: 'bannerBGColor',
		cs_banner_text_color: 'bannerTextColor',
		cs_banner_link_color: 'bannerLinkColor',
		cs_banner_link_hover_color: 'bannerLinkHoverColor',
		/* Season List */
		cs_welcomebox_background_color: 'seasonBoxBGColor',
		cs_welcomebox_titlebar_background_color: 'seasonBoxTitleBGColor',
		cs_welcomebox_titlebar_text_color: 'seasonBoxTitleTextColor',
		cs_welcomebox_text_color: 'seasonBoxTextColor',
		cs_welcomebox_link_color: 'seasonBoxLinkColor',
		cs_welcomebox_link_hover_color: 'seasonBoxLinkHoverColor',
		/* Pinned Box */
		cs_pinnedbox_background_color: 'pinnedBoxBGColor',
		cs_pinnedbox_titlebar_background_color: 'pinnedBoxTitleBGColor',
		cs_pinnedbox_titlebar_text_color: 'pinnedBoxTitleTextColor',
		cs_pinnedbox_link_color: 'pinnedBoxLinkColor',
		cs_pinnedbox_link_hover_color: 'pinnedBoxLinkHoverColor',
		/* Latest Update */
		cs_latestupdate_background_color: 'latestBGColor',
		cs_latestupdate_titlebar_background_color: 'latestTitleBGColor',
		cs_latestupdate_titlebar_text_color: 'latestTitleTextColor',
		cs_latestupdate_text_color: 'latestTextColor',
		cs_latestupdate_link_color: 'latestLinkColor',
		cs_latestupdate_link_hover_color: 'latestLinkHoverColor',
		/* Sub Content */
		cs_subcontent_tab_current_background_color: 'subContentTabActiveBGColor',
		cs_subcontent_tab_current_text_color: 'subContentTabActiveTextColor',
		cs_subcontent_tab_other_background_color: 'subContentTabBGColor',
		cs_subcontent_tab_other_text_color: 'subContentTabTextColor',
		cs_subcontent_tab_hover_background_color: 'subContentTabHoverBGColor',
		cs_subcontent_content_background_color: 'subContentBGColor',
		cs_subcontent_content_background_color2: 'subContentBG2Color',
		cs_subcontent_content_text_color: 'subContentTextColor',
		cs_subcontent_content_link_color: 'subContentLinkColor',
		cs_subcontent_content_link_hover_color: 'subContentLinkHoverColor',
		/* Right Boxes */
		cs_rightboxes_background_color: 'rightBoxBGColor',
		cs_rightboxes_titlebar_background_color: 'rightBoxTitleBGColor',
		cs_rightboxes_titlebar_text_color: 'rightBoxTitleTextColor',
		cs_rightboxes_link_color: 'rightBoxLinkColor',
		cs_rightboxes_link_hover_color: 'rightBoxLinkHoverColor',
		/* Video Container */
		cs_videopage_container_background_color: 'videoContainerBGColor',
		cs_videopage_container_text_color: 'videoContainerTextColor',
		cs_videopage_container_link_color: 'videoContainerLinkColor',
		cs_videopage_container_link_hover_color: 'videoContainerLinkHoverColor',
		/* Video Player */
		cs_videopage_sliderbar_color: 'videoPlayerSeekColor',
		cs_videopage_sliderbar_seeked_color: 'videoPlayerSeekProgressColor',
		cs_videopage_sliderbar_handle_color_picker: 'videoPlayerSeekHandleColor',
	},
	customLogo: {
		HeaderLogos: 'logo',
		userlogo: 'userImage',
		userlogoSize: 'size',
		userlogoPosTop: 'top',
		userlogoPosLeft: 'left',
	},
	shortcuts: {
		Open: 'help',
		Fullscreen: 'fullscreen',
		Lights: 'lights',
		PlayPause: 'playPause',
		VolUp: 'volUp',
		VolDown: 'volDown',
		SeekBack: 'seekBack',
		SeekForward: 'seekForward',
		Previous: 'prevEp',
		Next: 'nextEp',
		Reload: 'reload',
		Skip: 'skip',
		Advance: 'advance',
		PlaybackRateUp: 'speedUp',
		PlaybackRateDown: 'speedDown',
	},
};

async function migrate() { // eslint-disable-line no-unused-vars
	console.log('[Migration]', 'Starting data migration.');

	const oldStorage = await browser.storage.sync.get();
	const localStore = await browser.storage.local.get();

	if (localStore.hasMigrated) {
		console.log('[Migration]', 'Data has already been migrated.');
		return;
	}

	/**
	 * Decided against migrating old user toggles
	 * since I have different defaults from the
	 * older version of the extension. Everything
	 * other than the toggles have been migrated.
	 */

	/* == == */

	const convertedStorage = {};

	/* == Pinned List == */

	if (Array.isArray(oldStorage.PinnedList) && oldStorage.PinnedList.length) {
		const pinnedList = oldStorage.PinnedList.map((v, i) => ({
			title: v,
			path: oldStorage.PinnedListURLs[i],
			poster: oldStorage.PinnedListImg[i],
			updatedAt: 0,
		}));
		convertedStorage.pinnedList = Utils.compress(pinnedList);
	}

	/* == Custom Scheme == */

	if (Object.keys(oldStorage).some(key => key.startsWith('cs_'))) {
		convertedStorage.customScheme = {};
		for (const key in oldStorage) {
			if (migrationMap.customScheme.hasOwnProperty(key)) {
				const newKey = migrationMap.customScheme[key];
				convertedStorage.customScheme[newKey] = oldStorage[key];
			}
		}
	}

	/* == Custom Logo == */

	if (Object.keys(oldStorage).some(key => migrationMap.customLogo[key])) {
		convertedStorage.customLogo = {};
		for (const key in oldStorage) {
			if (migrationMap.customLogo.hasOwnProperty(key)) {
				const newKey = migrationMap.customLogo[key];
				convertedStorage.customLogo[newKey] = oldStorage[key];
			}
		}
	}

	/* == Keyboard Shortcuts == */

	if (
		Utils.isObject(oldStorage.keyboardShortcuts) &&
		Object.keys(oldStorage.keyboardShortcuts).some(key => migrationMap.shortcuts[key])
	) {

		convertedStorage.shortcuts = {};

		for (const key in oldStorage.keyboardShortcuts) {
			if (migrationMap.shortcuts.hasOwnProperty(key)) {
				const newKey = migrationMap.shortcuts[key];
				convertedStorage.shortcuts[newKey] = oldStorage.keyboardShortcuts[key];
			}
		}

	}

	/* == Advance Time == */

	if (oldStorage.advanceTime) {
		convertedStorage.playerAdvanceTime = oldStorage.advanceTime;
	}

	/* == Skip Time == */

	if (oldStorage.skipTime) {
		convertedStorage.playerSkipTime = oldStorage.skipTime;
	}

	/* == No need to do anything if there was nothing converted == */

	if (!Object.keys(convertedStorage).length) {
		console.log('[Migration]', 'There was nothing to migrate.');
		return;
	}

	/* == Set in storage == */

	await browser.storage.local.clear();
	await browser.storage.local.set({ backup: oldStorage });
	await browser.storage.sync.clear();

	/**
	 * We are going to do this one by one to ensure that if one storage item is over
	 * the storage quota limit, it won't cause everything to go missing.
	 */
	const failedKeys = [];

	for (const key in convertedStorage) {
		if (!Object.prototype.hasOwnProperty.call(convertedStorage, key)) continue;
		try {
			await browser.storage.sync.set({ [key]: convertedStorage[key] });
		} catch (error) {
			failedKeys.push(key);
			console.error('[Migration]', `Could not save '${key}'`, error);
			continue;
		}
	}

	await browser.storage.local.set({
		hasMigrated: true,
		firstInstall: true,
	});

	if (failedKeys.length) {
		await browser.storage.local.set({ failedKeys });
		console.log('[Migration]', `Finished migrating user data with ${failedKeys.length} error(s)`, failedKeys);
	} else {
		console.log('[Migration]', 'Successfully migrated user data!');
	}

}

async function compressPinnedList() { // eslint-disable-line no-unused-vars
	console.log('[Pinned List Compression]', 'Starting pinned list compression.');

	const storage = await browser.storage.sync.get();

	if (!(storage.pinnedList && Array.isArray(storage.pinnedList))) {
		console.log('[Pinned List Compression]', 'Nothing to compress.');
		return;
	}

	await browser.storage.sync.set({
		pinnedList: Utils.compress(storage.pinnedList),
	});

	console.log('[Pinned List Compression]', 'Successfully compressed pinned list!');
}

async function fixFailedMigration(force = false) { // eslint-disable-line no-unused-vars
	let { backup, hasMigrated, failedKeys = [] } = await browser.storage.local.get();

	console.log('[Migration Fix]', 'Starting migration fix.');

	if (hasMigrated && !failedKeys.length && !force) {
		console.log('[Migration Fix]', 'There is nothing to fix.');
		return;
	}

	if (!backup) {
		console.log('[Migration Fix]', 'There is no backup that can be used.');
		return;
	}

	/* == == */

	const convertedStorage = {};

	/* == Pinned List == */

	if (Array.isArray(backup.PinnedList) && backup.PinnedList.length) {
		const pinnedList = backup.PinnedList.map((v, i) => ({
			title: v,
			path: backup.PinnedListURLs[i],
			poster: backup.PinnedListImg[i],
			updatedAt: 0,
		}));
		convertedStorage.pinnedList = Utils.compress(pinnedList);
	}

	/* == Custom Scheme == */

	if (Object.keys(backup).some(key => key.startsWith('cs_'))) {
		convertedStorage.customScheme = {};
		for (const key in backup) {
			if (migrationMap.customScheme.hasOwnProperty(key)) {
				const newKey = migrationMap.customScheme[key];
				convertedStorage.customScheme[newKey] = backup[key];
			}
		}
	}

	/* == Custom Logo == */

	if (Object.keys(backup).some(key => migrationMap.customLogo[key])) {
		convertedStorage.customLogo = {};
		for (const key in backup) {
			if (migrationMap.customLogo.hasOwnProperty(key)) {
				const newKey = migrationMap.customLogo[key];
				convertedStorage.customLogo[newKey] = backup[key];
			}
		}
	}

	/* == Set in storage == */

	/**
	 * We are going to do this one by one to ensure that if one storage item is over
	 * the storage quota limit, it won't cause everything to go missing.
	 */
	failedKeys = [];

	for (const key in convertedStorage) {
		if (!Object.prototype.hasOwnProperty.call(convertedStorage, key)) continue;
		try {
			await browser.storage.sync.set({ [key]: convertedStorage[key] });
		} catch (error) {
			failedKeys.push(key);
			console.error('[Migration]', `Could not save '${key}'`, error);
			continue;
		}
	}

	await browser.storage.local.set({
		hasMigrated: true,
		firstInstall: true,
	});

	if (failedKeys.length) {
		await browser.storage.local.set({ failedKeys });
		console.log('[Migration Fix]', `Finished migration fix with ${failedKeys.length} error(s)`, failedKeys);
	} else {
		await browser.storage.local.remove('failedKeys');
		console.log('[Migration Fix]', `Successfully fixed storage!`);
	}

}
