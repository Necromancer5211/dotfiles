/* eslint-disable no-use-before-define */
/* global Vue iziToast Plyr Mousetrap Dialog AnilistAnime KitsuAnime myPlayer */

let player;
let audioPlayer;
let savedTime = 0;

$(document).ready(async () => {

	const storageSync = await browser.storage.sync.get(config.defaultOptions);

	/* Current URL */
	const url = new URL(window.location.href);
	url.searchParams.delete('s');

	Object.defineProperty(url, 'fullPath', {
		get() { return this.pathname + this.search; },
	});

	/* Variables */
	const title = $('#navsubbar a:first-child').text().replace(/(^\s+anime|information$)/gi, '').trim(); // eslint-disable-line
	const synopsisPath = url.pathname.substring(url.pathname.lastIndexOf('/'), 0);
	const episodeLabel = $('#selectEpisode option:selected').text().trim();
	const episode = parseFloat(episodeLabel.replace(/\D+/g, ''));
	const poster = $('link[rel="image_src"]').attr('href').replace(/^http(s)?:/, '');
	const previousEp = $('#btnPrevious')[0];
	const nextEp = $('#btnNext')[0];

	/* Custom Player (videopage:custom_player) */

	if (storageSync.enableCustomPlayer) {

		/* Create Loading Element */
		$('#centerDivVideo').append(`
			<div id="loading-video">
				<div>
					<div class="loading-pulse"></div>
					<div class="loading-pulse-text">Loading Video...</div>
				</div>
			</div>
		`);

		/* Create Lights Off Element */

		$('body').append('<div id="lights"></div>');

		/* Watch History */

		if (storageSync.enableHistory) {
			try {
				const storedInfo = storageSync.history.find(item => (item.episode === episodeLabel && item.path === url.fullPath));
				if (storedInfo)
					savedTime = storedInfo.time;
			} catch (error) {} // eslint-disable-line
		}

		/* If time parameter is set, we will use this as the player time. Has priority over what is stored in the watch history */

		if (url.searchParams.has('time')) {
			savedTime = parseFloat(url.searchParams.get('time')) || 0;
			url.searchParams.delete('time');
			history.pushState('', document.title, url.href);
		}

		/* Origins that the extension supports */

		const supportedOrigins = [
			'http://kissanime.ru',
			'https://kissanime.ru',
			'https://www.rapidvideo.com',
			'https://www.rapidvid.to',
			'https://www.mp4upload.com',
			'https://openload.co',
			'https://streamango.com',
			'https://www.novelplanet.me',
			// 'https://replay.watch'
		];

		if ($('#my_video_1_html5_api').length) {

			if ($('#selectPlayer').val() === 'flash') return;

			Utils.inject.script(() => {

				if (myPlayer) {
					myPlayer.off('click');
					myPlayer.off('volumechange');
					myPlayer.off('loadedmetadata');
					myPlayer.off('error');
					// myPlayer.dispose();
				}

				let sources = [{
					src: $('#my_video_1_html5_api').attr('src'),
					type: 'video/mp4',
				}];

				const audio = $('#my_audio_1 audio').length
					? $('#my_audio_1 audio').attr('src')
					: false;

				if ($('#divQuality select option').length) {
					try {
						sources = Array.from($('#divQuality select option')).map(q => {
							let src = window.ovelWrap(q.value);
							if (/m3u8/i.test(src))
								src = `${src}&identity=${window.domainTls}&ext=.m3u8`;
							return {
								src,
								type: 'video/mp4',
								size: parseInt(q.textContent.replace(/p$/, ''), 10),
							};
						});
					} catch (err) {
						console.error('Could not get qualities', err);
					}
				}

				parent.postMessage({
					type: 'source',
					sources,
					audio,
				}, window.location.origin);

			});

			window.addEventListener('message', e => {

				if (!supportedOrigins.includes(e.origin) || e.data.type !== 'source') return;

				console.log(e);

				createPlayer(e.data, e.origin);

			});

		} else if ($('#divVideo iframe').length) {

			const iFrame = $('#divVideo iframe')[0];

			if (!iFrame || !iFrame.src) {
				return fallback(true);
			}

			const iFrameURL = new URL(iFrame.src);

			if (iFrameURL.hostname === 'www.novelplanet.me') {

				const videoID = iFrame.src.replace(/.+\/v\//, '');

				browser.runtime.sendMessage({
					type: 'request',
					data: {
						url: `https://www.novelplanet.me/api/source/${videoID}`,
						method: 'POST',
						data: { r: window.location.href, d: 'www.novelplanet.me' },
					},
				}).then(res => {
					if (res.success) {
						if (!res.data.success)
							return fallback();

						const sources = res.data.data.map(q => ({
							src: q.file,
							type: 'video/mp4',
							size: q.label.replace(/p$/, ''),
						}));
						createPlayer({ sources }, iFrameURL.origin);
					} else {
						fallback();
					}
				});

			} else if (supportedOrigins.includes(iFrameURL.origin)) {

				const timeout = setTimeout(() => fallback(true), 10000);

				window.addEventListener('message', e => {
					if (!supportedOrigins.includes(e.origin) || !['source', 'hydraX'].includes(e.data.type)) return;

					if (e.data.error) {
						return fallback(true);
					}

					clearTimeout(timeout);

					console.log('message', e);

					if (!player) {
						createPlayer(e.data, e.origin);
					}
				});

			} else {
				iziToast.info({
					title: 'Essentials for KissAnime',
					message: 'Custom player not loaded. This host is currently not supported. Falling back to the default player.',
					timeout: 15000,
				});
				return fallback(true);
			}

		} else {
			fallback();
		}

		async function createPlayer(data) {

			const isHLS = /m3u8/i.test(data.sources[0].src);

			/**
			 * I can't get hls to work on firefox so for now
			 * we're just gonna fallback to the default player.
			 */
			if (isHLS && Utils.isFirefox) {
				iziToast.info({
					title: 'Essentials for KissAnime',
					message: 'The beta5/beta6 host is currently not supported on firefox. Falling back to the default player.',
					timeout: 15000,
				});
				return fallback();
			}

			console.log(data);

			$('#divMyVideo').remove();
			$('#divVideo').empty();

			$('#loading-video').remove();

			/* Create new player */

			$('#divVideo').append(`
				<video id="extPlayer" src="${data.sources[0].src}" controls></video>
			`);

			/* Get player node */

			const video = document.getElementById('extPlayer');

			/* Create sources */

			for (const source of data.sources) {
				$('#extPlayer').append(`<source src="${source.src}" type="${source.type}" size="${source.size}">`);
			}

			/* For some reason the svg never loads on firefox so doing it myself */

			let svg = JSON.parse(localStorage.getItem('plyr-svg-cache'));

			if (!svg) {
				console.log('Setting plyr svg cache');
				svg = await browser.runtime.sendMessage({ type: 'plyr-svg' });
				localStorage.setItem('plyr-svg-cache', JSON.stringify({ data: svg.data }));
			}

			$('body').append(`<div hidden>${svg.data}</div>`);

			/* Init player */

			player = new Plyr(video, {
				loadSprite: false,
				disableContextMenu: false,
				ratio: '16:9',
				autoplay: storageSync.enableAutoPlay,
				volume: 0.5,
				debug: false,
				resetOnEnd: true,
				controls: [
					'play-large',
					'play',
					'progress',
					'current-time',
					'duration',
					'mute',
					'volume',
					'settings',
					'pip',
					'download',
					'airplay',
					'fullscreen',
				],
				speed: {
					selected: 1,
					options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.50, 2.75, 3],
				},
				keyboard: {
					global: false,
					focused: !storageSync.enableShortcuts, // Disable the default shortcuts if we are going to handle them ourselfs
				},
			});

			/* Create hls instance */

			isHLS && createHls(data.sources);

			/* Create separate audio player if required */

			data.audio && createAudioPlayer(data.audio);

			/* On play listener */

			player.on('play', () => {
				player.status.set('Playing');

				if (audioPlayer)
					audioPlayer.play();
			});

			/* On pause listener */

			player.on('pause', () => {
				player.status.set('Paused');

				if (audioPlayer)
					audioPlayer.pause();
			});

			/* Saves current time in the case that the player is reloaded */

			player.on('timeupdate', () => {
				if (player.duration !== 0 && player.currentTime > 1)
					savedTime = player.currentTime;

				if (audioPlayer) {
					const allowedOffset = parseFloat((player.speed * 0.15).toFixed(2));

					if (
						player.currentTime - audioPlayer.currentTime >= allowedOffset ||
						player.currentTime - audioPlayer.currentTime <= -allowedOffset
					) {
						console.log(`Current offset ${allowedOffset}`);
						console.log(`Syncing video and audio. Out of sync by ${player.currentTime - audioPlayer.currentTime}`);
						audioPlayer.currentTime = player.currentTime;
					}
				}
			});

			/* Sets the current time to whatever is saved */

			player.once('canplay', () => {
				if (savedTime)
					player.currentTime = savedTime;
			});

			/* Volume on Scroll */

			if (storageSync.enableVolumeScroll) {
				player.elements.container.addEventListener('wheel', () => {
					event.deltaY < 0
						? player.increaseVolume(0.05)
						: player.decreaseVolume(0.05);
					event.preventDefault();
				}, { passive: false });
			}

			/* Volume change event */

			player.on('volumechange', () => {
				player.status.set(`Volume: ${Math.round(player.volume * 100)}`);

				if (audioPlayer)
					audioPlayer.volume = player.volume;
			});

			/* Playback rate */

			player.on('ratechange', () => {
				player.status.set(`Playback Rate: ${player.speed}x`);

				if (audioPlayer) {
					audioPlayer.playbackRate = player.speed;
					audioPlayer.currentTime = player.currentTime;
				}
			});

			let errorCount = 0;
			const maxErrors = 150;

			player.on('error', () => {
				if (errorCount <= maxErrors) {
					player.status.set(`Retrying: ${errorCount}/${maxErrors}`);
					player.media.load();
					errorCount++;
				}
			});

			player.on('loadedmetadata', () => {
				errorCount = 0;
			});

			/* Screenshot Button */

			$('.plyr__control[data-plyr="fullscreen"]').before(`
				<a id="screenshot" class="plyr__control">
					<i class="fas fa-camera"></i>
				</a>
			`);

			$('#screenshot').click(() => {
				player.pause();

				const screenshotDialog = new Dialog({
					id: 'screenshot-dialog',
					title: 'Screenshot (Right click to save!)',
					width: '600px',
					body: `
						<label style="margin-bottom: 5px;">
							<input type="checkbox"> Trim top of image to remove KissAnime watermark.
						</label>
						<canvas id="screenshot-canvas"></canvas>
						<style>
							#screenshot-dialog label {
								padding-bottom: 5px;
								display: block;
								text-align: center;
							}
							#screenshot-dialog label input {
								vertical-align: middle;
							}
							#screenshot-dialog canvas {
								width: 100%;
							}
						</style>
					`,
					draggable: false,
					backdrop: true,
					onClose() {
						this.destroy();
					},
				});

				const canvas = document.getElementById('screenshot-canvas');
				const context = canvas.getContext('2d');

				canvas.width = player.media.videoWidth;
				canvas.height = player.media.videoHeight;

				context.drawImage(player.media, 0, 0, canvas.width, canvas.height);

				$('#screenshot-dialog input').click(function click() {
					const offset = this.checked ? 35 : 0;
					canvas.width = player.media.videoWidth;
					canvas.height = player.media.videoHeight - offset;
					context.drawImage(player.media, 0, 0 - offset, canvas.width, canvas.height + offset);
				});

				screenshotDialog.show();

				// const dataURL = canvas.toDataURL('image/png');
				// this.href = dataURL;
				// this.download = `${title.toLowerCase().replace(/\s/g, '_')}_episode_${episode}_${Date.now()}.png`;
			});

			/* Player toast container */

			$(player.elements.container).append(`<div class="plyr__toast"></div>`);

			// Don't want double clicks to toggle fullscreen.
			$('.plyr__toast').dblclick(e => e.stopPropagation());

			/* Custom playback rate */

			player.customSpeed = () => iziToast.info({
				title: 'Set playback speed',
				target: '.plyr__toast',
				timeout: 0,
				drag: false,
				inputs: [
					[`<input type="number" value="${player.speed}" step="0.1">`, 'input', (_, __, input) => {
						player.speed = parseFloat(input.value);
						player.status.set(`Playback Rate: ${player.speed}x`);
					}, true],
				],
			});

			$('[data-plyr="speed"]:first-child').before(`
				<button
					id="plyr-custom-pbr"
					role="menuitemradio"
					data-plyr="speed"
					type="button"
					class="plyr__control">
					<span>Custom</span>
				</button>
			`);

			$('#plyr-custom-pbr').click(() => {
				player.customSpeed();
				$('.plyr__control--back:first-child').click();
			});

			player.on('ratechange', () => {
				const { speed } = player;
				if (player.options.speed.includes(speed)) {
					$('#plyr-custom-pbr').text('Custom');
				} else {
					/* Bleh */
					$('[data-plyr="speed"]').attr('aria-checked', false);
					$('#plyr-custom-pbr').attr('aria-checked', true).text(`Custom ${speed}×`);
					$('.plyr__control--forward:last-child .plyr__menu__value').text(`${speed}×`);
				}
			});

			/* Lights Button */

			if (storageSync.enableLights) {
				$('.plyr__control[data-plyr="fullscreen"]').before(`
					<button id="lights-toggle" class="plyr__control">
						<i class="far fa-lightbulb"></i>
					</button>
				`);

				$('#lights-toggle').click(() => $('#lights').stop().fadeToggle());
				$('#lights').click(() => $('#lights').fadeOut());
			}

			/* Status Method */

			const statusElement = document.createElement('div');
			statusElement.classList.add('plyr__status-text');
			player.elements.container.append(statusElement);

			player.status = {
				timeout: null,
				set(msg, time = 3000) {
					clearTimeout(player.status.timeout);
					$(statusElement).text(msg).fadeIn(250);
					player.status.timeout = setTimeout(() => {
						$(statusElement).fadeOut(250, () => {
							$(statusElement).text('');
						});
					}, time);
				},
				clear() {
					clearTimeout(player.status.timeout);
					$(statusElement).fadeOut(250, () => {
						$(statusElement).text('');
					});
				},
			};

			/* Init Video Player */

			initVideoPage();

		}

		function createHls(sources) {
			let hls;

			const updateHls = () => {
				sources.forEach(source => {
					if (source.size === player.config.quality.selected) {
						if (hls) hls.destroy();
						hls = new Hls(); // eslint-disable-line
						hls.attachMedia(player.media);
						hls.loadSource(source.src);
						player.play();
					}
				});
			};

			updateHls();

			player.on('qualitychange', () => updateHls());
		}

		function createAudioPlayer(src) {
			console.log('Creating audio player.');

			if (audioPlayer) {
				audioPlayer.pause();
				audioPlayer = null;
			}

			audioPlayer = document.createElement('audio');
			audioPlayer.src = src;
			audioPlayer.volume = player.volume || 0.5;
			audioPlayer.style.display = 'none';
		}

		function fallback(iFrame = false) {
			if (!iFrame) $('#divQuality').addClass('show');
			$('#divMyVideo, #switch').show();
			$('#loading-video').remove();
			Mousetrap.pause();
			storageSync.enableCustomPlayer = false;
			initVideoPage();
		}

	} else {
		initVideoPage();
	}

	function initVideoPage() {

		/* Cursor Methods */

		const cursor = {
			overVideo: false,
			timeout: null,
			videoOnly: true,
			init(videoOnly = true) {
				this.videoOnly = videoOnly;
				document.body.style.cursor = 'default';

				$(player.media)
					.on('mouseenter', () => this.overVideo = true)
					.on('mouseleave', () => this.overVideo = false);

				document.addEventListener('mousemove', () => {
					this.show();
					if (!this.overVideo && this.videoOnly) return;
					this.timeout = setTimeout(() => {
						!player.paused && this.hide();
					}, 2000);
				});

				player.on('play', () => this.hide());
				player.on('pause', () => this.show());
			},
			hide() {
				document.body.style.cursor = 'none';
			},
			show() {
				clearTimeout(this.timeout);
				document.body.style.cursor = 'default';
			},
		};

		/* Center video on load (videopage:center_video) */

		if (storageSync.enableCenterVideo) {
			setTimeout(() => $('#centerDivVideo').centerView(), 500);
		}

		/* Auto Fullscreen (videopage:auto_fullscreen) */

		if (storageSync.enableAutoFullscreen) {

			$('#centerDivVideo').after(`
				<div style="margin-top:10px">
					<a id="scroll-to-video" href="javascript:void(0)">(Scroll to Video)</a>
				</div>
			`);

			$('#scroll-to-video').click(() => $('#divVideo').scrollView());

			if (storageSync.enableCustomPlayer) {

				player.on('playing', () => $(player.media).scrollView());

				cursor.init(false);

			}

		}

		if (storageSync.enableCustomPlayer) {

			/* Auto Skip OP/ED BETA (videopage:auto_skip) */

			if (storageSync.enableAutoSkip) {

				browser.runtime.sendMessage({ type: 'auto-skip', path: url.fullPath }).then(res => {

					if (!res.success) return;

					player.on('timeupdate', () => {

						if (player.currentTime > res.data.opStart && player.currentTime < res.data.opEnd) {
							player.currentTime = res.data.opEnd;
						}

						if (player.currentTime > res.data.edStart && player.currentTime < res.data.edEnd) {
							player.currentTime = res.data.edEnd;
						}

					});

				}).catch(console.error);

			}

			/* Pause on Tab Switch (videopage:pause_tab_switch) */

			if (storageSync.enableAutoPause) {

				// const hiddenProps = ['hidden', 'webkitHidden'];

				document.addEventListener('visibilitychange', () => {
					if (document.hidden) {
						player.pause();
					}
				}, false);

			}

			/* Auto Advance to next episode (videopage:auto_advance) */

			if (storageSync.enableAutoAdvance) {
				player.on('ended', () => {
					if (nextEp) {
						nextEp.click();
					}
				});
			}

			/* Stretch video to fit player (videopage:stretch_video) */

			if (storageSync.enableStretch) {

				$(player.media).css('object-fit', 'fill');

			}

			/* Theater Mode (videopage:theater_mode) */

			if (storageSync.enableTheater) {

				if (storageSync.enableTheaterBacklight) {

					$('.bigBarContainer').prepend('<canvas id="backgroud-canvas"></canvas>');

					const canvas = $('#backgroud-canvas')[0];
					const context = canvas.getContext('2d');

					canvas.width = canvas.clientWidth;
					canvas.height = canvas.clientHeight;

					$(canvas).hide(); // Hiding once we get its dimensions until it's needed again.

					function loop() {
						if (player.paused || player.ended) return;
						context.drawImage(player.media, 0, 0, canvas.width, canvas.height);
						requestAnimationFrame(loop);
					}

					player.on('playing', () => {
						$('#backgroud-canvas').stop().fadeIn(400);
						$('body').css('overflow', 'hidden');
						loop();
					});

					player.on('pause', () => {
						$('body').css('overflow', 'initial');
						$('#backgroud-canvas').stop().fadeOut(400);
					});

					cursor.init(false);

				} else {

					player.on('pause', () => $('#lights').stop().fadeOut(400));

					cursor.init(true);

				}

				player.on('playing', () => {
					$(player.media).centerView();

					if (!storageSync.enableTheaterBacklight) {
						$('#lights').stop().fadeIn(400);
					}
				});

				$(window).resize(() => $(player.media).centerView());

			}

			/* Keyboard Shortcuts (videopage:shortcuts) */

			if (storageSync.enableShortcuts) {

				/* Create dialog for shortcuts */

				$('body').append(`
					<div id="shortcuts-dialog" class="dialog">
						<div class="dialog-title">
							Keyboard Shortcuts
							<i class="fas fa-times-circle dialog-close"></i>
						</div>
						<div class="dialog-content">
							<p v-if="active" id="shortcut-notice">
								Press the new key you want to bind this shortcut to. Press Esc to cancel.
							</p>
							<div id="shortcut-keys">
								<div v-for="(label, shortcut) of labels">
									<div>
										<button
											class="key"
											:data-set="Boolean(shortcuts[shortcut]).toString()"
											@click="changeShortcut(shortcut)">
											{{ shortcuts[shortcut] || 'Not Set' }}
										</button>
									</div>
									<div>{{ label }}</div>
								</div>
							</div>
							<div v-if="hasChanges" style="text-align: center; margin: 10px 0;">
								<button class="key" @click="resetShortcuts">Reset Defaults</button>
							</div>
							<hr>
							<p>
								<label>
									<input type="checkbox" v-model="showHint">&nbsp;
									Show Keyboard Shortcuts hint on page load
								</label>
							</p>
							<p>
								<label title="Using the 'Seek forward/back' shortcut will go forward/back this amount.">
									Forward/Back Seek Amount*
									<input ref="test" type="text" id="seek-time-input" data-key="playerSeekTime" :value="playerSeekTime">
								</label>
							</p>
							<p>
								<label title="Using the 'Seek To' shotcut will set the current time exactly to this timestamp.">
									Skip to**
									<input type="text" id="skip-time-input" data-key="playerSkipTime" :value="playerSkipTime">
								</label>
							</p>
							<p>
								<label title="Using the 'Advance amount' shortcut will advance the video this amount.">
									Advance Amount***
									<input ref="test" type="text" id="advance-time-input" data-key="playerAdvanceTime" :value="playerAdvanceTime">
								</label>
							</p>
						</div>
					</div>
				`);

				/* Get Seconds */

				const getSeconds = a => {
					a = a.split(':');
					return (parseInt(a[0], 10) * 60) + parseInt(a[1], 10);
				};

				const shortcuts = {
					help() {
						shortcutsVue.dialog.toggle();
					},
					playPause(e) {
						player.togglePlay();
						e.preventDefault();
					},
					lights() {
						$('#lights').fadeToggle();
					},
					fullscreen() {
						player.fullscreen.toggle();
					},
					customSpeed() {
						player.customSpeed();
					},
					speedDown() {
						if (player.speed <= 0.5)
							return player.speed = 0.5;
						player.speed -= 0.25;
					},
					speedUp() {
						if (player.speed >= 3)
							return player.speed = 3;
						player.speed += 0.25;
					},
					volUp(e) {
						if (player.paused)
							return;
						player.increaseVolume(0.05);
						e.preventDefault();
					},
					volDown(e) {
						if (player.paused)
							return;
						player.decreaseVolume(0.05);
						e.preventDefault();
					},
					toggleMute() {
						player.muted = !player.muted;
					},
					seekBack(e) {
						player.rewind(getSeconds(storageSync.playerSeekTime));
						e.preventDefault();
					},
					seekForward(e) {
						player.forward(getSeconds(storageSync.playerSeekTime));
						e.preventDefault();
					},
					previousEp() {
						if (previousEp)
							previousEp.click();
					},
					nextEp() {
						if (nextEp)
							nextEp.click();
					},
					reload() {
						player.media.load();
						player.once('canplay', () => {
							if (savedTime)
								player.currentTime = savedTime;
							player.play();
						});
					},
					skip() {
						player.currentTime = getSeconds(storageSync.playerSkipTime);
					},
					advance() {
						player.forward(getSeconds(storageSync.playerAdvanceTime));
					},
				};

				const shortcutsVue = new Vue({
					el: '#shortcuts-dialog',
					data() {
						return {
							labels: {
								help: 'Open/Close this dialog',
								playPause: 'Toggle play/pause',
								lights: 'Toggle lights',
								fullscreen: 'Toggle fullscreen',
								customSpeed: 'Custom playback rate',
								speedDown: 'Slow down video',
								speedUp: 'Speed up video',
								toggleMute: 'Toggle mute',
								volUp: 'Volume up',
								volDown: 'Volume down',
								seekBack: 'Seek back*',
								seekForward: 'Seek foward*',
								prevEp: 'Previous episode',
								nextEp: 'Next episode',
								reload: 'Reload video',
								skip: 'Seek to specified time**',
								advance: 'Advance a specified time***',
							},
							shortcuts: storageSync.shortcuts || {},
							playerAdvanceTime: storageSync.playerAdvanceTime,
							playerSkipTime: storageSync.playerSkipTime,
							playerSeekTime: storageSync.playerSeekTime,
							showHint: storageSync.enableShortcutsHint,
							active: false,
						};
					},
					computed: {
						hasChanges() {
							const changes = Object.keys(config.defaultOptions.shortcuts)
								.filter(key => config.defaultOptions.shortcuts[key] !== this.shortcuts[key]);
							return changes.length;
						},
					},
					watch: {
						showHint(value) {
							this.saveOption('enableShortcutsHint', value);
						},
					},
					mounted() {
						const _this = this; // eslint-disable-line

						setTimeout(() => {
							this.showHint &&
							player.status.set(`Keyboard shortcuts enabled. Press ${this.shortcuts.help.toUpperCase()} for a list of shortcuts!`, 5000);
						}, 1000);

						$('#skip-time-input, #advance-time-input, #seek-time-input').inputmask('99:99', {
							oncomplete: function() {
								_this.saveOption(this.dataset.key, this.value);
							},
							onincomplete: function() {
								this.value = this.value.replace(/_/g, '0');
								$(this).trigger('complete');
							},
						});

						this.initDialog();
						this.setBinds();
					},
					methods: {
						initDialog() {
							const _this = this; // eslint-disable-line
							this.dialog = new Dialog({
								target: '#shortcuts-dialog',
								onClose() {
									Mousetrap.stopRecord();
									_this.active = false;
								},
							});
						},
						saveOption(key, value) {
							storageSync[key] = value;
							browser.storage.sync.set({ [key]: value });
						},
						changeShortcut(shortcut) {
							if (this.active)
								Mousetrap.stopRecord();

							this.active = true;
							const currentKey = this.shortcuts[shortcut];

							Mousetrap.record({ recordSequence: false }, sequence => {
								this.active = false;

								let newKey = sequence[0];

								if (newKey === 'esc')
									return;

								if (!newKey)
									return;

								if (newKey === '=')
									newKey = '+';

								const isAssigned = Object.values(this.shortcuts).some(k => k === newKey);

								if (isAssigned) {
									return iziToast.error({
										title: 'Key is already assigned to another shortcut!',
									});
								}

								if (currentKey !== null)
									Mousetrap.unbind(currentKey);
								Mousetrap.bind(newKey, shortcuts[shortcut]);

								if (currentKey === '+')
									Mousetrap.unbind('=');

								if (newKey === '+')
									Mousetrap.bind('=', shortcuts[shortcut]);

								this.shortcuts[shortcut] = newKey;
								storageSync.shortcuts[shortcut] = newKey;

								/**
								 * Ensure we are only storing the shortcuts
								 * that are not the same as the default ones.
								 */
								const newShortcuts = {};
								Object.keys(config.defaultOptions.shortcuts)
									.filter(a => config.defaultOptions.shortcuts[a] !== this.shortcuts[a] &&
										this.shortcuts[a] !== null)
									.forEach(a => newShortcuts[a] = this.shortcuts[a]);

								browser.storage.sync.set({
									shortcuts: Utils.clone(newShortcuts),
								});
							});
						},
						resetShortcuts() {
							browser.storage.sync.remove('shortcuts');
							storageSync.shortcuts = Utils.clone(config.defaultOptions.shortcuts);
							this.shortcuts = storageSync.shortcuts;
							this.setBinds();
						},
						setBinds() {
							Mousetrap.reset();
							const keys = [];
							for (const shortcut in this.shortcuts) {
								if (!shortcuts[shortcut]) continue;
								const key = this.shortcuts[shortcut];
								if (keys.includes(key)) {
									console.warn(`Key '${key}' is already in use. Cannot bind '${shortcut}'.`);
									this.shortcuts[shortcut] = null;
									continue;
								}
								keys.push(key);
								Mousetrap.bind(key, shortcuts[shortcut]);
								if (key === '+')
									Mousetrap.bind('=', shortcuts[shortcut]);
							}
						},
					},
				});

			}

			/* AnimeList Integration (videopage:anilist_integration) */

			if (storageSync.enableKitsu || storageSync.enableAniList) {
				$.ajax(window.location.origin + synopsisPath).then(async response => {
					/* Get anime titles from synopsis page so we can attempt to find this anime entry */

					const dom = new DOMParser().parseFromString(Utils.sanitizeHtml(response), 'text/html');
					const animeTitles = Array.from($('span:contains("Other name:")', dom)
						.parent().find('a')).map(el => el.textContent.trim());

					/* Helpers */

					const getTime = seconds => {
						const a = Math.floor(seconds / 60);
						const b = Math.floor(seconds % 60);
						return `${a}:${b < 10 ? `0${b}` : b}`;
					};

					const anilist = {
						api: new AnilistAnime(animeTitles, synopsisPath),
						anime: null,
						canUpdate: false,
						async init() {
							try {
								this.anime = await this.api.fetchAnime();
								this.canUpdate = this.anime && this.anime.mediaListEntry &&
									this.anime.mediaListEntry.status !== 'COMPLETED' &&
									this.anime.mediaListEntry.progress < episode;
							} catch (error) {
								console.error('anilist', error);
							}
						},
						async update() {
							if (this.canUpdate) {
								await this.api.update('progress', episode)
									.then(() => {
										iziToast.success({
											title: `Anilist episode updated! (${this.anime.mediaListEntry.progress} 🡒 ${episode})`,
											target: '.plyr__toast',
										});
									})
									.catch(error => {
										iziToast.error({
											title: 'Could not update anilist entry. Check the console for more info.',
											target: '.plyr__toast',
										});
										console.error('anilist update', error);
									});
							}
						},
					};

					const kitsu = {
						api: new KitsuAnime(animeTitles, synopsisPath),
						entry: null,
						canUpdate: false,
						async init() {
							try {
								if (
									!await this.api.fetchAnime() ||
									!await this.api.fetchUser()
								) return;
								this.entry = await this.api.fetchEntry();
								this.canUpdate = this.entry &&
									this.entry.status !== 'completed' &&
									this.entry.progress < episode;
							} catch (error) {
								console.error('kitsu', error);
							}
						},
						async update() {
							if (this.canUpdate) {
								await this.api.update('progress', episode)
									.then(() => {
										iziToast.success({
											title: `Kitsu episode updated! (${this.entry.progress} 🡒 ${episode})`,
											target: '.plyr__toast',
										});
									})
									.catch(error => {
										iziToast.error({
											title: 'Could not update kitsu entry. Check the console for more info.',
											target: '.plyr__toast',
										});
										console.error('kitsu update', error);
									});
							}
						},
					};

					const updateToast = () => {
						const messages = [];

						if (anilist.canUpdate)
							messages.push(`(Anilist ${anilist.anime.mediaListEntry.progress} 🡒 ${episode})`);

						if (kitsu.canUpdate)
							messages.push(`(Kitsu ${kitsu.entry.progress} 🡒 ${episode})`);

						if (!messages.length)
							return;

						iziToast.info({
							timeout: 2e4,
							target: '.plyr__toast',
							title: `Update to episode ${episode}? ${messages.join(' ')}`,
							buttons: [
								['<button><b>Update</b></button>', async (instance, toast) => {
									await anilist.update();
									await kitsu.update();
									instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
								}],
								['<button>Cancel</button>', (instance, toast) => {
									instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
								}, true],
							],
						});
					};

					/* Init */

					storageSync.enableAniList && await anilist.init();
					storageSync.enableKitsu && await kitsu.init();

					/* We don't want to continue if we are unable to update anything */

					if (!(anilist.canUpdate || kitsu.canUpdate)) return;

					/* Create countdown */

					$('#navsubbar p').append(`
						<span id="animelist-cd-container">|
							<span style="padding: 0px 7px">
								Time until update: <span id="animelist-cd">N/A</span>
							</span>
						</span>
					`);

					/*  */

					let hasPrompted = false;
					const offset = player.duration < 300 ? 60 : 180;

					player.on('timeupdate', () => {
						if (hasPrompted || player.media.readyState < 3) return;

						const countDown = Math.floor(player.duration - player.currentTime - offset) - 1;

						$('#animelist-cd').text(getTime(countDown));

						if (countDown > 0) return;

						hasPrompted = true;
						updateToast();
						$('#animelist-cd-container').hide();
					});

				}).catch(error => {
					console.error('Unable to auto update anime lists', error);
				});
			}

		}

	}

	/* Window unload handler */
	$(window).on('beforeunload', () => {
		/* Fetching storage again just in case if the values were changed by another page */
		browser.storage.sync.get(config.defaultOptions).then(items => {

			/* History */
			if (storageSync.enableHistory) {

				const info = {
					title, poster,
					path: url.fullPath,
					episode: episodeLabel,
					time: player ? player.currentTime : 0,
				};

				for (const i in items.history) {
					if (items.history[i].title === info.title) {
						items.history.splice(i, 1);
						break;
					}
				}

				if (items.history.length === config.settings.watchHistoryLimit)
					items.history.pop();

				items.history.unshift(info);

				browser.storage.sync.set({ history: items.history });

			}

			/* Can't do anything if our custom player is not loaded */
			if (player) {

				/* Pinned List */
				items.pinnedList = Utils.decompress(items.pinnedList, []);

				/* Pinned List History */
				const pinnedIndex = items.pinnedList.findIndex(a => a.path === synopsisPath);

				if (pinnedIndex > -1) {
					/* Assume they are at the end or have finished the episode */
					if (player.duration - 160 < player.currentTime) {
						const nextEpisode = $('#selectEpisode option:selected').next()[0];
						items.pinnedList[pinnedIndex].history = nextEpisode
							? {
								episode: nextEpisode.innerText.trim(),
								path: `${synopsisPath}/${nextEpisode.value}`,
								continuing: false,
							}
							: null;
						console.log(items.pinnedList[pinnedIndex].history);
					/* Assume they have not finished the episode */
					} else if (!player.ended) {
						url.searchParams.set('time', player.currentTime);
						items.pinnedList[pinnedIndex].history = {
							episode: episodeLabel,
							path: url.fullPath,
							continuing: true,
						};
					}

					browser.storage.sync.set({
						pinnedList: Utils.compress(items.pinnedList),
					});
				}

			}

		}).catch(() => {});

	});

});
