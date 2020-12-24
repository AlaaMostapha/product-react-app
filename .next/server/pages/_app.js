module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./src/network/BaseUrl.js":
/*!********************************!*\
  !*** ./src/network/BaseUrl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/products */ "./src/network/handlers/products.js");


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://fakestoreapi.com/"
}); //interceptors

axiosInstance.interceptors.request.use(request => _handlers_products__WEBPACK_IMPORTED_MODULE_1__["handleRequest"](request));
axiosInstance.interceptors.response.use(response => _handlers_products__WEBPACK_IMPORTED_MODULE_1__["handleResponse"](response), error => _handlers_products__WEBPACK_IMPORTED_MODULE_1__["handleError"](error));
/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

/***/ }),

/***/ "./src/network/api/login.js":
/*!**********************************!*\
  !*** ./src/network/api/login.js ***!
  \**********************************/
/*! exports provided: requestUsersFromApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestUsersFromApi", function() { return requestUsersFromApi; });
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login */ "./src/network/login.js");

const requestUsersFromApi = async () => {
  return await _login__WEBPACK_IMPORTED_MODULE_0__["default"].get("users");
};

/***/ }),

/***/ "./src/network/api/product.js":
/*!************************************!*\
  !*** ./src/network/api/product.js ***!
  \************************************/
/*! exports provided: getSingleProductFromApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProductFromApi", function() { return getSingleProductFromApi; });
/* harmony import */ var _BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseUrl */ "./src/network/BaseUrl.js");
/* harmony import */ var _handlers_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/product */ "./src/network/handlers/product.js");


const getSingleProductFromApi = async id => {
  return await _BaseUrl__WEBPACK_IMPORTED_MODULE_0__["default"].get("products/" + id);
}; //interceptors

_BaseUrl__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.request.use(request => _handlers_product__WEBPACK_IMPORTED_MODULE_1__["handleRequest"](request));
_BaseUrl__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use(response => _handlers_product__WEBPACK_IMPORTED_MODULE_1__["handleResponse"](response), error => _handlers_product__WEBPACK_IMPORTED_MODULE_1__["handleError"](error));

/***/ }),

/***/ "./src/network/api/products.js":
/*!*************************************!*\
  !*** ./src/network/api/products.js ***!
  \*************************************/
/*! exports provided: getProductsFromApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsFromApi", function() { return getProductsFromApi; });
/* harmony import */ var _BaseUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseUrl */ "./src/network/BaseUrl.js");
/* harmony import */ var _handlers_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/products */ "./src/network/handlers/products.js");


const getProductsFromApi = async () => {
  return await _BaseUrl__WEBPACK_IMPORTED_MODULE_0__["default"].get("products");
}; //interceptors

_BaseUrl__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.request.use(request => _handlers_products__WEBPACK_IMPORTED_MODULE_1__["handleRequest"](request));
_BaseUrl__WEBPACK_IMPORTED_MODULE_0__["default"].interceptors.response.use(response => _handlers_products__WEBPACK_IMPORTED_MODULE_1__["handleResponse"](response), error => _handlers_products__WEBPACK_IMPORTED_MODULE_1__["handleError"](error));

/***/ }),

/***/ "./src/network/handlers/login.js":
/*!***************************************!*\
  !*** ./src/network/handlers/login.js ***!
  \***************************************/
/*! exports provided: handleRequest, handleResponse, handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequest", function() { return handleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return handleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const handleRequest = request => {
  return request;
};
const handleResponse = response => {
  return response;
};
const handleError = error => {
  return Promise.reject(_objectSpread({}, error));
};

/***/ }),

/***/ "./src/network/handlers/product.js":
/*!*****************************************!*\
  !*** ./src/network/handlers/product.js ***!
  \*****************************************/
/*! exports provided: handleRequest, handleResponse, handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequest", function() { return handleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return handleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const handleRequest = request => {
  return request;
};
const handleResponse = response => {
  return response;
};
const handleError = error => {
  return Promise.reject(_objectSpread({}, error));
};

/***/ }),

/***/ "./src/network/handlers/products.js":
/*!******************************************!*\
  !*** ./src/network/handlers/products.js ***!
  \******************************************/
/*! exports provided: handleRequest, handleResponse, handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleRequest", function() { return handleRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return handleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const handleRequest = request => {
  return request;
};
const handleResponse = response => {
  return response;
};
const handleError = error => {
  return Promise.reject(_objectSpread({}, error));
};

/***/ }),

/***/ "./src/network/login.js":
/*!******************************!*\
  !*** ./src/network/login.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/login */ "./src/network/handlers/login.js");


const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
}); //interceptors

axiosInstance.interceptors.request.use(request => _handlers_login__WEBPACK_IMPORTED_MODULE_1__["handleRequest"](request));
axiosInstance.interceptors.response.use(response => _handlers_login__WEBPACK_IMPORTED_MODULE_1__["handleResponse"](response), error => _handlers_login__WEBPACK_IMPORTED_MODULE_1__["handleError"](error));
/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store/index.js");
/* harmony import */ var _styles_styles_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.global.scss */ "./src/styles/styles.global.scss");
/* harmony import */ var _styles_styles_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_global_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { Provider } from "react-redux";




class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return (
      /*#__PURE__*/
      // <Provider store={store}>
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, this) // </Provider>

    );
  }

}

/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_2__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./src/redux/actions/actions.js":
/*!**************************************!*\
  !*** ./src/redux/actions/actions.js ***!
  \**************************************/
/*! exports provided: getProducts, showProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showProducts", function() { return showProducts; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/redux/constants/actionTypes.js");
 //PRODUCTS

const getProducts = () => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_REQUEST"]
});
const showProducts = response => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_RESPONSE"],
  payload: {
    products: response
  }
});

/***/ }),

/***/ "./src/redux/actions/login.js":
/*!************************************!*\
  !*** ./src/redux/actions/login.js ***!
  \************************************/
/*! exports provided: requestUsersFromApi, getUsersFromApi, checkLoginUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestUsersFromApi", function() { return requestUsersFromApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersFromApi", function() { return getUsersFromApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLoginUser", function() { return checkLoginUser; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/redux/constants/actionTypes.js");

const requestUsersFromApi = () => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["REQUEST_USERS_FROM_FAKE_API"]
});
const getUsersFromApi = users => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_USERS_FROM_FAKE_API"],
  payload: {
    users: users
  }
});
const checkLoginUser = user => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHECK_LOGIN_USER"],
  payload: {
    user: user
  }
});

/***/ }),

/***/ "./src/redux/actions/product.js":
/*!**************************************!*\
  !*** ./src/redux/actions/product.js ***!
  \**************************************/
/*! exports provided: getSingleProduct, showSingleProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProduct", function() { return getSingleProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSingleProduct", function() { return showSingleProduct; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/redux/constants/actionTypes.js");
 //single product

const getSingleProduct = id => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PREQUEST_SINGLLE_PRODUCT"],
  payload: {
    singleProductId: id
  }
});
const showSingleProduct = response => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_SINGLLE_PRODUCT"],
  payload: {
    singleProduct: response
  }
});

/***/ }),

/***/ "./src/redux/constants/actionTypes.js":
/*!********************************************!*\
  !*** ./src/redux/constants/actionTypes.js ***!
  \********************************************/
/*! exports provided: PRODUCT_REQUEST, PRODUCT_RESPONSE, LOADING, PREQUEST_SINGLLE_PRODUCT, GET_SINGLLE_PRODUCT, ADD_ITEM_TO_CART, DELETE_ITEM_IN_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, REQUEST_USERS_FROM_FAKE_API, GET_USERS_FROM_FAKE_API, CHECK_LOGIN_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_REQUEST", function() { return PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_RESPONSE", function() { return PRODUCT_RESPONSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREQUEST_SINGLLE_PRODUCT", function() { return PREQUEST_SINGLLE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SINGLLE_PRODUCT", function() { return GET_SINGLLE_PRODUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM_TO_CART", function() { return ADD_ITEM_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ITEM_IN_CART", function() { return DELETE_ITEM_IN_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_QUANTITY", function() { return INCREMENT_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_QUANTITY", function() { return DECREMENT_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_USERS_FROM_FAKE_API", function() { return REQUEST_USERS_FROM_FAKE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERS_FROM_FAKE_API", function() { return GET_USERS_FROM_FAKE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_LOGIN_USER", function() { return CHECK_LOGIN_USER; });
//PRODUCTS
const PRODUCT_REQUEST = "PRODUCT_REQUEST";
const PRODUCT_RESPONSE = "PRODUCT_RESPONSE";
const LOADING = "LOADING"; //SINGLE PRODUCT

const PREQUEST_SINGLLE_PRODUCT = "PREQUEST_SINGLLE_PRODUCT";
const GET_SINGLLE_PRODUCT = "GET_SINGLLE_PRODUCT"; //CART

const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const DELETE_ITEM_IN_CART = "DELETE_ITEM_IN_CART"; //quantity

const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
const DECREMENT_QUANTITY = "DECREMENT_QUANTITY"; //login

const REQUEST_USERS_FROM_FAKE_API = "REQUEST_USERS_FROM_FAKE_API";
const GET_USERS_FROM_FAKE_API = "GET_USERS_FROM_FAKE_API";
const CHECK_LOGIN_USER = "CHECK_LOGIN_USER";

/***/ }),

