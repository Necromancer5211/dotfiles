browser.runtime.onInstalled.addListener(async details => {
	if (details.reason === 'install') {
		await browser.storage.local.set({ firstInstall: true });
	} else if (details.reason === 'update') {
		new Notification(
			`Updated to ${browser.runtime.getManifest().version_name}`,
			'Click here to see what has changed.',
			false,
			config.endpoints.URL_CHANGELOG,
		);

		await browser.storage.local.set({ recentlyUpdated: true });
	}

	/* Migrate data from v2 to v3 */
	try {
		await window.migrate();
	} catch (error) {
		console.error('There was an error running the migration script', error);
	}

	/**
	 * If the user has already successfully migrated their data from v2 to v3
	 * before I changed how the pinned list is stored, this will compress the pinned list
	 */
	try {
		await window.compressPinnedList();
	} catch (error) {
		console.error('There was an error running the pinned list compression script', error);
	}

	/* Cleanup storage keys that are no longer used */
	browser.storage.sync.remove([
		'seasonListCollapsed',
		'seasonListShowDays',
	]);

	// browser.runtime.openOptionsPage();
	browser.storage.local.get('enableOptionsOnUpdate').then(({ enableOptionsOnUpdate = true }) => {
		enableOptionsOnUpdate && chrome.tabs.create({ url: '/pages/options.html', active: false });
	});
});
