/* global iziToast */

if (new URL(window.location.href).searchParams.has('__cf_chl_jschl_tk__')) {
	/* We don't want the url with the unwanted params to appear in the history */
	window.history.replaceState({}, '', window.location.href.replace(/(\?|\&)__cf_chl_jschl_tk__\=([^&]+)/, ''));
	setTimeout(() => window.location.reload(), 100);
}

/* == Toast Defaults == */

iziToast.settings({
	theme: 'dark',
	timeout: 1e4,
	position: 'topCenter',
	resetOnHover: true,
	displayMode: 2,
	overlayColor: 'rgba(0, 0, 0, 0.8)',
});

/* == On Document Ready == */

$(document).ready(async () => {
	/**
	 * Clean up leftover space if the user is blocking ads.
	 * Setting the height of these elements to 0 instead of removing
	 * since kissanime likes to check if the ads exist or are visible.
	 */

	const ads = [
		'#divAds2',
		'#adsIfrme1',
		'#adsIfrme6',
		'#divFloatLeft',
	];

	let closeButtonHidden = false;

	for (const ad of ads) {
		$(`${ad} iframe, iframe${ad}`).on('load', function load() {
			const loaded = Boolean(this.contentWindow.document.querySelector('iframe'));
			Utils.isDev && console.debug(`Ad ${ad} loaded: ${loaded}`, this);
			if (!loaded) {
				if (!closeButtonHidden) {
					Utils.inject.style('.divCloseBut { display: none !important }');
					closeButtonHidden = true;
				}
				$(`${ad} iframe, iframe${ad}`).height(0);
				$('#adsIfrme7').remove();
				$('#centerDivVideo').parent().find('.clear2').hide(); // eslint-disable-line
				$('#centerDivVideo').css('margin-top', '15px');
			}
		});
	}

	/* Storage */

	const storageSync = await browser.storage.sync.get(config.defaultOptions);

	/* Version Number (global:version_number) */

	if ($('#containerRoot').length) {
		$('body').append(`
			<div id="version">
				Essentials for KissAnime Version:
				<a href="${config.endpoints.URL_CHANGELOG}" target="_blank" rel="noreferrer">
					${Utils.manifest.version_name}
				</a>
			</div>
		`);
	}

	/* Options Page Link (global:options_link) */

	$('#navsubbar p').append(' | <a id="extOptions">Extension Options</a>');
	$('#extOptions').click(() => browser.runtime.sendMessage({ type: 'options' }));

	/* == Extension Features/Options == */

	/* Hide Comment Sections (global:comments) */

	if (!storageSync.enableComments) {
		$('#disqus_thread').closest('.bigBarContainer').remove();
	}

	/* Slim Header (global:slim_header) */

	if (storageSync.enableSlimHeader) {
		$('#result_box').next().remove();

		Utils.inject.script(() => {
			$('#imgSearch').off('click').click(() => {
				if (!$('#keyword').val().trim().length)
					window.location = '/AdvanceSearch';
				else if ($('#keyword').val().trim().length < 2) {
					$('#keyword').blur();
					window.alert('Keyword must be more than one character!'); // eslint-disable-line
				} else {
					$('#formSearch').attr('action', '/Search/Anime');
					$('#formSearch').submit();
				}
			});
			$('input#keyword').prop('placeholder', 'Search while empty for advance search.');
		});
	}

});

/* == Dev Tools (dev:tools) == */

$(document).ready(() => {
	if (Utils.isDev) {
		/* == Reload button for development == */
		$('body').append('<button id="reload-extension">Reload Extension</button>');
		$('#reload-extension').click(() => {
			browser.runtime.sendMessage({ type: 'reload' }).then(() => {
				setTimeout(() => window.location.reload(), 500);
			});
		});

	}
});