/***/ "./src/redux/reducers/cart.js":
/*!************************************!*\
  !*** ./src/redux/reducers/cart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartReducer; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/redux/constants/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//reducer(action,state) //return update state

const initState = {
  cart: [],
  itemsNum: 0
};
function cartReducer(state = initState, action) {
  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_ITEM_TO_CART"]:
      {
        let newItem = action.payload.newItem;
        let existItem = state.cart.find(item => item.id === newItem.id); //check if item exist in cart or not

        if (!existItem) {
          newItem.quantity = 1; //if not exist add it with q = 1

          return _objectSpread(_objectSpread({}, state), {}, {
            cartLoader: false,
            newItem,
            itemsNum: state.itemsNum + 1,
            //inc no of items to badge no
            cart: [...state.cart, newItem] //reload cart

          });
        } else {
          newItem.quantity += 1; //if item is already exit in cart //inc it's quantity

          return _objectSpread(_objectSpread({}, state), {}, {
            cartLoader: false,
            newItem,
            itemsNum: state.itemsNum,
            cart: [...state.cart] //reload cart

          });
        }
      }

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_ITEM_IN_CART"]:
      {
        let deletedItem = action.payload.deletedItem;
        deletedItem.quantity = 0; //set quantity of deleted item to 0

        return _objectSpread(_objectSpread({}, state), {}, {
          deletedItem,
          itemsNum: state.itemsNum - 1,
          cart: state.cart.filter(item => item.id !== deletedItem.id) //filter cart after delete item

        });
      }

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_QUANTITY"]:
      {
        let item = action.payload.item;
        let newCart = JSON.parse(JSON.stringify(state.cart)); //deep copy

        let index = newCart.findIndex(itemx => itemx.id === item.id); // find this item in cart

        item.quantity = ++item.quantity; //inc it's q

        newCart.splice(index, 1, item); //replace it with new item

        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...newCart]
        });
      }

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_QUANTITY"]:
      {
        let item = action.payload.item;
        let newCart = JSON.parse(JSON.stringify(state.cart)); //deep copy

        let index = state.cart.indexOf(item); // find this item in cart

        item.quantity = --item.quantity; //dec its quantity

        if (action.payload.item.quantity === 0) {
          //if q=0
          newCart = newCart.filter(product => product.id !== action.payload.item.id //delete this item
          );
          state.itemsNum = state.itemsNum - 1; //dec no of items in badge
        } else {
          newCart.splice(index, 1, item); //else dec it's quantity
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...newCart]
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./src/redux/reducers/products.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "./src/redux/reducers/product.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart */ "./src/redux/reducers/cart.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./src/redux/reducers/login.js");





const rootReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  productsReducer: _products__WEBPACK_IMPORTED_MODULE_1__["default"],
  singleProductReducer: _product__WEBPACK_IMPORTED_MODULE_2__["default"],
  cartReducer: _cart__WEBPACK_IMPORTED_MODULE_3__["default"],
  loginReducer: _login__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducers);

/***/ }),

/***/ "./src/redux/reducers/login.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/login.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loginReducer; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/redux/constants/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function loginReducer(state = {}, action) {
  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_USERS_FROM_FAKE_API"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          users: action.payload.users
        });
      }

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["CHECK_LOGIN_USER"]:
      {
        let users = JSON.parse(JSON.stringify(state.users)); //deep copy

        let found = users.find(user => user.email === action.payload.user.email); //check for this user in api array

        let check = false;
        if (found) check = true;
        return _objectSpread(_objectSpread({}, state), {}, {
          user: action.payload.user,
          check: check
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/product.js":
/*!***************************************!*\
  !*** ./src/redux/reducers/product.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return singleProductReducer; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/redux/constants/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//reducer(action,state) //return update state

function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PREQUEST_SINGLLE_PRODUCT"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          singleProductloader: true,
          id: action.payload.singleProductId
        });
      }

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["GET_SINGLLE_PRODUCT"]:
      {
        return {
          singleProductloader: false,
          singleProduct: action.payload.singleProduct
        };
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/products.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/products.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productsReducer; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/redux/constants/actionTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//reducer(action,state) //return update state

function productsReducer(state = {}, action) {
  switch (action.type) {
    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_REQUEST"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loader: true
        });
      }

    case _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_RESPONSE"]:
      {
        return {
          products: action.payload.products,
          loader: false
        };
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/saga/index.js":
/*!*********************************!*\
  !*** ./src/redux/saga/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./src/redux/saga/products.js");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ "./src/redux/saga/product.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/redux/saga/login.js");
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/redux/constants/actionTypes.js");







function* watchAll() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__["PRODUCT_REQUEST"], _products__WEBPACK_IMPORTED_MODULE_1__["handlGetProducts"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__["PREQUEST_SINGLLE_PRODUCT"], _product__WEBPACK_IMPORTED_MODULE_2__["handlGetSingleProduct"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__["REQUEST_USERS_FROM_FAKE_API"], _login__WEBPACK_IMPORTED_MODULE_3__["handlGetUsers"])]);
}

/* harmony default export */ __webpack_exports__["default"] = (watchAll);

/***/ }),

/***/ "./src/redux/saga/login.js":
/*!*********************************!*\
  !*** ./src/redux/saga/login.js ***!
  \*********************************/
/*! exports provided: handlGetUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlGetUsers", function() { return handlGetUsers; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_api_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../network/api/login */ "./src/network/api/login.js");
/* harmony import */ var _actions_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/login */ "./src/redux/actions/login.js");




function* handlGetUsers(action) {
  const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_network_api_login__WEBPACK_IMPORTED_MODULE_1__["requestUsersFromApi"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_login__WEBPACK_IMPORTED_MODULE_2__["getUsersFromApi"])(response.data));
}



/***/ }),

/***/ "./src/redux/saga/product.js":
/*!***********************************!*\
  !*** ./src/redux/saga/product.js ***!
  \***********************************/
/*! exports provided: handlGetSingleProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlGetSingleProduct", function() { return handlGetSingleProduct; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_api_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../network/api/product */ "./src/network/api/product.js");
/* harmony import */ var _actions_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/product */ "./src/redux/actions/product.js");




function* handlGetSingleProduct(action) {
  const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_network_api_product__WEBPACK_IMPORTED_MODULE_1__["getSingleProductFromApi"], action.payload.singleProductId);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_product__WEBPACK_IMPORTED_MODULE_2__["showSingleProduct"])(response.data));
}



/***/ }),

/***/ "./src/redux/saga/products.js":
/*!************************************!*\
  !*** ./src/redux/saga/products.js ***!
  \************************************/
/*! exports provided: handlGetProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlGetProducts", function() { return handlGetProducts; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _network_api_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../network/api/products */ "./src/network/api/products.js");
/* harmony import */ var _actions_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/actions */ "./src/redux/actions/actions.js");




function* handlGetProducts(action) {
  const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_network_api_products__WEBPACK_IMPORTED_MODULE_1__["getProductsFromApi"]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_actions__WEBPACK_IMPORTED_MODULE_2__["showProducts"])(response.data));
}



/***/ }),

/***/ "./src/redux/store/index.js":
/*!**********************************!*\
  !*** ./src/redux/store/index.js ***!
  \**********************************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/index */ "./src/redux/reducers/index.js");
/* harmony import */ var _saga_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../saga/index */ "./src/redux/saga/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);






