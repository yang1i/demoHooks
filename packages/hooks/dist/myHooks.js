!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports["yangyi-hooks"]=t(require("React")):e["yangyi-hooks"]=t(e.React)}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){"use strict";r.r(t),r.d(t,"useToggle",(function(){return u}));Object.create;function n(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,u=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=u.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=u.return)&&r.call(u)}finally{if(o)throw o.error}}return i}Object.create;"function"==typeof SuppressedError&&SuppressedError;var o=r(0);var u=function(e,t){void 0===e&&(e=!1);var r=n(Object(o.useState)(e),2),u=r[0],i=r[1];return[u,Object(o.useMemo)((function(){var r=t||!e;return{toggle:function(){return i((function(t){return t===e?r:e}))},setLeft:function(){return i(e)},setRight:function(){return i(r)}}}),[])]}}])}));