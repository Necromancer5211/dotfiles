/******/!function(e){// webpackBootstrap
/******/ // The module cache
/******/var t={};
/******/
/******/ // The require function
/******/function n(r){
/******/
/******/ // Check if module is in cache
/******/if(t[r])
/******/return t[r].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var o=t[r]={
/******/i:r,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[r].call(o.exports,o,o.exports,n),
/******/
/******/ // Flag the module as loaded
/******/o.l=!0,o.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/
/******/
/******/
/******/ // Load entry module and return exports
/******/n.m=e,
/******/
/******/ // expose the module cache
/******/n.c=t,
/******/
/******/ // define getter function for harmony exports
/******/n.d=function(e,t,r){
/******/n.o(e,t)||
/******/Object.defineProperty(e,t,{enumerable:!0,get:r})
/******/},
/******/
/******/ // define __esModule on exports
/******/n.r=function(e){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/n.t=function(e,t){
/******/if(
/******/1&t&&(e=n(e)),8&t)return e;
/******/if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;
/******/var r=Object.create(null);
/******/
/******/if(n.r(r),
/******/Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));
/******/return r;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/n.n=function(e){
/******/var t=e&&e.__esModule?
/******/function(){return e.default}:
/******/function(){return e};
/******/
/******/return n.d(t,"a",t),t;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/ // __webpack_public_path__
/******/n.p="",n(n.s=18);
/******/}
/************************************************************************/
/******/([
/* 0 */
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"e",(function(){return r})),
/* harmony export (binding) */n.d(t,"f",(function(){return o})),
/* harmony export (binding) */n.d(t,"h",(function(){return i})),
/* harmony export (binding) */n.d(t,"g",(function(){return a})),
/* harmony export (binding) */n.d(t,"i",(function(){return u})),
/* harmony export (binding) */n.d(t,"j",(function(){return l})),
/* harmony export (binding) */n.d(t,"k",(function(){return c})),
/* harmony export (binding) */n.d(t,"l",(function(){return s})),
/* harmony export (binding) */n.d(t,"m",(function(){return f})),
/* harmony export (binding) */n.d(t,"n",(function(){return p})),
/* harmony export (binding) */n.d(t,"o",(function(){return d})),
/* harmony export (binding) */n.d(t,"b",(function(){return h})),
/* harmony export (binding) */n.d(t,"a",(function(){return m})),
/* harmony export (binding) */n.d(t,"d",(function(){return v})),
/* harmony export (binding) */n.d(t,"c",(function(){return g}));
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// WARNING
// The values below are referenced by ComponentFilters (which are saved via localStorage).
// Do not change them or it will break previously saved user customizations.
// If new element types are added, use new numbers rather than re-ordering existing ones.
// Changing these types is also a backwards breaking change for the standalone shell,
// since the frontend and backend must share the same values-
// and the backend is embedded in certain environments (like React Native).
var r=1,o=2,i=5,a=6,u=7,l=8,c=9,s=10,f=11,p=12,d=13,h=1,m=2,v=3,g=4},
/* 1 */
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"a",(function(){return r})),
/* harmony export (binding) */n.d(t,"b",(function(){return o})),
/* harmony export (binding) */n.d(t,"c",(function(){return i})),
/* harmony export (binding) */n.d(t,"d",(function(){return a})),
/* harmony export (binding) */n.d(t,"e",(function(){return u})),
/* harmony export (binding) */n.d(t,"f",(function(){return l})),
/* harmony export (binding) */n.d(t,"g",(function(){return c})),
/* unused harmony export ELEMENT_NUMBER */
/* unused harmony export ELEMENT_SYMBOL_STRING */
/* unused harmony export DEBUG_TRACING_MODE_NUMBER */
/* unused harmony export DEBUG_TRACING_MODE_SYMBOL_STRING */
/* harmony export (binding) */n.d(t,"h",(function(){return s})),
/* harmony export (binding) */n.d(t,"i",(function(){return f})),
/* unused harmony export FRAGMENT_NUMBER */
/* unused harmony export FRAGMENT_SYMBOL_STRING */
/* unused harmony export FUNDAMENTAL_NUMBER */
/* unused harmony export FUNDAMENTAL_SYMBOL_STRING */
/* harmony export (binding) */n.d(t,"j",(function(){return p})),
/* harmony export (binding) */n.d(t,"k",(function(){return d})),
/* harmony export (binding) */n.d(t,"l",(function(){return h})),
/* harmony export (binding) */n.d(t,"m",(function(){return m})),
/* unused harmony export OPAQUE_ID_NUMBER */
/* unused harmony export OPAQUE_ID_SYMBOL_STRING */
/* unused harmony export PORTAL_NUMBER */
/* unused harmony export PORTAL_SYMBOL_STRING */
/* harmony export (binding) */n.d(t,"n",(function(){return v})),
/* harmony export (binding) */n.d(t,"o",(function(){return g})),
/* harmony export (binding) */n.d(t,"p",(function(){return y})),
/* harmony export (binding) */n.d(t,"q",(function(){return b})),
/* unused harmony export RESPONDER_NUMBER */
/* unused harmony export RESPONDER_SYMBOL_STRING */
/* harmony export (binding) */n.d(t,"r",(function(){return w})),
/* harmony export (binding) */n.d(t,"s",(function(){return E})),
/* unused harmony export SERVER_BLOCK_NUMBER */
/* unused harmony export SERVER_BLOCK_SYMBOL_STRING */
/* harmony export (binding) */n.d(t,"t",(function(){return O})),
/* harmony export (binding) */n.d(t,"u",(function(){return S})),
/* harmony export (binding) */n.d(t,"x",(function(){return I})),
/* harmony export (binding) */n.d(t,"y",(function(){return k})),
/* harmony export (binding) */n.d(t,"v",(function(){return _})),
/* harmony export (binding) */n.d(t,"w",(function(){return R}));
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This list should be kept updated to reflect additions to 'shared/ReactSymbols'.
// DevTools can't import symbols from 'shared/ReactSymbols' directly for two reasons:
// 1. DevTools requires symbols which may have been deleted in more recent versions (e.g. concurrent mode)
// 2. DevTools must support both Symbol and numeric forms of each symbol;
//    Since e.g. standalone DevTools runs in a separate process, it can't rely on its own ES capabilities.
var r=60121,o="Symbol(react.block)",i=60111,a="Symbol(react.concurrent_mode)",u=60110,l="Symbol(react.context)",c="Symbol(react.async_mode)",s=60112,f="Symbol(react.forward_ref)",p=60116,d="Symbol(react.lazy)",h=60115,m="Symbol(react.memo)",v=60114,g="Symbol(react.profiler)",y=60109,b="Symbol(react.provider)",w=60119,E="Symbol(react.scope)",O=60108,S="Symbol(react.strict_mode)",I=60113,k="Symbol(react.suspense)",_=60120,R="Symbol(react.suspense_list)"},
/* 2 */
/***/function(e,t,n){"use strict";
/* unused harmony export alphaSortKeys */
/* harmony export (binding) */n.d(t,"d",(function(){return h})),
/* harmony export (binding) */n.d(t,"g",(function(){return v})),
/* unused harmony export utfDecodeString */
/* harmony export (binding) */n.d(t,"j",(function(){return g})),
/* harmony export (binding) */n.d(t,"h",(function(){return y})),
/* harmony export (binding) */n.d(t,"c",(function(){return b})),
/* unused harmony export getSavedComponentFilters */
/* unused harmony export saveComponentFilters */
/* unused harmony export getAppendComponentStack */
/* unused harmony export setAppendComponentStack */
/* unused harmony export getBreakOnConsoleErrors */
/* unused harmony export setBreakOnConsoleErrors */
/* unused harmony export separateDisplayNameAndHOCs */
/* unused harmony export shallowDiffers */
/* harmony export (binding) */n.d(t,"f",(function(){return w})),
/* harmony export (binding) */n.d(t,"i",(function(){return E})),
/* harmony export (binding) */n.d(t,"b",(function(){return O})),
/* harmony export (binding) */n.d(t,"e",(function(){return S})),
/* harmony export (binding) */n.d(t,"a",(function(){return k}));
/* harmony import */var r=n(15),o=n.n(r),i=n(6),a=n(3),u=n(0),l=(n(4),n(8));
/* harmony import */function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=new WeakMap,p=new o.a({max:1e3});// On large trees, encoding takes significant time.
// Try to reuse the already encoded strings.
function d(e,t){return e>t?1:t>e?-1:0}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Anonymous",n=f.get(e);if(null!=n)return n;var r=t;// The displayName property is not guaranteed to be a string.
// It's only safe to use for our purposes if it's a string.
// github.com/facebook/react-devtools/issues/803
return"string"==typeof e.displayName?r=e.displayName:"string"==typeof e.name&&""!==e.name&&(r=e.name),f.set(e,r),r}var m=0;function v(){return++m}function g(e){var t=p.get(e);if(void 0!==t)return t;for(var n=new Array(e.length),r=0;r<e.length;r++)n[r]=e.codePointAt(r);return p.set(e,n),n}function y(e){for(
// The first two values are always rendererID and rootID
var t,n=e[0],r=e[1],o=["operations for renderer:".concat(n," and root:").concat(r)],i=2,l=[null],c=e[i++],f=i+c;i<f;){var p=e[i++],d=(t=e.slice(i,i+p),String.fromCodePoint.apply(String,s(t)));l.push(d),i+=p}for(;i<e.length;){var h=e[i];switch(h){case a.g:var m=e[i+1],v=e[i+2];if(i+=3,v===u.m)o.push("Add new root node ".concat(m)),i++,// supportsProfiling
i++;else{var g=e[i];i++;// ownerID
var y=l[e[++i]];i++,i++,// key
o.push("Add node ".concat(m," (").concat(y||"null",") as child of ").concat(g))}break;case a.h:var b=e[i+1];i+=2;for(var w=0;w<b;w++){var E=e[i];i+=1,o.push("Remove node ".concat(E))}break;case a.i:var O=e[i+1],S=e[i+2];i+=3;var I=e.slice(i,i+S);i+=S,o.push("Re-order node ".concat(O," children ").concat(I.join(",")));break;case a.j:
// Base duration updates are only sent while profiling is in progress.
// We can ignore them at this point.
// The profiler UI uses them lazily in order to generate the tree.
i+=3;break;default:throw Error("Unsupported Bridge operation ".concat(h))}}console.log(o.join("\n  "))}function b(){return[{type:u.b,value:u.i,isEnabled:!0}]}function w(e,t){return t.reduce((function(e,t){if(e){if(hasOwnProperty.call(e,t))return e[t];if("function"==typeof e[Symbol.iterator])
// Convert iterable to array and return array[index]
// TRICKY
// Don't use [...spread] syntax for this purpose.
// This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
// Other types (e.g. typed arrays, Sets) will not spread correctly.
return Array.from(e)[t]}return null}),e)}function E(e,t,n){var r=t.length,o=t[r-1];if(null!=e){var i=w(e,t.slice(0,r-1));i&&(i[o]=n)}}
/**
 * Get a enhanced/artificial type string based on the object instance
 */function O(e){if(null===e)return"null";if(void 0===e)return"undefined";if(Object(i.isElement)(e))return"react_element";if("undefined"!=typeof HTMLElement&&e instanceof HTMLElement)return"html_element";switch(c(e)){case"bigint":return"bigint";case"boolean":return"boolean";case"function":return"function";case"number":return Number.isNaN(e)?"nan":Number.isFinite(e)?"number":"infinity";case"object":return Array.isArray(e)?"array":ArrayBuffer.isView(e)?hasOwnProperty.call(e.constructor,"BYTES_PER_ELEMENT")?"typed_array":"data_view":e.constructor&&"ArrayBuffer"===e.constructor.name?"array_buffer":"function"==typeof e[Symbol.iterator]?"iterator":e.constructor&&"RegExp"===e.constructor.name?"regexp":"[object Date]"===Object.prototype.toString.call(e)?"date":"object";case"string":return"string";case"symbol":return"symbol";default:return"unknown"}}function S(e){switch(Object(i.typeOf)(e)){case i.ContextConsumer:return"ContextConsumer";case i.ContextProvider:return"ContextProvider";case i.ForwardRef:return"ForwardRef";case i.Fragment:return"Fragment";case i.Lazy:return"Lazy";case i.Memo:return"Memo";case i.Portal:return"Portal";case i.Profiler:return"Profiler";case i.StrictMode:return"StrictMode";case i.Suspense:return"Suspense";default:var t=e.type;return"string"==typeof t?t:null!=t?h(t,"Anonymous"):"Element"}}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e.length>t?e.substr(0,t)+"…":e}// Attempts to mimic Chrome's inline preview for values.
// For example, the following value...
//   {
//      foo: 123,
//      bar: "abc",
//      baz: [true, false],
//      qux: { ab: 1, cd: 2 }
//   };

// Would show a preview of...
//   {foo: 123, bar: "abc", baz: Array(2), qux: {…}}

// And the following value...
//   [
//     123,
//     "abc",
//     [true, false],
//     { foo: 123, bar: "abc" }
//   ];

// Would show a preview of...
//   [123, "abc", Array(2), {…}]
function k(e,t){if(null!=e&&hasOwnProperty.call(e,l.b.type))return t?e[l.b.preview_long]:e[l.b.preview_short];switch(O(e)){case"html_element":return"<".concat(I(e.tagName.toLowerCase())," />");case"function":return I("ƒ ".concat(e.name,"() {}"));case"string":return'"'.concat(e,'"');case"bigint":return I(e.toString()+"n");case"regexp":case"symbol":return I(e.toString());case"react_element":return"<".concat(I(S(e)||"Unknown")," />");case"array_buffer":return"ArrayBuffer(".concat(e.byteLength,")");case"data_view":return"DataView(".concat(e.buffer.byteLength,")");case"array":if(t){for(var n="",r=0;r<e.length&&(r>0&&(n+=", "),!((n+=k(e[r],!1)).length>50));r++);return"[".concat(I(n),"]")}var o=hasOwnProperty.call(e,l.b.size)?e[l.b.size]:e.length;return"Array(".concat(o,")");case"typed_array":var i="".concat(e.constructor.name,"(").concat(e.length,")");if(t){for(var a="",u=0;u<e.length&&(u>0&&(a+=", "),!((a+=e[u]).length>50));u++);return"".concat(i," [").concat(I(a),"]")}return i;case"iterator":var c=e.constructor.name;if(t){for(
// TRICKY
// Don't use [...spread] syntax for this purpose.
// This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
// Other types (e.g. typed arrays, Sets) will not spread correctly.
var s=Array.from(e),f="",p=0;p<s.length;p++){var h=s[p];// TRICKY
// Browsers display Maps and Sets differently.
// To mimic their behavior, detect if we've been given an entries tuple.
//   Map(2) {"abc" => 123, "def" => 123}
//   Set(2) {"abc", 123}
if(p>0&&(f+=", "),Array.isArray(h)){var m=k(h[0],!0),v=k(h[1],!1);f+="".concat(m," => ").concat(v)}else f+=k(h,!1);if(f.length>50)
// Prevent doing a lot of unnecessary iteration...
break}return"".concat(c,"(").concat(e.size,") {").concat(I(f),"}")}return"".concat(c,"(").concat(e.size,")");case"date":return e.toString();case"object":if(t){for(var g=Object.keys(e).sort(d),y="",b=0;b<g.length;b++){var w=g[b];if(b>0&&(y+=", "),(y+="".concat(w,": ").concat(k(e[w],!1))).length>50)
// Prevent doing a lot of unnecessary iteration...
break}return"{".concat(I(y),"}")}return"{…}";case"boolean":case"number":case"infinity":case"nan":case"null":case"undefined":return e;default:try{return I(""+e)}catch(e){return"unserializable"}}}
/***/},
/* 3 */
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"k",(function(){return r})),
/* harmony export (binding) */n.d(t,"g",(function(){return o})),
/* harmony export (binding) */n.d(t,"h",(function(){return i})),
/* harmony export (binding) */n.d(t,"i",(function(){return a})),
/* harmony export (binding) */n.d(t,"j",(function(){return u})),
/* harmony export (binding) */n.d(t,"a",(function(){return l})),
/* harmony export (binding) */n.d(t,"d",(function(){return c})),
/* harmony export (binding) */n.d(t,"e",(function(){return s})),
/* harmony export (binding) */n.d(t,"f",(function(){return f})),
/* harmony export (binding) */n.d(t,"b",(function(){return p})),
/* harmony export (binding) */n.d(t,"c",(function(){return d}));
/* unused harmony export LOCAL_STORAGE_TRACE_UPDATES_ENABLED_KEY */
/* unused harmony export PROFILER_EXPORT_VERSION */
/* unused harmony export CHANGE_LOG_URL */
/* unused harmony export UNSUPPORTED_VERSION_URL */
/* unused harmony export COMFORTABLE_LINE_HEIGHT */
/* unused harmony export COMPACT_LINE_HEIGHT */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Flip this flag to true to enable verbose console debug logging.
var r=!1,o=1,i=2,a=3,u=4,l="React::DevTools::componentFilters",c="React::DevTools::lastSelection",s="React::DevTools::recordChangeDescriptions",f="React::DevTools::reloadAndProfile",p="React::DevTools::breakOnConsoleErrors",d="React::DevTools::appendComponentStack";try{
// $FlowFixMe
var h=n(20).default,m=function(e){var t=new RegExp("".concat(e,": ([0-9]+)")),n=h.match(t);return parseInt(n[1],10)};m("comfortable-line-height-data"),m("compact-line-height-data")}catch(e){
// We can't use the Webpack loader syntax in the context of Jest,
// so tests need some reasonably meaningful fallback value.
15,10}
/***/},
/* 4 */
/***/function(e,t,n){"use strict";
/* harmony export (binding) */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function r(e){try{return localStorage.getItem(e)}catch(e){return null}}function o(e,t){try{return localStorage.setItem(e,t)}catch(e){}}function i(e){try{return sessionStorage.getItem(e)}catch(e){return null}}function a(e){try{sessionStorage.removeItem(e)}catch(e){}}function u(e,t){try{return sessionStorage.setItem(e,t)}catch(e){}}
/***/n.d(t,"a",(function(){return r})),
/* unused harmony export localStorageRemoveItem */
/* harmony export (binding) */n.d(t,"b",(function(){return o})),
/* harmony export (binding) */n.d(t,"c",(function(){return i})),
/* harmony export (binding) */n.d(t,"d",(function(){return a})),
/* harmony export (binding) */n.d(t,"e",(function(){return u}))},
/* 5 */
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"a",(function(){return c})),
/* harmony export (binding) */n.d(t,"b",(function(){return s})),
/* harmony export (binding) */n.d(t,"c",(function(){return f}));
/* unused harmony export serializeToString */
/* harmony import */var r=n(16),o=n(8);
/* harmony import */function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(null!==e){var r=[],i=[],a=Object(o.a)(e,r,i,n,t);return{data:a,cleaned:r,unserializable:i}}return null}function s(e){var t,n,o=(t=e,n=new Set,JSON.stringify(t,(function(e,t){if("object"===i(t)&&null!==t){if(n.has(t))return;n.add(t)}// $FlowFixMe
return"bigint"==typeof t?t.toString()+"n":t}))),a=void 0===o?"undefined":o,u=window.__REACT_DEVTOOLS_GLOBAL_HOOK__.clipboardCopyText;// On Firefox navigator.clipboard.writeText has to be called from
// the content script js code (because it requires the clipboardWrite
// permission to be allowed out of a "user handling" callback),
// clipboardCopyText is an helper injected into the page from.
// injectGlobalHook.
"function"==typeof u?u(a).catch((function(e){})):Object(r.copy)(a)}function f(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(r>=t.length)return n;var o=t[r],i=Array.isArray(e)?e.slice():u({},e);// $FlowFixMe number or string is fine here
return i[o]=f(e[o],t,n,r+1),i}},
/* 6 */
/***/function(e,t,n){"use strict";e.exports=n(24)},
/* 7 */
/***/function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;// Detect buggy property enumeration order in older V8 versions.
// https://bugs.chromium.org/p/v8/issues/detail?id=4118
var e=new String("abc");// eslint-disable-line no-new-wrappers
if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){
// We don't expect any of the above to throw, but better to be safe.
return!1}}()?Object.assign:function(e,t){for(var n,u,l=a(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))o.call(n,s)&&(l[s]=n[s]);if(r){u=r(n);for(var f=0;f<u.length;f++)i.call(n,u[f])&&(l[u[f]]=n[u[f]])}}return l}},
/* 8 */
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"b",(function(){return i})),
/* harmony export (binding) */n.d(t,"a",(function(){return u}));
/* unused harmony export fillInPath */
/* unused harmony export hydrate */
/* harmony import */var r=n(2);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */var i={inspectable:Symbol("inspectable"),inspected:Symbol("inspected"),name:Symbol("name"),preview_long:Symbol("preview_long"),preview_short:Symbol("preview_short"),readonly:Symbol("readonly"),size:Symbol("size"),type:Symbol("type"),unserializable:Symbol("unserializable")};
// This threshold determines the depth at which the bridge "dehydrates" nested data.
// Dehydration means that we don't serialize the data for e.g. postMessage or stringify,
// unless the frontend explicitly requests it (e.g. a user clicks to expand a props object).

// Reducing this threshold will improve the speed of initial component inspection,
// but may decrease the responsiveness of expanding objects/arrays to inspect further.
/**
 * Generate the dehydrated metadata for complex object instances
 */
