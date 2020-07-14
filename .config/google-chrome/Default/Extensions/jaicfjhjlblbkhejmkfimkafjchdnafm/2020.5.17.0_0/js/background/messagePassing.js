/* global anilistAPI kitsuAPI malAPI */

browser.runtime.onMessage.addListener((request, sender) => {
	console.log('Request', request, 'Sender', sender);
	switch (request.type) {
		case 'css': {
			browser.tabs.insertCSS(sender.tab.id, {
				file: `assets/css/${request.data}`,
				runAt: 'document_start',
			});
			break;
		}
		case 'js': {
			browser.tabs.executeScript(sender.tab.id, {
				file: `assets/js/${request.data}`,
				runAt: 'document_start',
			});
			break;
		}
		case 'request': {
			return new Promise(resolve => {
				$.ajax(request.data).then(data => {
					resolve({ success: true, data });
				}).catch(error => {
					resolve({ success: false, error });
				});
			});
		}
		case 'graphql': {
			return new Promise(resolve => {
				$.post({
					url: config.endpoints.API_GRAPHQL,
					contentType: 'application/json',
					data: JSON.stringify(request.data),
				}).then(data => {
					resolve({ success: true, data: data.data });
				}).catch(error => {
					const { responseJSON } = error;
					if (
						responseJSON &&
						responseJSON.errors &&
						responseJSON.errors.length
					) {
						resolve({
							success: false,
							error: {
								message: responseJSON.errors[0].message,
								code: responseJSON.errors[0].extensions.code,
							},
						});
					} else {
						resolve({
							success: false,
							error: {
								message: error.statusText,
								code: error.status,
							},
						});
					}
				});
			});
		}
		case 'extPage': {
			browser.tabs.create({ url: 'chrome://extensions/' });
			break;
		}
		case 'options': {
			browser.runtime.openOptionsPage();
			break;
		}
		case 'notification': {
			const { msg, subMsg, sticky, onClick } = request.data;
			new Notification(msg, subMsg, sticky, onClick);
			break;
		}
		case 'reload': {
			browser.runtime.reload();
			break;
		}
		case 'plyr-svg': {
			return new Promise(resolve => {
				$.ajax(browser.runtime.getURL('libs/plyr/plyr.svg')).then(data => {
					resolve({ success: true, data: data.documentElement.outerHTML });
				});
			});
		}
		case 'anilist': {
			if (typeof anilistAPI[request.method] === 'function')
				return anilistAPI[request.method](request.data);
			break;
		}
		case 'kitsu': {
			if (typeof kitsuAPI[request.method] === 'function')
				return kitsuAPI[request.method](request.data);
			break;
		}
		case 'mal': {
			if (typeof malAPI[request.method] === 'function')
				return malAPI[request.method](request.data);
			break;
		}
	}
});
