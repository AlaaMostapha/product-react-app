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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Btn/Btn.js":
/*!***********************************!*\
  !*** ./src/components/Btn/Btn.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\components\\Btn\\Btn.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));
function CreateButton(props) {
  const {
    color,
    text,
    href,
    onClick
  } = props,
        rest = _objectWithoutProperties(props, ["color", "text", "href", "onClick"]);

  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({
      variant: "contained",
      color: color,
      href: href,
      onClick: onClick
    }, rest), {}, {
      children: text
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Card/Card.js":
/*!*************************************!*\
  !*** ./src/components/Card/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.module.scss */ "./src/components/Card/Card.module.scss");
/* harmony import */ var _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/Card/style.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\components\\Card\\Card.js";








function MediaCard({
  title,
  discription,
  img,
  alt,
  btn
}) {
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_3__["useStyles"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: classes.media,
        image: img,
        alt: alt,
        title: "Contemplative Reptile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
          gutterBottom: true,
          variant: "h5",
          component: "h2",
          className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.limitCharacters,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
          variant: "body2",
          color: "textSecondary",
          component: "p",
          className: _Card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.limitCharacters,
          children: discription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), btn ? btn : ""]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Card/Card.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Card/Card.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"limitCharacters": "Card_limitCharacters__1stam"
};


/***/ }),

/***/ "./src/components/Card/style.js":
/*!**************************************!*\
  !*** ./src/components/Card/style.js ***!
  \**************************************/
/*! exports provided: useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

/***/ }),

/***/ "./src/components/LoadingIndicator/LoadingIndicator.js":
/*!*************************************************************!*\
  !*** ./src/components/LoadingIndicator/LoadingIndicator.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingIndicator; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\components\\LoadingIndicator\\LoadingIndicator.js";


function LoadingIndicator() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-center",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "Puff",
      color: "#00BFFF",
      height: 100,
      width: 100,
      timeout: 3000 //3 secs

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/quantity/quantity.js":
/*!*********************************************!*\
  !*** ./src/components/quantity/quantity.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantity.module.scss */ "./src/components/quantity/quantity.module.scss");
/* harmony import */ var _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_quantity_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\components\\quantity\\quantity.js";





function Quantity(props) {
  const {
    item
  } = props;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const inputRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(0); //set default value of input value with quantity from another pages

  const {
    0: inputValue,
    1: setinputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(item.quantity);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setinputValue(item.quantity);
  }, [item.quantity]);

  const decreaseValue = () => {
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_4__["decrementQuantity"](item));

    if (item.quantity <= 0) {
      item.quantity = 0;
      setinputValue(item.quantity);
    }

    setinputValue(item.quantity);
  };

  const increaseValue = () => {
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_4__["incrementQuantity"](item));
    setinputValue(item.quantity);
  };

  const handleChange = event => {// console.log(props)
    // setinputValue(event.target.value);
    //   console.log(onChangeQuantity(inputValue))
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.quantity,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.valueButton,
      id: _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.decrease,
      onClick: decreaseValue,
      value: "Decrease Value",
      children: "-"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "number",
      id: "number",
      value: inputValue,
      ref: inputRef,
      onChange: handleChange,
      class: _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inputStyle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.valueButton,
      id: _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.increase,
      onClick: increaseValue,
      value: "Increase Value",
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Quantity);

/***/ }),

/***/ "./src/components/quantity/quantity.module.scss":
/*!******************************************************!*\
  !*** ./src/components/quantity/quantity.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"valueButton": "quantity_valueButton__23gUg",
	"quantity": "quantity_quantity__34p45",
	"decrease": "quantity_decrease__1CjRP",
	"increase": "quantity_increase__2zY4y",
	"input-wrap": "quantity_input-wrap__yG_D8",
	"number": "quantity_number__1N3G0",
	"inputStyle": "quantity_inputStyle__37RJq",
	"quantity-input": "quantity_quantity-input__2XMl6",
	"MuiInputBase-root": "quantity_MuiInputBase-root__3S9Dm"
};


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productList.module.scss */ "./src/pages/productList.module.scss");
/* harmony import */ var _productList_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_productList_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card/Card */ "./src/components/Card/Card.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/quantity/quantity */ "./src/components/quantity/quantity.js");
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/actions */ "./src/redux/actions/actions.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\index.js";

 //material ui components




 //custom components



 //store



 //history



