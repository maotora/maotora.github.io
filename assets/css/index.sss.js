/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = "body {\n  padding: 50px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue\n}\n\n* {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0\n}\n\n/* body */\n\n/*     lost-utility: edit */\n\nsidebar {\n    width: calc(99.9% * .5/2 - (0px - 0px * .5/2));\n    height: 100vh;\n    position: fixed;\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#09203f), color-stop(80%, #537895));\n    background-image: linear-gradient(to top, #09203f 0%, #537895 80%)\n}\n\nsidebar:nth-child(1n) {\n    float: left;\n    margin-right: 0px;\n    clear: none\n}\n\nsidebar:last-child {\n    margin-right: 0\n}\n\nsidebar:nth-child(2n) {\n    margin-right: 0;\n    float: right\n}\n\nsidebar:nth-child(2n + 1) {\n    clear: both\n}\n\nsidebar .wrapper {\n    padding: .5em 2em\n}\n\n/* Commneted out */\n\n/* .avatar_section */\n\n/*     lost-row: .5/2 */\n\n/* .profile_info_section */\n\n/*     .lost-row: 1.5/2 */\n\n.avatar {\n    border-radius: 5em;\n    background: url(\"../img/me.jpg\") no-repeat;\n    background-size: contain;\n    max-width: 13em;\n    margin-left: auto;\n    margin-right: auto\n}\n\n.avatar:before {\n    content: '';\n    display: table\n}\n\n.avatar:after {\n    content: '';\n    display: table;\n    clear: both\n}\n\n@media (min-height: 950px) {\n\n    .avatar {\n        height: 12.5em;\n        width: 12.5em\n    }\n}\n\n@media (min-height: 680px) and (max-height: 749px) {\n\n    .avatar {\n        height: 8.5em;\n        width: 8.5em\n    }\n}\n\n@media (min-height: 750px) and (max-height: 949px) {\n\n    .avatar {\n        height: 10.5em;\n        width: 10.5em\n    }\n}\n\n.profile_basic_info ul {\n    list-style: none;\n    padding-left: 0\n}\n\n.profile_basic_info h1 {\n    text-align: center;\n    font-size: 1.5em;\n    color: white\n}\n\n.footer_social {\n    max-width: 18em;\n    margin-left: auto;\n    margin-right: auto\n}\n\n.footer_social:before {\n    content: '';\n    display: table\n}\n\n.footer_social:after {\n    content: '';\n    display: table;\n    clear: both\n}\n\n.footer_social li {\n    float: left;\n    width: calc(99.9% * 1/3 - (30px - 30px * 1/3));\n    display: block\n}\n\n.footer_social li:nth-child(1n) {\n    float: left;\n    margin-right: 30px;\n    clear: none\n}\n\n.footer_social li:last-child {\n    margin-right: 0\n}\n\n.footer_social li:nth-child(3n) {\n    margin-right: 0;\n    float: right\n}\n\n.footer_social li:nth-child(3n + 1) {\n    clear: both\n}\n\n.footer_social a {\n    text-decoration: none;\n    display: block;\n    height: 3em;\n    width: 3em\n}\n\n.footer_social #facebook {\n    background: white url('../img/facebook.png') no-repeat;\n    background-size: cover\n}\n\n.footer_social #twitter {\n    background: white url('../img/twitter.png') no-repeat;\n    background-size: cover\n}\n\n.footer_social #linkedin {\n    background: white url('../img/linkedin.png') no-repeat;\n    background-size: cover\n}\n\n.navigation li {\n    margin: .5em;\n    text-align: center;\n    background-color: white\n}\n\n.navigation a {\n    text-decoration: none;\n    display: block;\n    padding: 1em;\n    color: #2B4866;\n    font-weight: 700\n}\n\narticle {\n    width: calc(99.9% * 1.5/2 - (0px - 0px * 1.5/2))\n}\n\narticle:nth-child(1n) {\n    float: left;\n    margin-right: 0px;\n    clear: none\n}\n\narticle:last-child {\n    margin-right: 0\n}\n\narticle:nth-child(2n) {\n    margin-right: 0;\n    float: right\n}\n\narticle:nth-child(2n + 1) {\n    clear: both\n}\n\n.screen1 {\n    height: 100vh;\n    background: url('../img/web-design.jpg') no-repeat;\n    background-size: cover\n}\n\n.intro_section {\n    max-width: 48.75em;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    height: calc(99.9% * 1.4/2 - (30px - 30px * 1.4/2));\n    margin-bottom: 30px\n}\n\n.intro_section:last-child {\n    margin-bottom: 0\n}\n\n.intro_section:before {\n    content: '';\n    display: table\n}\n\n.intro_section:after {\n    content: '';\n    display: table;\n    clear: both\n}\n\n.intro_section .wrapper {\n    border-radius: 1em;\n    margin-top: 10em;\n    border: .17em solid white;\n    text-align: center;\n    background-image: linear-gradient(135deg, rgba(253, 252, 251, .4) 0%, rgba(226, 209, 195, .8) 100%)\n}\n\n.personal_info .detail {\n    color: white\n}\n\n.personal_info p {\n    font-size: 1.1em\n}\n\nheader.intro h1 {\n    font-size: 5em;\n    font-weight: 400;\n    line-height: 1em;\n    margin: .6em 0\n}\n\n.intro_card p {\n    font-size: 1.4em\n}\n\n.full_width_banner {\n    width: 100%;\n    height: calc(99.9% * .6/2 - (30px - 30px * .6/2));\n    margin-bottom: 30px\n}\n\n.full_width_banner:last-child {\n    margin-bottom: 0\n}\n\n.full_width_banner:before {\n    content: '';\n    display: table\n}\n\n.full_width_banner:after {\n    content: '';\n    display: table;\n    clear: both\n}\n\n.full_width_banner h1 {\n    text-align: center;\n    font-weight: 200;\n    font-size: 3.5em;\n    line-height: 2em;\n    font-style: italic;\n    color: white\n}\n\n.first_banner {\n    background-image: linear-gradient(135deg, rgba(17, 61, 120, .9) 0%, rgba(83, 120, 149, 1) 100%)\n}\n\n.open_source_banner {\n    background: #CAD9AA\n}\n\n.i_love {\n    height: 2em;\n    width: 2em;\n    max-width: 2em;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    background: url('../img/001-like.png') no-repeat;\n    background-size: contain\n}\n\n.i_love:before {\n    content: '';\n    display: table\n}\n\n.i_love:after {\n    content: '';\n    display: table;\n    clear: both\n}\n"

/***/ })

/******/ });