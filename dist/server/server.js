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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nexports.indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n   <meta charset=\\\"UTF-8\\\">\\n   <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n   <title>HelloReact</title>\\n   <script src = \\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n<body>\\n   <div id = \\\"react_root\\\">\" + content + \"</div>\\n</body>\\n</html>\\n\"; };\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar Header_1 = __webpack_require__(/*! ../shared/Header */ \"./src/shared/Header.jsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get(\"/\", function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(Header_1.Header())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Header.jsx":
/*!*******************************!*\
  !*** ./src/shared/Header.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/header.css\"));\r\nvar train_png_1 = __importDefault(__webpack_require__(/*! ./train.png */ \"./src/shared/train.png\"));\r\nfunction HeaderComponent() {\r\n    return (React.createElement(\"header\", null,\r\n        React.createElement(\"h1\", { className: header_css_1.default.example }, \"Hello React!!!\"),\r\n        React.createElement(\"img\", { src: train_png_1.default, alt: \"myimg\", className: header_css_1.default.trainmove })));\r\n}\r\nexports.Header = root_1.hot(HeaderComponent);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header.jsx?");

/***/ }),

/***/ "./src/shared/header.css":
/*!*******************************!*\
  !*** ./src/shared/header.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"example\": \"header__example--QgiVa\",\n\t\"trainmove\": \"header__trainmove--3ZhFQ\",\n\t\"left\": \"header__left--39_xP\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/header.css?");

/***/ }),

/***/ "./src/shared/train.png":
/*!******************************!*\
  !*** ./src/shared/train.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAAEcq2jCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkFBOTFCMEI5MEY0MTFFQTg0NjM4NDFFMTUxMDZDMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkFBOTFCMEM5MEY0MTFFQTg0NjM4NDFFMTUxMDZDMTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQUE5MUIwOTkwRjQxMUVBODQ2Mzg0MUUxNTEwNkMxNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQUE5MUIwQTkwRjQxMUVBODQ2Mzg0MUUxNTEwNkMxNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvJvVowAAAGAUExURbdDN4WTlLU5LDtBTHyOj2JtbYw2L+JQQTwxN8I4KTiY14KLilAyNW80MuTAXL9cUr2srcJGOOhLOl1mZ72iVDQ5Q87P0m2Mm6o5Lb6TkS4yOyouNyIkKg0OESktNSWBvcQ6K9ykUioYFupMOyUuOS6GwM1WTubFXjA2QTU+SdiUTEhFTvJQP8A0JLpYSU6MvMlcN73Dx4uFhB8iJb3Gyr97dDg+SURKVMg7KuzHXuK3Wd1SQ1FXWEeTyI55dtRJPL3JznOKlb3M0dtPQFVeYOlNPVhGTMxnPOxNPe9NPLxAMsVDMUN3oyUpMux5bnOgoBcZHUAUD781Kb9iWTIwN0NaXz5ET8BOP+REM9F4Qjd/subIX588M1pTQeVLPb27vlI7QME/LSw0QdFVTDB2djY8Rr9AMSmAuiMmLtJQQ89YUHyQkXF8fsA7LIWOj+ZXSOxVNGJMUVqJiomXmOtKOE53nZGLitRaTqGrrDuX08A6K+ZMPCwvOH+MjTk/SgAAAIJ1TKsAAACAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AOAVLZwAAFi1JREFUeNrMk72OglAQhbmYWOl2ZBMppGBDC502xGfQwsIYK+Iz7PE4vvrOXK4rxj8KC79mQvgyHLiH6PSC6GMFenoLrkMQxBOE4xUdYXDeUNffgbo+dVb8hwR+lZ/9fgq8TXAWx90VnN0Igd0d4faVngrHVjg8pqcgj+ktJHZ2ImxHh8YEPRUCyMhYBxORCSciKRu/ItKMnGFTFPN5UWzUEOZZTo5nzC2mF4CvwBLUfQtwhB3YCtqfGMuy3G7Lcq1PanJUSONV5YWDrxwzYEimlkGvbNBSXTrZNvDcQxuXTg7k6YeQT/j1/gSgrtxxEIZhAApCIDoUsTBAFoZIrHRBuQILE4Ij5A6Wca9exyn5lLRzGaKoylPlIe/lfwEV7S8DPg+nHlj+9kFR6mYhD20GrEMf8jwkdldOPWttbv9qCmjDD0aAZJ4hIAfpxDnwKfdhFJhPH8iHQbH1wzx8AazFRuekQeGJbqg8sXiI/hfuAy9nP6HhmKDZ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\"\n\n//# sourceURL=webpack:///./src/shared/train.png?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });