$(document).ready(async () => {
	$('#leftside .bigBarContainer:first-child').after(`
		<div class="bigBarContainer loginNotice">
			<div class="barTitle">Notice to Essentials for KissAnime users</div>
			<div class="barContent">
				<div class="arrow-general"></div>
				<p>
					Please note before logging in or registering that we advise against
					using a KissAnime account. Due to how this extension modifies parts of the site,
					we cannot guarantee that your account will not get banned with the use of this extension.
				</p>
				<p>
					We try our best to avoid triggering any anti-adblocker scripts the site might use, but there has been
					cases where a small change on the site could end up causing the extension to trigger one of these scripts
					even if the extension itself does not block any ads.
				</p>
				<p>
					If you only want a way to keep track of what you are watching or have watched, then I suggest using an external
					service such as <a href="https://anilist.co" target="_blank" rel="noopener">AniList</a>,
					<a href="https://myanimelist.net" target="_blank" rel="noopener">MyAnimeList</a>, and
					<a href="https://kitsu.io" target="_blank" rel="noopener">Kitsu</a> which are much better at keeping track
					of your watch history than what KissAnime can provide.
				</p>
				<p>
					If you decide to use one of these services, you can find extensions (including this one!) that
					will allow you to add/remove/update anime to those sites directly from KissAnime itself.
				</p>
			</div>
		</div>
	`);
});
