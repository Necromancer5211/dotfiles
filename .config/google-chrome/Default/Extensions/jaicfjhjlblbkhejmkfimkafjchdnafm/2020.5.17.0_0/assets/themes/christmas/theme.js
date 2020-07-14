// https://codepen.io/fajjet/pen/JEYYYV

Math.rnd = (min, max) => {
	if (typeof min === 'undefined' || typeof max === 'undefined') {
		return Math.round(Math.random());
	}
	return (min + (Math.random() * (max - min)));
};

Math.toRad = deg => deg * Math.PI / 180;

$(document).ready(() => {
	// Don't run on the video page.
	if (/^\/Anime\/.+\/.+$/i.test(window.location.pathname)) return;

	// Canvas
	const canvas = document.createElement('canvas');

	// Canvas styling
	canvas.style.position = 'fixed';
	canvas.style.top = '0px';
	canvas.style.pointerEvents = 'none';
	canvas.style.zIndex = '9999';

	// Canvas Context
	const ctx = canvas.getContext('2d');

	let width = window.innerWidth;
	let height = window.innerHeight;

	canvas.width = width;
	canvas.height = height;

	const config = {
		minSize: 0.9,
		maxSize: 3,
		speed: 3,
		minSpeed: 1,
		maxSpeed: 10,
		quantity: 2001,
		windSpeed: 0,
		maxWindSpeed: 2,
	};

	const particles = [];

	for (let i = 0; i < config.quantity; i++) {
		particles[i] = [];
		particles[i].size = Math.rnd(config.minSize, config.maxSize);
		particles[i].x = null;
		particles[i].y = null;
		particles[i].rotate = 1;
		particles[i].fillAlpha = Math.rnd(0.5, 1);
		particles[i].translate = 0;
		particles[i].clockwise = Math.rnd();
		particles[i].offsetSpeed = Math.rnd(0, 0.01);
		particles[i].offset = Math.rnd(50, 400);
		particles[i].offsetValue = Math.rnd(0, 1);
		particles[i].offsetStep = 0;
	}

	function particlesAnimation() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < config.quantity; i++) {

			ctx.save();
			const p = particles[i];

			ctx.fillStyle = `rgba(255,255,255,${p.fillAlpha})`;

			if (p.y > height + p.size) {
				p.y = null;
				p.x = null;
				p.translate = 0;
				p.rotate = 0;
			}

			const speed = config.speed / p.size;
			p.translate += speed * config.windSpeed;
			p.rotate += speed;
			p.offsetValue = ((Math.sin(p.offsetStep++ * p.offsetSpeed) + 1) / 2) - 0.5;

			p.x = p.x === null
				? Math.rnd(-width, width * 2)
				: p.x;
			p.y = p.y === null
				? -Math.rnd(p.size, height)
				: p.y + speed;

			ctx.translate(p.translate + p.x + (p.offsetValue * p.offset), p.y);
			ctx.rotate((p.clockwise) ? Math.toRad(p.rotate) : -Math.toRad(p.rotate));

			ctx.fillRect(0, 0, p.size, p.size);
			ctx.restore();

		}

		if (document.hasFocus()) {
			requestAnimationFrame(particlesAnimation);
		}
	}

	// Event Listeners

	window.addEventListener('focus', particlesAnimation);

	window.addEventListener('resize', () => {
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
	}, false);

	window.addEventListener('mousemove', e => {
		const x = e.clientX;
		// const y = e.clientY;

		// const yPercent = (y / height) * 100;
		// config.speed = (config.maxSpeed / 100) * yPercent;
		// if (config.speed < config.minSpeed) config.speed = config.minSpeed;

		const xPercent = ((x / width) * 200) - 100;
		config.windSpeed = -(config.maxWindSpeed / 100) * xPercent;
	}, false);

	// Append canvas to document
	document.body.append(canvas);

	// Init drawing frames
	particlesAnimation();
});
