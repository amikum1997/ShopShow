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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var showMenu = function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');
var navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach(function (n) {
    return n.classList.remove('active');
  });
  this.classList.add('active');
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach(function (n) {
  return n.addEventListener('click', linkAction);
});

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/resolve-url-loader/index.js):\nError: file://C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\resources\\scss\\app.scss:1:1396: missing '{'\n    at error (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\css\\lib\\parse\\index.js:62:15)\n    at declarations (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\css\\lib\\parse\\index.js:248:25)\n    at rule (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\css\\lib\\parse\\index.js:561:21)\n    at rules (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\css\\lib\\parse\\index.js:118:70)\n    at stylesheet (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\css\\lib\\parse\\index.js:81:21)\n    at module.exports (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\css\\lib\\parse\\index.js:565:20)\n    at rework (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\rework\\index.js:27:21)\n    at process (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\resolve-url-loader\\lib\\engine\\rework.js:34:18)\n    at Object.resolveUrlLoader (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\resolve-url-loader\\index.js:165:33)\n    at C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at iterateNormalLoaders (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\loader-runner\\lib\\LoaderRunner.js:221:10)\n    at C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\loader-runner\\lib\\LoaderRunner.js:236:3\n    at context.callback (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass-loader\\dist\\index.js:109:5\n    at Function.call$2 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:90633:16)\n    at _render_closure0.call$1 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:79690:21)\n    at _RootZone.runUnary$2$2 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:27083:18)\n    at _Future__propagateToListeners_handleValueCallback.call$0 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25895:51)\n    at Object._Future__propagateToListeners (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:4537:93)\n    at _Future._completeWithValue$1 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25738:9)\n    at _AsyncAwaitCompleter.complete$1 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25080:14)\n    at Object._asyncReturn (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:4285:17)\n    at C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:13243:24\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:4313:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25110:12)\n    at _awaitOnObject_closure.call$1 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25096:32)\n    at _RootZone.runUnary$2$2 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:27083:18)\n    at _Future__propagateToListeners_handleValueCallback.call$0 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25895:51)\n    at Object._Future__propagateToListeners (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:4537:93)\n    at _Future._completeWithValue$1 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25738:9)\n    at _AsyncAwaitCompleter.complete$1 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25080:14)\n    at Object._asyncReturn (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:4285:17)\n    at C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:17955:24\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:4313:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25110:12)\n    at _awaitOnObject_closure.call$1 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25096:32)\n    at _RootZone.runUnary$2$2 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:27083:18)\n    at _Future__propagateToListeners_handleValueCallback.call$0 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25895:51)\n    at Object._Future__propagateToListeners (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:4537:93)\n    at _Future._completeWithValue$1 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25738:9)\n    at _AsyncAwaitCompleter.complete$1 (C:\\Users\\HP\\Desktop\\GIT PROJECT\\NODE.JS\\ShopShow\\node_modules\\sass\\sass.dart.js:25080:14)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/scss/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\HP\Desktop\GIT PROJECT\NODE.JS\ShopShow\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\HP\Desktop\GIT PROJECT\NODE.JS\ShopShow\resources\scss\app.scss */"./resources/scss/app.scss");


/***/ })

/******/ });