function ProductList() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.cartReducer.cart);
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.productsReducer.products);
  const loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.productsReducer.loader);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //when component mount get all products
    dispatch(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_11__["getProducts"]());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //if there are items in cart
    if (cart) {
      //get there indexes in product list
      let indexesOfCartItems = cart.map(cartItem => {
        return products.findIndex(itemx => itemx.id === cartItem.id);
      }); //replace them with items in product list
      //to get them updated with last quantity applied in cart at the same time

      for (let i = 0; i < indexesOfCartItems.length; i++) {
        products.splice(indexesOfCartItems[i], 1, cart[i]);
      }
    }
  }, [products, cart]);

  const addItem = item => {
    //add clicked product to cart
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_12__["addItemInCart"](item)); //check if this item is in cart & has quantity return it and update products

    const checkProduct = cart.find(product => product.id === item.id); //check if it was in cart

    if (checkProduct) {
      const itemIndexInProducts = products.findIndex(itemx => itemx.id === item.id); //get it's index from products

      products[itemIndexInProducts] = checkProduct; //replace it with old one

      if (itemIndexInProducts !== -1) {
        dispatch(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_11__["showProducts"](products)); //update
      }
    }
  };

  const createList = () => {
    if (products) {
      return (products || []).map((product, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
          item: true,
          xs: 3,
          className: _productList_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gridCustom,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
            onClick: () => router.push(`/productDetailsNext/${product.id}`),
            mb: "2rem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: product.title,
              discription: product.description,
              img: product.image,
              alt: product.title
            }, product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)
          }, product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center",
            style: {
              margin: "5px"
            },
            children: product.quantity > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__["default"], {
              item: product
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
              color: "primary",
              text: "Add to cart",
              onClick: () => addItem(product)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, product.id, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this);
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    maxWidth: "lg",
    className: _productList_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ProductListContainer,
    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default.a, {
      container: true,
      spacing: 2,
      children: createList()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./src/pages/productList.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/productList.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ProductListContainer": "productList_ProductListContainer__mVUbn",
	"gridCustom": "productList_gridCustom__2RR5p"
};


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

/***/ "./src/redux/actions/cart.js":
/*!***********************************!*\
  !*** ./src/redux/actions/cart.js ***!
  \***********************************/
/*! exports provided: addItemInCart, deleteItemInCart, incrementQuantity, decrementQuantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemInCart", function() { return addItemInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItemInCart", function() { return deleteItemInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementQuantity", function() { return incrementQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementQuantity", function() { return decrementQuantity; });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/actionTypes */ "./src/redux/constants/actionTypes.js");
 //cart

