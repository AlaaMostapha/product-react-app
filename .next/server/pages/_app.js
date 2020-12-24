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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store/index.js");
/* harmony import */ var _styles_styles_global_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles.global.scss */ "./src/styles/styles.global.scss");
/* harmony import */ var _styles_styles_global_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_global_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
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

/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_3__["wrapper"].withRedux(MyApp));

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL0Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldHdvcmsvYXBpL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2FwaS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2FwaS9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0d29yay9oYW5kbGVycy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0d29yay9oYW5kbGVycy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2hhbmRsZXJzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9uZXR3b3JrL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvY29uc3RhbnRzL2FjdGlvblR5cGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Byb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9zYWdhL3Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3NhZ2EvcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJIYW5kbGVycyIsInJlc3BvbnNlIiwiZXJyb3IiLCJyZXF1ZXN0VXNlcnNGcm9tQXBpIiwiZ2V0IiwiZ2V0U2luZ2xlUHJvZHVjdEZyb21BcGkiLCJpZCIsImdldFByb2R1Y3RzRnJvbUFwaSIsImhhbmRsZVJlcXVlc3QiLCJoYW5kbGVSZXNwb25zZSIsImhhbmRsZUVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsIk15QXBwIiwicHJvcHMiLCJ3cmFwcGVyIiwid2l0aFJlZHV4IiwiZ2V0UHJvZHVjdHMiLCJ0eXBlIiwiYWN0aW9uVHlwZSIsIlBST0RVQ1RfUkVRVUVTVCIsInNob3dQcm9kdWN0cyIsInBheWxvYWQiLCJwcm9kdWN0cyIsIlJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSSIsImdldFVzZXJzRnJvbUFwaSIsInVzZXJzIiwiY2hlY2tMb2dpblVzZXIiLCJ1c2VyIiwiZ2V0U2luZ2xlUHJvZHVjdCIsInNpbmdsZVByb2R1Y3RJZCIsInNob3dTaW5nbGVQcm9kdWN0Iiwic2luZ2xlUHJvZHVjdCIsIlBST0RVQ1RfUkVTUE9OU0UiLCJMT0FESU5HIiwiUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUIiwiR0VUX1NJTkdMTEVfUFJPRFVDVCIsIkFERF9JVEVNX1RPX0NBUlQiLCJERUxFVEVfSVRFTV9JTl9DQVJUIiwiSU5DUkVNRU5UX1FVQU5USVRZIiwiREVDUkVNRU5UX1FVQU5USVRZIiwiR0VUX1VTRVJTX0ZST01fRkFLRV9BUEkiLCJDSEVDS19MT0dJTl9VU0VSIiwiaW5pdFN0YXRlIiwiY2FydCIsIml0ZW1zTnVtIiwiY2FydFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIm5ld0l0ZW0iLCJleGlzdEl0ZW0iLCJmaW5kIiwiaXRlbSIsInF1YW50aXR5IiwiY2FydExvYWRlciIsImRlbGV0ZWRJdGVtIiwiZmlsdGVyIiwibmV3Q2FydCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbXgiLCJzcGxpY2UiLCJpbmRleE9mIiwicHJvZHVjdCIsInJvb3RSZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsInByb2R1Y3RzUmVkdWNlciIsInNpbmdsZVByb2R1Y3RSZWR1Y2VyIiwibG9naW5SZWR1Y2VyIiwiZm91bmQiLCJlbWFpbCIsImNoZWNrIiwic2luZ2xlUHJvZHVjdGxvYWRlciIsImxvYWRlciIsIndhdGNoQWxsIiwiYWxsIiwidGFrZUV2ZXJ5IiwiYWN0aW9uVHlwZXMiLCJoYW5kbEdldFByb2R1Y3RzIiwiaGFuZGxHZXRTaW5nbGVQcm9kdWN0IiwiaGFuZGxHZXRVc2VycyIsImNhbGwiLCJwdXQiLCJkYXRhIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJtYWtlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsInJvb3RTYWdhIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NB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QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgKiBhcyBIYW5kbGVycyBmcm9tICcuL2hhbmRsZXJzL3Byb2R1Y3RzJ1xyXG5cclxuY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOlwiaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL1wiXHJcbn0pXHJcblxyXG4vL2ludGVyY2VwdG9yc1xyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICAgIHJlcXVlc3Q9PkhhbmRsZXJzLmhhbmRsZVJlcXVlc3QocmVxdWVzdClcclxuKVxyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICByZXNwb25zZT0+SGFuZGxlcnMuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpLFxyXG4gICAgZXJyb3I9PkhhbmRsZXJzLmhhbmRsZUVycm9yKGVycm9yKVxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvc0luc3RhbmNlOyIsImltcG9ydCBheGlvc0luc3RhbmNlIGZyb20gXCIuLi9sb2dpblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RVc2Vyc0Zyb21BcGkgPSBhc3luYyAoKSA9PiB7XHJcbiAgcmV0dXJuIGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KFwidXNlcnNcIik7XHJcbn07XHJcbiIsImltcG9ydCBheGlvc0luc3RhbmNlIGZyb20gXCIuLi9CYXNlVXJsXCI7XHJcbmltcG9ydCAqIGFzIEhhbmRsZXJzIGZyb20gXCIuLi9oYW5kbGVycy9wcm9kdWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2luZ2xlUHJvZHVjdEZyb21BcGkgPSBhc3luYyAoaWQpID0+IHtcclxuICByZXR1cm4gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoXCJwcm9kdWN0cy9cIiArIGlkKTtcclxufTtcclxuXHJcbi8vaW50ZXJjZXB0b3JzXHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChyZXF1ZXN0KSA9PlxyXG4gIEhhbmRsZXJzLmhhbmRsZVJlcXVlc3QocmVxdWVzdClcclxuKTtcclxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gIChyZXNwb25zZSkgPT4gSGFuZGxlcnMuaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpLFxyXG4gIChlcnJvcikgPT4gSGFuZGxlcnMuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbik7XHJcbiIsImltcG9ydCBheGlvc0luc3RhbmNlIGZyb20gXCIuLi9CYXNlVXJsXCI7XHJcbmltcG9ydCAqIGFzIEhhbmRsZXJzIGZyb20gXCIuLi9oYW5kbGVycy9wcm9kdWN0c1wiO1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNGcm9tQXBpID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBheGlvc0luc3RhbmNlLmdldChcInByb2R1Y3RzXCIpO1xyXG59O1xyXG5cclxuLy9pbnRlcmNlcHRvcnNcclxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKHJlcXVlc3QpID0+XHJcbiAgSGFuZGxlcnMuaGFuZGxlUmVxdWVzdChyZXF1ZXN0KVxyXG4pO1xyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgKHJlc3BvbnNlKSA9PiBIYW5kbGVycy5oYW5kbGVSZXNwb25zZShyZXNwb25zZSksXHJcbiAgKGVycm9yKSA9PiBIYW5kbGVycy5oYW5kbGVFcnJvcihlcnJvcilcclxuKTtcclxuIiwiZXhwb3J0IGNvbnN0IGhhbmRsZVJlcXVlc3QgPSAocmVxdWVzdCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0O1xyXG59O1xyXG5leHBvcnQgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAocmVzcG9uc2UpID0+IHtcclxuICByZXR1cm4gcmVzcG9uc2U7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcikgPT4ge1xyXG4gIHJldHVybiBQcm9taXNlLnJlamVjdCh7IC4uLmVycm9yIH0pO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgaGFuZGxlUmVxdWVzdCA9IChyZXF1ZXN0KSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Q7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZUVycm9yID0gKGVycm9yKSA9PiB7XHJcbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgLi4uZXJyb3IgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBoYW5kbGVSZXF1ZXN0ID0gKHJlcXVlc3QpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdDtcclxufTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5leHBvcnQgY29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3IpID0+IHtcclxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoeyAuLi5lcnJvciB9KTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyBIYW5kbGVycyBmcm9tIFwiLi9oYW5kbGVycy9sb2dpblwiO1xyXG5cclxuY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vXCIsXHJcbn0pO1xyXG5cclxuLy9pbnRlcmNlcHRvcnNcclxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKHJlcXVlc3QpID0+XHJcbiAgSGFuZGxlcnMuaGFuZGxlUmVxdWVzdChyZXF1ZXN0KVxyXG4pO1xyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgKHJlc3BvbnNlKSA9PiBIYW5kbGVycy5oYW5kbGVSZXNwb25zZShyZXNwb25zZSksXHJcbiAgKGVycm9yKSA9PiBIYW5kbGVycy5oYW5kbGVFcnJvcihlcnJvcilcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zSW5zdGFuY2U7XHJcbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcblxyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZXMuZ2xvYmFsLnNjc3NcIjtcclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvLyA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAvLyA8L1Byb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlIGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uVHlwZXNcIjtcclxuXHJcbi8vUFJPRFVDVFNcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gKCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLlBST0RVQ1RfUkVRVUVTVCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzaG93UHJvZHVjdHMgPSAocmVzcG9uc2UpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5QUk9EVUNUX1JFU1BPTlNFLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHByb2R1Y3RzOiByZXNwb25zZSxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3RVc2Vyc0Zyb21BcGkgPSgpPT4oe1xyXG4gICAgdHlwZTphY3Rpb25UeXBlLlJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2Vyc0Zyb21BcGkgPSh1c2Vycyk9Pih7XHJcbiAgICB0eXBlOmFjdGlvblR5cGUuR0VUX1VTRVJTX0ZST01fRkFLRV9BUEksXHJcbiAgICBwYXlsb2FkOntcclxuICAgICAgICB1c2Vyczp1c2Vyc1xyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrTG9naW5Vc2VyID0odXNlcik9Pih7XHJcbiAgICB0eXBlOmFjdGlvblR5cGUuQ0hFQ0tfTE9HSU5fVVNFUixcclxuICAgIHBheWxvYWQ6e1xyXG4gICAgICAgIHVzZXI6dXNlcixcclxuICAgIH1cclxufSlcclxuIiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzXCI7XHJcblxyXG4vL3NpbmdsZSBwcm9kdWN0XHJcbmV4cG9ydCBjb25zdCBnZXRTaW5nbGVQcm9kdWN0ID0gKGlkKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNULFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHNpbmdsZVByb2R1Y3RJZDogaWQsXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzaG93U2luZ2xlUHJvZHVjdCA9IChyZXNwb25zZSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLkdFVF9TSU5HTExFX1BST0RVQ1QsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgc2luZ2xlUHJvZHVjdDogcmVzcG9uc2UsXHJcbiAgfSxcclxufSk7XHJcbiIsIi8vUFJPRFVDVFNcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfUkVRVUVTVCA9IFwiUFJPRFVDVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX1JFU1BPTlNFID0gXCJQUk9EVUNUX1JFU1BPTlNFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FESU5HID0gXCJMT0FESU5HXCI7XHJcblxyXG4vL1NJTkdMRSBQUk9EVUNUXHJcbmV4cG9ydCBjb25zdCBQUkVRVUVTVF9TSU5HTExFX1BST0RVQ1QgPSBcIlBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NJTkdMTEVfUFJPRFVDVCA9IFwiR0VUX1NJTkdMTEVfUFJPRFVDVFwiO1xyXG5cclxuLy9DQVJUXHJcbmV4cG9ydCBjb25zdCBBRERfSVRFTV9UT19DQVJUID0gXCJBRERfSVRFTV9UT19DQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfSVRFTV9JTl9DQVJUID0gXCJERUxFVEVfSVRFTV9JTl9DQVJUXCI7XHJcbi8vcXVhbnRpdHlcclxuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9RVUFOVElUWSA9IFwiSU5DUkVNRU5UX1FVQU5USVRZXCI7XHJcbmV4cG9ydCBjb25zdCBERUNSRU1FTlRfUVVBTlRJVFkgPSBcIkRFQ1JFTUVOVF9RVUFOVElUWVwiO1xyXG5cclxuLy9sb2dpblxyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSU19GUk9NX0ZBS0VfQVBJID0gXCJSRVFVRVNUX1VTRVJTX0ZST01fRkFLRV9BUElcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSU19GUk9NX0ZBS0VfQVBJID0gXCJHRVRfVVNFUlNfRlJPTV9GQUtFX0FQSVwiO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfTE9HSU5fVVNFUiA9IFwiQ0hFQ0tfTE9HSU5fVVNFUlwiO1xyXG4iLCIvL3JlZHVjZXIoYWN0aW9uLHN0YXRlKSAvL3JldHVybiB1cGRhdGUgc3RhdGVcclxuXHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5jb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgY2FydDogW10sXHJcbiAgaXRlbXNOdW06IDAsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcnRSZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGUuQUREX0lURU1fVE9fQ0FSVDoge1xyXG4gICAgICBsZXQgbmV3SXRlbSA9IGFjdGlvbi5wYXlsb2FkLm5ld0l0ZW07XHJcbiAgICAgIGxldCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IG5ld0l0ZW0uaWQpOyAvL2NoZWNrIGlmIGl0ZW0gZXhpc3QgaW4gY2FydCBvciBub3RcclxuICAgICAgaWYgKCFleGlzdEl0ZW0pIHtcclxuICAgICAgICBuZXdJdGVtLnF1YW50aXR5ID0gMTsgLy9pZiBub3QgZXhpc3QgYWRkIGl0IHdpdGggcSA9IDFcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBjYXJ0TG9hZGVyOiBmYWxzZSxcclxuICAgICAgICAgIG5ld0l0ZW0sXHJcbiAgICAgICAgICBpdGVtc051bTogc3RhdGUuaXRlbXNOdW0gKyAxLCAvL2luYyBubyBvZiBpdGVtcyB0byBiYWRnZSBub1xyXG4gICAgICAgICAgY2FydDogWy4uLnN0YXRlLmNhcnQsIG5ld0l0ZW1dLCAvL3JlbG9hZCBjYXJ0XHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdJdGVtLnF1YW50aXR5ICs9IDE7IC8vaWYgaXRlbSBpcyBhbHJlYWR5IGV4aXQgaW4gY2FydCAvL2luYyBpdCdzIHF1YW50aXR5XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgY2FydExvYWRlcjogZmFsc2UsXHJcbiAgICAgICAgICBuZXdJdGVtLFxyXG4gICAgICAgICAgaXRlbXNOdW06IHN0YXRlLml0ZW1zTnVtLFxyXG4gICAgICAgICAgY2FydDogWy4uLnN0YXRlLmNhcnRdLCAvL3JlbG9hZCBjYXJ0XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlLkRFTEVURV9JVEVNX0lOX0NBUlQ6IHtcclxuICAgICAgbGV0IGRlbGV0ZWRJdGVtID0gYWN0aW9uLnBheWxvYWQuZGVsZXRlZEl0ZW07XHJcbiAgICAgIGRlbGV0ZWRJdGVtLnF1YW50aXR5ID0gMDsgLy9zZXQgcXVhbnRpdHkgb2YgZGVsZXRlZCBpdGVtIHRvIDBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkZWxldGVkSXRlbSxcclxuICAgICAgICBpdGVtc051bTogc3RhdGUuaXRlbXNOdW0gLSAxLFxyXG4gICAgICAgIGNhcnQ6IHN0YXRlLmNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBkZWxldGVkSXRlbS5pZCksIC8vZmlsdGVyIGNhcnQgYWZ0ZXIgZGVsZXRlIGl0ZW1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZS5JTkNSRU1FTlRfUVVBTlRJVFk6IHtcclxuICAgICAgbGV0IGl0ZW0gPSBhY3Rpb24ucGF5bG9hZC5pdGVtO1xyXG4gICAgICBsZXQgbmV3Q2FydCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUuY2FydCkpOyAvL2RlZXAgY29weVxyXG4gICAgICBsZXQgaW5kZXggPSBuZXdDYXJ0LmZpbmRJbmRleCgoaXRlbXgpID0+IGl0ZW14LmlkID09PSBpdGVtLmlkKTsgLy8gZmluZCB0aGlzIGl0ZW0gaW4gY2FydFxyXG4gICAgICBpdGVtLnF1YW50aXR5ID0gKytpdGVtLnF1YW50aXR5OyAvL2luYyBpdCdzIHFcclxuICAgICAgbmV3Q2FydC5zcGxpY2UoaW5kZXgsIDEsIGl0ZW0pOyAvL3JlcGxhY2UgaXQgd2l0aCBuZXcgaXRlbVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IFsuLi5uZXdDYXJ0XSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZS5ERUNSRU1FTlRfUVVBTlRJVFk6IHtcclxuICAgICAgbGV0IGl0ZW0gPSBhY3Rpb24ucGF5bG9hZC5pdGVtO1xyXG4gICAgICBsZXQgbmV3Q2FydCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RhdGUuY2FydCkpOyAvL2RlZXAgY29weVxyXG4gICAgICBsZXQgaW5kZXggPSBzdGF0ZS5jYXJ0LmluZGV4T2YoaXRlbSk7IC8vIGZpbmQgdGhpcyBpdGVtIGluIGNhcnRcclxuICAgICAgaXRlbS5xdWFudGl0eSA9IC0taXRlbS5xdWFudGl0eTsgLy9kZWMgaXRzIHF1YW50aXR5XHJcblxyXG4gICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaXRlbS5xdWFudGl0eSA9PT0gMCkge1xyXG4gICAgICAgIC8vaWYgcT0wXHJcbiAgICAgICAgbmV3Q2FydCA9IG5ld0NhcnQuZmlsdGVyKFxyXG4gICAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgIT09IGFjdGlvbi5wYXlsb2FkLml0ZW0uaWQgLy9kZWxldGUgdGhpcyBpdGVtXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzdGF0ZS5pdGVtc051bSA9IHN0YXRlLml0ZW1zTnVtIC0gMTsgLy9kZWMgbm8gb2YgaXRlbXMgaW4gYmFkZ2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdDYXJ0LnNwbGljZShpbmRleCwgMSwgaXRlbSk7IC8vZWxzZSBkZWMgaXQncyBxdWFudGl0eVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydDogWy4uLm5ld0NhcnRdLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHByb2R1Y3RzUmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0c1wiO1xyXG5pbXBvcnQgc2luZ2xlUHJvZHVjdFJlZHVjZXIgZnJvbSBcIi4vcHJvZHVjdFwiO1xyXG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSBcIi4vY2FydFwiO1xyXG5pbXBvcnQgbG9naW5SZWR1Y2VyIGZyb20gXCIuL2xvZ2luXCI7XHJcbmNvbnN0IHJvb3RSZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgcHJvZHVjdHNSZWR1Y2VyLFxyXG4gIHNpbmdsZVByb2R1Y3RSZWR1Y2VyLFxyXG4gIGNhcnRSZWR1Y2VyLFxyXG4gIGxvZ2luUmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcnM7XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpblJlZHVjZXIoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlLkdFVF9VU0VSU19GUk9NX0ZBS0VfQVBJOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlcnM6IGFjdGlvbi5wYXlsb2FkLnVzZXJzLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlLkNIRUNLX0xPR0lOX1VTRVI6IHtcclxuICAgICAgbGV0IHVzZXJzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdGF0ZS51c2VycykpOyAvL2RlZXAgY29weVxyXG4gICAgICBsZXQgZm91bmQgPSB1c2Vycy5maW5kKFxyXG4gICAgICAgICh1c2VyKSA9PiB1c2VyLmVtYWlsID09PSBhY3Rpb24ucGF5bG9hZC51c2VyLmVtYWlsXHJcbiAgICAgICk7IC8vY2hlY2sgZm9yIHRoaXMgdXNlciBpbiBhcGkgYXJyYXlcclxuICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICAgIGlmIChmb3VuZCkgY2hlY2sgPSB0cnVlO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgY2hlY2s6IGNoZWNrLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCIvL3JlZHVjZXIoYWN0aW9uLHN0YXRlKSAvL3JldHVybiB1cGRhdGUgc3RhdGVcclxuXHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW5nbGVQcm9kdWN0UmVkdWNlcihzdGF0ZSA9IHt9LCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIGFjdGlvblR5cGUuUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2luZ2xlUHJvZHVjdGxvYWRlcjogdHJ1ZSxcclxuICAgICAgICBpZDogYWN0aW9uLnBheWxvYWQuc2luZ2xlUHJvZHVjdElkLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBhY3Rpb25UeXBlLkdFVF9TSU5HTExFX1BST0RVQ1Q6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzaW5nbGVQcm9kdWN0bG9hZGVyOiBmYWxzZSxcclxuICAgICAgICBzaW5nbGVQcm9kdWN0OiBhY3Rpb24ucGF5bG9hZC5zaW5nbGVQcm9kdWN0LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCIvL3JlZHVjZXIoYWN0aW9uLHN0YXRlKSAvL3JldHVybiB1cGRhdGUgc3RhdGVcclxuXHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9kdWN0c1JlZHVjZXIoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBhY3Rpb25UeXBlLlBST0RVQ1RfUkVRVUVTVDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxvYWRlcjogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgYWN0aW9uVHlwZS5QUk9EVUNUX1JFU1BPTlNFOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkLnByb2R1Y3RzLFxyXG4gICAgICAgIGxvYWRlcjogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5pbXBvcnQgeyB0YWtlRXZlcnksIGFsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7aGFuZGxHZXRQcm9kdWN0c30gZnJvbSAnLi9wcm9kdWN0cyc7XHJcbmltcG9ydCB7aGFuZGxHZXRTaW5nbGVQcm9kdWN0fSBmcm9tICcuL3Byb2R1Y3QnXHJcbmltcG9ydCB7aGFuZGxHZXRVc2Vyc30gZnJvbSAnLi9sb2dpbidcclxuaW1wb3J0IHt9IGZyb20gJy4vbG9naW4nXHJcbmltcG9ydCAqIGFzIGFjdGlvblR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb25UeXBlcyc7XHJcbmZ1bmN0aW9uKiB3YXRjaEFsbCgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlBST0RVQ1RfUkVRVUVTVCxoYW5kbEdldFByb2R1Y3RzKSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5QUkVRVUVTVF9TSU5HTExFX1BST0RVQ1QsaGFuZGxHZXRTaW5nbGVQcm9kdWN0KSxcclxuICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5SRVFVRVNUX1VTRVJTX0ZST01fRkFLRV9BUEksaGFuZGxHZXRVc2VycyksXHJcbiAgXSlcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IHdhdGNoQWxsOyIsImltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFVzZXJzRnJvbUFwaSB9IGZyb20gXCIuLi8uLi9uZXR3b3JrL2FwaS9sb2dpblwiO1xyXG5pbXBvcnQgeyBnZXRVc2Vyc0Zyb21BcGkgfSBmcm9tIFwiLi4vYWN0aW9ucy9sb2dpblwiO1xyXG5cclxuZnVuY3Rpb24qIGhhbmRsR2V0VXNlcnMoYWN0aW9uKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKHJlcXVlc3RVc2Vyc0Zyb21BcGkpO1xyXG4gIHlpZWxkIHB1dChnZXRVc2Vyc0Zyb21BcGkocmVzcG9uc2UuZGF0YSkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBoYW5kbEdldFVzZXJzIH07XHJcbiIsImltcG9ydCB7IGNhbGwsIHB1dCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0U2luZ2xlUHJvZHVjdEZyb21BcGkgfSBmcm9tIFwiLi4vLi4vbmV0d29yay9hcGkvcHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBzaG93U2luZ2xlUHJvZHVjdCB9IGZyb20gXCIuLi9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuXHJcbmZ1bmN0aW9uKiBoYW5kbEdldFNpbmdsZVByb2R1Y3QoYWN0aW9uKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKFxyXG4gICAgZ2V0U2luZ2xlUHJvZHVjdEZyb21BcGksXHJcbiAgICBhY3Rpb24ucGF5bG9hZC5zaW5nbGVQcm9kdWN0SWRcclxuICApO1xyXG4gIHlpZWxkIHB1dChzaG93U2luZ2xlUHJvZHVjdChyZXNwb25zZS5kYXRhKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGhhbmRsR2V0U2luZ2xlUHJvZHVjdCB9O1xyXG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RzRnJvbUFwaSB9IGZyb20gXCIuLi8uLi9uZXR3b3JrL2FwaS9wcm9kdWN0c1wiO1xyXG5pbXBvcnQgeyBzaG93UHJvZHVjdHMgfSBmcm9tIFwiLi4vYWN0aW9ucy9hY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiogaGFuZGxHZXRQcm9kdWN0cyhhY3Rpb24pIHtcclxuICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZ2V0UHJvZHVjdHNGcm9tQXBpKTtcclxuICB5aWVsZCBwdXQoc2hvd1Byb2R1Y3RzKHJlc3BvbnNlLmRhdGEpKTtcclxufVxyXG5cclxuZXhwb3J0IHsgaGFuZGxHZXRQcm9kdWN0cyB9O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXJzIGZyb20gXCIuLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2EvaW5kZXhcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmUpID0+IHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7XHJcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xyXG4gIH1cclxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXJzLCBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKSk7XHJcblxyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuXHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgeyBkZWJ1ZzogdHJ1ZSB9KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==