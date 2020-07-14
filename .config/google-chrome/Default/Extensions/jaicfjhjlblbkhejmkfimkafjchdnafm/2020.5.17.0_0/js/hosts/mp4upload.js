document.addEventListener('DOMContentLoaded', () => {
	if (parent === window) return;

	const checkForSource = setInterval(() => {
		Utils.inject.script(() => {
			if (typeof window.play === 'function')
				window.play();
		});

		const source = document.querySelector('video source');

		if (source && source.src) {
			clearInterval(checkForSource);

			const response = {
				type: 'source',
				sources: [{
					src: source.src,
					type: 'video/mp4',
				}],
			};

			parent.postMessage(response, 'https://kissanime.ru');
			parent.postMessage(response, 'http://kissanime.ru');
		}
	}, 100);

	setTimeout(() => clearInterval(checkForSource), 8000);
});
