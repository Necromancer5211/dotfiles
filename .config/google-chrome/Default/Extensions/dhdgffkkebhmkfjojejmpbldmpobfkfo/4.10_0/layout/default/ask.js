'use strict';window.requestFileSystem||(window.requestFileSystem=window.webkitRequestFileSystem);window.BlobBuilder||(window.BlobBuilder=window.WebKitBlobBuilder);
Registry.require("promise layout xmlhttprequest convert crcrc curtain layout/default/tabview layout/default/htmlutil helper i18n parser statistics layout/default/layout_helper".split(" "),()=>{const z=rea.FEATURES,D=Registry.get("promise"),m=Registry.get("crcrc").cr,c=Registry.get("crcrc").crc,f=Registry.get("i18n"),E=Registry.get("curtain"),w=Registry.get("helper"),L=Registry.get("layout/default/tabview"),u=Registry.get("layout/default/htmlutil"),X=Registry.get("statistics"),H=Registry.get("layout"),
M=Registry.get("layout/default/layout_helper"),A=M.images;H.render(()=>{let k=null,t={},N="???",F=null,O="0.0.0";const q=(b,a,c)=>{c=c||{};const g=D();try{const e={aid:b,method:a};c.data&&w.each(c.data,(a,b)=>{e[b]=c.data[b]});sendMessage({method:"askCom",data:e},a=>{c.bg||E.hide();t=a.options||t;a.error?(a.please_close&&window.setTimeout(window.close,100),g.reject(a)):g.resolve(a)});c.bg||E.wait(f.getMessage("Please_wait___"))}catch(d){console.warn("sS: "+d.message),g.reject()}return g.promise()},
H=()=>q(k.aid,"ping",{bg:!0}),Y=(b,a,c)=>{try{sendMessage(w.assign({method:"buttonPress",name:b},a),a=>{c&&c(a)})}catch(g){console.log("button: "+g.message)}},B=()=>{var b=c("div","content_wrapper","ask","main");$(document.body).append(b).addClass("main");var a=c("div","head_container","ask","head_container"),e=c("div","tv_container_fit","ask","tv_container");const g=m("a","head_link","ask","head_link");g.href="https://www.tampermonkey.net";g.target="_blank";const d=c("div","float","ask","head1"),
h=c("img","banner","ask");h.src=A.brand("tampermonkey");const f=c("div","float head","ask","head2"),l=c("div","header_title","heading"),p=c("div","version","version","version");p.textContent=" by Jan Biniok";const G=m("div","search","box","");l.innerHTML="Tampermonkey<sup>&reg;</sup>";d.appendChild(h);f.appendChild(l);f.appendChild(p);g.appendChild(d);g.appendChild(f);a.appendChild(g);a.appendChild(G);b.appendChild(a);b.appendChild(e);b=L.create("_main",e);a=m("div","main","main","tab_content_h");
a.textContent=N;e=m("div","main","main","tab_content");b.appendTab(w.createUniqueId("main","main"),a,e).select();b=e;E.hide();return b},Z=b=>{const a=b.script,e=b.oldscript,g=c("div","viewer_bottom_tab","bottom","");b={tv:"tv tv_alt",tv_table:"tv_table tv_table_alt",tr_tabs:"tr_tabs tr_tabs_alt",tr_content:"tr_content tr_content_alt",td_content:"td_content td_content_alt",td_tabs:"td_tabs td_tabs_alt",tv_tabs_align:"tv_tabs_align tv_tabs_align_alt",tv_tabs_fill:"tv_tabs_fill tv_tabs_fill_alt",tv_tabs_table:"tv_tabs_table tv_tabs_table_alt",
tv_contents:"tv_contents tv_contents_alt",tv_tab_selected:"tv_tab tv_selected tv_tab_alt tv_selected_alt",tv_tab_close:"",tv_tab:"tv_tab tv_tab_alt",tv_content:"tv_content tv_content_alt"};if(t.editor_enabled){const d=L.create("_source"+a.uuid,g,b);let n;const l=(a,b)=>{const g=c("div","tv_content tv_content_alt",a.uuid,b+"container_o");var e=c("table","editor_container_o editor_400p_container_o p100100 noborder",a.uuid,b+"container_o");const d=c("tr","editor_container p100100",a.uuid,b+"container");
g.appendChild(e);e.appendChild(d);e=c("td","editor_outer editor_400p_outer",a.uuid,b+"edit");a=c("div","editor_100 editor_border",a.uuid,b+"edit");d.appendChild(e);e.appendChild(a);return{c:g,e:a}};let p=()=>{const a=D();rea.page.addStyle("vendor/cm/mode/diff/diff.css");Registry.vendor(["vendor/jsdiff/diff","vendor/cm/mode/diff/diff"],()=>{p=D.Pledge;a.resolve()});return a.promise()};(()=>e&&e.textContent!=a.textContent?p().then(()=>{const b=m("div",a.uuid,"diff_h");b.textContent=f.getMessage("Changes");
const c=l(a,"diff");g.diff=new MirrorFrame(c.e,{theme:"diff",fontSize:t.editor_fontSize,value:f.getMessage("Please_wait___"),noButtons:!0,mode:"diff",readOnly:!0});n=d.appendTab("diff",b,c.c,()=>{window.setTimeout(()=>{g.diff.refresh();g.diff.mirror.focus()},1)});window.setTimeout(()=>{let b;try{b=window.JsDiff.createTwoFilesPatch(f.getMessage("Current_Version"),f.getMessage("New_Version"),e.textContent,a.textContent,void 0,void 0,{timeout:4E3})}catch(v){console.warn(v)}b||(b=f.getMessage("The_diff_for_this_script_is_too_large_to_render"));
g.diff.mirror.setValue(b)},500)}):D.Pledge())().then(()=>{var b=m("div",a.uuid,"source_h");b.textContent=f.getMessage("Source_Code");const c=l(a,"source");g.editor=new MirrorFrame(c.e,{theme:t.editor_theme,fontSize:t.editor_fontSize,value:a.textContent,noButtons:!0,matchBrackets:!0,readOnly:!0});b=d.appendTab("source",b,c.c,()=>{window.setTimeout(()=>{g.editor.refresh();g.editor.mirror.focus()},1)});n=n||b}).then(()=>{n.select()})}else{var d=c("div","editor_400p_outer","editor",a.name);b=c("div",
"editor_400p editor_border","editor",a.name);g.appendChild(d);d.appendChild(b);d=c("textarea","editorta","editor",a.name);d.setAttribute("wrap","off");b.appendChild(d);d.value=a.textContent}return g},aa=(()=>{const b={};window.addEventListener("keydown",a=>{let c=!1;if("keydown"==a.type&&(b[a.keyCode]&&(c=b[a.keyCode](a)),c))return a.stopPropagation(),a.preventDefault(),!1},!0);return{registerListener:function(a,c){b[a]=c}}})(),x=(b,a,c)=>{w.select(c,a=>a.label).forEach(c=>{const d=c.icon?u.createImageTextButton(c.id,
c.id,c.label,c.icon,c.fn):u.createButton(c.label,c.id,c.label,c.fn),e=$(d);e.addClass(a);c.id&&e.attr("data-btn-id",c.id);b.appendChild(d);c.focus&&window.setTimeout(()=>{e.focus()},300);c.keyDown&&aa.registerListener(c.keyDown.keyCode?c.keyDown.keyCode:c.keyDown,c.keyDown.cb?c.keyDown.cb:c.fn)})},ca=b=>{const a=b.script,e=c("div","viewer_last","install"),g=c("div","viewer_content","install_content"),d=c("div","ask_action_buttons","install_buttons"),h=[];h.push({label:b.messages.action,fn:function(){q(k.aid,
"install")},focus:!0});z.RUNTIME.CHROME&&21>z.RUNTIME.BROWSER_VERSION&&h.push({label:b.messages.flags.install?f.getMessage("Process_with_Chrome"):null,fn:function(){ba(a.fileURL);$(e).hide()}});h.push({label:f.getMessage("Cancel"),fn:y,keyDown:27});x(d,"install",h);g.appendChild(d);e.appendChild(g);return e},da=b=>{const a=c("div","viewer_last","import");var e=c("div","viewer_content","import_content");const g=c("div","ask_action_buttons import_buttons","import_buttons");x(g,"import",[{label:f.getMessage("Import"),
fn:function(){const a=Object.keys(b.scripts).filter(a=>!!$("input[type=checkbox][data-import-id="+a+"]:checked").val()),c=b.global_settings&&!!$("input[type=checkbox][data-import-id=global_settings]:checked").val();q(k.aid,"import",{data:{import_ids:a,global_settings:c}})},focus:!0},{label:f.getMessage("Cancel"),fn:y,keyDown:27}]);e.appendChild(g);a.appendChild(e);e=c("div","section","btn");e.appendChild(a);return e},ea=b=>{b=c("div","viewer_last","ok");const a=c("div","viewer_content","ok_content"),
e=c("div","ask_action_buttons","ok_buttons");x(e,"import",[{label:f.getMessage("Ok"),fn:y,focus:!0}]);a.appendChild(e);b.appendChild(a);return b},fa=(b,a)=>{const e=c("div","viewer_last","ok");var g=c("div","viewer_content","ok_content"),d=c("div","ask_action_buttons","ok_buttons");x(d,"permission",[{label:f.getMessage("Ok"),fn:()=>{const c={permissions:a.permissions,origins:a.origins};rea.permissions.request(c,a=>{let b;rea.runtime.lastError&&(b=rea.runtime.lastError.message,console.warn("notify: error on getting permission",
c,"reason:",b));q(k.aid,"permission",{data:{granted:a,permissions:c.permissions,origins:c.origins,error:b}})})},focus:!0},{label:f.getMessage("Cancel"),fn:y,keyDown:27}]);g.appendChild(d);e.appendChild(g);g=c("div","viewer_upper","permission");d=c("div","viewer_info viewer_info_wide","general","permission");const h=c("div","viewer_content","general_content","permission"),n=m("h3","install","heading","permission"),l=m("span","install","heading_span","permission"),p=c("span","message","heading","permission");
document.title=l.textContent=a.title;p.innerHTML=u.safeTagsReplace(a.message).replace(/\n/g,"<br>");n.appendChild(l);h.appendChild(p);d.appendChild(n);d.appendChild(h);g.appendChild(d);d=c("div","section","perm_src","permission");d.appendChild(g);d.appendChild(e);b.appendChild(d)},ha=(b,a)=>{const e=Date.now();let g,d;a.timeout&&(g=window.setTimeout(()=>{y();h()},a.timeout));const h=()=>{let a;d&&window.clearInterval(d);g&&window.clearTimeout(g);d=g=null;(a=$("input[data-btn-id]")[0])&&a.parentNode.removeChild(a)},
n=c("div","viewer_last","ok");var l=c("div","viewer_content","ok_content");const p=c("div","ask_action_buttons","ok_buttons"),G=c("div","ask_action_buttons","ok_buttons"),r=c("div","ask_action_buttons","ok_buttons");x(p,"connect",[{label:f.getMessage("Allow_once"),icon:"button_ok",fn:function(){return q(k.aid,"connect",{data:{ok:!0,allow:!0,once:!0}})},focus:!0},{label:f.getMessage("Temporarily_allow"),icon:"clock",fn:function(){return q(k.aid,"connect",{data:{ok:!0,allow:!0,temporary:!0}})}},{label:a.hostname!=
a.domain?f.getMessage("Always_allow"):f.getMessage("Always_allow_domain"),icon:"yes_domain",fn:function(){return q(k.aid,"connect",{data:{ok:!0,allow:!0}})}},(()=>a.domain&&a.hostname!=a.domain?{label:f.getMessage("Always_allow_domain"),icon:"yes_domain",fn:function(){return q(k.aid,"connect",{data:{ok:!0,allow:!0,whole_domain:!0}})}}:null)(),(()=>a.all_domains?{label:f.getMessage("Always_allow_all_domains"),icon:"critical",fn:function(){h();if(window.confirm(f.getMessage("This_gives_this_script_the_permission_to_retrieve_and_send_data_from_and_to_every_webpage__This_is_potentially_unsafe__Are_you_sure_you_want_to_continue_")))return q(k.aid,
"connect",{data:{ok:!0,allow:!0,all_domains:!0}})}}:null)()].filter(a=>a));x(G,"connect",[{label:f.getMessage("Forbid_once"),icon:"cancel",fn:function(){return q(k.aid,"connect",{data:{ok:!0,deny:!0,once:!0}})},keyDown:27},{label:a.hostname!=a.domain?f.getMessage("Always_forbid"):f.getMessage("Always_forbid_domain"),icon:"no_domain",fn:function(){return q(k.aid,"connect",{data:{ok:!0,deny:!0}})}},(()=>a.domain&&a.hostname!=a.domain?{label:f.getMessage("Always_forbid_domain"),icon:"no",fn:function(){return q(k.aid,
"connect",{data:{ok:!0,deny:!0,whole_domain:!0}})}}:null)(),{label:f.getMessage("Dont_ask_again"),icon:"no",fn:function(){return q(k.aid,"connect",{data:{ok:!0,deny:!0,all_domains:!0}})}}].filter(a=>a));x(r,"connect_misc",[(()=>a.tabid?{label:f.getMessage("Focus_tab"),icon:"windowlist",fn:function(){Y("focus_tab",{tabid:a.tabid})}}:null)(),(()=>{if(a.timeout)return d=window.setInterval(()=>{let c;(c=$("input[data-btn-id]")[0])&&$(c).attr("value",f.getMessage("Skip_timeout__0seconds0_seconds_",Math.round((a.timeout+
e-Date.now())/1E3)))},1E3),{label:f.getMessage("Skip_timeout__0seconds0_seconds_",Math.round(a.timeout/1E3)),id:"skip_timeout_button",fn:h}})()].filter(a=>a));const t=c("div","viewer_upper","connect"),v=c("div","viewer_info viewer_info_wide","general","connect"),P=c("div","viewer_content","general_content","connect"),Q=m("h3","install","heading","connect"),I=m("span","install","heading_span","connect"),R=c("span","message","heading","connect");if(a.script.icon){var C=m("img","version","heading","connect");
C.src=a.script.icon;I.appendChild(C)}document.title=I.textContent=f.getMessage("A_userscript_wants_to_access_a_cross_origin_resource_");C=c("div","ask_action_buttons message","help","connect");const S=m("div","help","connect");let J=f.getMessage("A_request_to_a_cross_origin_resource_is_nothing_unusual__You_just_have_to_check_whether_this_script_has_a_good_reason_to_access_this_domain__For_example_there_are_only_a_very_few_reasons_for_a_userscript_to_contact_your_bank__Please_note_that_userscript_authors_can_avoid_this_dialog_by_adding_@connect_tags_to_their_scripts__You_can_change_your_opinion_at_any_time_at_the_scripts_settings_tab_",
a.connect_url,a.settings_url);J=u.safeTagsReplace(J).replace(/\[url=([^\]]+)\](.*)\[\/url\]/g,'<a target="_blank" href="$1">$2 &#x2B00;</a>').replace(/\n/g,"<br>");S.innerHTML=J+"<br><br>";C.appendChild(S);Q.appendChild(I);l.appendChild([r,C,p,G]);n.appendChild(l);const T=c("table","script_desc","connect");[{prop:"name",label:f.getMessage("Name")},{prop:"src_url",label:f.getMessage("Tab_URL")},a.domain?{prop:"hostname",label:f.getMessage("Destination_domain")}:null,{prop:"url",label:f.getMessage("Destination_URL")}].forEach(b=>
{if(b){var e=a[b.prop]||a.script[b.prop]||b.value,d=c("tr","script_desc",b.prop,"connect"),g=c("td","script_desc",b.prop,"connectdt"),h=c("td","script_desc",b.prop,"connectdd");g.textContent=b.label?b.label:"";h.textContent=e||f.getMessage("_not_set_");d.appendChild(g);d.appendChild(h);T.appendChild(d)}});R.appendChild(T);P.appendChild(R);v.appendChild(Q);v.appendChild(P);t.appendChild(v);l=c("div","section","connect_src","connect");l.appendChild(t);l.appendChild(n);b.appendChild(l)},ja=(b,a)=>{document.title=
f.getMessage("Import");b.appendChild(da(a));if(a.global_settings){const a=c("div","viewer_upper","");ia({content:a,checkbox:"import",key:"global_settings"});b.appendChild(a)}a.scripts&&Object.keys(a.scripts).forEach(e=>{const g=a.scripts[e],d=c("div","viewer_upper",e);K({content:d,preparat:g,checkbox:"import",key:e},!0);b.appendChild(d)})},U=(b,a)=>{const c=m("input",b+"_",a,"",!0);c.setAttribute("data-import-id",a);c.checked=!0;c.type="checkbox";c.addEventListener("click",b=>{(b.ctrlKey||b.metaKey)&&
$("input[type=checkbox][data-import-id!="+a+"]").prop("checked",c.checked)});return c},ia=b=>{var a=b.key;const e=b.content,g=c("div","viewer_upper",a);var d=c("div","viewer_info viewer_info_wide","general",a);const h=c("div","viewer_content","general_content",a);var n=m("h3","install","heading",a);b.checkbox&&n.appendChild(U(b.checkbox,b.key));b=m("img","version","heading",a);b.src=A.brand("tampermonkey");n.appendChild(b);b=m("span","name","heading",a);b.textContent=f.getMessage("Global_Settings");
n.appendChild(b);d.appendChild(n);n=c("table","script_desc",a);b=c("tr","settings_desc","action",a);let l=c("td","settings_desc","action",a+"dt"),p=c("td","settings_desc","action",a+"dd");l.textContent=f.getMessage("Action");p.textContent=f.getMessage("Global_settings_import");b.appendChild(l);b.appendChild(p);n.appendChild(b);b=c("tr","settings_desc","warning",a);l=c("td","settings_desc","warning",a+"dt");p=c("td","settings_desc","warning",a+"dd");a='<i class="far fa-'+A.get("critical")+'"></i>&nbsp;';
z.RUNTIME.MOBILE||(l.innerHTML=a,a="");p.innerHTML=a+u.safeTagsReplace(f.getMessage("This_will_overwrite_your_global_settings_"));b.appendChild(l);b.appendChild(p);n.appendChild(b);h.appendChild(n);d.appendChild(h);g.appendChild(d);d=c("div","section","settings_src");d.appendChild(g);e.appendChild(d)},K=(b,a)=>{const e=b.preparat,g=b.content,d=e.script||{},h=d.uuid||d.id||d.name;e.short_info||(e.short_info=[]);const n=c("div","viewer_upper",h);var l=c("div","viewer_info "+(a?"viewer_info_wide":"viewer_info_multiple"),
"general",h);const p=c("div","viewer_content","general_content",h);var k=m("h3","install","heading",h);b.checkbox&&k.appendChild(U(b.checkbox,b.key));if(d.icon||d.icon64){var r=m("img","version","heading",h);r.src=d.icon||d.icon64;k.appendChild(r)}r=m("span","name","heading",h);r.textContent=e.heading||d.name||"";k.appendChild(r);d.version&&(r=c("span","view_version","heading",h),r.textContent="v"==d.version[0]?"":"v",r.textContent+=d.version,k.appendChild(r));l.appendChild(k);a&&e.short_info.unshift({prop:"heading",
value:e.messages.heading,label:f.getMessage("Action")});const q=c("table","script_desc",h);e.short_info.forEach(b=>{const e=d[b.prop]||b.value;if(e||!a){var g=c("tr","script_desc",b.prop,h),l=c("td","script_desc",b.prop,h+"dt"),k=c("td","script_desc",b.prop,h+"dd");l.textContent=b.label?b.label:"";k.textContent=e||f.getMessage("_not_set_");g.appendChild(l);g.appendChild(k);q.appendChild(g)}});p.appendChild(q);k=c("div","viewer_info viewer_info_multiple","info",h);let v;a?v=p:(v=c("div","viewer_content",
"info_content",h),r=m("h4","action","heading",h),document.title=r.textContent=e.messages.heading,v.appendChild(r));let t=0;["errors","warnings","info"].forEach(a=>{const b=m("table",a,h+t);(e.messages[a]||[]).forEach(c=>{t++;const d=m("tr",a,h+t),e=m("td",a,h+"dt"+t),g=m("td",a,h+"dd"+t);if("info"==a)if(c.label&&c.value)e.textContent=c.label,g.textContent=c.value;else{var f='<i class="far fa-'+A.get("info")+'"></i>&nbsp;';z.RUNTIME.MOBILE||(e.innerHTML=f,f="");g.innerHTML=f+u.safeTagsReplace(c).replace(/\n/g,
"<br />")}else"warnings"==a?(f='<i class="far fa-'+A.get("critical")+'"></i>&nbsp;',z.RUNTIME.MOBILE||(e.innerHTML=f,f=""),g.innerHTML=f+u.safeTagsReplace(c).replace(/\n/g,"<br />")):"errors"==a&&(f='<i class="far fa-'+A.get("error")+'"></i>&nbsp;',z.RUNTIME.MOBILE||(e.innerHTML=f,f=""),g.innerHTML=f+u.safeTagsReplace(c).replace(/\n/g,"<br />"));d.appendChild(e);d.appendChild(g);b.appendChild(d)});v.appendChild(b)});r=(a,b,e,g)=>{const l=m("table",a,h);let k=0;const n={};b.forEach(b=>{if(!(k>g||n[b])){n[b]=
!0;var d=c("tr",a+"desc",b,h+k),f=c("td",a+"desc",b,h+k+"dt"),m=c("td",a+"desc",b,h+k+"dd");f.innerHTML=0==k?u.safeTagsReplace(e.label):"&nbsp;";m.innerHTML=k==g?'<span title="'+u.safeTagsReplace(e.warning)+'">...!</span>':u.safeTagsReplace(b);d.appendChild(f);d.appendChild(m);l.appendChild(d);k++}});if(d.options&&(b=d.options.override&&d.options.override["use_"+a])&&b.length){b=c("tr",a+"desc","ovverride",h+k);const d=c("td",a+"desc","ovverride",h+k+"dt"),g=c("td",a+"desc","ovverride",h+k+"dd");
d.innerHTML=0==k?u.safeTagsReplace(e.label):"&nbsp;";g.innerHTML=u.safeTagsReplace(" ("+f.getMessage("overwritten_by_user")+")");b.appendChild(d);b.appendChild(g);l.appendChild(b)}v.appendChild(l)};r("includes",(d.includes||[]).concat(d.matches||[]),{label:f.getMessage("Include_s__"),warning:f.getMessage("Attention_Can_not_display_all_includes_")},5);r("excludes",d.excludes||[],{label:f.getMessage("Exclude_s__"),warning:f.getMessage("Attention_Can_not_display_all_excludes_")},3);l.appendChild(p);
k.appendChild(v);n.appendChild(l);n.appendChild(k);l=c("div","section",h,"install_src");l.appendChild(n);b.install&&l.appendChild(b.install(e));b.editor&&l.appendChild(b.editor(e));g.appendChild(l)},ba=b=>{q(k.aid,"abort");window.setTimeout(()=>{window.location=b+"#bypass=true"},10)};var y=b=>{q(k.aid,"abort");window.setTimeout(()=>{window.close()},3E3)};const V=(b,a)=>{q(k.aid,"unload");F&&(window.clearInterval(F),F=null);window.removeEventListener("unload",V)};window.addEventListener("unload",V);
const W=()=>{window.location.search||window.location.hash?(k=w.getUrlArgs(),k.aid?(q(k.aid,"preparat").done(b=>{b.ext&&b.ext.version&&(O=b.ext.version);if(b.options&&(b.options.statistics_enabled&&X.init("ask",O,!0),b.options.layout_user_css)){var a=document.createElement("style");a.innerHTML=b.options.layout_user_css;(document.head||document.body||document.documentElement||document).appendChild(a)}N=f.getMessage("Install");a=null;b.preparat&&("install"==b.type?a=()=>{K({content:B(),preparat:b.preparat,
install:ca,editor:Z})}:"install_error"==b.type?a=()=>{K({content:B(),preparat:b.preparat,install:ea},!0)}:"import"==b.type?a=()=>{ja(B(),b.preparat)}:"permission"==b.type?a=()=>{fa(B(),b.preparat)}:"connect"==b.type&&(a=()=>{ha(B(),b.preparat)}),F=window.setInterval(H,3E3),a&&window.setTimeout(a,1))}).fail(()=>{y()}),E.wait(f.getMessage("Please_wait___"))):y()):window.onhashchange=()=>{W()}};rea.extension.onMessage.addListener((b,a,c)=>{t=b.options||t;if("confirm"==b.method)w.confirm(b.msg,a=>{c({confirm:a})});
else if("showMsg"==b.method)w.alert(b.msg),c({});else return!1;return!0});M.addStyle(W)})});
