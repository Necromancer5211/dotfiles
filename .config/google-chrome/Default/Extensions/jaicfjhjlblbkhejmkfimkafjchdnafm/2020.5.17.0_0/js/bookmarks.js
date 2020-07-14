$(document).ready(async () => {

	$('.listing tr').removeClass('odd');

	const storageSync = await browser.storage.sync.get(config.defaultOptions);

	/* Sort Bookmarks by Airing (bookmarks:sort) */

	if (storageSync.enableSortAiring) {
		$('.trAnime td:nth-child(2):not(:contains("Completed"))').parent().detach()
			.insertAfter('.listing > tbody > tr:nth-child(2)');
	}

	/* Export Anime List (bookmarks:export_animelist) */

	const bookmarks = Array.from(document.querySelectorAll('.aAnime'))
		.map(el => el.textContent.trim())
		.sort();

	$('#divListCategories + .clear2').after('<button id="backupAnime">Backup list to file</button>');

	$('#backupAnime').click(() => {
		Utils.saveToFile(`kissanimeList_${new Date().toISOString()}.txt`, bookmarks.join('\n'));
	});

});
