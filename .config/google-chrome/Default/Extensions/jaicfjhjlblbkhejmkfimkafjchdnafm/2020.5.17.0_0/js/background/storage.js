window.storage = {
	local: {},
	sync: {},
};

browser.storage.local.get().then(data => {
	window.storage.local = data;
	console.log('Local Storage:', data);
});

browser.storage.sync.get(config.defaultOptions).then(data => {
	window.storage.sync = data;
	console.log('Sync Storage:', data);
});

browser.storage.onChanged.addListener((changes, namespace) => {
	for (const key in changes) {
		if (!Object.prototype.hasOwnProperty.call(changes, key)) continue;
		if (typeof changes[key].newValue === 'undefined') {
			if (namespace === 'sync' && typeof config.defaultOptions[key] !== 'undefined')
				window.storage[namespace][key] = config.defaultOptions[key];
			else
				delete window.storage[namespace][key];
		} else
			window.storage[namespace][key] = changes[key].newValue;
	}
});
