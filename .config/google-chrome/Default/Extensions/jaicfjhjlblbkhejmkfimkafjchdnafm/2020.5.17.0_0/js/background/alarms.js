/* == Alarms == */

window.alarms = {};

/* == Seasonal Themes == */

{
	window.activeTheme = 'none';

	window.alarms.themes = () => {
		$.post({
			url: config.endpoints.API_GRAPHQL,
			contentType: 'application/json',
			data: JSON.stringify({
				query: config.queries.extensionTheme,
			}),
		}).then(data => window.activeTheme = data.data.extensionTheme);
	};

	window.alarms.themes();

	browser.alarms.create('themes', { periodInMinutes: 60 * 6 });
}

/* Listener */

browser.alarms.onAlarm.addListener(details => {
	if (typeof window.alarms[details.name] === 'function')
		window.alarms[details.name]();
});
