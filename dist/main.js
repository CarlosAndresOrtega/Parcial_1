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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/Clientes_page/clientes.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/Clientes_page/clientes.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#clientes-page {\n  position: relative;\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n}\n#clientes-page .titulo h2 {\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  top: 30px;\n  left: 140px;\n  font-size: 4rem;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 0rem;\n  color: #153240;\n}\n#clientes-page .curved-div {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n#clientes-page .curved-div svg {\n  display: block;\n}\n#clientes-page .grid {\n  position: absolute;\n  display: grid;\n  width: 100%;\n  height: 80%;\n  bottom: 0px;\n}\n#clientes-page .grid .grid-content {\n  width: 100%;\n  height: 100%;\n}\n#clientes-page .grid .grid-content .descripcion {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 380px;\n  height: 150px;\n  top: 150px;\n  left: 50px;\n  border-bottom: 3px solid #2E6E8D;\n  border-radius: 15px;\n}\n#clientes-page .grid .grid-content .descripcion pre {\n  font-size: 32px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 0rem;\n  color: #47AAD9;\n}\n#clientes-page .grid .grid-content .grid-iconos {\n  width: 50%;\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n}\n#clientes-page .grid .grid-content .grid-iconos .iconos {\n  position: relative;\n  background-color: #FFF3D9;\n  margin: 30px;\n  top: -100px;\n  left: 550px;\n  width: 100px;\n  height: 100px;\n  cursor: pointer;\n  transition: 0.5s all;\n}\n#clientes-page .grid .grid-content .grid-iconos .iconos p {\n  display: block;\n  position: relative;\n  width: 200%;\n  max-height: 0px;\n  padding: 3.5px;\n  overflow: hidden;\n  border: none;\n  transition: 0.5s all;\n}\n#clientes-page .grid .grid-content .grid-iconos .iconos:hover {\n  background-color: #FFE6B3;\n  transform: scale(1.2);\n}\n#clientes-page .grid .grid-content .grid-iconos .iconos:hover p {\n  color: #2E6E8D;\n  border: 2px solid #2E6E8D;\n  background-color: #FFF3D9;\n  max-height: 100px;\n  transition: 0.5s all;\n}\n#clientes-page .grid .grid-content .cuadro {\n  position: relative;\n  display: flex;\n  width: 250px;\n  height: 85px;\n  top: -140px;\n  left: 1050px;\n}\n#clientes-page .grid .grid-content .cuadro img {\n  width: 100%;\n  height: 210%;\n  border-radius: 15px;\n}", "",{"version":3,"sources":["webpack://src/app/pages/Clientes_page/clientes.scss"],"names":[],"mappings":"AAOA;EACI,kBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;AANJ;AAOI;EACI,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,wIAAA;EACA,gBAAA;EACA,cArBK;AAgBb;AAOI;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AALR;AAOM;EACE,cAAA;AALR;AAUI;EACI,kBAAA;EACA,aAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;AARR;AASQ;EACI,WAAA;EACA,YAAA;AAPZ;AAQY;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;EACA,UAAA;EACA,gCAAA;EACA,mBAAA;AANhB;AAOgB;EACA,eAAA;EACA,wIAAA;EACA,gBAAA;EACA,cAzDH;AAoDb;AASY;EACI,UAAA;EACA,kBAAA;EACA,aAAA;EACA,qCAAA;EACA,kCAAA;AAPhB;AASgB;EACI,kBAAA;EACA,yBApEN;EAqEM,YAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EAEA,oBAAA;AARpB;AAUoB;EACI,cAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,YAAA;EACA,oBAAA;AARxB;AAagB;EACI,yBA7FN;EA8FM,qBAAA;AAXpB;AAaoB;EAEI,cApGX;EAqGW,yBAAA;EACA,yBAnGV;EAoGU,iBAAA;EACA,oBAAA;AAZxB;AAkBY;EACI,kBAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AAhBhB;AAiBgB;EACI,WAAA;EACA,YAAA;EACA,mBAAA;AAfpB","sourcesContent":["$color_Blue1:#153240;\r\n$color_Blue2:#2E6E8D;\r\n$color_Blue3:#47AAD9;\r\n$color_claro1:#FFE6B3;\r\n$color_claro2:#FFF3D9;\r\n$color_negro:#0000;\r\n\r\n#clientes-page{\r\n    position: relative;\r\n    display:flex;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    .titulo h2{\r\n        position: absolute;\r\n        align-items: center;\r\n        justify-content: center;\r\n        top:30px;\r\n        left: 140px;\r\n        font-size: 4rem;\r\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n        margin-top:0rem;\r\n        color: $color_Blue1;\r\n    }\r\n    .curved-div {\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: hidden;\r\n      }\r\n      .curved-div svg {\r\n        display: block;\r\n      }\r\n    \r\n    \r\n\r\n    .grid{\r\n        position: absolute;\r\n        display: grid;\r\n        width: 100%;\r\n        height: 80%;\r\n        bottom: 0px;\r\n        .grid-content{\r\n            width: 100%;\r\n            height: 100%;\r\n            .descripcion{\r\n                position: relative;\r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n                width: 380px;\r\n                height: 150px;\r\n                top:150px;\r\n                left: 50px;\r\n                border-bottom: 3px solid $color_Blue2;\r\n                border-radius: 15px;\r\n                pre{ \r\n                font-size: 32px;\r\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n                margin-top:0rem;\r\n                color: $color_Blue3;\r\n               }\r\n            }\r\n            \r\n            .grid-iconos{\r\n                width: 50%;\r\n                position: relative;\r\n                display:grid;\r\n                grid-template-columns: repeat(4,1fr);\r\n                grid-template-rows: repeat(2,1fr);\r\n               \r\n                .iconos{\r\n                    position: relative;\r\n                    background-color: $color_claro2;\r\n                    margin: 30px;\r\n                    top:-100px;\r\n                    left: 550px;\r\n                    width: 100px;\r\n                    height: 100px;\r\n                    cursor: pointer;\r\n                    \r\n                    transition: 0.5s all;\r\n                    \r\n                    p{\r\n                        display:block;\r\n                        position: relative;\r\n                        width: 200%;\r\n                        max-height:0px;\r\n                        padding: 3.5px;\r\n                        overflow:hidden;\r\n                        border: none;\r\n                        transition: 0.5s all;\r\n                    }\r\n                    \r\n                }\r\n                \r\n                .iconos:hover{\r\n                    background-color: $color_claro1;\r\n                    transform: scale(1.2);\r\n                    \r\n                    p{\r\n                        \r\n                        color: $color_Blue2;\r\n                        border:2px solid $color_Blue2;\r\n                        background-color: $color_claro2;\r\n                        max-height: 100px;\r\n                        transition: 0.5s all;\r\n                        \r\n                    }\r\n                }\r\n\r\n            }\r\n            .cuadro{\r\n                position: relative;\r\n                display: flex;\r\n                width: 250px;\r\n                height: 85px;\r\n                top:-140px;\r\n                left:1050px;\r\n                img{\r\n                    width: 100%;\r\n                    height: 210%;\r\n                    border-radius: 15px;\r\n                }\r\n\r\n            }\r\n            \r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/HabilidadesPage/HabilidadesPageStyle.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/HabilidadesPage/HabilidadesPageStyle.scss ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#Habilidades-page {\n  position: relative;\n  width: 100vw;\n  height: 600px;\n  display: flex;\n  background-color: #47AAD9;\n}\n#Habilidades-page #flecha {\n  position: absolute;\n  transform: rotate(-15deg);\n  z-index: 2;\n  opacity: 0;\n  left: 400px;\n  width: 100px;\n  height: 100px;\n}\n#Habilidades-page #flecha2 {\n  position: absolute;\n  z-index: 2;\n  opacity: 0;\n  top: 120px;\n  left: 650px;\n  width: 100px;\n  height: 100px;\n}\n#Habilidades-page #flecha3 {\n  position: absolute;\n  transform: rotate(15deg);\n  z-index: 2;\n  opacity: 0;\n  right: 340px;\n  width: 100px;\n  height: 100px;\n}\n#Habilidades-page #text {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  font-size: 40px;\n  border-radius: 25%;\n  background-color: #153240;\n  top: -20px;\n  right: 500px;\n  width: 300px;\n  height: 100px;\n  color: #FFF3D9;\n}\n#Habilidades-page #text2 {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  font-size: 20px;\n  border-radius: 25%;\n  background-color: #153240;\n  top: 450px;\n  opacity: 0;\n  left: 100px;\n  width: 300px;\n  height: 100px;\n  color: #FFF3D9;\n}\n#Habilidades-page #text2:hover {\n  width: 320px;\n  height: 120px;\n}\n#Habilidades-page #text2:active {\n  width: 320px;\n  height: 120px;\n}\n#Habilidades-page #text3 {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  font-size: 20px;\n  border-radius: 25%;\n  opacity: 0;\n  background-color: #153240;\n  top: 560px;\n  left: 550px;\n  width: 300px;\n  height: 100px;\n  color: #FFF3D9;\n}\n#Habilidades-page #text3:hover {\n  width: 320px;\n  height: 120px;\n}\n#Habilidades-page #text3:active {\n  width: 320px;\n  height: 120px;\n}\n#Habilidades-page #text4 {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  font-size: 20px;\n  border-radius: 25%;\n  background-color: #153240;\n  top: 400px;\n  opacity: 0;\n  right: 100px;\n  width: 300px;\n  height: 100px;\n  color: #FFF3D9;\n}\n#Habilidades-page #text4:hover {\n  width: 320px;\n  height: 120px;\n}\n#Habilidades-page #text4:active {\n  width: 320px;\n  height: 120px;\n}\n#Habilidades-page #proyectos1 {\n  position: absolute;\n  z-index: 3;\n  top: 150px;\n  left: 80px;\n  width: 400px;\n  opacity: 0;\n  height: 250px;\n  border: 5px solid #153240;\n  border-radius: 25%;\n  cursor: pointer;\n  background-color: #000000;\n  overflow: hidden;\n}\n#Habilidades-page #proyectos1 video {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n#Habilidades-page #proyectos1:hover {\n  width: 420px;\n  height: 270px;\n}\n#Habilidades-page #proyectos1:active {\n  width: 420px;\n  height: 270px;\n}\n#Habilidades-page #proyectos2 {\n  position: absolute;\n  z-index: 2;\n  left: 20px;\n  top: -20px;\n  opacity: 0;\n  width: 300px;\n  height: 300px;\n  border: 5px solid #153240;\n  border-radius: 25%;\n  cursor: pointer;\n  background-color: #153240;\n  overflow: hidden;\n}\n#Habilidades-page #proyectos2 img {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n#Habilidades-page #proyectos2:hover {\n  width: 320px;\n  height: 320px;\n}\n#Habilidades-page #proyectos2:active {\n  width: 320px;\n  height: 320px;\n}\n#Habilidades-page #proyectos3 {\n  position: absolute;\n  z-index: 2;\n  left: 550px;\n  top: 230px;\n  opacity: 0;\n  width: 300px;\n  height: 300px;\n  border: 5px solid #153240;\n  border-radius: 25%;\n  cursor: pointer;\n  background-color: #153240;\n  overflow: hidden;\n}\n#Habilidades-page #proyectos3 img {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n#Habilidades-page #proyectos3:hover {\n  width: 320px;\n  height: 320px;\n}\n#Habilidades-page #proyectos3:active {\n  width: 320px;\n  height: 320px;\n}\n#Habilidades-page #proyectos4 {\n  position: absolute;\n  z-index: 3;\n  top: 150px;\n  right: 80px;\n  width: 350px;\n  opacity: 0;\n  height: 200px;\n  border: 5px solid #153240;\n  border-radius: 25%;\n  cursor: pointer;\n  background-color: #000000;\n  overflow: hidden;\n}\n#Habilidades-page #proyectos4 img {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n#Habilidades-page #proyectos4:hover {\n  width: 380px;\n  height: 240px;\n}\n#Habilidades-page #proyectos4:active {\n  width: 420px;\n  height: 270px;\n}\n#Habilidades-page #proyectos5 {\n  position: absolute;\n  z-index: 2;\n  right: 20px;\n  top: -20px;\n  opacity: 0;\n  width: 300px;\n  height: 300px;\n  border: 5px solid #153240;\n  border-radius: 25%;\n  cursor: pointer;\n  background-color: #153240;\n  overflow: hidden;\n}\n#Habilidades-page #proyectos5 img {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n}\n#Habilidades-page #proyectos5:hover {\n  width: 320px;\n  height: 320px;\n}\n#Habilidades-page #proyectos5:active {\n  width: 320px;\n  height: 320px;\n}\n#Habilidades-page #cuadro {\n  opacity: 0;\n}\n#Habilidades-page #abajo {\n  position: absolute;\n  bottom: 0px;\n}\n#Habilidades-page #arriba {\n  position: absolute;\n  width: 100%;\n  top: 0px;\n}\n#Habilidades-page #arriba path {\n  position: absolute;\n  width: 100vw;\n}\n\n@keyframes mover {\n  0% {\n    transform: translate(100%);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    transform: rotate(-15deg);\n    opacity: 1;\n  }\n}\n@keyframes mover2 {\n  0% {\n    transform: translate(100%);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes mover3 {\n  0% {\n    transform: translate(100%);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes aparecer {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}", "",{"version":3,"sources":["webpack://src/app/pages/HabilidadesPage/HabilidadesPageStyle.scss"],"names":[],"mappings":"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","sourcesContent":["$color_Blue1:#153240;\r\n$color_Blue2:#2E6E8D;\r\n$color_Blue3:#47AAD9;\r\n$color_claro1:#FFE6B3;\r\n$color_claro2:#FFF3D9;\r\n$color-Oscuro1: #000000;\r\n\r\n#Habilidades-page{\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 600px;\r\n    display: flex;\r\n    background-color: $color-Blue3;\r\n        #flecha{\r\n                position: absolute;\r\n                transform: rotate(-15deg);\r\n                z-index: 2;\r\n                opacity: 0;\r\n                left: 400px;\r\n                width: 100px;\r\n                height: 100px;\r\n        }\r\n        #flecha2{\r\n            position: absolute;\r\n            z-index: 2;\r\n            opacity: 0;\r\n            top: 120px;\r\n            left: 650px;\r\n            width: 100px;\r\n            height: 100px;\r\n        }\r\n        #flecha3{\r\n            position: absolute;\r\n            transform: rotate(15deg);\r\n            z-index: 2;\r\n            opacity: 0;\r\n            right: 340px;\r\n            width: 100px;\r\n            height: 100px;\r\n        }\r\n        \r\n        #text{\r\n            position: absolute;\r\n            display:flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            z-index: 2;\r\n            font-size: 40px;\r\n            border-radius:25%;\r\n            background-color:$color-Blue1 ;\r\n            top:-20px;\r\n            right: 500px;\r\n            width: 300px;\r\n            height: 100px;\r\n            color:$color-claro2;\r\n            // border: 5px solid $color-claro2;\r\n\r\n        }\r\n        #text2{\r\n            position: absolute;\r\n            display:flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            z-index: 2;\r\n            font-size: 20px;\r\n            border-radius:25%;\r\n            background-color:$color-Blue1 ;\r\n            top:450px;\r\n            opacity: 0;\r\n            left: 100px;\r\n            width: 300px;\r\n            height: 100px;\r\n            color:$color-claro2;\r\n            // border: 5px solid $color-claro2;\r\n\r\n        }\r\n        #text2:hover{\r\n            width: 320px;\r\n            height: 120px;\r\n            \r\n        }\r\n        #text2:active{\r\n            width: 320px;\r\n            height: 120px;\r\n        }\r\n        #text3{\r\n            position: absolute;\r\n            display:flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            z-index: 2;\r\n            font-size: 20px;\r\n            border-radius:25%;\r\n            opacity: 0;\r\n            background-color:$color-Blue1 ;\r\n            top:560px;\r\n            left: 550px;\r\n            width: 300px;\r\n            height: 100px;\r\n            color:$color-claro2;\r\n            // border: 5px solid $color-claro2;\r\n\r\n        }\r\n        #text3:hover{\r\n            width: 320px;\r\n            height: 120px;\r\n            \r\n        }\r\n        #text3:active{\r\n            width: 320px;\r\n            height: 120px;\r\n        }\r\n        #text4{\r\n            position: absolute;\r\n            display:flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            z-index: 2;\r\n            font-size: 20px;\r\n            border-radius:25%;\r\n            background-color:$color-Blue1 ;\r\n            top:400px;\r\n            opacity: 0;\r\n            right: 100px;\r\n            width: 300px;\r\n            height: 100px;\r\n            color:$color-claro2;\r\n            // border: 5px solid $color-claro2;\r\n\r\n        }\r\n        #text4:hover{\r\n            width: 320px;\r\n            height: 120px;\r\n            \r\n        }\r\n        #text4:active{\r\n            width: 320px;\r\n            height: 120px;\r\n        }\r\n        #proyectos1{\r\n            position: absolute;\r\n            z-index: 3;\r\n            top: 150px;\r\n            left: 80px;\r\n            width: 400px;\r\n            opacity:0;\r\n            height: 250px;\r\n            border: 5px solid $color-Blue1;\r\n            border-radius: 25%;\r\n            cursor: pointer;\r\n            background-color: $color-Oscuro1;\r\n            overflow: hidden;\r\n            video{\r\n                position: absolute;\r\n                left:0px;\r\n                top:0px;\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n\r\n        }\r\n        #proyectos1:hover{\r\n            width: 420px;\r\n            height: 270px;\r\n            \r\n        }\r\n        #proyectos1:active{\r\n            width: 420px;\r\n            height: 270px;\r\n        }\r\n        #proyectos2{\r\n            position: absolute;\r\n            z-index: 2;\r\n            left: 20px;\r\n            top:-20px;\r\n            opacity:0;\r\n            width: 300px;\r\n            height: 300px;\r\n            border: 5px solid $color_Blue1;\r\n            border-radius: 25%;\r\n            cursor: pointer;\r\n            background-color: $color-Blue1;\r\n            overflow: hidden;\r\n            img{\r\n                position: absolute;\r\n                left:0px;\r\n                top:0px;\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n            \r\n        }\r\n        #proyectos2:hover{\r\n            width: 320px;\r\n            height: 320px;\r\n            \r\n        }\r\n        #proyectos2:active{\r\n            width: 320px;\r\n            height: 320px;\r\n        }\r\n        #proyectos3{\r\n            position: absolute;\r\n            z-index: 2;\r\n            left:550px;\r\n            top:230px;\r\n            opacity:0;\r\n            width: 300px;\r\n            height: 300px;\r\n            border: 5px solid $color_Blue1;\r\n            border-radius: 25%;\r\n            cursor: pointer;\r\n            background-color: $color-Blue1;\r\n            overflow: hidden;\r\n            img{\r\n                position: absolute;\r\n                left:0px;\r\n                top:0px;\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n            \r\n        }\r\n        #proyectos3:hover{\r\n            width: 320px;\r\n            height: 320px;\r\n            \r\n        }\r\n        #proyectos3:active{\r\n            width: 320px;\r\n            height: 320px;\r\n        }\r\n        #proyectos4{\r\n            position: absolute;\r\n            z-index: 3;\r\n            top: 150px;\r\n            right: 80px;\r\n            width: 350px;\r\n            opacity:0;\r\n            height: 200px;\r\n            border: 5px solid $color-Blue1;\r\n            border-radius: 25%;\r\n            cursor: pointer;\r\n            background-color: $color-Oscuro1;\r\n            overflow: hidden;\r\n            img{\r\n                position: absolute;\r\n                left:0px;\r\n                top:0px;\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n\r\n        }\r\n        #proyectos4:hover{\r\n            width: 380px;\r\n            height: 240px;\r\n            \r\n        }\r\n        #proyectos4:active{\r\n            width: 420px;\r\n            height: 270px;\r\n        }\r\n        #proyectos5{\r\n            position: absolute;\r\n            z-index: 2;\r\n            right:20px;\r\n            top:-20px;\r\n            opacity:0;\r\n            width: 300px;\r\n            height: 300px;\r\n            border: 5px solid $color_Blue1;\r\n            border-radius: 25%;\r\n            cursor: pointer;\r\n            background-color: $color-Blue1;\r\n            overflow: hidden;\r\n            img{\r\n                position: absolute;\r\n                left:0px;\r\n                top:0px;\r\n                width: 100%;\r\n                height: 100%;\r\n            }\r\n\r\n            \r\n        }\r\n        #proyectos5:hover{\r\n            width: 320px;\r\n            height: 320px;\r\n            \r\n        }\r\n        #proyectos5:active{\r\n            width: 320px;\r\n            height: 320px;\r\n        }\r\n        #cuadro{\r\n            opacity: 0;\r\n        }\r\n        #abajo{\r\n            position: absolute;\r\n            bottom: 0px;\r\n        }\r\n        #arriba{\r\n            position: absolute;\r\n            width: 100%;\r\n            top:0px;\r\n            path{\r\n                position: absolute;\r\n                width: 100vw;\r\n            }\r\n        }\r\n\r\n}\r\n@keyframes mover{\r\n    0%{\r\n        transform: translate(100%);\r\n        opacity: 0;\r\n    }\r\n    50%{\r\n        opacity: 0.5;\r\n    }\r\n    100%{\r\n        transform: rotate(-15deg);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes mover2{\r\n    0%{\r\n        transform: translate(100%);\r\n        opacity: 0;\r\n    }\r\n    50%{\r\n        opacity: 0.5;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes mover3{\r\n    0%{\r\n        transform: translate(100%);\r\n        opacity: 0;\r\n    }\r\n    50%{\r\n        opacity: 0.5;\r\n    }\r\n    100%{\r\n        \r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes aparecer{\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/Home/HomePageStyle.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/Home/HomePageStyle.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#home-page {\n  position: relative;\n  width: 100vw;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#home-page .algo {\n  width: 50%;\n  height: 50%;\n  border: 5px solid red;\n}\n#home-page .algo img {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n#home-page .algo audio {\n  width: 100%;\n  height: 20%;\n}", "",{"version":3,"sources":["webpack://src/app/pages/Home/HomePageStyle.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AACJ;AAAI;EACI,UAAA;EACA,WAAA;EACA,qBAAA;AAER;AADQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;AAGZ;AADQ;EACI,WAAA;EACA,WAAA;AAGZ","sourcesContent":["#home-page{\r\n    position: relative;\r\n    width: 100vw;\r\n    height: 400px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    .algo{\r\n        width: 50%;\r\n        height: 50%;\r\n        border: 5px solid red;\r\n        img{\r\n            width: 100%;\r\n            height: 100%;\r\n            display: none;       \r\n        }\r\n        audio{\r\n            width: 100%;\r\n            height: 20%;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  width: 100vw;\n  height: 100vh;\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,UAAA;EACA,SAAA;AACJ;;AAEA;EACI,yCAAA;EACA,YAAA;EACA,aAAA;AACJ","sourcesContent":["*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_Home_HomePageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home/HomePageController */ "./src/app/pages/Home/HomePageController.ts");
/* harmony import */ var _pages_HabilidadesPage_HabilidadesPageController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/HabilidadesPage/HabilidadesPageController */ "./src/app/pages/HabilidadesPage/HabilidadesPageController.ts");
/* harmony import */ var _pages_Clientes_page_ClientesPageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Clientes_page/ClientesPageController */ "./src/app/pages/Clientes_page/ClientesPageController.ts");



