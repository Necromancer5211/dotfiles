!function(o){function n(o){return"ArrayBuffer"==o.constructor.name&&(o=new Uint8Array(o)),n=String.fromCharCode.apply(null,o),decodeURIComponent(escape(n));var n}function e(o,n,e){var r=(o=unescape(encodeURIComponent(o))).length;e&&r++,n||(n=new ArrayBuffer(r));var i=new Uint8Array(n);e&&(i[o.length]=0);for(var t=0,a=o.length;t<a;t++)i[t]=o.charCodeAt(t);return n}window.IS_RELEASE=!0,function(){var o,n;try{n=!navigator}catch(o){n=!0}if(n)o=global;else{o=window,window.exports=window,window.chrome||(window.chrome={});var e={"node-fetch":window.fetch,wrtc:window},r=window.require;window.require=function(o){if(o.startsWith("."))return window;var n=e[o];return n||(r?r.apply(null,arguments):window)}}o.isNode=function(){return n}}();var r="\n".charCodeAt(0);function i(o,n,r){"Object"==n.constructor.name&&(n=JSON.stringify(n)),o.write(e(n),r)}Uint8Array.prototype.sliceArrayBuffer=function(){return this.buffer.slice(this.byteOffset,this.byteOffset+this.byteLength)},Number.prototype.pad=function(o){for(var n=String(this);n.length<(o||2);)n="0"+n;return n};(new Date).getTime();String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(o,n){return n=n||0,this.lastIndexOf(o,n)===n}}),Object.fromArray=function(o){var n={};for(var e in o){var r=o[e];n[r]=r}return n};try{$.ajaxTransport("+binary",function(o,n,e){if(window.FormData&&(o.dataType&&"binary"==o.dataType||o.data&&(window.ArrayBuffer&&o.data instanceof ArrayBuffer||window.Blob&&o.data instanceof Blob)))return{send:function(n,e){var r=new XMLHttpRequest,i=o.url,t=o.type,a=o.async||!0,c=o.responseType||"blob",l=o.data||null,u=o.username||null,s=o.password||null;for(var f in r.addEventListener("load",function(){var n={};n[o.dataType]=r.response,e(r.status,r.statusText,n,r.getAllResponseHeaders())}),r.addEventListener("error",function(){e(r.status,r.statusText,null,r.getAllResponseHeaders())}),r.open(t,i,a,u,s),n)r.setRequestHeader(f,n[f]);r.responseType=c,r.send(l)},abort:function(){e.abort()}}})}catch(o){}var t;t={};function a(){}function c(o,n){if(!window.chrome||!window.chrome.identity)return console.error("no auth token implemented"),void process.nextTick(n);chrome.identity.getAuthToken({interactive:o,scopes:["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/chromewebstore.readonly"]},function(o){o||console.error("unable to get authToken",chrome.runtime.lastError),n(o)})}function l(o){var n,e=$("#notificationModal"),r=e.find("#modal-ok"),i=e.find("#modal-cancel");r.unbind("click"),i.unbind("click"),e.unbind("hidden.bs.modal"),o.cancelButton=o.cancelButton||"Cancel",o.okButton=o.okButton||"OK",o.title=o.title||chrome.runtime.getManifest().name,o.body=o.body||"",o.hideCancel?i.hide():i.show(),r.text(o.okButton),i.text(o.cancelButton),e.find("#modal-title").text(o.title),e.find("#modal-body").html(o.body),r.click(function(){n=!0,o.ok&&o.ok()||$("#notificationModal").modal("hide")}),o.cancel&&(e.on("hidden.bs.modal",function(){n||o.cancel()}),i.click(o.cancel)),$("#notificationModal").modal(),o.duration&&setTimeout(function(){$("#notificationModal").modal("hide")},o.duration)}function u(o,n){l({title:o,body:n,duration:8e3,hideCancel:!0})}!function(){var o=function*(){}();o.constructor.prototype.async=function(){var n=this,e=n.next();if(!e.done){var r,i,t=new Promise(function(o,n){r=o,i=n});return u(),t}function c(){e=n.throw(new Error(arguments)),u()}function l(){var o=arguments[0];e=n.next(o),u()}function u(t){var u,s;if(e.done)r(e.value);else if(e.value)if(e.value.constructor!=Promise)if(e.value.constructor!=o.constructor){if(e.value==Error)u=!0,e=n.next(c);else{if(e.value!=a)throw new Error("Unexpected yield value for callback. Only Error and Success allowed.");s=!0,e=n.next(l)}if(!e.value)throw new Error("Double yield callbacks must explicitly define both Error and Success");if(e.value==Error&&u)throw new Error("Error callback already defined");if(e.value==a&&s)throw new Error("Success callback already defined");if(e.value!=Error&&e.value!=a)throw new Error("Unexpected yield value for callback. Only Error and Success allowed.");try{e=u?n.next(l):n.next(c)}catch(o){i(o)}}else e.value.async().then(l).catch(c);else e.value.then(l).catch(c);else e=n.next(l)}}}(),isNode()||(window.isElectron=function(){return-1!=navigator.userAgent.indexOf("Electron")},isElectron()||(window.sharedGlobals=window)),function(){if(!isNode()){var o="";if(window.IS_RELEASE){console.log,console.error,console.warn,console.info;function n(n){return function(){n.apply(console,arguments),function(n){try{for(var e in n)n[e]&&n[e].constructor!=String&&(n[e]=JSON.stringify(n[e]));o+=n.join(" ")+"\n"}catch(o){}}(Array.prototype.slice.call(arguments))}}console.error=n(console.error),console.log=n(console.log),console.warn=n(console.warn),console.info=n(console.info)}sharedGlobals.getConsoleLog=function(n){n(o)},window.gistConsoleLog=function(o,n){chrome.runtime.getBackgroundPage(function(r){e(r).then(function(n){o["background.txt"]=n;var r=chrome.app.window.getAll().map(function(n){return e(n.contentWindow).then(function(e){o["window-"+n.id+".txt"]=e})});return Promise.all(r)}).then(function(){var e={description:chrome.runtime.getManifest().name+" console log",public:!1,files:o};fetch("https://vysor.io/gist",{method:"POST",body:JSON.stringify(e)}).then(function(o){o.json().then(function(o){n(o.html_url)})})})})}}function e(o){return new Promise(function(n,e){o.getConsoleLog?o.getConsoleLog(function(o){n({content:o&&o.length?o:"log is empty"})}):n("getConsoleLog not found")})}}(),o.str2ab=e,o.ab2str=n,o.readString=function(o,e){var r="";o.onClose=function(){e(r)},o.read(function e(i){r+=n(i),o.read(e)})},o.readLine=function(o,e){var i=[];!function t(){o.read(function(a){for(var c=0;c<a.byteLength;c++)if(a[c]==r){var l=a.subarray(0,c);i.push(l);var u="";for(var s in i)u+=n(s=i[s]);var f=a.subarray(c+1);return o.unshift(f),void e(u)}i.push(a),t()})}()},o.writeString=i,$(document).ready(function(){function o(o){$("#paymentModal").modal("hide"),c(!0,function(n){if(n){var e="https://billing.clockworkmod.com/subscription/stripe/manage/koushd@gmail.com/"+o+"/";chrome.browser.openTab({url:e}),chrome.app.window.current().close()}else u(null,"Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?")}.bind(this))}function n(o){$("#paymentModal").modal("hide"),isElectron()?l({ok:function(){chrome.browser.openTab({url:"https://chrome.google.com/webstore/detail/vysor/gidgenkbbabolejbgbpnhbimgjbffefm"})},hideCancel:!0,body:'Google Wallet licenses can be purchased from within the <a href="https://chrome.google.com/webstore/detail/vysor/gidgenkbbabolejbgbpnhbimgjbffefm?authuser=1" target="_blank">Vysor for Chrome</a> app.<br/><br/>The license will also unlock the desktop version of Vysor.'}):google.payments.inapp.getPurchases({parameters:{env:"prod"},success:function(){google.payments.inapp.buy({parameters:{env:"prod"},sku:o,success:function(){_rlm(),console.log("success",arguments)},failure:function(){_rlm(),console.log("failure",arguments)}})},failure:function(){l({hideCancel:!0,body:"Unable to purchase from Chrome store. This error may occur if you already have a Vysor subscription that is past due. Please contact support or use the Credit Cad or PayPal purchase options."})}})}function e(o){$("#paymentModal").modal("hide"),l({ok:function(){i(o)},hideCancel:!0,body:"Paypal subscriptions are not available for this plan."})}$("#purchase-options").hide(),c(!0,function(o){if(o)chrome.identity.getProfileUserInfo(function(o){o&&$("#purchase-email").text(o.email)});else{function n(){chrome.app.window.current().close()}l({hideCancel:!0,body:"Unable to get your Google Login. Are you logged into Chrome? If so, please open an issue on the Support Forum.",ok:n,cancel:n})}}),chrome.storage.local.get(["vysorUsage"],function(o){var n=o.vysorUsage;n||(n=0);var e=n/36e5;e=Math.round(2*e)/2,$("#used").html("<span class='time-highlight'>You've used Vysor Free for "+e+" hours. Support Vysor. Go Pro.</span>")});var r={monthly:{google:function(){n("vysor_monthly")},stripe:function(){o("vysor.monthly")},paypal:e},annual:{google:function(){n("vysor.annual2")},stripe:function(){o("vysor.annual")},paypal:e},lifetime:{google:function(){n("vysor.lifetime")},stripe:function(){$("#paymentModal").modal("hide"),c(!0,function(o){if(o){var n="https://billing.clockworkmod.com/api/v1/stripeorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+o;chrome.browser.openTab({url:n}),chrome.app.window.current().close()}else u(null,"Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?")}.bind(this))},paypal:function(){$("#paymentModal").modal("hide"),c(!0,function(o){if(o){var n="https://billing.clockworkmod.com/api/v1/paypalorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+o;chrome.browser.openTab({url:n}),chrome.app.window.current().close()}else u(null,"Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?")}.bind(this))}}};function i(o){$("#pay-card").unbind("click"),$("#pay-google").unbind("click"),$("#pay-paypal").unbind("click"),$("#pay-card").click(r[o].stripe),$("#pay-google").click(r[o].google),$("#pay-paypal").click(function(){r[o].paypal(o)}),$("#paymentModal").modal()}$(".plan-enterprise").click(function(){chrome.browser.openTab({url:"https://billing.vysor.io/"}),chrome.app.window.current().close()}),$(".plan-monthly").click(function(){i("monthly")}),$(".plan-annual").click(function(){i("annual")}),$(".plan-lifetime").click(function(){i("lifetime")}),$("#retrieve").click(function(){c(!0,function(o){o?_rlm(function(o){o||chrome.identity.getProfileUserInfo(function(o){l(o?{hideCancel:!0,body:"No license found for account "+o.email+'. If this message was in error, please open an issue on the Support Forum.<br/><br/>Wrong account? <a href="https://support.vysor.io/support/licensing/multiple/" target="_blank">Read this</a>.'}:{hideCancel:!0,body:"Unable to get your Google Login. Are you logged into Chrome? If so, please open an issue on the Support Forum."})})}):console.log("Unable to get token for retrieve?")})})})}("undefined"==typeof window?window={}:window);
