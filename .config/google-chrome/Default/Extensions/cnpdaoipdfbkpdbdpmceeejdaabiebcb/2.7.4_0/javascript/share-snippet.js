function closeShareModal(){chrome.runtime.sendMessage({type:"shareSnippet",action:"close"})}$("a.sign-in").unbind("click").click(function(){var a=$(this).attr("data-share-modal-link");window.location.href="/login?cleanLogin=true&afterAuth="+encodeURIComponent("/livecode/bridge?openerAfterAuth="+a)}),$(".btn-close").click(function(){closeShareModal()});