var App = /** @class */ (function () {
    function App() {
        this.mainPages = [
            _pages_Home_HomePageController__WEBPACK_IMPORTED_MODULE_0__["HomePageController"],
            _pages_HabilidadesPage_HabilidadesPageController__WEBPACK_IMPORTED_MODULE_1__["HabilidadesPageController"],
            _pages_Clientes_page_ClientesPageController__WEBPACK_IMPORTED_MODULE_2__["ClientesPageController"]
        ];
        this.loaded = [];
    }
    App.prototype.render = function () {
        var _this = this;
        var component = this.component();
        this.mainPages.forEach(function (pageController) {
            var controller = new pageController();
            _this.loaded.push(controller);
            var _a = new pageController().getView(), elId = _a[0], element = _a[1];
            component.appendChild(_this.createPage(elId, element));
        });
        document.body.append(component);
        /**
         * Este es el cambio
         */
        document.body.onload = function () {
            _this.loaded.forEach(function (controller) {
                controller.start();
            });
        };
    };
    App.prototype.createPage = function (id, element) {
        var page = document.createElement('div');
        page.id = id;
        page.appendChild(element);
        return page;
    };
    App.prototype.component = function () {
        var element = document.createElement('div');
        element.id = "app";
        return element;
    };
    return App;
}());
var app = new App();
app.render();


/***/ }),

