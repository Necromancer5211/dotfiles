!function(){function a(a,b){return a.name=b}function b(a,b){switch(b){case 0:return""+a;case 1:return 1*a;case 2:return!!a;case 3:return 1e3*a}return a}function c(a){return"function"==typeof a}function d(a){return void 0!=a&&-1<(a.constructor+"")[U]("String")}function e(a,b){return void 0==a||"-"==a&&!b||""==a}function f(a){if(!a||""==a)return"";for(;a&&-1<" \n\r\t"[U](a[S](0));)a=a[na](1);for(;a&&-1<" \n\r\t"[U](a[S](a[ba]-1));)a=a[na](0,a[ba]-1);return a}function g(){return K.round(2147483647*K.random())}function h(){}function i(a,b){return G instanceof Function?b?encodeURI(a):G(a):(B(68),escape(a))}function j(a){if(a=a[ea]("+")[qa](" "),L instanceof Function)try{return L(a)}catch(a){B(17)}else B(68);return unescape(a)}function k(a,b){if(a){var c=Rc[X]("script");c.type="text/javascript",c.async=!0,c.src=a,c.id=b;var d=Rc.getElementsByTagName("script")[0];return d.parentNode.insertBefore(c,d),c}}function l(a){return a&&0<a[ba]?a[0]:""}function m(a){var b=a?a[ba]:0;return 0<b?a[b-1]:""}function n(a){return 0==a[U]("www.")&&(a=a[na](4)),a[ra]()}function o(a,b){var c,d={url:a,protocol:"http",host:"",path:"",d:new ua,anchor:""};return a?(c=a[U]("://"),0<=c&&(d.protocol=a[na](0,c),a=a[na](c+3)),0<=(c=a[ja]("/|\\?|#"))?(d.host=a[na](0,c)[ra](),a=a[na](c),c=a[U]("#"),0<=c&&(d.anchor=a[na](c+1),a=a[na](0,c)),c=a[U]("?"),0<=c&&(q(d.d,a[na](c+1)),a=a[na](0,c)),d.anchor&&b&&q(d.d,d.anchor),a&&"/"==a[S](0)&&(a=a[na](1)),d.path=a,d):(d.host=a[ra](),d)):d}function p(a,b){function c(a){var b=(a.hostname||"")[ea](":")[0][ra](),c=(a[ka]||"")[ra](),c=1*a[W]||("http:"==c?80:"https:"==c?443:"");return a=a.pathname||"",0==a[U]("/")||(a="/"+a),[b,""+c,a]}var d=b||Rc[X]("a");d.href=Rc[ia][ma];var e=(d[ka]||"")[ra](),f=c(d),g=d[ja]||"",h=e+"//"+f[0]+(f[1]?":"+f[1]:"");return 0==a[U]("//")?a=e+a:0==a[U]("/")?a=h+a:a&&0!=a[U]("?")?0>a[ea]("/")[0][U](":")&&(a=h+f[2][na](0,f[2].lastIndexOf("/"))+"/"+a):a=h+f[2]+(a||g),d.href=a,e=c(d),{protocol:(d[ka]||"")[ra](),host:e[0],port:e[1],path:e[2],Oa:d[ja]||"",url:a||""}}function q(a,b){function c(b,c){a.contains(b)||a.set(b,[]),a.get(b)[M](c)}for(var d=f(b)[ea]("&"),e=0;e<d[ba];e++)if(d[e]){var g=d[e][U]("=");0>g?c(d[e],"1"):c(d[e][na](0,g),d[e][na](g+1))}}function r(a,b){if(e(a)||"["==a[S](0)&&"]"==a[S](a[ba]-1))return"-";var c=Rc.domain;return a[U](c+(b&&"/"!=b?b:""))==(0==a[U]("http://")?7:0==a[U]("https://")?8:0)?"0":a}function s(a,b,c){1<=va||1<=100*K.random()||(a=["utmt=error","utmerr="+a,"utmwv=5.4.3","utmn="+g(),"utmsp=1"],b&&a[M]("api="+b),c&&a[M]("msg="+i(c[na](0,100))),ue.w&&a[M]("aip=1"),oe(a[qa]("&")),va++)}function t(a){return u("x"+wa++,a)}function u(a,b){return xa[a]=!!b,a}function v(a){var b=this.plugins_;if(b)return b.get(a)}function w(a,b){b=b||[];for(var c=0;c<b[ba];c++){var d=b[c];if(""+a==d||0==d[U](a+"."))return d}return"-"}function x(a){100!=a.get(Ya)&&a.get(tb)%1e4>=100*a.get(Ya)&&a[fa]()}function y(a){Sc(a.get(ya))&&a[fa]()}function z(a){"file:"==Rc[ia][ka]&&a[fa]()}function A(a){a.get(jb)||a.set(jb,Rc.title,!0),a.get(ib)||a.set(ib,Rc[ia].pathname+Rc[ia][ja],!0)}function B(a){Pc.set(a)}function C(a){return"string"==typeof a}function D(a){return("number"==typeof a||void 0!=Number&&a instanceof Number)&&K.round(a)==a&&!J(a)&&a!=H}function E(a){var b,c=1,d=0;if(a)for(c=0,b=a[ba]-1;0<=b;b--)d=a.charCodeAt(b),c=(c<<6&268435455)+d+(d<<14),d=266338304&c,c=0!=d?c^d>>21:c;return c}var F,G=encodeURIComponent,H=1/0,I=setTimeout,J=isNaN,K=Math,L=decodeURIComponent,M="push",N="test",O="slice",P="replace",Q="load",R="floor",S="charAt",T="value",U="indexOf",V="match",W="port",X="createElement",Y="path",Z="name",$="getTime",_="host",aa="toString",ba="length",ca="prototype",da="clientWidth",ea="split",fa="stopPropagation",ha="scope",ia="location",ja="search",ka="protocol",la="clientHeight",ma="href",na="substring",oa="apply",pa="navigator",qa="join",ra="toLowerCase",sa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ta=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)},ua=function(){this.prefix="ga.",this.R={}};ua[ca].set=function(a,b){this.R[this.prefix+a]=b},ua[ca].get=function(a){return this.R[this.prefix+a]},ua[ca].contains=function(a){return void 0!==this.get(a)};var va=0,wa=0,xa={},ya=t(),za=u("anonymizeIp"),Aa=t(),Ba=t(),Ca=t(),Da=t(),Ea=t(),Fa=t(),Ga=t(),Ha=t(),Ia=t(),Ja=t(),Ka=t(),La=t(),Ma=t(),Na=t(),Oa=t(),Pa=t(),Qa=t(),Ra=t(),Sa=t(),Ta=t(),Ua=t(),Va=t(),Wa=t(),Xa=t(),Ya=t(),Za=t(),$a=t(),_a=t(),ab=t(),bb=t(),cb=t(),db=t(),eb=t(),fb=t(),gb=t(!0),hb=u("currencyCode"),ib=u("page"),jb=u("title"),kb=t(),lb=t(),mb=t(),nb=t(),ob=t(),pb=t(),qb=t(),rb=t(),sb=t(),tb=t(!0),ub=t(!0),vb=t(!0),wb=t(!0),xb=t(!0),yb=t(!0),zb=t(!0),Ab=t(!0),Bb=t(!0),Cb=t(!0),Db=t(!0),Eb=t(!0),Fb=t(!0),Gb=t(!0),Hb=t(!0),Ib=t(!0),Jb=t(!0),Kb=t(!0),Lb=t(!0),Mb=t(!0),Nb=t(!0),Ob=t(!0),Pb=t(!0),Qb=t(!0),Rb=t(!0),Sb=t(!0),Tb=t(!0),Ub=u("campaignParams"),Vb=t(),Wb=u("hitCallback"),Xb=t();t();var Yb=t(),Zb=t(),$b=t(),_b=t(),ac=t(),bc=t(),cc=t(),dc=t(),ec=t(),fc=t(),gc=t(),hc=t(),ic=t(),jc=t();t();var kc=t(),lc=t(),mc=t(),nc=u("uaName"),oc=u("uaDomain"),pc=u("uaPath"),qc=function(){function a(a,b,c){sc(se[ca],a,b,c)}a("_createTracker",se[ca].r,55),a("_getTracker",se[ca].oa,0),a("_getTrackerByName",se[ca].u,51),a("_getTrackers",se[ca].pa,130),a("_anonymizeIp",se[ca].aa,16),a("_forceSSL",se[ca].la,125),a("_getPlugin",v,120)},rc=function(){function a(a,b,c){sc(Yd[ca],a,b,c)}tc("_getName",Ba,58),tc("_getAccount",ya,64),tc("_visitCode",tb,54),tc("_getClientInfo",Ma,53,1),tc("_getDetectTitle",Pa,56,1),tc("_getDetectFlash",Na,65,1),tc("_getLocalGifPath",Za,57),tc("_getServiceMode",$a,59),uc("_setClientInfo",Ma,66,2),uc("_setAccount",ya,3),uc("_setNamespace",Aa,48),uc("_setAllowLinker",Ja,11,2),uc("_setDetectFlash",Na,61,2),uc("_setDetectTitle",Pa,62,2),uc("_setLocalGifPath",Za,46,0),uc("_setLocalServerMode",$a,92,void 0,0),uc("_setRemoteServerMode",$a,63,void 0,1),uc("_setLocalRemoteServerMode",$a,47,void 0,2),uc("_setSampleRate",Ya,45,1),uc("_setCampaignTrack",Oa,36,2),uc("_setAllowAnchor",Ka,7,2),uc("_setCampNameKey",Ra,41),uc("_setCampContentKey",Wa,38),uc("_setCampIdKey",Qa,39),uc("_setCampMediumKey",Ua,40),uc("_setCampNOKey",Xa,42),uc("_setCampSourceKey",Ta,43),uc("_setCampTermKey",Va,44),uc("_setCampCIdKey",Sa,37),uc("_setCookiePath",Fa,9,0),uc("_setMaxCustomVariables",_a,0,1),uc("_setVisitorCookieTimeout",Ga,28,1),uc("_setSessionCookieTimeout",Ha,26,1),uc("_setCampaignCookieTimeout",Ia,29,1),uc("_setReferrerOverride",kb,49),uc("_setSiteSpeedSampleRate",ec,132),a("_trackPageview",Yd[ca].Fa,1),a("_trackEvent",Yd[ca].F,4),a("_trackPageLoadTime",Yd[ca].Ea,100),a("_trackSocial",Yd[ca].Ga,104),a("_trackTrans",Yd[ca].Ia,18),a("_sendXEvent",Yd[ca].t,78),a("_createEventTracker",Yd[ca].ia,74),a("_getVersion",Yd[ca].qa,60),a("_setDomainName",Yd[ca].B,6),a("_setAllowHash",Yd[ca].va,8),a("_getLinkerUrl",Yd[ca].na,52),a("_link",Yd[ca].link,101),a("_linkByPost",Yd[ca].ua,102),a("_setTrans",Yd[ca].za,20),a("_addTrans",Yd[ca].$,21),a("_addItem",Yd[ca].Y,19),a("_clearTrans",Yd[ca].ea,105),a("_setTransactionDelim",Yd[ca].Aa,82),a("_setCustomVar",Yd[ca].wa,10),a("_deleteCustomVar",Yd[ca].ka,35),a("_getVisitorCustomVar",Yd[ca].ra,50),a("_setXKey",Yd[ca].Ca,83),a("_setXValue",Yd[ca].Da,84),a("_getXKey",Yd[ca].sa,76),a("_getXValue",Yd[ca].ta,77),a("_clearXKey",Yd[ca].fa,72),a("_clearXValue",Yd[ca].ga,73),a("_createXObj",Yd[ca].ja,75),a("_addIgnoredOrganic",Yd[ca].W,15),a("_clearIgnoredOrganic",Yd[ca].ba,97),a("_addIgnoredRef",Yd[ca].X,31),a("_clearIgnoredRef",Yd[ca].ca,32),a("_addOrganic",Yd[ca].Z,14),a("_clearOrganic",Yd[ca].da,70),a("_cookiePathCopy",Yd[ca].ha,30),a("_get",Yd[ca].ma,106),a("_set",Yd[ca].xa,107),a("_addEventListener",Yd[ca].addEventListener,108),a("_removeEventListener",Yd[ca].removeEventListener,109),a("_addDevId",Yd[ca].V),a("_getPlugin",v,122),a("_setPageGroup",Yd[ca].ya,126),a("_trackTiming",Yd[ca].Ha,124),a("_initData",Yd[ca].v,2),a("_setVar",Yd[ca].Ba,22),uc("_setSessionTimeout",Ha,27,3),uc("_setCookieTimeout",Ia,25,3),uc("_setCookiePersistence",Ga,24,1),a("_setAutoTrackOutbound",h,79),a("_setTrackOutboundSubdomains",h,81),a("_setHrefExamineLimit",h,80)},sc=function(a,b,c,d){a[b]=function(){try{return void 0!=d&&B(d),c[oa](this,arguments)}catch(a){throw s("exc",b,a&&a[Z]),a}}},tc=function(a,c,d,e){Yd[ca][a]=function(){try{return B(d),b(this.a.get(c),e)}catch(b){throw s("exc",a,b&&b[Z]),b}}},uc=function(a,c,d,e,f){Yd[ca][a]=function(g){try{B(d),void 0==f?this.a.set(c,b(g,e)):this.a.set(c,f)}catch(b){throw s("exc",a,b&&b[Z]),b}}},vc=function(a,b){return{type:b,target:a,stopPropagation:function(){throw"aborted"}}},wc=RegExp(/(^|\.)doubleclick\.net$/i),xc=function(a,b){return!!wc[N](Rc[ia].hostname)||"/"===b&&!(0!=a[U]("www.google.")&&0!=a[U](".google.")&&0!=a[U]("google.")||-1<a[U]("google.org"))},yc=function(a){var b=a.get(Da),c=a.c(Fa,"/");xc(b,c)&&a[fa]()},zc=function(){var a={},b={},c=new Mc;this.g=function(a,b){c.add(a,b)};var d=new Mc;this.e=function(a,b){d.add(a,b)};var e=!1,f=!1,g=!0;this.T=function(){e=!0},this.j=function(a){this[Q](),this.set(Vb,a,!0),a=new Ac(this),e=!1,d.execute(this),e=!0,b={},this.n(),a.Ja()},this.load=function(){e&&(e=!1,this.Ka(),jd(this),f||(f=!0,c.execute(this),id(this),jd(this)),e=!0)},this.n=function(){e&&(f?(e=!1,id(this),e=!0):this[Q]())},this.get=function(c){return xa[c]&&this[Q](),void 0!==b[c]?b[c]:a[c]},this.set=function(c,d,e){xa[c]&&this[Q](),e?b[c]=d:a[c]=d,xa[c]&&this.n()},this.Za=function(b){a[b]=this.b(b,0)+1},this.b=function(a,b){var c=this.get(a);return void 0==c||""===c?b:1*c},this.c=function(a,b){var c=this.get(a);return void 0==c?b:c+""},this.Ka=function(){if(g){var b=this.c(Da,""),c=this.c(Fa,"/");xc(b,c)||(a[Ea]=a[La]&&""!=b?E(b):1,g=!1)}}};zc[ca].stopPropagation=function(){throw"aborted"};var Ac=function(a){var b=this;this.q=0;var c=a.get(Wb);this.Ua=function(){0<b.q&&c&&(--b.q||c())},this.Ja=function(){!b.q&&c&&I(c,10)},a.set(Xb,b,!0)},Bc=function(a,b,c){if(c=c?"":a.c(Ea,"1"),b=b[ea]("."),6!==b[ba]||Lc(b[0],c))return!1;c=1*b[1];var d=1*b[2],e=1*b[3],f=1*b[4];return b=1*b[5],0<=c&&0<d&&0<e&&0<f&&0<=b&&(a.set(tb,c),a.set(xb,d),a.set(yb,e),a.set(zb,f),a.set(Ab,b),!0)},Cc=function(a){var b=a.get(tb),c=a.get(xb),d=a.get(yb),e=a.get(zb),f=a.b(Ab,1);return[a.b(Ea,1),void 0!=b?b:"-",c||"-",d||"-",e||"-",f][qa](".")},Dc=function(a){return[a.b(Ea,1),a.b(Db,0),a.b(Eb,1),a.b(Fb,0)][qa](".")},Ec=function(a,b,c){c=c?"":a.c(Ea,"1");var d=b[ea](".");return(4!==d[ba]||Lc(d[0],c))&&(d=null),a.set(Db,d?1*d[1]:0),a.set(Eb,d?1*d[2]:10),a.set(Fb,d?1*d[3]:a.get(Ca)),null!=d||!Lc(b,c)},Fc=function(a,b){var c=i(a.c(vb,"")),d=[],e=a.get(gb);if(!b&&e){for(var f=0;f<e[ba];f++){var g=e[f];g&&1==g[ha]&&d[M](f+"="+i(g[Z])+"="+i(g[T])+"=1")}0<d[ba]&&(c+="|"+d[qa]("^"))}return c?a.b(Ea,1)+"."+c:null},Gc=function(b,c,d){if(d=d?"":b.c(Ea,"1"),c=c[ea]("."),2>c[ba]||Lc(c[0],d))return!1;if(c=c[O](1)[qa](".")[ea]("|"),0<c[ba]&&b.set(vb,j(c[0])),1>=c[ba])return!0;for(c=c[1][ea](-1==c[1][U](",")?"^":","),d=0;d<c[ba];d++){var e=c[d][ea]("=");if(4==e[ba]){var f={};a(f,j(e[1])),f.value=j(e[2]),f.scope=1,b.get(gb)[e[0]]=f}}return!0},Hc=function(a,b){var c=Ic(a,b);return c?[a.b(Ea,1),a.b(Gb,0),a.b(Hb,1),a.b(Ib,1),c][qa]("."):""},Ic=function(a){function b(b,d){if(!e(a.get(b))){var f=a.c(b,""),f=f[ea](" ")[qa]("%20"),f=f[ea]("+")[qa]("%20");c[M](d+"="+f)}}var c=[];return b(Kb,"utmcid"),b(Qb,"utmcsr"),b(Mb,"utmgclid"),b(Nb,"utmgclsrc"),b(Ob,"utmdclid"),b(Pb,"utmdsid"),b(Lb,"utmccn"),b(Rb,"utmcmd"),b(Sb,"utmctr"),b(Tb,"utmcct"),c[qa]("|")},Jc=function(a,b,c){return c=c?"":a.c(Ea,"1"),b=b[ea]("."),5>b[ba]||Lc(b[0],c)?(a.set(Gb,void 0),a.set(Hb,void 0),a.set(Ib,void 0),a.set(Kb,void 0),a.set(Lb,void 0),a.set(Qb,void 0),a.set(Rb,void 0),a.set(Sb,void 0),a.set(Tb,void 0),a.set(Mb,void 0),a.set(Nb,void 0),a.set(Ob,void 0),a.set(Pb,void 0),!1):(a.set(Gb,1*b[1]),a.set(Hb,1*b[2]),a.set(Ib,1*b[3]),Kc(a,b[O](4)[qa](".")),!0)},Kc=function(a,b){function c(a){return(a=b[V](a+"=(.*?)(?:\\|utm|$)"))&&2==a[ba]?a[1]:void 0}function d(b,c){c?(c=e?j(c):c[ea]("%20")[qa](" "),a.set(b,c)):a.set(b,void 0)}-1==b[U]("=")&&(b=j(b));var e="2"==c("utmcvr");d(Kb,c("utmcid")),d(Lb,c("utmccn")),d(Qb,c("utmcsr")),d(Rb,c("utmcmd")),d(Sb,c("utmctr")),d(Tb,c("utmcct")),d(Mb,c("utmgclid")),d(Nb,c("utmgclsrc")),d(Ob,c("utmdclid")),d(Pb,c("utmdsid"))},Lc=function(a,b){return b?a!=b:!/^\d+$/[N](a)},Mc=function(){this.filters=[]};Mc[ca].add=function(a,b){this.filters[M]({name:a,s:b})},Mc[ca].execute=function(a){try{for(var b=0;b<this.filters[ba];b++)this.filters[b].s.call(Qc,a)}catch(a){}};var Nc,Oc,Pc=new function(){var a=[];this.set=function(b){a[b]=!0},this.Xa=function(){for(var b=[],c=0;c<a[ba];c++)a[c]&&(b[K[R](c/6)]=b[K[R](c/6)]^1<<c%6);for(c=0;c<b[ba];c++)b[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[S](b[c]||0);return b[qa]("")+"~"}},Qc=window,Rc=document,Sc=function(a){var b=Qc._gaUserPrefs;return b&&b.ioo&&b.ioo()||!!a&&!0===Qc["ga-disable-"+a]},Tc=function(a,b){I(a,b)},Uc=function(a){var b=[],c=Rc.cookie[ea](";");a=RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c[ba];d++){var e=c[d][V](a);e&&b[M](e[1])}return b},Vc=function(a,b,c,d,e,f){if(e=!Sc(e)&&!xc(d,c)){if(b&&0<=Qc[pa].userAgent[U]("Firefox")){b=b[P](/\n|\r/g," "),e=0;for(var g=b[ba];e<g;++e){var h=255&b.charCodeAt(e);10!=h&&13!=h||(b=b[na](0,e)+"?"+b[na](e+1))}}b&&2e3<b[ba]&&(b=b[na](0,2e3),B(69)),a=a+"="+b+"; path="+c+"; ",f&&(a+="expires="+new Date((new Date)[$]()+f).toGMTString()+"; "),d&&(a+="domain="+d+";"),Rc.cookie=a}},Wc=function(){if(!Nc){var a={},b=Qc[pa],c=Qc.screen;a.Q=c?c.width+"x"+c.height:"-",a.P=c?c.colorDepth+"-bit":"-",a.language=(b&&(b.language||b.browserLanguage)||"-")[ra](),a.javaEnabled=b&&b.javaEnabled()?1:0,a.characterSet=Rc.characterSet||Rc.charset||"-";try{var d,e=Rc.documentElement,f=Rc.body,g=f&&f[da]&&f[la],c=[];e&&e[da]&&e[la]&&("CSS1Compat"===Rc.compatMode||!g)?c=[e[da],e[la]]:g&&(c=[f[da],f[la]]),d=0>=c[0]||0>=c[1]?"":c[qa]("x"),a.Wa=d}catch(a){B(135)}"preview"==b.loadPurpose&&B(138),Nc=a}},Xc=function(){Wc();for(var a=Nc,b=Qc[pa],a=b.appName+b.version+a.language+b.platform+b.userAgent+a.javaEnabled+a.Q+a.P+(Rc.cookie?Rc.cookie:"")+(Rc.referrer?Rc.referrer:""),b=a[ba],c=Qc.history[ba];0<c;)a+=c--^b++;return E(a)},Yc=function(a){Wc();var b=Nc;if(a.set(mb,b.Q),a.set(nb,b.P),a.set(qb,b.language),a.set(rb,b.characterSet),a.set(ob,b.javaEnabled),a.set(sb,b.Wa),a.get(Ma)&&a.get(Na)){if(!(b=Oc)){var c,d,e;if(d="ShockwaveFlash",(b=(b=Qc[pa])?b.plugins:void 0)&&0<b[ba])for(c=0;c<b[ba]&&!e;c++)d=b[c],-1<d[Z][U]("Shockwave Flash")&&(e=d.description[ea]("Shockwave Flash ")[1]);else{d=d+"."+d;try{c=new ActiveXObject(d+".7"),e=c.GetVariable("$version")}catch(a){}if(!e)try{c=new ActiveXObject(d+".6"),e="WIN 6,0,21,0",c.AllowScriptAccess="always",e=c.GetVariable("$version")}catch(a){}if(!e)try{c=new ActiveXObject(d),e=c.GetVariable("$version")}catch(a){}e&&(e=e[ea](" ")[1][ea](","),e=e[0]+"."+e[1]+" r"+e[2])}b=e||"-"}Oc=b,a.set(pb,Oc)}else a.set(pb,"-")},Zc=function(a){if(c(a))this.s=a;else{var b=a[0],d=b.lastIndexOf(":"),e=b.lastIndexOf(".");this.h=this.i=this.l="",-1==d&&-1==e?this.h=b:-1==d&&-1!=e?(this.i=b[na](0,e),this.h=b[na](e+1)):-1!=d&&-1==e?(this.l=b[na](0,d),this.h=b[na](d+1)):d>e?(this.i=b[na](0,e),this.l=b[na](e+1,d),this.h=b[na](d+1)):(this.i=b[na](0,e),this.h=b[na](e+1)),this.k=a[O](1),this.Ma=!this.l&&"_require"==this.h,this.J=!this.i&&!this.l&&"_provide"==this.h}},$c=function(){sc($c[ca],"push",$c[ca][M],5),sc($c[ca],"_getPlugin",v,121),sc($c[ca],"_createAsyncTracker",$c[ca].Sa,33),sc($c[ca],"_getAsyncTracker",$c[ca].Ta,34),this.I=new ua,this.p=[]};F=$c[ca],F.Na=function(a,b,d){var e=this.I.get(a);return!!c(e)&&(b.plugins_=b.plugins_||new ua,b.plugins_.set(a,new e(b,d||{})),!0)},F.push=function(a){var b=we.Va[oa](this,arguments),b=we.p.concat(b);for(we.p=[];0<b[ba]&&!we.O(b[0])&&(b.shift(),!(0<we.p[ba])););return we.p=we.p.concat(b),0},F.Va=function(a){for(var b=[],c=0;c<arguments[ba];c++)try{var d=new Zc(arguments[c]);d.J?this.O(d):b[M](d)}catch(a){}return b},F.O=function(a){try{if(a.s)a.s[oa](Qc);else if(a.J)this.I.set(a.k[0],a.k[1]);else{var b="_gat"==a.i?ue:"_gaq"==a.i?we:ue.u(a.i);if(a.Ma){if(!this.Na(a.k[0],b,a.k[2])){if(!a.Pa){var c,d=p(""+a.k[1]),e=d[ka],f=Rc[ia][ka];if(c="https:"==e||e==f||"http:"==e&&"http:"==f){var g;a:{var h=p(Rc[ia][ma]);if(!(d.Oa||0<=d.url[U]("?")||0<=d[Y][U]("://")||d[_]==h[_]&&d[W]==h[W]))for(var i="http:"==d[ka]?80:443,j=ue.S,b=0;b<j[ba];b++)if(d[_]==j[b][0]&&(d[W]||i)==(j[b][1]||i)&&0==d[Y][U](j[b][2])){g=!0;break a}g=!1}c=g&&!Sc()}c&&(a.Pa=k(d.url))}return!0}}else a.l&&(b=b.plugins_.get(a.l)),b[a.h][oa](b,a.k)}}catch(a){}},F.Sa=function(a,b){return ue.r(a,b||"")},F.Ta=function(a){return ue.u(a)};var _c,ad,bd,cd,dd=function(){function a(a,b,c,d){void 0==f[a]&&(f[a]={}),void 0==f[a][b]&&(f[a][b]=[]),f[a][b][c]=d}function b(a,b,c){if(void 0!=f[a]&&void 0!=f[a][b])return f[a][b][c]}function c(a,b){if(void 0!=f[a]&&void 0!=f[a][b]){f[a][b]=void 0;var c,d=!0;for(c=0;c<g[ba];c++)if(void 0!=f[a][g[c]]){d=!1;break}d&&(f[a]=void 0)}}function d(a){var b,c,d="",e=!1;for(b=0;b<g[ba];b++)if(void 0!=(c=a[g[b]])){e&&(d+=g[b]);for(var e=[],f=void 0,ga=void 0,ga=0;ga<c[ba];ga++)if(void 0!=c[ga]){f="",ga!=m&&void 0==c[ga-1]&&(f+=ga[aa]()+k);for(var n=c[ga],o="",p=void 0,q=void 0,r=void 0,p=0;p<n[ba];p++)q=n[S](p),r=l[q],o+=void 0!=r?r:q;f+=o,e[M](f)}d+=h+e[qa](j)+i,e=!1}else e=!0;return d}var e=this,f=[],g=["k","v"],h="(",i=")",j="*",k="!",l={"'":"'0"};l[i]="'1",l[j]="'2",l[k]="'3";var m=1;e.Ra=function(a){return void 0!=f[a]},e.A=function(){for(var a="",b=0;b<f[ba];b++)void 0!=f[b]&&(a+=b[aa]()+d(f[b]));return a},e.Qa=function(a){if(void 0==a)return e.A();for(var b=a.A(),c=0;c<f[ba];c++)void 0==f[c]||a.Ra(c)||(b+=c[aa]()+d(f[c]));return b},e.f=function(b,c,d){return!!C(d)&&(a(b,"k",c,d),!0)},e.o=function(b,c,d){return!!D(d)&&(a(b,"v",c,d[aa]()),!0)},e.getKey=function(a,c){return b(a,"k",c)},e.N=function(a,c){return b(a,"v",c)},e.L=function(a){c(a,"k")},e.M=function(a){c(a,"v")},sc(e,"_setKey",e.f,89),sc(e,"_setValue",e.o,90),sc(e,"_getKey",e.getKey,87),sc(e,"_getValue",e.N,88),sc(e,"_clearKey",e.L,85),sc(e,"_clearValue",e.M,86)},ed=function(a){var b=Qc.gaGlobal;return a&&!b&&(Qc.gaGlobal=b={}),b},fd=function(){var a=ed(!0).hid;return null==a&&(a=g(),ed(!0).hid=a),a},gd=function(a){a.set(lb,fd());var b=ed();if(b&&b.dh==a.get(Ea)){var c=b.sid;c&&(B(a.get(Bb)?112:132),a.set(zb,c),a.get(ub)&&a.set(yb,c)),b=b.vid,a.get(ub)&&b&&(b=b[ea]("."),a.set(tb,1*b[0]),a.set(xb,1*b[1]))}},hd=function(a,b,c,d){var e=a.c(Da,""),f=a.c(Fa,"/");d=void 0!=d?d:a.b(Ga,0),a=a.c(ya,""),Vc(b,c,f,e,a,d)},id=function(a){var b=a.c(Da,"");a.b(Ea,1);var c=a.c(Fa,"/"),d=a.c(ya,"");Vc("__utma",Cc(a),c,b,d,a.get(Ga)),Vc("__utmb",Dc(a),c,b,d,a.get(Ha)),Vc("__utmc",""+a.b(Ea,1),c,b,d);var e=Hc(a,!0);e?Vc("__utmz",e,c,b,d,a.get(Ia)):Vc("__utmz","",c,b,"",-1),(e=Fc(a,!1))?Vc("__utmv",e,c,b,d,a.get(Ga)):Vc("__utmv","",c,b,"",-1)},jd=function(a){var b=a.b(Ea,1);if(!Bc(a,w(b,Uc("__utma"))))return a.set(wb,!0),!1;var c=!Ec(a,w(b,Uc("__utmb")));return a.set(Cb,c),Jc(a,w(b,Uc("__utmz"))),Gc(a,w(b,Uc("__utmv"))),_c=!c,!0},kd=function(a){_c||0<Uc("__utmb")[ba]||(Vc("__utmd","1",a.c(Fa,"/"),a.c(Da,""),a.c(ya,""),1e4),0==Uc("__utmd")[ba]&&a[fa]())},ld=0,md=function(a){void 0==a.get(tb)?od(a):a.get(wb)&&!a.get(kc)?od(a):a.get(Cb)&&(pd(a),1<++ld&&B(137))},nd=function(a){a.get(Jb)&&!a.get(Bb)&&(pd(a),a.set(Hb,a.get(Ab)))},od=function(a){var b=a.get(Ca);a.set(ub,!0),a.set(tb,g()^2147483647&Xc(a)),a.set(vb,""),a.set(xb,b),a.set(yb,b),a.set(zb,b),a.set(Ab,1),a.set(Bb,!0),a.set(Db,0),a.set(Eb,10),a.set(Fb,b),a.set(gb,[]),a.set(wb,!1),a.set(Cb,!1)},pd=function(a){a.set(yb,a.get(zb)),a.set(zb,a.get(Ca)),a.Za(Ab),a.set(Bb,!0),a.set(Db,0),a.set(Eb,10),a.set(Fb,a.get(Ca)),a.set(Cb,!1)},qd="daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q netscape:query cnn:query about:terms mamma:q voila:rdata virgilio:qs live:q baidu:wd alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT wp:szukaj onet:qt yam:k kvasir:q ozu:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q search.centrum.cz:q 360.cn:q".split(" "),rd=function(a){if(a.get(Oa)&&!a.get(kc)){for(var b=!(e(a.get(Kb))&&e(a.get(Qb))&&e(a.get(Mb))&&e(a.get(Ob))),c={},d=0;d<wd[ba];d++){var f=wd[d];c[f]=a.get(f)}(d=a.get(Ub))?(B(149),f=new ua,q(f,d),d=f):d=o(Rc[ia][ma],a.get(Ka)).d,"1"==m(d.get(a.get(Xa)))&&b||(d=sd(a,d)||td(a),d||b||!a.get(Bb)||(vd(a,void 0,"(direct)",void 0,void 0,void 0,"(direct)","(none)",void 0,void 0),d=!0),d&&(a.set(Jb,xd(a,c)),b="(direct)"==a.get(Qb)&&"(direct)"==a.get(Lb)&&"(none)"==a.get(Rb),a.get(Jb)||a.get(Bb)&&!b)&&(a.set(Gb,a.get(Ca)),a.set(Hb,a.get(Ab)),a.Za(Ib)))}},sd=function(a,b){function c(c,d){d=d||"-";var e=m(b.get(a.get(c)));return e&&"-"!=e?j(e):d}var d=m(b.get(a.get(Qa)))||"-",f=m(b.get(a.get(Ta)))||"-",g=m(b.get(a.get(Sa)))||"-",h=m(b.get("gclsrc"))||"-",i=m(b.get("dclid"))||"-",k=c(Ra,"(not set)"),l=c(Ua,"(not set)"),n=c(Va),p=c(Wa);if(e(d)&&e(g)&&e(i)&&e(f))return!1;var q=!e(g)&&!e(h),q=e(f)&&(!e(i)||q),r=e(n);if(q||r){var s=zd(a),s=o(s,!0);(s=ud(a,s))&&!e(s[1]&&!s[2])&&(q&&(f=s[0]),r&&(n=s[1]))}return vd(a,d,f,g,h,i,k,l,n,p),!0},td=function(a){var b=zd(a),c=o(b,!0);if(!(void 0!=b&&null!=b&&""!=b&&"0"!=b&&"-"!=b&&0<=b[U]("://"))||c&&-1<c[_][U]("google")&&c.d.contains("q")&&"cse"==c[Y])return!1;if((b=ud(a,c))&&!b[2])return vd(a,void 0,b[0],void 0,void 0,void 0,"(organic)","organic",b[1],void 0),!0;if(b||!a.get(Bb))return!1;a:{for(var b=a.get(cb),d=n(c[_]),e=0;e<b[ba];++e)if(-1<d[U](b[e])){a=!1;break a}vd(a,void 0,d,void 0,void 0,void 0,"(referral)","referral",void 0,"/"+c[Y]),a=!0}return a},ud=function(a,b){for(var c=a.get(ab),d=0;d<c[ba];++d){var e=c[d][ea](":");if(-1<b[_][U](e[0][ra]())){var f=b.d.get(e[1]);if(f&&(f=l(f),!f&&-1<b[_][U]("google.")&&(f="(not provided)"),!e[3]||-1<b.url[U](e[3]))){a:{for(var c=f,d=a.get(bb),c=j(c)[ra](),g=0;g<d[ba];++g)if(c==d[g]){c=!0;break a}c=!1}return[e[2]||e[0],f,c]}}}return null},vd=function(a,b,c,d,e,f,g,h,i,j){a.set(Kb,b),a.set(Qb,c),a.set(Mb,d),a.set(Nb,e),a.set(Ob,f),a.set(Lb,g),a.set(Rb,h),a.set(Sb,i),a.set(Tb,j)},wd=[Lb,Kb,Mb,Ob,Qb,Rb,Sb,Tb],xd=function(a,b){function c(a){return a=(""+a)[ea]("+")[qa]("%20"),a=a[ea](" ")[qa]("%20")}function d(c){var d=""+(a.get(c)||"");return c=""+(b[c]||""),0<d[ba]&&d==c}if(d(Mb)||d(Ob))return B(131),!1;for(var e=0;e<wd[ba];e++){var f=wd[e],g=b[f]||"-",f=a.get(f)||"-";if(c(g)!=c(f))return!0}return!1},yd=RegExp(/^https:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i),zd=function(a){a=r(a.get(kb),a.get(Fa));try{if(yd[N](a))return B(136),a+"?q="}catch(a){B(145)}return a},Ad=function(a){ad=a.c(Mb,""),bd=a.c(Nb,"")},Bd=function(a){var b=a.c(Mb,""),c=a.c(Nb,"");b!=ad&&(-1<c[U]("ds")?a.set(Pb,void 0):!e(ad)&&-1<bd[U]("ds")&&a.set(Pb,ad))},Cd=function(a){Dd(a,Rc[ia][ma])?(a.set(kc,!0),B(12)):a.set(kc,!1)},Dd=function(a,b){if(!a.get(Ja))return!1;var c=o(b,a.get(Ka)),d=l(c.d.get("__utma")),e=l(c.d.get("__utmb")),f=l(c.d.get("__utmc")),g=l(c.d.get("__utmx")),h=l(c.d.get("__utmz")),i=l(c.d.get("__utmv")),c=l(c.d.get("__utmk"));if(E(""+d+e+f+g+h+i)!=c){if(d=j(d),e=j(e),f=j(f),g=j(g),!(f=Fd(d+e+f+g,h,i,c)))return!1;h=f[0],i=f[1]}return!!Bc(a,d,!0)&&(Ec(a,e,!0),Jc(a,h,!0),Gc(a,i,!0),Ld(a,g,!0),!0)},Ed=function(a,b,c){var d;d=Cc(a)||"-";var e=Dc(a)||"-",f=""+a.b(Ea,1)||"-",g=Md(a)||"-",h=Hc(a,!1)||"-";a=Fc(a,!1)||"-";var i=E(""+d+e+f+g+h+a),j=[];return j[M]("__utma="+d),j[M]("__utmb="+e),j[M]("__utmc="+f),j[M]("__utmx="+g),j[M]("__utmz="+h),j[M]("__utmv="+a),j[M]("__utmk="+i),(d=j[qa]("&"))?(e=b[U]("#"),c?0>e?b+"#"+d:b+"&"+d:(c="",f=b[U]("?"),0<e&&(c=b[na](e),b=b[na](0,e)),0>f?b+"?"+d+c:b+"&"+d+c)):b},Fd=function(a,b,c,d){for(var e=0;3>e;e++){for(var f=0;3>f;f++){if(d==E(a+b+c))return B(127),[b,c];var g=b[P](/ /g,"%20"),h=c[P](/ /g,"%20");if(d==E(a+g+h))return B(128),[g,h];if(g=g[P](/\+/g,"%20"),h=h[P](/\+/g,"%20"),d==E(a+g+h))return B(129),[g,h];try{var k=b[V]("utmctr=(.*?)(?:\\|utm|$)");if(k&&2==k[ba]&&(g=b[P](k[1],i(j(k[1]))),d==E(a+g+c)))return B(139),[g,c]}catch(a){}b=j(b)}c=j(c)}},Gd="|",Hd=function(a,b,c,d,e,f,g,h,i){var j=Jd(a,b);return j||(j={},a.get(db)[M](j)),j.id_=b,j.affiliation_=c,j.total_=d,j.tax_=e,j.shipping_=f,j.city_=g,j.state_=h,j.country_=i,j.items_=j.items_||[],j},Id=function(a,b,c,d,e,f,g){a=Jd(a,b)||Hd(a,b,"",0,0,0,"","","");var h;a:{if(a&&a.items_){h=a.items_;for(var i=0;i<h[ba];i++)if(h[i].sku_==c){h=h[i];break a}}h=null}return i=h||{},i.transId_=b,i.sku_=c,i.name_=d,i.category_=e,i.price_=f,i.quantity_=g,h||a.items_[M](i),i},Jd=function(a,b){for(var c=a.get(db),d=0;d<c[ba];d++)if(c[d].id_==b)return c[d];return null},Kd=function(a){if(!cd){var b;b=Rc[ia].hash;var c=Qc[Z],d=/^#?gaso=([^&]*)/;(c=(b=(b=b&&b[V](d)||c&&c[V](d))?b[1]:l(Uc("GASO")))&&b[V](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(hd(a,"GASO",""+b,0),ue._gasoDomain=a.get(Da),ue._gasoCPath=a.get(Fa),a=c[1],k("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+g(),"_gasojs")),cd=!0}},Ld=function(a,b,c){c&&(b=j(b)),c=a.b(Ea,1),b=b[ea]("."),2>b[ba]||!/^\d+$/[N](b[0])||(b[0]=""+c,hd(a,"__utmx",b[qa]("."),void 0))},Md=function(a,b){var c=w(a.get(Ea),Uc("__utmx"));return"-"==c&&(c=""),b?i(c):c},Nd=function(a){try{var b=o(Rc[ia][ma],!1),c=L(m(b.d.get("utm_referrer")))||"";c&&a.set(kb,c);var d=L(l(b.d.get("utm_expid")))||"";d&&(d=d[ea](".")[0],a.set(mc,""+d))}catch(a){B(146)}},Od=function(a){var b=Qc.gaData&&Qc.gaData.expId;b&&a.set(mc,""+b)},Pd=function(a,b){var c=K.min(a.b(ec,0),100);if(a.b(tb,0)%100>=c)return!1;if(void 0==(c=Ud()||Vd()))return!1;var d=c[0];return void 0!=d&&d!=H&&!J(d)&&(0<d?b(Rd(c)?Td(c):Td(c[O](0,1))):sa(Qc,"load",function(){Pd(a,b)},!1),!0)},Qd=function(a,b,c,d){var e=new dd;return e.f(14,90,b[na](0,500)),e.f(14,91,a[na](0,150)),e.f(14,92,""+Sd(c)),void 0!=d&&e.f(14,93,d[na](0,500)),e.o(14,90,c),e},Rd=function(a){for(var b=1;b<a[ba];b++)if(J(a[b])||a[b]==H||0>a[b])return!1;return!0},Sd=function(a){return J(a)||0>a?0:5e3>a?10*K[R](a/10):5e4>a?100*K[R](a/100):41e5>a?1e3*K[R](a/1e3):41e5},Td=function(a){for(var b=new dd,c=0;c<a[ba];c++)b.f(14,c+1,""+Sd(a[c])),b.o(14,c+1,a[c]);return b},Ud=function(){var a=Qc.performance||Qc.webkitPerformance;if(a=a&&a.timing){var b=a.navigationStart;if(0!=b)return[a.loadEventStart-b,a.domainLookupEnd-a.domainLookupStart,a.connectEnd-a.connectStart,a.responseStart-a.requestStart,a.responseEnd-a.responseStart,a.fetchStart-b,a.domInteractive-b,a.domContentLoadedEventStart-b];B(133)}},Vd=function(){if(Qc.top==Qc){var a=Qc.external,b=a&&a.onloadT;return a&&!a.isValidLoadTime&&(b=void 0),2147483648<b&&(b=void 0),0<b&&a.setPageReadyTime(),void 0==b?void 0:[b]}},Wd=function(a){if(a.get(ub))try{var b;a:{var c=Uc(a.get(nc)||"_ga");if(c&&!(1>c[ba])){for(var d=[],e=0;e<c[ba];e++){var f,g=c[e][ea]("."),h=g.shift();if(("GA1"==h||"1"==h)&&1<g[ba]){var i=g.shift()[ea]("-");1==i[ba]&&(i[1]="1"),i[0]*=1,i[1]*=1,f={Ya:i,$a:g[qa](".")}}else f=void 0;f&&d[M](f)}if(1==d[ba]){b=d[0].$a;break a}if(0!=d[ba]){var j=a.get(oc)||a.get(Da),d=Xd(d,(0==j[U](".")?j.substr(1):j)[ea](".")[ba],0);if(1==d[ba]){b=d[0].$a;break a}var k=a.get(pc)||a.get(Fa);(c=k)?(1<c[ba]&&"/"==c[S](c[ba]-1)&&(c=c.substr(0,c[ba]-1)),0!=c[U]("/")&&(c="/"+c),k=c):k="/",d=Xd(d,"/"==k?1:k[ea]("/")[ba],1),b=d[0].$a;break a}}b=void 0}if(b){var l=(""+b)[ea](".");2==l[ba]&&/[0-9.]/[N](l)&&(B(114),a.set(tb,l[0]),a.set(xb,l[1]),a.set(ub,!1))}}catch(a){B(115)}},Xd=function(a,b,c){for(var d=[],e=[],f=128,g=0;g<a[ba];g++){var h=a[g];h.Ya[c]==b?d[M](h):h.Ya[c]==f?e[M](h):h.Ya[c]<f&&(e=[h],f=h.Ya[c])}return 0<d[ba]?d:e},Yd=function(a,b,c){function d(a){return function(b){if((b=b.get(lc)[a])&&b[ba])for(var c=vc(e,a),d=0;d<b[ba];d++)b[d].call(e,c)}}var e=this;this.a=new zc,this.get=function(a){return this.a.get(a)},this.set=function(a,b,c){this.a.set(a,b,c)},this.set(ya,b||"UA-XXXXX-X"),this.set(Ba,a||""),this.set(Aa,c||""),this.set(Ca,K.round((new Date)[$]()/1e3)),this.set(Fa,"/"),this.set(Ga,63072e6),this.set(Ia,15768e6),this.set(Ha,18e5),this.set(Ja,!1),this.set(_a,50),this.set(Ka,!1),this.set(La,!0),this.set(Ma,!0),this.set(Na,!0),this.set(Oa,!0),this.set(Pa,!0),this.set(Ra,"utm_campaign"),this.set(Qa,"utm_id"),this.set(Sa,"gclid"),this.set(Ta,"utm_source"),this.set(Ua,"utm_medium"),this.set(Va,"utm_term"),this.set(Wa,"utm_content"),this.set(Xa,"utm_nooverride"),this.set(Ya,100),this.set(ec,1),this.set(fc,!1),this.set(Za,"/__utm.gif"),this.set($a,1),this.set(db,[]),this.set(gb,[]),this.set(ab,qd[O](0)),this.set(bb,[]),this.set(cb,[]),this.B("auto"),this.set(kb,Rc.referrer),Nd(this.a),this.set(lc,{hit:[],load:[]}),this.a.g("0",Cd),this.a.g("1",Ad),this.a.g("2",md),this.a.g("3",Wd),this.a.g("4",rd),this.a.g("5",Bd),this.a.g("6",nd),this.a.g("7",d("load")),this.a.g("8",Kd),this.a.e("A",y),this.a.e("B",z),this.a.e("C",md),this.a.e("D",x),this.a.e("E",yc),this.a.e("F",Zd),this.a.e("G",kd),this.a.e("H",A),this.a.e("I",Yc),this.a.e("J",gd),this.a.e("K",Od),this.a.e("L",d("hit")),this.a.e("M",le),this.a.e("N",$d),0===this.get(Ca)&&B(111),this.a.T(),this.H=void 0};F=Yd[ca],F.m=function(){var a=this.get(eb);return a||(a=new dd,this.set(eb,a)),a},F.La=function(a){for(var b in a){var c=a[b];a.hasOwnProperty(b)&&this.set(b,c,!0)}},F.K=function(a){if(this.get(fc))return!1;var b=this,c=Pd(this.a,function(c){b.set(ib,a,!0),b.t(c)});return this.set(fc,c),c},F.Fa=function(a){a&&d(a)?(B(13),this.set(ib,a,!0)):"object"==typeof a&&null!==a&&this.La(a),this.H=a=this.get(ib),this.a.j("page"),this.K(a)},F.F=function(a,b,c,d,e){return!(""==a||!C(a)||""==b||!C(b)||void 0!=c&&!C(c)||void 0!=d&&!D(d))&&(this.set(Zb,a,!0),this.set($b,b,!0),this.set(_b,c,!0),this.set(ac,d,!0),this.set(Yb,!!e,!0),this.a.j("event"),!0)},F.Ha=function(a,b,c,d,e){var f=this.a.b(ec,0);return 1*e===e&&(f=e),!(this.a.b(tb,0)%100>=f)&&(c=1*(""+c),!(""==a||!C(a)||""==b||!C(b)||!D(c)||J(c)||0>c||0>f||100<f||!(void 0==d||""!=d&&C(d)))&&(this.t(Qd(a,b,c,d)),!0))},F.Ga=function(a,b,c,d){return!(!a||!b)&&(this.set(bc,a,!0),this.set(cc,b,!0),this.set(dc,c||Rc[ia][ma],!0),d&&this.set(ib,d,!0),this.a.j("social"),!0)},F.Ea=function(){this.set(ec,10),this.K(this.H)},F.Ia=function(){this.a.j("trans")},F.t=function(a){this.set(fb,a,!0),this.a.j("event")},F.ia=function(a){this.v();var b=this;return{_trackEvent:function(c,d,e){B(91),b.F(a,c,d,e)}}},F.ma=function(a){return this.get(a)},F.xa=function(a,b){if(a)if(d(a))this.set(a,b);else if("object"==typeof a)for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c])},F.addEventListener=function(a,b){var c=this.get(lc)[a];c&&c[M](b)},F.removeEventListener=function(a,b){for(var c=this.get(lc)[a],d=0;c&&d<c[ba];d++)if(c[d]==b){c.splice(d,1);break}},F.qa=function(){return"5.4.3"},F.B=function(a){this.get(La),a="auto"==a?n(Rc.domain):a&&"-"!=a&&"none"!=a?a[ra]():"",this.set(Da,a)},F.va=function(a){this.set(La,!!a)},F.na=function(a,b){return Ed(this.a,a,b)},F.link=function(a,b){if(this.a.get(Ja)&&a){var c=Ed(this.a,a,b);Rc[ia].href=c}},F.ua=function(a,b){this.a.get(Ja)&&a&&a.action&&(a.action=Ed(this.a,a.action,b))},F.za=function(){this.v();var a=this.a,b=Rc.getElementById?Rc.getElementById("utmtrans"):Rc.utmform&&Rc.utmform.utmtrans?Rc.utmform.utmtrans:null;if(b&&b[T]){a.set(db,[]);for(var b=b[T][ea]("UTM:"),c=0;c<b[ba];c++){b[c]=f(b[c]);for(var d=b[c][ea](Gd),e=0;e<d[ba];e++)d[e]=f(d[e]);"T"==d[0]?Hd(a,d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8]):"I"==d[0]&&Id(a,d[1],d[2],d[3],d[4],d[5],d[6])}}},F.$=function(a,b,c,d,e,f,g,h){return Hd(this.a,a,b,c,d,e,f,g,h)},F.Y=function(a,b,c,d,e,f){return Id(this.a,a,b,c,d,e,f)},F.Aa=function(a){Gd=a||"|"},F.ea=function(){this.set(db,[])},F.wa=function(b,c,d,e){var f=this.a;if(0>=b||b>f.get(_a))b=!1;else if(!c||!d||128<c[ba]+d[ba])b=!1;else{1!=e&&2!=e&&(e=3);var g={};a(g,c),g.value=d,g.scope=e,f.get(gb)[b]=g,b=!0}return b&&this.a.n(),b},F.ka=function(a){this.a.get(gb)[a]=void 0,this.a.n()},F.ra=function(a){return(a=this.a.get(gb)[a])&&1==a[ha]?a[T]:void 0},F.Ca=function(a,b,c){this.m().f(a,b,c)},F.Da=function(a,b,c){this.m().o(a,b,c)},F.sa=function(a,b){return this.m().getKey(a,b)},F.ta=function(a,b){return this.m().N(a,b)},F.fa=function(a){this.m().L(a)},F.ga=function(a){this.m().M(a)},F.ja=function(){return new dd},F.W=function(a){a&&this.get(bb)[M](a[ra]())},F.ba=function(){this.set(bb,[])},F.X=function(a){a&&this.get(cb)[M](a[ra]())},F.ca=function(){this.set(cb,[])},F.Z=function(a,b,c,d,e){a&&b&&(a=[a,b[ra]()][qa](":"),(d||e)&&(a=[a,d,e][qa](":")),d=this.get(ab),d.splice(c?0:d[ba],0,a))},F.da=function(){this.set(ab,[])},F.ha=function(a){this.a[Q]();var b=this.get(Fa),c=Md(this.a);this.set(Fa,a),this.a.n(),Ld(this.a,c),this.set(Fa,b)},F.ya=function(a,b){if(0<a&&5>=a&&d(b)&&""!=b){var c=this.get(gc)||[];c[a]=b,this.set(gc,c)}},F.V=function(a){if(a=""+a,a[V](/^[A-Za-z0-9]{1,5}$/)){var b=this.get(jc)||[];b[M](a),this.set(jc,b)}},F.v=function(){this.a[Q]()},F.Ba=function(a){a&&""!=a&&(this.set(vb,a),this.a.j("var"))};var Zd=function(a){if("trans"!==a.get(Vb)&&500<=a.b(Db,0)&&a[fa](),"event"===a.get(Vb)){var b=(new Date)[$](),c=a.b(Fb,0),d=a.b(zb,0),c=K[R]((b-(c!=d?c:1e3*c))/1e3*1);0<c&&(a.set(Fb,b),a.set(Eb,K.min(10,a.b(Eb,0)+c))),0>=a.b(Eb,0)&&a[fa]()}},$d=function(a){"event"===a.get(Vb)&&a.set(Eb,K.max(0,a.b(Eb,10)-1))},_d=function(){var a=[];this.add=function(b,c,d){d&&(c=i(""+c)),a[M](b+"="+c)},this.toString=function(){return a[qa]("&")}},ae=function(a,b){(b||2!=a.get($a))&&a.Za(Db)},be=function(a,b){b.add("utmwv","5.4.3"),b.add("utms",a.get(Db)),b.add("utmn",g());var c=Rc[ia].hostname;e(c)||b.add("utmhn",c,!0),100!=(c=a.get(Ya))&&b.add("utmsp",c,!0)},ce=function(a,b){b.add("utmht",(new Date)[$]()),b.add("utmac",f(a.get(ya))),a.get(mc)&&b.add("utmxkey",a.get(mc),!0),a.get(Yb)&&b.add("utmni",1);var c=a.get(jc);c&&0<c[ba]&&b.add("utmdid",c[qa](".")),ee(a,b),!1!==a.get(za)&&(a.get(za)||ue.w)&&b.add("aip",1),b.add("utmu",Pc.Xa())},de=function(a,b){for(var c=a.get(gc)||[],d=[],e=1;e<c[ba];e++)c[e]&&d[M](e+":"+i(c[e][P](/%/g,"%25")[P](/:/g,"%3A")[P](/,/g,"%2C")));d[ba]&&b.add("utmpg",d[qa](","))},ee=function(a,b){function c(a,b){b&&d[M](a+"="+b+";")}var d=[];c("__utma",Cc(a)),c("__utmz",Hc(a,!1)),c("__utmv",Fc(a,!0)),c("__utmx",Md(a)),b.add("utmcc",d[qa]("+"),!0)},fe=function(a,b){a.get(Ma)&&(b.add("utmcs",a.get(rb),!0),b.add("utmsr",a.get(mb)),a.get(sb)&&b.add("utmvp",a.get(sb)),b.add("utmsc",a.get(nb)),b.add("utmul",a.get(qb)),b.add("utmje",a.get(ob)),b.add("utmfl",a.get(pb),!0))},ge=function(a,b){a.get(Pa)&&a.get(jb)&&b.add("utmdt",a.get(jb),!0),b.add("utmhid",a.get(lb)),b.add("utmr",r(a.get(kb),a.get(Fa)),!0),b.add("utmp",i(a.get(ib),!0),!0)},he=function(a,b){for(var c=a.get(eb),d=a.get(fb),f=a.get(gb)||[],g=0;g<f[ba];g++){var h=f[g];h&&(c||(c=new dd),c.f(8,g,h[Z]),c.f(9,g,h[T]),3!=h[ha]&&c.f(11,g,""+h[ha]))}e(a.get(Zb))||e(a.get($b),!0)||(c||(c=new dd),c.f(5,1,a.get(Zb)),c.f(5,2,a.get($b)),f=a.get(_b),void 0!=f&&c.f(5,3,f),void 0!=(f=a.get(ac))&&c.o(5,1,f)),c?b.add("utme",c.Qa(d),!0):d&&b.add("utme",d.A(),!0)},ie=function(a,b,c){var d=new _d;return ae(a,c),be(a,d),d.add("utmt","tran"),d.add("utmtid",b.id_,!0),d.add("utmtst",b.affiliation_,!0),d.add("utmtto",b.total_,!0),d.add("utmttx",b.tax_,!0),d.add("utmtsp",b.shipping_,!0),d.add("utmtci",b.city_,!0),d.add("utmtrg",b.state_,!0),d.add("utmtco",b.country_,!0),he(a,d),fe(a,d),ge(a,d),(b=a.get(hb))&&d.add("utmcu",b,!0),c||(de(a,d),ce(a,d)),d[aa]()},je=function(a,b,c){var d=new _d;return ae(a,c),be(a,d),d.add("utmt","item"),d.add("utmtid",b.transId_,!0),d.add("utmipc",b.sku_,!0),d.add("utmipn",b.name_,!0),d.add("utmiva",b.category_,!0),d.add("utmipr",b.price_,!0),d.add("utmiqt",b.quantity_,!0),he(a,d),fe(a,d),ge(a,d),(b=a.get(hb))&&d.add("utmcu",b,!0),c||(de(a,d),ce(a,d)),d[aa]()},ke=function(a,b){var c=a.get(Vb);if("page"==c)c=new _d,ae(a,b),be(a,c),he(a,c),fe(a,c),ge(a,c),b||(de(a,c),ce(a,c)),c=[c[aa]()];else if("event"==c)c=new _d,ae(a,b),be(a,c),c.add("utmt","event"),he(a,c),fe(a,c),ge(a,c),b||(de(a,c),ce(a,c)),c=[c[aa]()];else if("var"==c)c=new _d,ae(a,b),be(a,c),c.add("utmt","var"),!b&&ce(a,c),c=[c[aa]()];else if("trans"==c)for(var c=[],d=a.get(db),e=0;e<d[ba];++e){c[M](ie(a,d[e],b));for(var f=d[e].items_,g=0;g<f[ba];++g)c[M](je(a,f[g],b))}else"social"==c?b?c=[]:(c=new _d,ae(a,b),be(a,c),c.add("utmt","social"),c.add("utmsn",a.get(bc),!0),c.add("utmsa",a.get(cc),!0),c.add("utmsid",a.get(dc),!0),he(a,c),fe(a,c),ge(a,c),de(a,c),ce(a,c),c=[c[aa]()]):"feedback"==c?b?c=[]:(c=new _d,ae(a,b),be(a,c),c.add("utmt","feedback"),c.add("utmfbid",a.get(hc),!0),c.add("utmfbpr",a.get(ic),!0),he(a,c),fe(a,c),ge(a,c),de(a,c),ce(a,c),c=[c[aa]()]):c=[];return c},le=function(a){var b,c=a.get($a),d=a.get(Xb),e=d&&d.Ua,f=0;if(0==c||2==c){var g=a.get(Za)+"?";b=ke(a,!0);for(var h=0,i=b[ba];h<i;h++)oe(b[h],e,g,!0),f++}if(1==c||2==c)for(b=ke(a),h=0,i=b[ba];h<i;h++)try{oe(b[h],e),f++}catch(a){a&&s(a[Z],void 0,a.message)}d&&(d.q=f)},me=function(b){a(this,"len"),this.message=b+"-8192"},ne=function(b){a(this,"ff2post"),this.message=b+"-2036"},oe=function(a,b,c,d){if(b=b||h,d||2036>=a[ba])pe(a,b,c);else{if(!(8192>=a[ba]))throw new me(a[ba]);if(0<=Qc[pa].userAgent[U]("Firefox")&&![].reduce)throw new ne(a[ba]);qe(a,b)||re(a,b)}},pe=function(a,b,c){c=c||("https:"==Rc[ia][ka]||ue.G?"https://ssl.google-analytics.com":"http://www.google-analytics.com")+"/__utm.gif?";var d=new Image(1,1);d.src=c+a,d.onload=function(){d.onload=null,d.onerror=null,b()},d.onerror=function(){d.onload=null,d.onerror=null,b()}},qe=function(a,b){var c,d=("https:"==Rc[ia][ka]||ue.G?"https://ssl.google-analytics.com":"http://www.google-analytics.com")+"/p/__utm.gif",e=Qc.XDomainRequest;if(e?(c=new e,c.open("POST",d)):(e=Qc.XMLHttpRequest)&&"withCredentials"in(e=new e)&&(c=e,c.open("POST",d,!0),c.setRequestHeader("Content-Type","text/plain")),c)return c.onreadystatechange=function(){4==c.readyState&&(b(),c=null)},c.send(a),!0},re=function(b,c){if(Rc.body){b=G(b);try{var d=Rc[X]('<iframe name="'+b+'"></iframe>')}catch(c){d=Rc[X]("iframe"),a(d,b)}d.height="0",d.width="0",d.style.display="none",d.style.visibility="hidden";var e=Rc[ia],e=("https:"==Rc[ia][ka]||ue.G?"https://ssl.google-analytics.com":"http://www.google-analytics.com")+"/u/post_iframe.html#"+G(e[ka]+"//"+e[_]+"/favicon.ico"),f=function(){d.src="",d.parentNode&&d.parentNode.removeChild(d)};sa(Qc,"beforeunload",f);var g=!1,h=0,i=function(){if(!g){try{if(9<h||d.contentWindow[ia][_]==Rc[ia][_])return g=!0,f(),ta(Qc,"beforeunload",f),void c()}catch(a){}h++,I(i,200)}};sa(d,"load",i),Rc.body.appendChild(d),d.src=e}else Tc(function(){re(b,c)},100)},se=function(){this.G=this.w=!1,this.C={},this.D=[],this.U=0,this.S=[["www.google-analytics.com","","/plugins/"]],this._gasoCPath=this._gasoDomain=void 0,qc(),rc()};F=se[ca],F.oa=function(a,b){return this.r(a,void 0,b)},F.r=function(a,b,c){return b&&B(23),c&&B(67),void 0==b&&(b="~"+ue.U++),a=new Yd(b,a,c),ue.C[b]=a,ue.D[M](a),a},F.u=function(a){return a=a||"",ue.C[a]||ue.r(void 0,a)},F.pa=function(){return ue.D[O](0)},F.aa=function(){this.w=!0},F.la=function(){this.G=!0};var te=function(a){return"prerender"!=Rc.webkitVisibilityState&&(a(),!0)},ue=new se,ve=Qc._gat;ve&&c(ve._getTracker)?ue=ve:Qc._gat=ue;var we=new $c;!function(a){if(!te(a)){B(123);var b=!1,c=function(){!b&&te(a)&&(b=!0,ta(Rc,"webkitvisibilitychange",c))};sa(Rc,"webkitvisibilitychange",c)}}(function(){var a=Qc._gaq,b=!1;if(a&&c(a[M])&&!(b="[object Array]"==Object[ca][aa].call(Object(a))))return void(we=a);Qc._gaq=we,b&&we[M][oa](we,a)})}();