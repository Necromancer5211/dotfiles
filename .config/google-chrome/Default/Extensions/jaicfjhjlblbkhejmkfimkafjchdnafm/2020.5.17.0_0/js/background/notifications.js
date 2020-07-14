{
	const notifications = new Map();

	class Notification { // eslint-disable-line
		constructor(msg, subMsg, sticky = false, onClick) {
			this.id = Utils.uuid();
			this.content = {
				type: 'basic',
				title: 'Essentials for KissAnime',
				message: msg,
				iconUrl: 'notification.png',
			};

			/* Firefox does not support "requireInteraction" */
			if (!Utils.isFirefox)
				this.content.requireInteraction = sticky;

			/* Firefox does not have contentMessage support yet. */
			if (typeof subMsg === 'string') {
				if (Utils.isFirefox)
					this.content.message += `\n${subMsg}`;
				else
					this.content.contextMessage = subMsg;
			}

			browser.notifications.create(this.id, this.content).then(() => {
				notifications.set(this.id, onClick);
			});
		}

		update(options) {
			browser.notifications.update(this.id, options);
		}

		clear(timeout = 0) {
			setTimeout(() => browser.notifications.clear(this.id), timeout);
		}
	}

	browser.notifications.onClicked.addListener(id => {
		const notification = notifications.get(id);
		if (typeof notification === 'string')
			browser.tabs.create({ url: notifications.get(id) });
		else if (typeof notification === 'function')
			notification();
		browser.notifications.clear(id);
	});

	browser.notifications.onClosed.addListener(id => {
		notifications.delete(id);
	});

	/* Globals */

	window.Notification = Notification;
}