/***/ "./src/app/pages/Clientes_page/Clientes.html":
/*!***************************************************!*\
  !*** ./src/app/pages/Clientes_page/Clientes.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../../../assets/img/customerrelations_recolored-gif-still-1024x637.gif */ "./src/assets/img/customerrelations_recolored-gif-still-1024x637.gif");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<div class=\"titulo\">\r\n    <h2>CLIENTES</h2>\r\n</div>\r\n\r\n  <div class=\"curved-div\">\r\n    <svg viewBox=\"0 0 1440 319\">\r\n      <path fill=\"#153240\" fill-opacity=\"1\" d=\"M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\"></path>\r\n    </svg>\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 207\"><path fill=\"#153240\" fill-opacity=\"1\" d=\"M0,224L0,224L1440,224L1440,0L0,0L0,0Z\"></path></svg>\r\n     <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\"><path fill=\"#153240\" fill-opacity=\"1\" d=\"M0,64L48,96C96,128,192,192,288,197.3C384,203,480,149,576,117.3C672,85,768,75,864,96C960,117,1056,171,1152,208C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z\"></path></svg>\r\n  </div> \r\n\r\n    \r\n\r\n<div class=\"grid\">\r\n    <div class=\"grid-content\">\r\n        <div class=\"descripcion\">\r\n            <pre>Estas son las empresas\r\ncon las que trabajamos \r\no tenemos relacion.\r\n            </pre>\r\n        </div>\r\n        <div class=\"grid-iconos\">\r\n            \r\n            <div class=\"iconos\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n                \r\n                        <polygon style=\"fill:#F44336;\" points=\"0,32 0,480 2.848,480 184.096,32  \"/>\r\n                        <polygon style=\"fill:#F44336;\" points=\"512,32 325.12,32 512,480  \"/>\r\n                        <polygon style=\"fill:#F44336;\" points=\"302.976,480 380.416,480 255.744,190.816 173.376,392.672 265.408,392.672  \"/>\r\n                    \r\n                    </svg>\r\n                <p>Adobe nos brinda diferente herramientas y recursos con los cuales puedo realizar los proyectos</p>\r\n                  \r\n                    \r\n            </div>\r\n            <div class=\"iconos\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n                    <path style=\"fill:#333333;\" d=\"M512,256c0,45.328-11.776,87.897-32.444,124.834c-1.014,1.797-2.038,3.594-3.093,5.371  C431.898,461.5,349.842,512,256,512c-93.351,0-175.031-49.967-219.752-124.615c-4.524-7.544-8.673-15.339-12.413-23.364  C8.537,331.201,0,294.599,0,256C0,114.615,114.615,0,256,0c83.884,0,158.344,40.344,205.03,102.682  c4.033,5.392,7.868,10.94,11.463,16.645c0.261,0.387,0.512,0.784,0.752,1.181c6.416,10.261,12.121,21.013,17.053,32.183  C504.247,184.289,512,219.24,512,256z\"/>\r\n                    <g>\r\n                        <path style=\"fill:#F2F2F2;\" d=\"M172.173,239.236l60.863,34.68c-18.454,32.328-53.256,54.12-93.15,54.12   c-59.201,0-107.194-47.994-107.194-107.194s47.994-107.194,107.194-107.194c40.203,0,75.237,22.133,93.582,54.882l-61.15,34.18   c-6.358-11.353-18.497-19.021-32.433-19.021c-20.519,0-37.152,16.634-37.152,37.152s16.634,37.152,37.152,37.152   C153.713,257.995,165.778,250.442,172.173,239.236z\"/>\r\n                        <path style=\"fill:#F2F2F2;\" d=\"M41.9,374.554l8.819,5.026c-2.675,4.681-7.711,7.837-13.49,7.837c-0.334,0-0.658-0.01-0.982-0.031   c-4.524-7.544-8.673-15.339-12.413-23.364c2.696-4.587,7.69-7.67,13.396-7.67c5.82,0,10.898,3.208,13.552,7.952l-8.861,4.953   c-0.92-1.641-2.675-2.748-4.692-2.748c-2.978,0-5.381,2.403-5.381,5.381c0,2.967,2.403,5.381,5.381,5.381   C39.225,377.271,40.981,376.174,41.9,374.554z\"/>\r\n                        <rect x=\"250.734\" y=\"102.682\" style=\"fill:#F2F2F2;\" width=\"239.564\" height=\"237.129\"/>\r\n                    </g>\r\n                    <polygon style=\"fill:#333333;\" points=\"404.624,119.332 404.624,203.789 336.816,119.332 268.195,119.332 268.195,322.757   336.816,322.757 336.816,238.301 404.624,322.757 473.245,322.757 473.245,119.332 \"/>\r\n                    <g>\r\n                        <polygon style=\"fill:#F2F2F2;\" points=\"232.986,357.27 232.986,369.408 223.241,357.27 213.38,357.27 213.38,386.506    223.241,386.506 223.241,374.368 232.986,386.506 242.848,386.506 242.848,357.27  \"/>\r\n                        <polygon style=\"fill:#F2F2F2;\" points=\"281.238,357.27 281.238,369.408 271.494,357.27 261.632,357.27 261.632,386.506    271.494,386.506 271.494,374.368 281.238,386.506 291.1,386.506 291.1,357.27  \"/>\r\n                        <path style=\"fill:#F2F2F2;\" d=\"M74.616,357.167H60.103l-9.341,29.341H61.21l1.348-4.775h9.373l1.369,4.775h10.355L74.616,357.167z    M64.69,374.22l2.518-8.923l2.56,8.923H64.69z\"/>\r\n                        <path style=\"fill:#F2F2F2;\" d=\"M108.774,376.759c3.291-1.745,5.528-5.204,5.528-9.185c0-2.873-1.16-5.475-3.041-7.356   c-1.891-1.891-4.483-3.051-7.356-3.051H86.591v29.341h9.55v-8.526h3.135l3.96,8.526h11.274L108.774,376.759z M101.919,370.469   h-5.778v-4.869h5.778c0.679,0,1.285,0.272,1.724,0.711c0.439,0.439,0.721,1.045,0.721,1.724   C104.364,369.382,103.267,370.469,101.919,370.469z\"/>\r\n                        <path style=\"fill:#F2F2F2;\" d=\"M445.304,376.759c3.291-1.745,5.527-5.204,5.527-9.185c0-2.873-1.16-5.475-3.041-7.356   c-1.891-1.891-4.483-3.051-7.356-3.051h-17.314v29.341h9.55v-8.526h3.135l3.96,8.526h11.274L445.304,376.759z M438.45,370.469   h-5.778v-4.869h5.778c0.679,0,1.285,0.272,1.724,0.711c0.439,0.439,0.711,1.045,0.711,1.724   C440.884,369.382,439.798,370.469,438.45,370.469z\"/>\r\n                        <polygon style=\"fill:#F2F2F2;\" points=\"145.825,357.169 137.045,357.169 125.98,357.169 116.742,357.169 116.742,365.949    125.98,365.949 125.98,386.506 137.045,386.506 137.045,365.949 145.825,365.949  \"/>\r\n                        <polygon style=\"fill:#F2F2F2;\" points=\"352.601,357.169 343.819,357.169 332.755,357.169 323.518,357.169 323.518,365.949    332.755,365.949 332.755,386.506 343.819,386.506 343.819,365.949 352.601,365.949  \"/>\r\n                        <path style=\"fill:#F2F2F2;\" d=\"M162.523,356.634c-8.317,0-15.057,6.729-15.057,15.057c0,8.307,6.74,15.057,15.057,15.057   c8.317,0,15.057-6.75,15.057-15.057C177.58,363.363,170.841,356.634,162.523,356.634z M162.523,377.166   c-3.02,0-5.475-2.456-5.475-5.475c0-3.03,2.456-5.486,5.475-5.486c3.03,0,5.486,2.456,5.486,5.486   C168.009,374.711,165.554,377.166,162.523,377.166z\"/>\r\n                        <path style=\"fill:#F2F2F2;\" d=\"M195.208,356.634c-8.317,0-15.057,6.729-15.057,15.057c0,8.307,6.74,15.057,15.057,15.057   c8.307,0,15.057-6.75,15.057-15.057C210.265,363.363,203.515,356.634,195.208,356.634z M195.208,377.166   c-3.03,0-5.486-2.456-5.486-5.475c0-3.03,2.456-5.486,5.486-5.486c3.02,0,5.475,2.456,5.475,5.486   C200.683,374.711,198.228,377.166,195.208,377.166z\"/>\r\n                        <path style=\"fill:#F2F2F2;\" d=\"M405.096,356.634c-8.317,0-15.057,6.729-15.057,15.057c0,8.307,6.74,15.057,15.057,15.057   c8.307,0,15.057-6.75,15.057-15.057C420.153,363.363,413.403,356.634,405.096,356.634z M405.096,377.166   c-3.03,0-5.486-2.456-5.486-5.475c0-3.03,2.456-5.486,5.486-5.486c3.02,0,5.475,2.456,5.475,5.486   C410.572,374.711,408.116,377.166,405.096,377.166z\"/>\r\n                        <polygon style=\"fill:#F2F2F2;\" points=\"320.676,365.493 320.676,357.27 304.841,357.27 294.993,357.27 294.993,365.493    294.993,368.183 294.993,375.593 294.993,378.283 294.993,386.506 304.841,386.506 320.676,386.506 320.676,378.283    304.841,378.283 304.841,375.593 318.138,375.593 318.138,368.183 304.841,368.183 304.841,365.493  \"/>\r\n                        <polygon style=\"fill:#F2F2F2;\" points=\"372.09,378.74 375.288,386.506 383.357,386.506 389.144,357.169 379.094,357.169    376.81,369.452 372.09,358.336 367.37,369.452 365.086,357.169 355.036,357.169 360.823,386.506 368.893,386.506  \"/>\r\n                        <path style=\"fill:#F2F2F2;\" d=\"M472.283,371.43l7.272,9.404c-1.014,1.797-2.038,3.594-3.093,5.371h-5.245l-7.461-10.198v10.198   h-9.749v-29.236h9.749v9.979l7.461-9.979h12.487L472.283,371.43z\"/>\r\n                    </svg>\r\n                    <p>Cartoon Network es una reconocida cadena de television con la cual he trabajado en animacion y dibujo</p>\r\n\r\n            </div>\r\n            <div class=\"iconos\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512.021 512.021\" style=\"enable-background:new 0 0 512.021 512.021;\" xml:space=\"preserve\">\r\n                        <path style=\"fill:#d6a206;\" d=\"M256,0.011c-141.385,0-256,114.615-256,256s114.615,256,256,256c2.453,0,4.864-0.171,7.275-0.32   l3.819-0.235c5.891,0,10.667-4.776,10.667-10.667c0-5.891-4.776-10.667-10.667-10.667   c-117.606-5.573-208.427-105.43-202.854-223.036C69.813,149.48,169.669,58.659,287.276,64.233   c109.837,5.205,197.695,93.097,202.858,202.935c0.262,5.699,4.962,10.182,10.667,10.176l0,0c5.72,0.005,10.426-4.503,10.667-10.219   l0.235-3.712c0.171-2.453,0.32-4.907,0.32-7.424C511.857,114.668,397.322,0.152,256,0.011z\"/>\r\n                        <path style=\"fill:#d6a206;\" d=\"M473.792,233.867c-4.462-0.424-8.694,2.061-10.496,6.165c-14.709,32.14-52.688,46.272-84.828,31.563   s-46.272-52.688-31.563-84.828c8.539-18.659,25.507-32.092,45.628-36.121c5.775-1.164,9.513-6.789,8.349-12.564   c-0.61-3.029-2.504-5.645-5.192-7.17c-89.937-50.97-204.164-19.381-255.134,70.556s-19.381,204.165,70.556,255.134   s204.164,19.381,255.134-70.556c24.885-43.91,30.983-96.009,16.911-144.478C481.94,237.304,478.211,234.237,473.792,233.867z\"/>\r\n                    </svg>\r\n                    <p>Chrunchyroll es la empresa distrubuidora mas grande de anime, he colaborado en el desarrollo de distintos animes</p>\r\n                \r\n            </div>\r\n            <div class=\"iconos\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"-2 0 384 384.248\"><path d=\"m363.691406 304.246094c0 35.347656-28.652344 64-64 64-35.34375 0-64-28.652344-64-64 0-35.34375 28.65625-64 64-64 35.347656 0 64 28.65625 64 64zm0 0\" fill=\"#cce4ff\"/><path d=\"m235.691406 16.246094h128v128h-128zm0 0\" fill=\"#cce4ff\"/><path d=\"m27.691406 144.246094h128l-64-112zm0 0\" fill=\"#cce4ff\"/><g fill=\"#007aff\"><path d=\"m299.691406 224.246094c-44.113281 0-80 35.890625-80 80 0 44.113281 35.886719 80 80 80 44.113282 0 80-35.886719 80-80 0-44.109375-35.886718-80-80-80zm0 128c-26.472656 0-48-21.527344-48-48 0-26.46875 21.527344-48 48-48s48 21.53125 48 48c0 26.472656-21.527344 48-48 48zm0 0\"/><path d=\"m.125 160.246094h183.144531l-91.578125-160.246094zm55.136719-32 36.429687-63.75 36.433594 63.75zm0 0\"/><path d=\"m219.691406 160.246094h160v-160h-160zm32-128h96v96h-96zm0 0\"/><path d=\"m35.691406 382.878906 56-56 56 56 22.632813-22.632812-56-56 56-56-22.632813-22.628906-56 56-56-56-22.632812 22.628906 56 56-56 56zm0 0\"/></g></svg>\r\n                <p>Playstation una de las grandes empresas en consolas y videojuegos, se realizan proyectos para modelado 3d</p>\r\n                \r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"cuadro\">\r\n            <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\">\r\n        </div>\r\n    </div>\r\n\r\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/app/pages/Clientes_page/ClientesPageController.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/Clientes_page/ClientesPageController.ts ***!
  \***************************************************************/
/*! exports provided: ClientesPageController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesPageController", function() { return ClientesPageController; });
var view = __webpack_require__(/*! ./Clientes.html */ "./src/app/pages/Clientes_page/Clientes.html");
var style = __webpack_require__(/*! ./clientes.scss */ "./src/app/pages/Clientes_page/clientes.scss");
var ClientesPageController = /** @class */ (function () {
    function ClientesPageController() {
        this.view = view;
        this.style = style;
        this.viewId = "clientes-page";
    }
    ClientesPageController.prototype.getView = function () {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    };
    return ClientesPageController;
}());



/***/ }),

/***/ "./src/app/pages/Clientes_page/clientes.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/Clientes_page/clientes.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./clientes.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/Clientes_page/clientes.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/app/pages/HabilidadesPage/HabilidadesPage.html":
/*!************************************************************!*\
  !*** ./src/app/pages/HabilidadesPage/HabilidadesPage.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../../../assets/img/flecha-hacia-atras.svg */ "./src/assets/img/flecha-hacia-atras.svg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../../../assets/img/flecha-hacia-abajo.svg */ "./src/assets/img/flecha-hacia-abajo.svg");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ../../../assets/img/participacion.svg */ "./src/assets/img/participacion.svg");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ../../../assets/Video/Animacion final - Gato Bond.mp4 */ "./src/assets/Video/Animacion final - Gato Bond.mp4");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ../../../assets/img/animation.gif */ "./src/assets/img/animation.gif");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ../../../assets/img/modelado_3d.gif */ "./src/assets/img/modelado_3d.gif");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ../../../assets/img/html.jpg */ "./src/assets/img/html.jpg");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ../../../assets/img/gif-html-4.gif */ "./src/assets/img/gif-html-4.gif");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_7___);
var code = "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\" id=\"abajo\">\r\n    <path fill=\"#fff\" fill-opacity=\"1\" d=\"M0,224L30,240C60,256,120,288,180,288C240,288,300,256,360,240C420,224,480,224,540,218.7C600,213,660,203,720,218.7C780,235,840,277,900,298.7C960,320,1020,320,1080,282.7C1140,245,1200,171,1260,154.7C1320,139,1380,181,1410,202.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z\"></path>\r\n  </svg>\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 320\" id=\"arriba\">\r\n    <path fill=\"#fff\" fill-opacity=\"1\" d=\"M0,160L60,165.3C120,171,240,181,360,160C480,139,600,85,720,64C840,43,960,53,1080,74.7C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z\"></path>\r\n</svg>\r\n\r\n\r\n<div id=\"text\">\r\n    Mis Habilidades\r\n</div>\r\n<img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\" id=\"flecha\">\r\n<img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" id=\"flecha2\">\r\n<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"\" id=\"flecha3\">\r\n\r\n\r\n\r\n<div id=\"proyectos1\">\r\n    <video src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" controls></video>\r\n</div>\r\n<div id=\"proyectos2\" >\r\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\">\r\n</div>\r\n<div id=\"proyectos3\" >\r\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"\">\r\n</div>\r\n<div id=\"proyectos4\" >\r\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"\">\r\n</div>\r\n<div id=\"proyectos5\" >\r\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\">\r\n</div>\r\n\r\n<div id=\"text2\">Conocimientos en animacion 2D</div>\r\n<div id=\"text3\">Conocimientos en Modelado 3D</div>\r\n<div id=\"text4\">Conocimientos en Html y Css</div>\r\n\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/app/pages/HabilidadesPage/HabilidadesPageController.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/HabilidadesPage/HabilidadesPageController.ts ***!
  \********************************************************************/
/*! exports provided: HabilidadesPageController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabilidadesPageController", function() { return HabilidadesPageController; });
var view = __webpack_require__(/*! ./HabilidadesPage.html */ "./src/app/pages/HabilidadesPage/HabilidadesPage.html");
var style = __webpack_require__(/*! ./HabilidadesPageStyle.scss */ "./src/app/pages/HabilidadesPage/HabilidadesPageStyle.scss");
var HabilidadesPageController = /** @class */ (function () {
    function HabilidadesPageController() {
        this.view = view;
        this.viewId = "Habilidades-page";
    }
    HabilidadesPageController.prototype.getView = function () {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    };
    HabilidadesPageController.prototype.start = function () {
        /**
        En esta funcion seleccionamos los ids de cada elemento y lo cguardamos en su
        respectiva variable.
         */
        var animacion = document.getElementById('flecha');
        var animacion1 = document.getElementById('flecha2');
        var animacion1_1 = document.getElementById('flecha3');
        var animacion2 = document.getElementById('proyectos1');
        var animacion3 = document.getElementById('proyectos2');
        var animacion4 = document.getElementById('proyectos3');
        var animacion5 = document.getElementById('proyectos4');
        var animacion6 = document.getElementById('proyectos5');
        var animaciontext = document.getElementById('text2');
        var animaciontext2 = document.getElementById('text3');
        var animaciontext3 = document.getElementById('text4');
        /**
        En esta parte se tomara tres elementos como referencia para medir
        la altura en la cual estan posicionados en la pantalla  */
        var positionObj1 = animacion.getBoundingClientRect().top;
        var positionObj2 = animacion2.getBoundingClientRect().top;
        var positionObj3 = animacion3.getBoundingClientRect().top;
        window.onscroll = function (_) {
            /**
             * se realiza una comparacion entre la posicion del objeto
             * contra la posicion del scroll.
             * Si la posicion del scroll sobrepasa la del objeto, se incializa
             * la animacion.
             *
             */
            if ((window.scrollY + window.innerHeight / 2) >= positionObj1) {
                animacion.style.animation = 'mover 2s ease-out';
                animacion.style.opacity = '1';
                animacion1.style.animation = 'mover2 2s ease-out';
                animacion1.style.opacity = '1';
                animacion1_1.style.animation = 'mover3 2s ease-out';
                animacion1_1.style.opacity = '1';
            }
            /**
             * lo mismo sucede en el siguiente caso, pero esta vez con mas elemntos a iniciar
             * la animacion de aparecer en la pantalla.
             */
            if ((window.scrollY + window.innerHeight / 2) >= positionObj2 && (window.scrollY + window.innerHeight / 2) >= positionObj3) {
                animacion2.style.animation = 'aparecer 2s ease-out';
                animacion2.style.opacity = '1';
                animacion3.style.animation = 'aparecer 2s ease-out';
                animacion3.style.opacity = '1';
                animacion4.style.animation = 'aparecer 2s ease-out';
                animacion4.style.opacity = '1';
                animacion5.style.animation = 'aparecer 2s ease-out';
                animacion5.style.opacity = '1';
                animacion5.style.animation = 'aparecer 2s ease-out';
                animacion5.style.opacity = '1';
                animacion6.style.animation = 'aparecer 2s ease-out';
                animacion6.style.opacity = '1';
                animaciontext.style.animation = 'aparecer 2s ease-out';
                animaciontext.style.opacity = '1';
                animaciontext2.style.animation = 'aparecer 2s ease-out';
                animaciontext2.style.opacity = '1';
                animaciontext3.style.animation = 'aparecer 2s ease-out';
                animaciontext3.style.opacity = '1';
            }
        };
    };
    return HabilidadesPageController;
}());



