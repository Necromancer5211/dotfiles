/**
 * This file contians various settings and values used throughout
 * the extension including default storage settings, gql queries,
 * various endpoints and more.
 */

{
	const isDev = Boolean(browser.runtime.getManifest().dev);

	const deepFreeze = o => {
		Object.freeze(o);
		Object.getOwnPropertyNames(o).forEach(prop => {
			if (
				o.hasOwnProperty(prop) &&
				o[prop] !== null &&
				(typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
				!Object.isFrozen(o[prop])
			) {
				deepFreeze(o[prop]);
			}
		});
		return o;
	};

	window.config = deepFreeze({
		endpoints: {
			DISCORD: 'https://discord.gg/G6pRS4b',
			API_GRAPHQL: isDev
				? 'http://ke.waifu.lan/graphql'
				: 'https://ke.pilar.moe/graphql',
			URL_CHANGELOG: 'https://ke.pilar.moe/changelog',
			URL_PRIVACY: 'https://ke.pilar.moe/privacy/extension',
			URL_SUPPORTERS: 'https://ke.pilar.moe/supporters',
		},

		defaultOptions: {
			/* == Global == */
			enableMinimal: true,
			enableCustomLogo: false,
			enableSlimHeader: false,
			enableCustomScheme: false,
			enableComments: true,
			enableFooter: true,
			enableSeasonalThemes: true,
			// enableVideoSync: false,
			// roomPrivate: true,
			// roomName: 'Video Sync Room',
			// patronToken: '',
			/* == Homepage == */
			enableSeasonList: true,
			enableSeasonListShorts: true,
			enableSeasonListDub: false,
			seasonListViewType: 1, // 1 - List View, 2 - Schedule Day View, 3 - Schedule List View
			enablePinned: true,
			enableAltPinned: false,
			enableBanner: true,
			enableAltLatest: false,
			enableOnlyAiring: false,
			/* == Episode List == */
			enableAniList: true,
			enableKitsu: false,
			enableMAL: false,
			enableReddit: true,
			enableTorrents: true,
			enableAltDateFormat: false,
			/* == Bookmarks == */
			enableSortAiring: true,
			/* == Videopage == */
			enableCustomPlayer: true,
			enableHistory: true,
			enableLights: true,
			enableBookmark: true,
			enableAutoAdvance: false,
			enableVolumeScroll: true,
			enableShortcuts: true,
			// enableAutoSkip: false,
			enableAutoFullscreen: false,
			// enableAltVideopage: false,
			enableTheater: false,
			enableTheaterBacklight: false,
			enableAutoPause: false,
			enableStretch: false,
			enableCenterVideo: true,
			enableAutoPlay: true,
			enableShortcutsHint: true,
			playerAdvanceTime: '00:30',
			playerSkipTime: '01:25',
			playerSeekTime: '00:05',
			/* == Containers == */
			shortcuts: {
				help: 'h',
				fullscreen: 'f',
				lights: 'l',
				playPause: 'space',
				customSpeed: '\\',
				speedDown: '-',
				speedUp: '+',
				toggleMute: 'm',
				volUp: 'up',
				volDown: 'down',
				seekBack: 'left',
				seekForward: 'right',
				prevEp: 'b',
				nextEp: 'n',
				reload: 'r',
				skip: 's',
				advance: 'a',
			},
			customLogo: {
				logo: 'default',
				hideTemplate: false,
				userImage: '',
				size: 100,
				top: 0,
				left: 0,
			},
			customScheme: {},
			history: [],
			pinnedList: '',
		},

		defaultLocalOptions: {
			enableOptionsOnUpdate: true,
		},

		optionGroups: [
			{
				label: 'Global',
				icon: 'globe',
				options: [
					{
						key: 'enableMinimal',
						label: 'Minimal Theme',
						tooltip: 'Minimal theme with solid flat colors.',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableComments',
						label: 'Comments',
						tooltip: 'Enable/disable comments from appearing.',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableCustomScheme',
						label: 'Custom Scheme',
						tooltip: 'Change the look and feel of the site to your liking.',
						type: 'toggle',
						namespace: 'sync',
						modal: {
							icon: 'cog',
							key: 'CustomSchemeModal',
						},
					},
					{
						key: 'enableCustomLogo',
						label: 'Custom Logo',
						tooltip: `
							Allows you to change the character that is in the KissAnime logo.
							This option is not compatible with the "Slim Header" option.
						`,
						type: 'toggle',
						namespace: 'sync',
						modal: {
							icon: 'cog',
							key: 'LogoModal',
						},
						incompatible: [
							'enableSlimHeader',
						],
					},
					{
						key: 'enableSlimHeader',
						label: 'Slim Header',
						tooltip: `
							Makes the header smaller and slimmer giving it a more minimal feel.
							This option is not compatible with the "Custom Logo" option.
						`,
						type: 'toggle',
						namespace: 'sync',
						incompatible: [
							'enableCustomLogo',
						],
					},
					{
						key: 'enableSeasonalThemes',
						label: 'Seasonal Themes',
						tooltip: `
							Allow special themes to be applied on the site during certain
							times of the year. This may overwrite other settings (such as
							the custom logo) while enabled.
						`,
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableFooter',
						label: 'Footer',
						tooltip: 'Enable/disable the footer from appearing.',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableHistory',
						label: 'Watch History',
						tooltip: 'Enable/disable your watch history.',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableOptionsOnUpdate',
						label: 'Open Changelog on Update',
						tooltip: 'Opens the options page and displays the changelog when the extension updates.',
						type: 'toggle',
						namespace: 'local',
					},
				],
			},
			{
				label: 'Homepage',
				icon: 'home',
				options: [
					{
						key: 'enableSeasonList',
						label: 'Season List',
						tooltip: 'Displays a list of anime grouped by the season they aired.',
						type: 'toggle',
						namespace: 'sync',
						modal: {
							icon: 'cog',
							key: 'OptionModal',
							options: [
								{
									key: 'enableSeasonListShorts',
									label: 'Show TV Shorts',
									tooltip: `
										Include TV Shorts along with the normal anime.
									`,
									type: 'toggle',
									namespace: 'sync',
								},
								{
									key: 'enableSeasonListDub',
									label: 'Show Dubbed Links',
									tooltip: `
										Display links for the dubbed versions of
										anime (if available) next to the subbed links.
									`,
									type: 'toggle',
									namespace: 'sync',
								},
							],
						},
					},
					{
						key: 'enablePinned',
						label: 'Pinned List',
						tooltip: 'Adds the ablilty to pin anime to the homepage of the site.',
						type: 'toggle',
						namespace: 'sync',
						modal: {
							icon: 'cog',
							key: 'PinnedListModal',
						},
					},
					{
						key: 'enableAltLatest',
						label: 'Alt Latest Update List',
						tooltip: `
							An alternative way of displaying the latest updates.
							Latest updates will be displayed as a list.
						`,
						type: 'toggle',
						namespace: 'sync',
						modal: {
							icon: 'cog',
							key: 'OptionModal',
							options: [
								{
									key: 'enableOnlyAiring',
									label: 'Show only Currently Airing',
									tooltip: `
										Only show anime that is currently airing.
										This option requires that the "Seasons List" option to be enabled.
									`,
									requires: [
										'enableSeasonList',
									],
									type: 'toggle',
									namespace: 'sync',
								},
							],
						},
					},
					{
						key: 'enableBanner',
						label: 'Banner',
						tooltip: 'Enable/disable homepage banner from appearing.',
						type: 'toggle',
						namespace: 'sync',
					},
				],
			},
			{
				label: 'Anime Synopsis',
				icon: 'info',
				options: [
					{
						key: 'enableReddit',
						label: 'Find Reddit Discussions',
						tooltip: 'Enable/disable link that will give you reddit search results for discussions on the current anime you are viewing.',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableTorrents',
						label: 'Find Torrents',
						tooltip: 'Enable/disable link to nyaa.si.',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableAltDateFormat',
						label: 'Alt Date Format',
						tooltip: 'Swaps most if not all date formats on the site from MM/DD/YYYY to DD/MM/YYYY',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableAniList',
						label: 'AniList',
						tooltip: 'Enable/disable AniList support.',
						type: 'toggle',
						namespace: 'sync',
						modal: {
							icon: 'cog',
							key: 'AniListLoginModal',
						},
					},
					{
						key: 'enableKitsu',
						label: 'Kitsu',
						tooltip: 'Enable/disable Kitsu support.',
						type: 'toggle',
						namespace: 'sync',
						modal: {
							icon: 'cog',
							key: 'KitsuLoginModal',
						},
					},
					{
						key: 'enableMAL',
						label: 'MyAnimeList',
						tooltip: 'Enable/disable MyAnimeList support.',
						type: 'toggle',
						namespace: 'sync',
					},
				],
			},
			{
				label: 'Bookmarks',
				icon: 'bookmark',
				options: [
					{
						key: 'enableSortAiring',
						label: 'Move Airing to Top',
						tooltip: 'Move anime that marked as airing to the top of the bookmarks list.',
						type: 'toggle',
						namespace: 'sync',
					},
				],
			},
			{
				label: 'Videopage',
				icon: 'play',
				options: [
					{
						key: 'enableCustomPlayer',
						label: 'Custom Player',
						tooltip: `
							Enable/disable the video player the comes packaged with the extension.
							This player is required for some of the extension's feature to function.
						`,
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableCenterVideo',
						label: 'Center Video on Load',
						tooltip: 'Center video on page load.',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableLights',
						label: 'Lights Toggle',
						tooltip: 'Enable/disable the standard lights on/off toggle that is already a part of the site itself.',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableBookmark',
						label: 'Bookmark Toggle',
						tooltip: 'Enable/disable the bookmarks toggle that appears below the video player when signed into the site.',
						type: 'toggle',
						namespace: 'sync',
					},
					{
						key: 'enableAutoPlay',
						label: 'Autoplay Video on Load',
						tooltip: `
							Auto play the video on page load.
							This feature does not function on firefox.
						`,
						type: 'toggle',
						namespace: 'sync',
						requires: [
							'enableCustomPlayer',
						],
					},
					{
						key: 'enableAutoPause',
						label: 'Pause on Tab Switch',
						tooltip: 'Pause the video when the tab loses focus.',
						type: 'toggle',
						namespace: 'sync',
						requires: [
							'enableCustomPlayer',
						],
					},
					{
						key: 'enableAutoAdvance',
						label: 'Auto Next Episode',
						tooltip: 'Automatically navigate to the next episode (if available) when the current video is has ended.',
						type: 'toggle',
						namespace: 'sync',
						requires: [
							'enableCustomPlayer',
						],
					},
					{
						key: 'enableStretch',
						label: 'Stretch Video to Player',
						tooltip: 'Stretch the video to fit the player container.',
						type: 'toggle',
						namespace: 'sync',
						requires: [
							'enableCustomPlayer',
						],
					},
					{
						key: 'enableVolumeScroll',
						label: 'Adjust Volume on Scroll',
						tooltip: 'Adjust the volume using your scroll wheel.',
						type: 'toggle',
						namespace: 'sync',
						requires: [
							'enableCustomPlayer',
						],
					},
					{
						key: 'enableShortcuts',
						label: 'Keyboard Shortcuts',
						tooltip: 'Customizable keyboard shortcuts for the custom video player.',
						type: 'toggle',
						namespace: 'sync',
						requires: [
							'enableCustomPlayer',
						],
					},
					{
						key: 'enableAutoFullscreen',
						label: 'Auto "Fullscreen"',
						tooltip: `
							Automatically "fullscreen" the video on page load.
							This is not real fullscreen due to security limitations.
							It is recommended you fullscreen the browser with F11
							for the best results.
						`,
						type: 'toggle',
						namespace: 'sync',
						incompatible: [
							'enableTheater',
							'enableAltVideopage',
						],
					},
					{
						key: 'enableTheater',
						label: 'Theater Mode',
						tooltip: 'Enlarges the video player and auto dims the background when the video is playing.',
						type: 'toggle',
						namespace: 'sync',
						requires: [
							'enableCustomPlayer',
						],
						incompatible: [
							'enableAutoFullscreen',
							'enableAltVideopage',
						],
						modal: {
							icon: 'cog',
							key: 'OptionModal',
							options: [
								{
									key: 'enableTheaterBacklight',
									label: 'Theater Backlight',
									tooltip: 'Theater mode but with some aesthetic. This feature may be a bit CPU intensive.',
									type: 'toggle',
									namespace: 'sync',
								},
							],
						},
					},
				],
			},
		],

		customScheme: {
			global: {
				navbar: {
					navBGColor: 'BG Color',
					navTabActiveBGColor: 'Active Tab BG Color',
					navTabActiveTextColor: 'Active Tab Text Color',
					navTabBGColor: 'Tab BG Color',
					navTabTextColor: 'Tab Text Color',
					navTabHoverBGColor: 'Tab Hover Color',
					navSubBGColor: 'Sub BG Color',
					navSubLinkColor: 'Sub Link Color',
					navSubLinkHoverColor: 'Sub Link Hover Color',
				},
				userBox: {
					userBoxBGColor: 'BG Color',
					userBoxTextColor: 'Text Color',
					userBoxLinkColor: 'Link Color',
					userBoxLinkHoverColor: 'Link Hover Color',
				},
				contentBox: {
					contentBoxBGColor: 'BG Color',
					contentBoxTitleBGColor: 'Titlebar BG Color',
					contentBoxTitleTextColor: 'Titlebar Text Color',
					contentBoxTextColor: 'Text Color',
					contentBoxLinkColor: 'Link Color',
					contentBoxLinkHoverColor: 'Link Hover Color',
					contenetBoxLinkVisitedColor: 'Link Visited Color',
				},
				footer: {
					footerBGColor: 'BG Color',
					footerTextColor: 'Text Color',
					footerLinkColor: 'Link Color',
					footerLinkHoverColor: 'Link Hover Color',
				},
			},
			homepage: {
				banner: {
					bannerBGColor: 'BG Color',
					bannerTextColor: 'Text Color',
					bannerLinkColor: 'Link Color',
					bannerLinkHoverColor: 'Link Hover Color',
				},
				seasonBox: {
					seasonBoxBGColor: 'BG Color',
					seasonBoxTitleBGColor: 'Titlebar BG Color',
					seasonBoxTitleTextColor: 'Titlebar Text Color',
					seasonBoxTextColor: 'Text Color',
					// seasonBoxDropdownBGColor: '',
					// seasonBoxDropdownTextColor: '',
					seasonBoxNyaColor: 'Anime Nya Color',
					seasonBoxAiringColor: 'Anime Airing Color',
					seasonBoxCompletedColor: 'Anime Completed Color',
					seasonBoxLinkColor: 'Link Color',
					seasonBoxLinkHoverColor: 'Link Hover Color',
				},
				pinnedBox: {
					pinnedBoxBGColor: 'BG Color',
					pinnedBoxTitleBGColor: 'Titlebar BG Color',
					pinnedBoxTitleTextColor: 'Titlebar Text Color',
					pinnedBoxTextColor: 'Text Color',
					pinnedBoxLinkColor: 'Link Color',
					// pinnedBoxLatestLinkColor: 'Latest Ep Link Color',
					// pinnedBoxLatestLinkVisitedColor: 'Latest Ep Link Visited Color',
					pinnedBoxLinkHoverColor: 'Link Hover Color',
				},
				watchHistory: {
					watchHistoryBGColor: 'BG Color',
					watchHistoryTitleBGColor: 'Titlebar BG Color',
					watchHistoryTitleTextColor: 'Titlebar Text Color',
					watchHistoryTextColor: 'Text Color',
					watchHistoryLinkColor: 'Link Color',
					watchHistoryLinkHoverColor: 'Link Hover Color',
				},
				latestUpdate: {
					latestBGColor: 'BG Color',
					latestTitleBGColor: 'Titlebar BG Color',
					latestTitleTextColor: 'Titlebar Text Color',
					latestTextColor: 'Text Color',
					latestLinkColor: 'Link Color',
					latestLinkHoverColor: 'Link Hover Color',
				},
				subContent: {
					subContentTabActiveBGColor: 'Active Tab BG Color',
					subContentTabActiveTextColor: 'Active Tab Text Color',
					subContentTabBGColor: 'Tab BG Color',
					subContentTabTextColor: 'Tab Text Color',
					subContentTabHoverBGColor: 'Tab Hover BG Color',
					subContentBGColor: 'BG Color',
					subContentBG2Color: 'BG Color Alt Row',
					subContentTextColor: 'Text Color',
					subContentLinkColor: 'Link Color',
					subContentLinkHoverColor: 'Link Hover Color',
				},
				rightBoxes: {
					rightBoxBGColor: 'BG Color',
					rightBoxTitleBGColor: 'Titlebar BG Color',
					rightBoxTitleTextColor: 'Titlebar Text Color',
					rightBoxTextColor: 'Text Color',
					rightBoxLinkColor: 'Link Color',
					rightBoxLinkHoverColor: 'Link Hover Color',
				},
			},
			videopage: {
				container: {
					videoContainerBGColor: 'BG Color',
					videoContainerTextColor: 'Text Color',
					videoContainerLinkColor: 'Link Color',
					videoContainerLinkHoverColor: 'Link Hover Color',
					// videoCommentsButtonColor: 'Comments Button Color',
					// videoCommentsButtonHoverColor: 'Comments Button Hover Color',
					// videoCommentsButtonTextColor: 'Comments Button Text Color'
				},
				videoPlayer: {
					videoPlayerPlayColor: 'Play Button Color',
					videoPlayerPlayBGColor: 'Play Button BG Color',
					videoPlayerPlayBGHoverColor: 'Play Button BG Hover Color',
					videoPlayerIconsColor: 'Icon Colors',
					videoPlayerIconsHoverColor: 'Icon Hover Colors',
					videoPlayerSeekColor: 'Seekbar Color',
					videoPlayerSeekProgressColor: 'Seekbar Progress Color',
					videoPlayerSeekHandleColor: 'Seekbar Handle Color',
					videoPlayerTextColor: 'Text Color',
					videoPlayerVolColor: 'Volumebar Color',
					videoPlayerVolProgressColor: 'Volumebar Progress Color',
					videoPlayerVolHandleColor: 'Volumebar Handle Color',
				},
			},
		},

		queries: {
			supporters: `
				query ($showExtension: Boolean) {
					publicPatrons(showExtension: $showExtension) { active }
				}
			`,
			changelog: `
				query($current: Boolean) {
					publicChangelog(current: $current) {
						content
					}
				}
			`,
			extensionTheme: `
				query {
					extensionTheme
				}
			`,
			extensionInfo: `
				query {
					extensionVersion {
						version
						label
					}
					extensionUpdateText
					extensionAlerts {
						small {
							enabled
							data {
								title
								content
								timestamp
							}
						}
						fill {
							enabled
							data {
								title
								content
								timestamp
							}
						}
					}
					extensionBanners
				}
			`,
			seasons: `
				query {
					publicSeasons {
						year
						season
						current
						createdAt
						updatedAt
						anime {
							id
							idMal
							title
							description
							cover
							status
							format
							airingSchedule
							kissanime
							kissanimeDub
							recommended
						}
					}
				}
			`,
			kissMatch: `
				query($path: String!) {
					kissMatch(path: $path) {
						anilist
						kitsu
						mal
					}
				}
			`,
		},

		customLogos: [
			{ key: 'default', label: 'Default' },
			{ key: 'logo1', label: 'Logo 1 (Character Unknown)' },
			{ key: 'logo2', label: 'Logo 2 (Kaneki - Tokyo Ghoul)' },
			{ key: 'logo3', label: 'Logo 3 (Akeno - High School DxD)' },
			{ key: 'logo4', label: 'Logo 4 (Goku - Dragon Ball)' },
			{ key: 'logo5', label: 'Logo 5 (Genos - One Punch Man)' },
			{ key: 'logo6', label: 'Logo 6 (Kayo & Satoru - ERASED)' },
			{ key: 'logo7', label: 'Logo 7 (Midoriya and Uraraka - Boku no Hero Academia)' },
			{ key: 'logo8', label: 'Logo 8 (Souma - Shokugeki no Souma)' },
			{ key: 'logo9', label: 'Logo 9 (Kageyama - Haikyuu!!)' },
			{ key: 'logo10', label: 'Logo 10 (Rin & Shiemi  - Ao no Exorcist)' },
			{ key: 'logo11', label: 'Logo 11 (Eren & Levi - Attack on Titan)' },
			{ key: 'logo12', label: 'Logo 12 (Asta & Yuno - Black Clover)' },
			{ key: 'logo13', label: 'Logo 13 (Lupusregina Beta - Overlord 2)' },
			{ key: 'logo14', label: 'Logo 14 (Meliodas - Seven Deadly Sins)' },
			{ key: 'logo15', label: 'Logo 15 (Deku - Boku no Hero Academia)' },
			{ key: 'logo16', label: 'Logo 16 (Goblin Slayer)' },
			{ key: 'logo17', label: 'Logo 17 (Rimuru - Tensei shitara Slime Datta Ken)' },
			{ key: 'logo18', label: 'Logo 18 (Raphtalia - The Rising of the Shield Hero)' },
			{ key: 'logo19', label: 'Logo 19 (Speed-o\'-Sound Sonic - One Punch Man)' },
			{ key: 'logo20', label: 'Logo 20 (Tsukasa - Dr Stone)' },
			{ key: 'logo21', label: 'Logo 21 (Boku no Hero Academia)' },
			{ key: 'logo22', label: 'Logo 22 (Unknown)' },
			{ key: 'special1', label: 'Logo Special 1 (Mea - To Love-Ru)' },
			{ key: 'special2', label: 'Logo Speical 2 (Hatsune Miku - Vocaloid)' },
			{ key: 'custom', label: 'User Defined Logo' },
		],

		seasonalThemes: {
			april: {
				css: true,
				js: true,
			},
			christmas: {
				css: true,
				js: true,
			},
		},

		cfQuotes: [
			{ author: 'Shirou',				quote: 'People die if they are killed.' },
			{ author: 'Hanekawa',			quote: "I don't know everything, I just know what I know." },
			{ author: 'C.C.',					quote: 'False tears bring pain to others. A false smile brings pain to yourself.' },
			{ author: '',						quote: 'Your name is...' },
			{ author: '',						quote: "Please don't lewd the dragon loli." },
			{ author: '',						quote: '404 not found.' },
			{ author: '',						quote: 'Have you tried turning it off and on again?' },
			{ author: '',						quote: '(╯°□°）╯︵ ┻━┻' },
			{ author: '',						quote: '┬─┬﻿ ノ( ゜-゜ノ)' },
			{ author: '',						quote: 'Your waifu is shit.' },
			{ author: '',						quote: "You're gonna carry that weight." },
			{ author: '',						quote: "Haven't we met?..." },
			{ author: '',						quote: 'Never bamboozle the bamboozler.' },
			{ author: 'Whiskey Dragon',	quote: 'I may not be your cup of tea, but I could be your double shot of whiskey.' },
			{ author: 'Chi',					quote: 'Tch' },
			{ author: 'pilar6195',			quote: "I'm sorry to the hedgehogs of the world." },
		],

		settings: {
			storeVersion: 2,
			pinnedListLimit: 50,
			watchHistoryLimit: 20,
		},
	});
}
