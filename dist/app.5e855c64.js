parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SfFI":[function(require,module,exports) {

},{}],"V6rt":[function(require,module,exports) {
"use strict";var e=n(require("./header.js"));function n(e){return e&&e.__esModule?e:{default:e}}function t(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=92d9b5ed56e1b3fa6560470920e30f22").then(function(e){return e.json()}).then(function(e){for(var n="",t=0;t<=11;t++)n+='<a href="" class="trending__link">\n            <div class="trending__item">\n            <img src="https://i.pinimg.com/236x/8d/36/a6/8d36a6e0c7a6fb251682b3f0e1856a03.jpg" alt="" class="trending__image">\n            <div class="trending__about">\n            <p class="trending__subtitle">'.concat(e.results[t].original_title,'</p>\n            <p class="trending__date"> ').concat(e.results[t].release_date,"\n            </div>\n            </div>");console.log(e.results),document.getElementsByClassName("trending__list")[0].innerHTML=n})}t();
},{"./header.js":"SfFI"}]},{},["V6rt"], null)
//# sourceMappingURL=/app.5e855c64.js.map