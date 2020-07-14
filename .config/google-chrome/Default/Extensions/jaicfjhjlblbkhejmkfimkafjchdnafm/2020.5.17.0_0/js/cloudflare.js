$(document).ready(() => {
	if ($('.cf-browser-verification').length) {
		browser.runtime.sendMessage({ type: 'css', data: 'cloudflare.css' });

		const selectedQuote = config.cfQuotes[Math.floor(Math.random() * config.cfQuotes.length)];

		$('body > table > tbody').append(`
			<tr>
				<td>
					<div id="keContainer">
						<div class="loader">Loading...</div>
						<div style="text-align:center">Please wait 5 seconds...</div>
						<h4 style="text-align:center;color:skyblue">${selectedQuote.quote} ${selectedQuote.author ? ` - <i>${selectedQuote.author}</i>` : ''}</h4>
					</div>
				</td>
			</tr>
		`);

		browser.runtime.sendMessage({
			type: 'graphql',
			data: {
				query: config.queries.supporters,
				variables: {
					showExtension: true,
				},
			},
		}).then(data => {
			if (!data.success) return;

			data = data.data;

			$('#keContainer').append('<div id="contributors"><h3>KissEssentials Supporters</h3><ul></ul></div>');

			for (const patron of data.publicPatrons.active) {
				$('#contributors ul').append(`<li>${Utils.sanitizeHtml(patron)}</li>`);
			}
		});
	}
});