function a(e,t,n,o,i){o.push(i);var a={inspectable:t,type:e,preview_long:Object(r.a)(n,!0),preview_short:Object(r.a)(n,!1),name:n.constructor&&"Object"!==n.constructor.name?n.constructor.name:""};return"array"===e||"typed_array"===e?a.size=n.length:"object"===e&&(a.size=Object.keys(n).length),"iterator"!==e&&"typed_array"!==e||(a.readonly=!0),a}
/**
 * Strip out complex data (instances, functions, and data nested > LEVEL_THRESHOLD levels deep).
 * The paths of the stripped out objects are appended to the `cleaned` list.
 * On the other side of the barrier, the cleaned list is used to "re-hydrate" the cleaned representation into
 * an object with symbols as attributes, so that a sanitized object can be distinguished from a normal object.
 *
 * Input: {"some": {"attr": fn()}, "other": AnInstance}
 * Output: {
 *   "some": {
 *     "attr": {"name": the fn.name, type: "function"}
 *   },
 *   "other": {
 *     "name": "AnInstance",
 *     "type": "object",
 *   },
 * }
 * and cleaned = [["some", "attr"], ["other"]]
 */function u(e,t,n,i,l){var c,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,f=Object(r.b)(e);switch(f){case"html_element":return t.push(i),{inspectable:!1,preview_short:Object(r.a)(e,!1),preview_long:Object(r.a)(e,!0),name:e.tagName,type:f};case"function":return t.push(i),{inspectable:!1,preview_short:Object(r.a)(e,!1),preview_long:Object(r.a)(e,!0),name:e.name||"function",type:f};case"string":return e.length<=500?e:e.slice(0,500)+"...";case"bigint":case"symbol":return t.push(i),{inspectable:!1,preview_short:Object(r.a)(e,!1),preview_long:Object(r.a)(e,!0),name:e.toString(),type:f};
// React Elements aren't very inspector-friendly,
// and often contain private fields or circular references.
case"react_element":return t.push(i),{inspectable:!1,preview_short:Object(r.a)(e,!1),preview_long:Object(r.a)(e,!0),name:Object(r.e)(e)||"Unknown",type:f};
// ArrayBuffers error if you try to inspect them.
case"array_buffer":case"data_view":return t.push(i),{inspectable:!1,preview_short:Object(r.a)(e,!1),preview_long:Object(r.a)(e,!0),name:"data_view"===f?"DataView":"ArrayBuffer",size:e.byteLength,type:f};case"array":return c=l(i),s>=2&&!c?a(f,!0,e,t,i):e.map((function(e,r){return u(e,t,n,i.concat([r]),l,c?1:s+1)}));case"typed_array":case"iterator":if(c=l(i),s>=2&&!c)return a(f,!0,e,t,i);var p={unserializable:!0,type:f,readonly:!0,size:"typed_array"===f?e.length:void 0,preview_short:Object(r.a)(e,!1),preview_long:Object(r.a)(e,!0),name:e.constructor&&"Object"!==e.constructor.name?e.constructor.name:""};return o(e[Symbol.iterator])&&
// TRICKY
// Don't use [...spread] syntax for this purpose.
// This project uses @babel/plugin-transform-spread in "loose" mode which only works with Array values.
// Other types (e.g. typed arrays, Sets) will not spread correctly.
Array.from(e).forEach((function(e,r){return p[r]=u(e,t,n,i.concat([r]),l,c?1:s+1)})),n.push(i),p;case"date":case"regexp":return t.push(i),{inspectable:!1,preview_short:Object(r.a)(e,!1),preview_long:Object(r.a)(e,!0),name:e.toString(),type:f};case"object":if(c=l(i),s>=2&&!c)return a(f,!0,e,t,i);var d={};for(var h in e)d[h]=u(e[h],t,n,i.concat([h]),l,c?1:s+1);return d;case"infinity":case"nan":case"undefined":
// Some values are lossy when sent through a WebSocket.
// We dehydrate+rehydrate them to preserve their type.
return t.push(i),{type:f};default:return e}}},
/* 9 */
/***/function(e,t,n){"use strict";
// EXPORTS
n.d(t,"b",(function(){/* binding */return A})),n.d(t,"a",(function(){/* binding */return D})),n.d(t,"c",(function(){/* binding */return M}));
// UNUSED EXPORTS: dangerous_setTargetConsoleForTesting
// EXTERNAL MODULE: ../react-devtools-shared/src/backend/renderer.js
var r=n(12);
// EXTERNAL MODULE: ../react-devtools-shared/src/backend/ReactSymbols.js
n(1);
// CONCATENATED MODULE: ../shared/ConsolePatchingDev.js
function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var u,l,c,s,f,p,d,h,m=0;function v(){}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/DevToolsComponentStackFrame.js
function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This is a DevTools fork of ReactComponentStackFrame.
// This fork enables DevTools to use the same "native" component stack format,
// while still maintaining support for multiple renderer versions
// (which use different values for ReactTypeOfWork).
// These methods are safe to import from shared;
// there is no React-specific logic here.
function y(e,t,n){if(void 0===h)
// Extract the VM specific prefix used by each line.
try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);h=r&&r[1]||""}// We use the prefix to ensure our stacks line up with native stack frames.
return"\n"+h+e}v.__reactDisabledLog=!0;var b,w=!1,E="function"==typeof WeakMap?WeakMap:Map;function O(e,t,n){
// If something asked for a stack inside a fake render, it should get ignored.
if(!e||w)return"";var r,o=b.get(e);if(void 0!==o)return o;var a,h=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=void 0,w=!0,a=n.current,// Set the dispatcher in DEV because this might be call in the render function
// for warnings.
n.current=null,function(){if(0===m){
/* eslint-disable react-internal/no-production-logging */
u=console.log,l=console.info,c=console.warn,s=console.error,f=console.group,p=console.groupCollapsed,d=console.groupEnd;// https://github.com/facebook/react/issues/19099
var e={configurable:!0,enumerable:!0,value:v,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}m++}();try{
// This should throw.
if(t){
// Something should be setting the props in the constructor.
var E=function(){throw Error()};// $FlowFixMe
if(Object.defineProperty(E.prototype,"props",{set:function(){
// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error()}}),"object"===("undefined"==typeof Reflect?"undefined":g(Reflect))&&Reflect.construct){
// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(E,[])}catch(e){r=e}Reflect.construct(e,[],E)}else{try{E.call()}catch(e){r=e}e.call(E.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){
// This is inlined manually because closure doesn't do it for us.
if(t&&r&&"string"==typeof t.stack){for(
// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
var O=t.stack.split("\n"),S=r.stack.split("\n"),I=O.length-1,k=S.length-1;I>=1&&k>=0&&O[I]!==S[k];)
// We expect at least one stack frame to be shared.
// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
k--;for(;I>=1&&k>=0;I--,k--)
// Next we find the first one that isn't the same which should be the
// frame that called our sample function and the control.
if(O[I]!==S[k]){
// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(1!==I||1!==k)do{// We may still have similar intermediate frames from the construct call.
// The next one that isn't the same should be our match though.
if(I--,--k<0||O[I]!==S[k]){
// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var _="\n"+O[I].replace(" at new "," at ");// Return the line we found.
return"function"==typeof e&&b.set(e,_),_}}while(I>=1&&k>=0);break}}}finally{w=!1,Error.prepareStackTrace=h,n.current=a,function(){if(0===--m){
/* eslint-disable react-internal/no-production-logging */
var e={configurable:!0,enumerable:!0,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:i({},e,{value:u}),info:i({},e,{value:l}),warn:i({},e,{value:c}),error:i({},e,{value:s}),group:i({},e,{value:f}),groupCollapsed:i({},e,{value:p}),groupEnd:i({},e,{value:d})})}m<0&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}()}// Fallback to just using the name if we couldn't make it throw.
var R=e?e.displayName||e.name:"",C=R?y(R):"";return"function"==typeof e&&b.set(e,C),C}function S(e,t,n,r){return O(e,!1,r)}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/DevToolsFiberComponentStack.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This is a DevTools fork of ReactFiberComponentStack.
// This fork enables DevTools to use the same "native" component stack format,
// while still maintaining support for multiple renderer versions
// (which use different values for ReactTypeOfWork).
function I(e,t,n){var r=e.HostComponent,o=e.LazyComponent,i=e.SuspenseComponent,a=e.SuspenseListComponent,u=e.FunctionComponent,l=e.IndeterminateComponent,c=e.SimpleMemoComponent,s=e.ForwardRef,f=e.Block,p=e.ClassComponent;t._debugOwner&&t._debugOwner.type,t._debugSource;switch(t.tag){case r:return y(t.type);case o:return y("Lazy");case i:return y("Suspense");case a:return y("SuspenseList");case u:case l:case c:return S(t.type,0,0,n);case s:return S(t.type.render,0,0,n);case f:return S(t.type._render,0,0,n);case p:return function(e,t,n,r){return O(e,!0,r)}(t.type,0,0,n);default:return""}}function k(e,t,n){try{var r="",o=t;do{r+=I(e,o,n),o=o.return}while(o);return r}catch(e){return"\nError generating stack: "+e.message+"\n"+e.stack}}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/console.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */b=new E;var _=["error","trace","warn"],R=/\s{4}(in|at)\s{1}/,C=/:\d+:\d+(\n|$)/,N=new Map,T=console,x={};// React's custom built component stack strings match "\s{4}in"
// Chrome's prefix matches "\s{4}at"
for(var P in console)x[P]=console[P];var L=null;// Enables e.g. Jest tests to inject a mock console object.
// v16 renderers should use this method to inject internals necessary to generate a component stack.
// These internals will be used if the console is patched.
// Injecting them separately allows the console to easily be patched or un-patched later (at runtime).
function A(e){var t=e.currentDispatcherRef,n=e.getCurrentFiber,o=e.findFiberByHostInstance,i=e.version;// Ignore React v15 and older because they don't expose a component stack anyway.
if("function"==typeof o&&null!=t&&"function"==typeof n){var a=Object(r.b)(i).ReactTypeOfWork;N.set(e,{currentDispatcherRef:t,getCurrentFiber:n,workTagMap:a})}// currentDispatcherRef gets injected for v16.8+ to support hooks inspection.
// getCurrentFiber gets injected for v16.9+.
}var j={appendComponentStack:!1,breakOnConsoleErrors:!1};// Patches console methods to append component stack for the current fiber.
// Call unpatch() to remove the injected behavior.
function D(e){var t=e.appendComponentStack,n=e.breakOnConsoleErrors;
// Settings may change after we've patched the console.
// Using a shared ref allows the patch function to read the latest values.
if(j.appendComponentStack=t,j.breakOnConsoleErrors=n,null===L){var r={};L=function(){for(var e in r)try{
// $FlowFixMe property error|warn is not writable.
T[e]=r[e]}catch(e){}},_.forEach((function(e){try{var t=r[e]=T[e],n=function(){for(var e=j.appendComponentStack,n=j.breakOnConsoleErrors,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];if(e)try{
// If we are ever called with a string that already has a component stack, e.g. a React error/warning,
// don't append a second stack.
var a=o.length>0?o[o.length-1]:null,u=null!==a&&(R.test(a)||C.test(a));if(!u){
// If there's a component stack for at least one of the injected renderers, append it.
// We don't handle the edge case of stacks for more than one (e.g. interleaved renderers?)
// eslint-disable-next-line no-for-of-loops/no-for-of-loops
var l=!0,c=!1,s=void 0;try{for(var f,p=N.values()[Symbol.iterator]();!(l=(f=p.next()).done);l=!0){var d=f.value,h=d.currentDispatcherRef,m=d.getCurrentFiber,v=d.workTagMap,g=m();if(null!=g){var y=k(v,g,h);""!==y&&o.push(y);break}}}catch(e){c=!0,s=e}finally{try{l||null==p.return||p.return()}finally{if(c)throw s}}}}catch(e){// Don't let a DevTools or React internal error interfere with logging.
}if(n)
// --- Welcome to debugging with React DevTools ---
// This debugger statement means that you've enabled the "break on warnings" feature.
// Use the browser's Call Stack panel to step out of this override function-
// to where the original warning or error was logged.
// eslint-disable-next-line no-debugger
debugger;t.apply(void 0,o)};n.__REACT_DEVTOOLS_ORIGINAL_METHOD__=t,// $FlowFixMe property error|warn is not writable.
T[e]=n}catch(e){}}))}}// Removed component stack patch from console methods.
function M(){null!==L&&(L(),L=null)}
/***/},
/* 10 */
/***/function(e,t,n){"use strict";
/* harmony export (binding) */function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return o}));
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var o=

function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n="listenersMap",r=new Map,n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}var t,n,o;return t=e,(n=[{key:"addListener",value:function(e,t){var n=this.listenersMap.get(e);void 0===n?this.listenersMap.set(e,[t]):n.indexOf(t)<0&&n.push(t)}},{key:"emit",value:function(e){var t=this.listenersMap.get(e);if(void 0!==t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];if(1===t.length){
// No need to clone or try/catch
var i=t[0];i.apply(null,r)}else{for(var a=!1,u=null,l=Array.from(t),c=0;c<l.length;c++){var s=l[c];try{s.apply(null,r)}catch(e){null===u&&(a=!0,u=e)}}if(a)throw u}}}},{key:"removeAllListeners",value:function(){this.listenersMap.clear()}},{key:"removeListener",value:function(e,t){var n=this.listenersMap.get(e);if(void 0!==n){var r=n.indexOf(t);r>=0&&n.splice(r,1)}}}])&&r(t.prototype,n),o&&r(t,o),e}();
/***/},
/* 11 */
/***/function(e,t,n){
/* WEBPACK VAR INJECTION */(function(t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
/** Used as the `TypeError` message for "Functions" methods. */var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,l="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t,c="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),f=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return s.Date.now()};
/** Used as references for various `Number` constants. */
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function m(e,t,n){var r,o,i,a,u,l,c=0,s=!1,f=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function b(e){// Invoke the leading edge.
// Reset any `maxWait` timer.
return c=e,// Start the timer for the trailing edge.
u=setTimeout(E,t),s?g(e):a}function w(e){var n=e-l;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||n>=t||n<0||f&&e-c>=i}function E(){var e=h();if(w(e))return O(e);// Restart the timer.
u=setTimeout(E,function(e){var n=t-(e-l);return f?d(n,i-(e-c)):n}(e))}function O(e){// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return u=void 0,m&&r?g(e):(r=o=void 0,a)}function S(){var e=h(),n=w(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return b(l);if(f)
// Handle invocations in a tight loop.
return u=setTimeout(E,t),g(l)}return void 0===u&&(u=setTimeout(E,t)),a}return t=y(t)||0,v(n)&&(s=!!n.leading,i=(f="maxWait"in n)?p(y(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=o=u=void 0},S.flush=function(){return void 0===u?a:O(h())},S}
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function v(e){var t=n(e);return!!e&&("object"==t||"function"==t)}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function g(e){return"symbol"==n(e)||function(e){return!!e&&"object"==n(e)}(e)&&"[object Symbol]"==f.call(e)}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function y(e){if("number"==typeof e)return e;if(g(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),m(e,t,{leading:r,maxWait:t,trailing:o})}}).call(this,n(19))
/***/},
/* 12 */
/***/function(e,t,n){"use strict";
/* harmony export (binding) */n.d(t,"b",(function(){return b})),
/* harmony export (binding) */n.d(t,"a",(function(){return w}));
/* harmony import */var r=n(14),o=n(0),i=n(2),a=n(4),u=n(5),l=n(3),c=n(17),s=n(9),f=n(1);
/* harmony import */function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Some environments (e.g. React Native / Hermes) don't support the performance API yet.
var y="object"===("undefined"==typeof performance?"undefined":g(performance))&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function b(e){var t=null;// **********************************************************
// The section below is copied from files in React repo.
// Keep it in sync, and add version guards if it changes.

// Technically these priority levels are invalid for versions before 16.9,
// but 16.9 is the first version to report priority level to DevTools,
// so we can avoid checking for earlier versions and support pre-16.9 canary releases in the process.
// **********************************************************
// End of copied code.
// **********************************************************
function n(e){var t="object"===g(e)&&null!==e?e.$$typeof:e;// $FlowFixMe Flow doesn't know about typeof "symbol"
return"symbol"===g(t)?t.toString():t}var o=// **********************************************************
// The section below is copied from files in React repo.
// Keep it in sync, and add version guards if it changes.
t=Object(r.gte)(e,"16.6.0-beta.0")?{Block:22,ClassComponent:1,ContextConsumer:9,ContextProvider:10,CoroutineComponent:-1,
// Removed
CoroutineHandlerPhase:-1,
// Removed
DehydratedSuspenseComponent:18,
// Behind a flag
ForwardRef:11,Fragment:7,FunctionComponent:0,HostComponent:5,HostPortal:4,HostRoot:3,HostText:6,IncompleteClassComponent:17,IndeterminateComponent:2,LazyComponent:16,MemoComponent:14,Mode:8,OffscreenComponent:23,
// Experimental
Profiler:12,SimpleMemoComponent:15,SuspenseComponent:13,SuspenseListComponent:19,
// Experimental
YieldComponent:-1}:Object(r.gte)(e,"16.4.3-alpha")?{Block:-1,
// Doesn't exist yet
ClassComponent:2,ContextConsumer:11,ContextProvider:12,CoroutineComponent:-1,
// Removed
CoroutineHandlerPhase:-1,
// Removed
DehydratedSuspenseComponent:-1,
// Doesn't exist yet
ForwardRef:13,Fragment:9,FunctionComponent:0,HostComponent:7,HostPortal:6,HostRoot:5,HostText:8,IncompleteClassComponent:-1,
// Doesn't exist yet
IndeterminateComponent:4,LazyComponent:-1,
// Doesn't exist yet
MemoComponent:-1,
// Doesn't exist yet
Mode:10,OffscreenComponent:-1,
// Experimental
Profiler:15,SimpleMemoComponent:-1,
// Doesn't exist yet
SuspenseComponent:16,SuspenseListComponent:-1,
// Doesn't exist yet
YieldComponent:-1}:{Block:-1,
// Doesn't exist yet
ClassComponent:2,ContextConsumer:12,ContextProvider:13,CoroutineComponent:7,CoroutineHandlerPhase:8,DehydratedSuspenseComponent:-1,
// Doesn't exist yet
ForwardRef:14,Fragment:10,FunctionComponent:1,HostComponent:5,HostPortal:4,HostRoot:3,HostText:6,IncompleteClassComponent:-1,
// Doesn't exist yet
IndeterminateComponent:0,LazyComponent:-1,
// Doesn't exist yet
MemoComponent:-1,
// Doesn't exist yet
Mode:11,OffscreenComponent:-1,
// Experimental
Profiler:15,SimpleMemoComponent:-1,
// Doesn't exist yet
SuspenseComponent:16,SuspenseListComponent:-1,
// Doesn't exist yet
YieldComponent:9},a=o.ClassComponent,u=o.IncompleteClassComponent,l=o.FunctionComponent,c=o.IndeterminateComponent,s=o.ForwardRef,p=o.HostRoot,d=o.HostComponent,h=o.HostPortal,m=o.HostText,v=o.Fragment,y=o.MemoComponent,b=o.SimpleMemoComponent,w=o.SuspenseComponent,E=o.SuspenseListComponent;return{getDisplayNameForFiber:// NOTICE Keep in sync with shouldFilterFiber() and other get*ForFiber methods
function(e){var t=e.type,r=e.tag,o=t;"object"===g(t)&&null!==t&&(o=function e(t){switch(n(t)){case f.l:case f.m:
// recursively resolving memo type in case of memo(forwardRef(Component))
return e(t.type);case f.h:case f.i:return t.render;default:return t}}(t));var O=null;switch(r){case a:case u:return Object(i.d)(o);case l:case c:return Object(i.d)(o);case s:
// Mirror https://github.com/facebook/react/blob/7c21bf72ace77094fd1910cc350a548287ef8350/packages/shared/getComponentName.js#L27-L37
return t&&t.displayName||Object(i.d)(o,"Anonymous");case p:return null;case d:return t;case h:case m:case v:return null;case y:case b:return Object(i.d)(o,"Anonymous");case w:return"Suspense";case E:return"SuspenseList";default:switch(n(t)){case f.c:case f.d:case f.g:return null;case f.p:case f.q:
// 16.3.0 exposed the context object as "context"
// PR #12501 changed it to "_context" for 16.3.1+
// NOTE Keep in sync with inspectElementRaw()
return O=e.type._context||e.type.context,"".concat(O.displayName||"Context",".Provider");case f.e:case f.f:// NOTE: TraceUpdatesBackendManager depends on the name ending in '.Consumer'
// If you change the name, figure out a more resilient way to detect it.
// 16.3-16.5 read from "type" because the Consumer is the actual context object.
// 16.6+ should read from "type._context" because Consumer can be different (in DEV).
// NOTE Keep in sync with inspectElementRaw()
return O=e.type._context||e.type,"".concat(O.displayName||"Context",".Consumer");case f.t:case f.u:return null;case f.n:case f.o:return"Profiler(".concat(e.memoizedProps.id,")");case f.r:case f.s:return"Scope";default:
// Unknown element type.
// This may mean a new element type that has not yet been added to DevTools.
return null}}},getTypeSymbol:n,ReactPriorityLevels:{ImmediatePriority:99,UserBlockingPriority:98,NormalPriority:97,LowPriority:96,IdlePriority:95,NoPriority:90},ReactTypeOfWork:t,ReactTypeOfSideEffect:{NoEffect:0,PerformedWork:1,Placement:2}}}function w(e,t,n,r){var p=b(n.version),h=p.getDisplayNameForFiber,g=p.getTypeSymbol,w=p.ReactPriorityLevels,E=p.ReactTypeOfWork,O=p.ReactTypeOfSideEffect,S=O.NoEffect,I=O.PerformedWork,k=O.Placement,_=E.FunctionComponent,R=E.ClassComponent,C=E.ContextConsumer,N=E.DehydratedSuspenseComponent,T=E.Fragment,x=E.ForwardRef,P=E.HostRoot,L=E.HostPortal,A=E.HostComponent,j=E.HostText,D=E.IncompleteClassComponent,M=E.IndeterminateComponent,F=E.MemoComponent,$=E.OffscreenComponent,U=E.SimpleMemoComponent,z=E.SuspenseComponent,V=E.SuspenseListComponent,B=w.ImmediatePriority,H=w.UserBlockingPriority,G=w.NormalPriority,W=w.LowPriority,X=w.IdlePriority,q=w.NoPriority,Y=n.overrideHookState,Q=n.overrideProps,K=n.setSuspenseHandler,J=n.scheduleUpdate,Z="function"==typeof K&&"function"==typeof J;Object(s.b)(n);// The renderer interface can't read these preferences directly,
// because it is stored in localStorage within the context of the extension.
// It relies on the extension to pass the preference through via the global.
var ee=!1!==window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__,te=!0===window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__;(ee||te)&&Object(s.a)({appendComponentStack:ee,breakOnConsoleErrors:te});var ne=function(e,t,n){if(l.k){var r=h(t)||"null",o=null!=n&&h(n)||"null";// NOTE: calling getFiberID or getPrimaryFiber is unsafe here
// because it will put them in the map. For now, we'll omit them.
// TODO: better debugging story for this.
console.log("[renderer] %c".concat(e," %c").concat(r," %c").concat(n?o:""),"color: red; font-weight: bold;","color: blue;","color: purple;")}},re=new Set,oe=new Set,ie=new Set,ae=!1,ue=new Set;// Configurable Components tree filters.
function le(e){ie.clear(),re.clear(),oe.clear(),e.forEach((function(e){if(e.isEnabled)switch(e.type){case o.a:e.isValid&&""!==e.value&&re.add(new RegExp(e.value,"i"));break;case o.b:ie.add(e.value);break;case o.d:e.isValid&&""!==e.value&&oe.add(new RegExp(e.value,"i"));break;case o.c:re.add(new RegExp("\\("));break;default:console.warn('Invalid component filter type "'.concat(e.type,'"'))}}))}// The renderer interface can't read saved component filters directly,
// because they are stored in localStorage within the context of the extension.
// Instead it relies on the extension to pass filters through.
// NOTICE Keep in sync with get*ForFiber methods
function ce(e){var t=e._debugSource,n=e.tag,r=e.type;switch(n){case N:
// TODO: ideally we would show dehydrated Suspense immediately.
// However, it has some special behavior (like disconnecting
// an alternate and turning into real Suspense) which breaks DevTools.
// For now, ignore it, and only show it once it gets hydrated.
// https://github.com/bvaughn/react-devtools-experimental/issues/197
return!0;case L:case j:case T:case $:return!0;case P:
// It is never valid to filter the root element.
return!1;default:switch(g(r)){case f.c:case f.d:case f.g:case f.t:case f.u:return!0}}var o=se(e);if(ie.has(o))return!0;if(re.size>0){var i=h(e);if(null!=i){
// eslint-disable-next-line no-for-of-loops/no-for-of-loops
var a=!0,u=!1,l=void 0;try{for(var c,s=re[Symbol.iterator]();!(a=(c=s.next()).done);a=!0){if(c.value.test(i))return!0}}catch(e){u=!0,l=e}finally{try{a||null==s.return||s.return()}finally{if(u)throw l}}}}if(null!=t&&oe.size>0){var p=t.fileName,d=!0,m=!1,v=void 0;// eslint-disable-next-line no-for-of-loops/no-for-of-loops
try{for(var y,b=oe[Symbol.iterator]();!(d=(y=b.next()).done);d=!0){if(y.value.test(p))return!0}}catch(e){m=!0,v=e}finally{try{d||null==b.return||b.return()}finally{if(m)throw v}}}return!1}// NOTICE Keep in sync with shouldFilterFiber() and other get*ForFiber methods
function se(e){var t=e.type;switch(e.tag){case R:case D:return o.e;case _:case M:return o.h;case x:return o.g;case P:return o.m;case A:return o.i;case L:case j:case T:return o.k;case F:case U:return o.j;case z:return o.n;case V:return o.o;default:switch(g(t)){case f.c:case f.d:case f.g:return o.k;case f.p:case f.q:return o.f;case f.e:case f.f:return o.f;case f.t:case f.u:return o.k;case f.n:case f.o:return o.l;default:return o.k}}}// This is a slightly annoying indirection.
// It is currently necessary because DevTools wants to use unique objects as keys for instances.
// However fibers have two versions.
// We use this set to remember first encountered fiber for each conceptual instance.
function fe(e){if(he.has(e))return e;var t=e.alternate;return null!=t&&he.has(t)?t:(he.add(e),e)}null!=window.__REACT_DEVTOOLS_COMPONENT_FILTERS__?le(window.__REACT_DEVTOOLS_COMPONENT_FILTERS__):
// Unfortunately this feature is not expected to work for React Native for now.
// It would be annoying for us to spam YellowBox warnings with unactionable stuff,
// so for now just skip this message...
//console.warn('⚛️ DevTools: Could not locate saved component filters');
// Fallback to assuming the default filters in this case.
le(Object(i.c)());// If necessary, we can revisit optimizing this operation.
// For example, we could add a new recursive unmount tree operation.
// The unmount operations are already significantly smaller than mount operations though.
// This is something to keep in mind for later.
var pe=new Map,de=new Map,he=new Set,me=new Map,ve=new Map,ge=-1;function ye(e){if(!pe.has(e)){var t=Object(i.g)();pe.set(e,t),de.set(t,e)}return pe.get(e)}function be(e){switch(se(e)){case o.e:if(null!==tt){var t=ye(fe(e)),n=Ee(e);null!==n&&tt.set(t,n)}}}// Differentiates between a null context value and no context.
var we={};function Ee(e){switch(se(e)){case o.e:var t=e.stateNode,n=we,r=we;return null!=t&&(t.constructor&&null!=t.constructor.contextType?r=t.context:(n=t.context)&&0===Object.keys(n).length&&(n=we)),[n,r];default:return null}}// Record all contexts at the time profiling is started.
// Fibers only store the current context value,
// so we need to track them separately in order to determine changed keys.
function Oe(e){switch(se(e)){case o.e:if(null!==tt){var t=ye(fe(e)),n=tt.has(t)?tt.get(t):null,r=Ee(e);if(null==n||null==r)return null;var i=v(n,2),a=i[0],u=i[1],l=v(r,2),c=l[0],s=l[1];if(c!==we)return Ie(a,c);if(s!==we)return u!==s}}return null}function Se(e,t){if(null==e||null==t)return!1;// We can't report anything meaningful for hooks changes.
if(t.hasOwnProperty("baseState")&&t.hasOwnProperty("memoizedState")&&t.hasOwnProperty("next")&&t.hasOwnProperty("queue"))for(;null!==t;){if(t.memoizedState!==e.memoizedState)return!0;t=t.next,e=e.next}return!1}function Ie(e,t){if(null==e||null==t)return null;// We can't report anything meaningful for hooks changes.
if(t.hasOwnProperty("baseState")&&t.hasOwnProperty("memoizedState")&&t.hasOwnProperty("next")&&t.hasOwnProperty("queue"))return null;var n=new Set([].concat(m(Object.keys(e)),m(Object.keys(t)))),r=[],o=!0,i=!1,a=void 0;try{for(var u,l=n[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var c=u.value;e[c]!==t[c]&&r.push(c)}}catch(e){i=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(i)throw a}}return r}// eslint-disable-next-line no-unused-vars
function ke(e,t){switch(t.tag){case R:case _:case C:case F:case U:
// For types that execute user code, we check PerformedWork effect.
// We don't reflect bailouts (either referential or sCU) in DevTools.
// eslint-disable-next-line no-bitwise
return(t.effectTag&I)===I;
// Note: ContextConsumer only gets PerformedWork effect in 16.3.3+
// so it won't get highlighted with React 16.3.0 to 16.3.2.
default:
// For host components and other types, we compare inputs
// to determine whether something is an update.
return e.memoizedProps!==t.memoizedProps||e.memoizedState!==t.memoizedState||e.ref!==t.ref}}var _e=[],Re=[],Ce=[],Ne=[],Te=new Map,xe=0,Pe=null;function Le(e){Number.isInteger(e)||console.error("pushOperation() was called but the value is not an integer.",e),_e.push(e)}function Ae(n){if(0!==_e.length||0!==Re.length||0!==Ce.length||null!==Pe||ot){var r=Re.length+Ce.length+(null===Pe?0:1),o=new Array(// Identify which renderer this update is coming from.
3+// [stringTableLength]
// Then goes the actual string table.
xe+(// All unmounts are batched in a single message.
// [TREE_OPERATION_REMOVE, removedIDLength, ...ids]
r>0?2+r:0)+// Regular operations
_e.length),a=0;if(o[a++]=t,o[a++]=ge,// Use this ID in case the root was unmounted!
// Now fill in the string table.
// [stringTableLength, str1Length, ...str1, str2Length, ...str2, ...]
o[a++]=xe,Te.forEach((function(e,t){o[a++]=t.length;for(var n=Object(i.j)(t),r=0;r<n.length;r++)o[a+r]=n[r];a+=t.length})),r>0){
// All unmounts except roots are batched in a single message.
o[a++]=l.h,// The first number is how many unmounted IDs we're gonna send.
o[a++]=r;// Fill in the real unmounts in the reverse order.
// They were inserted parents-first by React, but we want children-first.
// So we traverse our array backwards.
for(var u=Re.length-1;u>=0;u--)o[a++]=Re[u];// Fill in the simulated unmounts (hidden Suspense subtrees) in their order.
// (We want children to go before parents.)
// They go *after* the real unmounts because we know for sure they won't be
// children of already pushed "real" IDs. If they were, we wouldn't be able
// to discover them during the traversal, as they would have been deleted.
for(var c=0;c<Ce.length;c++)o[a+c]=Ce[c];a+=Ce.length,// The root ID should always be unmounted last.
null!==Pe&&(o[a]=Pe,a++)}// Fill in the rest of the operations.
for(var s=0;s<_e.length;s++)o[a+s]=_e[s];a+=_e.length,// Let the frontend know about tree operations.
// The first value in this array will identify which root it corresponds to,
// so we do no longer need to dispatch a separate root-committed event.
null!==Ne?
// Until the frontend has been connected, store the tree operations.
// This will let us avoid walking the tree later when the frontend connects,
// and it enables the Profiler's reload-and-profile functionality to work as well.
Ne.push(o):
// If we've already connected to the frontend, just pass the operations through.
e.emit("operations",o),_e.length=0,Re.length=0,Ce.length=0,Pe=null,Te.clear(),xe=0}}function je(e){if(null===e)return 0;var t=Te.get(e);if(void 0!==t)return t;var n=Te.size+1;return Te.set(e,n),// The string table total length needs to account
// both for the string length, and for the array item
// that contains the length itself. Hence + 1.
xe+=e.length+1,n}function De(e,t){null!==dt&&(
// We're in the process of trying to restore previous selection.
// If this fiber matched but is being unmounted, there's no use trying.
// Reset the state so we don't keep holding onto it.
e!==dt&&e!==dt.alternate||vt(null));var n=e.tag===P,r=fe(e);if(pe.has(r)){var o=ye(r);n?
// Roots must be removed only after all children (pending and simulated) have been removed.
// So we track it separately.
Pe=o:ce(e)||(
// To maintain child-first ordering,
// we'll push it into one of these queues,
// and later arrange them in the correct order.
t?Ce.push(o):Re.push(o)),pe.delete(r),de.delete(o),he.delete(r),e.hasOwnProperty("treeBaseDuration")&&(ve.delete(o),me.delete(o))}else
// If we've never seen this Fiber, it might be because
// it is inside a non-current Suspense fragment tree,
// and so the store is not even aware of it.
// In that case we can just ignore it, or otherwise
// there will be errors later on.
he.delete(r)}function Me(e,t,n,r){l.k&&ne("mountFiberRecursively()",e,t);// If we have the tree selection from previous reload, try to match this Fiber.
// Also remember whether to do the same for siblings.
var i=// We call this before traversing a new mount.
// It remembers whether this Fiber is the next best match for tracked path.
// The return value signals whether we should keep matching siblings or not.
function(e){if(null===pt||!mt)
// Fast path: there's nothing to track so do nothing and ignore siblings.
return!1;var t=e.return,n=null!==t?t.alternate:null;// By now we know there's some selection to restore, and this is a new Fiber.
// Is this newly mounted Fiber a direct child of the current best match?
// (This will also be true for new roots if we haven't matched anything yet.)
if(dt===t||dt===n&&null!==n){
// Is this the next Fiber we should select? Let's compare the frames.
var r=Et(e),o=pt[ht+1];if(void 0===o)throw new Error("Expected to see a frame at the next depth.");if(r.index===o.index&&r.key===o.key&&r.displayName===o.displayName)// In either case, since we have a match, we don't need
// to check the siblings. They'll never match.
// We have our next match.
return dt=e,ht++,// Are we out of frames to match?
// There's nothing that can possibly match afterwards.
// Don't check the children.
mt=ht!==pt.length-1,!1}// This Fiber's parent is on the path, but this Fiber itself isn't.
// There's no need to check its children--they won't be on the path either.
// However, one of its siblings may be on the path so keep searching.
return mt=!1,!0}(e),a=!ce(e);(a&&function(e,t){var n=e.tag===P,r=ye(fe(e)),i=e.hasOwnProperty("_debugOwner"),a=e.hasOwnProperty("treeBaseDuration");if(n)Le(l.g),Le(r),Le(o.m),Le(a?1:0),Le(i?1:0),ot&&null!==et&&et.set(r,wt(e));else{var u=e.key,c=h(e),s=se(e),f=e._debugOwner,p=null!=f?ye(fe(f)):0,d=t?ye(fe(t)):0,m=je(c),v=je(null===u?null:""+u);Le(l.g),Le(r),Le(s),Le(d),Le(p),Le(m),Le(v)}a&&(ve.set(r,ge),$e(e))}(e,t),ae)&&(r&&se(e)===o.i&&(ue.add(e.stateNode),r=!1));if(e.tag===E.SuspenseComponent)if(null!==e.memoizedState){
// Special case: if Suspense mounts in a timed-out state,
// get the fallback child from the inner fragment and mount
// it as if it was our own child. Updates handle this too.
var u=e.child,c=u?u.sibling:null,s=c?c.child:null;null!==s&&Me(s,a?e:t,!0,r)}else{var f=-1===$?e.child:e.child.child;null!==f&&Me(f,a?e:t,!0,r)}else null!==e.child&&Me(e.child,a?e:t,!0,r);// We're exiting this Fiber now, and entering its siblings.
// If we have selection to restore, we might need to re-activate tracking.
!function(e){
// updateTrackedPathStateBeforeMount() told us whether to match siblings.
// Now that we're entering siblings, let's use that information.
mt=e}// Roots don't have a real persistent identity.
// A root's "pseudo key" is "childDisplayName:indexWithThatName".
// For example, "App:0" or, in case of similar roots, "Story:0", "Story:1", etc.
// We will use this to try to disambiguate roots when restoring selection between reloads.
(i),n&&null!==e.sibling&&Me(e.sibling,t,!0,r)}// We use this to simulate unmounting for Suspense trees
// when we switch from primary to fallback.
function Fe(e){l.k&&ne("unmountFiberChildrenRecursively()",e);// We might meet a nested Suspense on our way.
var t=e.tag===E.SuspenseComponent&&null!==e.memoizedState,n=e.child;if(t){
// If it's showing fallback tree, let's traverse it instead.
var r=e.child,o=r?r.sibling:null;// Skip over to the real Fiber child.
n=o?o.child:null}for(;null!==n;)
// Record simulated unmounts children-first.
// We skip nodes without return because those are real unmounts.
null!==n.return&&(Fe(n),De(n,!0)),n=n.sibling}function $e(e){var t=ye(fe(e)),n=e.actualDuration,r=e.treeBaseDuration;if(me.set(t,r||0),ot){var i=e.alternate;// It's important to update treeBaseDuration even if the current Fiber did not render,
// because it's possible that one of its descendants did.
if(null==i||r!==i.treeBaseDuration){
// Tree base duration updates are included in the operations typed array.
// So we have to convert them from milliseconds to microseconds so we can send them as ints.
var a=Math.floor(1e3*(r||0));Le(l.j),Le(t),Le(a)}if((null==i||ke(i,e))&&null!=n){for(
// The actual duration reported by React includes time spent working on children.
// This is useful information, but it's also useful to be able to exclude child durations.
// The frontend can't compute this, since the immediate children may have been filtered out.
// So we need to do this on the backend.
// Note that this calculated self duration is not the same thing as the base duration.
// The two are calculated differently (tree duration does not accumulate).
var u=n,c=e.child;null!==c;)u-=c.actualDuration||0,c=c.sibling;// If profiling is active, store durations for elements that were rendered during the commit.
// Note that we should do this for any fiber we performed work on, regardless of its actualDuration value.
// In some cases actualDuration might be 0 for fibers we worked on (particularly if we're using Date.now)
// In other cases (e.g. Memo) actualDuration might be greater than 0 even if we "bailed out".
var s=Ze;if(s.durations.push(t,n,u),s.maxActualDuration=Math.max(s.maxActualDuration,n),at){var f=function(e,t){switch(se(t)){case o.e:case o.h:case o.j:case o.g:return null===e?{context:null,didHooksChange:!1,isFirstMount:!0,props:null,state:null}:{context:Oe(t),didHooksChange:Se(e.memoizedState,t.memoizedState),isFirstMount:!1,props:Ie(e.memoizedProps,t.memoizedProps),state:Ie(e.memoizedState,t.memoizedState)};default:return null}}(i,e);null!==f&&null!==s.changeDescriptions&&s.changeDescriptions.set(t,f),be(e)}}}}function Ue(e,t){if(ce(e))for(var n=e.child;null!==n;)Ue(n,t),n=n.sibling;else t.push(ye(fe(e)))}// Returns whether closest unfiltered fiber parent needs to reset its child list.
function ze(e,t,n,r){if(l.k&&ne("updateFiberRecursively()",e,n),ae){var i=se(e);r?
// If an ancestor updated, we should mark the nearest host nodes for highlighting.
i===o.i&&(ue.add(e.stateNode),r=!1):i!==o.h&&i!==o.e&&i!==o.f||(
// Otherwise if this is a traced ancestor, flag for the nearest host descendant(s).
r=ke(t,e))}null!==Xe&&Xe.id===ye(fe(e))&&ke(t,e)&&(
// If this Fiber has updated, clear cached inspected data.
// If it is inspected again, it may need to be re-run to obtain updated hooks values.
qe=!0);var a=!ce(e),u=e.tag===z,c=!1,s=u&&null!==t.memoizedState,f=u&&null!==e.memoizedState;// The logic below is inspired by the code paths in updateSuspenseComponent()
// inside ReactFiberBeginWork in the React source code.
if(s&&f){
// Fallback -> Fallback:
// 1. Reconcile fallback set.
var p=e.child,d=p?p.sibling:null,h=t.child,m=h?h.sibling:null;null!=d&&null!=m&&ze(d,m,e,r)&&(c=!0)}else if(s&&!f){
// Fallback -> Primary:
// 1. Unmount fallback set
// Note: don't emulate fallback unmount because React actually did it.
// 2. Mount primary set
var v=e.child;null!==v&&Me(v,e,!0,r),c=!0}else if(!s&&f){
// Primary -> Fallback:
// 1. Hide primary set
// This is not a real unmount, so it won't get reported by React.
// We need to manually walk the previous tree and record unmounts.
Fe(t);// 2. Mount fallback set
var g=e.child,y=g?g.sibling:null;null!=y&&(Me(y,e,!0,r),c=!0)}else
// Common case: Primary -> Primary.
// This is the same code path as for non-Suspense fibers.
if(e.child!==t.child){for(
// If the first child is different, we need to traverse them.
// Each next child will be either a new child (mount) or an alternate (update).
var b=e.child,w=t.child;b;){
// We already know children will be referentially different because
// they are either new mounts or alternates of previous children.
// Schedule updates and mounts depending on whether alternates exist.
// We don't track deletions here because they are reported separately.
if(b.alternate){var E=b.alternate;ze(b,E,a?e:n,r)&&(
// If a nested tree child order changed but it can't handle its own
// child order invalidation (e.g. because it's filtered out like host nodes),
// propagate the need to reset child order upwards to this Fiber.
c=!0),// However we also keep track if the order of the children matches
// the previous order. They are always different referentially, but
// if the instances line up conceptually we'll want to know that.
E!==w&&(c=!0)}else Me(b,a?e:n,!1,r),c=!0;// Try the next child.
b=b.sibling,// Advance the pointer in the previous list so that we can
// keep comparing if they line up.
c||null===w||(w=w.sibling)}// If we have no more children, but used to, they don't line up.
null!==w&&(c=!0)}else{if(ae)
// If we're tracing updates and we've bailed out before reaching a host node,
// we should fall back to recursively marking the nearest host descendants for highlight.
if(r)Ve(ye(fe(e))).forEach((function(e){ue.add(e.stateNode)}))}a&&(e.hasOwnProperty("treeBaseDuration")&&$e(e));if(c){
// We need to crawl the subtree for closest non-filtered Fibers
// so that we can display them in a flat children set.
if(a){
// Normally, search for children from the rendered child.
var O=e.child;if(f){
// Special case: timed-out Suspense renders the fallback set.
var S=e.child;O=S?S.sibling:null}// We've handled the child order change for this Fiber.
// Since it's included, there's no need to invalidate parent child order.
return null!=O&&function(e,t){for(
// The frontend only really cares about the displayName, key, and children.
// The first two don't really change, so we are only concerned with the order of children here.
// This is trickier than a simple comparison though, since certain types of fibers are filtered.
var n=[],r=t// This is a naive implementation that shallowly recourses children.
// We might want to revisit this if it proves to be too inefficient.
;null!==r;)Ue(r,n),r=r.sibling;var o=n.length;if(!(o<2)){Le(l.i),Le(ye(fe(e))),Le(o);for(var i=0;i<n.length;i++)Le(n[i])}}(e,O),!1}
// Let the closest unfiltered parent Fiber reset its child order instead.
return!0}return!1}function Ve(e){var t=[],n=Ge(e);if(!n)return t;// Next we'll drill down this component to find all HostComponent/Text.
for(var r=n;;){if(r.tag===A||r.tag===j)t.push(r);else if(r.child){r.child.return=r,r=r.child;continue}if(r===n)return t;for(;!r.sibling;){if(!r.return||r.return===n)return t;r=r.return}r.sibling.return=r.return,r=r.sibling}// Flow needs the return here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return t}function Be(e){try{var t=Ge(e);if(null===t)return null;// Special case for a timed-out Suspense.
if(t.tag===z&&null!==t.memoizedState){
// A timed-out Suspense's findDOMNode is useless.
// Try our best to find the fallback directly.
var n=t.child&&t.child.sibling;null!=n&&(t=n)}return Ve(e).map((function(e){return e.stateNode})).filter(Boolean)}catch(e){
// The fiber might have unmounted by now.
return null}}// This function is copied from React and should be kept in sync:
// https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberTreeReflection.js
function He(e){var t=e;if(e.alternate)for(;t.return;)t=t.return;else{
// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
if((t.effectTag&k)!==S)return 1;for(;t.return;)if(((t=t.return).effectTag&k)!==S)return 1}return t.tag===P?2:3;// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
}// This function is copied from React and should be kept in sync:
// https://github.com/facebook/react/blob/master/packages/react-reconciler/src/ReactFiberTreeReflection.js
// It would be nice if we updated React to inject this function directly (vs just indirectly via findDOMNode).
// BEGIN copied code
function Ge(e){var t=de.get(e);if(null==t)return console.warn('Could not find Fiber with id "'.concat(e,'"')),null;var n=t.alternate;if(!n){
// If there is no alternate, then we only need to check if it is mounted.
var r=He(t);if(3===r)throw Error("Unable to find node on an unmounted component.");return 1===r?null:t}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
for(var o=t,i=n;;){var a=o.return;if(null===a)
// We're at the root.
break;var u=a.alternate;if(null===u){
// There is no alternate. This is an unusual case. Currently, it only
// happens when a Suspense component is hidden. An extra fragment fiber
// is inserted in between the Suspense fiber and its children. Skip
// over this extra fragment fiber and proceed to the next parent.
var l=a.return;if(null!==l){o=i=l;continue}// If there's no parent, we're at the root.
break}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(a.child===u.child){for(var c=a.child;c;){if(c===o){
// We've determined that A is the current branch.
if(2!==He(a))throw Error("Unable to find node on an unmounted component.");return t}if(c===i){
// We've determined that B is the current branch.
if(2!==He(a))throw Error("Unable to find node on an unmounted component.");return n}c=c.sibling}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
throw Error("Unable to find node on an unmounted component.")}if(o.return!==i.return)
// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
o=a,i=u;else{for(
// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
// Search parent A's child set
var s=!1,f=a.child;f;){if(f===o){s=!0,o=a,i=u;break}if(f===i){s=!0,i=a,o=u;break}f=f.sibling}if(!s){for(
// Search parent B's child set
f=u.child;f;){if(f===o){s=!0,o=u,i=a;break}if(f===i){s=!0,i=u,o=a;break}f=f.sibling}if(!s)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(o.alternate!==i)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
if(o.tag!==P)throw Error("Unable to find node on an unmounted component.");return o.stateNode.current===o?t:n;// Otherwise B has to be current branch.
}// END copied code
function We(e){var t=Ge(e);if(null==t)return null;var r=t._debugOwner,i=t._debugSource,a=t.stateNode,u=t.key,l=t.memoizedProps,s=t.memoizedState,p=t.dependencies,d=t.tag,m=t.type,v=se(t),y=!(d!==_&&d!==U&&d!==x||!s&&!p),b=g(m),w=!1,E=null;if(d===R||d===_||d===D||d===M||d===F||d===x||d===U)w=!0,a&&null!=a.context&&(v===o.e&&!(m.contextTypes||m.contextType)||(E=a.context));else if(b===f.e||b===f.f){
// 16.3-16.5 read from "type" because the Consumer is the actual context object.
// 16.6+ should read from "type._context" because Consumer can be different (in DEV).
// NOTE Keep in sync with getDisplayNameForFiber()
var O=m._context||m;// Global context value.
E=O._currentValue||null;for(// Look for overridden value.
var S=t.return;null!==S;){var I=S.type,k=g(I);if(k===f.p||k===f.q)if((I._context||I.context)===O){E=S.memoizedProps.value;break}S=S.return}}var C=!1;null!==E&&(C=!!m.contextTypes,// To simplify hydration and display logic for context, wrap in a value object.
// Otherwise simple values (e.g. strings, booleans) become harder to handle.
E={value:E});var N=null;if(r){N=[];for(var T=r;null!==T;)N.push({displayName:h(T)||"Anonymous",id:ye(fe(T)),type:se(T)}),T=T._debugOwner||null}var P=d===z&&null!==s,L=null;if(y){var A={};// Temporarily disable all console logging before re-running the hook.
for(var j in console)try{A[j]=console[j],// $FlowFixMe property error|warn is not writable.
console[j]=function(){}}catch(e){}try{L=Object(c.inspectHooksOfFiber)(t,n.currentDispatcherRef)}finally{
// Restore original console functionality.
for(var $ in A)try{
// $FlowFixMe property error|warn is not writable.
console[$]=A[$]}catch(e){}}}for(var V=null,B=t;null!==B.return;)B=B.return;var H=B.stateNode;return null!=H&&null!==H._debugRootType&&(V=H._debugRootType),{id:e,
// Does the current renderer support editable hooks?
canEditHooks:"function"==typeof Y,
// Does the current renderer support editable function props?
canEditFunctionProps:"function"==typeof Q,canToggleSuspense:Z&&(// If it's showing the real content, we can always flip fallback.
!P||// If it's showing fallback because we previously forced it to,
// allow toggling it back to remove the fallback override.
st.has(e)),
// Can view component source location.
canViewSource:w,
// Does the component have legacy context attached to it.
hasLegacyContext:C,key:null!=u?u:null,displayName:h(t),type:v,
// Inspectable properties.
// TODO Review sanitization approach for the below inspectable values.
context:E,hooks:L,props:l,state:y?null:s,
// List of owners
owners:N,
// Location of component in source code.
source:i||null,rootType:V,rendererPackageName:n.rendererPackageName,rendererVersion:n.version}}var Xe=null,qe=!1,Ye={};function Qe(e){return null!==Xe&&Xe.id===e&&!qe}// Track the intersection of currently inspected paths,
// so that we can send their data along if the element is re-rendered.
function Ke(e){var t=Ye;e.forEach((function(e){t[e]||(t[e]={}),t=t[e]}))}function Je(e,t){
// This function helps prevent previously-inspected paths from being dehydrated in updates.
// This is important to avoid a bad user experience where expanded toggles collapse on update.
return function(n){switch(t){case"hooks":if(1===n.length)
// Never dehydrate the "hooks" object at the top levels.
return!0;if("subHooks"===n[n.length-1]||"subHooks"===n[n.length-2])
// Dehydrating the 'subHooks' property makes the HooksTree UI a lot more complicated,
// so it's easiest for now if we just don't break on this boundary.
// We can always dehydrate a level deeper (in the value object).
return!0}var r=null===e?Ye:Ye[e];if(!r)return!1;for(var o=0;o<n.length;o++)if(!(r=r[n[o]]))return!1;return!0}}var Ze=null,et=null,tt=null,nt=null,rt=null,ot=!1,it=0,at=!1,ut=null;function lt(n){ot||(at=n,// Capture initial values as of the time profiling starts.
// It's important we snapshot both the durations and the id-to-root map,
// since either of these may change during the profiling session
// (e.g. when a fiber is re-rendered or when a fiber gets removed).
et=new Map,nt=new Map(me),rt=new Map(ve),tt=new Map,e.getFiberRoots(t).forEach((function(e){var t=ye(fe(e.current));et.set(t,wt(e.current)),n&&
// Record all contexts at the time profiling is started.
// Fibers only store the current context value,
// so we need to track them separately in order to determine changed keys.
function e(t){be(t);for(var n=t.child;null!==n;)e(n),n=n.sibling}(e.current)})),ot=!0,it=y(),ut=new Map)}// React will switch between these implementations depending on whether
// we have any manually suspended Fibers or not.
function ct(){return!1}// Automatically start profiling so that we don't miss timing info from initial "mount".
"true"===Object(a.c)(l.f)&&lt("true"===Object(a.c)(l.e));var st=new Set;function ft(e){var t=ye(fe(e));return st.has(t)}// Remember if we're trying to restore the selection after reload.
// In that case, we'll do some extra checks for matching mounts.
var pt=null,dt=null,ht=-1,mt=!1;function vt(e){null===e&&(dt=null,ht=-1,mt=!1),pt=e}var gt=new Map,yt=new Map;function bt(e,t){var n=wt(t),r=yt.get(n)||0;yt.set(n,r+1);var o="".concat(n,":").concat(r);gt.set(e,o)}function wt(e){// Go at most three levels deep into direct children
// while searching for a child that has a displayName.
for(var t=null,n=null,r=e.child,o=0;o<3&&null!==r;o++){var i=h(r);if(null!==i&&(
// Prefer display names that we get from user-defined components.
// We want to avoid using e.g. 'Suspense' unless we find nothing else.
"function"==typeof r.type?
// There's a few user-defined tags, but we'll prefer the ones
// that are usually explicitly named (function or class components).
t=i:null===n&&(n=i)),null!==t)break;r=r.child}return t||n||"Anonymous"}function Et(e){var t=e.key,n=h(e),r=e.index;switch(e.tag){case P:
// Roots don't have a real displayName, index, or key.
// Instead, we'll use the pseudo key (childDisplayName:indexWithThatName).
var o=ye(fe(e)),i=gt.get(o);if(void 0===i)throw new Error("Expected mounted root to have known pseudo key.");n=i;break;case A:n=e.type}return{displayName:n,key:t,index:r}}// Produces a serializable representation that does a best effort
// of identifying a particular Fiber between page reloads.
// The return path will contain Fibers that are "invisible" to the store
// because their keys and indexes are important to restoring the selection.
var Ot=function(e){if(null==e)return"Unknown";switch(e){case B:return"Immediate";case H:return"User-Blocking";case G:return"Normal";case W:return"Low";case X:return"Idle";case q:default:return"Unknown"}};return{cleanup:function(){// We don't patch any methods so there is no cleanup.
},copyElementPath:function(e,t){Qe(e)&&Object(u.b)(Object(i.f)(Xe,t))},findNativeNodesForFiberID:Be,flushInitialOperations:function(){var n=Ne;Ne=null,null!==n&&n.length>0?
// We may have already queued up some operations before the frontend connected
// If so, let the frontend know about them.
n.forEach((function(t){e.emit("operations",t)})):(
// Before the traversals, remember to start tracking
// our path in case we have selection to restore.
null!==pt&&(mt=!0),// If we have not been profiling, then we can just walk the tree and build up its current state as-is.
e.getFiberRoots(t).forEach((function(e){bt(ge=ye(fe(e.current)),e.current),// Checking root.memoizedInteractions handles multi-renderer edge-case-
// where some v16 renderers support profiling and others don't.
ot&&null!=e.memoizedInteractions&&(
// If profiling is active, store commit time and duration, and the current interactions.
// The frontend may request this information after profiling has stopped.
Ze={changeDescriptions:at?new Map:null,durations:[],commitTime:y()-it,interactions:Array.from(e.memoizedInteractions).map((function(e){return d({},e,{timestamp:e.timestamp-it})})),maxActualDuration:0,priorityLevel:null}),Me(e.current,null,!1,!1),Ae(),ge=-1})))},getBestMatchForTrackedPath:function(){if(null===pt)
// Nothing to match.
return null;if(null===dt)
// We didn't find anything.
return null;// Find the closest Fiber store is aware of.
for(var e=dt;null!==e&&ce(e);)e=e.return;return null===e?null:{id:ye(fe(e)),isFullMatch:ht===pt.length-1}},getDisplayNameForFiberID:function(e){var t=de.get(e);return null!=t?h(t):null},getFiberIDForNative:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=n.findFiberByHostInstance(e);if(null!=r){if(t)for(;null!==r&&ce(r);)r=r.return;return ye(fe(r))}return null},getInstanceAndStyle:// Fast path props lookup for React Native style editor.
// Could use inspectElementRaw() but that would require shallow rendering hooks components,
// and could also mess with memoization.
function(e){var t=null,n=null,r=Ge(e);return null!==r&&(t=r.stateNode,null!==r.memoizedProps&&(n=r.memoizedProps.style)),{instance:t,style:n}},getOwnersList:function(e){var t=Ge(e);if(null==t)return null;var n=t._debugOwner,r=[{displayName:h(t)||"Anonymous",id:e,type:se(t)}];if(n)for(var o=n;null!==o;)r.unshift({displayName:h(o)||"Anonymous",id:ye(fe(o)),type:se(o)}),o=o._debugOwner||null;return r},getPathForElement:function(e){var t=de.get(e);if(null==t)return null;for(var n=[];null!==t;)n.push(Et(t)),t=t.return;return n.reverse(),n},getProfilingData:function(){var e=[];if(null===ut)throw Error("getProfilingData() called before any profiling data was recorded");return ut.forEach((function(t,n){var r=[],o=[],i=new Map,a=new Map,u=null!==et&&et.get(n)||"Unknown";null!=nt&&nt.forEach((function(e,t){null!=rt&&rt.get(t)===n&&
// We don't need to convert milliseconds to microseconds in this case,
// because the profiling summary is JSON serialized.
o.push([t,e])})),t.forEach((function(e,t){var n=e.changeDescriptions,o=e.durations,u=e.interactions,l=e.maxActualDuration,c=e.priorityLevel,s=e.commitTime,f=[];u.forEach((function(e){i.has(e.id)||i.set(e.id,e),f.push(e.id);var n=a.get(e.id);null!=n?n.push(t):a.set(e.id,[t])}));for(var p=[],d=[],h=0;h<o.length;h+=3){var m=o[h];p.push([m,o[h+1]]),d.push([m,o[h+2]])}r.push({changeDescriptions:null!==n?Array.from(n.entries()):null,duration:l,fiberActualDurations:p,fiberSelfDurations:d,interactionIDs:f,priorityLevel:c,timestamp:s})})),e.push({commitData:r,displayName:u,initialTreeBaseDurations:o,interactionCommits:Array.from(a.entries()),interactions:Array.from(i.entries()),rootID:n})})),{dataForRoots:e,rendererID:t}},handleCommitFiberRoot:function(t,n){var r=t.current,o=r.alternate;ge=ye(fe(r)),// Before the traversals, remember to start tracking
// our path in case we have selection to restore.
null!==pt&&(mt=!0),ae&&ue.clear();// Checking root.memoizedInteractions handles multi-renderer edge-case-
// where some v16 renderers support profiling and others don't.
var i=null!=t.memoizedInteractions;if(ot&&i&&(
// If profiling is active, store commit time and duration, and the current interactions.
// The frontend may request this information after profiling has stopped.
Ze={changeDescriptions:at?new Map:null,durations:[],commitTime:y()-it,interactions:Array.from(t.memoizedInteractions).map((function(e){return d({},e,{timestamp:e.timestamp-it})})),maxActualDuration:0,priorityLevel:null==n?null:Ot(n)}),o){
// TODO: relying on this seems a bit fishy.
var a=null!=o.memoizedState&&null!=o.memoizedState.element,u=null!=r.memoizedState&&null!=r.memoizedState.element;!a&&u?(
// Mount a new root.
bt(ge,r),Me(r,null,!1,!1)):a&&u?
// Update an existing root.
ze(r,o,null,!1):a&&!u&&(
// Unmount an existing root.
!function(e){var t=gt.get(e);if(void 0===t)throw new Error("Expected root pseudo key to be known.");var n=t.substring(0,t.lastIndexOf(":")),r=yt.get(n);if(void 0===r)throw new Error("Expected counter to be known.");r>1?yt.set(n,r-1):yt.delete(n);gt.delete(e)}(ge),De(r,!1))}else
// Mount a new root.
bt(ge,r),Me(r,null,!1,!1);if(ot&&i){var l=ut.get(ge);null!=l?l.push(Ze):ut.set(ge,[Ze])}// We're done here.
Ae(),ae&&e.emit("traceUpdates",ue),ge=-1},handleCommitFiberUnmount:function(e){
// This is not recursive.
// We can't traverse fibers after unmounting so instead
// we rely on React telling us about each unmount.
De(e,!1)},inspectElement:function(e,t){if(Qe(e)){if(null!=t){Ke(t);var n=null;// If this element has not been updated since it was last inspected,
// we can just return the subset of data in the newly-inspected path.
return"hooks"===t[0]&&(n="hooks"),{id:e,type:"hydrated-path",path:t,value:Object(u.a)(Object(i.f)(Xe,t),Je(null,n),t)}}
// If this element has not been updated since it was last inspected, we don't need to re-run it.
// Instead we can just return the ID to indicate that it has not changed.
return{id:e,type:"no-change"}}if(qe=!1,null!==Xe&&Xe.id===e||(Ye={}),null===(Xe=We(e)))return{id:e,type:"not-found"};null!=t&&Ke(t),// Any time an inspected element has an update,
// we should update the selected $r value as wel.
// Do this before dehydration (cleanForBridge).
function(e){var t=e.hooks,n=e.id,o=e.props,i=de.get(n);if(null!=i){var a=i.elementType,u=i.stateNode,l=i.tag,c=i.type;switch(l){case R:case D:case M:r.$r=u;break;case _:r.$r={hooks:t,props:o,type:c};break;case x:r.$r={props:o,type:c.render};break;case F:case U:r.$r={props:o,type:null!=a&&null!=a.type?a.type:c};break;default:r.$r=null}}else console.warn('Could not find Fiber with id "'.concat(n,'"'))}(Xe);// Clone before cleaning so that we preserve the full data.
// This will enable us to send patches without re-inspecting if hydrated paths are requested.
// (Reducing how often we shallow-render is a better DX for function components that use hooks.)
var o=d({},Xe);return o.context=Object(u.a)(o.context,Je("context",null)),o.hooks=Object(u.a)(o.hooks,Je("hooks","hooks")),o.props=Object(u.a)(o.props,Je("props",null)),o.state=Object(u.a)(o.state,Je("state",null)),{id:e,type:"full-data",value:o}},logElementToConsole:function(e){var t=Qe(e)?Xe:We(e);if(null!==t){var n="function"==typeof console.groupCollapsed;n&&console.groupCollapsed("[Click to expand] %c<".concat(t.displayName||"Component"," />"),// --dom-tag-name-color is the CSS variable Chrome styles HTML elements with in the console.
"color: var(--dom-tag-name-color); font-weight: normal;"),null!==t.props&&console.log("Props:",t.props),null!==t.state&&console.log("State:",t.state),null!==t.hooks&&console.log("Hooks:",t.hooks);var r=Be(e);null!==r&&console.log("Nodes:",r),null!==t.source&&console.log("Location:",t.source),(window.chrome||/firefox/i.test(navigator.userAgent))&&console.log("Right-click any value to save it as a global variable for further inspection."),n&&console.groupEnd()}else console.warn('Could not find Fiber with id "'.concat(e,'"'))},prepareViewAttributeSource:function(e,t){Qe(e)&&(window.$attribute=Object(i.f)(Xe,t))},prepareViewElementSource:function(e){var t=de.get(e);if(null!=t){var n=t.elementType,o=t.tag,i=t.type;switch(o){case R:case D:case M:case _:r.$type=i;break;case x:r.$type=i.render;break;case F:case U:r.$type=null!=n&&null!=n.type?n.type:i;break;default:r.$type=null}}else console.warn('Could not find Fiber with id "'.concat(e,'"'))},overrideSuspense:function(e,t){if("function"!=typeof K||"function"!=typeof J)throw new Error("Expected overrideSuspense() to not get called for earlier React versions.");t?(st.add(e),1===st.size&&
// First override is added. Switch React to slower path.
K(ft)):(st.delete(e),0===st.size&&
// Last override is gone. Switch React back to fast path.
K(ct));var n=de.get(e);null!=n&&J(n)},renderer:n,setInContext:function(e,t,n){
// To simplify hydration and display of primitive context values (e.g. number, string)
// the inspectElement() method wraps context in a {value: ...} object.
// We need to remove the first part of the path (the "value") before continuing.
t=t.slice(1);var r=Ge(e);if(null!==r){var o=r.stateNode;0===t.length?
// Simple context value
o.context=n:Object(i.i)(o.context,t,n),o.forceUpdate()}},setInHook:function(e,t,n,r){var o=Ge(e);null!==o&&"function"==typeof Y&&Y(o,t,n,r)},setInProps:function(e,t,n){var r=Ge(e);if(null!==r){var o=r.stateNode;null===o?"function"==typeof Q&&Q(r,t,n):(r.pendingProps=Object(u.c)(o.props,t,n),o.forceUpdate())}},setInState:function(e,t,n){var r=Ge(e);if(null!==r){var o=r.stateNode;Object(i.i)(o.state,t,n),o.forceUpdate()}},setTraceUpdatesEnabled:function(e){ae=e},setTrackedPath:vt,startProfiling:lt,stopProfiling:function(){ot=!1,at=!1},storeAsGlobal:function(e,t,n){if(Qe(e)){var r=Object(i.f)(Xe,t),o="$reactTemp".concat(n);window[o]=r,console.log(o),console.log(r)}},updateComponentFilters:function(n){if(ot)
// Re-mounting a tree while profiling is in progress might break a lot of assumptions.
// If necessary, we could support this- but it doesn't seem like a necessary use case.
throw Error("Cannot modify filter preferences while profiling");// Recursively unmount all roots.
e.getFiberRoots(t).forEach((function(e){ge=ye(fe(e.current)),Fe(e.current),De(e.current,!1),ge=-1})),le(n),// Reset pseudo counters so that new path selections will be persisted.
yt.clear(),// Recursively re-mount all roots with new filter criteria applied.
e.getFiberRoots(t).forEach((function(e){bt(ge=ye(fe(e.current)),e.current),Me(e.current,null,!1,!1),Ae(e),ge=-1}))}}}
/***/},
/* 13 */
/***/function(e,t,n){"use strict";
// ESM COMPAT FLAG
n.r(t),
// EXPORTS
n.d(t,"default",(function(){/* binding */return Q}));
// EXTERNAL MODULE: ../react-devtools-shared/src/events.js
var r=n(10),o=n(11),i=n.n(o),a=n(3),u=n(4),l=function(e,t){return e===t},c=n(7),s=n.n(c);
// EXTERNAL MODULE: /Users/gaearon/p/react/node_modules/lodash.throttle/index.js
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/utils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Get the window object for the document that a node belongs to,
// or return null if it cannot be found (node not attached to DOM,
// etc).
function f(e){return e.ownerDocument?e.ownerDocument.defaultView:null}// Get the iframe containing a node, or return null if it cannot
// be found (node not within iframe, etc).
function p(e){var t=f(e);return t?t.frameElement:null}// Get a bounding client rect for a node, with an
// offset added to compensate for its border.
function d(e){var t=v(e);return h([e.getBoundingClientRect(),{top:t.borderTop,left:t.borderLeft,bottom:t.borderBottom,right:t.borderRight,
// This width and height won't get used by mergeRectOffsets (since this
// is not the first rect in the array), but we set them so that this
// object typechecks as a ClientRect.
width:0,height:0}])}// Add together the top, left, bottom, and right properties of
// each ClientRect, but keep the width and height of the first one.
function h(e){return e.reduce((function(e,t){return null==e?t:{top:e.top+t.top,left:e.left+t.left,width:e.width,height:e.height,bottom:e.bottom+t.bottom,right:e.right+t.right}}))}// Calculate a boundingClientRect for a node relative to boundaryWindow,
// taking into account any offsets caused by intermediate iframes.
function m(e,t){var n=p(e);if(n&&n!==t){for(var r=[e.getBoundingClientRect()],o=n,i=!1;o;){var a=d(o);if(r.push(a),o=p(o),i)break;// We don't want to calculate iframe offsets upwards beyond
// the iframe containing the boundaryWindow, but we
// need to calculate the offset relative to the boundaryWindow.
o&&f(o)===t&&(i=!0)}return h(r)}return e.getBoundingClientRect()}function v(e){var t=window.getComputedStyle(e);return{borderLeft:parseInt(t.borderLeftWidth,10),borderRight:parseInt(t.borderRightWidth,10),borderTop:parseInt(t.borderTopWidth,10),borderBottom:parseInt(t.borderBottomWidth,10),marginLeft:parseInt(t.marginLeft,10),marginRight:parseInt(t.marginRight,10),marginTop:parseInt(t.marginTop,10),marginBottom:parseInt(t.marginBottom,10),paddingLeft:parseInt(t.paddingLeft,10),paddingRight:parseInt(t.paddingRight,10),paddingTop:parseInt(t.paddingTop,10),paddingBottom:parseInt(t.paddingBottom,10)}}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/Highlighter/Overlay.js
function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&y(e.prototype,t),n&&y(e,n),e}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// Note that the Overlay components are not affected by the active Theme,
// because they highlight elements in the main Chrome window (outside of devtools).
// The colors below were chosen to roughly match those used by Chrome devtools.
var w=

function(){function e(t,n){g(this,e),this.node=t.createElement("div"),this.border=t.createElement("div"),this.padding=t.createElement("div"),this.content=t.createElement("div"),this.border.style.borderColor=I.border,this.padding.style.borderColor=I.padding,this.content.style.backgroundColor=I.background,s()(this.node.style,{borderColor:I.margin,pointerEvents:"none",position:"fixed"}),this.node.style.zIndex="10000000",this.node.appendChild(this.border),this.border.appendChild(this.padding),this.padding.appendChild(this.content),n.appendChild(this.node)}return b(e,[{key:"remove",value:function(){this.node.parentNode&&this.node.parentNode.removeChild(this.node)}},{key:"update",value:function(e,t){S(t,"margin",this.node),S(t,"border",this.border),S(t,"padding",this.padding),s()(this.content.style,{height:e.height-t.borderTop-t.borderBottom-t.paddingTop-t.paddingBottom+"px",width:e.width-t.borderLeft-t.borderRight-t.paddingLeft-t.paddingRight+"px"}),s()(this.node.style,{top:e.top-t.marginTop+"px",left:e.left-t.marginLeft+"px"})}}]),e}(),E=

function(){function e(t,n){g(this,e),this.tip=t.createElement("div"),s()(this.tip.style,{display:"flex",flexFlow:"row nowrap",backgroundColor:"#333740",borderRadius:"2px",fontFamily:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',fontWeight:"bold",padding:"3px 5px",pointerEvents:"none",position:"fixed",fontSize:"12px",whiteSpace:"nowrap"}),this.nameSpan=t.createElement("span"),this.tip.appendChild(this.nameSpan),s()(this.nameSpan.style,{color:"#ee78e6",borderRight:"1px solid #aaaaaa",paddingRight:"0.5rem",marginRight:"0.5rem"}),this.dimSpan=t.createElement("span"),this.tip.appendChild(this.dimSpan),s()(this.dimSpan.style,{color:"#d7d7d7"}),this.tip.style.zIndex="10000000",n.appendChild(this.tip)}return b(e,[{key:"remove",value:function(){this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip)}},{key:"updateText",value:function(e,t,n){this.nameSpan.textContent=e,this.dimSpan.textContent=Math.round(t)+"px × "+Math.round(n)+"px"}},{key:"updatePosition",value:function(e,t){var n=this.tip.getBoundingClientRect(),r=function(e,t,n){var r,o=Math.max(n.height,20),i=Math.max(n.width,60);r=e.top+e.height+o<=t.top+t.height?e.top+e.height<t.top+0?t.top+5:e.top+e.height+5:e.top-o<=t.top+t.height?e.top-o-5<t.top+5?t.top+5:e.top-o-5:t.top+t.height-o-5;var a=e.left+5;e.left<t.left&&(a=t.left+5);e.left+i>t.left+t.width&&(a=t.left+t.width-i-5);return{style:{top:r+="px",left:a+="px"}}}(e,t,{width:n.width,height:n.height});s()(this.tip.style,r.style)}}]),e}(),O=

function(){function e(){g(this,e);
// Find the root window, because overlays are positioned relative to it.
var t=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.window=t;// When opened in shells/dev, the tooltip should be bound by the app iframe, not by the topmost window.
var n=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.tipBoundsWindow=n;var r=t.document;this.container=r.createElement("div"),this.container.style.zIndex="10000000",this.tip=new E(r,this.container),this.rects=[],r.body.appendChild(this.container)}return b(e,[{key:"remove",value:function(){this.tip.remove(),this.rects.forEach((function(e){e.remove()})),this.rects.length=0,this.container.parentNode&&this.container.parentNode.removeChild(this.container)}},{key:"inspect",value:function(e,t){for(var n=this,r=e.filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))
// We can't get the size of text nodes or comment nodes. React as of v15
// heavily uses comment nodes to delimit text.
;this.rects.length>r.length;){this.rects.pop().remove()}if(0!==r.length){for(;this.rects.length<r.length;)this.rects.push(new w(this.window.document,this.container));var o={top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,left:Number.POSITIVE_INFINITY};if(r.forEach((function(e,t){var r=m(e,n.window),i=v(e);o.top=Math.min(o.top,r.top-i.marginTop),o.right=Math.max(o.right,r.left+r.width+i.marginRight),o.bottom=Math.max(o.bottom,r.top+r.height+i.marginBottom),o.left=Math.min(o.left,r.left-i.marginLeft),n.rects[t].update(r,i)})),!t){t=r[0].nodeName.toLowerCase();var i=r[0],a=i.ownerDocument.defaultView.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(null!=a&&null!=a.rendererInterfaces){var u=null,l=!0,c=!1,s=void 0;// eslint-disable-next-line no-for-of-loops/no-for-of-loops
try{for(var f,p=a.rendererInterfaces.values()[Symbol.iterator]();!(l=(f=p.next()).done);l=!0){var d=f.value,h=d.getFiberIDForNative(i,!0);if(null!==h){u=d.getDisplayNameForFiberID(h,!0);break}}}catch(e){c=!0,s=e}finally{try{l||null==p.return||p.return()}finally{if(c)throw s}}u&&(t+=" (in "+u+")")}}this.tip.updateText(t,o.right-o.left,o.bottom-o.top);var g=m(this.tipBoundsWindow.document.documentElement,this.window);this.tip.updatePosition({top:o.top,left:o.left,height:o.bottom-o.top,width:o.right-o.left},{top:g.top+this.tipBoundsWindow.scrollY,left:g.left+this.tipBoundsWindow.scrollX,height:this.tipBoundsWindow.innerHeight,width:this.tipBoundsWindow.innerWidth})}}}]),e}();function S(e,t,n){s()(n.style,{borderTopWidth:e[t+"Top"]+"px",borderLeftWidth:e[t+"Left"]+"px",borderRightWidth:e[t+"Right"]+"px",borderBottomWidth:e[t+"Bottom"]+"px",borderStyle:"solid"})}var I={background:"rgba(120, 170, 210, 0.7)",padding:"rgba(77, 200, 0, 0.3)",margin:"rgba(255, 155, 0, 0.3)",border:"rgba(255, 200, 50, 0.3)"},k=null,_=null;
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/Highlighter/Highlighter.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function R(){k=null,null!==_&&(_.remove(),_=null)}function C(e,t,n){
// TODO (npm-packages) Detect RN and support it somehow
null!=window.document&&(null!==k&&clearTimeout(k),null!=e&&(null===_&&(_=new O),_.inspect(e,t),n&&(k=setTimeout(R,2e3))))}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/Highlighter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This plug-in provides in-page highlighting of the selected element.
// It is used by the browser extension nad the standalone DevTools shell (when connected to a browser).
// It is not currently the mechanism used to highlight React Native views.
// That is done by the React Native Inspector component.
var N=new Set;function T(e,t){function n(e){
// This plug-in may run in non-DOM environments (e.g. React Native).
e&&"function"==typeof e.addEventListener&&(e.addEventListener("click",a,!0),e.addEventListener("mousedown",u,!0),e.addEventListener("mouseover",u,!0),e.addEventListener("mouseup",u,!0),e.addEventListener("pointerdown",c,!0),e.addEventListener("pointerover",s,!0),e.addEventListener("pointerup",f,!0))}function r(){R(),o(window),N.forEach((function(e){try{o(e.contentWindow)}catch(e){// This can error when the iframe is on a cross-origin.
}})),N=new Set}function o(e){
// This plug-in may run in non-DOM environments (e.g. React Native).
e&&"function"==typeof e.removeEventListener&&(e.removeEventListener("click",a,!0),e.removeEventListener("mousedown",u,!0),e.removeEventListener("mouseover",u,!0),e.removeEventListener("mouseup",u,!0),e.removeEventListener("pointerdown",c,!0),e.removeEventListener("pointerover",s,!0),e.removeEventListener("pointerup",f,!0))}function a(t){t.preventDefault(),t.stopPropagation(),r(),e.send("stopInspectingNative",!0)}function u(e){e.preventDefault(),e.stopPropagation()}function c(e){e.preventDefault(),e.stopPropagation(),p(e.target)}function s(e){e.preventDefault(),e.stopPropagation();var t=e.target;if("IFRAME"===t.tagName){var r=t;try{if(!N.has(r))n(r.contentWindow),N.add(r)}catch(e){// This can error when the iframe is on a cross-origin.
}}// Don't pass the name explicitly.
// It will be inferred from DOM tag and Fiber owner.
C([t],null,!1),p(t)}function f(e){e.preventDefault(),e.stopPropagation()}e.addListener("clearNativeElementHighlight",(function(){R()})),e.addListener("highlightNativeElement",(function(n){var r=n.displayName,o=n.hideAfterTimeout,i=n.id,a=n.openNativeElementsPanel,u=n.rendererID,l=n.scrollIntoView,c=t.rendererInterfaces[u];null==c&&console.warn('Invalid renderer id "'.concat(u,'" for element "').concat(i,'"'));var s=null;null!==c&&(s=c.findNativeNodesForFiberID(i));if(null!=s&&null!=s[0]){var f=s[0];l&&"function"==typeof f.scrollIntoView&&
// If the node isn't visible show it before highlighting it.
// We may want to reconsider this; it might be a little disruptive.
// $FlowFixMe Flow only knows about 'start' | 'end'
f.scrollIntoView({block:"nearest",inline:"nearest"}),C(s,r,o),a&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0=f,e.send("syncSelectionToNativeElementsPanel"))}else R()})),e.addListener("shutdown",r),e.addListener("startInspectingNative",(function(){n(window)})),e.addListener("stopInspectingNative",r);var p=i()(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,n=void 0,r=[],o=void 0,i=!1,a=function(e,n){return t(e,r[n])},u=function(){for(var t=arguments.length,u=Array(t),l=0;l<t;l++)u[l]=arguments[l];return i&&n===this&&u.length===r.length&&u.every(a)?o:(i=!0,n=this,r=u,o=e.apply(this,u))};return u}((function(n){var r=t.getIDForNode(n);null!==r&&e.send("selectFiber",r)})),200,// Don't change the selection in the very first 200ms
// because those are usually unintentional as you lift the cursor.
{leading:!1})}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/TraceUpdates/canvas.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */var x=["#37afa9","#63b19e","#80b393","#97b488","#abb67d","#beb771","#cfb965","#dfba57","#efbb49","#febc38"],P=null;// Note these colors are in sync with DevTools Profiler chart colors.
function L(e){null===P&&function(){(P=window.document.createElement("canvas")).style.cssText="\n    xx-background-color: red;\n    xx-opacity: 0.5;\n    bottom: 0;\n    left: 0;\n    pointer-events: none;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: 1000000000;\n  ";var e=window.document.documentElement;e.insertBefore(P,e.firstChild)}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/views/TraceUpdates/index.js
();var t=P;t.width=window.innerWidth,t.height=window.innerHeight;var n=t.getContext("2d");n.clearRect(0,0,t.width,t.height),e.forEach((function(e){var t=e.count,r=e.rect;if(null!==r){var o=Math.min(x.length-1,t-1);!function(e,t,n){var r=t.height,o=t.left,i=t.top,a=t.width;// outline
e.lineWidth=1,e.strokeStyle="#f0f0f0",e.strokeRect(o-1,i-1,a+2,r+2),// inset
e.lineWidth=1,e.strokeStyle="#f0f0f0",e.strokeRect(o+1,i+1,a-1,r-1),e.strokeStyle=n,e.setLineDash([0]),// border
e.lineWidth=1,e.strokeRect(o,i,a-1,r-1),e.setLineDash([0])}(n,r,x[o])}}))}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// How long the rect should be shown for?
var j="object"===("undefined"==typeof performance?"undefined":A(performance))&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()},D=new Map,M=null,F=!1,$=null;// What's the longest we are willing to show the overlay for?
// This can be important if we're getting a flurry of events (e.g. scroll update).
function U(e){(F=e)||(D.clear(),null!==M&&(cancelAnimationFrame(M),M=null),null!==$&&(clearTimeout($),$=null),null!==P&&(null!=P.parentNode&&P.parentNode.removeChild(P),P=null))}function z(e){F&&(e.forEach((function(e){var t=D.get(e),n=j(),r=null!=t?t.lastMeasuredAt:0,o=null!=t?t.rect:null;(null===o||r+250<n)&&(r=n,o=function(e){if(!e||"function"!=typeof e.getBoundingClientRect)return null;var t=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;return m(e,t)}
// EXTERNAL MODULE: ../react-devtools-shared/src/backend/console.js + 3 modules
(e)),D.set(e,{count:null!=t?t.count+1:1,expirationTime:null!=t?Math.min(n+3e3,t.expirationTime+250):n+250,lastMeasuredAt:r,rect:o})})),null!==$&&(clearTimeout($),$=null),null===M&&(M=requestAnimationFrame(V)))}function V(){M=null,$=null;var e=j(),t=Number.MAX_VALUE;// Remove any items that have already expired.
D.forEach((function(n,r){n.expirationTime<e?D.delete(r):t=Math.min(t,n.expirationTime)})),L(D),t!==Number.MAX_VALUE&&($=setTimeout(V,t-e))}var B=n(9);
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/agent.js
function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */var Q=

