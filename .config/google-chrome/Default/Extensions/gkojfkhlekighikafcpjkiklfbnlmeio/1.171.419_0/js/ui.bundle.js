// LICENSE_CODE ZON
(function(modules){function webpackJsonpCallback(data){var chunkIds=data[0];var moreModules=data[1];var moduleId,chunkId,i=0,resolves=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(Object.prototype.hasOwnProperty.call(installedChunks,chunkId)&&installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}installedChunks[chunkId]=0}for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}if(parentJsonpFunction)parentJsonpFunction(data);while(resolves.length){resolves.shift()()}}var installedModules={};var installedChunks={10:0};function jsonpScriptSrc(chunkId){return __webpack_require__.p+""+({0:"locales",1:"conf",2:"vendors"}[chunkId]||chunkId)+".bundle.js"}function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.e=function requireEnsure(chunkId){var promises=[];var installedChunkData=installedChunks[chunkId];if(installedChunkData!==0){if(installedChunkData){promises.push(installedChunkData[2])}else{var promise=new Promise((function(resolve,reject){installedChunkData=installedChunks[chunkId]=[resolve,reject]}));promises.push(installedChunkData[2]=promise);var script=document.createElement("script");var onScriptComplete;script.charset="utf-8";script.timeout=120;if(__webpack_require__.nc){script.setAttribute("nonce",__webpack_require__.nc)}script.src=jsonpScriptSrc(chunkId);var error=new Error;onScriptComplete=function(event){script.onerror=script.onload=null;clearTimeout(timeout);var chunk=installedChunks[chunkId];if(chunk!==0){if(chunk){var errorType=event&&(event.type==="load"?"missing":event.type);var realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")";error.name="ChunkLoadError";error.type=errorType;error.request=realSrc;chunk[1](error)}installedChunks[chunkId]=undefined}};var timeout=setTimeout((function(){onScriptComplete({type:"timeout",target:script})}),12e4);script.onerror=script.onload=onScriptComplete;document.head.appendChild(script)}}return Promise.all(promises)};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";__webpack_require__.oe=function(err){console.error(err);throw err};var jsonpArray=window["webpackJsonp"]=window["webpackJsonp"]||[];var oldJsonpFunction=jsonpArray.push.bind(jsonpArray);jsonpArray.push=webpackJsonpCallback;jsonpArray=jsonpArray.slice();for(var i=0;i<jsonpArray.length;i++)webpackJsonpCallback(jsonpArray[i]);var parentJsonpFunction=oldJsonpFunction;return __webpack_require__(__webpack_require__.s=0)})([function(module,exports,__webpack_require__){"use strict";
// LICENSE_CODE ZON
(()=>{const chrome=window.chrome;const _init=opt=>{opt=opt||get_qs_params();window.hola.t={l_start:Date.now()};window.hola.tpopup_opt=opt;if(performance.mark)performance.mark("popup_init");Promise.all([__webpack_require__.e(0),__webpack_require__.e(1),__webpack_require__.e(2),__webpack_require__.e(3),__webpack_require__.e(4),__webpack_require__.e(5),__webpack_require__.e(12)]).then((function(){var __WEBPACK_AMD_REQUIRE_ARRAY__=[__webpack_require__(6)];(popup_main=>popup_main.default.init()).apply(null,__WEBPACK_AMD_REQUIRE_ARRAY__)})).catch(__webpack_require__.oe)};const perr=window.hola&&window.hola.base&&window.hola.base.perr||(()=>{});const get_qs_params=()=>{let qs=location.search.substring(1),params={};qs.split("&").forEach(arg=>{let pair=arg.split("=");params[pair[0]]=decodeURIComponent(pair[1])});return params};const conf_by_msg=()=>{let params=get_qs_params();let tab_id=+params.tab_id,connection_id=params.connection_id;if(!tab_id||!connection_id){return perr({id:"be_tpopup_init_err",info:"invalid params: "+location.href,rate_limit:{count:3}})}let t=setTimeout(()=>perr({id:"be_tpopup_init_err",info:"tpopup.init msg timeout",rate_limit:{count:3}}),2e4);chrome.runtime.onMessage.addListener((function cb(msg){if(!msg||msg.id!="cs_tpopup.init"||!msg.data||msg._connection_id!=connection_id){return}clearTimeout(t);chrome.runtime.onMessage.removeListener(cb);_init(msg.data)}));let msg={id:"tpopup.init",_type:"tpopup",_tab_id:tab_id,_connection_id:connection_id};chrome.runtime.sendMessage({type:"be_msg_req",_type:"tpopup",_tab_id:tab_id,context:{rmt:true},msg:{msg:"call_api",obj:"tpopup",func:"send_tpopup_msg",args:[tab_id,msg]}})};const is_iframe=()=>{try{return window!=window.top}catch(e){return true}};const init=()=>{undefined;__webpack_require__.oe=window.hola.base.require_on_error;if(is_iframe())conf_by_msg();else if(document.readyState=="complete")_init();else window.addEventListener("load",()=>_init())};init()})()}]);
//# sourceMappingURL=https://hola.org/be_source_map/1.171.419/ui.js.map