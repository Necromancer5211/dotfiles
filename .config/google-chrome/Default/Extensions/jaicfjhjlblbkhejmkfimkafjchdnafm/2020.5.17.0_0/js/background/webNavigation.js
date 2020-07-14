/* global storage */

{
	const getBase64 = url => { // eslint-disable-line
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.addEventListener('load', () => {
				const canvas = document.createElement('canvas');
				canvas.width = image.width;
				canvas.height = image.height;
				const ctx = canvas.getContext('2d');
				ctx.drawImage(image, 0, 0);
				const dataURL = canvas.toDataURL('image/png');
				return resolve(dataURL);
			});
			image.addEventListener('error', () => reject());
			image.crossOrigin = 'anonymous';
			image.src = url;
		});
	};

	/* I hate this but I can't think of a better way to do it. */
	const buildCustomScheme = async url => {
		console.time('customScheme');

		const { customScheme, enableAltLatest } = storage.sync;

		let css = '';

		/* Global Background */

		if (customScheme.bgType === 'color' && customScheme.bgColor) {
			css += `
				html,
				#containerRoot {
					background: ${customScheme.bgColor} !important;
				}
			`;
		} else if (customScheme.bgType === 'image' && customScheme.bgImage) {
			css += `
				html,
				body,
				#containerRoot {
					background:
						linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
						url(${customScheme.bgImage});
					background-size: cover;
					background-attachment: fixed;
					background-repeat: no-repeat;
					background-position: ${customScheme.bgImagePosX || 'left'} ${customScheme.bgImagePosY || 'top'};
				}
			`;
		}

		/* Global User Box */

		if (customScheme.userBoxBGColor) {
			css += `
				#topHolderBox {
					background: ${customScheme.userBoxBGColor} !important;
				}
			`;
		}

		if (customScheme.userBoxTextColor) {
			css += `
				#topHolderBox {
					color: ${customScheme.userBoxTextColor} !important;
				}
			`;
		}

		if (customScheme.userBoxLinkColor) {
			css += `
				#topHolderBox a {
					color: ${customScheme.userBoxLinkColor} !important;
				}
			`;
		}

		if (customScheme.userBoxLinkHoverColor) {
			css += `
				#topHolderBox a:hover {
					color: ${customScheme.userBoxLinkHoverColor} !important;
				}
			`;
		}

		/* Global Navbar */

		if (customScheme.navBGColor) {
			css += `
				#headnav #navbar,
				#search:after {
					background: ${customScheme.navBGColor} !important;
				}
			`;
		}

		if (customScheme.navTabBGColor) {
			css += `
				#headnav #navbar #navcontainer a {
					background: ${customScheme.navTabBGColor} !important;
					border-radius: 6px 6px 0 0;
				}
			`;
		}

		if (customScheme.navTabTextColor) {
			css += `
				#headnav #navbar #navcontainer a {
					color: ${customScheme.navTabTextColor} !important;
				}
			`;
		}

		if (customScheme.navTabActiveBGColor) {
			css += `
				#headnav #navbar #navcontainer #currentTab {
					background: ${customScheme.navTabActiveBGColor} !important;
				}
			`;
		}

		if (customScheme.navTabActiveTextColor) {
			css += `
				#headnav #navbar #navcontainer a#currentTab {
					color: ${customScheme.navTabActiveTextColor} !important;
				}
			`;
		}

		if (customScheme.navTabHoverBGColor) {
			css += `
				 #headnav #navbar #navcontainer a:hover {
					background: ${customScheme.navTabHoverBGColor} !important;
				}
			`;
		}

		if (customScheme.navSubBGColor) {
			css += `
				#headnav #navsubbar {
					background: ${customScheme.navSubBGColor} !important;
				}
			`;
		}

		if (customScheme.navSubLinkColor) {
			css += `
				#headnav #navsubbar a {
					color: ${customScheme.navSubLinkColor} !important;
				}
			`;
		}

		if (customScheme.navSubLinkHoverColor) {
			css += `
				#headnav #navsubbar a:hover {
					color: ${customScheme.navSubLinkHoverColor} !important;
				}
			`;
		}

		/* GLobal Content Boxes */

		if (!/^\/+$/.test(url.pathname) && !/^\/Anime\/.+\/.+$/.test(url.pathname)) {

			if (customScheme.contentBoxBGColor) {
				css += `
					.bigBarContainer,
					.rightBox,
					#divComments {
						background: ${customScheme.contentBoxBGColor} !important;
						border: 1px solid ${customScheme.contentBoxBGColor} !important;
					}

					.bigBarContainer .listing tr.odd {
						background: none !important;
					}

					.bigBarContainer .listing tr:not(.head):nth-child(odd) {
						background: rgba(0, 0, 0, 0.2) !important;
					}

					.barContent,
					.bigBarContainer .alphabet {
						background: none !important;
					}
				`;
			}

			if (customScheme.contentBoxTitleBGColor) {
				css += `
					.barTitle {
						background: ${customScheme.contentBoxTitleBGColor} !important;
					}

					.arrow-general {
						display: none !important;
					}

					.barContent:before {
						content: "";
						display: block;
						width: 0;
						height: 0;
						border-bottom: 12px solid ${customScheme.contentBoxTitleBGColor};
						border-left: 12px solid transparent;
						top: -19px;
						position: relative;
						transform: rotate(45deg);
					}
				`;
			}

			if (customScheme.contentBoxTitleTextColor) {
				css += `
					.barTitle {
						color: ${customScheme.contentBoxTitleTextColor} !important;
					}
				`;
			}

			if (customScheme.contentBoxBGHoverColor) {
				css += `

				`;
			}

			if (customScheme.contentBoxTextColor) {
				css += `
					.barContent {
						color: ${customScheme.contentBoxTextColor} !important;
					}
				`;
			}

			if (customScheme.contentBoxLinkColor) {
				css += `
					.barContent a,
					#pinned-toggle span {
						color: ${customScheme.contentBoxLinkColor} !important;
					}
				`;
			}

			if (customScheme.contentBoxLinkHoverColor) {
				css += `
					.barContent a:hover,
					#pinned-toggle span:hover {
						color: ${customScheme.contentBoxLinkHoverColor} !important;
					}
				`;
			}

			if (customScheme.contenetBoxLinkVisitedColor) {
				css += `
					.barContent a:visited {
						color: ${customScheme.contenetBoxLinkVisitedColor} !important;
					}
				`;
			}

		}

		/* Global Footer */

		if (customScheme.footerBGColor) {
			css += `
				#footer {
					background: ${customScheme.footerBGColor} !important;
				}
			`;
		}

		if (customScheme.footerTextColor) {
			css += `
				#footer *:not(a) {
					color: ${customScheme.footerTextColor} !important;
				}
			`;
		}

		if (customScheme.footerLinkColor) {
			css += `
				#footer a {
					color: ${customScheme.footerLinkColor} !important;
				}

				#footer a:hover {
					color: #ff9600 !important;
				}
			`;
		}

		if (customScheme.footerLinkHoverColor) {
			css += `
				#footer a:hover {
					color: ${customScheme.footerLinkHoverColor} !important;
				}
			`;
		}

		/* Homepage Banner */

		if (customScheme.bannerBGColor) {
			css += `
				.banner,
				#cycle-alerts {
					background: ${customScheme.bannerBGColor} !important;
					border: 1px solid ${customScheme.bannerBGColor} !important;
				}
			`;
		}

		if (customScheme.bannerTextColor) {
			css += `
				.banner *,
				#cycle-alerts {
					color: ${customScheme.bannerTextColor} !important;
				}

				.banner a {
					color: var(--link-color) !important;
				}

				.banner a:hover {
					color: var(--link-hover-color) !important;
				}
			`;
		}

		if (customScheme.bannerLinkColor) {
			css += `
				.banner a,
				#cycle-alerts a {
					color: ${customScheme.bannerLinkColor} !important;
				}

				.banner a:hover {
					color: var(--link-hover-color) !important;
				}
			`;
		}

		if (customScheme.bannerLinkHoverColor) {
			css += `
				.banner a:hover,
				#cycle-alerts a:hover {
					color: ${customScheme.bannerLinkHoverColor} !important;
				}
			`;
		}

		/* Homepage Season List */

		if (customScheme.seasonBoxBGColor) {
			css += `
				#seasons-list {
					background: ${customScheme.seasonBoxBGColor} !important;
					border: 1px solid ${customScheme.seasonBoxBGColor} !important;
				}

				#seasons-list .barContent {
					background: transparent !important;
				}
			`;
		}

		if (customScheme.seasonBoxTitleBGColor) {
			css += `
				#seasons-list .barTitle {
					background: ${customScheme.seasonBoxTitleBGColor} !important;
				}

				#seasons-list .arrow-general {
					display: none !important;
				}

				#seasons-list .barContent:before {
					content: "";
					display: block;
					width: 0;
					height: 0;
					border-bottom: 12px solid ${customScheme.seasonBoxTitleBGColor};
					border-left: 12px solid transparent;
					top: -19px;
					position: relative;
					transform: rotate(45deg);
				}
			`;
		}

		if (customScheme.seasonBoxTitleTextColor) {
			css += `
				#seasons-list .barTitle {
					color: ${customScheme.seasonBoxTitleTextColor} !important;
				}
			`;
		}

		if (customScheme.seasonBoxNyaColor) {
			css += `
				#seasons-list #color-box-container .nya:before {
					background: ${customScheme.seasonBoxNyaColor} !important;
				}

				#seasons-list .season-entry .nya {
					color: ${customScheme.seasonBoxNyaColor} !important;
				}
			`;
		}

		if (customScheme.seasonBoxAiringColor) {
			css += `
				#seasons-list #color-box-container .airing:before {
					background: ${customScheme.seasonBoxAiringColor} !important;
				}

				#seasons-list .season-entry .airing {
					color: ${customScheme.seasonBoxAiringColor} !important;
				}
			`;
		}

		if (customScheme.seasonBoxCompletedColor) {
			css += `
				#seasons-list #color-box-container .completed:before {
					background: ${customScheme.seasonBoxCompletedColor} !important;
				}

				#seasons-list .season-entry .completed {
					color: ${customScheme.seasonBoxCompletedColor} !important;
				}
			`;
		}

		if (customScheme.seasonBoxTextColor) {
			css += `
				#seasons-list .barContent {
					color: ${customScheme.seasonBoxTextColor} !important;
				}
			`;
		}

		if (customScheme.seasonBoxLinkColor) {
			css += `
				#seasons-list .barContent a:not(.nya):not(.airing):not(.completed) {
					color: ${customScheme.seasonBoxLinkColor} !important;
				}

				#seasons-list .barContent a:hover {
					color: var(--link-hover-color) !important;
				}
			`;
		}

		if (customScheme.seasonBoxLinkHoverColor) {
			css += `
				#seasons-list .barContent a:hover {
					color: ${customScheme.seasonBoxLinkHoverColor} !important;
				}
			`;
		}

		/* Homepage Pinned List */

		if (customScheme.pinnedBoxBGColor) {
			css += `
				#pinned-list {
					background: ${customScheme.pinnedBoxBGColor} !important;
					border: 1px solid ${customScheme.pinnedBoxBGColor} !important;
				}

				#pinned-list .barContent {
					background: transparent !important;
				}
			`;
		}

		if (customScheme.pinnedBoxTitleBGColor) {
			css += `
				#pinned-list .barTitle {
					background: ${customScheme.pinnedBoxTitleBGColor} !important;
				}

				#pinned-list .arrow-general {
					display: none !important;
				}

				#pinned-list .barContent:before {
					content: "";
					display: block;
					width: 0;
					height: 0;
					border-bottom: 12px solid ${customScheme.pinnedBoxTitleBGColor};
					border-left: 12px solid transparent;
					top: -19px;
					position: relative;
					transform: rotate(45deg);
				}
			`;
		}

		if (customScheme.pinnedBoxTitleTextColor) {
			css += `
				#pinned-list .barTitle {
					color: ${customScheme.pinnedBoxTitleTextColor} !important;
				}
			`;
		}

		if (customScheme.pinnedBoxTextColor) {
			css += `
				#pinned-list .barContent .info {
					color: ${customScheme.pinnedBoxTextColor} !important;
				}
			`;
		}

		if (customScheme.pinnedBoxLinkColor) {
			css += `
				#pinned-list .barContent a {
					color: ${customScheme.pinnedBoxLinkColor} !important;
				}

				#pinned-list .barContent a:hover {
					color: var(--link-hover-color) !important;
				}
			`;
		}

		if (customScheme.pinnedBoxLinkHoverColor) {
			css += `
				#pinned-list .barContent a:hover {
					color: ${customScheme.pinnedBoxLinkHoverColor} !important;
				}
			`;
		}

		/* Homepage Watch History */

		if (customScheme.watchHistoryBGColor) {
			css += `
				#watch-history {
					background: ${customScheme.watchHistoryBGColor} !important;
					border: 1px solid ${customScheme.watchHistoryBGColor} !important;
				}

				#watch-history .barContent {
					background: transparent !important;
				}
			`;
		}

		if (customScheme.watchHistoryTitleBGColor) {
			css += `
				#watch-history .barTitle {
					background: ${customScheme.watchHistoryTitleBGColor} !important;
				}

				#watch-history .arrow-general {
					display: none !important;
				}

				#watch-history .barContent:before {
					content: "";
					display: block;
					width: 0;
					height: 0;
					border-bottom: 12px solid ${customScheme.watchHistoryTitleBGColor};
					border-left: 12px solid transparent;
					top: -19px;
					position: relative;
					transform: rotate(45deg);
				}
			`;
		}

		if (customScheme.watchHistoryTitleTextColor) {
			css += `
				#watch-history .barTitle {
					color: ${customScheme.watchHistoryTitleTextColor} !important;
				}
			`;
		}

		if (customScheme.watchHistoryTextColor) {
			css += `
				#watch-history .barContent .info {
					color: ${customScheme.watchHistoryTextColor} !important;
				}
			`;
		}

		if (customScheme.watchHistoryLinkColor) {
			css += `
				#watch-history .barContent a {
					color: ${customScheme.watchHistoryLinkColor} !important;
				}

				#watch-history .barContent a:hover {
					color: var(--link-hover-color) !important;
				}
			`;
		}

		if (customScheme.watchHistoryLinkHoverColor) {
			css += `
				#watch-history .barContent a:hover {
					color: ${customScheme.watchHistoryLinkHoverColor} !important;
				}
			`;
		}

		/* Need to do this check here since these ids/classes are used outside of the homepage */
		if (/^\/+$/.test(url.pathname)) {

			/* Homepage Latest Update */

			// Long boi selector
			const latestRoot = '.bigBarContainer:not(#watch-history):not(#pinned-list)';

			if (customScheme.latestBGColor) {
				css += `
					${latestRoot} {
						background: ${customScheme.latestBGColor} !important;
						border: 1px solid ${customScheme.latestBGColor} !important;
					}

					${latestRoot} .barContent {
						background: transparent !important;
					}
				`;
			}

			if (customScheme.latestBGColor && enableAltLatest) {
				css += `
					${latestRoot} .listing tr:nth-child(odd) {
						background: rgba(0, 0, 0, 0.2) !important;
					}
				`;
			}

			if (customScheme.latestTitleBGColor) {
				css += `
					${latestRoot} .barTitle {
						background: ${customScheme.latestTitleBGColor} !important;
					}

					${latestRoot} .arrow-general {
						display: none !important;
					}

					${latestRoot} .barContent:before {
						content: "";
						display: block;
						width: 0;
						height: 0;
						border-bottom: 12px solid ${customScheme.latestTitleBGColor};
						border-left: 12px solid transparent;
						top: -19px;
						position: relative;
						transform: rotate(45deg);
					}

					${latestRoot} .barTitle .next,
					${latestRoot} .barTitle .prev {
							border-radius: 6px;
					}
				`;
			}

			if (customScheme.latestTitleTextColor) {
				css += `
					${latestRoot} .barTitle * {
						color: ${customScheme.latestTitleTextColor} !important;
					}
				`;
			}

			if (customScheme.latestTextColor) {
				css += `
					${latestRoot} .barContent *:not(a) {
						color: ${customScheme.latestTextColor} !important;
					}
				`;
			}

			if (customScheme.latestLinkColor) {
				css += `
					${latestRoot} .barContent a {
						color: ${customScheme.latestLinkColor} !important;
					}

					${latestRoot} .barContent a:hover {
						color: var(--link-hover-color) !important;
					}
				`;
			}

			if (customScheme.latestLinkHoverColor) {
				css += `
					${latestRoot} .barContent a:hover {
						color: ${customScheme.latestLinkHoverColor} !important;
					}
				`;
			}

			/* Homepage Right Boxes */

			const rightBoxRoot = '.rightBox:not(#seasons-list):not(#pinned-list)';

			if (customScheme.rightBoxBGColor) {
				css += `
					${rightBoxRoot} {
						background: ${customScheme.rightBoxBGColor} !important;
						border: 1px solid ${customScheme.rightBoxBGColor} !important;
					}

					${rightBoxRoot} .barContent {
						background: transparent !important;
					}
				`;
			}

			if (customScheme.rightBoxTitleBGColor) {
				css += `
					${rightBoxRoot} .barTitle {
						background: ${customScheme.rightBoxTitleBGColor} !important;
					}

					${rightBoxRoot} .arrow-general {
						display: none !important;
					}

					${rightBoxRoot} .barContent:before {
						content: "";
						display: block;
						width: 0;
						height: 0;
						border-bottom: 12px solid ${customScheme.rightBoxTitleBGColor};
						border-left: 12px solid transparent;
						top: -19px;
						position: relative;
						transform: rotate(45deg);
					}
				`;
			}

			if (customScheme.rightBoxTitleTextColor) {
				css += `
					${rightBoxRoot} .barTitle {
						color: ${customScheme.rightBoxTitleTextColor} !important;
					}
				`;
			}

			if (customScheme.rightBoxTextColor) {
				css += `
					${rightBoxRoot} .barContent *:not(a) {
						color: ${customScheme.rightBoxTextColor} !important;
					}
				`;
			}

			if (customScheme.rightBoxLinkColor) {
				css += `
					${rightBoxRoot} .barContent a:not(.textDark) {
						color: ${customScheme.rightBoxLinkColor} !important;
					}

					${rightBoxRoot} .barContent a:hover {
						color: var(--link-hover-color) !important;
					}
				`;
			}

			if (customScheme.rightBoxLinkHoverColor) {
				css += `
					${rightBoxRoot} .barContent a:hover {
						color: ${customScheme.rightBoxLinkHoverColor} !important;
					}
				`;
			}

			/* Homepage Sub Content */

			if (customScheme.subContentTabActiveBGColor) {
				css += `
					#tabmenucontainer .tabactive {
						background: ${customScheme.subContentTabActiveBGColor} !important;
						border-radius: 6px 6px 0 0;
						width: 123px !important;
						margin-right: 2px !important;
					}
				`;
			}

			if (customScheme.subContentTabActiveTextColor) {
				css += `
					#tabmenucontainer .tabactive  {
						color: ${customScheme.subContentTabActiveTextColor} !important;
					}
				`;
			}

			if (customScheme.subContentTabBGColor) {
				css += `
					#tabmenucontainer a {
						background: ${customScheme.subContentTabBGColor} !important;
						border-radius: 6px 6px 0 0;
						width: 123px !important;
						margin-right: 2px !important;
					}
				`;
			}

			if (customScheme.subContentTabTextColor) {
				css += `
					#tabmenucontainer a {
						color: ${customScheme.subContentTabTextColor} !important;
					}
				`;
			}

			if (customScheme.subContentTabHoverBGColor) {
				css += `
					#tabmenucontainer a:hover {
						background: ${customScheme.subContentTabHoverBGColor} !important;
						border-radius: 6px 6px 0 0;
						width: 123px !important;
						margin-right: 2px !important;
					}
				`;
			}

			if (customScheme.subContentBGColor) {
				css += `
					#subcontent div div:not(.blue) {
						background: ${customScheme.subContentBGColor} !important;
					}

					#subcontent div div:not(.blue) div {
						background: none !important;
					}

					#subcontent {
						background: none !important;
						border: 1px solid ${customScheme.subContentBGColor} !important;
					}
				`;
			}

			if (customScheme.subContentBG2Color) {
				css += `
					#subcontent div div.blue {
						background: ${customScheme.subContentBG2Color} !important;
					}

					#subcontent div div.blue div {
						background: none !important;
					}
				`;
			}

			if (customScheme.subContentTextColor) {
				css += `
					#subcontent .info {
						color: ${customScheme.subContentTextColor} !important;
					}
				`;
			}

			if (customScheme.subContentLinkColor) {
				css += `
					#subcontent a,
					#subcontent .title {
						color: ${customScheme.subContentLinkColor} !important;
					}

					#subcontent a:hover,
					#subcontent .title:hover {
						color: var(--link-hover-color) !important;
					}
				`;
			}

			if (customScheme.subContentLinkHoverColor) {
				css += `
					#subcontent a:hover,
					#subcontent .title:hover {
						color: ${customScheme.subContentLinkHoverColor} !important;
					}
				`;
			}

		}

		if (/^\/Anime\/.+\/.+$/.test(url.pathname)) {

			/* Videopage Container */

			if (customScheme.videoContainerBGColor) {
				css += `
					.bigBarContainer, .barContent {
						background: ${customScheme.videoContainerBGColor} !important;
						border: 1px solid ${customScheme.videoContainerBGColor} !important;
					}
				`;
			}

			if (customScheme.videoContainerTextColor) {
				css += `
					.barContent {
						color: ${customScheme.videoContainerTextColor} !important;
					}
				`;
			}

			if (customScheme.videoContainerLinkColor) {
				css += `
					.barContent a:not(.plyr__control),
					#containerRoot > div > a[href="#"]:not(#btnShowComments) {
						color: ${customScheme.videoContainerLinkColor} !important;
					}
				`;
			}

			if (customScheme.videoContainerLinkHoverColor) {
				css += `
					.barContent a:not(.plyr__control):hover,
					#containerRoot > div > a[href="#"]:not(#btnShowComments):hover {
						color: ${customScheme.videoContainerLinkHoverColor} !important;
					}
				`;
			}

			/* Video Player */

			if (customScheme.videoPlayerPlayColor) {
				css += `
					.plyr .plyr__control--overlaid {
						color: ${customScheme.videoPlayerPlayColor};
					}
				`;
			}

			if (customScheme.videoPlayerPlayBGColor) {
				css += `
					.plyr .plyr__control--overlaid {
						background: ${customScheme.videoPlayerPlayBGColor};
					}
				`;
			}

			if (customScheme.videoPlayerPlayBGHoverColor) {
				css += `
					.plyr .plyr__control--overlaid:hover {
						background: ${customScheme.videoPlayerPlayBGHoverColor};
					}
				`;
			}

			if (customScheme.videoPlayerIconsColor) {
				css += `
					.plyr .plyr__controls .plyr__control > i,
					.plyr .plyr__controls .plyr__control > svg {
						color: ${customScheme.videoPlayerIconsColor};
					}
				`;
			}

			if (customScheme.videoPlayerIconsHoverColor) {
				css += `
					.plyr .plyr__controls > .plyr__control:hover,
					.plyr .plyr__controls > .plyr__controls__item > .plyr__control:hover {
						background: ${customScheme.videoPlayerIconsHoverColor};
					}
				`;
			}

			if (customScheme.videoPlayerSeekColor) {
				css += `
					.plyr .plyr__progress .plyr__progress__buffer {
						background-color: ${customScheme.videoPlayerSeekColor};
					}
				`;
			}

			if (customScheme.videoPlayerSeekProgressColor) {
				css += `
					.plyr .plyr__progress input[type="range"]::-webkit-slider-runnable-track {
						color: ${customScheme.videoPlayerSeekProgressColor};
					}

					.plyr .plyr__progress input[type="range"]::-moz-range-progress {
						color: ${customScheme.videoPlayerSeekProgressColor};
					}
				`;
			}

			if (customScheme.videoPlayerSeekHandleColor) {
				css += `
					.plyr .plyr__progress input[type="range"]::-webkit-slider-thumb {
						background: ${customScheme.videoPlayerSeekHandleColor};
					}

					.plyr .plyr__progress input[type="range"]::-moz-range-thumb {
						background: ${customScheme.videoPlayerSeekHandleColor};
					}
				`;
			}

			if (customScheme.videoPlayerTextColor) {
				css += `
					.plyr .plyr__controls .plyr__time {
						color: ${customScheme.videoPlayerTextColor}
					}
				`;
			}

			if (customScheme.videoPlayerVolColor) {
				css += `
					.plyr .plyr__volume input[type="range"]:before {
						content: "";
						display: flex;
						position: absolute;
						top: 7px;
						width: 100%;
						height: 5px;
						background: ${customScheme.videoPlayerVolColor};
						border-radius: 26px;
						z-index: -1;
					}

					.plyr .plyr__volume input[type="range"]::-moz-range-track {
						background: ${customScheme.videoPlayerVolColor};
					}
				`;
			}

			if (customScheme.videoPlayerVolProgressColor) {
				css += `
					.plyr .plyr__volume input[type="range"]::-webkit-slider-runnable-track {
						color: ${customScheme.videoPlayerVolProgressColor};
					}

					.plyr .plyr__volume input[type="range"]::-moz-range-progress {
						background: ${customScheme.videoPlayerVolProgressColor};
					}
				`;
			}

			if (customScheme.videoPlayerVolHandleColor) {
				css += `
					.plyr .plyr__volume input[type="range"]::-webkit-slider-thumb {
						background: ${customScheme.videoPlayerVolHandleColor};
					}

					.plyr .plyr__volume input[type="range"]::-moz-range-thumb {
						background: ${customScheme.videoPlayerVolHandleColor};
					}
				`;
			}

		}

		css = css.replace(/[\t\n]/g, '');

		console.timeEnd('customScheme');

		return css;
	};

	browser.webNavigation.onCommitted.addListener(async details => {
		if (details.frameId !== 0) return;

		console.time('webNavigation');

		const url = new URL(details.url);

		console.groupCollapsed(`webNavigation (${url.href})`);
		console.log(details);
		console.groupEnd();

		/* Minimal Theme (global:minmal) */

		if (storage.sync.enableMinimal) {
			await browser.tabs.insertCSS(details.tabId, {
				file: '/assets/fonts/Roboto/font.css',
				runAt: 'document_start',
			});

			await browser.tabs.insertCSS(details.tabId, {
				file: '/assets/css/minimal-theme.css',
				runAt: 'document_start',
			});
		}

		/* Custom Header Logo (global:custom_logo) */

		if (storage.sync.enableCustomLogo) {

			if (storage.sync.customLogo.logo === 'custom') {

				if (storage.sync.customLogo.userImage) {

					const { hideTemplate } = storage.sync.customLogo;

					const template = await getBase64(browser.extension.getURL('/assets/images/logos/template.webp'));

					try {
						const image = await getBase64(storage.sync.customLogo.userImage);
						browser.tabs.insertCSS(details.tabId, {
							code: `
						#head .logo { width: 400px !important; }
						#head > h1 {
							background-image: ${hideTemplate ? '' : `url(${template}),`} url(${image}) !important;
							background-position: ${hideTemplate ? '' : 'center left,'} ${storage.sync.customLogo.left}% ${storage.sync.customLogo.top}% !important;
							background-size: ${hideTemplate ? '' : 'auto,'} auto ${storage.sync.customLogo.size}% !important;
							background-color: transparent !important;
							background-repeat: no-repeat !important;
						}
					`,
							runAt: 'document_start',
						});
					} catch (err) { }

				}

			} else if (storage.sync.customLogo.logo !== 'default') {

				const logo = await getBase64(browser.extension.getURL(`/assets/images/logos/${storage.sync.customLogo.logo}.webp`));

				browser.tabs.insertCSS(details.tabId, {
					code: `
					#head > h1 {
						background-image: url(${logo}) !important;
						background-color: transparent !important;
						background-repeat: no-repeat !important;
					}
				`,
					runAt: 'document_start',
				});

			}

		}

		/* Slim Header (global:slim_header) */

		if (storage.sync.enableSlimHeader) {
			browser.tabs.insertCSS(details.tabId, {
				file: '/assets/css/slim-header.css',
				runAt: 'document_start',
			});

			if (!storage.sync.enableCustomLogo) {
				const logo = await getBase64(browser.extension.getURL('/assets/images/logos/logo-min.webp'));
				browser.tabs.insertCSS(details.tabId, {
					code: `#head > h1 {background: transparent url(${logo}) no-repeat !important}`,
					runAt: 'document_start',
				});
			}
		}

		/* Hide Comment Sections (global:comments) */

		if (!storage.sync.enableComments) {
			browser.tabs.insertCSS(details.tabId, {
				file: '/assets/css/hide-comments.css',
				runAt: 'document_start',
			});
		}

		/* Hide Footer (global:footer) */

		if (!storage.sync.enableFooter) {
			browser.tabs.insertCSS(details.tabId, {
				file: '/assets/css/hide-footer.css',
				runAt: 'document_start',
			});
		}

		/* == Home Page == */

		if (/^\/+$/.test(url.pathname)) {

			/* Hide Banner (homepage:banner) */

			if (!storage.sync.enableBanner) {
				browser.tabs.insertCSS(details.tabId, {
					file: '/assets/css/hide-banner.css',
					runAt: 'document_start',
				});
			}

		}

		/* == Video Page == */

		if (/\/Anime\/.+\/.+/.test(url.pathname)) {

			if (storage.sync.enableCustomPlayer) {

				/* Custom Player (videopage:custom_player) */

				browser.tabs.insertCSS(details.tabId, {
					file: '/assets/css/custom-player.css',
					runAt: 'document_start',
				});

				/* Theater Mode (videopage:theater_mode) */

				if (storage.sync.enableTheater) {
					browser.tabs.insertCSS(details.tabId, {
						file: '/assets/css/theater.css',
						runAt: 'document_start',
					});
				}

				/* Auto Fullscreen (videopage:auto_fullscreen) */

				if (storage.sync.enableAutoFullscreen) {
					browser.tabs.insertCSS(details.tabId, {
						file: '/assets/css/auto-fullscreen.css',
						runAt: 'document_start',
					});
				}

			}

			/* Hide Lights Switch (videopage:lights) */

			if (!storage.sync.enableLights) {
				browser.tabs.insertCSS(details.tabId, {
					file: '/assets/css/hide-lights-toggle.css',
					runAt: 'document_start',
				});
			}

			/* Hide Bookmark Button (videopage:bookmark) */

			if (!storage.sync.enableBookmark) {
				browser.tabs.insertCSS(details.tabId, {
					file: '/assets/css/hide-bookmark-toggle.css',
					runAt: 'document_start',
				});
			}

		}

		/* == Custom Scheme (global:custom_scheme) == */

		if (storage.sync.enableCustomScheme) {

			const css = await buildCustomScheme(url);

			browser.tabs.insertCSS(details.tabId, {
				code: css,
				runAt: 'document_start',
			});

		}

		if (storage.sync.enableSeasonalThemes) {
			const activeTheme = config.seasonalThemes[window.activeTheme];
			if (activeTheme && activeTheme.css) {
				browser.tabs.insertCSS(details.tabId, {
					file: `/assets/themes/${window.activeTheme}/theme.css`,
					runAt: 'document_start',
				});
			}
			if (activeTheme && activeTheme.js) {
				browser.tabs.executeScript(details.tabId, {
					file: `/assets/themes/${window.activeTheme}/theme.js`,
					runAt: 'document_start',
				});
			}
		}

		console.timeEnd('webNavigation');
	}, {
		url: [
			{ hostSuffix: 'kissanime.ru' },
		],
	});
}