const addItemInCart = item => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_ITEM_TO_CART"],
  payload: {
    newItem: item
  }
});
const deleteItemInCart = item => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_ITEM_IN_CART"],
  payload: {
    deletedItem: item
  }
});
const incrementQuantity = item => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_QUANTITY"],
  payload: {
    item
  }
});
const decrementQuantity = item => ({
  type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_QUANTITY"],
  payload: {
    item
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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnRuL0J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdExpc3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9jb25zdGFudHMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRlci1zcGlubmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIkNyZWF0ZUJ1dHRvbiIsInByb3BzIiwiY29sb3IiLCJ0ZXh0IiwiaHJlZiIsIm9uQ2xpY2siLCJyZXN0IiwiY2xhc3NlcyIsIk1lZGlhQ2FyZCIsInRpdGxlIiwiZGlzY3JpcHRpb24iLCJpbWciLCJhbHQiLCJidG4iLCJtZWRpYSIsInN0eWxlcyIsImxpbWl0Q2hhcmFjdGVycyIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiTG9hZGluZ0luZGljYXRvciIsIlF1YW50aXR5IiwiaXRlbSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbnB1dFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiaW5wdXRWYWx1ZSIsInNldGlucHV0VmFsdWUiLCJ1c2VTdGF0ZSIsInF1YW50aXR5IiwidXNlRWZmZWN0IiwiZGVjcmVhc2VWYWx1ZSIsImNhcnRBY3Rpb25zIiwiaW5jcmVhc2VWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWVCdXR0b24iLCJkZWNyZWFzZSIsImlucHV0U3R5bGUiLCJpbmNyZWFzZSIsIlByb2R1Y3RMaXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY2FydCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXJ0UmVkdWNlciIsInByb2R1Y3RzIiwicHJvZHVjdHNSZWR1Y2VyIiwibG9hZGluZyIsImxvYWRlciIsInByb2R1Y3RzQWN0aW9ucyIsImluZGV4ZXNPZkNhcnRJdGVtcyIsIm1hcCIsImNhcnRJdGVtIiwiZmluZEluZGV4IiwiaXRlbXgiLCJpZCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJhZGRJdGVtIiwiY2hlY2tQcm9kdWN0IiwiZmluZCIsInByb2R1Y3QiLCJpdGVtSW5kZXhJblByb2R1Y3RzIiwiY3JlYXRlTGlzdCIsImluZGV4IiwiZ3JpZEN1c3RvbSIsInB1c2giLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiUHJvZHVjdExpc3RDb250YWluZXIiLCJnZXRQcm9kdWN0cyIsInR5cGUiLCJhY3Rpb25UeXBlIiwiUFJPRFVDVF9SRVFVRVNUIiwic2hvd1Byb2R1Y3RzIiwicmVzcG9uc2UiLCJwYXlsb2FkIiwiYWRkSXRlbUluQ2FydCIsIm5ld0l0ZW0iLCJkZWxldGVJdGVtSW5DYXJ0IiwiZGVsZXRlZEl0ZW0iLCJpbmNyZW1lbnRRdWFudGl0eSIsImRlY3JlbWVudFF1YW50aXR5IiwiUFJPRFVDVF9SRVNQT05TRSIsIkxPQURJTkciLCJQUkVRVUVTVF9TSU5HTExFX1BST0RVQ1QiLCJHRVRfU0lOR0xMRV9QUk9EVUNUIiwiQUREX0lURU1fVE9fQ0FSVCIsIkRFTEVURV9JVEVNX0lOX0NBUlQiLCJJTkNSRU1FTlRfUVVBTlRJVFkiLCJERUNSRU1FTlRfUVVBTlRJVFkiLCJSRVFVRVNUX1VTRVJTX0ZST01fRkFLRV9BUEkiLCJHRVRfVVNFUlNfRlJPTV9GQUtFX0FQSSIsIkNIRUNLX0xPR0lOX1VTRVIiXSwibWFwcGluZ3MiOiI7O1FB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Ozs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlQnV0dG9uKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjb2xvciwgdGV4dCwgaHJlZiwgb25DbGljaywgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCI7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIjtcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWRpYUNhcmQoeyB0aXRsZSwgZGlzY3JpcHRpb24sIGltZywgYWx0LCBidG4gfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgIGltYWdlPXtpbWd9XHJcbiAgICAgICAgICBhbHQ9e2FsdH1cclxuICAgICAgICAgIHRpdGxlPVwiQ29udGVtcGxhdGl2ZSBSZXB0aWxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiaDVcIlxyXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJoMlwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbWl0Q2hhcmFjdGVyc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbWl0Q2hhcmFjdGVyc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2Rpc2NyaXB0aW9ufVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgIHtidG4gPyBidG4gOiBcIlwifVxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGltaXRDaGFyYWN0ZXJzXCI6IFwiQ2FyZF9saW1pdENoYXJhY3RlcnNfXzFzdGFtXCJcbn07XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5leHBvcnQgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWF4V2lkdGg6IDM0NSxcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDE0MCxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgIDxMb2FkZXJcclxuICAgICAgICB0eXBlPVwiUHVmZlwiXHJcbiAgICAgICAgY29sb3I9XCIjMDBCRkZGXCJcclxuICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgIHRpbWVvdXQ9ezMwMDB9IC8vMyBzZWNzXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcXVhbnRpdHkubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG5cclxuZnVuY3Rpb24gUXVhbnRpdHkocHJvcHMpIHtcclxuICBjb25zdCB7IGl0ZW0gfSA9IHByb3BzO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigwKTtcclxuICAvL3NldCBkZWZhdWx0IHZhbHVlIG9mIGlucHV0IHZhbHVlIHdpdGggcXVhbnRpdHkgZnJvbSBhbm90aGVyIHBhZ2VzXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldGlucHV0VmFsdWVdID0gdXNlU3RhdGUoaXRlbS5xdWFudGl0eSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldGlucHV0VmFsdWUoaXRlbS5xdWFudGl0eSk7XHJcbiAgfSwgW2l0ZW0ucXVhbnRpdHldKTtcclxuXHJcbiAgY29uc3QgZGVjcmVhc2VWYWx1ZSA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmRlY3JlbWVudFF1YW50aXR5KGl0ZW0pKTtcclxuICAgIGlmIChpdGVtLnF1YW50aXR5IDw9IDApIHtcclxuICAgICAgaXRlbS5xdWFudGl0eSA9IDA7XHJcbiAgICAgIHNldGlucHV0VmFsdWUoaXRlbS5xdWFudGl0eSk7XHJcbiAgICB9XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY3JlYXNlVmFsdWUgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5pbmNyZW1lbnRRdWFudGl0eShpdGVtKSk7XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIC8vIHNldGlucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vICAgY29uc29sZS5sb2cob25DaGFuZ2VRdWFudGl0eShpbnB1dFZhbHVlKSlcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1YW50aXR5fT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlQnV0dG9ufVxyXG4gICAgICAgIGlkPXtzdHlsZXMuZGVjcmVhc2V9XHJcbiAgICAgICAgb25DbGljaz17ZGVjcmVhc2VWYWx1ZX1cclxuICAgICAgICB2YWx1ZT1cIkRlY3JlYXNlIFZhbHVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIC1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIGlkPVwibnVtYmVyXCJcclxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3M9e3N0eWxlcy5pbnB1dFN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVCdXR0b259XHJcbiAgICAgICAgaWQ9e3N0eWxlcy5pbmNyZWFzZX1cclxuICAgICAgICBvbkNsaWNrPXtpbmNyZWFzZVZhbHVlfVxyXG4gICAgICAgIHZhbHVlPVwiSW5jcmVhc2UgVmFsdWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgK1xyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUXVhbnRpdHk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInZhbHVlQnV0dG9uXCI6IFwicXVhbnRpdHlfdmFsdWVCdXR0b25fXzIzZ1VnXCIsXG5cdFwicXVhbnRpdHlcIjogXCJxdWFudGl0eV9xdWFudGl0eV9fMzRwNDVcIixcblx0XCJkZWNyZWFzZVwiOiBcInF1YW50aXR5X2RlY3JlYXNlX18xQ2pSUFwiLFxuXHRcImluY3JlYXNlXCI6IFwicXVhbnRpdHlfaW5jcmVhc2VfXzJ6WTR5XCIsXG5cdFwiaW5wdXQtd3JhcFwiOiBcInF1YW50aXR5X2lucHV0LXdyYXBfX3lHX0Q4XCIsXG5cdFwibnVtYmVyXCI6IFwicXVhbnRpdHlfbnVtYmVyX18xTjNHMFwiLFxuXHRcImlucHV0U3R5bGVcIjogXCJxdWFudGl0eV9pbnB1dFN0eWxlX18zN1JKcVwiLFxuXHRcInF1YW50aXR5LWlucHV0XCI6IFwicXVhbnRpdHlfcXVhbnRpdHktaW5wdXRfXzJYTWw2XCIsXG5cdFwiTXVpSW5wdXRCYXNlLXJvb3RcIjogXCJxdWFudGl0eV9NdWlJbnB1dEJhc2Utcm9vdF9fM1M5RG1cIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wcm9kdWN0TGlzdC5tb2R1bGUuc2Nzc1wiO1xyXG4vL21hdGVyaWFsIHVpIGNvbXBvbmVudHNcclxuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkL0NhcmRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuLy9jdXN0b20gY29tcG9uZW50c1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG4vL3N0b3JlXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0c0FjdGlvbnMgZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbi8vaGlzdG9yeVxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLmNhcnQpO1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0c1JlZHVjZXIucHJvZHVjdHMpO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzUmVkdWNlci5sb2FkZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL3doZW4gY29tcG9uZW50IG1vdW50IGdldCBhbGwgcHJvZHVjdHNcclxuICAgIGRpc3BhdGNoKHByb2R1Y3RzQWN0aW9ucy5nZXRQcm9kdWN0cygpKTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vaWYgdGhlcmUgYXJlIGl0ZW1zIGluIGNhcnRcclxuICAgIGlmIChjYXJ0KSB7XHJcbiAgICAgIC8vZ2V0IHRoZXJlIGluZGV4ZXMgaW4gcHJvZHVjdCBsaXN0XHJcbiAgICAgIGxldCBpbmRleGVzT2ZDYXJ0SXRlbXMgPSBjYXJ0Lm1hcCgoY2FydEl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdHMuZmluZEluZGV4KChpdGVteCkgPT4gaXRlbXguaWQgPT09IGNhcnRJdGVtLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vcmVwbGFjZSB0aGVtIHdpdGggaXRlbXMgaW4gcHJvZHVjdCBsaXN0XHJcbiAgICAgIC8vdG8gZ2V0IHRoZW0gdXBkYXRlZCB3aXRoIGxhc3QgcXVhbnRpdHkgYXBwbGllZCBpbiBjYXJ0IGF0IHRoZSBzYW1lIHRpbWVcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzT2ZDYXJ0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwcm9kdWN0cy5zcGxpY2UoaW5kZXhlc09mQ2FydEl0ZW1zW2ldLCAxLCBjYXJ0W2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0cywgY2FydF0pO1xyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgLy9hZGQgY2xpY2tlZCBwcm9kdWN0IHRvIGNhcnRcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmFkZEl0ZW1JbkNhcnQoaXRlbSkpO1xyXG4gICAgLy9jaGVjayBpZiB0aGlzIGl0ZW0gaXMgaW4gY2FydCAmIGhhcyBxdWFudGl0eSByZXR1cm4gaXQgYW5kIHVwZGF0ZSBwcm9kdWN0c1xyXG4gICAgY29uc3QgY2hlY2tQcm9kdWN0ID0gY2FydC5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpdGVtLmlkKTsgLy9jaGVjayBpZiBpdCB3YXMgaW4gY2FydFxyXG4gICAgaWYgKGNoZWNrUHJvZHVjdCkge1xyXG4gICAgICBjb25zdCBpdGVtSW5kZXhJblByb2R1Y3RzID0gcHJvZHVjdHMuZmluZEluZGV4KFxyXG4gICAgICAgIChpdGVteCkgPT4gaXRlbXguaWQgPT09IGl0ZW0uaWRcclxuICAgICAgKTtcclxuICAgICAgLy9nZXQgaXQncyBpbmRleCBmcm9tIHByb2R1Y3RzXHJcbiAgICAgIHByb2R1Y3RzW2l0ZW1JbmRleEluUHJvZHVjdHNdID0gY2hlY2tQcm9kdWN0OyAvL3JlcGxhY2UgaXQgd2l0aCBvbGQgb25lXHJcbiAgICAgIGlmIChpdGVtSW5kZXhJblByb2R1Y3RzICE9PSAtMSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHByb2R1Y3RzQWN0aW9ucy5zaG93UHJvZHVjdHMocHJvZHVjdHMpKTsgLy91cGRhdGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlTGlzdCA9ICgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0cykge1xyXG4gICAgICByZXR1cm4gKHByb2R1Y3RzIHx8IFtdKS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEN1c3RvbX0+XHJcbiAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3REZXRhaWxzTmV4dC8ke3Byb2R1Y3QuaWR9YCl9XHJcbiAgICAgICAgICAgICAgbWI9XCIycmVtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZWRpYUNhcmRcclxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGlzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBpbWc9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC5xdWFudGl0eSA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8UXVhbnRpdHkgaXRlbT17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwiQWRkIHRvIGNhcnRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e3N0eWxlcy5Qcm9kdWN0TGlzdENvbnRhaW5lcn0+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAge2NyZWF0ZUxpc3QoKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUHJvZHVjdExpc3RDb250YWluZXJcIjogXCJwcm9kdWN0TGlzdF9Qcm9kdWN0TGlzdENvbnRhaW5lcl9fbVZVYm5cIixcblx0XCJncmlkQ3VzdG9tXCI6IFwicHJvZHVjdExpc3RfZ3JpZEN1c3RvbV9fMlJSNXBcIlxufTtcbiIsImltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5cclxuLy9QUk9EVUNUU1xyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuUFJPRFVDVF9SRVFVRVNULFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IHNob3dQcm9kdWN0cyA9IChyZXNwb25zZSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLlBST0RVQ1RfUkVTUE9OU0UsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgcHJvZHVjdHM6IHJlc3BvbnNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlIGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uVHlwZXNcIjtcclxuXHJcbi8vY2FydFxyXG5leHBvcnQgY29uc3QgYWRkSXRlbUluQ2FydCA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuQUREX0lURU1fVE9fQ0FSVCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBuZXdJdGVtOiBpdGVtLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW1JbkNhcnQgPSAoaXRlbSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLkRFTEVURV9JVEVNX0lOX0NBUlQsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgZGVsZXRlZEl0ZW06IGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVtZW50UXVhbnRpdHkgPSAoaXRlbSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLklOQ1JFTUVOVF9RVUFOVElUWSxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpdGVtLFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgZGVjcmVtZW50UXVhbnRpdHkgPSAoaXRlbSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLkRFQ1JFTUVOVF9RVUFOVElUWSxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBpdGVtLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCIvL1BST0RVQ1RTXHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX1JFUVVFU1QgPSBcIlBST0RVQ1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9SRVNQT05TRSA9IFwiUFJPRFVDVF9SRVNQT05TRVwiO1xyXG5leHBvcnQgY29uc3QgTE9BRElORyA9IFwiTE9BRElOR1wiO1xyXG5cclxuLy9TSU5HTEUgUFJPRFVDVFxyXG5leHBvcnQgY29uc3QgUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUID0gXCJQUkVRVUVTVF9TSU5HTExFX1BST0RVQ1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TSU5HTExFX1BST0RVQ1QgPSBcIkdFVF9TSU5HTExFX1BST0RVQ1RcIjtcclxuXHJcbi8vQ0FSVFxyXG5leHBvcnQgY29uc3QgQUREX0lURU1fVE9fQ0FSVCA9IFwiQUREX0lURU1fVE9fQ0FSVFwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0lURU1fSU5fQ0FSVCA9IFwiREVMRVRFX0lURU1fSU5fQ0FSVFwiO1xyXG4vL3F1YW50aXR5XHJcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfUVVBTlRJVFkgPSBcIklOQ1JFTUVOVF9RVUFOVElUWVwiO1xyXG5leHBvcnQgY29uc3QgREVDUkVNRU5UX1FVQU5USVRZID0gXCJERUNSRU1FTlRfUVVBTlRJVFlcIjtcclxuXHJcbi8vbG9naW5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSSA9IFwiUkVRVUVTVF9VU0VSU19GUk9NX0ZBS0VfQVBJXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUlNfRlJPTV9GQUtFX0FQSSA9IFwiR0VUX1VTRVJTX0ZST01fRkFLRV9BUElcIjtcclxuZXhwb3J0IGNvbnN0IENIRUNLX0xPR0lOX1VTRVIgPSBcIkNIRUNLX0xPR0lOX1VTRVJcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRlci1zcGlubmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9