/***/ }),

/***/ "./src/app/pages/HabilidadesPage/HabilidadesPageStyle.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/HabilidadesPage/HabilidadesPageStyle.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./HabilidadesPageStyle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/HabilidadesPage/HabilidadesPageStyle.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/app/pages/Home/HomePage.html":
/*!******************************************!*\
  !*** ./src/app/pages/Home/HomePage.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../../../assets/img/26-27.jpg */ "./src/assets/img/26-27.jpg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../../../assets/Audio/tokyo.ogg */ "./src/assets/Audio/tokyo.ogg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var code = "\r\n    <h1>Hello World App with Webpack + TS</h1>\r\n    <div class=\"algo\">\r\n        Aqui va!!\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"jodete\">\r\n        <audio src= \"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" controls></audio>\r\n    </div> \r\n    <!-- <p>Counter: <span></span></p> -->\r\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/app/pages/Home/HomePageController.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/Home/HomePageController.ts ***!
  \**************************************************/
/*! exports provided: HomePageController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageController", function() { return HomePageController; });
var view = __webpack_require__(/*! ./HomePage.html */ "./src/app/pages/Home/HomePage.html");
var style = __webpack_require__(/*! ./HomePageStyle.scss */ "./src/app/pages/Home/HomePageStyle.scss");
var HomePageController = /** @class */ (function () {
    function HomePageController() {
        this.view = view;
        this.viewId = "home-page";
    }
    HomePageController.prototype.start = function () {
    };
    HomePageController.prototype.getView = function () {
        return [this.viewId, document.createRange().createContextualFragment(view)];
    };
    return HomePageController;
}());



/***/ }),

/***/ "./src/app/pages/Home/HomePageStyle.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/Home/HomePageStyle.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./HomePageStyle.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/app/pages/Home/HomePageStyle.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/Audio/tokyo.ogg":
/*!************************************!*\
  !*** ./src/assets/Audio/tokyo.ogg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/Audio/tokyo.ogg");

/***/ }),

/***/ "./src/assets/Video/Animacion final - Gato Bond.mp4":
/*!**********************************************************!*\
  !*** ./src/assets/Video/Animacion final - Gato Bond.mp4 ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/Video/Animacion final - Gato Bond.mp4");

/***/ }),

/***/ "./src/assets/img/26-27.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/26-27.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/img/26-27.jpg");

/***/ }),

/***/ "./src/assets/img/animation.gif":
/*!**************************************!*\
  !*** ./src/assets/img/animation.gif ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/img/animation.gif");

/***/ }),

/***/ "./src/assets/img/customerrelations_recolored-gif-still-1024x637.gif":
/*!***************************************************************************!*\
  !*** ./src/assets/img/customerrelations_recolored-gif-still-1024x637.gif ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/img/customerrelations_recolored-gif-still-1024x637.gif");

/***/ }),

/***/ "./src/assets/img/flecha-hacia-abajo.svg":
/*!***********************************************!*\
  !*** ./src/assets/img/flecha-hacia-abajo.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/img/flecha-hacia-abajo.svg");

/***/ }),

/***/ "./src/assets/img/flecha-hacia-atras.svg":
/*!***********************************************!*\
  !*** ./src/assets/img/flecha-hacia-atras.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/img/flecha-hacia-atras.svg");

/***/ }),

/***/ "./src/assets/img/gif-html-4.gif":
/*!***************************************!*\
  !*** ./src/assets/img/gif-html-4.gif ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/img/gif-html-4.gif");

/***/ }),

/***/ "./src/assets/img/html.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/html.jpg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/img/html.jpg");

/***/ }),

/***/ "./src/assets/img/modelado_3d.gif":
/*!****************************************!*\
  !*** ./src/assets/img/modelado_3d.gif ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/img/modelado_3d.gif");

/***/ }),

/***/ "./src/assets/img/participacion.svg":
/*!******************************************!*\
  !*** ./src/assets/img/participacion.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/img/participacion.svg");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(/*! ./app/app */ "./src/app/app.ts");



