function escapeHtml(a){return String(a).replace(/[&<>"'\/]/g,function(a){return entityMap[a]})}function hiveReplace(){0==--attempts&&clearTimeout(repTimer),replaceSnippets($(".syntaxhighlighter").filter(":not([data-snippet-id])"),{replaceCode:function(a,b){var c=$(a).find("caption").text(),d=c?'<p class="codota-snippet-title">'+escapeHtml(c)+"</p>":"",e=prettyPrintOne(b.formattedHtml);$(a).after(d+e)},loading:function(a,b){return $(a).before(b),b},shouldEnhance:function(a){return!0}})}function replaceSnippetsMain(){hiveReplace(),repTimer=setInterval(hiveReplace,2500)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},attempts=5,repTimer;