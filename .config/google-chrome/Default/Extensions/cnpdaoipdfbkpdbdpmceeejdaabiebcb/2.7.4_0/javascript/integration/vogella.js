replaceSnippets($("pre.programlisting"),{replaceCode:function(a,b){$(a).after(b.formattedHtml),$(".prettyprint").addClass("programlisting")},loading:function(a,b){return $(a).before(b),b},shouldEnhance:function(a){return!0}});