function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?X(e):t}(this,W(t).call(this)),Y(X(n),"_isProfiling",!1),Y(X(n),"_recordChangeDescriptions",!1),Y(X(n),"_rendererInterfaces",{}),Y(X(n),"_persistedSelection",null),Y(X(n),"_persistedSelectionMatch",null),Y(X(n),"_traceUpdatesEnabled",!1),Y(X(n),"copyElementPath",(function(e){var t=e.id,r=e.path,o=e.rendererID,i=n._rendererInterfaces[o];null==i?console.warn('Invalid renderer id "'.concat(o,'" for element "').concat(t,'"')):i.copyElementPath(t,r)})),Y(X(n),"getProfilingData",(function(e){var t=e.rendererID,r=n._rendererInterfaces[t];null==r&&console.warn('Invalid renderer id "'.concat(t,'"')),n._bridge.send("profilingData",r.getProfilingData())})),Y(X(n),"getProfilingStatus",(function(){n._bridge.send("profilingStatus",n._isProfiling)})),Y(X(n),"getOwnersList",(function(e){var t=e.id,r=e.rendererID,o=n._rendererInterfaces[r];if(null==o)console.warn('Invalid renderer id "'.concat(r,'" for element "').concat(t,'"'));else{var i=o.getOwnersList(t);n._bridge.send("ownersList",{id:t,owners:i})}})),Y(X(n),"inspectElement",(function(e){var t=e.id,r=e.path,o=e.rendererID,i=n._rendererInterfaces[o];null==i?console.warn('Invalid renderer id "'.concat(o,'" for element "').concat(t,'"')):(n._bridge.send("inspectedElement",i.inspectElement(t,r)),// When user selects an element, stop trying to restore the selection,
// and instead remember the current selection for the next reload.
null!==n._persistedSelectionMatch&&n._persistedSelectionMatch.id===t||(n._persistedSelection=null,n._persistedSelectionMatch=null,i.setTrackedPath(null),n._throttledPersistSelection(o,t)))})),Y(X(n),"logElementToConsole",(function(e){var t=e.id,r=e.rendererID,o=n._rendererInterfaces[r];null==o?console.warn('Invalid renderer id "'.concat(r,'" for element "').concat(t,'"')):o.logElementToConsole(t)})),Y(X(n),"reloadAndProfile",(function(e){Object(u.e)(a.f,"true"),Object(u.e)(a.e,e?"true":"false"),// This code path should only be hit if the shell has explicitly told the Store that it supports profiling.
// In that case, the shell must also listen for this specific message to know when it needs to reload the app.
// The agent can't do this in a way that is renderer agnostic.
n._bridge.send("reloadAppForProfiling")})),Y(X(n),"overrideContext",(function(e){var t=e.id,r=e.path,o=e.rendererID,i=e.value,a=n._rendererInterfaces[o];null==a?console.warn('Invalid renderer id "'.concat(o,'" for element "').concat(t,'"')):a.setInContext(t,r,i)})),Y(X(n),"overrideHookState",(function(e){var t=e.id,r=e.hookID,o=e.path,i=e.rendererID,a=e.value,u=n._rendererInterfaces[i];null==u?console.warn('Invalid renderer id "'.concat(i,'" for element "').concat(t,'"')):u.setInHook(t,r,o,a)})),Y(X(n),"overrideProps",(function(e){var t=e.id,r=e.path,o=e.rendererID,i=e.value,a=n._rendererInterfaces[o];null==a?console.warn('Invalid renderer id "'.concat(o,'" for element "').concat(t,'"')):a.setInProps(t,r,i)})),Y(X(n),"overrideState",(function(e){var t=e.id,r=e.path,o=e.rendererID,i=e.value,a=n._rendererInterfaces[o];null==a?console.warn('Invalid renderer id "'.concat(o,'" for element "').concat(t,'"')):a.setInState(t,r,i)})),Y(X(n),"overrideSuspense",(function(e){var t=e.id,r=e.rendererID,o=e.forceFallback,i=n._rendererInterfaces[r];null==i?console.warn('Invalid renderer id "'.concat(r,'" for element "').concat(t,'"')):i.overrideSuspense(t,o)})),Y(X(n),"setTraceUpdatesEnabled",(function(e){for(var t in n._traceUpdatesEnabled=e,U(e),n._rendererInterfaces){n._rendererInterfaces[t].setTraceUpdatesEnabled(e)}})),Y(X(n),"syncSelectionFromNativeElementsPanel",(function(){var e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0;null!=e&&n.selectNode(e)})),Y(X(n),"shutdown",(function(){
// Clean up the overlay if visible, and associated events.
n.emit("shutdown")})),Y(X(n),"startProfiling",(function(e){for(var t in n._recordChangeDescriptions=e,n._isProfiling=!0,n._rendererInterfaces){n._rendererInterfaces[t].startProfiling(e)}n._bridge.send("profilingStatus",n._isProfiling)})),Y(X(n),"stopProfiling",(function(){for(var e in n._isProfiling=!1,n._recordChangeDescriptions=!1,n._rendererInterfaces){n._rendererInterfaces[e].stopProfiling()}n._bridge.send("profilingStatus",n._isProfiling)})),Y(X(n),"storeAsGlobal",(function(e){var t=e.count,r=e.id,o=e.path,i=e.rendererID,a=n._rendererInterfaces[i];null==a?console.warn('Invalid renderer id "'.concat(i,'" for element "').concat(r,'"')):a.storeAsGlobal(r,o,t)})),Y(X(n),"updateConsolePatchSettings",(function(e){var t=e.appendComponentStack,n=e.breakOnConsoleErrors;
// If the frontend preference has change,
// or in the case of React Native- if the backend is just finding out the preference-
// then install or uninstall the console overrides.
// It's safe to call these methods multiple times, so we don't need to worry about that.
t||n?Object(B.a)({appendComponentStack:t,breakOnConsoleErrors:n}):Object(B.c)()})),Y(X(n),"updateComponentFilters",(function(e){for(var t in n._rendererInterfaces){n._rendererInterfaces[t].updateComponentFilters(e)}})),Y(X(n),"viewAttributeSource",(function(e){var t=e.id,r=e.path,o=e.rendererID,i=n._rendererInterfaces[o];null==i?console.warn('Invalid renderer id "'.concat(o,'" for element "').concat(t,'"')):i.prepareViewAttributeSource(t,r)})),Y(X(n),"viewElementSource",(function(e){var t=e.id,r=e.rendererID,o=n._rendererInterfaces[r];null==o?console.warn('Invalid renderer id "'.concat(r,'" for element "').concat(t,'"')):o.prepareViewElementSource(t)})),Y(X(n),"onTraceUpdates",(function(e){n.emit("traceUpdates",e)})),Y(X(n),"onHookOperations",(function(e){if(a.k&&function(e){if(a.k){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(t=console).log.apply(t,["%cAgent %c".concat(e),"color: purple; font-weight: bold;","font-weight: bold;"].concat(r))}}("onHookOperations",e),// TODO:
// The chrome.runtime does not currently support transferables; it forces JSON serialization.
// See bug https://bugs.chromium.org/p/chromium/issues/detail?id=927134
// Regarding transferables, the postMessage doc states:
// If the ownership of an object is transferred, it becomes unusable (neutered)
// in the context it was sent from and becomes available only to the worker it was sent to.
// Even though Chrome is eventually JSON serializing the array buffer,
// using the transferable approach also sometimes causes it to throw:
//   DOMException: Failed to execute 'postMessage' on 'Window': ArrayBuffer at index 0 is already neutered.
// See bug https://github.com/bvaughn/react-devtools-experimental/issues/25
// The Store has a fallback in place that parses the message as JSON if the type isn't an array.
// For now the simplest fix seems to be to not transfer the array.
// This will negatively impact performance on Firefox so it's unfortunate,
// but until we're able to fix the Chrome error mentioned above, it seems necessary.
// this._bridge.send('operations', operations, [operations.buffer]);
n._bridge.send("operations",e),null!==n._persistedSelection){var t=e[0];if(n._persistedSelection.rendererID===t){
// Check if we can select a deeper match for the persisted selection.
var r=n._rendererInterfaces[t];if(null==r)console.warn('Invalid renderer id "'.concat(t,'"'));else{var o=n._persistedSelectionMatch,i=r.getBestMatchForTrackedPath();n._persistedSelectionMatch=i;var u=null!==o?o.id:null,l=null!==i?i.id:null;u!==l&&null!==l&&
// We moved forward, unlocking a deeper node.
n._bridge.send("selectFiber",l),null!==i&&i.isFullMatch&&(
// We've just unlocked the innermost selected node.
// There's no point tracking it further.
n._persistedSelection=null,n._persistedSelectionMatch=null,r.setTrackedPath(null))}}}})),Y(X(n),"_throttledPersistSelection",i()((function(e,t){
// This is throttled, so both renderer and selected ID
// might not be available by the time we read them.
// This is why we need the defensive checks here.
var r=n._rendererInterfaces[e],o=null!=r?r.getPathForElement(t):null;null!==o?Object(u.e)(a.d,JSON.stringify({rendererID:e,path:o})):Object(u.d)(a.d)}),1e3)),"true"===Object(u.c)(a.f)&&(n._recordChangeDescriptions="true"===Object(u.c)(a.e),n._isProfiling=!0,Object(u.d)(a.e),Object(u.d)(a.f));var r=Object(u.c)(a.d);null!=r&&(n._persistedSelection=JSON.parse(r)),n._bridge=e,e.addListener("copyElementPath",n.copyElementPath),e.addListener("getProfilingData",n.getProfilingData),e.addListener("getProfilingStatus",n.getProfilingStatus),e.addListener("getOwnersList",n.getOwnersList),e.addListener("inspectElement",n.inspectElement),e.addListener("logElementToConsole",n.logElementToConsole),e.addListener("overrideContext",n.overrideContext),e.addListener("overrideHookState",n.overrideHookState),e.addListener("overrideProps",n.overrideProps),e.addListener("overrideState",n.overrideState),e.addListener("overrideSuspense",n.overrideSuspense),e.addListener("reloadAndProfile",n.reloadAndProfile),e.addListener("setTraceUpdatesEnabled",n.setTraceUpdatesEnabled),e.addListener("startProfiling",n.startProfiling),e.addListener("stopProfiling",n.stopProfiling),e.addListener("storeAsGlobal",n.storeAsGlobal),e.addListener("syncSelectionFromNativeElementsPanel",n.syncSelectionFromNativeElementsPanel),e.addListener("shutdown",n.shutdown),e.addListener("updateConsolePatchSettings",n.updateConsolePatchSettings),e.addListener("updateComponentFilters",n.updateComponentFilters),e.addListener("viewAttributeSource",n.viewAttributeSource),e.addListener("viewElementSource",n.viewElementSource),n._isProfiling&&e.send("profilingStatus",!0);// Notify the frontend if the backend supports the Storage API (e.g. localStorage).
// If not, features like reload-and-profile will not work correctly and must be disabled.
var o,l=!1;try{localStorage.getItem("test"),l=!0}catch(e){}return e.send("isBackendStorageAPISupported",l),T(e,X(n)),o=X(n),o.addListener("traceUpdates",z),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),n=t,(r=[{key:"getInstanceAndStyle",value:function(e){var t=e.id,n=e.rendererID,r=this._rendererInterfaces[n];return null==r?(console.warn('Invalid renderer id "'.concat(n,'"')),null):r.getInstanceAndStyle(t)}},{key:"getIDForNode",value:function(e){for(var t in this._rendererInterfaces){var n=this._rendererInterfaces[t];try{var r=n.getFiberIDForNative(e,!0);if(null!==r)return r}catch(e){// Some old React versions might throw if they can't find a match.
// If so we should ignore it...
}}return null}},{key:"selectNode",value:function(e){var t=this.getIDForNode(e);null!==t&&this._bridge.send("selectFiber",t)}},{key:"setRendererInterface",value:function(e,t){this._rendererInterfaces[e]=t,this._isProfiling&&t.startProfiling(this._recordChangeDescriptions),t.setTraceUpdatesEnabled(this._traceUpdatesEnabled);// When the renderer is attached, we need to tell it whether
// we remember the previous selection that we'd like to restore.
// It'll start tracking mounts for matches to the last selection path.
var n=this._persistedSelection;null!==n&&n.rendererID===e&&t.setTrackedPath(n.path)}},{key:"onUnsupportedRenderer",value:function(e){this._bridge.send("unsupportedRendererVersion",e)}},{key:"rendererInterfaces",get:function(){return this._rendererInterfaces}}])&&G(n.prototype,r),o&&G(n,o),t}(r.a)},
/* 14 */
/***/function(e,t,n){
/* WEBPACK VAR INJECTION */(function(n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o;
/* istanbul ignore next */t=e.exports=d,o="object"===(void 0===n?"undefined":r(n))&&n.env&&n.env.NODE_DEBUG&&/\bsemver\b/i.test(n.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
t.SEMVER_SPEC_VERSION="2.0.0";var i=Number.MAX_SAFE_INTEGER||
/* istanbul ignore next */
9007199254740991,a=t.re=[],u=t.src=[],l=t.tokens={},c=0;function s(e){l[e]=c++}// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
s("NUMERICIDENTIFIER"),u[l.NUMERICIDENTIFIER]="0|[1-9]\\d*",s("NUMERICIDENTIFIERLOOSE"),u[l.NUMERICIDENTIFIERLOOSE]="[0-9]+",// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
s("NONNUMERICIDENTIFIER"),u[l.NONNUMERICIDENTIFIER]="\\d*[a-zA-Z-][a-zA-Z0-9-]*",// ## Main Version
// Three dot-separated numeric identifiers.
s("MAINVERSION"),u[l.MAINVERSION]="("+u[l.NUMERICIDENTIFIER]+")\\.("+u[l.NUMERICIDENTIFIER]+")\\.("+u[l.NUMERICIDENTIFIER]+")",s("MAINVERSIONLOOSE"),u[l.MAINVERSIONLOOSE]="("+u[l.NUMERICIDENTIFIERLOOSE]+")\\.("+u[l.NUMERICIDENTIFIERLOOSE]+")\\.("+u[l.NUMERICIDENTIFIERLOOSE]+")",// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
s("PRERELEASEIDENTIFIER"),u[l.PRERELEASEIDENTIFIER]="(?:"+u[l.NUMERICIDENTIFIER]+"|"+u[l.NONNUMERICIDENTIFIER]+")",s("PRERELEASEIDENTIFIERLOOSE"),u[l.PRERELEASEIDENTIFIERLOOSE]="(?:"+u[l.NUMERICIDENTIFIERLOOSE]+"|"+u[l.NONNUMERICIDENTIFIER]+")",// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
s("PRERELEASE"),u[l.PRERELEASE]="(?:-("+u[l.PRERELEASEIDENTIFIER]+"(?:\\."+u[l.PRERELEASEIDENTIFIER]+")*))",s("PRERELEASELOOSE"),u[l.PRERELEASELOOSE]="(?:-?("+u[l.PRERELEASEIDENTIFIERLOOSE]+"(?:\\."+u[l.PRERELEASEIDENTIFIERLOOSE]+")*))",// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
s("BUILDIDENTIFIER"),u[l.BUILDIDENTIFIER]="[0-9A-Za-z-]+",// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
s("BUILD"),u[l.BUILD]="(?:\\+("+u[l.BUILDIDENTIFIER]+"(?:\\."+u[l.BUILDIDENTIFIER]+")*))",// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
s("FULL"),s("FULLPLAIN"),u[l.FULLPLAIN]="v?"+u[l.MAINVERSION]+u[l.PRERELEASE]+"?"+u[l.BUILD]+"?",u[l.FULL]="^"+u[l.FULLPLAIN]+"$",// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
s("LOOSEPLAIN"),u[l.LOOSEPLAIN]="[v=\\s]*"+u[l.MAINVERSIONLOOSE]+u[l.PRERELEASELOOSE]+"?"+u[l.BUILD]+"?",s("LOOSE"),u[l.LOOSE]="^"+u[l.LOOSEPLAIN]+"$",s("GTLT"),u[l.GTLT]="((?:<|>)?=?)",// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
s("XRANGEIDENTIFIERLOOSE"),u[l.XRANGEIDENTIFIERLOOSE]=u[l.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*",s("XRANGEIDENTIFIER"),u[l.XRANGEIDENTIFIER]=u[l.NUMERICIDENTIFIER]+"|x|X|\\*",s("XRANGEPLAIN"),u[l.XRANGEPLAIN]="[v=\\s]*("+u[l.XRANGEIDENTIFIER]+")(?:\\.("+u[l.XRANGEIDENTIFIER]+")(?:\\.("+u[l.XRANGEIDENTIFIER]+")(?:"+u[l.PRERELEASE]+")?"+u[l.BUILD]+"?)?)?",s("XRANGEPLAINLOOSE"),u[l.XRANGEPLAINLOOSE]="[v=\\s]*("+u[l.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+u[l.XRANGEIDENTIFIERLOOSE]+")(?:\\.("+u[l.XRANGEIDENTIFIERLOOSE]+")(?:"+u[l.PRERELEASELOOSE]+")?"+u[l.BUILD]+"?)?)?",s("XRANGE"),u[l.XRANGE]="^"+u[l.GTLT]+"\\s*"+u[l.XRANGEPLAIN]+"$",s("XRANGELOOSE"),u[l.XRANGELOOSE]="^"+u[l.GTLT]+"\\s*"+u[l.XRANGEPLAINLOOSE]+"$",// Coercion.
// Extract anything that could conceivably be a part of a valid semver
s("COERCE"),u[l.COERCE]="(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])",s("COERCERTL"),a[l.COERCERTL]=new RegExp(u[l.COERCE],"g"),// Tilde ranges.
// Meaning is "reasonably at or greater than"
s("LONETILDE"),u[l.LONETILDE]="(?:~>?)",s("TILDETRIM"),u[l.TILDETRIM]="(\\s*)"+u[l.LONETILDE]+"\\s+",a[l.TILDETRIM]=new RegExp(u[l.TILDETRIM],"g");s("TILDE"),u[l.TILDE]="^"+u[l.LONETILDE]+u[l.XRANGEPLAIN]+"$",s("TILDELOOSE"),u[l.TILDELOOSE]="^"+u[l.LONETILDE]+u[l.XRANGEPLAINLOOSE]+"$",// Caret ranges.
// Meaning is "at least and backwards compatible with"
s("LONECARET"),u[l.LONECARET]="(?:\\^)",s("CARETTRIM"),u[l.CARETTRIM]="(\\s*)"+u[l.LONECARET]+"\\s+",a[l.CARETTRIM]=new RegExp(u[l.CARETTRIM],"g");s("CARET"),u[l.CARET]="^"+u[l.LONECARET]+u[l.XRANGEPLAIN]+"$",s("CARETLOOSE"),u[l.CARETLOOSE]="^"+u[l.LONECARET]+u[l.XRANGEPLAINLOOSE]+"$",// A simple gt/lt/eq thing, or just "" to indicate "any version"
s("COMPARATORLOOSE"),u[l.COMPARATORLOOSE]="^"+u[l.GTLT]+"\\s*("+u[l.LOOSEPLAIN]+")$|^$",s("COMPARATOR"),u[l.COMPARATOR]="^"+u[l.GTLT]+"\\s*("+u[l.FULLPLAIN]+")$|^$",// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
s("COMPARATORTRIM"),u[l.COMPARATORTRIM]="(\\s*)"+u[l.GTLT]+"\\s*("+u[l.LOOSEPLAIN]+"|"+u[l.XRANGEPLAIN]+")",// this one has to use the /g flag
a[l.COMPARATORTRIM]=new RegExp(u[l.COMPARATORTRIM],"g");// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
s("HYPHENRANGE"),u[l.HYPHENRANGE]="^\\s*("+u[l.XRANGEPLAIN]+")\\s+-\\s+("+u[l.XRANGEPLAIN]+")\\s*$",s("HYPHENRANGELOOSE"),u[l.HYPHENRANGELOOSE]="^\\s*("+u[l.XRANGEPLAINLOOSE]+")\\s+-\\s+("+u[l.XRANGEPLAINLOOSE]+")\\s*$",// Star ranges basically just allow anything at all.
s("STAR"),u[l.STAR]="(<|>)?=?\\s*\\*";// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for(var f=0;f<c;f++)o(f,u[f]),a[f]||(a[f]=new RegExp(u[f]));function p(e,t){if(t&&"object"===r(t)||(t={loose:!!t,includePrerelease:!1}),e instanceof d)return e;if("string"!=typeof e)return null;if(e.length>256)return null;if(!(t.loose?a[l.LOOSE]:a[l.FULL]).test(e))return null;try{return new d(e,t)}catch(e){return null}}function d(e,t){if(t&&"object"===r(t)||(t={loose:!!t,includePrerelease:!1}),e instanceof d){if(e.loose===t.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>256)throw new TypeError("version is longer than 256 characters");if(!(this instanceof d))return new d(e,t);o("SemVer",e,t),this.options=t,this.loose=!!t.loose;var n=e.trim().match(t.loose?a[l.LOOSE]:a[l.FULL]);if(!n)throw new TypeError("Invalid Version: "+e);if(this.raw=e,// these are actually numbers
this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");// numberify any prerelease numeric ids
n[4]?this.prerelease=n[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var t=+e;if(t>=0&&t<i)return t}return e})):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}t.parse=p,t.valid=function(e,t){var n=p(e,t);return n?n.version:null},t.clean=function(e,t){var n=p(e.trim().replace(/^[=v]+/,""),t);return n?n.version:null},t.SemVer=d,d.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},d.prototype.toString=function(){return this.version},d.prototype.compare=function(e){return o("SemVer.compare",this.version,this.options,e),e instanceof d||(e=new d(e,this.options)),this.compareMain(e)||this.comparePre(e)},d.prototype.compareMain=function(e){return e instanceof d||(e=new d(e,this.options)),m(this.major,e.major)||m(this.minor,e.minor)||m(this.patch,e.patch)},d.prototype.comparePre=function(e){// NOT having a prerelease is > having one
if(e instanceof d||(e=new d(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var t=0;do{var n=this.prerelease[t],r=e.prerelease[t];if(o("prerelease compare",t,n,r),void 0===n&&void 0===r)return 0;if(void 0===r)return 1;if(void 0===n)return-1;if(n!==r)return m(n,r)}while(++t)},d.prototype.compareBuild=function(e){e instanceof d||(e=new d(e,this.options));var t=0;do{var n=this.build[t],r=e.build[t];if(o("prerelease compare",t,n,r),void 0===n&&void 0===r)return 0;if(void 0===r)return 1;if(void 0===n)return-1;if(n!==r)return m(n,r)}while(++t)},// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
d.prototype.inc=function(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":
// If this is already a prerelease, it will bump to the next version
// drop any prereleases that might already exist, since they are not
// relevant at this point.
this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;
// If the input is a non-prerelease version, this acts the same as
// prepatch.
case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":
// If this is a pre-major version, bump up to the same major version.
// Otherwise increment major.
// 1.0.0-5 bumps to 1.0.0
// 1.1.0 bumps to 2.0.0
0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":
// If this is a pre-minor version, bump up to the same minor version.
// Otherwise increment minor.
// 1.2.0-5 bumps to 1.2.0
// 1.2.1 bumps to 1.3.0
0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":
// If this is not a pre-release version, it will increment the patch.
// If it is a pre-release it will bump up to the same patch version.
// 1.2.0-5 patches to 1.2.0
// 1.2.0 patches to 1.2.1
0===this.prerelease.length&&this.patch++,this.prerelease=[];break;
// This probably shouldn't be used publicly.
// 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var n=this.prerelease.length;--n>=0;)"number"==typeof this.prerelease[n]&&(this.prerelease[n]++,n=-2);-1===n&&
// didn't increment anything
this.prerelease.push(0)}t&&(
// 1.2.0-beta.1 bumps to 1.2.0-beta.2,
// 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},t.inc=function(e,t,n,r){"string"==typeof n&&(r=n,n=void 0);try{return new d(e,n).inc(t,r).version}catch(e){return null}},t.diff=function(e,t){if(b(e,t))return null;var n=p(e),r=p(t),o="";if(n.prerelease.length||r.prerelease.length){o="pre";var i="prerelease"}for(var a in n)if(("major"===a||"minor"===a||"patch"===a)&&n[a]!==r[a])return o+a;return i;// may be undefined
},t.compareIdentifiers=m;var h=/^[0-9]+$/;function m(e,t){var n=h.test(e),r=h.test(t);return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1}function v(e,t,n){return new d(e,n).compare(new d(t,n))}function g(e,t,n){return v(e,t,n)>0}function y(e,t,n){return v(e,t,n)<0}function b(e,t,n){return 0===v(e,t,n)}function w(e,t,n){return 0!==v(e,t,n)}function E(e,t,n){return v(e,t,n)>=0}function O(e,t,n){return v(e,t,n)<=0}function S(e,t,n,o){switch(t){case"===":return"object"===r(e)&&(e=e.version),"object"===r(n)&&(n=n.version),e===n;case"!==":return"object"===r(e)&&(e=e.version),"object"===r(n)&&(n=n.version),e!==n;case"":case"=":case"==":return b(e,n,o);case"!=":return w(e,n,o);case">":return g(e,n,o);case">=":return E(e,n,o);case"<":return y(e,n,o);case"<=":return O(e,n,o);default:throw new TypeError("Invalid operator: "+t)}}function I(e,t){if(t&&"object"===r(t)||(t={loose:!!t,includePrerelease:!1}),e instanceof I){if(e.loose===!!t.loose)return e;e=e.value}if(!(this instanceof I))return new I(e,t);o("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===k?this.value="":this.value=this.operator+this.semver.version,o("comp",this)}t.rcompareIdentifiers=function(e,t){return m(t,e)},t.major=function(e,t){return new d(e,t).major},t.minor=function(e,t){return new d(e,t).minor},t.patch=function(e,t){return new d(e,t).patch},t.compare=v,t.compareLoose=function(e,t){return v(e,t,!0)},t.compareBuild=function(e,t,n){var r=new d(e,n),o=new d(t,n);return r.compare(o)||r.compareBuild(o)},t.rcompare=function(e,t,n){return v(t,e,n)},t.sort=function(e,n){return e.sort((function(e,r){return t.compareBuild(e,r,n)}))},t.rsort=function(e,n){return e.sort((function(e,r){return t.compareBuild(r,e,n)}))},t.gt=g,t.lt=y,t.eq=b,t.neq=w,t.gte=E,t.lte=O,t.cmp=S,t.Comparator=I;var k={};function _(e,t){if(t&&"object"===r(t)||(t={loose:!!t,includePrerelease:!1}),e instanceof _)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new _(e.raw,t);if(e instanceof I)return new _(e.value,t);if(!(this instanceof _))return new _(e,t);if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,// First, split based on boolean or ||
this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){
// throw out any that are not relevant for whatever reason
return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}// take a set of comparators and determine whether there
// exists a version which can satisfy it
function R(e,t){for(var n=!0,r=e.slice(),o=r.pop();n&&r.length;)n=r.every((function(e){return o.intersects(e,t)})),o=r.pop();return n}// Mostly just for testing and legacy API reasons
function C(e){return!e||"x"===e.toLowerCase()||"*"===e}// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function N(e,t,n,r,o,i,a,u,l,c,s,f,p){return((t=C(n)?"":C(r)?">="+n+".0.0":C(o)?">="+n+"."+r+".0":">="+t)+" "+(u=C(l)?"":C(c)?"<"+(+l+1)+".0.0":C(s)?"<"+l+"."+(+c+1)+".0":f?"<="+l+"."+c+"."+s+"-"+f:"<="+u)).trim()}// if ANY of the sets match ALL of its comparators, then pass
function T(e,t,n){for(var r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!n.includePrerelease){
// Find the set of versions that are allowed to have prereleases
// For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
// That should allow `1.2.3-pr.2` to pass.
// However, `1.2.4-alpha.notready` should NOT be allowed,
// even though it's within the range set by the comparators.
for(r=0;r<e.length;r++)if(o(e[r].semver),e[r].semver!==k&&e[r].semver.prerelease.length>0){var i=e[r].semver;if(i.major===t.major&&i.minor===t.minor&&i.patch===t.patch)return!0}// Version has a -pre, but it's not one of the ones we like.
return!1}return!0}function x(e,t,n){try{t=new _(t,n)}catch(e){return!1}return t.test(e)}function P(e,t,n,r){var o,i,a,u,l;switch(e=new d(e,r),t=new _(t,r),n){case">":o=g,i=O,a=y,u=">",l=">=";break;case"<":o=y,i=E,a=g,u="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}// If it satisifes the range it is not outside
if(x(e,t,r))return!1;// From now on, variable terms are as if we're in "gtr" mode.
// but note that everything is flipped for the "ltr" function.
for(var c=0;c<t.set.length;++c){var s=t.set[c],f=null,p=null;// If the edge version comparator has a operator then our version
// isn't outside it
if(s.forEach((function(e){e.semver===k&&(e=new I(">=0.0.0")),f=f||e,p=p||e,o(e.semver,f.semver,r)?f=e:a(e.semver,p.semver,r)&&(p=e)})),f.operator===u||f.operator===l)return!1;// If the lowest version comparator has an operator and our version
// is less than it then it isn't higher than the range
if((!p.operator||p.operator===u)&&i(e,p.semver))return!1;if(p.operator===l&&a(e,p.semver))return!1}return!0}I.prototype.parse=function(e){var t=this.options.loose?a[l.COMPARATORLOOSE]:a[l.COMPARATOR],n=e.match(t);if(!n)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==n[1]?n[1]:"","="===this.operator&&(this.operator=""),// if it literally is just '>' or '' then allow anything.
n[2]?this.semver=new d(n[2],this.options.loose):this.semver=k},I.prototype.toString=function(){return this.value},I.prototype.test=function(e){if(o("Comparator.test",e,this.options.loose),this.semver===k||e===k)return!0;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}return S(e,this.operator,this.semver,this.options)},I.prototype.intersects=function(e,t){if(!(e instanceof I))throw new TypeError("a Comparator is required");var n;if(t&&"object"===r(t)||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||(n=new _(e.value,t),x(this.value,n,t));if(""===e.operator)return""===e.value||(n=new _(this.value,t),x(e.semver,n,t));var o=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),i=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),a=this.semver.version===e.semver.version,u=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),l=S(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),c=S(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return o||i||a&&u||l||c},t.Range=_,_.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},_.prototype.toString=function(){return this.range},_.prototype.parseRange=function(e){var t=this.options.loose;e=e.trim();// `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
var n=t?a[l.HYPHENRANGELOOSE]:a[l.HYPHENRANGE];e=e.replace(n,N),o("hyphen replace",e),// `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
e=e.replace(a[l.COMPARATORTRIM],"$1$2$3"),o("comparator trim",e,a[l.COMPARATORTRIM]),// normalize spaces
e=(// `^ 1.2.3` => `^1.2.3`
e=(// `~ 1.2.3` => `~1.2.3`
e=e.replace(a[l.TILDETRIM],"$1~")).replace(a[l.CARETTRIM],"$1^")).split(/\s+/).join(" ");// At this point, the range is completely trimmed and
// ready to be split into comparators.
var r=t?a[l.COMPARATORLOOSE]:a[l.COMPARATOR],i=e.split(" ").map((function(e){// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
return function(e,t){return o("comp",e,t),e=// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){o("caret",e,t);var n=t.loose?a[l.CARETLOOSE]:a[l.CARET];return e.replace(n,(function(t,n,r,i,a){var u;return o("caret",e,t,n,r,i,a),C(n)?u="":C(r)?u=">="+n+".0.0 <"+(+n+1)+".0.0":C(i)?u="0"===n?">="+n+"."+r+".0 <"+n+"."+(+r+1)+".0":">="+n+"."+r+".0 <"+(+n+1)+".0.0":a?(o("replaceCaret pr",a),u="0"===n?"0"===r?">="+n+"."+r+"."+i+"-"+a+" <"+n+"."+r+"."+(+i+1):">="+n+"."+r+"."+i+"-"+a+" <"+n+"."+(+r+1)+".0":">="+n+"."+r+"."+i+"-"+a+" <"+(+n+1)+".0.0"):(o("no pr"),u="0"===n?"0"===r?">="+n+"."+r+"."+i+" <"+n+"."+r+"."+(+i+1):">="+n+"."+r+"."+i+" <"+n+"."+(+r+1)+".0":">="+n+"."+r+"."+i+" <"+(+n+1)+".0.0"),o("caret return",u),u}))}(e,t)})).join(" ")}(e,t),o("caret",e),e=function(e,t){return e.trim().split(/\s+/).map((function(e){return function(e,t){var n=t.loose?a[l.TILDELOOSE]:a[l.TILDE];return e.replace(n,(function(t,n,r,i,a){var u;return o("tilde",e,t,n,r,i,a),C(n)?u="":C(r)?u=">="+n+".0.0 <"+(+n+1)+".0.0":C(i)?
// ~1.2 == >=1.2.0 <1.3.0
u=">="+n+"."+r+".0 <"+n+"."+(+r+1)+".0":a?(o("replaceTilde pr",a),u=">="+n+"."+r+"."+i+"-"+a+" <"+n+"."+(+r+1)+".0"):
// ~1.2.3 == >=1.2.3 <1.3.0
u=">="+n+"."+r+"."+i+" <"+n+"."+(+r+1)+".0",o("tilde return",u),u}))}(e,t)})).join(" ")}(e,t),o("tildes",e),e=function(e,t){return o("replaceXRanges",e,t),e.split(/\s+/).map((function(e){return function(e,t){e=e.trim();var n=t.loose?a[l.XRANGELOOSE]:a[l.XRANGE];return e.replace(n,(function(n,r,i,a,u,l){o("xRange",e,n,r,i,a,u,l);var c=C(i),s=c||C(a),f=s||C(u),p=f;return"="===r&&p&&(r=""),// if we're including prereleases in the match, then we need
// to fix this to -0, the lowest possible prerelease value
l=t.includePrerelease?"-0":"",c?
// nothing is allowed
n=">"===r||"<"===r?"<0.0.0-0":"*":r&&p?(
// we know patch is an x, because we have any x at all.
// replace X with 0
s&&(a=0),u=0,">"===r?(
// >1 => >=2.0.0
// >1.2 => >=1.3.0
// >1.2.3 => >= 1.2.4
r=">=",s?(i=+i+1,a=0,u=0):(a=+a+1,u=0)):"<="===r&&(
// <=0.7.x is actually <0.8.0, since any 0.7.x should
// pass.  Similarly, <=7.x is actually <8.0.0, etc.
r="<",s?i=+i+1:a=+a+1),n=r+i+"."+a+"."+u+l):s?n=">="+i+".0.0"+l+" <"+(+i+1)+".0.0"+l:f&&(n=">="+i+"."+a+".0"+l+" <"+i+"."+(+a+1)+".0"+l),o("xRange return",n),n}))}// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
(e,t)})).join(" ")}(e,t),o("xrange",e),e=function(e,t){// Looseness is ignored here.  star is always as loose as it gets!
return o("replaceStars",e,t),e.trim().replace(a[l.STAR],"")}(e,t),o("stars",e),e}(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(
// in loose mode, throw out any that are not valid comparators
i=i.filter((function(e){return!!e.match(r)}))),i=i.map((function(e){return new I(e,this.options)}),this)},_.prototype.intersects=function(e,t){if(!(e instanceof _))throw new TypeError("a Range is required");return this.set.some((function(n){return R(n,t)&&e.set.some((function(e){return R(e,t)&&n.every((function(n){return e.every((function(e){return n.intersects(e,t)}))}))}))}))},t.toComparators=function(e,t){return new _(e,t).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))},_.prototype.test=function(e){if(!e)return!1;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}for(var t=0;t<this.set.length;t++)if(T(this.set[t],e,this.options))return!0;return!1},t.satisfies=x,t.maxSatisfying=function(e,t,n){var r=null,o=null;try{var i=new _(t,n)}catch(e){return null}return e.forEach((function(e){i.test(e)&&(
// satisfies(v, range, options)
r&&-1!==o.compare(e)||(o=new d(
// compare(max, v, true)
r=e,n)))})),r},t.minSatisfying=function(e,t,n){var r=null,o=null;try{var i=new _(t,n)}catch(e){return null}return e.forEach((function(e){i.test(e)&&(
// satisfies(v, range, options)
r&&1!==o.compare(e)||(o=new d(
// compare(min, v, true)
r=e,n)))})),r},t.minVersion=function(e,t){e=new _(e,t);var n=new d("0.0.0");if(e.test(n))return n;if(n=new d("0.0.0-0"),e.test(n))return n;n=null;for(var r=0;r<e.set.length;++r){e.set[r].forEach((function(e){
// Clone to avoid manipulating the comparator's semver object.
var t=new d(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();
/* fallthrough */case"":case">=":n&&!g(n,t)||(n=t);break;case"<":case"<=":
/* Ignore maximum versions */
break;
/* istanbul ignore next */default:throw new Error("Unexpected operation: "+e.operator)}}))}if(n&&e.test(n))return n;return null},t.validRange=function(e,t){try{
// Return '*' instead of '' so that truthiness works.
// This will throw if it's invalid anyway
return new _(e,t).range||"*"}catch(e){return null}}// Determine if version is less than all the versions possible in the range
,t.ltr=function(e,t,n){return P(e,t,"<",n)}// Determine if version is greater than all the versions possible in the range.
,t.gtr=function(e,t,n){return P(e,t,">",n)},t.outside=P,t.prerelease=function(e,t){var n=p(e,t);return n&&n.prerelease.length?n.prerelease:null},t.intersects=function(e,t,n){return e=new _(e,n),t=new _(t,n),e.intersects(t)},t.coerce=function(e,t){if(e instanceof d)return e;"number"==typeof e&&(e=String(e));if("string"!=typeof e)return null;var n=null;if((t=t||{}).rtl){for(
// Find the right-most coercible string that does not share
// a terminus with a more left-ward coercible string.
// Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
// Walk through the string checking with a /g regexp
// Manually set the index so as to pick up overlapping matches.
// Stop when we get a match that ends at the string end, since no
// coercible string can be more right-ward without the same terminus.
var r;(r=a[l.COERCERTL].exec(e))&&(!n||n.index+n[0].length!==e.length);)n&&r.index+r[0].length===n.index+n[0].length||(n=r),a[l.COERCERTL].lastIndex=r.index+r[1].length+r[2].length;// leave it in a clean state
a[l.COERCERTL].lastIndex=-1}else n=e.match(a[l.COERCE]);if(null===n)return null;return p(n[2]+"."+(n[3]||"0")+"."+(n[4]||"0"),t)}
/* WEBPACK VAR INJECTION */}).call(this,n(21))
/***/},
/* 15 */
/***/function(e,t,n){"use strict";
// A linked list to keep track of recently-used-ness
function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(22),a=Symbol("max"),u=Symbol("length"),l=Symbol("lengthCalculator"),c=Symbol("allowStale"),s=Symbol("maxAge"),f=Symbol("dispose"),p=Symbol("noDisposeOnSet"),d=Symbol("lruList"),h=Symbol("cache"),m=Symbol("updateAgeOnGet"),v=function(){return 1},g=

function(){function e(t){if(r(this,e),"number"==typeof t&&(t={max:t}),t||(t={}),t.max&&("number"!=typeof t.max||t.max<0))throw new TypeError("max must be a non-negative number");// Kind of weird to have a default max of Infinity, but oh well.
this[a]=t.max||1/0;var n=t.length||v;if(this[l]="function"!=typeof n?v:n,this[c]=t.stale||!1,t.maxAge&&"number"!=typeof t.maxAge)throw new TypeError("maxAge must be a number");this[s]=t.maxAge||0,this[f]=t.dispose,this[p]=t.noDisposeOnSet||!1,this[m]=t.updateAgeOnGet||!1,this.reset()}// resize the cache when the max changes.
var t,n,g;return t=e,(n=[{key:"rforEach",value:function(e,t){t=t||this;for(var n=this[d].tail;null!==n;){var r=n.prev;S(this,e,n,t),n=r}}},{key:"forEach",value:function(e,t){t=t||this;for(var n=this[d].head;null!==n;){var r=n.next;S(this,e,n,t),n=r}}},{key:"keys",value:function(){return this[d].toArray().map((function(e){return e.key}))}},{key:"values",value:function(){return this[d].toArray().map((function(e){return e.value}))}},{key:"reset",value:function(){var e=this;this[f]&&this[d]&&this[d].length&&this[d].forEach((function(t){return e[f](t.key,t.value)})),this[h]=new Map,// hash of items by key
this[d]=new i,// list of items in order of use recency
this[u]=0}},{key:"dump",value:function(){var e=this;return this[d].map((function(t){return!b(e,t)&&{k:t.key,v:t.value,e:t.now+(t.maxAge||0)}})).toArray().filter((function(e){return e}))}},{key:"dumpLru",value:function(){return this[d]}},{key:"set",value:function(e,t,n){if((n=n||this[s])&&"number"!=typeof n)throw new TypeError("maxAge must be a number");var r=n?Date.now():0,o=this[l](t,e);if(this[h].has(e)){if(o>this[a])return E(this,this[h].get(e)),!1;var i=this[h].get(e).value;// dispose of the old one before overwriting
// split out into 2 ifs for better coverage tracking
return this[f]&&(this[p]||this[f](e,i.value)),i.now=r,i.maxAge=n,i.value=t,this[u]+=o-i.length,i.length=o,this.get(e),w(this),!0}var c=new O(e,t,o,r,n);// oversized objects fall out of cache automatically.
return c.length>this[a]?(this[f]&&this[f](e,t),!1):(this[u]+=c.length,this[d].unshift(c),this[h].set(e,this[d].head),w(this),!0)}},{key:"has",value:function(e){if(!this[h].has(e))return!1;var t=this[h].get(e).value;return!b(this,t)}},{key:"get",value:function(e){return y(this,e,!0)}},{key:"peek",value:function(e){return y(this,e,!1)}},{key:"pop",value:function(){var e=this[d].tail;return e?(E(this,e),e.value):null}},{key:"del",value:function(e){E(this,this[h].get(e))}},{key:"load",value:function(e){
// reset the cache
this.reset();// A previous serialized cache has the most recent items first
for(var t=Date.now(),n=e.length-1;n>=0;n--){var r=e[n],o=r.e||0;if(0===o)// the item was created without expiration in a non aged cache
this.set(r.k,r.v);else{var i=o-t;// dont add already expired items
i>0&&this.set(r.k,r.v,i)}}}},{key:"prune",value:function(){var e=this;this[h].forEach((function(t,n){return y(e,n,!1)}))}},{key:"max",set:function(e){if("number"!=typeof e||e<0)throw new TypeError("max must be a non-negative number");this[a]=e||1/0,w(this)},get:function(){return this[a]}},{key:"allowStale",set:function(e){this[c]=!!e},get:function(){return this[c]}},{key:"maxAge",set:function(e){if("number"!=typeof e)throw new TypeError("maxAge must be a non-negative number");this[s]=e,w(this)},get:function(){return this[s]}// resize the cache when the lengthCalculator changes.
},{key:"lengthCalculator",set:function(e){var t=this;"function"!=typeof e&&(e=v),e!==this[l]&&(this[l]=e,this[u]=0,this[d].forEach((function(e){e.length=t[l](e.value,e.key),t[u]+=e.length}))),w(this)},get:function(){return this[l]}},{key:"length",get:function(){return this[u]}},{key:"itemCount",get:function(){return this[d].length}}])&&o(t.prototype,n),g&&o(t,g),e}(),y=function(e,t,n){var r=e[h].get(t);if(r){var o=r.value;if(b(e,o)){if(E(e,r),!e[c])return}else n&&(e[m]&&(r.value.now=Date.now()),e[d].unshiftNode(r));return o.value}},b=function(e,t){if(!t||!t.maxAge&&!e[s])return!1;var n=Date.now()-t.now;return t.maxAge?n>t.maxAge:e[s]&&n>e[s]},w=function(e){if(e[u]>e[a])for(var t=e[d].tail;e[u]>e[a]&&null!==t;){
// We know that we're about to delete this one, and also
// what the next least recently used key will be, so just
// go ahead and set it now.
var n=t.prev;E(e,t),t=n}},E=function(e,t){if(t){var n=t.value;e[f]&&e[f](n.key,n.value),e[u]-=n.length,e[h].delete(n.key),e[d].removeNode(t)}},O=function e(t,n,o,i,a){r(this,e),this.key=t,this.value=n,this.length=o,this.now=i,this.maxAge=a||0},S=function(e,t,n,r){var o=n.value;b(e,o)&&(E(e,n),e[c]||(o=void 0)),o&&t.call(r,o.value,o.key,e)};e.exports=g},
/* 16 */
/***/function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
//  Import support https://stackoverflow.com/questions/13673346/supporting-both-commonjs-and-amd
e.exports=function(){if("undefined"==typeof document||!document.addEventListener)return null;var t,n,o,i={};return i.copy=function(){var e=!1,t=null,n=!1;function r(){e=!1,t=null,n&&window.getSelection().removeAllRanges(),n=!1}return document.addEventListener("copy",(function(n){if(e){for(var r in t)n.clipboardData.setData(r,t[r]);n.preventDefault()}})),function(o){return new Promise((function(i,a){e=!0,"string"==typeof o?t={"text/plain":o}:o instanceof Node?t={"text/html":(new XMLSerializer).serializeToString(o)}:o instanceof Object?t=o:a("Invalid data type. Must be string, DOM node, or an object mapping MIME types to strings."),function e(t){try{if(document.execCommand("copy"))
// document.execCommand is synchronous: http://www.w3.org/TR/2015/WD-clipboard-apis-20150421/#integration-with-rich-text-editing-apis
// So we can call resolve() back here.
r(),i();else{if(t)throw r(),new Error("Unable to copy. Perhaps it's not available in your browser?");!// Workaround for Safari: https://bugs.webkit.org/show_bug.cgi?id=156529
function(){var e=document.getSelection();// If "nothing" is selected...
if(!document.queryCommandEnabled("copy")&&e.isCollapsed){
// ... temporarily select the entire body.
// We select the entire body because:
// - it's guaranteed to exist,
// - it works (unlike, say, document.head, or phantom element that is
//   not inserted into the DOM),
// - it doesn't seem to flicker (due to the synchronous copy event), and
// - it avoids modifying the DOM (can trigger mutation observers).
// Because we can't do proper feature detection (we already checked
// document.queryCommandEnabled("copy") , which actually gives a false
// negative for Blink when nothing is selected) and UA sniffing is not
// reliable (a lot of UA strings contain "Safari"), this will also
// happen for some browsers other than Safari. :-()
var t=document.createRange();t.selectNodeContents(document.body),e.removeAllRanges(),e.addRange(t),n=!0}}(),e(!0)}}catch(e){r(),a(e)}}(!1)}))}}(),i.paste=(o=!1,document.addEventListener("paste",(function(e){if(o){o=!1,e.preventDefault();var r=t;t=null,r(e.clipboardData.getData(n))}})),function(e){return new Promise((function(r,i){o=!0,t=r,n=e||"text/plain";try{document.execCommand("paste")||(o=!1,i(new Error("Unable to paste. Pasting only works in Internet Explorer at the moment.")))}catch(e){o=!1,i(new Error(e))}}))}),// Handle IE behaviour.
"undefined"==typeof ClipboardEvent&&void 0!==window.clipboardData&&void 0!==window.clipboardData.setData&&(
/*! promise-polyfill 2.0.1 */
function(t){function n(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=r(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],s(e,n(a,this),n(u,this))}function i(e){var t=this;return null===this._state?void this._deferreds.push(e):void f((function(){var n=t._state?e.onFulfilled:e.onRejected;if(null!==n){var r;try{r=n(t._value)}catch(t){return void e.reject(t)}e.resolve(r)}else(t._state?e.resolve:e.reject)(t._value)}))}function a(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==r(e)||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void s(n(t,e),n(a,this),n(u,this))}this._state=!0,this._value=e,l.call(this)}catch(e){u.call(this,e)}}function u(e){this._state=!1,this._value=e,l.call(this)}function l(){for(var e=0,t=this._deferreds.length;t>e;e++)i.call(this,this._deferreds[e]);this._deferreds=null}function c(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function s(e,t,n){var r=!1;try{e((function(e){r||(r=!0,t(e))}),(function(e){r||(r=!0,n(e))}))}catch(e){if(r)return;r=!0,n(e)}}var f=o.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)},p=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=this;return new o((function(r,o){i.call(n,new c(e,t,r,o))}))},o.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&p(arguments[0])?arguments[0]:arguments);return new o((function(t,n){function o(a,u){try{if(u&&("object"==r(u)||"function"==typeof u)){var l=u.then;if("function"==typeof l)return void l.call(u,(function(e){o(a,e)}),n)}e[a]=u,0==--i&&t(e)}catch(e){n(e)}}if(0===e.length)return t([]);for(var i=e.length,a=0;a<e.length;a++)o(a,e[a])}))},o.resolve=function(e){return e&&"object"==r(e)&&e.constructor===o?e:new o((function(t){t(e)}))},o.reject=function(e){return new o((function(t,n){n(e)}))},o.race=function(e){return new o((function(t,n){for(var r=0,o=e.length;o>r;r++)e[r].then(t,n)}))},e.exports?e.exports=o:t.Promise||(t.Promise=o)}(this),i.copy=function(e){return new Promise((function(t,n){
// IE supports string and URL types: https://msdn.microsoft.com/en-us/library/ms536744(v=vs.85).aspx
// We only support the string type for now.
if("string"!=typeof e&&!("text/plain"in e))throw new Error("You must provide a text/plain type.");var r="string"==typeof e?e:e["text/plain"];window.clipboardData.setData("Text",r)?t():n(new Error("Copying was rejected."))}))},i.paste=function(){return new Promise((function(e,t){var n=window.clipboardData.getData("Text");n?e(n):
// The user rejected the paste request.
t(new Error("Pasting was rejected."))}))}),i}()},
/* 17 */
/***/function(e,t,n){"use strict";e.exports=n(25)},
/* 18 */
/***/function(e,t,n){"use strict";
// Do not use imports or top-level requires here!
// Running module factories is intentionally delayed until we know the hook exists.
// This is to avoid issues like: https://github.com/facebook/react-devtools/issues/1039
window.addEventListener("message",(function e(t){t.source===window&&"react-devtools-content-script"===t.data.source&&(window.removeEventListener("message",e),function(e){if(null==e)
// DevTools didn't get injected into this page (maybe b'c of the contentType).
return;var t=n(13).default,r=n(30).default,o=n(31).initBackend,i=n(32).default,a=new r({listen:function(e){var t=function(t){t.source===window&&t.data&&"react-devtools-content-script"===t.data.source&&t.data.payload&&e(t.data.payload)};return window.addEventListener("message",t),function(){window.removeEventListener("message",t)}},send:function(e,t,n){window.postMessage({source:"react-devtools-bridge",payload:{event:e,payload:t}},"*",n)}}),u=new t(a);// Setup React Native style editor if a renderer like react-native-web has injected it.
u.addListener("shutdown",(function(){
// If we received 'shutdown' from `agent`, we assume the `bridge` is already shutting down,
// and that caused the 'shutdown' event on the `agent`, so we don't need to call `bridge.shutdown()` here.
e.emit("shutdown")})),o(e,u,window),// Let the frontend know that the backend has attached listeners and is ready for messages.
// This covers the case of of syncing saved values after reloading/navigating while DevTools remain open.
a.send("extensionBackendInitialized"),e.resolveRNStyle&&i(a,u,e.resolveRNStyle,e.nativeStyleEditorValidAttributes)}
/***/(window.__REACT_DEVTOOLS_GLOBAL_HOOK__))}))},
/* 19 */
/***/function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r;// This works in non-strict mode
r=function(){return this}();try{
// This works if eval is allowed (see CSP)
r=r||new Function("return this")()}catch(e){
// This works if the window reference is available
"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=r},
/* 20 */
/***/function(e,t,n){"use strict";n.r(t),
/* harmony default export */t.default=":root {\n  /**\n   * IMPORTANT: When new theme variables are added below– also add them to SettingsContext updateThemeVariables()\n   */\n\n  /* Light theme */\n  --light-color-attribute-name: #ef6632;\n  --light-color-attribute-name-not-editable: #23272f;\n  --light-color-attribute-name-inverted: rgba(255, 255, 255, 0.7);\n  --light-color-attribute-value: #1a1aa6;\n  --light-color-attribute-value-inverted: #ffffff;\n  --light-color-attribute-editable-value: #1a1aa6;\n  --light-color-background: #ffffff;\n  --light-color-background-hover: rgba(0, 136, 250, 0.1);\n  --light-color-background-inactive: #e5e5e5;\n  --light-color-background-invalid: #fff0f0;\n  --light-color-background-selected: #0088fa;\n  --light-color-button-background: #ffffff;\n  --light-color-button-background-focus: #ededed;\n  --light-color-button: #5f6673;\n  --light-color-button-disabled: #cfd1d5;\n  --light-color-button-active: #0088fa;\n  --light-color-button-focus: #23272f;\n  --light-color-button-hover: #23272f;\n  --light-color-border: #eeeeee;\n  --light-color-commit-did-not-render-fill: #cfd1d5;\n  --light-color-commit-did-not-render-fill-text: #000000;\n  --light-color-commit-did-not-render-pattern: #cfd1d5;\n  --light-color-commit-did-not-render-pattern-text: #333333;\n  --light-color-commit-gradient-0: #37afa9;\n  --light-color-commit-gradient-1: #63b19e;\n  --light-color-commit-gradient-2: #80b393;\n  --light-color-commit-gradient-3: #97b488;\n  --light-color-commit-gradient-4: #abb67d;\n  --light-color-commit-gradient-5: #beb771;\n  --light-color-commit-gradient-6: #cfb965;\n  --light-color-commit-gradient-7: #dfba57;\n  --light-color-commit-gradient-8: #efbb49;\n  --light-color-commit-gradient-9: #febc38;\n  --light-color-commit-gradient-text: #000000;\n  --light-color-component-name: #6a51b2;\n  --light-color-component-name-inverted: #ffffff;\n  --light-color-component-badge-background: rgba(0, 0, 0, 0.1);\n  --light-color-component-badge-background-inverted: rgba(255, 255, 255, 0.25);\n  --light-color-component-badge-count: #777d88;\n  --light-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);\n  --light-color-context-background: rgba(0,0,0,.9);\n  --light-color-context-background-hover: rgba(255, 255, 255, 0.1);\n  --light-color-context-background-selected: #178fb9;\n  --light-color-context-border: #3d424a;\n  --light-color-context-text: #ffffff;\n  --light-color-context-text-selected: #ffffff;\n  --light-color-dim: #777d88;\n  --light-color-dimmer: #cfd1d5;\n  --light-color-dimmest: #eff0f1;\n  --light-color-error-background: hsl(0, 100%, 97%);\n  --light-color-error-border: hsl(0, 100%, 92%);\n  --light-color-error-text: #ff0000;\n  --light-color-expand-collapse-toggle: #777d88;\n  --light-color-link: #0000ff;\n  --light-color-modal-background: rgba(255, 255, 255, 0.75);\n  --light-color-record-active: #fc3a4b;\n  --light-color-record-hover: #3578e5;\n  --light-color-record-inactive: #0088fa;\n  --light-color-scroll-thumb: #c2c2c2;\n  --light-color-scroll-track: #fafafa;\n  --light-color-search-match: yellow;\n  --light-color-search-match-current: #f7923b;\n  --light-color-selected-tree-highlight-active: rgba(0, 136, 250, 0.1);\n  --light-color-selected-tree-highlight-inactive: rgba(0, 0, 0, 0.05);\n  --light-color-shadow: rgba(0, 0, 0, 0.25);\n  --light-color-tab-selected-border: #0088fa;\n  --light-color-text: #000000;\n  --light-color-text-invalid: #ff0000;\n  --light-color-text-selected: #ffffff;\n  --light-color-toggle-background-invalid: #fc3a4b;\n  --light-color-toggle-background-on: #0088fa;\n  --light-color-toggle-background-off: #cfd1d5;\n  --light-color-toggle-text: #ffffff;\n  --light-color-tooltip-background: rgba(0, 0, 0, 0.9);\n  --light-color-tooltip-text: #ffffff;\n\n  /* Dark theme */\n  --dark-color-attribute-name: #9d87d2;\n  --dark-color-attribute-name-not-editable: #ededed;\n  --dark-color-attribute-name-inverted: #282828;\n  --dark-color-attribute-value: #cedae0;\n  --dark-color-attribute-value-inverted: #ffffff;\n  --dark-color-attribute-editable-value: yellow;\n  --dark-color-background: #282c34;\n  --dark-color-background-hover: rgba(255, 255, 255, 0.1);\n  --dark-color-background-inactive: #3d424a;\n  --dark-color-background-invalid: #5c0000;\n  --dark-color-background-selected: #178fb9;\n  --dark-color-button-background: #282c34;\n  --dark-color-button-background-focus: #3d424a;\n  --dark-color-button: #afb3b9;\n  --dark-color-button-active: #61dafb;\n  --dark-color-button-disabled: #4f5766;\n  --dark-color-button-focus: #a2e9fc;\n  --dark-color-button-hover: #ededed;\n  --dark-color-border: #3d424a;\n  --dark-color-commit-did-not-render-fill: #777d88;\n  --dark-color-commit-did-not-render-fill-text: #000000;\n  --dark-color-commit-did-not-render-pattern: #666c77;\n  --dark-color-commit-did-not-render-pattern-text: #ffffff;\n  --dark-color-commit-gradient-0: #37afa9;\n  --dark-color-commit-gradient-1: #63b19e;\n  --dark-color-commit-gradient-2: #80b393;\n  --dark-color-commit-gradient-3: #97b488;\n  --dark-color-commit-gradient-4: #abb67d;\n  --dark-color-commit-gradient-5: #beb771;\n  --dark-color-commit-gradient-6: #cfb965;\n  --dark-color-commit-gradient-7: #dfba57;\n  --dark-color-commit-gradient-8: #efbb49;\n  --dark-color-commit-gradient-9: #febc38;\n  --dark-color-commit-gradient-text: #000000;\n  --dark-color-component-name: #61dafb;\n  --dark-color-component-name-inverted: #282828;\n  --dark-color-component-badge-background: rgba(255, 255, 255, 0.25);\n  --dark-color-component-badge-background-inverted: rgba(0, 0, 0, 0.25);\n  --dark-color-component-badge-count: #8f949d;\n  --dark-color-component-badge-count-inverted: rgba(255, 255, 255, 0.7);\n  --dark-color-context-background: rgba(255,255,255,.9);\n  --dark-color-context-background-hover: rgba(0, 136, 250, 0.1);\n  --dark-color-context-background-selected: #0088fa;\n  --dark-color-context-border: #eeeeee;\n  --dark-color-context-text: #000000;\n  --dark-color-context-text-selected: #ffffff;\n  --dark-color-dim: #8f949d;\n  --dark-color-dimmer: #777d88;\n  --dark-color-dimmest: #4f5766;\n  --dark-color-error-background: #200;\n  --dark-color-error-border: #900;\n  --dark-color-error-text: #f55;\n  --dark-color-expand-collapse-toggle: #8f949d;\n  --dark-color-link: #61dafb;\n  --dark-color-modal-background: rgba(0, 0, 0, 0.75);\n  --dark-color-record-active: #fc3a4b;\n  --dark-color-record-hover: #a2e9fc;\n  --dark-color-record-inactive: #61dafb;\n  --dark-color-scroll-thumb: #afb3b9;\n  --dark-color-scroll-track: #313640;\n  --dark-color-search-match: yellow;\n  --dark-color-search-match-current: #f7923b;\n  --dark-color-selected-tree-highlight-active: rgba(23, 143, 185, 0.15);\n  --dark-color-selected-tree-highlight-inactive: rgba(255, 255, 255, 0.05);\n  --dark-color-shadow: rgba(0, 0, 0, 0.5);\n  --dark-color-tab-selected-border: #178fb9;\n  --dark-color-text: #ffffff;\n  --dark-color-text-invalid: #ff8080;\n  --dark-color-text-selected: #ffffff;\n  --dark-color-toggle-background-invalid: #fc3a4b;\n  --dark-color-toggle-background-on: #178fb9;\n  --dark-color-toggle-background-off: #777d88;\n  --dark-color-toggle-text: #ffffff;\n  --dark-color-tooltip-background: rgba(255, 255, 255, 0.9);\n  --dark-color-tooltip-text: #000000;\n\n  /* Font smoothing */\n  --light-font-smoothing: auto;\n  --dark-font-smoothing: antialiased;\n  --font-smoothing: auto;\n\n  /* Compact density */\n  --compact-font-size-monospace-small: 9px;\n  --compact-font-size-monospace-normal: 11px;\n  --compact-font-size-monospace-large: 15px;\n  --compact-font-size-sans-small: 10px;\n  --compact-font-size-sans-normal: 12px;\n  --compact-font-size-sans-large: 14px;\n  --compact-line-height-data: 18px;\n  --compact-root-font-size: 16px;\n\n  /* Comfortable density */\n  --comfortable-font-size-monospace-small: 10px;\n  --comfortable-font-size-monospace-normal: 13px;\n  --comfortable-font-size-monospace-large: 17px;\n  --comfortable-font-size-sans-small: 12px;\n  --comfortable-font-size-sans-normal: 14px;\n  --comfortable-font-size-sans-large: 16px;\n  --comfortable-line-height-data: 22px;\n  --comfortable-root-font-size: 20px;\n\n  /* GitHub.com system fonts */\n  --font-family-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,\n    Courier, monospace;\n  --font-family-sans: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,\n    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n\n  /* Constant values shared between JS and CSS */\n  --interaction-commit-size: 10px;\n  --interaction-label-width: 200px;\n}\n"},
/* 21 */
/***/function(e,t){
// shim for using process in browser
var n,r,o=e.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)
//normal enviroments in sane situations
return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
return n(e,0)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return n.call(null,e,0)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,c=[],s=!1,f=-1;function p(){s&&l&&(s=!1,l.length?c=l.concat(c):f=-1,c.length&&d())}function d(){if(!s){var e=u(p);s=!0;for(var t=c.length;t;){for(l=c,c=[];++f<t;)l&&l[f].run();f=-1,t=c.length}l=null,s=!1,function(e){if(r===clearTimeout)
//normal enviroments in sane situations
return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{
// when when somebody has screwed with setTimeout but no I.E. maddness
r(e)}catch(t){try{
// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return r.call(null,e)}catch(t){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return r.call(this,e)}}}(e)}}// v8 likes predictible objects
function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||s||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",// empty string to avoid regexp issues
o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},
/* 22 */
/***/function(e,t,n){"use strict";function r(e){var t=this;if(t instanceof r||(t=new r),t.tail=null,t.head=null,t.length=0,e&&"function"==typeof e.forEach)e.forEach((function(e){t.push(e)}));else if(arguments.length>0)for(var n=0,o=arguments.length;n<o;n++)t.push(arguments[n]);return t}function o(e,t,n){var r=t===e.head?new u(n,null,t,e):new u(n,t,t.next,e);return null===r.next&&(e.tail=r),null===r.prev&&(e.head=r),e.length++,r}function i(e,t){e.tail=new u(t,e.tail,null,e),e.head||(e.head=e.tail),e.length++}function a(e,t){e.head=new u(t,null,e.head,e),e.tail||(e.tail=e.head),e.length++}function u(e,t,n,r){if(!(this instanceof u))return new u(e,t,n,r);this.list=r,this.value=e,t?(t.next=this,this.prev=t):this.prev=null,n?(n.prev=this,this.next=n):this.next=null}e.exports=r,r.Node=u,r.create=r,r.prototype.removeNode=function(e){if(e.list!==this)throw new Error("removing node which does not belong to this list");var t=e.next,n=e.prev;return t&&(t.prev=n),n&&(n.next=t),e===this.head&&(this.head=t),e===this.tail&&(this.tail=n),e.list.length--,e.next=null,e.prev=null,e.list=null,t},r.prototype.unshiftNode=function(e){if(e!==this.head){e.list&&e.list.removeNode(e);var t=this.head;e.list=this,e.next=t,t&&(t.prev=e),this.head=e,this.tail||(this.tail=e),this.length++}},r.prototype.pushNode=function(e){if(e!==this.tail){e.list&&e.list.removeNode(e);var t=this.tail;e.list=this,e.prev=t,t&&(t.next=e),this.tail=e,this.head||(this.head=e),this.length++}},r.prototype.push=function(){for(var e=0,t=arguments.length;e<t;e++)i(this,arguments[e]);return this.length},r.prototype.unshift=function(){for(var e=0,t=arguments.length;e<t;e++)a(this,arguments[e]);return this.length},r.prototype.pop=function(){if(this.tail){var e=this.tail.value;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}},r.prototype.shift=function(){if(this.head){var e=this.head.value;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}},r.prototype.forEach=function(e,t){t=t||this;for(var n=this.head,r=0;null!==n;r++)e.call(t,n.value,r,this),n=n.next},r.prototype.forEachReverse=function(e,t){t=t||this;for(var n=this.tail,r=this.length-1;null!==n;r--)e.call(t,n.value,r,this),n=n.prev},r.prototype.get=function(e){for(var t=0,n=this.head;null!==n&&t<e;t++)
// abort out of the list early if we hit a cycle
n=n.next;if(t===e&&null!==n)return n.value},r.prototype.getReverse=function(e){for(var t=0,n=this.tail;null!==n&&t<e;t++)
// abort out of the list early if we hit a cycle
n=n.prev;if(t===e&&null!==n)return n.value},r.prototype.map=function(e,t){t=t||this;for(var n=new r,o=this.head;null!==o;)n.push(e.call(t,o.value,this)),o=o.next;return n},r.prototype.mapReverse=function(e,t){t=t||this;for(var n=new r,o=this.tail;null!==o;)n.push(e.call(t,o.value,this)),o=o.prev;return n},r.prototype.reduce=function(e,t){var n,r=this.head;if(arguments.length>1)n=t;else{if(!this.head)throw new TypeError("Reduce of empty list with no initial value");r=this.head.next,n=this.head.value}for(var o=0;null!==r;o++)n=e(n,r.value,o),r=r.next;return n},r.prototype.reduceReverse=function(e,t){var n,r=this.tail;if(arguments.length>1)n=t;else{if(!this.tail)throw new TypeError("Reduce of empty list with no initial value");r=this.tail.prev,n=this.tail.value}for(var o=this.length-1;null!==r;o--)n=e(n,r.value,o),r=r.prev;return n},r.prototype.toArray=function(){for(var e=new Array(this.length),t=0,n=this.head;null!==n;t++)e[t]=n.value,n=n.next;return e},r.prototype.toArrayReverse=function(){for(var e=new Array(this.length),t=0,n=this.tail;null!==n;t++)e[t]=n.value,n=n.prev;return e},r.prototype.slice=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new r;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var o=0,i=this.head;null!==i&&o<e;o++)i=i.next;for(;null!==i&&o<t;o++,i=i.next)n.push(i.value);return n},r.prototype.sliceReverse=function(e,t){(t=t||this.length)<0&&(t+=this.length),(e=e||0)<0&&(e+=this.length);var n=new r;if(t<e||t<0)return n;e<0&&(e=0),t>this.length&&(t=this.length);for(var o=this.length,i=this.tail;null!==i&&o>t;o--)i=i.prev;for(;null!==i&&o>e;o--,i=i.prev)n.push(i.value);return n},r.prototype.splice=function(e,t
/*, ...nodes */){e>this.length&&(e=this.length-1),e<0&&(e=this.length+e);for(var n=0,r=this.head;null!==r&&n<e;n++)r=r.next;var i=[];for(n=0;r&&n<t;n++)i.push(r.value),r=this.removeNode(r);null===r&&(r=this.tail),r!==this.head&&r!==this.tail&&(r=r.prev);for(n=2;n<arguments.length;n++)r=o(this,r,arguments[n]);return i},r.prototype.reverse=function(){for(var e=this.head,t=this.tail,n=e;null!==n;n=n.prev){var r=n.prev;n.prev=n.next,n.next=r}return this.head=t,this.tail=e,this};try{
// add if support for Symbol.iterator is present
n(23)(r)}catch(e){}
/***/},
/* 23 */
/***/function(e,t,n){"use strict";e.exports=function(e){e.prototype[Symbol.iterator]=

regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.head;case 1:if(!t){e.next=7;break}return e.next=4,t.value;case 4:t=t.next,e.next=1;break;case 7:case"end":return e.stop()}}),e,this)}))}},
/* 24 */
/***/function(e,t,n){"use strict";
/** @license React v0.0.0-experimental-d4eadea6c
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=60103,i=60106,a=60107,u=60108,l=60114,c=60109,s=60110,f=60112,p=60113,d=60120,h=60115,m=60116,v=60121,g=60122,y=60117,b=60118,w=60119,E=60129,O=60131;if("function"==typeof Symbol&&Symbol.for){var S=Symbol.for;o=S("react.element"),i=S("react.portal"),a=S("react.fragment"),u=S("react.strict_mode"),l=S("react.profiler"),c=S("react.provider"),s=S("react.context"),f=S("react.forward_ref"),p=S("react.suspense"),d=S("react.suspense_list"),h=S("react.memo"),m=S("react.lazy"),v=S("react.block"),g=S("react.server.block"),y=S("react.fundamental"),b=S("react.responder"),w=S("react.scope"),E=S("react.debug_trace_mode"),O=S("react.legacy_hidden")}function I(e){if("object"===r(e)&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case a:case l:case u:case p:return e;default:switch(e=e&&e.$$typeof){case s:case f:case m:case h:case c:return e;default:return t}}case i:return t}}}var k=c,_=o,R=f,C=a,N=m,T=h,x=i,P=l,L=u,A=p;t.ContextConsumer=s,t.ContextProvider=k,t.Element=_,t.ForwardRef=R,t.Fragment=C,t.Lazy=N,t.Memo=T,t.Portal=x,t.Profiler=P,t.StrictMode=L,t.Suspense=A,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return I(e)===s},t.isContextProvider=function(e){return I(e)===c},t.isElement=function(e){return"object"===r(e)&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return I(e)===f},t.isFragment=function(e){return I(e)===a},t.isLazy=function(e){return I(e)===m},t.isMemo=function(e){return I(e)===h},t.isPortal=function(e){return I(e)===i},t.isProfiler=function(e){return I(e)===l},t.isStrictMode=function(e){return I(e)===u},t.isSuspense=function(e){return I(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===l||e===E||e===u||e===p||e===d||e===O||"object"===r(e)&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===c||e.$$typeof===s||e.$$typeof===f||e.$$typeof===y||e.$$typeof===b||e.$$typeof===w||e.$$typeof===v||e[0]===g)},t.typeOf=I},
/* 25 */
/***/function(e,t,n){"use strict";
/** @license React v0.0.0-experimental-d4eadea6c
 * react-debug-tools.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(7),i=n(26),a=n(28).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,u=60128;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;u=l("react.opaque.id")}var c=[],s=null,f=null;function p(){if(null===s){var e=new Map;try{m.useContext({_currentValue:null}),m.useState(null),m.useReducer((function(e){return e}),null),m.useRef(null),m.useLayoutEffect((function(){})),m.useEffect((function(){})),m.useImperativeHandle(void 0,(function(){return null})),m.useDebugValue(null),m.useCallback((function(){})),m.useMemo((function(){return null})),m.useMutableSource({_source:{},_getVersion:function(){return 1},_workInProgressVersionPrimary:null,_workInProgressVersionSecondary:null},(function(){return null}),(function(){return function(){}}))}finally{var t=c;c=[]}for(var n=0;n<t.length;n++){var r=t[n];e.set(r.primitive,i.parse(r.stackError))}s=e}return s}var d=null;function h(){var e=d;return null!==e&&(d=e.next),e}var m={readContext:function(e){return e._currentValue},useCallback:function(e){var t=h();return c.push({primitive:"Callback",stackError:Error(),value:null!==t?t.memoizedState[0]:e}),e},useContext:function(e){return c.push({primitive:"Context",stackError:Error(),value:e._currentValue}),e._currentValue},useEffect:function(e){h(),c.push({primitive:"Effect",stackError:Error(),value:e})},useImperativeHandle:function(e){h();var t=void 0;null!==e&&"object"===r(e)&&(t=e.current),c.push({primitive:"ImperativeHandle",stackError:Error(),value:t})},useDebugValue:function(e,t){c.push({primitive:"DebugValue",stackError:Error(),value:"function"==typeof t?t(e):e})},useLayoutEffect:function(e){h(),c.push({primitive:"LayoutEffect",stackError:Error(),value:e})},useMemo:function(e){var t=h();return e=null!==t?t.memoizedState[0]:e(),c.push({primitive:"Memo",stackError:Error(),value:e}),e},useReducer:function(e,t,n){return t=null!==(e=h())?e.memoizedState:void 0!==n?n(t):t,c.push({primitive:"Reducer",stackError:Error(),value:t}),[t,function(){}]},useRef:function(e){var t=h();return e=null!==t?t.memoizedState:{current:e},c.push({primitive:"Ref",stackError:Error(),value:e.current}),e},useState:function(e){var t=h();return e=null!==t?t.memoizedState:"function"==typeof e?e():e,c.push({primitive:"State",stackError:Error(),value:e}),[e,function(){}]},useResponder:function(e,t){return c.push({primitive:"Responder",stackError:Error(),value:{responder:e.displayName||"EventResponder",props:t}}),{responder:e,props:t}},useTransition:function(e){return h(),h(),c.push({primitive:"Transition",stackError:Error(),value:e}),[function(){},!1]},useMutableSource:function(e,t){return h(),h(),h(),h(),e=t(e._source),c.push({primitive:"MutableSource",stackError:Error(),value:e}),e},useDeferredValue:function(e){return h(),h(),c.push({primitive:"DeferredValue",stackError:Error(),value:e}),e},useOpaqueIdentifier:function(){var e=h();return f&&0===f.mode&&h(),(e=null===e?void 0:e.memoizedState)&&e.$$typeof===u&&(e=void 0),c.push({primitive:"OpaqueIdentifier",stackError:Error(),value:e}),e}},v=0;function g(e,t,n){var r=t[n].source,o=0;e:for(;o<e.length;o++)if(e[o].source===r){for(var i=n+1,a=o+1;i<t.length&&a<e.length;i++,a++)if(e[a].source!==t[i].source)continue e;return o}return-1}function y(e,t){return!!e&&(t="use"+t,!(e.length<t.length)&&e.lastIndexOf(t)===e.length-t.length)}function b(e){if(!e)return"";var t=e.lastIndexOf(".");return-1===t&&(t=0),"use"===e.substr(t,3)&&(t+=3),e.substr(t)}function w(e,t){for(var n=[],r=null,o=n,a=0,u=[],l=0;l<t.length;l++){var c=t[l],s=e,f=i.parse(c.stackError);e:{var d=f,h=g(d,s,v);if(-1!==h)s=h;else{for(var m=0;m<s.length&&5>m;m++)if(-1!==(h=g(d,s,m))){v=m,s=h;break e}s=-1}}e:{if(d=f,void 0!==(h=p().get(c.primitive)))for(m=0;m<h.length&&m<d.length;m++)if(h[m].source!==d[m].source){m<d.length-1&&y(d[m].functionName,c.primitive)&&m++,m<d.length-1&&y(d[m].functionName,c.primitive)&&m++,d=m;break e}d=-1}if(null!==(f=-1===s||-1===d||2>s-d?null:f.slice(d,s-1))){if(s=0,null!==r){for(;s<f.length&&s<r.length&&f[f.length-s-1].source===r[r.length-s-1].source;)s++;for(r=r.length-1;r>s;r--)o=u.pop()}for(r=f.length-s-1;1<=r;r--)s=[],o.push({id:null,isStateEditable:!1,name:b(f[r-1].functionName),value:void 0,subHooks:s}),u.push(o),o=s;r=f}s="Context"===(f=c.primitive)||"DebugValue"===f?null:a++,o.push({id:s,isStateEditable:"Reducer"===f||"State"===f,name:f,value:c.value,subHooks:[]})}return function e(t,n){for(var r=[],o=0;o<t.length;o++){var i=t[o];"DebugValue"===i.name&&0===i.subHooks.length?(t.splice(o,1),o--,r.push(i)):e(i.subHooks,i)}null!==n&&(1===r.length?n.value=r[0].value:1<r.length&&(n.value=r.map((function(e){return e.value}))))}(n,null),n}function E(e,t,n){null==n&&(n=a.ReactCurrentDispatcher);var r=n.current;n.current=m;try{var o=Error();e(t)}finally{e=c,c=[],n.current=r}return w(n=i.parse(o),e)}t.inspectHooks=E,t.inspectHooksOfFiber=function(e,t){if(null==t&&(t=a.ReactCurrentDispatcher),f=e,0!==e.tag&&15!==e.tag&&11!==e.tag&&22!==e.tag)throw Error("Unknown Fiber. Needs to be a function component to inspect hooks.");p();var n=e.type,r=e.memoizedProps;if(n!==e.elementType&&n&&n.defaultProps){r=o({},r);var u=n.defaultProps;for(l in u)void 0===r[l]&&(r[l]=u[l])}d=e.memoizedState;var l=new Map;try{for(u=e;u;){if(10===u.tag){var s=u.type._context;l.has(s)||(l.set(s,s._currentValue),s._currentValue=u.memoizedProps.value)}u=u.return}if(11===e.tag){var h=n.render;n=r;var v=e.ref,g=(e=t).current;e.current=m;try{var y=Error();h(n,v)}finally{var b=c;c=[],e.current=g}return w(i.parse(y),b)}return E(n,r,t)}finally{d=null,function(e){e.forEach((function(e,t){return t._currentValue=e}))}(l)}}},
/* 26 */
/***/function(e,t,n){var r,o,i;!function(a,u){"use strict";// Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
/* istanbul ignore next */o=[n(27)],void 0===(i="function"==typeof(r=function(e){var t=/(^|@)\S+:\d+/,n=/^\s*at .*(\S+:\d+|\(native\))/m,r=/^(eval@)?(\[native code])?$/;return{
/**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
parse:function(e){if(void 0!==e.stacktrace||void 0!==e["opera#sourceloc"])return this.parseOpera(e);if(e.stack&&e.stack.match(n))return this.parseV8OrIE(e);if(e.stack)return this.parseFFOrSafari(e);throw new Error("Cannot parse given Error object")},
// Separate line and column numbers from a string of the form: (URI:Line:Column)
extractLocation:function(e){
// Fail-fast but return locations like "(native)"
if(-1===e.indexOf(":"))return[e];var t=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g,""));return[t[1],t[2]||void 0,t[3]||void 0]},parseV8OrIE:function(t){return t.stack.split("\n").filter((function(e){return!!e.match(n)}),this).map((function(t){t.indexOf("(eval ")>-1&&(
// Throw away eval information until we implement stacktrace.js/stackframe#8
t=t.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(\),.*$)/g,""));var n=t.replace(/^\s+/,"").replace(/\(eval code/g,"("),r=n.match(/ (\((.+):(\d+):(\d+)\)$)/),o=(// remove the parenthesized location from the line, if it was matched
n=r?n.replace(r[0],""):n).split(/\s+/).slice(1),i=this.extractLocation(r?r[1]:o.pop()),a=o.join(" ")||void 0,u=["eval","<anonymous>"].indexOf(i[0])>-1?void 0:i[0];// capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
// case it has spaces in it, as the string is split on \s+ later on
return new e({functionName:a,fileName:u,lineNumber:i[1],columnNumber:i[2],source:t})}),this)},parseFFOrSafari:function(t){return t.stack.split("\n").filter((function(e){return!e.match(r)}),this).map((function(t){if(
// Throw away eval information until we implement stacktrace.js/stackframe#8
t.indexOf(" > eval")>-1&&(t=t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),-1===t.indexOf("@")&&-1===t.indexOf(":"))
// Safari eval frames only have function names and nothing else
return new e({functionName:t});var n=/((.*".+"[^@]*)?[^@]*)(?:@)/,r=t.match(n),o=r&&r[1]?r[1]:void 0,i=this.extractLocation(t.replace(n,""));return new e({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:t})}),this)},parseOpera:function(e){return!e.stacktrace||e.message.indexOf("\n")>-1&&e.message.split("\n").length>e.stacktrace.split("\n").length?this.parseOpera9(e):e.stack?this.parseOpera11(e):this.parseOpera10(e)},parseOpera9:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)/i,r=t.message.split("\n"),o=[],i=2,a=r.length;i<a;i+=2){var u=n.exec(r[i]);u&&o.push(new e({fileName:u[2],lineNumber:u[1],source:r[i]}))}return o},parseOpera10:function(t){for(var n=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=t.stacktrace.split("\n"),o=[],i=0,a=r.length;i<a;i+=2){var u=n.exec(r[i]);u&&o.push(new e({functionName:u[3]||void 0,fileName:u[2],lineNumber:u[1],source:r[i]}))}return o},
// Opera 10.65+ Error.stack very similar to FF/Safari
parseOpera11:function(n){return n.stack.split("\n").filter((function(e){return!!e.match(t)&&!e.match(/^Error created at/)}),this).map((function(t){var n,r=t.split("@"),o=this.extractLocation(r.pop()),i=r.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;i.match(/\(([^)]*)\)/)&&(n=i.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var u=void 0===n||"[arguments not available]"===n?void 0:n.split(",");return new e({functionName:a,args:u,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:t})}),this)}}})?r.apply(t,o):r)||(e.exports=i)}()},
/* 27 */
/***/function(e,t,n){var r,o,i;!function(n,a){"use strict";// Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
/* istanbul ignore next */o=[],void 0===(i="function"==typeof(r=function(){function e(e){return e.charAt(0).toUpperCase()+e.substring(1)}function t(e){return function(){return this[e]}}var n=["isConstructor","isEval","isNative","isToplevel"],r=["columnNumber","lineNumber"],o=["fileName","functionName","source"],i=n.concat(r,o,["args"]);function a(t){if(t)for(var n=0;n<i.length;n++)void 0!==t[i[n]]&&this["set"+e(i[n])](t[i[n]])}a.prototype={getArgs:function(){return this.args},setArgs:function(e){if("[object Array]"!==Object.prototype.toString.call(e))throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof a)this.evalOrigin=e;else{if(!(e instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new a(e)}},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",n=this.getColumnNumber()||"",r=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+n+")":"[eval]:"+t+":"+n:r?r+" ("+e+":"+t+":"+n+")":e+":"+t+":"+n}},a.fromString=function(e){var t=e.indexOf("("),n=e.lastIndexOf(")"),r=e.substring(0,t),o=e.substring(t+1,n).split(","),i=e.substring(n+1);if(0===i.indexOf("@"))var u=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),l=u[1],c=u[2],s=u[3];return new a({functionName:r,args:o||void 0,fileName:l,lineNumber:c||void 0,columnNumber:s||void 0})};for(var u=0;u<n.length;u++)a.prototype["get"+e(n[u])]=t(n[u]),a.prototype["set"+e(n[u])]=function(e){return function(t){this[e]=Boolean(t)}}(n[u]);for(var l=0;l<r.length;l++)a.prototype["get"+e(r[l])]=t(r[l]),a.prototype["set"+e(r[l])]=function(e){return function(t){if(n=t,isNaN(parseFloat(n))||!isFinite(n))throw new TypeError(e+" must be a Number");var n;this[e]=Number(t)}}(r[l]);for(var c=0;c<o.length;c++)a.prototype["get"+e(o[c])]=t(o[c]),a.prototype["set"+e(o[c])]=function(e){return function(t){this[e]=String(t)}}(o[c]);return a})?r.apply(t,o):r)||(e.exports=i)}()},
/* 28 */
/***/function(e,t,n){"use strict";e.exports=n(29)},
/* 29 */
/***/function(e,t,n){"use strict";
/** @license React v0.0.0-experimental-d4eadea6c
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(7),i=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,l=60110,c=60112;t.Suspense=60113,t.unstable_SuspenseList=60120;var s=60115,f=60116,p=60121;if(t.unstable_DebugTracingMode=60129,t.unstable_LegacyHidden=60131,"function"==typeof Symbol&&Symbol.for){var d=Symbol.for;i=d("react.element"),a=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),u=d("react.provider"),l=d("react.context"),c=d("react.forward_ref"),t.Suspense=d("react.suspense"),t.unstable_SuspenseList=d("react.suspense_list"),s=d("react.memo"),f=d("react.lazy"),p=d("react.block"),t.unstable_DebugTracingMode=d("react.debug_trace_mode"),t.unstable_LegacyHidden=d("react.legacy_hidden")}var h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function b(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==r(e)&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var E=w.prototype=new b;E.constructor=w,o(E,y.prototype),E.isPureReactComponent=!0;var O={current:null},S=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,r)&&!I.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:i,type:e,key:a,ref:u,props:o,_owner:O.current}}function _(e){return"object"===r(e)&&null!==e&&e.$$typeof===i}var R=/\/+/g;function C(e,t){return"object"===r(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,o,u){var l=r(e);"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case a:c=!0}}if(c)return u=u(c=e),e=""===o?"."+C(c,0):o,Array.isArray(u)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),N(u,t,n,"",(function(e){return e}))):null!=u&&(_(u)&&(u=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),t.push(u)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=o+C(l=e[s],s);c+=N(l,t,n,f,u)}else if("function"==typeof(f=function(e){return null===e||"object"!==r(e)?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e)))for(e=f.call(e),s=0;!(l=e.next()).done;)c+=N(l=l.value,t,n,f=o+C(l,s++),u);else if("object"===l)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function T(e,t,n){if(null==e)return e;var r=[],o=0;return N(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}function P(e){return{$$typeof:p,_data:e.load.apply(null,e.args),_render:e.render}}var L={current:null};function A(){var e=L.current;if(null===e)throw Error(m(321));return e}var j={suspense:null},D={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:j,ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(m(143));return e}},t.Component=y,t.PureComponent=w,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var r=o({},e.props),a=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=O.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)S.call(t,s)&&!I.hasOwnProperty(s)&&(r[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];r.children=c}return{$$typeof:i,type:e.type,key:a,ref:u,props:r,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createMutableSource=function(e,t){return{_getVersion:t,_source:e,_workInProgressVersionPrimary:null,_workInProgressVersionSecondary:null}},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:x}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.unstable_block=function(e,t){return void 0===t?function(){return{$$typeof:p,_data:void 0,_render:e}}:function(){return{$$typeof:f,_payload:{load:t,args:arguments,render:e},_init:P}}},t.unstable_useDeferredValue=function(e,t){return A().useDeferredValue(e,t)},t.unstable_useOpaqueIdentifier=function(){return A().useOpaqueIdentifier()},t.unstable_useTransition=function(e){return A().useTransition(e)},t.unstable_withSuspenseConfig=function(e,t){var n=j.suspense;j.suspense=void 0===t?null:t;try{e()}finally{j.suspense=n}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useMutableSource=function(e,t,n){return A().useMutableSource(e,t,n)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.13.1-experimental-d4eadea6c"},
/* 30 */
/***/function(e,t,n){"use strict";n.r(t);
/* harmony import */var r=n(10);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */var f=

function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?l(e):t}(this,u(t).call(this)),s(l(n),"_isShutdown",!1),s(l(n),"_messageQueue",[]),s(l(n),"_timeoutID",null),s(l(n),"_wallUnlisten",null),s(l(n),"_flush",(function(){if(
// This method is used after the bridge is marked as destroyed in shutdown sequence,
// so we do not bail out if the bridge marked as destroyed.
// It is a private method that the bridge ensures is only called at the right times.
null!==n._timeoutID&&(clearTimeout(n._timeoutID),n._timeoutID=null),n._messageQueue.length){for(var e=0;e<n._messageQueue.length;e+=2){var t;(t=n._wall).send.apply(t,[n._messageQueue[e]].concat(i(n._messageQueue[e+1])))}n._messageQueue.length=0,// Check again for queued messages in BATCH_DURATION ms. This will keep
// flushing in a loop as long as messages continue to be added. Once no
// more are, the timer expires.
n._timeoutID=setTimeout(n._flush,100)}})),n._wall=e,n._wallUnlisten=e.listen((function(e){l(n).emit(e.event,e.payload)}))||null,n}// Listening directly to the wall isn't advised.
// It can be used to listen for legacy (v3) messages (since they use a different format).
var n,r,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),n=t,(r=[{key:"send",value:function(e){if(this._isShutdown)console.warn('Cannot send message "'.concat(e,'" through a Bridge that has been shutdown.'));else{// When we receive a message:
// - we add it to our queue of messages to be sent
// - if there hasn't been a message recently, we set a timer for 0 ms in
//   the future, allowing all messages created in the same tick to be sent
//   together
// - if there *has* been a message flushed in the last BATCH_DURATION ms
//   (or we're waiting for our setTimeout-0 to fire), then _timeoutID will
//   be set, and we'll simply add to the queue and wait for that
for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this._messageQueue.push(e,n),this._timeoutID||(this._timeoutID=setTimeout(this._flush,0))}}},{key:"shutdown",value:function(){if(this._isShutdown)console.warn("Bridge was already shutdown.");else{// Queue the shutdown outgoing message for subscribers.
this.send("shutdown"),// Mark this bridge as destroyed, i.e. disable its public API.
this._isShutdown=!0,// Disable the API inherited from EventEmitter that can add more listeners and send more messages.
// $FlowFixMe This property is not writable.
this.addListener=function(){},// $FlowFixMe This property is not writable.
this.emit=function(){},// NOTE: There's also EventEmitter API like `on` and `prependListener` that we didn't add to our Flow type of EventEmitter.
// Unsubscribe this bridge incoming message listeners to be sure, and so they don't have to do that.
this.removeAllListeners();// Stop accepting and emitting incoming messages from the wall.
var e=this._wallUnlisten;e&&e();// Synchronously flush all queued outgoing messages.
// At this step the subscribers' code may run in this call stack.
do{this._flush()}while(this._messageQueue.length);// Make sure once again that there is no dangling timer.
null!==this._timeoutID&&(clearTimeout(this._timeoutID),this._timeoutID=null)}}},{key:"wall",get:function(){return this._wall}}])&&a(n.prototype,r),f&&a(n,f),t}(r.a);
/* harmony default export */t.default=f},
/* 31 */
/***/function(e,t,n){"use strict";
// ESM COMPAT FLAG
n.r(t),
// EXPORTS
n.d(t,"initBackend",(function(){/* binding */return y}));
// EXTERNAL MODULE: ../react-devtools-shared/src/backend/agent.js + 7 modules
n(13);
// EXTERNAL MODULE: ../react-devtools-shared/src/backend/renderer.js
var r=n(12),o=n(0),i=n(2),a=n(5),u=n(3);
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/legacy/utils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function l(e,t,n){var r=e[t];return e[t]=function(e){return n.call(this,r,arguments)},r}function c(e,t){for(var n in t)e[n]=t[n]}function s(e){"function"==typeof e.forceUpdate?e.forceUpdate():null!=e.updater&&"function"==typeof e.updater.enqueueForceUpdate&&e.updater.enqueueForceUpdate(this,(function(){}),"forceUpdate")}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/legacy/renderer.js
function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function h(e){var t=null,n=null;// != used deliberately here to catch undefined and null
if(null!=e._currentElement){e._currentElement.key&&(n=""+e._currentElement.key);var r=e._currentElement.type;"string"==typeof r?t=r:"function"==typeof r&&(t=Object(i.d)(r))}return{displayName:t,key:n}}function m(e){
// != used deliberately here to catch undefined and null
if(null!=e._currentElement){var t=e._currentElement.type;if("function"==typeof t)return null!==e.getPublicInstance()?o.e:o.h;if("string"==typeof t)return o.i}return o.k}function v(e){var t=[];// If the parent is a native node without rendered children, but with
// multiple string children, then the `element` that gets passed in here is
// a plain value -- a string or number.
if("object"!==d(e));else if(null===e._currentElement||!1===e._currentElement);else if(e._renderedComponent){var n=e._renderedComponent;m(n)!==o.k&&t.push(n)}else if(e._renderedChildren){var r=e._renderedChildren;for(var i in r){var a=r[i];m(a)!==o.k&&t.push(a)}}// Note: we skip the case where children are just strings or numbers
// because the new DevTools skips over host text nodes anyway.
return t}function g(e,t,n,r){var g,y=new Map,b=new WeakMap,w=new WeakMap,E=null;function O(e){if("object"!==d(e))throw new Error("Invalid internal instance: "+e);if(!b.has(e)){var t=Object(i.g)();b.set(e,t),y.set(t,e)}return b.get(e)}function S(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}// This is shared mutable state that lets us keep track of where we are.
n.ComponentTree?(E=function(e,t){var r=n.ComponentTree.getClosestInstanceFromNode(e);return b.get(r)||null},g=function(e){var t=y.get(e);return n.ComponentTree.getNodeFromInstance(t)}):n.Mount.getID&&n.Mount.getNode&&(E=function(e,t){
// Not implemented.
return null},g=function(e){
// Not implemented.
return null});var I=[],k=null;function _(e,t,n){var r=0===n;if(u.k&&console.log("%crecordMount()","color: green; font-weight: bold;",t,h(e).displayName),r){
// TODO Is this right? For all versions?
var i=null!=e._currentElement&&null!=e._currentElement._owner;j(u.g),j(t),j(o.m),j(0),// isProfilingSupported?
j(i?1:0)}else{var a=m(e),l=h(e),c=l.displayName,s=l.key,f=null!=e._currentElement&&null!=e._currentElement._owner?O(e._currentElement._owner):0,p=D(c),d=D(s);j(u.g),j(t),j(a),j(n),j(f),j(p),j(d)}}function R(e,t,n){j(u.i),j(t);var r=n.map(O);j(r.length);for(var o=0;o<r.length;o++)j(r[o])}function C(e,t,n){u.k&&console.group("crawlAndRecordInitialMounts() id:",e);var r=y.get(e);null!=r&&(w.set(r,n),_(r,e,t),v(r).forEach((function(t){return C(O(t),e,n)}))),u.k&&console.groupEnd()}n.Reconciler&&(
// React 15
k=function(e,t){var n={};for(var r in t)n[r]=l(e,r,t[r]);return n}(n.Reconciler,{mountComponent:function(e,t){var n=t[0],r=t[3];if(m(n)===o.k)return e.apply(this,t);if(void 0===r._topLevelWrapper)
// SSR
return e.apply(this,t);var i=O(n);// Push the operation.
_(n,i,I.length>0?I[I.length-1]:0),I.push(i),// Remember the root.
w.set(n,O(r._topLevelWrapper));try{var a=e.apply(this,t);return I.pop(),a}catch(e){throw I=[],e}finally{if(0===I.length){var u=w.get(n);if(void 0===u)throw new Error("Expected to find root ID.");A(u)}}},performUpdateIfNecessary:function(e,t){var n=t[0];if(m(n)===o.k)return e.apply(this,t);var r=O(n);I.push(r);var i=v(n);try{var a=e.apply(this,t),u=v(n);return S(i,u)||
// Push the operation
R(n,r,u),I.pop(),a}catch(e){throw I=[],e}finally{if(0===I.length){var l=w.get(n);if(void 0===l)throw new Error("Expected to find root ID.");A(l)}}},receiveComponent:function(e,t){var n=t[0];if(m(n)===o.k)return e.apply(this,t);var r=O(n);I.push(r);var i=v(n);try{var a=e.apply(this,t),u=v(n);return S(i,u)||
// Push the operation
R(n,r,u),I.pop(),a}catch(e){throw I=[],e}finally{if(0===I.length){var l=w.get(n);if(void 0===l)throw new Error("Expected to find root ID.");A(l)}}},unmountComponent:function(e,t){var n=t[0];if(m(n)===o.k)return e.apply(this,t);var r=O(n);I.push(r);try{var i=e.apply(this,t);return I.pop(),// Push the operation.
function(e,t){x.push(t),y.delete(t)}(0,r),i}catch(e){throw I=[],e}finally{if(0===I.length){var a=w.get(n);if(void 0===a)throw new Error("Expected to find root ID.");A(a)}}}}));var N=[],T=new Map,x=[],P=0,L=null;function A(n){if(0!==N.length||0!==x.length||null!==L){var r=x.length+(null===L?0:1),o=new Array(// Identify which renderer this update is coming from.
3+// [stringTableLength]
// Then goes the actual string table.
P+(// All unmounts are batched in a single message.
// [TREE_OPERATION_REMOVE, removedIDLength, ...ids]
r>0?2+r:0)+// Mount operations
N.length),a=0;if(o[a++]=t,o[a++]=n,// Now fill in the string table.
// [stringTableLength, str1Length, ...str1, str2Length, ...str2, ...]
o[a++]=P,T.forEach((function(e,t){o[a++]=t.length;for(var n=Object(i.j)(t),r=0;r<n.length;r++)o[a+r]=n[r];a+=t.length})),r>0){
// All unmounts except roots are batched in a single message.
o[a++]=u.h,// The first number is how many unmounted IDs we're gonna send.
o[a++]=r;// Fill in the unmounts
for(var l=0;l<x.length;l++)o[a++]=x[l];// The root ID should always be unmounted last.
null!==L&&(o[a]=L,a++)}// Fill in the rest of the operations.
for(var c=0;c<N.length;c++)o[a+c]=N[c];a+=N.length,u.k&&Object(i.h)(o),// If we've already connected to the frontend, just pass the operations through.
e.emit("operations",o),N.length=0,x=[],L=null,T.clear(),P=0}}function j(e){Number.isInteger(e)||console.error("pushOperation() was called but the value is not an integer.",e),N.push(e)}function D(e){if(null===e)return 0;var t=T.get(e);if(void 0!==t)return t;var n=T.size+1;return T.set(e,n),// The string table total length needs to account
// both for the string length, and for the array item
// that contains the length itself. Hence + 1.
P+=e.length+1,n}var M=null,F={};function $(e){
// This function helps prevent previously-inspected paths from being dehydrated in updates.
// This is important to avoid a bad user experience where expanded toggles collapse on update.
return function(t){var n=F[e];if(!n)return!1;for(var r=0;r<t.length;r++)if(!(n=n[t[r]]))return!1;return!0}}// Fast path props lookup for React Native style editor.
function U(e){var t=y.get(e);if(null==t)return null;var n=h(t),r=n.displayName,i=n.key,a=m(t),u=null,l=null,c=null,s=null,f=null,p=t._currentElement;if(null!==p){c=p.props,f=null!=p._source?p._source:null;var d=p._owner;if(d)for(l=[];null!=d;)l.push({displayName:h(d).displayName||"Unknown",id:O(d),type:m(d)}),d._currentElement&&(d=d._currentElement._owner)}var v=t._instance;return null!=v&&(u=v.context||null,s=v.state||null),{id:e,
// Hooks did not exist in legacy versions
canEditHooks:!1,
// Does the current renderer support editable function props?
canEditFunctionProps:!0,
// Suspense did not exist in legacy versions
canToggleSuspense:!1,
// Can view component source location.
canViewSource:a===o.e||a===o.h,
// Only legacy context exists in legacy versions.
hasLegacyContext:!0,displayName:r,type:a,key:null!=i?i:null,
// Inspectable properties.
context:u,hooks:null,props:c,state:s,
// List of owners
owners:l,
// Location of component in source code.
source:f,rootType:null,rendererPackageName:null,rendererVersion:null}}function z(e,t,n){var r=t.pop(),o=t.reduce((// $FlowFixMe
function(e,t){return e?e[t]:null}),e);o&&(
// $FlowFixMe
o[r]=n)}// v16+ only features
return{cleanup:function(){null!==k&&(n.Component?c(n.Component.Mixin,k):c(n.Reconciler,k)),k=null},copyElementPath:function(e,t){var n=U(e);null!==n&&Object(a.b)(Object(i.f)(n,t))},flushInitialOperations:function(){
// Crawl roots though and register any nodes that mounted before we were injected.
var e=n.Mount._instancesByReactRootID||n.Mount._instancesByContainerID;for(var t in e){var r=O(e[t]);C(r,0,r),A(r)}},getBestMatchForTrackedPath:function(){
// Not implemented.
return null},getDisplayNameForFiberID:function(e){var t=y.get(e);return t?h(t).displayName:null},getFiberIDForNative:E,getInstanceAndStyle:function(e){var t=null,n=null,r=y.get(e);if(null!=r){t=r._instance||null;var o=r._currentElement;null!=o&&null!=o.props&&(n=o.props.style||null)}return{instance:t,style:n}},findNativeNodesForFiberID:function(e){var t=g(e);return null==t?null:[t]},getOwnersList:function(e){
// Not implemented.
return null},getPathForElement:function(e){
// Not implemented.
return null},getProfilingData:function(){throw new Error("getProfilingData not supported by this renderer")},handleCommitFiberRoot:function(){throw new Error("handleCommitFiberRoot not supported by this renderer")},handleCommitFiberUnmount:function(){throw new Error("handleCommitFiberUnmount not supported by this renderer")},inspectElement:function(e,t){M!==e&&(M=e,F={});var n=U(e);return null===n?{id:e,type:"not-found"}:(null!=t&&// Track the intersection of currently inspected paths,
// so that we can send their data along if the element is re-rendered.
function(e){var t=F;e.forEach((function(e){t[e]||(t[e]={}),t=t[e]}))}(t),// Any time an inspected element has an update,
// we should update the selected $r value as wel.
// Do this before dehyration (cleanForBridge).
function(e){var t=y.get(e);if(null!=t)switch(m(t)){case o.e:r.$r=t._instance;break;case o.h:var n=t._currentElement;if(null==n)return void console.warn('Could not find element with id "'.concat(e,'"'));r.$r={props:n.props,type:n.type};break;default:r.$r=null}else console.warn('Could not find instance with id "'.concat(e,'"'))}(e),n.context=Object(a.a)(n.context,$("context")),n.props=Object(a.a)(n.props,$("props")),n.state=Object(a.a)(n.state,$("state")),{id:e,type:"full-data",value:n})},logElementToConsole:function(e){var t=U(e);if(null!==t){var n="function"==typeof console.groupCollapsed;n&&console.groupCollapsed("[Click to expand] %c<".concat(t.displayName||"Component"," />"),// --dom-tag-name-color is the CSS variable Chrome styles HTML elements with in the console.
"color: var(--dom-tag-name-color); font-weight: normal;"),null!==t.props&&console.log("Props:",t.props),null!==t.state&&console.log("State:",t.state),null!==t.context&&console.log("Context:",t.context);var r=g(e);null!==r&&console.log("Node:",r),(window.chrome||/firefox/i.test(navigator.userAgent))&&console.log("Right-click any value to save it as a global variable for further inspection."),n&&console.groupEnd()}else console.warn('Could not find element with id "'.concat(e,'"'))},overrideSuspense:function(){throw new Error("overrideSuspense not supported by this renderer")},prepareViewAttributeSource:function(e,t){var n=U(e);null!==n&&(window.$attribute=Object(i.f)(n,t))},prepareViewElementSource:function(e){var t=y.get(e);if(null!=t){var n=t._currentElement;null!=n?r.$type=n.type:console.warn('Could not find element with id "'.concat(e,'"'))}else console.warn('Could not find instance with id "'.concat(e,'"'))},renderer:n,setInContext:function(e,t,n){var r=y.get(e);if(null!=r){var o=r._instance;null!=o&&(z(o.context,t,n),s(o))}},setInHook:function(){throw new Error("setInHook not supported by this renderer")},setInProps:function(e,t,n){var r=y.get(e);if(null!=r){var o=r._currentElement;r._currentElement=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,{props:Object(a.c)(o.props,t,n)}),s(r._instance)}},setInState:function(e,t,n){var r=y.get(e);if(null!=r){var o=r._instance;null!=o&&(z(o.state,t,n),s(o))}},setTraceUpdatesEnabled:function(e){// Not implemented.
},setTrackedPath:function(e){// Not implemented.
},startProfiling:function(){// Do not throw, since this would break a multi-root scenario where v15 and v16 were both present.
},stopProfiling:function(){// Do not throw, since this would break a multi-root scenario where v15 and v16 were both present.
},storeAsGlobal:function(e,t,n){var r=U(e);if(null!==r){var o=Object(i.f)(r,t),a="$reactTemp".concat(n);window[a]=o,console.log(a),console.log(o)}},updateComponentFilters:function(e){// Not implemented.
}}}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function y(e,t,n){if(null==e)
// DevTools didn't get injected into this page (maybe b'c of the contentType).
return function(){};var o=[e.sub("renderer-attached",(function(e){var n=e.id,r=(e.renderer,e.rendererInterface);t.setRendererInterface(n,r),// Now that the Store and the renderer interface are connected,
// it's time to flush the pending operation codes to the frontend.
r.flushInitialOperations()})),e.sub("unsupported-renderer-version",(function(e){t.onUnsupportedRenderer(e)})),e.sub("operations",t.onHookOperations),e.sub("traceUpdates",t.onTraceUpdates)],i=function(t,o){var i=e.rendererInterfaces.get(t);// Inject any not-yet-injected renderers (if we didn't reload-and-profile)
null==i&&("function"==typeof o.findFiberByHostInstance?
// react-reconciler v16+
i=Object(r.a)(e,t,o,n):o.ComponentTree&&(
// react-dom v15
i=g(e,t,o,n)),null!=i&&e.rendererInterfaces.set(t,i)),// Notify the DevTools frontend about new renderers.
// This includes any that were attached early (via __REACT_DEVTOOLS_ATTACH__).
null!=i?e.emit("renderer-attached",{id:t,renderer:o,rendererInterface:i}):e.emit("unsupported-renderer-version",t)};// Connect renderers that have already injected themselves.
e.renderers.forEach((function(e,t){i(t,e)})),// Connect any new renderers that injected themselves.
o.push(e.sub("renderer",(function(e){var t=e.id,n=e.renderer;i(t,n)}))),e.emit("react-devtools",t),e.reactDevtoolsAgent=t;var a=function(){o.forEach((function(e){return e()})),e.rendererInterfaces.forEach((function(e){e.cleanup()})),e.reactDevtoolsAgent=null};return t.addListener("shutdown",a),o.push((function(){t.removeListener("shutdown",a)})),function(){o.forEach((function(e){return e()}))}}
/***/},
/* 32 */
/***/function(e,t,n){"use strict";
// ESM COMPAT FLAG
n.r(t),
// EXPORTS
n.d(t,"default",(function(){/* binding */return a}));
// EXTERNAL MODULE: ../react-devtools-shared/src/backend/agent.js + 7 modules
n(13);
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/NativeStyleEditor/resolveBoxStyle.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
/**
 * This mirrors react-native/Libraries/Inspector/resolveBoxStyle.js (but without RTL support).
 *
 * Resolve a style property into it's component parts, e.g.
 *
 * resolveBoxStyle('margin', {margin: 5, marginBottom: 10})
 * -> {top: 5, left: 5, right: 5, bottom: 10}
 */function r(e,t){var n=!1,r={bottom:0,left:0,right:0,top:0},o=t[e];if(null!=o){
// eslint-disable-next-line no-for-of-loops/no-for-of-loops
for(var i=0,a=Object.keys(r);i<a.length;i++){r[a[i]]=o}n=!0}var u=t[e+"Horizontal"];if(null!=u)r.left=u,r.right=u,n=!0;else{var l=t[e+"Left"];null!=l&&(r.left=l,n=!0);var c=t[e+"Right"];null!=c&&(r.right=c,n=!0);var s=t[e+"End"];null!=s&&(
// TODO RTL support
r.right=s,n=!0);var f=t[e+"Start"];null!=f&&(
// TODO RTL support
r.left=f,n=!0)}var p=t[e+"Vertical"];if(null!=p)r.bottom=p,r.top=p,n=!0;else{var d=t[e+"Bottom"];null!=d&&(r.bottom=d,n=!0);var h=t[e+"Top"];null!=h&&(r.top=h,n=!0)}return n?r:null}
// CONCATENATED MODULE: ../react-devtools-shared/src/backend/NativeStyleEditor/setupNativeStyleEditor.js
function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */function a(e,t,n,r){e.addListener("NativeStyleEditor_measure",(function(r){var o=r.id,i=r.rendererID;c(t,e,n,o,i)})),e.addListener("NativeStyleEditor_renameAttribute",(function(r){var a=r.id,u=r.rendererID,f=r.oldName,p=r.newName,d=r.value;!function(e,t,n,r,a,u){var c,f=e.getInstanceAndStyle({id:t,rendererID:n});if(!f||!f.style)return;var p,d=f.instance,h=f.style,m=a?(i(c={},r,void 0),i(c,a,u),c):i({},r,void 0);// TODO It would be nice if the renderer interface abstracted this away somehow.
if(null!==d&&"function"==typeof d.setNativeProps){
// In the case of a host component, we need to use setNativeProps().
// Remember to "correct" resolved styles when we read them next time.
var v=l.get(t);v?Object.assign(v,m):l.set(t,m),// TODO Fabric does not support setNativeProps; chat with Sebastian or Eli
d.setNativeProps({style:m})}else if(Array.isArray(h)){var g=h.length-1;"object"!==o(h[g])||Array.isArray(h[g])?e.overrideProps({id:t,rendererID:n,path:["style"],value:h.concat([m])}):(delete(p=s(h[g]))[r],a?p[a]=u:p[r]=void 0,e.overrideProps({id:t,rendererID:n,path:["style",g],value:p}))}else"object"===o(h)?(delete(p=s(h))[r],a?p[a]=u:p[r]=void 0,e.overrideProps({id:t,rendererID:n,path:["style"],value:p})):e.overrideProps({id:t,rendererID:n,path:["style"],value:[h,m]});e.emit("hideNativeHighlight")}(t,a,u,f,p,d),setTimeout((function(){return c(t,e,n,a,u)}))})),e.addListener("NativeStyleEditor_setValue",(function(r){var a=r.id,u=r.rendererID,s=r.name,f=r.value;!function(e,t,n,r,a){var u=e.getInstanceAndStyle({id:t,rendererID:n});if(!u||!u.style)return;var c=u.instance,s=u.style,f=i({},r,a);// TODO It would be nice if the renderer interface abstracted this away somehow.
if(null!==c&&"function"==typeof c.setNativeProps){
// In the case of a host component, we need to use setNativeProps().
// Remember to "correct" resolved styles when we read them next time.
var p=l.get(t);p?Object.assign(p,f):l.set(t,f),// TODO Fabric does not support setNativeProps; chat with Sebastian or Eli
c.setNativeProps({style:f})}else if(Array.isArray(s)){var d=s.length-1;"object"!==o(s[d])||Array.isArray(s[d])?e.overrideProps({id:t,rendererID:n,path:["style"],value:s.concat([f])}):e.overrideProps({id:t,rendererID:n,path:["style",d,r],value:a})}else e.overrideProps({id:t,rendererID:n,path:["style"],value:[s,f]});e.emit("hideNativeHighlight")}
/***/(t,a,u,s,f),setTimeout((function(){return c(t,e,n,a,u)}))})),e.send("isNativeStyleEditorSupported",{isSupported:!0,validAttributes:r})}var u={top:0,left:0,right:0,bottom:0},l=new Map;function c(e,t,n,o,i){var a=e.getInstanceAndStyle({id:o,rendererID:i});if(a&&a.style){var c=a.instance,s=n(a.style),f=l.get(o);null!=f&&(s=Object.assign({},s,f)),c&&"function"==typeof c.measure?// $FlowFixMe the parameter types of an unknown function are unknown
c.measure((function(e,n,i,a,l,c){
// RN Android sometimes returns undefined here. Don't send measurements in this case.
// https://github.com/jhen0409/react-native-debugger/issues/84#issuecomment-304611817
if("number"==typeof e){var f=null!=s&&r("margin",s)||u,p=null!=s&&r("padding",s)||u;t.send("NativeStyleEditor_styleAndLayout",{id:o,layout:{x:e,y:n,width:i,height:a,left:l,top:c,margin:f,padding:p},style:s||null})}else t.send("NativeStyleEditor_styleAndLayout",{id:o,layout:null,style:s||null})})):t.send("NativeStyleEditor_styleAndLayout",{id:o,layout:null,style:s||null})}else t.send("NativeStyleEditor_styleAndLayout",{id:o,layout:null,style:null})}function s(e){var t={};for(var n in e)t[n]=e[n];return t}}
/******/]);