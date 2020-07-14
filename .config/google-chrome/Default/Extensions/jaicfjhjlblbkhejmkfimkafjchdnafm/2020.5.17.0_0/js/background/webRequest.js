/* == Set Origin or Referer headers for videos that require them == */

{
	const opt_extraInfoSpec = ['blocking', 'requestHeaders'];
	const chromeVersionCheck = navigator.userAgent.match(/Chrome\/(\d+)/);

	if (chromeVersionCheck && parseInt(chromeVersionCheck[1], 10) >= 72)
		opt_extraInfoSpec.push('extraHeaders');

	browser.webRequest.onBeforeSendHeaders.addListener(details => {
		console.log(details);

		const url = new URL(details.url);

		let hasReferer = false;
		let hasOrigin = false;

		for (const header of details.requestHeaders) {
			const index = details.requestHeaders.findIndex(h => h.name === header.name);
			if (header.name === 'Referer') {
				details.requestHeaders[index].value = url.origin;
				hasReferer = true;
			}
			if (header.name === 'Origin') {
				details.requestHeaders[index].value = url.origin;
				hasOrigin = true;
			}
		}

		!hasReferer && details.requestHeaders.push({
			name: 'Referer',
			value: url.origin,
		});

		!hasOrigin && details.requestHeaders.push({
			name: 'Origin',
			value: url.origin,
		});

		return { requestHeaders: details.requestHeaders };
	}, {
		urls: [
			'*://*.mp4upload.com/*.mp4',
		],
	}, opt_extraInfoSpec);


	browser.webRequest.onBeforeSendHeaders.addListener(details => {
		if (details.tabId !== -1) return;

		console.log(details);

		const url = new URL(details.url);

		let hasReferer = false;
		let hasOrigin = false;

		for (const header of details.requestHeaders) {
			const index = details.requestHeaders.findIndex(h => h.name === header.name);
			if (header.name === 'Referer') {
				details.requestHeaders[index].value = url.origin;
				hasReferer = true;
			}
			if (header.name === 'Origin') {
				details.requestHeaders[index].value = url.origin;
				hasOrigin = true;
			}
			if (header.name === 'Cookie')
				details.requestHeaders.splice(index, 1);
		}

		!hasReferer && details.requestHeaders.push({
			name: 'Referer',
			value: url.origin,
		});

		!hasOrigin && details.requestHeaders.push({
			name: 'Origin',
			value: url.origin,
		});

		console.log(details.requestHeaders);

		return { requestHeaders: details.requestHeaders };
	}, {
		urls: [
			'*://*.novelplanet.me/api/*',
		],
	}, opt_extraInfoSpec);

	/**
	 * For use with the hydraX server Idk how to go about this without
	 * asking for "https://*.monster/" permission. If I ask for this
	 * permission it will prompt the user that the extension will
	 * have access to all sites the user visits which is something
	 * I want to avoid.
	 */

	/* browser.webRequest.onBeforeSendHeaders.addListener(details => {
		console.log(details);

		const url = new URL(details.url);

		let hasReferer = false;

		for (const header of details.requestHeaders) {
			const index = details.requestHeaders.findIndex(h => h.name === header.name);
			if (header.name === 'Referer') {
				details.requestHeaders[index].value = url.searchParams.get('ref');
				hasReferer = true;
			}
		}

		!hasReferer && details.requestHeaders.push({
			name: 'Referer',
			value: url.searchParams.get('ref'),
		});

		console.log(details.requestHeaders);

		return { requestHeaders: details.requestHeaders };
	}, {
		urls: [
			'https://*.monster/',
		],
	}, opt_extraInfoSpec); */
}
