/* global DOMPurify LZString */

{
	/* == Utils == */

	class Utils {
		static compress(data = '') {
			if (typeof data === 'object')
				data = JSON.stringify(data);
			return LZString.compressToUTF16(data);
		}

		static decompress(data, defaultValue = '') {
			data = LZString.decompressFromUTF16(data);
			try {
				data = JSON.parse(data);
			} catch (err) {}
			return data || defaultValue;
		}

		static clone(object) {
			return JSON.parse(JSON.stringify(object));
		}

		static versionCompare(a, b) {
			/* https://github.com/substack/semver-compare */
			const pa = a.split('.');
			const pb = b.split('.');
			for (let i = 0; i < 3; i++) {
				const na = Number(pa[i]);
				const nb = Number(pb[i]);
				if (na > nb) return 1;
				if (nb > na) return -1;
				if (!isNaN(na) && isNaN(nb)) return 1;
				if (isNaN(na) && !isNaN(nb)) return -1;
			}
			return 0;
		}

		static isObject(obj) {
			return !Array.isArray(obj) && typeof obj === 'object' && obj !== null;
		}

		static saveToFile(filename, data) {
			if (typeof data === 'object')
				data = JSON.stringify(data, null, '\t');
			const blob = new Blob([data], { type: 'octet/stream' });
			const el = document.createElement('a');
			el.download = filename;
			el.href = URL.createObjectURL(blob);
			el.click();
		}

		static sanitizeHtml(data) {
			return DOMPurify.sanitize(data);
		}

		static waitFor(target, time = 1e4) {
			/* Probably not the best way but it works ¯\_(ツ)_/¯ */
			let timeout;
			return new Promise(resolve => {
				const interval = setInterval(() => {
					const el = document.querySelector(target);
					if (el) {
						clearInterval(interval);
						clearTimeout(timeout);
						return resolve(el);
					}
				}, 100);
				timeout = setTimeout(() => clearInterval(interval), time);
			});
		}

		static uuid() {
			// https://stackoverflow.com/a/2117523
			return (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`).replace(/[018]/g, c =>
				(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); // eslint-disable-line
		}

		static get inject() {
			const target = document.head || document.body || document.documentElement || document;
			return {
				script: func => {
					const script = document.createElement('script');
					script.appendChild(document.createTextNode(`(${func})();`));
					target.appendChild(script);
					target.removeChild(script); // Once it executes we don't need to keep the script element.
				},
				scriptSrc: src => {
					const script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = src;
					target.appendChild(script);
				},
				style: styles => {
					const style = document.createElement('style');
					style.textContent = styles;
					target.appendChild(style);
				},
				styleSrc: href => {
					const link = document.createElement('link');
					link.rel = 'stylesheet';
					link.type = 'text/css';
					link.href = href;
					target.appendChild(link);
				},
			};
		}

		static get isFirefox() {
			return typeof InstallTrigger !== 'undefined';
		}

		static get isDev() {
			return Boolean(browser.runtime.getManifest().dev);
		}

		static get manifest() {
			return browser.runtime.getManifest();
		}
	}

	/* == Dialog == */

	class Dialog { // eslint-disable-line
		constructor(options) {
			if (!Utils.isObject(options))
				throw new Error('Value passed is not a valid object.');


			this.options = Object.assign({
				target: null,
				id: null,
				title: '&nbsp;',
				body: '',
				appendTo: 'body',
				draggable: true,
				backdrop: false,
				closeButton: true,
				width: '500px',
				height: 'auto',
				onShow: null,
				onClose: null,
			}, options);

			if (this.options.target === null) {
				this.element = document.createElement('div');
				this.element.classList.add('dialog');

				this.element.style.width = this.options.width;
				this.element.style.height = this.options.height;

				if (this.options.id)
					this.element.id = this.options.id;

				if (this.options.backdrop) {
					this.backdrop = document.createElement('div');
					this.backdrop.classList.add('dialog-background');
					document.querySelector(this.options.appendTo).append(this.backdrop);
					this.backdrop.addEventListener('click', () => this.hide());
				}

				const dialogTitle = document.createElement('div');

				dialogTitle.classList.add('dialog-title');
				dialogTitle.innerHTML = this.options.title;

				if (this.options.closeButton) {
					const dialogClose = document.createElement('i');
					dialogClose.addEventListener('click', e => {
						e.preventDefault();
						this.hide();
					});
					dialogClose.classList.add('fas', 'fa-times-circle', 'dialog-close');
					dialogTitle.append(dialogClose);
				}

				this.element.append(dialogTitle);

				const dialogContent = document.createElement('div');

				dialogContent.classList.add('dialog-content');
				dialogContent.innerHTML = this.options.body;

				this.element.append(dialogContent);

				document.querySelector(this.options.appendTo).append(this.element);
			} else {
				this.element = document.querySelector(this.options.target);

				if (!this.element)
					throw new Error('Invalid Selector!');

				if (this.element.querySelector('.dialog-close')) {
					this.element.querySelector('.dialog-close').addEventListener('click', e => {
						e.preventDefault();
						this.hide();
					});
				}
			}

			if (this.options.draggable) {
				const dragElement = this.options.title
					? this.element.querySelector('.dialog-title')
					: this.element;

				dragElement.style.cursor = 'move';

				let pos1 = 0;
				let pos2 = 0;
				let pos3 = 0;
				let pos4 = 0;

				const elementDrag = e => {
					e.preventDefault();

					pos1 = pos3 - e.clientX;
					pos2 = pos4 - e.clientY;

					pos3 = e.clientX;
					pos4 = e.clientY;

					const rect = this.element.getBoundingClientRect();

					if (
						(e.movementX < 0 && rect.left > 0) ||
						(e.movementX > 0 && rect.left + rect.width < document.body.offsetWidth)
					) {
						this.element.style.left = `${this.element.offsetLeft - pos1}px`;
					}

					if (
						(e.movementY < 0 && rect.top > 0) ||
						(e.movementY > 0 && rect.top + rect.height < document.body.offsetHeight)
					) {
						this.element.style.top = `${this.element.offsetTop - pos2}px`;
					}
				};

				const closeDragElement = () => {
					document.removeEventListener('mouseup', closeDragElement);
					document.removeEventListener('mousemove', elementDrag);
				};

				dragElement.addEventListener('mousedown', e => {
					e.preventDefault();
					pos3 = e.clientX;
					pos4 = e.clientY;
					document.addEventListener('mouseup', closeDragElement);
					document.addEventListener('mousemove', elementDrag);
				});
			}

			this.events = {
				show: new Event('show'),
				hide: new Event('hide'),
			};

			if (typeof this.options.onShow === 'function')
				this.element.addEventListener('show', this.options.onShow.bind(this));

			if (typeof this.options.onClose === 'function')
				this.element.addEventListener('hide', this.options.onClose.bind(this));
		}

		get visible() {
			return Boolean(this.element.offsetHeight);
		}

		show() {
			// this.element.style.top = `calc(${window.scrollY}px + 50%)`;
			this.element.style.top = `50%`;
			if (this.backdrop) {
				// document.documentElement.style.overflow = 'hidden';
				this.backdrop.style.display = 'block';
			}
			this.element.style.display = 'block';
			this.element.dispatchEvent(this.events.show);
		}

		hide() {
			if (this.backdrop) {
				// document.documentElement.style.overflow = '';
				this.backdrop.style.display = 'none';
			}
			this.element.style.display = 'none';
			this.element.dispatchEvent(this.events.hide);
		}

		toggle() {
			this.visible ? this.hide() : this.show();
		}

		destroy() {
			if (this.backdrop)
				this.backdrop.remove();
			this.element.remove();
		}
	}

	/* == Misc jQuery Methods == */

	if (window.$) {
		$.fn.scrollView = function scrollView(offset) {
			let top;
			this.each((index, element) => {
				if (offset)
					top = $(element).offset().top + offset;
				else
					top = $(element).offset().top;
				$('html, body').stop().animate({ scrollTop: top }, 1000);
			});
		};

		$.fn.centerView = function centerView() {
			const windowHeight = $(window).height();
			const elOffset = $(this).offset().top;
			const elHeight = $(this).height();
			const offset = elOffset - ((windowHeight - elHeight) / 2);
			$('html, body').scrollView(offset);
		};
	}

	/* == Console Styling == */

	const getContrastYIQ = hexcolor => {
		hexcolor = hexcolor.replace('#', '');
		const r = parseInt(hexcolor.substr(0, 2), 16);
		const g = parseInt(hexcolor.substr(2, 2), 16);
		const b = parseInt(hexcolor.substr(4, 2), 16);
		const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
		return (yiq >= 128) ? 'black' : 'white';
	};

	console._s = (type = 'solo', color = '#35495e') => {
		switch (type) {
			case 'start':
				type = '3px 0 0 3px';
				break;
			case 'middle':
				type = '0';
				break;
			case 'end':
				type = '0 3px 3px 0';
				break;
			default:
				type = '3px';
		}

		switch (color) {
			case 1:
				color = '#35495e';
				break;
			case 2:
				color = '#008b8b';
				break;
			case 3:
				color = '#287594';
				break;
		}

		return `color: ${getContrastYIQ(color)}; background: ${color}; padding: 1px; font-size: 13px; border-radius: ${type};`;
	};

	const consoleMethods = [
		{ name: 'log', label: 'ℹ️' },
		{ name: 'error', label: '❌' },
		{ name: 'debug', label: '🛠' },
	];

	for (const method of consoleMethods) {
		console[`_${method.name}`] = console[method.name];
		console[method.name] = console[`_${method.name}`]
			.bind(console, `%c ${method.label} %c KissEssentials `, console._s('start', 1), console._s('end', 3));
	}

	/* == Globals == */

	window.Utils = Utils;
	window.Dialog = Dialog;
}