/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9DbGllbnRlc19wYWdlL2NsaWVudGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9IYWJpbGlkYWRlc1BhZ2UvSGFiaWxpZGFkZXNQYWdlU3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL0hvbWUvSG9tZVBhZ2VTdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL0NsaWVudGVzX3BhZ2UvQ2xpZW50ZXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL0NsaWVudGVzX3BhZ2UvQ2xpZW50ZXNQYWdlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2VzL0NsaWVudGVzX3BhZ2UvY2xpZW50ZXMuc2Nzcz84ZTVkIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvSGFiaWxpZGFkZXNQYWdlL0hhYmlsaWRhZGVzUGFnZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvSGFiaWxpZGFkZXNQYWdlL0hhYmlsaWRhZGVzUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9IYWJpbGlkYWRlc1BhZ2UvSGFiaWxpZGFkZXNQYWdlU3R5bGUuc2Nzcz8wMTE5Iiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvSG9tZS9Ib21lUGFnZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZXMvSG9tZS9Ib21lUGFnZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wYWdlcy9Ib21lL0hvbWVQYWdlU3R5bGUuc2Nzcz9hYTU2Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvQXVkaW8vdG9reW8ub2dnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvVmlkZW8vQW5pbWFjaW9uIGZpbmFsIC0gR2F0byBCb25kLm1wNCIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy8yNi0yNy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWcvYW5pbWF0aW9uLmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy9jdXN0b21lcnJlbGF0aW9uc19yZWNvbG9yZWQtZ2lmLXN0aWxsLTEwMjR4NjM3LmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltZy9mbGVjaGEtaGFjaWEtYWJham8uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1nL2ZsZWNoYS1oYWNpYS1hdHJhcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWcvZ2lmLWh0bWwtNC5naWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWcvaHRtbC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWcvbW9kZWxhZG9fM2QuZ2lmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1nL3BhcnRpY2lwYWNpb24uc3ZnIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QUFRLGlDQUFpQyxpQkFBaUIsS0FBSyxTQUFTLG1CQUFtQixLQUFLLFVBQVUsaUJBQWlCLEtBQUssR0FBRyxxQkFBcUIsUUFBUSxpQ0FBaUMsaUJBQWlCLEtBQUssU0FBUyxtQkFBbUIsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsdUJBQXVCLFFBQVEsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsS0FBSyxHQUFHLE9BQU8sd0hBQXdILFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsUUFBUSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0s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QUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFlLDZHQUE4QyxFOzs7Ozs7Ozs7Ozs7QUNBN0Q7QUFBZSxxRkFBc0IsRTs7Ozs7Ozs7Ozs7O0FDQXJDO0FBQWUseUZBQTBCLEU7Ozs7Ozs7Ozs7OztBQ0F6QztBQUFlLDhIQUErRCxFOzs7Ozs7Ozs7Ozs7QUNBOUU7QUFBZSxrR0FBbUMsRTs7Ozs7Ozs7Ozs7O0FDQWxEO0FBQWUsa0dBQW1DLEU7Ozs7Ozs7Ozs7OztBQ0FsRDtBQUFlLDBGQUEyQixFOzs7Ozs7Ozs7Ozs7QUNBMUM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUsMkZBQTRCLEU7Ozs7Ozs7Ozs7OztBQ0EzQztBQUFlLDZGQUE4QixFOzs7Ozs7Ozs7Ozs7QUNBN0M7QUFBQTtBQUFBO0FBQUEsbUJBQU8sQ0FBQyxtQ0FBVyxDQUFDLENBQUM7QUFDRTs7Ozs7Ozs7Ozs7O0FDRHZCLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMscU1BQWdHOztBQUVsSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjbGllbnRlcy1wYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4jY2xpZW50ZXMtcGFnZSAudGl0dWxvIGgyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRvcDogMzBweDtcXG4gIGxlZnQ6IDE0MHB4O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcXFwiT3BlbiBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi10b3A6IDByZW07XFxuICBjb2xvcjogIzE1MzI0MDtcXG59XFxuI2NsaWVudGVzLXBhZ2UgLmN1cnZlZC1kaXYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jY2xpZW50ZXMtcGFnZSAuY3VydmVkLWRpdiBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNjbGllbnRlcy1wYWdlIC5ncmlkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgYm90dG9tOiAwcHg7XFxufVxcbiNjbGllbnRlcy1wYWdlIC5ncmlkIC5ncmlkLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNjbGllbnRlcy1wYWdlIC5ncmlkIC5ncmlkLWNvbnRlbnQgLmRlc2NyaXBjaW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzgwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgdG9wOiAxNTBweDtcXG4gIGxlZnQ6IDUwcHg7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzJFNkU4RDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcbiNjbGllbnRlcy1wYWdlIC5ncmlkIC5ncmlkLWNvbnRlbnQgLmRlc2NyaXBjaW9uIHByZSB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLXRvcDogMHJlbTtcXG4gIGNvbG9yOiAjNDdBQUQ5O1xcbn1cXG4jY2xpZW50ZXMtcGFnZSAuZ3JpZCAuZ3JpZC1jb250ZW50IC5ncmlkLWljb25vcyB7XFxuICB3aWR0aDogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG4jY2xpZW50ZXMtcGFnZSAuZ3JpZCAuZ3JpZC1jb250ZW50IC5ncmlkLWljb25vcyAuaWNvbm9zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkYzRDk7XFxuICBtYXJnaW46IDMwcHg7XFxuICB0b3A6IC0xMDBweDtcXG4gIGxlZnQ6IDU1MHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG4jY2xpZW50ZXMtcGFnZSAuZ3JpZCAuZ3JpZC1jb250ZW50IC5ncmlkLWljb25vcyAuaWNvbm9zIHAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjAwJTtcXG4gIG1heC1oZWlnaHQ6IDBweDtcXG4gIHBhZGRpbmc6IDMuNXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcbn1cXG4jY2xpZW50ZXMtcGFnZSAuZ3JpZCAuZ3JpZC1jb250ZW50IC5ncmlkLWljb25vcyAuaWNvbm9zOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkU2QjM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbiNjbGllbnRlcy1wYWdlIC5ncmlkIC5ncmlkLWNvbnRlbnQgLmdyaWQtaWNvbm9zIC5pY29ub3M6aG92ZXIgcCB7XFxuICBjb2xvcjogIzJFNkU4RDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyRTZFOEQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGM0Q5O1xcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbDtcXG59XFxuI2NsaWVudGVzLXBhZ2UgLmdyaWQgLmdyaWQtY29udGVudCAuY3VhZHJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDg1cHg7XFxuICB0b3A6IC0xNDBweDtcXG4gIGxlZnQ6IDEwNTBweDtcXG59XFxuI2NsaWVudGVzLXBhZ2UgLmdyaWQgLmdyaWQtY29udGVudCAuY3VhZHJvIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjEwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvYXBwL3BhZ2VzL0NsaWVudGVzX3BhZ2UvY2xpZW50ZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFPQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBTko7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdJQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQXJCSztBQWdCYjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTFI7QUFPTTtFQUNFLGNBQUE7QUFMUjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBUlI7QUFTUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBUFo7QUFRWTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQU5oQjtBQU9nQjtFQUNBLGVBQUE7RUFDQSx3SUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0F6REg7QUFvRGI7QUFTWTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0FBUGhCO0FBU2dCO0VBQ0ksa0JBQUE7RUFDQSx5QkFwRU47RUFxRU0sWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7QUFScEI7QUFVb0I7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQVJ4QjtBQWFnQjtFQUNJLHlCQTdGTjtFQThGTSxxQkFBQTtBQVhwQjtBQWFvQjtFQUVJLGNBcEdYO0VBcUdXLHlCQUFBO0VBQ0EseUJBbkdWO0VBb0dVLGlCQUFBO0VBQ0Esb0JBQUE7QUFaeEI7QUFrQlk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBaEJoQjtBQWlCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBZnBCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRjb2xvcl9CbHVlMTojMTUzMjQwO1xcclxcbiRjb2xvcl9CbHVlMjojMkU2RThEO1xcclxcbiRjb2xvcl9CbHVlMzojNDdBQUQ5O1xcclxcbiRjb2xvcl9jbGFybzE6I0ZGRTZCMztcXHJcXG4kY29sb3JfY2xhcm8yOiNGRkYzRDk7XFxyXFxuJGNvbG9yX25lZ3JvOiMwMDAwO1xcclxcblxcclxcbiNjbGllbnRlcy1wYWdle1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAudGl0dWxvIGgye1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgdG9wOjMwcHg7XFxyXFxuICAgICAgICBsZWZ0OiAxNDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOjByZW07XFxyXFxuICAgICAgICBjb2xvcjogJGNvbG9yX0JsdWUxO1xcclxcbiAgICB9XFxyXFxuICAgIC5jdXJ2ZWQtZGl2IHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgLmN1cnZlZC1kaXYgc3ZnIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIFxcclxcblxcclxcbiAgICAuZ3JpZHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogODAlO1xcclxcbiAgICAgICAgYm90dG9tOiAwcHg7XFxyXFxuICAgICAgICAuZ3JpZC1jb250ZW50e1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICAuZGVzY3JpcGNpb257XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzODBweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOjE1MHB4O1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MHB4O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJGNvbG9yX0JsdWUyO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICAgICAgICAgICAgICBwcmV7IFxcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MHJlbTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl9CbHVlMztcXHJcXG4gICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgIC5ncmlkLWljb25vc3tcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsMWZyKTtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xcclxcbiAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAuaWNvbm9ze1xcclxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX2NsYXJvMjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRvcDotMTAwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1NTBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICBwe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6MHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMuNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cyBhbGw7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgLmljb25vczpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl9jbGFybzE7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgIHB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl9CbHVlMjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICRjb2xvcl9CbHVlMjtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfY2xhcm8yO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC5jdWFkcm97XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1cHg7XFxyXFxuICAgICAgICAgICAgICAgIHRvcDotMTQwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6MTA1MHB4O1xcclxcbiAgICAgICAgICAgICAgICBpbWd7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjEwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNIYWJpbGlkYWRlcy1wYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogNjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3QUFEOTtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI2ZsZWNoYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xcbiAgei1pbmRleDogMjtcXG4gIG9wYWNpdHk6IDA7XFxuICBsZWZ0OiA0MDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNmbGVjaGEyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgdG9wOiAxMjBweDtcXG4gIGxlZnQ6IDY1MHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI2ZsZWNoYTMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xcbiAgei1pbmRleDogMjtcXG4gIG9wYWNpdHk6IDA7XFxuICByaWdodDogMzQwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMjtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTMyNDA7XFxuICB0b3A6IC0yMHB4O1xcbiAgcmlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGNvbG9yOiAjRkZGM0Q5O1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjdGV4dDIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUzMjQwO1xcbiAgdG9wOiA0NTBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBsZWZ0OiAxMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogI0ZGRjNEOTtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI3RleHQyOmhvdmVyIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICN0ZXh0MjphY3RpdmUge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI3RleHQzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTMyNDA7XFxuICB0b3A6IDU2MHB4O1xcbiAgbGVmdDogNTUwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgY29sb3I6ICNGRkYzRDk7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICN0ZXh0Mzpob3ZlciB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjdGV4dDM6YWN0aXZlIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICN0ZXh0NCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgei1pbmRleDogMjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTMyNDA7XFxuICB0b3A6IDQwMHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHJpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBjb2xvcjogI0ZGRjNEOTtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI3RleHQ0OmhvdmVyIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICN0ZXh0NDphY3RpdmUge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI3Byb3llY3RvczEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIHRvcDogMTUwcHg7XFxuICBsZWZ0OiA4MHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMTUzMjQwO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNwcm95ZWN0b3MxIHZpZGVvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNwcm95ZWN0b3MxOmhvdmVyIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMjcwcHg7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNwcm95ZWN0b3MxOmFjdGl2ZSB7XFxuICB3aWR0aDogNDIwcHg7XFxuICBoZWlnaHQ6IDI3MHB4O1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjcHJveWVjdG9zMiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgbGVmdDogMjBweDtcXG4gIHRvcDogLTIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMxNTMyNDA7XFxuICBib3JkZXItcmFkaXVzOiAyNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUzMjQwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI3Byb3llY3RvczIgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNwcm95ZWN0b3MyOmhvdmVyIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogMzIwcHg7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNwcm95ZWN0b3MyOmFjdGl2ZSB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjcHJveWVjdG9zMyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgbGVmdDogNTUwcHg7XFxuICB0b3A6IDIzMHB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMTUzMjQwO1xcbiAgYm9yZGVyLXJhZGl1czogMjUlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MzI0MDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNwcm95ZWN0b3MzIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwcHg7XFxuICB0b3A6IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjcHJveWVjdG9zMzpob3ZlciB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjcHJveWVjdG9zMzphY3RpdmUge1xcbiAgd2lkdGg6IDMyMHB4O1xcbiAgaGVpZ2h0OiAzMjBweDtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI3Byb3llY3RvczQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIHRvcDogMTUwcHg7XFxuICByaWdodDogODBweDtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzE1MzI0MDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjcHJveWVjdG9zNCBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMHB4O1xcbiAgdG9wOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI3Byb3llY3RvczQ6aG92ZXIge1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgaGVpZ2h0OiAyNDBweDtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI3Byb3llY3RvczQ6YWN0aXZlIHtcXG4gIHdpZHRoOiA0MjBweDtcXG4gIGhlaWdodDogMjcwcHg7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNwcm95ZWN0b3M1IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDI7XFxuICByaWdodDogMjBweDtcXG4gIHRvcDogLTIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMxNTMyNDA7XFxuICBib3JkZXItcmFkaXVzOiAyNSU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUzMjQwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI3Byb3llY3RvczUgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNwcm95ZWN0b3M1OmhvdmVyIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogMzIwcHg7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNwcm95ZWN0b3M1OmFjdGl2ZSB7XFxuICB3aWR0aDogMzIwcHg7XFxuICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjY3VhZHJvIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbiNIYWJpbGlkYWRlcy1wYWdlICNhYmFqbyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDBweDtcXG59XFxuI0hhYmlsaWRhZGVzLXBhZ2UgI2FycmliYSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMHB4O1xcbn1cXG4jSGFiaWxpZGFkZXMtcGFnZSAjYXJyaWJhIHBhdGgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBtb3ZlcjIge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIG1vdmVyMyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYXBhcmVjZXIge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvYXBwL3BhZ2VzL0hhYmlsaWRhZGVzUGFnZS9IYWJpbGlkYWRlc1BhZ2VTdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQU9BO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFWUztBQUliO0FBT1E7RUFDUSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFMaEI7QUFPUTtFQUNJLGtCQUFBO0VB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Q0E7RUFDSTtJQUNJLFVBQUE7RUE5Qk47RUFnQ0U7SUFDSSxVQUFBO0VBOUJOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGNvbG9yX0JsdWUxOiMxNTMyNDA7XFxyXFxuJGNvbG9yX0JsdWUyOiMyRTZFOEQ7XFxyXFxuJGNvbG9yX0JsdWUzOiM0N0FBRDk7XFxyXFxuJGNvbG9yX2NsYXJvMTojRkZFNkIzO1xcclxcbiRjb2xvcl9jbGFybzI6I0ZGRjNEOTtcXHJcXG4kY29sb3ItT3NjdXJvMTogIzAwMDAwMDtcXHJcXG5cXHJcXG4jSGFiaWxpZGFkZXMtcGFnZXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogNjAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1CbHVlMztcXHJcXG4gICAgICAgICNmbGVjaGF7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcXHJcXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDogNDAwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNmbGVjaGEye1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgdG9wOiAxMjBweDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiA2NTBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNmbGVjaGEze1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAzNDBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgI3RleHR7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjUlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JGNvbG9yLUJsdWUxIDtcXHJcXG4gICAgICAgICAgICB0b3A6LTIwcHg7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDUwMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiRjb2xvci1jbGFybzI7XFxyXFxuICAgICAgICAgICAgLy8gYm9yZGVyOiA1cHggc29saWQgJGNvbG9yLWNsYXJvMjtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN0ZXh0MntcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoyNSU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokY29sb3ItQmx1ZTEgO1xcclxcbiAgICAgICAgICAgIHRvcDo0NTBweDtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDEwMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiRjb2xvci1jbGFybzI7XFxyXFxuICAgICAgICAgICAgLy8gYm9yZGVyOiA1cHggc29saWQgJGNvbG9yLWNsYXJvMjtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN0ZXh0Mjpob3ZlcntcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN0ZXh0MjphY3RpdmV7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjdGV4dDN7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MjUlO1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokY29sb3ItQmx1ZTEgO1xcclxcbiAgICAgICAgICAgIHRvcDo1NjBweDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiA1NTBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgICAgICAgICBjb2xvcjokY29sb3ItY2xhcm8yO1xcclxcbiAgICAgICAgICAgIC8vIGJvcmRlcjogNXB4IHNvbGlkICRjb2xvci1jbGFybzI7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjdGV4dDM6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjdGV4dDM6YWN0aXZle1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI3RleHQ0e1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjI1JTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvci1CbHVlMSA7XFxyXFxuICAgICAgICAgICAgdG9wOjQwMHB4O1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDEwMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiRjb2xvci1jbGFybzI7XFxyXFxuICAgICAgICAgICAgLy8gYm9yZGVyOiA1cHggc29saWQgJGNvbG9yLWNsYXJvMjtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN0ZXh0NDpob3ZlcntcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICN0ZXh0NDphY3RpdmV7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjcHJveWVjdG9zMXtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMztcXHJcXG4gICAgICAgICAgICB0b3A6IDE1MHB4O1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDgwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6MDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRjb2xvci1CbHVlMTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1Pc2N1cm8xO1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgdmlkZW97XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDowcHg7XFxyXFxuICAgICAgICAgICAgICAgIHRvcDowcHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI3Byb3llY3RvczE6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMjcwcHg7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjcHJveWVjdG9zMTphY3RpdmV7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMjcwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjcHJveWVjdG9zMntcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIHRvcDotMjBweDtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OjA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgJGNvbG9yX0JsdWUxO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLUJsdWUxO1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgaW1ne1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xcclxcbiAgICAgICAgICAgICAgICB0b3A6MHB4O1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNwcm95ZWN0b3MyOmhvdmVye1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI3Byb3llY3RvczI6YWN0aXZle1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDMyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI3Byb3llY3RvczN7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICAgICAgbGVmdDo1NTBweDtcXHJcXG4gICAgICAgICAgICB0b3A6MjMwcHg7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTowO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRjb2xvcl9CbHVlMTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1CbHVlMTtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIGltZ3tcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OjBweDtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOjBweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjcHJveWVjdG9zMzpob3ZlcntcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzMjBweDtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNwcm95ZWN0b3MzOmFjdGl2ZXtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNwcm95ZWN0b3M0e1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAzO1xcclxcbiAgICAgICAgICAgIHRvcDogMTUwcHg7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDgwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6MDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRjb2xvci1CbHVlMTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1Pc2N1cm8xO1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgaW1ne1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6MHB4O1xcclxcbiAgICAgICAgICAgICAgICB0b3A6MHB4O1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNwcm95ZWN0b3M0OmhvdmVye1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzODBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDI0MHB4O1xcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI3Byb3llY3RvczQ6YWN0aXZle1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MjBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDI3MHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI3Byb3llY3RvczV7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6MjBweDtcXHJcXG4gICAgICAgICAgICB0b3A6LTIwcHg7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTowO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICRjb2xvcl9CbHVlMTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1CbHVlMTtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIGltZ3tcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OjBweDtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOjBweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjcHJveWVjdG9zNTpob3ZlcntcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzMjBweDtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNwcm95ZWN0b3M1OmFjdGl2ZXtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNjdWFkcm97XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICNhYmFqb3tcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjYXJyaWJhe1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICB0b3A6MHB4O1xcclxcbiAgICAgICAgICAgIHBhdGh7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuQGtleWZyYW1lcyBtb3ZlcntcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAle1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVyMntcXHJcXG4gICAgMCV7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgNTAle1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbW92ZXIze1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICA1MCV7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGFwYXJlY2Vye1xcclxcbiAgICAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJXtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNob21lLXBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jaG9tZS1wYWdlIC5hbGdvIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG59XFxuI2hvbWUtcGFnZSAuYWxnbyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4jaG9tZS1wYWdlIC5hbGdvIGF1ZGlvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvYXBwL3BhZ2VzL0hvbWUvSG9tZVBhZ2VTdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUVSO0FBRFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFHWjtBQURRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFHWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjaG9tZS1wYWdle1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIC5hbGdve1xcclxcbiAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgIGhlaWdodDogNTAlO1xcclxcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcclxcbiAgICAgICAgaW1ne1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lOyAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIGF1ZGlve1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBjb3VudCB9IGZyb20gJy4vY291bnRlcidcclxuaW1wb3J0IHsgSG9tZVBhZ2VDb250cm9sbGVyIH0gZnJvbSAnLi9wYWdlcy9Ib21lL0hvbWVQYWdlQ29udHJvbGxlcidcclxuaW1wb3J0IHsgSGFiaWxpZGFkZXNQYWdlQ29udHJvbGxlciB9IGZyb20gJy4vcGFnZXMvSGFiaWxpZGFkZXNQYWdlL0hhYmlsaWRhZGVzUGFnZUNvbnRyb2xsZXInXHJcbmltcG9ydCB7IENsaWVudGVzUGFnZUNvbnRyb2xsZXJ9IGZyb20gJy4vcGFnZXMvQ2xpZW50ZXNfcGFnZS9DbGllbnRlc1BhZ2VDb250cm9sbGVyJ1xyXG5jbGFzcyBBcHAge1xyXG4gIFxyXG4gIG1haW5QYWdlcyA9IFtcclxuICAgIEhvbWVQYWdlQ29udHJvbGxlcixcclxuICAgIEhhYmlsaWRhZGVzUGFnZUNvbnRyb2xsZXIsXHJcbiAgICBDbGllbnRlc1BhZ2VDb250cm9sbGVyXHJcbiAgXTtcclxuICBsb2FkZWQ6IGFueSA9W107IFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudCgpO1xyXG5cclxuICAgIHRoaXMubWFpblBhZ2VzLmZvckVhY2gocGFnZUNvbnRyb2xsZXIgPT4ge1xyXG4gICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IHBhZ2VDb250cm9sbGVyKCk7XHJcbiAgICAgIHRoaXMubG9hZGVkLnB1c2goY29udHJvbGxlcik7XHJcbiAgICAgIGNvbnN0IFtlbElkLCBlbGVtZW50XSA9IG5ldyBwYWdlQ29udHJvbGxlcigpLmdldFZpZXcoKTtcclxuICAgICAgY29tcG9uZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUGFnZShlbElkLCBlbGVtZW50KSk7XHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbXBvbmVudCk7XHJcbiAgICAvKipcclxuICAgICAqIEVzdGUgZXMgZWwgY2FtYmlvXHJcbiAgICAgKi9cclxuICAgIGRvY3VtZW50LmJvZHkub25sb2FkID0gKCkgPT57XHJcbiAgICAgIHRoaXMubG9hZGVkLmZvckVhY2goKGNvbnRyb2xsZXI6IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnRyb2xsZXIuc3RhcnQoKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2UoaWQ6IHN0cmluZywgZWxlbWVudDogRG9jdW1lbnRGcmFnbWVudCkge1xyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGFnZS5pZCA9IGlkO1xyXG4gICAgcGFnZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIHJldHVybiBwYWdlO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5pZCA9IFwiYXBwXCI7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcclxuYXBwLnJlbmRlcigpO1xyXG4iLCIvLyBJbXBvcnRzXG52YXIgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2N1c3RvbWVycmVsYXRpb25zX3JlY29sb3JlZC1naWYtc3RpbGwtMTAyNHg2MzcuZ2lmXCIpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInRpdHVsb1xcXCI+XFxyXFxuICAgIDxoMj5DTElFTlRFUzwvaDI+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjdXJ2ZWQtZGl2XFxcIj5cXHJcXG4gICAgPHN2ZyB2aWV3Qm94PVxcXCIwIDAgMTQ0MCAzMTlcXFwiPlxcclxcbiAgICAgIDxwYXRoIGZpbGw9XFxcIiMxNTMyNDBcXFwiIGZpbGwtb3BhY2l0eT1cXFwiMVxcXCIgZD1cXFwiTTAsMzJMNDgsODBDOTYsMTI4LDE5MiwyMjQsMjg4LDIyNEMzODQsMjI0LDQ4MCwxMjgsNTc2LDkwLjdDNjcyLDUzLDc2OCw3NSw4NjQsOTZDOTYwLDExNywxMDU2LDEzOSwxMTUyLDE0OS4zQzEyNDgsMTYwLDEzNDQsMTYwLDEzOTIsMTYwTDE0NDAsMTYwTDE0NDAsMzIwTDEzOTIsMzIwQzEzNDQsMzIwLDEyNDgsMzIwLDExNTIsMzIwQzEwNTYsMzIwLDk2MCwzMjAsODY0LDMyMEM3NjgsMzIwLDY3MiwzMjAsNTc2LDMyMEM0ODAsMzIwLDM4NCwzMjAsMjg4LDMyMEMxOTIsMzIwLDk2LDMyMCw0OCwzMjBMMCwzMjBaXFxcIj48L3BhdGg+XFxyXFxuICAgIDwvc3ZnPlxcclxcbiAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDE0NDAgMjA3XFxcIj48cGF0aCBmaWxsPVxcXCIjMTUzMjQwXFxcIiBmaWxsLW9wYWNpdHk9XFxcIjFcXFwiIGQ9XFxcIk0wLDIyNEwwLDIyNEwxNDQwLDIyNEwxNDQwLDBMMCwwTDAsMFpcXFwiPjwvcGF0aD48L3N2Zz5cXHJcXG4gICAgIDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTQ0MCAzMjBcXFwiPjxwYXRoIGZpbGw9XFxcIiMxNTMyNDBcXFwiIGZpbGwtb3BhY2l0eT1cXFwiMVxcXCIgZD1cXFwiTTAsNjRMNDgsOTZDOTYsMTI4LDE5MiwxOTIsMjg4LDE5Ny4zQzM4NCwyMDMsNDgwLDE0OSw1NzYsMTE3LjNDNjcyLDg1LDc2OCw3NSw4NjQsOTZDOTYwLDExNywxMDU2LDE3MSwxMTUyLDIwOEMxMjQ4LDI0NSwxMzQ0LDI2NywxMzkyLDI3Ny4zTDE0NDAsMjg4TDE0NDAsMEwxMzkyLDBDMTM0NCwwLDEyNDgsMCwxMTUyLDBDMTA1NiwwLDk2MCwwLDg2NCwwQzc2OCwwLDY3MiwwLDU3NiwwQzQ4MCwwLDM4NCwwLDI4OCwwQzE5MiwwLDk2LDAsNDgsMEwwLDBaXFxcIj48L3BhdGg+PC9zdmc+XFxyXFxuICA8L2Rpdj4gXFxyXFxuXFxyXFxuICAgIFxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImdyaWRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJncmlkLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcGNpb25cXFwiPlxcclxcbiAgICAgICAgICAgIDxwcmU+RXN0YXMgc29uIGxhcyBlbXByZXNhc1xcclxcbmNvbiBsYXMgcXVlIHRyYWJhamFtb3MgXFxyXFxubyB0ZW5lbW9zIHJlbGFjaW9uLlxcclxcbiAgICAgICAgICAgIDwvcHJlPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJncmlkLWljb25vc1xcXCI+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaWNvbm9zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTEyIDUxMlxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRjQ0MzM2O1xcXCIgcG9pbnRzPVxcXCIwLDMyIDAsNDgwIDIuODQ4LDQ4MCAxODQuMDk2LDMyICBcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRjQ0MzM2O1xcXCIgcG9pbnRzPVxcXCI1MTIsMzIgMzI1LjEyLDMyIDUxMiw0ODAgIFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHN0eWxlPVxcXCJmaWxsOiNGNDQzMzY7XFxcIiBwb2ludHM9XFxcIjMwMi45NzYsNDgwIDM4MC40MTYsNDgwIDI1NS43NDQsMTkwLjgxNiAxNzMuMzc2LDM5Mi42NzIgMjY1LjQwOCwzOTIuNjcyICBcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgIDxwPkFkb2JlIG5vcyBicmluZGEgZGlmZXJlbnRlIGhlcnJhbWllbnRhcyB5IHJlY3Vyc29zIGNvbiBsb3MgY3VhbGVzIHB1ZWRvIHJlYWxpemFyIGxvcyBwcm95ZWN0b3M8L3A+XFxyXFxuICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29ub3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cXFwiZmlsbDojMzMzMzMzO1xcXCIgZD1cXFwiTTUxMiwyNTZjMCw0NS4zMjgtMTEuNzc2LDg3Ljg5Ny0zMi40NDQsMTI0LjgzNGMtMS4wMTQsMS43OTctMi4wMzgsMy41OTQtMy4wOTMsNS4zNzEgIEM0MzEuODk4LDQ2MS41LDM0OS44NDIsNTEyLDI1Niw1MTJjLTkzLjM1MSwwLTE3NS4wMzEtNDkuOTY3LTIxOS43NTItMTI0LjYxNWMtNC41MjQtNy41NDQtOC42NzMtMTUuMzM5LTEyLjQxMy0yMy4zNjQgIEM4LjUzNywzMzEuMjAxLDAsMjk0LjU5OSwwLDI1NkMwLDExNC42MTUsMTE0LjYxNSwwLDI1NiwwYzgzLjg4NCwwLDE1OC4zNDQsNDAuMzQ0LDIwNS4wMywxMDIuNjgyICBjNC4wMzMsNS4zOTIsNy44NjgsMTAuOTQsMTEuNDYzLDE2LjY0NWMwLjI2MSwwLjM4NywwLjUxMiwwLjc4NCwwLjc1MiwxLjE4MWM2LjQxNiwxMC4yNjEsMTIuMTIxLDIxLjAxMywxNy4wNTMsMzIuMTgzICBDNTA0LjI0NywxODQuMjg5LDUxMiwyMTkuMjQsNTEyLDI1NnpcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxnPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGMkYyRjI7XFxcIiBkPVxcXCJNMTcyLjE3MywyMzkuMjM2bDYwLjg2MywzNC42OGMtMTguNDU0LDMyLjMyOC01My4yNTYsNTQuMTItOTMuMTUsNTQuMTIgICBjLTU5LjIwMSwwLTEwNy4xOTQtNDcuOTk0LTEwNy4xOTQtMTA3LjE5NHM0Ny45OTQtMTA3LjE5NCwxMDcuMTk0LTEwNy4xOTRjNDAuMjAzLDAsNzUuMjM3LDIyLjEzMyw5My41ODIsNTQuODgybC02MS4xNSwzNC4xOCAgIGMtNi4zNTgtMTEuMzUzLTE4LjQ5Ny0xOS4wMjEtMzIuNDMzLTE5LjAyMWMtMjAuNTE5LDAtMzcuMTUyLDE2LjYzNC0zNy4xNTIsMzcuMTUyczE2LjYzNCwzNy4xNTIsMzcuMTUyLDM3LjE1MiAgIEMxNTMuNzEzLDI1Ny45OTUsMTY1Ljc3OCwyNTAuNDQyLDE3Mi4xNzMsMjM5LjIzNnpcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cXFwiZmlsbDojRjJGMkYyO1xcXCIgZD1cXFwiTTQxLjksMzc0LjU1NGw4LjgxOSw1LjAyNmMtMi42NzUsNC42ODEtNy43MTEsNy44MzctMTMuNDksNy44MzdjLTAuMzM0LDAtMC42NTgtMC4wMS0wLjk4Mi0wLjAzMSAgIGMtNC41MjQtNy41NDQtOC42NzMtMTUuMzM5LTEyLjQxMy0yMy4zNjRjMi42OTYtNC41ODcsNy42OS03LjY3LDEzLjM5Ni03LjY3YzUuODIsMCwxMC44OTgsMy4yMDgsMTMuNTUyLDcuOTUybC04Ljg2MSw0Ljk1MyAgIGMtMC45Mi0xLjY0MS0yLjY3NS0yLjc0OC00LjY5Mi0yLjc0OGMtMi45NzgsMC01LjM4MSwyLjQwMy01LjM4MSw1LjM4MWMwLDIuOTY3LDIuNDAzLDUuMzgxLDUuMzgxLDUuMzgxICAgQzM5LjIyNSwzNzcuMjcxLDQwLjk4MSwzNzYuMTc0LDQxLjksMzc0LjU1NHpcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCB4PVxcXCIyNTAuNzM0XFxcIiB5PVxcXCIxMDIuNjgyXFxcIiBzdHlsZT1cXFwiZmlsbDojRjJGMkYyO1xcXCIgd2lkdGg9XFxcIjIzOS41NjRcXFwiIGhlaWdodD1cXFwiMjM3LjEyOVxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gc3R5bGU9XFxcImZpbGw6IzMzMzMzMztcXFwiIHBvaW50cz1cXFwiNDA0LjYyNCwxMTkuMzMyIDQwNC42MjQsMjAzLjc4OSAzMzYuODE2LDExOS4zMzIgMjY4LjE5NSwxMTkuMzMyIDI2OC4xOTUsMzIyLjc1NyAgIDMzNi44MTYsMzIyLjc1NyAzMzYuODE2LDIzOC4zMDEgNDA0LjYyNCwzMjIuNzU3IDQ3My4yNDUsMzIyLjc1NyA0NzMuMjQ1LDExOS4zMzIgXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8Zz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRjJGMkYyO1xcXCIgcG9pbnRzPVxcXCIyMzIuOTg2LDM1Ny4yNyAyMzIuOTg2LDM2OS40MDggMjIzLjI0MSwzNTcuMjcgMjEzLjM4LDM1Ny4yNyAyMTMuMzgsMzg2LjUwNiAgICAyMjMuMjQxLDM4Ni41MDYgMjIzLjI0MSwzNzQuMzY4IDIzMi45ODYsMzg2LjUwNiAyNDIuODQ4LDM4Ni41MDYgMjQyLjg0OCwzNTcuMjcgIFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHN0eWxlPVxcXCJmaWxsOiNGMkYyRjI7XFxcIiBwb2ludHM9XFxcIjI4MS4yMzgsMzU3LjI3IDI4MS4yMzgsMzY5LjQwOCAyNzEuNDk0LDM1Ny4yNyAyNjEuNjMyLDM1Ny4yNyAyNjEuNjMyLDM4Ni41MDYgICAgMjcxLjQ5NCwzODYuNTA2IDI3MS40OTQsMzc0LjM2OCAyODEuMjM4LDM4Ni41MDYgMjkxLjEsMzg2LjUwNiAyOTEuMSwzNTcuMjcgIFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVxcXCJmaWxsOiNGMkYyRjI7XFxcIiBkPVxcXCJNNzQuNjE2LDM1Ny4xNjdINjAuMTAzbC05LjM0MSwyOS4zNDFINjEuMjFsMS4zNDgtNC43NzVoOS4zNzNsMS4zNjksNC43NzVoMTAuMzU1TDc0LjYxNiwzNTcuMTY3eiAgICBNNjQuNjksMzc0LjIybDIuNTE4LTguOTIzbDIuNTYsOC45MjNINjQuNjl6XFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XFxcImZpbGw6I0YyRjJGMjtcXFwiIGQ9XFxcIk0xMDguNzc0LDM3Ni43NTljMy4yOTEtMS43NDUsNS41MjgtNS4yMDQsNS41MjgtOS4xODVjMC0yLjg3My0xLjE2LTUuNDc1LTMuMDQxLTcuMzU2ICAgYy0xLjg5MS0xLjg5MS00LjQ4My0zLjA1MS03LjM1Ni0zLjA1MUg4Ni41OTF2MjkuMzQxaDkuNTV2LTguNTI2aDMuMTM1bDMuOTYsOC41MjZoMTEuMjc0TDEwOC43NzQsMzc2Ljc1OXogTTEwMS45MTksMzcwLjQ2OSAgIGgtNS43Nzh2LTQuODY5aDUuNzc4YzAuNjc5LDAsMS4yODUsMC4yNzIsMS43MjQsMC43MTFjMC40MzksMC40MzksMC43MjEsMS4wNDUsMC43MjEsMS43MjQgICBDMTA0LjM2NCwzNjkuMzgyLDEwMy4yNjcsMzcwLjQ2OSwxMDEuOTE5LDM3MC40Njl6XFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XFxcImZpbGw6I0YyRjJGMjtcXFwiIGQ9XFxcIk00NDUuMzA0LDM3Ni43NTljMy4yOTEtMS43NDUsNS41MjctNS4yMDQsNS41MjctOS4xODVjMC0yLjg3My0xLjE2LTUuNDc1LTMuMDQxLTcuMzU2ICAgYy0xLjg5MS0xLjg5MS00LjQ4My0zLjA1MS03LjM1Ni0zLjA1MWgtMTcuMzE0djI5LjM0MWg5LjU1di04LjUyNmgzLjEzNWwzLjk2LDguNTI2aDExLjI3NEw0NDUuMzA0LDM3Ni43NTl6IE00MzguNDUsMzcwLjQ2OSAgIGgtNS43Nzh2LTQuODY5aDUuNzc4YzAuNjc5LDAsMS4yODUsMC4yNzIsMS43MjQsMC43MTFjMC40MzksMC40MzksMC43MTEsMS4wNDUsMC43MTEsMS43MjQgICBDNDQwLjg4NCwzNjkuMzgyLDQzOS43OTgsMzcwLjQ2OSw0MzguNDUsMzcwLjQ2OXpcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRjJGMkYyO1xcXCIgcG9pbnRzPVxcXCIxNDUuODI1LDM1Ny4xNjkgMTM3LjA0NSwzNTcuMTY5IDEyNS45OCwzNTcuMTY5IDExNi43NDIsMzU3LjE2OSAxMTYuNzQyLDM2NS45NDkgICAgMTI1Ljk4LDM2NS45NDkgMTI1Ljk4LDM4Ni41MDYgMTM3LjA0NSwzODYuNTA2IDEzNy4wNDUsMzY1Ljk0OSAxNDUuODI1LDM2NS45NDkgIFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHN0eWxlPVxcXCJmaWxsOiNGMkYyRjI7XFxcIiBwb2ludHM9XFxcIjM1Mi42MDEsMzU3LjE2OSAzNDMuODE5LDM1Ny4xNjkgMzMyLjc1NSwzNTcuMTY5IDMyMy41MTgsMzU3LjE2OSAzMjMuNTE4LDM2NS45NDkgICAgMzMyLjc1NSwzNjUuOTQ5IDMzMi43NTUsMzg2LjUwNiAzNDMuODE5LDM4Ni41MDYgMzQzLjgxOSwzNjUuOTQ5IDM1Mi42MDEsMzY1Ljk0OSAgXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3R5bGU9XFxcImZpbGw6I0YyRjJGMjtcXFwiIGQ9XFxcIk0xNjIuNTIzLDM1Ni42MzRjLTguMzE3LDAtMTUuMDU3LDYuNzI5LTE1LjA1NywxNS4wNTdjMCw4LjMwNyw2Ljc0LDE1LjA1NywxNS4wNTcsMTUuMDU3ICAgYzguMzE3LDAsMTUuMDU3LTYuNzUsMTUuMDU3LTE1LjA1N0MxNzcuNTgsMzYzLjM2MywxNzAuODQxLDM1Ni42MzQsMTYyLjUyMywzNTYuNjM0eiBNMTYyLjUyMywzNzcuMTY2ICAgYy0zLjAyLDAtNS40NzUtMi40NTYtNS40NzUtNS40NzVjMC0zLjAzLDIuNDU2LTUuNDg2LDUuNDc1LTUuNDg2YzMuMDMsMCw1LjQ4NiwyLjQ1Niw1LjQ4Niw1LjQ4NiAgIEMxNjguMDA5LDM3NC43MTEsMTY1LjU1NCwzNzcuMTY2LDE2Mi41MjMsMzc3LjE2NnpcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cXFwiZmlsbDojRjJGMkYyO1xcXCIgZD1cXFwiTTE5NS4yMDgsMzU2LjYzNGMtOC4zMTcsMC0xNS4wNTcsNi43MjktMTUuMDU3LDE1LjA1N2MwLDguMzA3LDYuNzQsMTUuMDU3LDE1LjA1NywxNS4wNTcgICBjOC4zMDcsMCwxNS4wNTctNi43NSwxNS4wNTctMTUuMDU3QzIxMC4yNjUsMzYzLjM2MywyMDMuNTE1LDM1Ni42MzQsMTk1LjIwOCwzNTYuNjM0eiBNMTk1LjIwOCwzNzcuMTY2ICAgYy0zLjAzLDAtNS40ODYtMi40NTYtNS40ODYtNS40NzVjMC0zLjAzLDIuNDU2LTUuNDg2LDUuNDg2LTUuNDg2YzMuMDIsMCw1LjQ3NSwyLjQ1Niw1LjQ3NSw1LjQ4NiAgIEMyMDAuNjgzLDM3NC43MTEsMTk4LjIyOCwzNzcuMTY2LDE5NS4yMDgsMzc3LjE2NnpcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cXFwiZmlsbDojRjJGMkYyO1xcXCIgZD1cXFwiTTQwNS4wOTYsMzU2LjYzNGMtOC4zMTcsMC0xNS4wNTcsNi43MjktMTUuMDU3LDE1LjA1N2MwLDguMzA3LDYuNzQsMTUuMDU3LDE1LjA1NywxNS4wNTcgICBjOC4zMDcsMCwxNS4wNTctNi43NSwxNS4wNTctMTUuMDU3QzQyMC4xNTMsMzYzLjM2Myw0MTMuNDAzLDM1Ni42MzQsNDA1LjA5NiwzNTYuNjM0eiBNNDA1LjA5NiwzNzcuMTY2ICAgYy0zLjAzLDAtNS40ODYtMi40NTYtNS40ODYtNS40NzVjMC0zLjAzLDIuNDU2LTUuNDg2LDUuNDg2LTUuNDg2YzMuMDIsMCw1LjQ3NSwyLjQ1Niw1LjQ3NSw1LjQ4NiAgIEM0MTAuNTcyLDM3NC43MTEsNDA4LjExNiwzNzcuMTY2LDQwNS4wOTYsMzc3LjE2NnpcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBzdHlsZT1cXFwiZmlsbDojRjJGMkYyO1xcXCIgcG9pbnRzPVxcXCIzMjAuNjc2LDM2NS40OTMgMzIwLjY3NiwzNTcuMjcgMzA0Ljg0MSwzNTcuMjcgMjk0Ljk5MywzNTcuMjcgMjk0Ljk5MywzNjUuNDkzICAgIDI5NC45OTMsMzY4LjE4MyAyOTQuOTkzLDM3NS41OTMgMjk0Ljk5MywzNzguMjgzIDI5NC45OTMsMzg2LjUwNiAzMDQuODQxLDM4Ni41MDYgMzIwLjY3NiwzODYuNTA2IDMyMC42NzYsMzc4LjI4MyAgICAzMDQuODQxLDM3OC4yODMgMzA0Ljg0MSwzNzUuNTkzIDMxOC4xMzgsMzc1LjU5MyAzMTguMTM4LDM2OC4xODMgMzA0Ljg0MSwzNjguMTgzIDMwNC44NDEsMzY1LjQ5MyAgXFxcIi8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gc3R5bGU9XFxcImZpbGw6I0YyRjJGMjtcXFwiIHBvaW50cz1cXFwiMzcyLjA5LDM3OC43NCAzNzUuMjg4LDM4Ni41MDYgMzgzLjM1NywzODYuNTA2IDM4OS4xNDQsMzU3LjE2OSAzNzkuMDk0LDM1Ny4xNjkgICAgMzc2LjgxLDM2OS40NTIgMzcyLjA5LDM1OC4zMzYgMzY3LjM3LDM2OS40NTIgMzY1LjA4NiwzNTcuMTY5IDM1NS4wMzYsMzU3LjE2OSAzNjAuODIzLDM4Ni41MDYgMzY4Ljg5MywzODYuNTA2ICBcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cXFwiZmlsbDojRjJGMkYyO1xcXCIgZD1cXFwiTTQ3Mi4yODMsMzcxLjQzbDcuMjcyLDkuNDA0Yy0xLjAxNCwxLjc5Ny0yLjAzOCwzLjU5NC0zLjA5Myw1LjM3MWgtNS4yNDVsLTcuNDYxLTEwLjE5OHYxMC4xOTggICBoLTkuNzQ5di0yOS4yMzZoOS43NDl2OS45NzlsNy40NjEtOS45NzloMTIuNDg3TDQ3Mi4yODMsMzcxLjQzelxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD5DYXJ0b29uIE5ldHdvcmsgZXMgdW5hIHJlY29ub2NpZGEgY2FkZW5hIGRlIHRlbGV2aXNpb24gY29uIGxhIGN1YWwgaGUgdHJhYmFqYWRvIGVuIGFuaW1hY2lvbiB5IGRpYnVqbzwvcD5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29ub3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIuMDIxIDUxMi4wMjFcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMjEgNTEyLjAyMTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0eWxlPVxcXCJmaWxsOiNkNmEyMDY7XFxcIiBkPVxcXCJNMjU2LDAuMDExYy0xNDEuMzg1LDAtMjU2LDExNC42MTUtMjU2LDI1NnMxMTQuNjE1LDI1NiwyNTYsMjU2YzIuNDUzLDAsNC44NjQtMC4xNzEsNy4yNzUtMC4zMiAgIGwzLjgxOS0wLjIzNWM1Ljg5MSwwLDEwLjY2Ny00Ljc3NiwxMC42NjctMTAuNjY3YzAtNS44OTEtNC43NzYtMTAuNjY3LTEwLjY2Ny0xMC42NjcgICBjLTExNy42MDYtNS41NzMtMjA4LjQyNy0xMDUuNDMtMjAyLjg1NC0yMjMuMDM2QzY5LjgxMywxNDkuNDgsMTY5LjY2OSw1OC42NTksMjg3LjI3Niw2NC4yMzMgICBjMTA5LjgzNyw1LjIwNSwxOTcuNjk1LDkzLjA5NywyMDIuODU4LDIwMi45MzVjMC4yNjIsNS42OTksNC45NjIsMTAuMTgyLDEwLjY2NywxMC4xNzZsMCwwYzUuNzIsMC4wMDUsMTAuNDI2LTQuNTAzLDEwLjY2Ny0xMC4yMTkgICBsMC4yMzUtMy43MTJjMC4xNzEtMi40NTMsMC4zMi00LjkwNywwLjMyLTcuNDI0QzUxMS44NTcsMTE0LjY2OCwzOTcuMzIyLDAuMTUyLDI1NiwwLjAxMXpcXFwiLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHlsZT1cXFwiZmlsbDojZDZhMjA2O1xcXCIgZD1cXFwiTTQ3My43OTIsMjMzLjg2N2MtNC40NjItMC40MjQtOC42OTQsMi4wNjEtMTAuNDk2LDYuMTY1Yy0xNC43MDksMzIuMTQtNTIuNjg4LDQ2LjI3Mi04NC44MjgsMzEuNTYzICAgcy00Ni4yNzItNTIuNjg4LTMxLjU2My04NC44MjhjOC41MzktMTguNjU5LDI1LjUwNy0zMi4wOTIsNDUuNjI4LTM2LjEyMWM1Ljc3NS0xLjE2NCw5LjUxMy02Ljc4OSw4LjM0OS0xMi41NjQgICBjLTAuNjEtMy4wMjktMi41MDQtNS42NDUtNS4xOTItNy4xN2MtODkuOTM3LTUwLjk3LTIwNC4xNjQtMTkuMzgxLTI1NS4xMzQsNzAuNTU2cy0xOS4zODEsMjA0LjE2NSw3MC41NTYsMjU1LjEzNCAgIHMyMDQuMTY0LDE5LjM4MSwyNTUuMTM0LTcwLjU1NmMyNC44ODUtNDMuOTEsMzAuOTgzLTk2LjAwOSwxNi45MTEtMTQ0LjQ3OEM0ODEuOTQsMjM3LjMwNCw0NzguMjExLDIzNC4yMzcsNDczLjc5MiwyMzMuODY3elxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cD5DaHJ1bmNoeXJvbGwgZXMgbGEgZW1wcmVzYSBkaXN0cnVidWlkb3JhIG1hcyBncmFuZGUgZGUgYW5pbWUsIGhlIGNvbGFib3JhZG8gZW4gZWwgZGVzYXJyb2xsbyBkZSBkaXN0aW50b3MgYW5pbWVzPC9wPlxcclxcbiAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpY29ub3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgIHZpZXdCb3g9XFxcIi0yIDAgMzg0IDM4NC4yNDhcXFwiPjxwYXRoIGQ9XFxcIm0zNjMuNjkxNDA2IDMwNC4yNDYwOTRjMCAzNS4zNDc2NTYtMjguNjUyMzQ0IDY0LTY0IDY0LTM1LjM0Mzc1IDAtNjQtMjguNjUyMzQ0LTY0LTY0IDAtMzUuMzQzNzUgMjguNjU2MjUtNjQgNjQtNjQgMzUuMzQ3NjU2IDAgNjQgMjguNjU2MjUgNjQgNjR6bTAgMFxcXCIgZmlsbD1cXFwiI2NjZTRmZlxcXCIvPjxwYXRoIGQ9XFxcIm0yMzUuNjkxNDA2IDE2LjI0NjA5NGgxMjh2MTI4aC0xMjh6bTAgMFxcXCIgZmlsbD1cXFwiI2NjZTRmZlxcXCIvPjxwYXRoIGQ9XFxcIm0yNy42OTE0MDYgMTQ0LjI0NjA5NGgxMjhsLTY0LTExMnptMCAwXFxcIiBmaWxsPVxcXCIjY2NlNGZmXFxcIi8+PGcgZmlsbD1cXFwiIzAwN2FmZlxcXCI+PHBhdGggZD1cXFwibTI5OS42OTE0MDYgMjI0LjI0NjA5NGMtNDQuMTEzMjgxIDAtODAgMzUuODkwNjI1LTgwIDgwIDAgNDQuMTEzMjgxIDM1Ljg4NjcxOSA4MCA4MCA4MCA0NC4xMTMyODIgMCA4MC0zNS44ODY3MTkgODAtODAgMC00NC4xMDkzNzUtMzUuODg2NzE4LTgwLTgwLTgwem0wIDEyOGMtMjYuNDcyNjU2IDAtNDgtMjEuNTI3MzQ0LTQ4LTQ4IDAtMjYuNDY4NzUgMjEuNTI3MzQ0LTQ4IDQ4LTQ4czQ4IDIxLjUzMTI1IDQ4IDQ4YzAgMjYuNDcyNjU2LTIxLjUyNzM0NCA0OC00OCA0OHptMCAwXFxcIi8+PHBhdGggZD1cXFwibS4xMjUgMTYwLjI0NjA5NGgxODMuMTQ0NTMxbC05MS41NzgxMjUtMTYwLjI0NjA5NHptNTUuMTM2NzE5LTMyIDM2LjQyOTY4Ny02My43NSAzNi40MzM1OTQgNjMuNzV6bTAgMFxcXCIvPjxwYXRoIGQ9XFxcIm0yMTkuNjkxNDA2IDE2MC4yNDYwOTRoMTYwdi0xNjBoLTE2MHptMzItMTI4aDk2djk2aC05NnptMCAwXFxcIi8+PHBhdGggZD1cXFwibTM1LjY5MTQwNiAzODIuODc4OTA2IDU2LTU2IDU2IDU2IDIyLjYzMjgxMy0yMi42MzI4MTItNTYtNTYgNTYtNTYtMjIuNjMyODEzLTIyLjYyODkwNi01NiA1Ni01Ni01Ni0yMi42MzI4MTIgMjIuNjI4OTA2IDU2IDU2LTU2IDU2em0wIDBcXFwiLz48L2c+PC9zdmc+XFxyXFxuICAgICAgICAgICAgICAgIDxwPlBsYXlzdGF0aW9uIHVuYSBkZSBsYXMgZ3JhbmRlcyBlbXByZXNhcyBlbiBjb25zb2xhcyB5IHZpZGVvanVlZ29zLCBzZSByZWFsaXphbiBwcm95ZWN0b3MgcGFyYSBtb2RlbGFkbyAzZDwvcD5cXHJcXG4gICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImN1YWRyb1xcXCI+XFxyXFxuICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiY29uc3QgdmlldyA9IHJlcXVpcmUoJy4vQ2xpZW50ZXMuaHRtbCcpO1xyXG5jb25zdCBzdHlsZT0gcmVxdWlyZSgnLi9jbGllbnRlcy5zY3NzJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2xpZW50ZXNQYWdlQ29udHJvbGxlciB7XHJcbiAgICBcclxuICAgIHZpZXcgPSB2aWV3O1xyXG4gICAgc3R5bGU9c3R5bGU7XHJcbiAgICB2aWV3SWQ6IHN0cmluZyA9IFwiY2xpZW50ZXMtcGFnZVwiXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0VmlldygpOiBbc3RyaW5nLCBEb2N1bWVudEZyYWdtZW50XSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnZpZXdJZCwgZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQodmlldyldO1xyXG4gICAgfVxyXG4gIFxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2xpZW50ZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9mbGVjaGEtaGFjaWEtYXRyYXMuc3ZnXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZmxlY2hhLWhhY2lhLWFiYWpvLnN2Z1wiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3BhcnRpY2lwYWNpb24uc3ZnXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9WaWRlby9BbmltYWNpb24gZmluYWwgLSBHYXRvIEJvbmQubXA0XCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYW5pbWF0aW9uLmdpZlwiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvaW1nL21vZGVsYWRvXzNkLmdpZlwiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2h0bWwuanBnXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fID0gcmVxdWlyZShcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvZ2lmLWh0bWwtNC5naWZcIik7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF81X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzdfX18pO1xudmFyIGNvZGUgPSBcIjxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy4zLjcvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXFxcIj5cXHJcXG5cXHJcXG48c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDE0NDAgMzIwXFxcIiBpZD1cXFwiYWJham9cXFwiPlxcclxcbiAgICA8cGF0aCBmaWxsPVxcXCIjZmZmXFxcIiBmaWxsLW9wYWNpdHk9XFxcIjFcXFwiIGQ9XFxcIk0wLDIyNEwzMCwyNDBDNjAsMjU2LDEyMCwyODgsMTgwLDI4OEMyNDAsMjg4LDMwMCwyNTYsMzYwLDI0MEM0MjAsMjI0LDQ4MCwyMjQsNTQwLDIxOC43QzYwMCwyMTMsNjYwLDIwMyw3MjAsMjE4LjdDNzgwLDIzNSw4NDAsMjc3LDkwMCwyOTguN0M5NjAsMzIwLDEwMjAsMzIwLDEwODAsMjgyLjdDMTE0MCwyNDUsMTIwMCwxNzEsMTI2MCwxNTQuN0MxMzIwLDEzOSwxMzgwLDE4MSwxNDEwLDIwMi43TDE0NDAsMjI0TDE0NDAsMzIwTDE0MTAsMzIwQzEzODAsMzIwLDEzMjAsMzIwLDEyNjAsMzIwQzEyMDAsMzIwLDExNDAsMzIwLDEwODAsMzIwQzEwMjAsMzIwLDk2MCwzMjAsOTAwLDMyMEM4NDAsMzIwLDc4MCwzMjAsNzIwLDMyMEM2NjAsMzIwLDYwMCwzMjAsNTQwLDMyMEM0ODAsMzIwLDQyMCwzMjAsMzYwLDMyMEMzMDAsMzIwLDI0MCwzMjAsMTgwLDMyMEMxMjAsMzIwLDYwLDMyMCwzMCwzMjBMMCwzMjBaXFxcIj48L3BhdGg+XFxyXFxuICA8L3N2Zz5cXHJcXG48c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDE0NDAgMzIwXFxcIiBpZD1cXFwiYXJyaWJhXFxcIj5cXHJcXG4gICAgPHBhdGggZmlsbD1cXFwiI2ZmZlxcXCIgZmlsbC1vcGFjaXR5PVxcXCIxXFxcIiBkPVxcXCJNMCwxNjBMNjAsMTY1LjNDMTIwLDE3MSwyNDAsMTgxLDM2MCwxNjBDNDgwLDEzOSw2MDAsODUsNzIwLDY0Qzg0MCw0Myw5NjAsNTMsMTA4MCw3NC43QzEyMDAsOTYsMTMyMCwxMjgsMTM4MCwxNDRMMTQ0MCwxNjBMMTQ0MCwwTDEzODAsMEMxMzIwLDAsMTIwMCwwLDEwODAsMEM5NjAsMCw4NDAsMCw3MjAsMEM2MDAsMCw0ODAsMCwzNjAsMEMyNDAsMCwxMjAsMCw2MCwwTDAsMFpcXFwiPjwvcGF0aD5cXHJcXG48L3N2Zz5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJ0ZXh0XFxcIj5cXHJcXG4gICAgTWlzIEhhYmlsaWRhZGVzXFxyXFxuPC9kaXY+XFxyXFxuPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCIgaWQ9XFxcImZsZWNoYVxcXCI+XFxyXFxuPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCIgaWQ9XFxcImZsZWNoYTJcXFwiPlxcclxcbjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiIGlkPVxcXCJmbGVjaGEzXFxcIj5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJwcm95ZWN0b3MxXFxcIj5cXHJcXG4gICAgPHZpZGVvIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGNvbnRyb2xzPjwvdmlkZW8+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwicHJveWVjdG9zMlxcXCIgPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGlkPVxcXCJwcm95ZWN0b3MzXFxcIiA+XFxyXFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzVfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcInByb3llY3RvczRcXFwiID5cXHJcXG4gICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBpZD1cXFwicHJveWVjdG9zNVxcXCIgPlxcclxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGlkPVxcXCJ0ZXh0MlxcXCI+Q29ub2NpbWllbnRvcyBlbiBhbmltYWNpb24gMkQ8L2Rpdj5cXHJcXG48ZGl2IGlkPVxcXCJ0ZXh0M1xcXCI+Q29ub2NpbWllbnRvcyBlbiBNb2RlbGFkbyAzRDwvZGl2PlxcclxcbjxkaXYgaWQ9XFxcInRleHQ0XFxcIj5Db25vY2ltaWVudG9zIGVuIEh0bWwgeSBDc3M8L2Rpdj5cXHJcXG5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJjb25zdCB2aWV3ID0gcmVxdWlyZSgnLi9IYWJpbGlkYWRlc1BhZ2UuaHRtbCcpO1xyXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoJy4vSGFiaWxpZGFkZXNQYWdlU3R5bGUuc2NzcycpO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBIYWJpbGlkYWRlc1BhZ2VDb250cm9sbGVyIHtcclxuXHJcbiAgICB2aWV3ID0gdmlldztcclxuICAgIHZpZXdJZDogc3RyaW5nID0gXCJIYWJpbGlkYWRlcy1wYWdlXCJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFZpZXcoKTogW3N0cmluZywgRG9jdW1lbnRGcmFnbWVudF0ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy52aWV3SWQsIGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHZpZXcpXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgIEVuIGVzdGEgZnVuY2lvbiBzZWxlY2Npb25hbW9zIGxvcyBpZHMgZGUgY2FkYSBlbGVtZW50byB5IGxvIGNndWFyZGFtb3MgZW4gc3VcclxuICAgICAgICByZXNwZWN0aXZhIHZhcmlhYmxlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBhbmltYWNpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxlY2hhJyk7XHJcbiAgICAgICAgbGV0IGFuaW1hY2lvbjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxlY2hhMicpO1xyXG4gICAgICAgIGxldCBhbmltYWNpb24xXzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxlY2hhMycpO1xyXG5cclxuICAgICAgICBsZXQgYW5pbWFjaW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm95ZWN0b3MxJyk7XHJcbiAgICAgICAgbGV0IGFuaW1hY2lvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJveWVjdG9zMicpO1xyXG4gICAgICAgIGxldCBhbmltYWNpb240ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb3llY3RvczMnKTtcclxuICAgICAgICBsZXQgYW5pbWFjaW9uNSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm95ZWN0b3M0Jyk7XHJcbiAgICAgICAgbGV0IGFuaW1hY2lvbjYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJveWVjdG9zNScpO1xyXG5cclxuICAgICAgICBsZXQgYW5pbWFjaW9udGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0MicpO1xyXG4gICAgICAgIGxldCBhbmltYWNpb250ZXh0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0MycpO1xyXG4gICAgICAgIGxldCBhbmltYWNpb250ZXh0MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0NCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgIEVuIGVzdGEgcGFydGUgc2UgdG9tYXJhIHRyZXMgZWxlbWVudG9zIGNvbW8gcmVmZXJlbmNpYSBwYXJhIG1lZGlyXHJcbiAgICAgICAgbGEgYWx0dXJhIGVuIGxhIGN1YWwgZXN0YW4gcG9zaWNpb25hZG9zIGVuIGxhIHBhbnRhbGxhICAqL1xyXG4gICAgICAgIGxldCBwb3NpdGlvbk9iajEgPSBhbmltYWNpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbk9iajIgPSBhbmltYWNpb24yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgICBsZXQgcG9zaXRpb25PYmozID0gYW5pbWFjaW9uMy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKF86YW55KSA9PntcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBzZSByZWFsaXphIHVuYSBjb21wYXJhY2lvbiBlbnRyZSBsYSBwb3NpY2lvbiBkZWwgb2JqZXRvXHJcbiAgICAgICAgICAgICAqIGNvbnRyYSBsYSBwb3NpY2lvbiBkZWwgc2Nyb2xsLlxyXG4gICAgICAgICAgICAgKiBTaSBsYSBwb3NpY2lvbiBkZWwgc2Nyb2xsIHNvYnJlcGFzYSBsYSBkZWwgb2JqZXRvLCBzZSBpbmNpYWxpemFcclxuICAgICAgICAgICAgICogbGEgYW5pbWFjaW9uLiBcclxuICAgICAgICAgICAgICogXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZigod2luZG93LnNjcm9sbFkrd2luZG93LmlubmVySGVpZ2h0LzIpPj1wb3NpdGlvbk9iajEgKXtcclxuICAgICAgICAgICAgICAgIGFuaW1hY2lvbi5zdHlsZS5hbmltYXRpb24gPSAnbW92ZXIgMnMgZWFzZS1vdXQnO1xyXG4gICAgICAgICAgICAgICAgYW5pbWFjaW9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICBhbmltYWNpb24xLnN0eWxlLmFuaW1hdGlvbiA9ICdtb3ZlcjIgMnMgZWFzZS1vdXQnO1xyXG4gICAgICAgICAgICAgICAgYW5pbWFjaW9uMS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgYW5pbWFjaW9uMV8xLnN0eWxlLmFuaW1hdGlvbiA9ICdtb3ZlcjMgMnMgZWFzZS1vdXQnO1xyXG4gICAgICAgICAgICAgICAgYW5pbWFjaW9uMV8xLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogbG8gbWlzbW8gc3VjZWRlIGVuIGVsIHNpZ3VpZW50ZSBjYXNvLCBwZXJvIGVzdGEgdmV6IGNvbiBtYXMgZWxlbW50b3MgYSBpbmljaWFyXHJcbiAgICAgICAgICAgICAqIGxhIGFuaW1hY2lvbiBkZSBhcGFyZWNlciBlbiBsYSBwYW50YWxsYS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZigod2luZG93LnNjcm9sbFkrd2luZG93LmlubmVySGVpZ2h0LzIpPj1wb3NpdGlvbk9iajIgJiYgKHdpbmRvdy5zY3JvbGxZK3dpbmRvdy5pbm5lckhlaWdodC8yKT49cG9zaXRpb25PYmozICl7XHJcbiAgICAgICAgICAgICAgICBhbmltYWNpb24yLnN0eWxlLmFuaW1hdGlvbiA9ICdhcGFyZWNlciAycyBlYXNlLW91dCc7XHJcbiAgICAgICAgICAgICAgICBhbmltYWNpb24yLnN0eWxlLm9wYWNpdHk9ICcxJztcclxuICAgICAgICAgICAgICAgIGFuaW1hY2lvbjMuc3R5bGUuYW5pbWF0aW9uID0gJ2FwYXJlY2VyIDJzIGVhc2Utb3V0JztcclxuICAgICAgICAgICAgICAgIGFuaW1hY2lvbjMuc3R5bGUub3BhY2l0eT0gJzEnO1xyXG4gICAgICAgICAgICAgICAgYW5pbWFjaW9uNC5zdHlsZS5hbmltYXRpb24gPSAnYXBhcmVjZXIgMnMgZWFzZS1vdXQnO1xyXG4gICAgICAgICAgICAgICAgYW5pbWFjaW9uNC5zdHlsZS5vcGFjaXR5PSAnMSc7XHJcbiAgICAgICAgICAgICAgICBhbmltYWNpb241LnN0eWxlLmFuaW1hdGlvbiA9ICdhcGFyZWNlciAycyBlYXNlLW91dCc7XHJcbiAgICAgICAgICAgICAgICBhbmltYWNpb241LnN0eWxlLm9wYWNpdHk9ICcxJztcclxuICAgICAgICAgICAgICAgIGFuaW1hY2lvbjUuc3R5bGUuYW5pbWF0aW9uID0gJ2FwYXJlY2VyIDJzIGVhc2Utb3V0JztcclxuICAgICAgICAgICAgICAgIGFuaW1hY2lvbjUuc3R5bGUub3BhY2l0eT0gJzEnO1xyXG4gICAgICAgICAgICAgICAgYW5pbWFjaW9uNi5zdHlsZS5hbmltYXRpb24gPSAnYXBhcmVjZXIgMnMgZWFzZS1vdXQnO1xyXG4gICAgICAgICAgICAgICAgYW5pbWFjaW9uNi5zdHlsZS5vcGFjaXR5PSAnMSc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGFuaW1hY2lvbnRleHQuc3R5bGUuYW5pbWF0aW9uID0gJ2FwYXJlY2VyIDJzIGVhc2Utb3V0JztcclxuICAgICAgICAgICAgICAgIGFuaW1hY2lvbnRleHQuc3R5bGUub3BhY2l0eT0gJzEnO1xyXG4gICAgICAgICAgICAgICAgYW5pbWFjaW9udGV4dDIuc3R5bGUuYW5pbWF0aW9uID0gJ2FwYXJlY2VyIDJzIGVhc2Utb3V0JztcclxuICAgICAgICAgICAgICAgIGFuaW1hY2lvbnRleHQyLnN0eWxlLm9wYWNpdHk9ICcxJztcclxuICAgICAgICAgICAgICAgIGFuaW1hY2lvbnRleHQzLnN0eWxlLmFuaW1hdGlvbiA9ICdhcGFyZWNlciAycyBlYXNlLW91dCc7XHJcbiAgICAgICAgICAgICAgICBhbmltYWNpb250ZXh0My5zdHlsZS5vcGFjaXR5PSAnMSc7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9ICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSGFiaWxpZGFkZXNQYWdlU3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy8yNi0yNy5qcGdcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL0F1ZGlvL3Rva3lvLm9nZ1wiKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgY29kZSA9IFwiXFxyXFxuICAgIDxoMT5IZWxsbyBXb3JsZCBBcHAgd2l0aCBXZWJwYWNrICsgVFM8L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhbGdvXFxcIj5cXHJcXG4gICAgICAgIEFxdWkgdmEhIVxcclxcbiAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcImpvZGV0ZVxcXCI+XFxyXFxuICAgICAgICA8YXVkaW8gc3JjPSBcXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGNvbnRyb2xzPjwvYXVkaW8+XFxyXFxuICAgIDwvZGl2PiBcXHJcXG4gICAgPCEtLSA8cD5Db3VudGVyOiA8c3Bhbj48L3NwYW4+PC9wPiAtLT5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCJjb25zdCB2aWV3ID0gcmVxdWlyZSgnLi9Ib21lUGFnZS5odG1sJyk7XHJcbmNvbnN0IHN0eWxlID0gcmVxdWlyZSgnLi9Ib21lUGFnZVN0eWxlLnNjc3MnKTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVBhZ2VDb250cm9sbGVyIHtcclxuXHJcbiAgICB2aWV3ID0gdmlldztcclxuICAgIHZpZXdJZDogc3RyaW5nID0gXCJob21lLXBhZ2VcIlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBnZXRWaWV3KCk6IFtzdHJpbmcsIERvY3VtZW50RnJhZ21lbnRdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMudmlld0lkLCBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCh2aWV3KV07XHJcbiAgICB9XHJcblxyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZVBhZ2VTdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBcImFzc2V0cy9BdWRpby90b2t5by5vZ2dcIjsiLCJleHBvcnQgZGVmYXVsdCBcImFzc2V0cy9WaWRlby9BbmltYWNpb24gZmluYWwgLSBHYXRvIEJvbmQubXA0XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJhc3NldHMvaW1nLzI2LTI3LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiYXNzZXRzL2ltZy9hbmltYXRpb24uZ2lmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJhc3NldHMvaW1nL2N1c3RvbWVycmVsYXRpb25zX3JlY29sb3JlZC1naWYtc3RpbGwtMTAyNHg2MzcuZ2lmXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJhc3NldHMvaW1nL2ZsZWNoYS1oYWNpYS1hYmFqby5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImFzc2V0cy9pbWcvZmxlY2hhLWhhY2lhLWF0cmFzLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiYXNzZXRzL2ltZy9naWYtaHRtbC00LmdpZlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiYXNzZXRzL2ltZy9odG1sLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiYXNzZXRzL2ltZy9tb2RlbGFkb18zZC5naWZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImFzc2V0cy9pbWcvcGFydGljaXBhY2lvbi5zdmdcIjsiLCJyZXF1aXJlKCcuL2FwcC9hcHAnKTtcclxuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJzsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9