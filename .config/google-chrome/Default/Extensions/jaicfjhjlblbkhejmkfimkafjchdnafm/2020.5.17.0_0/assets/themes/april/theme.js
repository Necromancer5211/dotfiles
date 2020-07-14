$(document).ready(() => {
	// Don't run on the video page.
	if (/^\/Anime\/.+\/.+$/i.test(window.location.pathname)) return;

	const effects = [
		{
			className: 'april-grayscale',
			chance: 20,
		},
		{
			className: 'april-blur',
			chance: 20,
		},
		{
			className: 'april-tilt',
			chance: 25,
		},
		{
			className: 'april-tilt-1',
			chance: 25,
		},
		{
			className: 'april-skew',
			chance: 15,
		},
		{
			className: 'april-skew-1',
			chance: 15,
		},
		{
			className: 'april-text-direction',
			chance: 5,
		},
		{
			className: 'april-flip',
			chance: 10,
		},
		{
			className: 'april-flip-1',
			chance: 10,
		},
	];

	const targets = [
		'html',
		'#head > h1',
		'#topHolderBox',
		'#search',
		'#headnav',
		'#navsubbar',
		// '#leftside',
		// '#rightside',
		'#cycle-alerts',
		'#seasons-list',
		'#pinned-list',
		'#watch-history',
		'.rightBox',
		'.bigBarContainer',
		'.details',
	];

	const randomTarget = () => {
		for (let i = 0; i < 10; i++) {
			const nodes = document.querySelectorAll(targets[~~(Math.random() * targets.length)]);
			if (nodes.length) {
				const node = nodes[~~(Math.random() * nodes.length)];
				if (node.dataset.april) continue;
				node.dataset.april = 1;
				return node;
			}
		}
	};

	setTimeout(() => {
		for (const effect of effects) {
			const shouldRun = ~~(Math.random() * 100) < effect.chance;
			if (!shouldRun) continue;
			const target = randomTarget();
			if (!target) continue;
			console.log('Effect', effect.className, target);
			target.classList.add(effect.className);
		}
	}, 1000);

});
