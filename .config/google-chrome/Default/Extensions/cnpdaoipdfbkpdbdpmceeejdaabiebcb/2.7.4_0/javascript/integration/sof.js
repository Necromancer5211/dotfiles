$("body").attr("data-codota")?console.log("Extension quitting because livecode is running!"):($("body").attr("data-codota","extension"),replaceSnippets($("pre>code").parent(),{replaceCode:function(a,b){$(a).after(b.formattedHtml)},loading:function(a,b){return $(a).before(b),b},shouldEnhance:function(a){var b=$(".question-page").attr("data-should-enhance");return void 0!==b?"true"===b:(b=!1,$(".question-page").find(".post-taglist").find("a").each(function(a,c){var d=$(c).text();(/.*android.*/.test(d)||"java"==d)&&(b=!0)}),$(".question-page").attr("data-should-enhance",b),b)},getSnippetTags:function(){var a=[];return $('.post-taglist a[rel="tag"]').map(function(b,c){a.push(c.innerText)}),["java","android"].filter(function(b){return-1!=a.indexOf(b)})}}));