const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_saga_index__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return store;
};
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "./src/styles/styles.global.scss":
/*!***************************************!*\
  !*** ./src/styles/styles.global.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL0Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvYXBpL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2FwaS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2FwaS9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0d29yay9oYW5kbGVycy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0d29yay9oYW5kbGVycy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2hhbmRsZXJzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY29uc3RhbnRzL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3NhZ2EvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsImF4aW9zSW5zdGFuY2UiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiSGFuZGxlcnMiLCJyZXNwb25zZSIsImVycm9yIiwicmVxdWVzdFVzZXJzRnJvbUFwaSIsImdldCIsImdldFNpbmdsZVByb2R1Y3RGcm9tQXBpIiwiaWQiLCJnZXRQcm9kdWN0c0Zyb21BcGkiLCJoYW5kbGVSZXF1ZXN0IiwiaGFuZGxlUmVzcG9uc2UiLCJoYW5kbGVFcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJNeUFwcCIsInByb3BzIiwid3JhcHBlciIsIndpdGhSZWR1eCIsImdldFByb2R1Y3RzIiwidHlwZSIsImFjdGlvblR5cGUiLCJQUk9EVUNUX1JFUVVFU1QiLCJzaG93UHJvZHVjdHMiLCJwYXlsb2FkIiwicHJvZHVjdHMiLCJSRVFVRVNUX1VTRVJTX0ZST01fRkFLRV9BUEkiLCJnZXRVc2Vyc0Zyb21BcGkiLCJ1c2VycyIsImNoZWNrTG9naW5Vc2VyIiwidXNlciIsImdldFNpbmdsZVByb2R1Y3QiLCJzaW5nbGVQcm9kdWN0SWQiLCJzaG93U2luZ2xlUHJvZHVjdCIsInNpbmdsZVByb2R1Y3QiLCJQUk9EVUNUX1JFU1BPTlNFIiwiTE9BRElORyIsIlBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVCIsIkdFVF9TSU5HTExFX1BST0RVQ1QiLCJBRERfSVRFTV9UT19DQVJUIiwiREVMRVRFX0lURU1fSU5fQ0FSVCIsIklOQ1JFTUVOVF9RVUFOVElUWSIsIkRFQ1JFTUVOVF9RVUFOVElUWSIsIkdFVF9VU0VSU19GUk9NX0ZBS0VfQVBJIiwiQ0hFQ0tfTE9HSU5fVVNFUiIsImluaXRTdGF0ZSIsImNhcnQiLCJpdGVtc051bSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJuZXdJdGVtIiwiZXhpc3RJdGVtIiwiZmluZCIsIml0ZW0iLCJxdWFudGl0eSIsImNhcnRMb2FkZXIiLCJkZWxldGVkSXRlbSIsImZpbHRlciIsIm5ld0NhcnQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJpbmRleCIsImZpbmRJbmRleCIsIml0ZW14Iiwic3BsaWNlIiwiaW5kZXhPZiIsInByb2R1Y3QiLCJyb290UmVkdWNlcnMiLCJjb21iaW5lUmVkdWNlcnMiLCJwcm9kdWN0c1JlZHVjZXIiLCJzaW5nbGVQcm9kdWN0UmVkdWNlciIsImxvZ2luUmVkdWNlciIsImZvdW5kIiwiZW1haWwiLCJjaGVjayIsInNpbmdsZVByb2R1Y3Rsb2FkZXIiLCJsb2FkZXIiLCJ3YXRjaEFsbCIsImFsbCIsInRha2VFdmVyeSIsImFjdGlvblR5cGVzIiwiaGFuZGxHZXRQcm9kdWN0cyIsImhhbmRsR2V0U2luZ2xlUHJvZHVjdCIsImhhbmRsR2V0VXNlcnMiLCJjYWxsIiwicHV0IiwiZGF0YSIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJyZXF1aXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLCtEOzs7Ozs7Ozs7OztBQ0FBLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1Qzs7QUFDQTs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxrQ0FBa0M7QUFBQTtBQUFsQztBQUFrQyxDQUFsQyxFQUd5QztBQUN2QyxRQUFNQSxTQUFTLEdBQUcsTUFBTSwyQ0FBeEIsR0FBd0IsQ0FBeEI7QUFDQSxTQUFPO0FBQVA7QUFBTyxHQUFQO0FBR2E7O0FBQUEsa0JBQTJDQyxlQUFNQyxTQUFqRCxDQUdiO0FBSUE7QUFDQTtBQUNBO0FBQ0FDLG1CQUFpQixvQkFBNEM7QUFDM0Q7QUFHRkM7O0FBQUFBLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBcUQsS0FBM0Q7QUFHQSx3QkFDRSxxRUFHSTtBQUNBO0FBQ0ksTUFBRUMsT0FBTyxJQUFULFdBQXdCO0FBQUVDLFNBQUcsRUFBRUMsU0FBUyxDQUF4QyxNQUF3QztBQUFoQixLQUF4QixHQU5WLEVBQ0UsRUFERjtBQWZGOztBQUFBOzs7QUFIbUJDLEcsQ0FJWkMsbUJBSllELEdBSVVFLGtCQUpWRjtBQUFBQSxHLENBS1pHLGVBTFlILEdBS01FLGtCQUxORjtBQStCckI7QUFDQTs7QUFFQSxVQUEyQztBQUN6Q0ksZUFBYSxHQUFHLHFCQUFTLE1BQU07QUFDN0JDLFdBQU8sQ0FBUEE7QUFERkQsR0FBZ0IsQ0FBaEJBO0FBTUFFLFNBQU8sR0FBRyxxQkFBUyxNQUFNO0FBQ3ZCRCxXQUFPLENBQVBBO0FBREZDLEdBQVUsQ0FBVkE7QUFPRixDLENBQUE7OztBQUNPLHNCQUEyQjtBQUNoQyxZQUEyQ0YsYUFBYTtBQUN4RCxTQUFPRyxDQUFDLENBQVI7QUFHSzs7QUFBQSwyQkFBbUM7QUFDeEM7QUFDQSxRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTjtBQUNBLFNBQU87QUFDTCxnQkFBWTtBQUNWLGdCQUEyQ0QsT0FBTztBQUNsRDtBQUhHOztBQUtMLG1CQUFlO0FBQ2IsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBUEc7O0FBU0wsaUJBQWE7QUFDWCxnQkFBMkNBLE9BQU87QUFDbEQ7QUFYRzs7QUFhTEUsUUFBSSxFQUFFLE1BQU07QUFDVixnQkFBMkNGLE9BQU87QUFDbERHLFlBQU0sQ0FBTkE7QUFmRztBQWlCTEMsUUFBSSxFQUFFLGFBQThCO0FBQ2xDLGdCQUEyQ0osT0FBTztBQUNsRCxhQUFPRyxNQUFNLENBQU5BLFVBQVAsRUFBT0EsQ0FBUDtBQW5CRztBQXFCTEUsVUFBTSxFQUFFLGNBQStCO0FBQ3JDLGdCQUEyQ0wsT0FBTztBQUNsRCxZQUFNTSxTQUFTLEdBQUdDLEVBQUUsVUFBcEI7QUFDQSxZQUFNQyxPQUFPLEdBQUdELEVBQUUsSUFBbEI7QUFFQSxhQUFPSixNQUFNLENBQU5BLGdCQUFQLE9BQU9BLENBQVA7QUExQkc7QUE0QkxNLFdBQU8sRUFBRSxhQUE4QjtBQUNyQyxnQkFBMkNULE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxhQUFQLEVBQU9BLENBQVA7QUE5Qkc7QUFnQ0xPLGFBQVMsRUFBRSxjQUErQjtBQUN4QyxnQkFBMkNWLE9BQU87QUFDbEQsWUFBTVcsWUFBWSxHQUFHSixFQUFFLFVBQXZCO0FBQ0EsWUFBTUssVUFBVSxHQUFHTCxFQUFFLElBQXJCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxzQkFBUCxVQUFPQSxDQUFQO0FBckNKO0FBQU8sR0FBUDtBQXdDRCxDOzs7Ozs7Ozs7OztBQ2hJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNVSxhQUFhLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMvQkMsU0FBTyxFQUFDO0FBRHVCLENBQWIsQ0FBdEIsQyxDQUlBOztBQUNBSCxhQUFhLENBQUNJLFlBQWQsQ0FBMkJDLE9BQTNCLENBQW1DQyxHQUFuQyxDQUNJRCxPQUFPLElBQUVFLGdFQUFBLENBQXVCRixPQUF2QixDQURiO0FBR0FMLGFBQWEsQ0FBQ0ksWUFBZCxDQUEyQkksUUFBM0IsQ0FBb0NGLEdBQXBDLENBQ0lFLFFBQVEsSUFBRUQsaUVBQUEsQ0FBd0JDLFFBQXhCLENBRGQsRUFFSUMsS0FBSyxJQUFFRiw4REFBQSxDQUFxQkUsS0FBckIsQ0FGWDtBQUtlVCw0RUFBZixFOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNVSxtQkFBbUIsR0FBRyxZQUFZO0FBQzdDLFNBQU8sTUFBTVYsOENBQWEsQ0FBQ1csR0FBZCxDQUFrQixPQUFsQixDQUFiO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQyx1QkFBdUIsR0FBRyxNQUFPQyxFQUFQLElBQWM7QUFDbkQsU0FBTyxNQUFNYixnREFBYSxDQUFDVyxHQUFkLENBQWtCLGNBQWNFLEVBQWhDLENBQWI7QUFDRCxDQUZNLEMsQ0FJUDs7QUFDQWIsZ0RBQWEsQ0FBQ0ksWUFBZCxDQUEyQkMsT0FBM0IsQ0FBbUNDLEdBQW5DLENBQXdDRCxPQUFELElBQ3JDRSwrREFBQSxDQUF1QkYsT0FBdkIsQ0FERjtBQUdBTCxnREFBYSxDQUFDSSxZQUFkLENBQTJCSSxRQUEzQixDQUFvQ0YsR0FBcEMsQ0FDR0UsUUFBRCxJQUFjRCxnRUFBQSxDQUF3QkMsUUFBeEIsQ0FEaEIsRUFFR0MsS0FBRCxJQUFXRiw2REFBQSxDQUFxQkUsS0FBckIsQ0FGYixFOzs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDTyxNQUFNSyxrQkFBa0IsR0FBRyxZQUFZO0FBQzVDLFNBQU8sTUFBTWQsZ0RBQWEsQ0FBQ1csR0FBZCxDQUFrQixVQUFsQixDQUFiO0FBQ0QsQ0FGTSxDLENBSVA7O0FBQ0FYLGdEQUFhLENBQUNJLFlBQWQsQ0FBMkJDLE9BQTNCLENBQW1DQyxHQUFuQyxDQUF3Q0QsT0FBRCxJQUNyQ0UsZ0VBQUEsQ0FBdUJGLE9BQXZCLENBREY7QUFHQUwsZ0RBQWEsQ0FBQ0ksWUFBZCxDQUEyQkksUUFBM0IsQ0FBb0NGLEdBQXBDLENBQ0dFLFFBQUQsSUFBY0QsaUVBQUEsQ0FBd0JDLFFBQXhCLENBRGhCLEVBRUdDLEtBQUQsSUFBV0YsOERBQUEsQ0FBcUJFLEtBQXJCLENBRmIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZPLE1BQU1NLGFBQWEsR0FBSVYsT0FBRCxJQUFhO0FBQ3hDLFNBQU9BLE9BQVA7QUFDRCxDQUZNO0FBR0EsTUFBTVcsY0FBYyxHQUFJUixRQUFELElBQWM7QUFDMUMsU0FBT0EsUUFBUDtBQUNELENBRk07QUFHQSxNQUFNUyxXQUFXLEdBQUlSLEtBQUQsSUFBVztBQUNwQyxTQUFPUyxPQUFPLENBQUNDLE1BQVIsbUJBQW9CVixLQUFwQixFQUFQO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsTUFBTU0sYUFBYSxHQUFJVixPQUFELElBQWE7QUFDeEMsU0FBT0EsT0FBUDtBQUNELENBRk07QUFHQSxNQUFNVyxjQUFjLEdBQUlSLFFBQUQsSUFBYztBQUMxQyxTQUFPQSxRQUFQO0FBQ0QsQ0FGTTtBQUdBLE1BQU1TLFdBQVcsR0FBSVIsS0FBRCxJQUFXO0FBQ3BDLFNBQU9TLE9BQU8sQ0FBQ0MsTUFBUixtQkFBb0JWLEtBQXBCLEVBQVA7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQSxNQUFNTSxhQUFhLEdBQUlWLE9BQUQsSUFBYTtBQUN4QyxTQUFPQSxPQUFQO0FBQ0QsQ0FGTTtBQUdBLE1BQU1XLGNBQWMsR0FBSVIsUUFBRCxJQUFjO0FBQzFDLFNBQU9BLFFBQVA7QUFDRCxDQUZNO0FBR0EsTUFBTVMsV0FBVyxHQUFJUixLQUFELElBQVc7QUFDcEMsU0FBT1MsT0FBTyxDQUFDQyxNQUFSLG1CQUFvQlYsS0FBcEIsRUFBUDtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7O0FDTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTVQsYUFBYSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDakNDLFNBQU8sRUFBRTtBQUR3QixDQUFiLENBQXRCLEMsQ0FJQTs7QUFDQUgsYUFBYSxDQUFDSSxZQUFkLENBQTJCQyxPQUEzQixDQUFtQ0MsR0FBbkMsQ0FBd0NELE9BQUQsSUFDckNFLDZEQUFBLENBQXVCRixPQUF2QixDQURGO0FBR0FMLGFBQWEsQ0FBQ0ksWUFBZCxDQUEyQkksUUFBM0IsQ0FBb0NGLEdBQXBDLENBQ0dFLFFBQUQsSUFBY0QsOERBQUEsQ0FBd0JDLFFBQXhCLENBRGhCLEVBRUdDLEtBQUQsSUFBV0YsMkRBQUEsQ0FBcUJFLEtBQXJCLENBRmI7QUFLZVQsNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsTUFBTW9CLEtBQU4sU0FBb0J2QywrQ0FBcEIsQ0FBd0I7QUFDdEJKLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRUYsZUFBRjtBQUFhRjtBQUFiLFFBQTJCLEtBQUtnRCxLQUF0QztBQUNBO0FBQUE7QUFDRTtBQUNBLDJFQUFDLFNBQUQsb0JBQWVoRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQUdFOztBQUhGO0FBS0Q7O0FBUnFCOztBQVVUaUQsbUhBQU8sQ0FBQ0MsU0FBUixDQUFrQkgsS0FBbEIsQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNPLE1BQU1JLFdBQVcsR0FBRyxPQUFPO0FBQ2hDQyxNQUFJLEVBQUVDLHNFQUEwQkM7QUFEQSxDQUFQLENBQXBCO0FBR0EsTUFBTUMsWUFBWSxHQUFJcEIsUUFBRCxLQUFlO0FBQ3pDaUIsTUFBSSxFQUFFQyx1RUFEbUM7QUFFekNHLFNBQU8sRUFBRTtBQUNQQyxZQUFRLEVBQUV0QjtBQURIO0FBRmdDLENBQWYsQ0FBckIsQzs7Ozs7Ozs7Ozs7O0FDTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUUsbUJBQW1CLEdBQUUsT0FBSztBQUNuQ2UsTUFBSSxFQUFDQyxrRkFBc0NLO0FBRFIsQ0FBTCxDQUEzQjtBQUlBLE1BQU1DLGVBQWUsR0FBR0MsS0FBRCxLQUFVO0FBQ3BDUixNQUFJLEVBQUNDLDhFQUQrQjtBQUVwQ0csU0FBTyxFQUFDO0FBQ0pJLFNBQUssRUFBQ0E7QUFERjtBQUY0QixDQUFWLENBQXZCO0FBT0EsTUFBTUMsY0FBYyxHQUFHQyxJQUFELEtBQVM7QUFDbENWLE1BQUksRUFBQ0MsdUVBRDZCO0FBRWxDRyxTQUFPLEVBQUM7QUFDSk0sUUFBSSxFQUFDQTtBQUREO0FBRjBCLENBQVQsQ0FBdEIsQzs7Ozs7Ozs7Ozs7O0FDYlA7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDTyxNQUFNQyxnQkFBZ0IsR0FBSXZCLEVBQUQsS0FBUztBQUN2Q1ksTUFBSSxFQUFFQywrRUFEaUM7QUFFdkNHLFNBQU8sRUFBRTtBQUNQUSxtQkFBZSxFQUFFeEI7QUFEVjtBQUY4QixDQUFULENBQXpCO0FBTUEsTUFBTXlCLGlCQUFpQixHQUFJOUIsUUFBRCxLQUFlO0FBQzlDaUIsTUFBSSxFQUFFQywwRUFEd0M7QUFFOUNHLFNBQU8sRUFBRTtBQUNQVSxpQkFBYSxFQUFFL0I7QUFEUjtBQUZxQyxDQUFmLENBQTFCLEM7Ozs7Ozs7Ozs7OztBQ1RQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxNQUFNbUIsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1hLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFoQixDLENBRVA7O0FBQ08sTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCLEMsQ0FFUDs7QUFDTyxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUIsQyxDQUNQOztBQUNPLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQixDLENBRVA7O0FBQ08sTUFBTWhCLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1pQix1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJQO0FBRUE7QUFDQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJDLE1BQUksRUFBRSxFQURVO0FBRWhCQyxVQUFRLEVBQUU7QUFGTSxDQUFsQjtBQUllLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQUssR0FBR0osU0FBN0IsRUFBd0NLLE1BQXhDLEVBQWdEO0FBQzdELFVBQVFBLE1BQU0sQ0FBQzlCLElBQWY7QUFDRSxTQUFLQyx1RUFBTDtBQUFrQztBQUNoQyxZQUFJOEIsT0FBTyxHQUFHRCxNQUFNLENBQUMxQixPQUFQLENBQWUyQixPQUE3QjtBQUNBLFlBQUlDLFNBQVMsR0FBR0gsS0FBSyxDQUFDSCxJQUFOLENBQVdPLElBQVgsQ0FBaUJDLElBQUQsSUFBVUEsSUFBSSxDQUFDOUMsRUFBTCxLQUFZMkMsT0FBTyxDQUFDM0MsRUFBOUMsQ0FBaEIsQ0FGZ0MsQ0FFbUM7O0FBQ25FLFlBQUksQ0FBQzRDLFNBQUwsRUFBZ0I7QUFDZEQsaUJBQU8sQ0FBQ0ksUUFBUixHQUFtQixDQUFuQixDQURjLENBQ1E7O0FBQ3RCLGlEQUNLTixLQURMO0FBRUVPLHNCQUFVLEVBQUUsS0FGZDtBQUdFTCxtQkFIRjtBQUlFSixvQkFBUSxFQUFFRSxLQUFLLENBQUNGLFFBQU4sR0FBaUIsQ0FKN0I7QUFJZ0M7QUFDOUJELGdCQUFJLEVBQUUsQ0FBQyxHQUFHRyxLQUFLLENBQUNILElBQVYsRUFBZ0JLLE9BQWhCLENBTFIsQ0FLa0M7O0FBTGxDO0FBT0QsU0FURCxNQVNPO0FBQ0xBLGlCQUFPLENBQUNJLFFBQVIsSUFBb0IsQ0FBcEIsQ0FESyxDQUNrQjs7QUFDdkIsaURBQ0tOLEtBREw7QUFFRU8sc0JBQVUsRUFBRSxLQUZkO0FBR0VMLG1CQUhGO0FBSUVKLG9CQUFRLEVBQUVFLEtBQUssQ0FBQ0YsUUFKbEI7QUFLRUQsZ0JBQUksRUFBRSxDQUFDLEdBQUdHLEtBQUssQ0FBQ0gsSUFBVixDQUxSLENBS3lCOztBQUx6QjtBQU9EO0FBQ0Y7O0FBQ0QsU0FBS3pCLDBFQUFMO0FBQXFDO0FBQ25DLFlBQUlvQyxXQUFXLEdBQUdQLE1BQU0sQ0FBQzFCLE9BQVAsQ0FBZWlDLFdBQWpDO0FBQ0FBLG1CQUFXLENBQUNGLFFBQVosR0FBdUIsQ0FBdkIsQ0FGbUMsQ0FFVDs7QUFDMUIsK0NBQ0tOLEtBREw7QUFFRVEscUJBRkY7QUFHRVYsa0JBQVEsRUFBRUUsS0FBSyxDQUFDRixRQUFOLEdBQWlCLENBSDdCO0FBSUVELGNBQUksRUFBRUcsS0FBSyxDQUFDSCxJQUFOLENBQVdZLE1BQVgsQ0FBbUJKLElBQUQsSUFBVUEsSUFBSSxDQUFDOUMsRUFBTCxLQUFZaUQsV0FBVyxDQUFDakQsRUFBcEQsQ0FKUixDQUlpRTs7QUFKakU7QUFNRDs7QUFDRCxTQUFLYSx5RUFBTDtBQUFvQztBQUNsQyxZQUFJaUMsSUFBSSxHQUFHSixNQUFNLENBQUMxQixPQUFQLENBQWU4QixJQUExQjtBQUNBLFlBQUlLLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlYixLQUFLLENBQUNILElBQXJCLENBQVgsQ0FBZCxDQUZrQyxDQUVvQjs7QUFDdEQsWUFBSWlCLEtBQUssR0FBR0osT0FBTyxDQUFDSyxTQUFSLENBQW1CQyxLQUFELElBQVdBLEtBQUssQ0FBQ3pELEVBQU4sS0FBYThDLElBQUksQ0FBQzlDLEVBQS9DLENBQVosQ0FIa0MsQ0FHOEI7O0FBQ2hFOEMsWUFBSSxDQUFDQyxRQUFMLEdBQWdCLEVBQUVELElBQUksQ0FBQ0MsUUFBdkIsQ0FKa0MsQ0FJRDs7QUFDakNJLGVBQU8sQ0FBQ08sTUFBUixDQUFlSCxLQUFmLEVBQXNCLENBQXRCLEVBQXlCVCxJQUF6QixFQUxrQyxDQUtGOztBQUNoQywrQ0FDS0wsS0FETDtBQUVFSCxjQUFJLEVBQUUsQ0FBQyxHQUFHYSxPQUFKO0FBRlI7QUFJRDs7QUFDRCxTQUFLdEMseUVBQUw7QUFBb0M7QUFDbEMsWUFBSWlDLElBQUksR0FBR0osTUFBTSxDQUFDMUIsT0FBUCxDQUFlOEIsSUFBMUI7QUFDQSxZQUFJSyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLFNBQUwsQ0FBZWIsS0FBSyxDQUFDSCxJQUFyQixDQUFYLENBQWQsQ0FGa0MsQ0FFb0I7O0FBQ3RELFlBQUlpQixLQUFLLEdBQUdkLEtBQUssQ0FBQ0gsSUFBTixDQUFXcUIsT0FBWCxDQUFtQmIsSUFBbkIsQ0FBWixDQUhrQyxDQUdJOztBQUN0Q0EsWUFBSSxDQUFDQyxRQUFMLEdBQWdCLEVBQUVELElBQUksQ0FBQ0MsUUFBdkIsQ0FKa0MsQ0FJRDs7QUFFakMsWUFBSUwsTUFBTSxDQUFDMUIsT0FBUCxDQUFlOEIsSUFBZixDQUFvQkMsUUFBcEIsS0FBaUMsQ0FBckMsRUFBd0M7QUFDdEM7QUFDQUksaUJBQU8sR0FBR0EsT0FBTyxDQUFDRCxNQUFSLENBQ1BVLE9BQUQsSUFBYUEsT0FBTyxDQUFDNUQsRUFBUixLQUFlMEMsTUFBTSxDQUFDMUIsT0FBUCxDQUFlOEIsSUFBZixDQUFvQjlDLEVBRHhDLENBQzJDO0FBRDNDLFdBQVY7QUFHQXlDLGVBQUssQ0FBQ0YsUUFBTixHQUFpQkUsS0FBSyxDQUFDRixRQUFOLEdBQWlCLENBQWxDLENBTHNDLENBS0Q7QUFDdEMsU0FORCxNQU1PO0FBQ0xZLGlCQUFPLENBQUNPLE1BQVIsQ0FBZUgsS0FBZixFQUFzQixDQUF0QixFQUF5QlQsSUFBekIsRUFESyxDQUMyQjtBQUNqQzs7QUFDRCwrQ0FDS0wsS0FETDtBQUVFSCxjQUFJLEVBQUUsQ0FBQyxHQUFHYSxPQUFKO0FBRlI7QUFJRDs7QUFDRDtBQUNFLGFBQU9WLEtBQVA7QUFsRUo7QUFvRUQsQzs7Ozs7Ozs7Ozs7O0FDNUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1vQixZQUFZLEdBQUdDLDZEQUFlLENBQUM7QUFDbkNDLG9FQURtQztBQUVuQ0Msd0VBRm1DO0FBR25DeEIsNERBSG1DO0FBSW5DeUIsOERBQVlBO0FBSnVCLENBQUQsQ0FBcEM7QUFPZUosMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDZSxTQUFTSSxZQUFULENBQXNCeEIsS0FBSyxHQUFHLEVBQTlCLEVBQWtDQyxNQUFsQyxFQUEwQztBQUN2RCxVQUFRQSxNQUFNLENBQUM5QixJQUFmO0FBQ0UsU0FBS0MsOEVBQUw7QUFBeUM7QUFDdkMsK0NBQ0s0QixLQURMO0FBRUVyQixlQUFLLEVBQUVzQixNQUFNLENBQUMxQixPQUFQLENBQWVJO0FBRnhCO0FBSUQ7O0FBQ0QsU0FBS1AsdUVBQUw7QUFBa0M7QUFDaEMsWUFBSU8sS0FBSyxHQUFHZ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsU0FBTCxDQUFlYixLQUFLLENBQUNyQixLQUFyQixDQUFYLENBQVosQ0FEZ0MsQ0FDcUI7O0FBQ3JELFlBQUk4QyxLQUFLLEdBQUc5QyxLQUFLLENBQUN5QixJQUFOLENBQ1R2QixJQUFELElBQVVBLElBQUksQ0FBQzZDLEtBQUwsS0FBZXpCLE1BQU0sQ0FBQzFCLE9BQVAsQ0FBZU0sSUFBZixDQUFvQjZDLEtBRG5DLENBQVosQ0FGZ0MsQ0FJN0I7O0FBQ0gsWUFBSUMsS0FBSyxHQUFHLEtBQVo7QUFDQSxZQUFJRixLQUFKLEVBQVdFLEtBQUssR0FBRyxJQUFSO0FBQ1gsK0NBQ0szQixLQURMO0FBRUVuQixjQUFJLEVBQUVvQixNQUFNLENBQUMxQixPQUFQLENBQWVNLElBRnZCO0FBR0U4QyxlQUFLLEVBQUVBO0FBSFQ7QUFLRDs7QUFDRDtBQUNFLGFBQU8zQixLQUFQO0FBckJKO0FBdUJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUVBO0FBQ2UsU0FBU3VCLG9CQUFULENBQThCdkIsS0FBSyxHQUFHLEVBQXRDLEVBQTBDQyxNQUExQyxFQUFrRDtBQUMvRCxVQUFRQSxNQUFNLENBQUM5QixJQUFmO0FBQ0UsU0FBS0MsK0VBQUw7QUFBMEM7QUFDeEMsK0NBQ0s0QixLQURMO0FBRUU0Qiw2QkFBbUIsRUFBRSxJQUZ2QjtBQUdFckUsWUFBRSxFQUFFMEMsTUFBTSxDQUFDMUIsT0FBUCxDQUFlUTtBQUhyQjtBQUtEOztBQUNELFNBQUtYLDBFQUFMO0FBQXFDO0FBQ25DLGVBQU87QUFDTHdELDZCQUFtQixFQUFFLEtBRGhCO0FBRUwzQyx1QkFBYSxFQUFFZ0IsTUFBTSxDQUFDMUIsT0FBUCxDQUFlVTtBQUZ6QixTQUFQO0FBSUQ7O0FBQ0Q7QUFDRSxhQUFPZSxLQUFQO0FBZko7QUFpQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJEO0FBRUE7QUFDZSxTQUFTc0IsZUFBVCxDQUF5QnRCLEtBQUssR0FBRyxFQUFqQyxFQUFxQ0MsTUFBckMsRUFBNkM7QUFDMUQsVUFBUUEsTUFBTSxDQUFDOUIsSUFBZjtBQUNFLFNBQUtDLHNFQUFMO0FBQWlDO0FBQy9CLCtDQUNLNEIsS0FETDtBQUVFNkIsZ0JBQU0sRUFBRTtBQUZWO0FBSUQ7O0FBQ0QsU0FBS3pELHVFQUFMO0FBQWtDO0FBQ2hDLGVBQU87QUFDTEksa0JBQVEsRUFBRXlCLE1BQU0sQ0FBQzFCLE9BQVAsQ0FBZUMsUUFEcEI7QUFFTHFELGdCQUFNLEVBQUU7QUFGSCxTQUFQO0FBSUQ7O0FBQ0Q7QUFDRSxhQUFPN0IsS0FBUDtBQWRKO0FBZ0JELEM7Ozs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFVOEIsUUFBVixHQUFxQjtBQUNuQixRQUFNQyw4REFBRyxDQUFDLENBQ1JDLG9FQUFTLENBQUNDLHNFQUFELEVBQTZCQywwREFBN0IsQ0FERCxFQUVSRixvRUFBUyxDQUFDQywrRUFBRCxFQUFzQ0UsOERBQXRDLENBRkQsRUFHUkgsb0VBQVMsQ0FBQ0Msa0ZBQUQsRUFBeUNHLG9EQUF6QyxDQUhELENBQUQsQ0FBVDtBQUtEOztBQUVjTix1RUFBZixFOzs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVU0sYUFBVixDQUF3Qm5DLE1BQXhCLEVBQWdDO0FBQzlCLFFBQU0vQyxRQUFRLEdBQUcsTUFBTW1GLCtEQUFJLENBQUNqRixzRUFBRCxDQUEzQjtBQUNBLFFBQU1rRiw4REFBRyxDQUFDNUQsc0VBQWUsQ0FBQ3hCLFFBQVEsQ0FBQ3FGLElBQVYsQ0FBaEIsQ0FBVDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ1BEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVSixxQkFBVixDQUFnQ2xDLE1BQWhDLEVBQXdDO0FBQ3RDLFFBQU0vQyxRQUFRLEdBQUcsTUFBTW1GLCtEQUFJLENBQ3pCL0UsNEVBRHlCLEVBRXpCMkMsTUFBTSxDQUFDMUIsT0FBUCxDQUFlUSxlQUZVLENBQTNCO0FBSUEsUUFBTXVELDhEQUFHLENBQUN0RCwwRUFBaUIsQ0FBQzlCLFFBQVEsQ0FBQ3FGLElBQVYsQ0FBbEIsQ0FBVDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVTCxnQkFBVixDQUEyQmpDLE1BQTNCLEVBQW1DO0FBQ2pDLFFBQU0vQyxRQUFRLEdBQUcsTUFBTW1GLCtEQUFJLENBQUM3RSx3RUFBRCxDQUEzQjtBQUNBLFFBQU04RSw4REFBRyxDQUFDaEUscUVBQVksQ0FBQ3BCLFFBQVEsQ0FBQ3FGLElBQVYsQ0FBYixDQUFUO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsTUFBTUMsY0FBYyxHQUFJQyxVQUFELElBQWdCO0FBQ3JDLFlBQTJDO0FBQ3pDLFVBQU07QUFBRUM7QUFBRixRQUEwQkMsbUJBQU8sQ0FBQywwREFBRCxDQUF2Qzs7QUFDQSxXQUFPRCxtQkFBbUIsQ0FBQ0UsNkRBQWUsQ0FBQyxHQUFHSCxVQUFKLENBQWhCLENBQTFCO0FBQ0Q7O0FBQ0QsU0FBT0csNkRBQWUsQ0FBQyxHQUFHSCxVQUFKLENBQXRCO0FBQ0QsQ0FORDs7QUFRTyxNQUFNSSxTQUFTLEdBQUlDLE9BQUQsSUFBYTtBQUNwQyxRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLEtBQUssR0FBR0MseURBQVcsQ0FBQzlCLHVEQUFELEVBQWVvQixjQUFjLENBQUMsQ0FBQ08sY0FBRCxDQUFELENBQTdCLENBQXpCO0FBRUFFLE9BQUssQ0FBQ0UsUUFBTixHQUFpQkosY0FBYyxDQUFDSyxHQUFmLENBQW1CQyxtREFBbkIsQ0FBakI7QUFFQSxTQUFPSixLQUFQO0FBQ0QsQ0FQTTtBQVNBLE1BQU1qRixPQUFPLEdBQUdzRix3RUFBYSxDQUFDVCxTQUFELEVBQVk7QUFBRVUsT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJQLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAqIGFzIEhhbmRsZXJzIGZyb20gJy4vaGFuZGxlcnMvcHJvZHVjdHMnXHJcblxyXG5jb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6XCJodHRwczovL2Zha2VzdG9yZWFwaS5jb20vXCJcclxufSlcclxuXHJcbi8vaW50ZXJjZXB0b3JzXHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gICAgcmVxdWVzdD0+SGFuZGxlcnMuaGFuZGxlUmVxdWVzdChyZXF1ZXN0KVxyXG4pXHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgIHJlc3BvbnNlPT5IYW5kbGVycy5oYW5kbGVSZXNwb25zZShyZXNwb25zZSksXHJcbiAgICBlcnJvcj0+SGFuZGxlcnMuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zSW5zdGFuY2U7IiwiaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSBcIi4uL2xvZ2luXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFVzZXJzRnJvbUFwaSA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoXCJ1c2Vyc1wiKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSBcIi4uL0Jhc2VVcmxcIjtcclxuaW1wb3J0ICogYXMgSGFuZGxlcnMgZnJvbSBcIi4uL2hhbmRsZXJzL3Byb2R1Y3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaW5nbGVQcm9kdWN0RnJvbUFwaSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBheGlvc0luc3RhbmNlLmdldChcInByb2R1Y3RzL1wiICsgaWQpO1xyXG59O1xyXG5cclxuLy9pbnRlcmNlcHRvcnNcclxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKHJlcXVlc3QpID0+XHJcbiAgSGFuZGxlcnMuaGFuZGxlUmVxdWVzdChyZXF1ZXN0KVxyXG4pO1xyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgKHJlc3BvbnNlKSA9PiBIYW5kbGVycy5oYW5kbGVSZXNwb25zZShyZXNwb25zZSksXHJcbiAgKGVycm9yKSA9PiBIYW5kbGVycy5oYW5kbGVFcnJvcihlcnJvcilcclxuKTtcclxuIiwiaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSBcIi4uL0Jhc2VVcmxcIjtcclxuaW1wb3J0ICogYXMgSGFuZGxlcnMgZnJvbSBcIi4uL2hhbmRsZXJzL3Byb2R1Y3RzXCI7XHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0Zyb21BcGkgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KFwicHJvZHVjdHNcIik7XHJcbn07XHJcblxyXG4vL2ludGVyY2VwdG9yc1xyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgocmVxdWVzdCkgPT5cclxuICBIYW5kbGVycy5oYW5kbGVSZXF1ZXN0KHJlcXVlc3QpXHJcbik7XHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAocmVzcG9uc2UpID0+IEhhbmRsZXJzLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSxcclxuICAoZXJyb3IpID0+IEhhbmRsZXJzLmhhbmRsZUVycm9yKGVycm9yKVxyXG4pO1xyXG4iLCJleHBvcnQgY29uc3QgaGFuZGxlUmVxdWVzdCA9IChyZXF1ZXN0KSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Q7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZUVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgLi4uZXJyb3IgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBoYW5kbGVSZXF1ZXN0ID0gKHJlcXVlc3QpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5leHBvcnQgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoeyAuLi5lcnJvciB9KTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGhhbmRsZVJlcXVlc3QgPSAocmVxdWVzdCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0O1xyXG59O1xyXG5leHBvcnQgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIHJldHVybiBQcm9taXNlLnJlamVjdCh7IC4uLmVycm9yIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCAqIGFzIEhhbmRsZXJzIGZyb20gXCIuL2hhbmRsZXJzL2xvZ2luXCI7XHJcblxyXG5jb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9cIixcclxufSk7XHJcblxyXG4vL2ludGVyY2VwdG9yc1xyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgocmVxdWVzdCkgPT5cclxuICBIYW5kbGVycy5oYW5kbGVSZXF1ZXN0KHJlcXVlc3QpXHJcbik7XHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAocmVzcG9uc2UpID0+IEhhbmRsZXJzLmhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKSxcclxuICAoZXJyb3IpID0+IEhhbmRsZXJzLmhhbmRsZUVycm9yKGVycm9yKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3NJbnN0YW5jZTtcclxuIiwiLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5nbG9iYWwuc2Nzc1wiO1xyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8vIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIC8vIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5cclxuLy9QUk9EVUNUU1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuUFJPRFVDVF9SRVFVRVNULFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNob3dQcm9kdWN0cyA9IChyZXNwb25zZSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLlBST0RVQ1RfUkVTUE9OU0UsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgcHJvZHVjdHM6IHJlc3BvbnNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFVzZXJzRnJvbUFwaSA9KCk9Pih7XHJcbiAgICB0eXBlOmFjdGlvblR5cGUuUkVRVUVTVF9VU0VSU19GUk9NX0ZBS0VfQVBJLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJzRnJvbUFwaSA9KHVzZXJzKT0+KHtcclxuICAgIHR5cGU6YWN0aW9uVHlwZS5HRVRfVVNFUlNfRlJPTV9GQUtFX0FQSSxcclxuICAgIHBheWxvYWQ6e1xyXG4gICAgICAgIHVzZXJzOnVzZXJzXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tMb2dpblVzZXIgPSh1c2VyKT0+KHtcclxuICAgIHR5cGU6YWN0aW9uVHlwZS5DSEVDS19MT0dJTl9VU0VSLFxyXG4gICAgcGF5bG9hZDp7XHJcbiAgICAgICAgdXNlcjp1c2VyLFxyXG4gICAgfVxyXG59KVxyXG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlIGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uVHlwZXNcIjtcclxuXHJcbi8vc2luZ2xlIHByb2R1Y3RcclxuZXhwb3J0IGNvbnN0IGdldFNpbmdsZVByb2R1Y3QgPSAoaWQpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5QUkVRVUVTVF9TSU5HTExFX1BST0RVQ1QsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgc2luZ2xlUHJvZHVjdElkOiBpZCxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNob3dTaW5nbGVQcm9kdWN0ID0gKHJlc3BvbnNlKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuR0VUX1NJTkdMTEVfUFJPRFVDVCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBzaW5nbGVQcm9kdWN0OiByZXNwb25zZSxcclxuICB9LFxyXG59KTtcclxuIiwiLy9QUk9EVUNUU1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9SRVFVRVNUID0gXCJQUk9EVUNUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfUkVTUE9OU0UgPSBcIlBST0RVQ1RfUkVTUE9OU0VcIjtcclxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSBcIkxPQURJTkdcIjtcclxuXHJcbi8vU0lOR0xFIFBST0RVQ1RcclxuZXhwb3J0IGNvbnN0IFBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVCA9IFwiUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0lOR0xMRV9QUk9EVUNUID0gXCJHRVRfU0lOR0xMRV9QUk9EVUNUXCI7XHJcblxyXG4vL0NBUlRcclxuZXhwb3J0IGNvbnN0IEFERF9JVEVNX1RPX0NBUlQgPSBcIkFERF9JVEVNX1RPX0NBUlRcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNX0lOX0NBUlQgPSBcIkRFTEVURV9JVEVNX0lOX0NBUlRcIjtcclxuLy9xdWFudGl0eVxyXG5leHBvcnQgY29uc3QgSU5DUkVNRU5UX1FVQU5USVRZID0gXCJJTkNSRU1FTlRfUVVBTlRJVFlcIjtcclxuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVF9RVUFOVElUWSA9IFwiREVDUkVNRU5UX1FVQU5USVRZXCI7XHJcblxyXG4vL2xvZ2luXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJTX0ZST01fRkFLRV9BUEkgPSBcIlJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTX0ZST01fRkFLRV9BUEkgPSBcIkdFVF9VU0VSU19GUk9NX0ZBS0VfQVBJXCI7XHJcbmV4cG9ydCBjb25zdCBDSEVDS19MT0dJTl9VU0VSID0gXCJDSEVDS19MT0dJTl9VU0VSXCI7XHJcbiIsIi8vcmVkdWNlcihhY3Rpb24sc3RhdGUpIC8vcmV0dXJuIHVwZGF0ZSBzdGF0ZVxyXG5cclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzXCI7XHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICBjYXJ0OiBbXSxcclxuICBpdGVtc051bTogMCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FydFJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZS5BRERfSVRFTV9UT19DQVJUOiB7XHJcbiAgICAgIGxldCBuZXdJdGVtID0gYWN0aW9uLnBheWxvYWQubmV3SXRlbTtcclxuICAgICAgbGV0IGV4aXN0SXRlbSA9IHN0YXRlLmNhcnQuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gbmV3SXRlbS5pZCk7IC8vY2hlY2sgaWYgaXRlbSBleGlzdCBpbiBjYXJ0IG9yIG5vdFxyXG4gICAgICBpZiAoIWV4aXN0SXRlbSkge1xyXG4gICAgICAgIG5ld0l0ZW0ucXVhbnRpdHkgPSAxOyAvL2lmIG5vdCBleGlzdCBhZGQgaXQgd2l0aCBxID0gMVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGNhcnRMb2FkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgbmV3SXRlbSxcclxuICAgICAgICAgIGl0ZW1zTnVtOiBzdGF0ZS5pdGVtc051bSArIDEsIC8vaW5jIG5vIG9mIGl0ZW1zIHRvIGJhZGdlIG5vXHJcbiAgICAgICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgbmV3SXRlbV0sIC8vcmVsb2FkIGNhcnRcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0l0ZW0ucXVhbnRpdHkgKz0gMTsgLy9pZiBpdGVtIGlzIGFscmVhZHkgZXhpdCBpbiBjYXJ0IC8vaW5jIGl0J3MgcXVhbnRpdHlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjYXJ0TG9hZGVyOiBmYWxzZSxcclxuICAgICAgICAgIG5ld0l0ZW0sXHJcbiAgICAgICAgICBpdGVtc051bTogc3RhdGUuaXRlbXNOdW0sXHJcbiAgICAgICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydF0sIC8vcmVsb2FkIGNhcnRcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGUuREVMRVRFX0lURU1fSU5fQ0FSVDoge1xyXG4gICAgICBsZXQgZGVsZXRlZEl0ZW0gPSBhY3Rpb24ucGF5bG9hZC5kZWxldGVkSXRlbTtcclxuICAgICAgZGVsZXRlZEl0ZW0ucXVhbnRpdHkgPSAwOyAvL3NldCBxdWFudGl0eSBvZiBkZWxldGVkIGl0ZW0gdG8gMFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGRlbGV0ZWRJdGVtLFxyXG4gICAgICAgIGl0ZW1zTnVtOiBzdGF0ZS5pdGVtc051bSAtIDEsXHJcbiAgICAgICAgY2FydDogc3RhdGUuY2FydC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGRlbGV0ZWRJdGVtLmlkKSwgLy9maWx0ZXIgY2FydCBhZnRlciBkZWxldGUgaXRlbVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlLklOQ1JFTUVOVF9RVUFOVElUWToge1xyXG4gICAgICBsZXQgaXRlbSA9IGFjdGlvbi5wYXlsb2FkLml0ZW07XHJcbiAgICAgIGxldCBuZXdDYXJ0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZS5jYXJ0KSk7IC8vZGVlcCBjb3B5XHJcbiAgICAgIGxldCBpbmRleCA9IG5ld0NhcnQuZmluZEluZGV4KChpdGVteCkgPT4gaXRlbXguaWQgPT09IGl0ZW0uaWQpOyAvLyBmaW5kIHRoaXMgaXRlbSBpbiBjYXJ0XHJcbiAgICAgIGl0ZW0ucXVhbnRpdHkgPSArK2l0ZW0ucXVhbnRpdHk7IC8vaW5jIGl0J3MgcVxyXG4gICAgICBuZXdDYXJ0LnNwbGljZShpbmRleCwgMSwgaXRlbSk7IC8vcmVwbGFjZSBpdCB3aXRoIG5ldyBpdGVtXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydDogWy4uLm5ld0NhcnRdLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlLkRFQ1JFTUVOVF9RVUFOVElUWToge1xyXG4gICAgICBsZXQgaXRlbSA9IGFjdGlvbi5wYXlsb2FkLml0ZW07XHJcbiAgICAgIGxldCBuZXdDYXJ0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZS5jYXJ0KSk7IC8vZGVlcCBjb3B5XHJcbiAgICAgIGxldCBpbmRleCA9IHN0YXRlLmNhcnQuaW5kZXhPZihpdGVtKTsgLy8gZmluZCB0aGlzIGl0ZW0gaW4gY2FydFxyXG4gICAgICBpdGVtLnF1YW50aXR5ID0gLS1pdGVtLnF1YW50aXR5OyAvL2RlYyBpdHMgcXVhbnRpdHlcclxuXHJcbiAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5pdGVtLnF1YW50aXR5ID09PSAwKSB7XHJcbiAgICAgICAgLy9pZiBxPTBcclxuICAgICAgICBuZXdDYXJ0ID0gbmV3Q2FydC5maWx0ZXIoXHJcbiAgICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaXRlbS5pZCAvL2RlbGV0ZSB0aGlzIGl0ZW1cclxuICAgICAgICApO1xyXG4gICAgICAgIHN0YXRlLml0ZW1zTnVtID0gc3RhdGUuaXRlbXNOdW0gLSAxOyAvL2RlYyBubyBvZiBpdGVtcyBpbiBiYWRnZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0NhcnQuc3BsaWNlKGluZGV4LCAxLCBpdGVtKTsgLy9lbHNlIGRlYyBpdCdzIHF1YW50aXR5XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0OiBbLi4ubmV3Q2FydF0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcHJvZHVjdHNSZWR1Y2VyIGZyb20gXCIuL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCBzaW5nbGVQcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0XCI7XHJcbmltcG9ydCBjYXJ0UmVkdWNlciBmcm9tIFwiLi9jYXJ0XCI7XHJcbmltcG9ydCBsb2dpblJlZHVjZXIgZnJvbSBcIi4vbG9naW5cIjtcclxuY29uc3Qgcm9vdFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBwcm9kdWN0c1JlZHVjZXIsXHJcbiAgc2luZ2xlUHJvZHVjdFJlZHVjZXIsXHJcbiAgY2FydFJlZHVjZXIsXHJcbiAgbG9naW5SZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VycztcclxuIiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luUmVkdWNlcihzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGUuR0VUX1VTRVJTX0ZST01fRkFLRV9BUEk6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VyczogYWN0aW9uLnBheWxvYWQudXNlcnMsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGUuQ0hFQ0tfTE9HSU5fVVNFUjoge1xyXG4gICAgICBsZXQgdXNlcnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN0YXRlLnVzZXJzKSk7IC8vZGVlcCBjb3B5XHJcbiAgICAgIGxldCBmb3VuZCA9IHVzZXJzLmZpbmQoXHJcbiAgICAgICAgKHVzZXIpID0+IHVzZXIuZW1haWwgPT09IGFjdGlvbi5wYXlsb2FkLnVzZXIuZW1haWxcclxuICAgICAgKTsgLy9jaGVjayBmb3IgdGhpcyB1c2VyIGluIGFwaSBhcnJheVxyXG4gICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgaWYgKGZvdW5kKSBjaGVjayA9IHRydWU7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcclxuICAgICAgICBjaGVjazogY2hlY2ssXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsIi8vcmVkdWNlcihhY3Rpb24sc3RhdGUpIC8vcmV0dXJuIHVwZGF0ZSBzdGF0ZVxyXG5cclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbmdsZVByb2R1Y3RSZWR1Y2VyKHN0YXRlID0ge30sIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgYWN0aW9uVHlwZS5QUkVRVUVTVF9TSU5HTExFX1BST0RVQ1Q6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzaW5nbGVQcm9kdWN0bG9hZGVyOiB0cnVlLFxyXG4gICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5zaW5nbGVQcm9kdWN0SWQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIGFjdGlvblR5cGUuR0VUX1NJTkdMTEVfUFJPRFVDVDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpbmdsZVByb2R1Y3Rsb2FkZXI6IGZhbHNlLFxyXG4gICAgICAgIHNpbmdsZVByb2R1Y3Q6IGFjdGlvbi5wYXlsb2FkLnNpbmdsZVByb2R1Y3QsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsIi8vcmVkdWNlcihhY3Rpb24sc3RhdGUpIC8vcmV0dXJuIHVwZGF0ZSBzdGF0ZVxyXG5cclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2R1Y3RzUmVkdWNlcihzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGUuUFJPRFVDVF9SRVFVRVNUOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGVyOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlLlBST0RVQ1RfUkVTUE9OU0U6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQucHJvZHVjdHMsXHJcbiAgICAgICAgbG9hZGVyOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiXHJcbmltcG9ydCB7IHRha2VFdmVyeSwgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHtoYW5kbEdldFByb2R1Y3RzfSBmcm9tICcuL3Byb2R1Y3RzJztcclxuaW1wb3J0IHtoYW5kbEdldFNpbmdsZVByb2R1Y3R9IGZyb20gJy4vcHJvZHVjdCdcclxuaW1wb3J0IHtoYW5kbEdldFVzZXJzfSBmcm9tICcuL2xvZ2luJ1xyXG5pbXBvcnQge30gZnJvbSAnLi9sb2dpbidcclxuaW1wb3J0ICogYXMgYWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzJztcclxuZnVuY3Rpb24qIHdhdGNoQWxsKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUFJPRFVDVF9SRVFVRVNULGhhbmRsR2V0UHJvZHVjdHMpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVCxoYW5kbEdldFNpbmdsZVByb2R1Y3QpLFxyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSSxoYW5kbEdldFVzZXJzKSxcclxuICBdKVxyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgd2F0Y2hBbGw7IiwiaW1wb3J0IHsgY2FsbCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyByZXF1ZXN0VXNlcnNGcm9tQXBpIH0gZnJvbSBcIi4uLy4uL25ldHdvcmsvYXBpL2xvZ2luXCI7XHJcbmltcG9ydCB7IGdldFVzZXJzRnJvbUFwaSB9IGZyb20gXCIuLi9hY3Rpb25zL2xvZ2luXCI7XHJcblxyXG5mdW5jdGlvbiogaGFuZGxHZXRVc2VycyhhY3Rpb24pIHtcclxuICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwocmVxdWVzdFVzZXJzRnJvbUFwaSk7XHJcbiAgeWllbGQgcHV0KGdldFVzZXJzRnJvbUFwaShyZXNwb25zZS5kYXRhKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGhhbmRsR2V0VXNlcnMgfTtcclxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRTaW5nbGVQcm9kdWN0RnJvbUFwaSB9IGZyb20gXCIuLi8uLi9uZXR3b3JrL2FwaS9wcm9kdWN0XCI7XHJcbmltcG9ydCB7IHNob3dTaW5nbGVQcm9kdWN0IH0gZnJvbSBcIi4uL2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5cclxuZnVuY3Rpb24qIGhhbmRsR2V0U2luZ2xlUHJvZHVjdChhY3Rpb24pIHtcclxuICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoXHJcbiAgICBnZXRTaW5nbGVQcm9kdWN0RnJvbUFwaSxcclxuICAgIGFjdGlvbi5wYXlsb2FkLnNpbmdsZVByb2R1Y3RJZFxyXG4gICk7XHJcbiAgeWllbGQgcHV0KHNob3dTaW5nbGVQcm9kdWN0KHJlc3BvbnNlLmRhdGEpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaGFuZGxHZXRTaW5nbGVQcm9kdWN0IH07XHJcbiIsImltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdHNGcm9tQXBpIH0gZnJvbSBcIi4uLy4uL25ldHdvcmsvYXBpL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7IHNob3dQcm9kdWN0cyB9IGZyb20gXCIuLi9hY3Rpb25zL2FjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uKiBoYW5kbEdldFByb2R1Y3RzKGFjdGlvbikge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChnZXRQcm9kdWN0c0Zyb21BcGkpO1xyXG4gIHlpZWxkIHB1dChzaG93UHJvZHVjdHMocmVzcG9uc2UuZGF0YSkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBoYW5kbEdldFByb2R1Y3RzIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcbmltcG9ydCByb290UmVkdWNlcnMgZnJvbSBcIi4uL3JlZHVjZXJzL2luZGV4XCI7XHJcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYS9pbmRleFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSAobWlkZGxld2FyZSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTtcclxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgfVxyXG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlcnMsIGJpbmRNaWRkbGV3YXJlKFtzYWdhTWlkZGxld2FyZV0pKTtcclxuXHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG5cclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9