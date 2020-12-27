module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/productListNext/productList.js");
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

/***/ "./src/pages/productListNext/productList.js":
/*!**************************************************!*\
  !*** ./src/pages/productListNext/productList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productList.module.scss */ "./src/pages/productListNext/productList.module.scss");
/* harmony import */ var _productList_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_productList_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Card/Card */ "./src/components/Card/Card.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/quantity/quantity */ "./src/components/quantity/quantity.js");
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/actions */ "./src/redux/actions/actions.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\productListNext\\productList.js";

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

/***/ "./src/pages/productListNext/productList.module.scss":
/*!***********************************************************!*\
  !*** ./src/pages/productListNext/productList.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ProductListContainer": "productList_ProductListContainer__3h8Qg",
	"gridCustom": "productList_gridCustom__2b5au"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnRuL0J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9DYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wcm9kdWN0TGlzdE5leHQvcHJvZHVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2NvbnN0YW50cy9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW4iLCJzcGFjaW5nIiwiQ3JlYXRlQnV0dG9uIiwicHJvcHMiLCJjb2xvciIsInRleHQiLCJocmVmIiwib25DbGljayIsInJlc3QiLCJjbGFzc2VzIiwiTWVkaWFDYXJkIiwidGl0bGUiLCJkaXNjcmlwdGlvbiIsImltZyIsImFsdCIsImJ0biIsIm1lZGlhIiwic3R5bGVzIiwibGltaXRDaGFyYWN0ZXJzIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJMb2FkaW5nSW5kaWNhdG9yIiwiUXVhbnRpdHkiLCJpdGVtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlucHV0UmVmIiwiUmVhY3QiLCJ1c2VSZWYiLCJpbnB1dFZhbHVlIiwic2V0aW5wdXRWYWx1ZSIsInVzZVN0YXRlIiwicXVhbnRpdHkiLCJ1c2VFZmZlY3QiLCJkZWNyZWFzZVZhbHVlIiwiY2FydEFjdGlvbnMiLCJpbmNyZWFzZVZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZUJ1dHRvbiIsImRlY3JlYXNlIiwiaW5wdXRTdHlsZSIsImluY3JlYXNlIiwiUHJvZHVjdExpc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjdHMiLCJwcm9kdWN0c1JlZHVjZXIiLCJsb2FkaW5nIiwibG9hZGVyIiwicHJvZHVjdHNBY3Rpb25zIiwiaW5kZXhlc09mQ2FydEl0ZW1zIiwibWFwIiwiY2FydEl0ZW0iLCJmaW5kSW5kZXgiLCJpdGVteCIsImlkIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImFkZEl0ZW0iLCJjaGVja1Byb2R1Y3QiLCJmaW5kIiwicHJvZHVjdCIsIml0ZW1JbmRleEluUHJvZHVjdHMiLCJjcmVhdGVMaXN0IiwiaW5kZXgiLCJncmlkQ3VzdG9tIiwicHVzaCIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJQcm9kdWN0TGlzdENvbnRhaW5lciIsImdldFByb2R1Y3RzIiwidHlwZSIsImFjdGlvblR5cGUiLCJQUk9EVUNUX1JFUVVFU1QiLCJzaG93UHJvZHVjdHMiLCJyZXNwb25zZSIsInBheWxvYWQiLCJhZGRJdGVtSW5DYXJ0IiwibmV3SXRlbSIsImRlbGV0ZUl0ZW1JbkNhcnQiLCJkZWxldGVkSXRlbSIsImluY3JlbWVudFF1YW50aXR5IiwiZGVjcmVtZW50UXVhbnRpdHkiLCJQUk9EVUNUX1JFU1BPTlNFIiwiTE9BRElORyIsIlBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVCIsIkdFVF9TSU5HTExFX1BST0RVQ1QiLCJBRERfSVRFTV9UT19DQVJUIiwiREVMRVRFX0lURU1fSU5fQ0FSVCIsIklOQ1JFTUVOVF9RVUFOVElUWSIsIkRFQ1JFTUVOVF9RVUFOVElUWSIsIlJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSSIsIkdFVF9VU0VSU19GUk9NX0ZBS0VfQVBJIiwiQ0hFQ0tfTE9HSU5fVVNFUiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxNQUFJLEVBQUU7QUFDSixhQUFTO0FBQ1BDLFlBQU0sRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUREO0FBREw7QUFEaUMsQ0FBWixDQUFELENBQTVCO0FBUWUsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDMUMsUUFBTTtBQUFFQyxTQUFGO0FBQVNDLFFBQVQ7QUFBZUMsUUFBZjtBQUFxQkM7QUFBckIsTUFBMENKLEtBQWhEO0FBQUEsUUFBdUNLLElBQXZDLDRCQUFnREwsS0FBaEQ7O0FBQ0EsUUFBTU0sT0FBTyxHQUFHYixTQUFTLEVBQXpCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVhLE9BQU8sQ0FBQ1YsSUFBeEI7QUFBQSwyQkFDRSxxRUFBQywrREFBRDtBQUNFLGFBQU8sRUFBQyxXQURWO0FBRUUsV0FBSyxFQUFFSyxLQUZUO0FBR0UsVUFBSSxFQUFFRSxJQUhSO0FBSUUsYUFBTyxFQUFFQztBQUpYLE9BS01DLElBTE47QUFBQSxnQkFPR0g7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTSyxTQUFULENBQW1CO0FBQUVDLE9BQUY7QUFBU0MsYUFBVDtBQUFzQkMsS0FBdEI7QUFBMkJDLEtBQTNCO0FBQWdDQztBQUFoQyxDQUFuQixFQUEwRDtBQUN2RSxRQUFNTixPQUFPLEdBQUdiLHdEQUFTLEVBQXpCO0FBRUEsc0JBQ0UscUVBQUMsNkRBQUQ7QUFBTSxhQUFTLEVBQUVhLE9BQU8sQ0FBQ1YsSUFBekI7QUFBQSw0QkFDRSxxRUFBQyx1RUFBRDtBQUFBLDhCQUNFLHFFQUFDLGtFQUFEO0FBQ0UsaUJBQVMsRUFBRVUsT0FBTyxDQUFDTyxLQURyQjtBQUVFLGFBQUssRUFBRUgsR0FGVDtBQUdFLFdBQUcsRUFBRUMsR0FIUDtBQUlFLGFBQUssRUFBQztBQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FLHFFQUFDLG9FQUFEO0FBQUEsZ0NBQ0UscUVBQUMsbUVBQUQ7QUFDRSxzQkFBWSxNQURkO0FBRUUsaUJBQU8sRUFBQyxJQUZWO0FBR0UsbUJBQVMsRUFBQyxJQUhaO0FBSUUsbUJBQVMsRUFBRUcsd0RBQU0sQ0FBQ0MsZUFKcEI7QUFBQSxvQkFNR1A7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0UscUVBQUMsbUVBQUQ7QUFDRSxpQkFBTyxFQUFDLE9BRFY7QUFFRSxlQUFLLEVBQUMsZUFGUjtBQUdFLG1CQUFTLEVBQUMsR0FIWjtBQUlFLG1CQUFTLEVBQUVNLHdEQUFNLENBQUNDLGVBSnBCO0FBQUEsb0JBTUdOO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQTJCR0csR0FBRyxHQUFHQSxHQUFILEdBQVMsRUEzQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQsQzs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sTUFBTW5CLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUNsQ0UsTUFBSSxFQUFFO0FBQ0pvQixZQUFRLEVBQUU7QUFETixHQUQ0QjtBQUlsQ0gsT0FBSyxFQUFFO0FBQ0xJLFVBQU0sRUFBRTtBQURIO0FBSjJCLENBQUQsQ0FBNUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RQO0FBQ0E7QUFDZSxTQUFTQyxnQkFBVCxHQUE0QjtBQUN6QyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUssRUFBQyxTQUZSO0FBR0UsWUFBTSxFQUFFLEdBSFY7QUFJRSxXQUFLLEVBQUUsR0FKVDtBQUtFLGFBQU8sRUFBRSxJQUxYLENBS2lCOztBQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQm5CLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQU07QUFBRW9CO0FBQUYsTUFBV3BCLEtBQWpCO0FBQ0EsUUFBTXFCLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxDQUFiLENBQWpCLENBSHVCLENBSXZCOztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FBQ1IsSUFBSSxDQUFDUyxRQUFOLENBQTVDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkSCxpQkFBYSxDQUFDUCxJQUFJLENBQUNTLFFBQU4sQ0FBYjtBQUNELEdBRlEsRUFFTixDQUFDVCxJQUFJLENBQUNTLFFBQU4sQ0FGTSxDQUFUOztBQUlBLFFBQU1FLGFBQWEsR0FBRyxNQUFNO0FBQzFCVixZQUFRLENBQUNXLHFFQUFBLENBQThCWixJQUE5QixDQUFELENBQVI7O0FBQ0EsUUFBSUEsSUFBSSxDQUFDUyxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3RCVCxVQUFJLENBQUNTLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQUYsbUJBQWEsQ0FBQ1AsSUFBSSxDQUFDUyxRQUFOLENBQWI7QUFDRDs7QUFDREYsaUJBQWEsQ0FBQ1AsSUFBSSxDQUFDUyxRQUFOLENBQWI7QUFDRCxHQVBEOztBQVNBLFFBQU1JLGFBQWEsR0FBRyxNQUFNO0FBQzFCWixZQUFRLENBQUNXLHFFQUFBLENBQThCWixJQUE5QixDQUFELENBQVI7QUFDQU8saUJBQWEsQ0FBQ1AsSUFBSSxDQUFDUyxRQUFOLENBQWI7QUFDRCxHQUhEOztBQUlBLFFBQU1LLFlBQVksR0FBSUMsS0FBRCxJQUFXLENBQzlCO0FBQ0E7QUFDQTtBQUNELEdBSkQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVyQiw0REFBTSxDQUFDZSxRQUF2QjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFZiw0REFBTSxDQUFDc0IsV0FEcEI7QUFFRSxRQUFFLEVBQUV0Qiw0REFBTSxDQUFDdUIsUUFGYjtBQUdFLGFBQU8sRUFBRU4sYUFIWDtBQUlFLFdBQUssRUFBQyxnQkFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBU0U7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUUsRUFBQyxRQUZMO0FBR0UsV0FBSyxFQUFFTCxVQUhUO0FBSUUsU0FBRyxFQUFFSCxRQUpQO0FBS0UsY0FBUSxFQUFFVyxZQUxaO0FBTUUsV0FBSyxFQUFFcEIsNERBQU0sQ0FBQ3dCO0FBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQWlCRTtBQUNFLGVBQVMsRUFBRXhCLDREQUFNLENBQUNzQixXQURwQjtBQUVFLFFBQUUsRUFBRXRCLDREQUFNLENBQUN5QixRQUZiO0FBR0UsYUFBTyxFQUFFTixhQUhYO0FBSUUsV0FBSyxFQUFDLGdCQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJEOztBQUNjZCx1RUFBZixFOzs7Ozs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUNBLFNBQVNxQixXQUFULEdBQXVCO0FBQ3JCLFFBQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFDQSxRQUFNckIsUUFBUSxHQUFHQyxnRUFBVyxFQUE1QjtBQUNBLFFBQU1xQixJQUFJLEdBQUdDLGdFQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCSCxJQUE5QixDQUF4QjtBQUNBLFFBQU1JLFFBQVEsR0FBR0gsZ0VBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNHLGVBQU4sQ0FBc0JELFFBQWxDLENBQTVCO0FBQ0EsUUFBTUUsT0FBTyxHQUFHTCxnRUFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0csZUFBTixDQUFzQkUsTUFBbEMsQ0FBM0I7QUFDQXBCLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0FULFlBQVEsQ0FBQzhCLG1FQUFBLEVBQUQsQ0FBUjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFJQXJCLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsUUFBSWEsSUFBSixFQUFVO0FBQ1I7QUFDQSxVQUFJUyxrQkFBa0IsR0FBR1QsSUFBSSxDQUFDVSxHQUFMLENBQVVDLFFBQUQsSUFBYztBQUM5QyxlQUFPUCxRQUFRLENBQUNRLFNBQVQsQ0FBb0JDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxFQUFOLEtBQWFILFFBQVEsQ0FBQ0csRUFBcEQsQ0FBUDtBQUNELE9BRndCLENBQXpCLENBRlEsQ0FLUjtBQUNBOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sa0JBQWtCLENBQUNPLE1BQXZDLEVBQStDRCxDQUFDLEVBQWhELEVBQW9EO0FBQ2xEWCxnQkFBUSxDQUFDYSxNQUFULENBQWdCUixrQkFBa0IsQ0FBQ00sQ0FBRCxDQUFsQyxFQUF1QyxDQUF2QyxFQUEwQ2YsSUFBSSxDQUFDZSxDQUFELENBQTlDO0FBQ0Q7QUFDRjtBQUNGLEdBYlEsRUFhTixDQUFDWCxRQUFELEVBQVdKLElBQVgsQ0FiTSxDQUFUOztBQWNBLFFBQU1rQixPQUFPLEdBQUl6QyxJQUFELElBQVU7QUFDeEI7QUFDQUMsWUFBUSxDQUFDVyxrRUFBQSxDQUEwQlosSUFBMUIsQ0FBRCxDQUFSLENBRndCLENBR3hCOztBQUNBLFVBQU0wQyxZQUFZLEdBQUduQixJQUFJLENBQUNvQixJQUFMLENBQVdDLE9BQUQsSUFBYUEsT0FBTyxDQUFDUCxFQUFSLEtBQWVyQyxJQUFJLENBQUNxQyxFQUEzQyxDQUFyQixDQUp3QixDQUk2Qzs7QUFDckUsUUFBSUssWUFBSixFQUFrQjtBQUNoQixZQUFNRyxtQkFBbUIsR0FBR2xCLFFBQVEsQ0FBQ1EsU0FBVCxDQUN6QkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEVBQU4sS0FBYXJDLElBQUksQ0FBQ3FDLEVBREgsQ0FBNUIsQ0FEZ0IsQ0FJaEI7O0FBQ0FWLGNBQVEsQ0FBQ2tCLG1CQUFELENBQVIsR0FBZ0NILFlBQWhDLENBTGdCLENBSzhCOztBQUM5QyxVQUFJRyxtQkFBbUIsS0FBSyxDQUFDLENBQTdCLEVBQWdDO0FBQzlCNUMsZ0JBQVEsQ0FBQzhCLG9FQUFBLENBQTZCSixRQUE3QixDQUFELENBQVIsQ0FEOEIsQ0FDb0I7QUFDbkQ7QUFDRjtBQUNGLEdBZkQ7O0FBZ0JBLFFBQU1tQixVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFJbkIsUUFBSixFQUFjO0FBQ1osYUFBTyxDQUFDQSxRQUFRLElBQUksRUFBYixFQUFpQk0sR0FBakIsQ0FBcUIsQ0FBQ1csT0FBRCxFQUFVRyxLQUFWLEtBQW9CO0FBQzlDLDRCQUNFLHFFQUFDLDZEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLENBQWY7QUFBbUMsbUJBQVMsRUFBRXJELCtEQUFNLENBQUNzRCxVQUFyRDtBQUFBLGtDQUNFLHFFQUFDLDhEQUFEO0FBRUUsbUJBQU8sRUFBRSxNQUFNM0IsTUFBTSxDQUFDNEIsSUFBUCxDQUFhLHVCQUFzQkwsT0FBTyxDQUFDUCxFQUFHLEVBQTlDLENBRmpCO0FBR0UsY0FBRSxFQUFDLE1BSEw7QUFBQSxtQ0FLRSxxRUFBQyw2REFBRDtBQUVFLG1CQUFLLEVBQUVPLE9BQU8sQ0FBQ3hELEtBRmpCO0FBR0UseUJBQVcsRUFBRXdELE9BQU8sQ0FBQ00sV0FIdkI7QUFJRSxpQkFBRyxFQUFFTixPQUFPLENBQUNPLEtBSmY7QUFLRSxpQkFBRyxFQUFFUCxPQUFPLENBQUN4RDtBQUxmLGVBQ093RCxPQUFPLENBQUNQLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGLGFBQ09PLE9BQU8sQ0FBQ1AsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBY0U7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBNkIsaUJBQUssRUFBRTtBQUFFNUQsb0JBQU0sRUFBRTtBQUFWLGFBQXBDO0FBQUEsc0JBQ0dtRSxPQUFPLENBQUNuQyxRQUFSLEdBQW1CLENBQW5CLGdCQUNDLHFFQUFDLHFFQUFEO0FBQVUsa0JBQUksRUFBRW1DO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsZ0JBR0MscUVBQUMsMkRBQUQ7QUFDRSxtQkFBSyxFQUFDLFNBRFI7QUFFRSxrQkFBSSxFQUFDLGFBRlA7QUFHRSxxQkFBTyxFQUFFLE1BQU1ILE9BQU8sQ0FBQ0csT0FBRDtBQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFkRjtBQUFBLFdBQXVCQSxPQUFPLENBQUNQLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREY7QUE0QkQsT0E3Qk0sQ0FBUDtBQThCRDtBQUNGLEdBakNEOztBQWtDQSxzQkFDRSxxRUFBQyxrRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUUzQywrREFBTSxDQUFDMEQsb0JBQTNDO0FBQUEsY0FDR3ZCLE9BQU8sZ0JBQ04scUVBQUMscUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGdCQUdOLHFFQUFDLDZEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUFBLGdCQUNHaUIsVUFBVTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7QUFFYzFCLDBFQUFmLEU7Ozs7Ozs7Ozs7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNPLE1BQU1pQyxXQUFXLEdBQUcsT0FBTztBQUNoQ0MsTUFBSSxFQUFFQyxzRUFBMEJDO0FBREEsQ0FBUCxDQUFwQjtBQUdBLE1BQU1DLFlBQVksR0FBSUMsUUFBRCxLQUFlO0FBQ3pDSixNQUFJLEVBQUVDLHVFQURtQztBQUV6Q0ksU0FBTyxFQUFFO0FBQ1BoQyxZQUFRLEVBQUUrQjtBQURIO0FBRmdDLENBQWYsQ0FBckIsQzs7Ozs7Ozs7Ozs7O0FDTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ08sTUFBTUUsYUFBYSxHQUFJNUQsSUFBRCxLQUFXO0FBQ3RDc0QsTUFBSSxFQUFFQyx1RUFEZ0M7QUFFdENJLFNBQU8sRUFBRTtBQUNQRSxXQUFPLEVBQUU3RDtBQURGO0FBRjZCLENBQVgsQ0FBdEI7QUFPQSxNQUFNOEQsZ0JBQWdCLEdBQUk5RCxJQUFELEtBQVc7QUFDekNzRCxNQUFJLEVBQUVDLDBFQURtQztBQUV6Q0ksU0FBTyxFQUFFO0FBQ1BJLGVBQVcsRUFBRS9EO0FBRE47QUFGZ0MsQ0FBWCxDQUF6QjtBQU9BLE1BQU1nRSxpQkFBaUIsR0FBSWhFLElBQUQsS0FBVztBQUMxQ3NELE1BQUksRUFBRUMseUVBRG9DO0FBRTFDSSxTQUFPLEVBQUU7QUFDUDNEO0FBRE87QUFGaUMsQ0FBWCxDQUExQjtBQU1BLE1BQU1pRSxpQkFBaUIsR0FBSWpFLElBQUQsS0FBVztBQUMxQ3NELE1BQUksRUFBRUMseUVBRG9DO0FBRTFDSSxTQUFPLEVBQUU7QUFDUDNEO0FBRE87QUFGaUMsQ0FBWCxDQUExQixDOzs7Ozs7Ozs7Ozs7QUN2QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU13RCxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTVUsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCLEMsQ0FFUDs7QUFDTyxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUIsQyxDQUVQOztBQUNPLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QixDLENBQ1A7O0FBQ08sTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCLEMsQ0FFUDs7QUFDTyxNQUFNQywyQkFBMkIsR0FBRyw2QkFBcEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekIsQzs7Ozs7Ozs7Ozs7QUNuQlAscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvcHJvZHVjdExpc3ROZXh0L3Byb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvcHJvZHVjdExpc3ROZXh0L3Byb2R1Y3RMaXN0LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IHsgY29sb3IsIHRleHQsIGhyZWYsIG9uQ2xpY2ssIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NhcmQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYVwiO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCI7XHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVkaWFDYXJkKHsgdGl0bGUsIGRpc2NyaXB0aW9uLCBpbWcsIGFsdCwgYnRuIH0pIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICBpbWFnZT17aW1nfVxyXG4gICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICB0aXRsZT1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICBndXR0ZXJCb3R0b21cclxuICAgICAgICAgICAgdmFyaWFudD1cImg1XCJcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiaDJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW1pdENoYXJhY3RlcnN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW1pdENoYXJhY3RlcnN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkaXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICB7YnRuID8gYnRuIDogXCJcIn1cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpbWl0Q2hhcmFjdGVyc1wiOiBcIkNhcmRfbGltaXRDaGFyYWN0ZXJzX18xc3RhbVwiXG59O1xuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuZXhwb3J0IGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1heFdpZHRoOiAzNDUsXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgaGVpZ2h0OiAxNDAsXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ0luZGljYXRvcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8TG9hZGVyXHJcbiAgICAgICAgdHlwZT1cIlB1ZmZcIlxyXG4gICAgICAgIGNvbG9yPVwiIzAwQkZGRlwiXHJcbiAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICB0aW1lb3V0PXszMDAwfSAvLzMgc2Vjc1xyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3F1YW50aXR5Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIGNhcnRBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIFF1YW50aXR5KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpdGVtIH0gPSBwcm9wcztcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoMCk7XHJcbiAgLy9zZXQgZGVmYXVsdCB2YWx1ZSBvZiBpbnB1dCB2YWx1ZSB3aXRoIHF1YW50aXR5IGZyb20gYW5vdGhlciBwYWdlc1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRpbnB1dFZhbHVlXSA9IHVzZVN0YXRlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH0sIFtpdGVtLnF1YW50aXR5XSk7XHJcblxyXG4gIGNvbnN0IGRlY3JlYXNlVmFsdWUgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5kZWNyZW1lbnRRdWFudGl0eShpdGVtKSk7XHJcbiAgICBpZiAoaXRlbS5xdWFudGl0eSA8PSAwKSB7XHJcbiAgICAgIGl0ZW0ucXVhbnRpdHkgPSAwO1xyXG4gICAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgfVxyXG4gICAgc2V0aW5wdXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbmNyZWFzZVZhbHVlID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuaW5jcmVtZW50UXVhbnRpdHkoaXRlbSkpO1xyXG4gICAgc2V0aW5wdXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICAvLyBzZXRpbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9uQ2hhbmdlUXVhbnRpdHkoaW5wdXRWYWx1ZSkpXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUJ1dHRvbn1cclxuICAgICAgICBpZD17c3R5bGVzLmRlY3JlYXNlfVxyXG4gICAgICAgIG9uQ2xpY2s9e2RlY3JlYXNlVmFsdWV9XHJcbiAgICAgICAgdmFsdWU9XCJEZWNyZWFzZSBWYWx1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICAtXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBpZD1cIm51bWJlclwiXHJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIGNsYXNzPXtzdHlsZXMuaW5wdXRTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlQnV0dG9ufVxyXG4gICAgICAgIGlkPXtzdHlsZXMuaW5jcmVhc2V9XHJcbiAgICAgICAgb25DbGljaz17aW5jcmVhc2VWYWx1ZX1cclxuICAgICAgICB2YWx1ZT1cIkluY3JlYXNlIFZhbHVlXCJcclxuICAgICAgPlxyXG4gICAgICAgICtcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFF1YW50aXR5O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ2YWx1ZUJ1dHRvblwiOiBcInF1YW50aXR5X3ZhbHVlQnV0dG9uX18yM2dVZ1wiLFxuXHRcInF1YW50aXR5XCI6IFwicXVhbnRpdHlfcXVhbnRpdHlfXzM0cDQ1XCIsXG5cdFwiZGVjcmVhc2VcIjogXCJxdWFudGl0eV9kZWNyZWFzZV9fMUNqUlBcIixcblx0XCJpbmNyZWFzZVwiOiBcInF1YW50aXR5X2luY3JlYXNlX18yelk0eVwiLFxuXHRcImlucHV0LXdyYXBcIjogXCJxdWFudGl0eV9pbnB1dC13cmFwX195R19EOFwiLFxuXHRcIm51bWJlclwiOiBcInF1YW50aXR5X251bWJlcl9fMU4zRzBcIixcblx0XCJpbnB1dFN0eWxlXCI6IFwicXVhbnRpdHlfaW5wdXRTdHlsZV9fMzdSSnFcIixcblx0XCJxdWFudGl0eS1pbnB1dFwiOiBcInF1YW50aXR5X3F1YW50aXR5LWlucHV0X18yWE1sNlwiLFxuXHRcIk11aUlucHV0QmFzZS1yb290XCI6IFwicXVhbnRpdHlfTXVpSW5wdXRCYXNlLXJvb3RfXzNTOURtXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZHVjdExpc3QubW9kdWxlLnNjc3NcIjtcclxuLy9tYXRlcmlhbCB1aSBjb21wb25lbnRzXHJcbmltcG9ydCBNZWRpYUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbi8vY3VzdG9tIGNvbXBvbmVudHNcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCBRdWFudGl0eSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWFudGl0eS9xdWFudGl0eVwiO1xyXG5pbXBvcnQgQ3JlYXRlQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J0bi9CdG5cIjtcclxuLy9zdG9yZVxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdHNBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG4vL2hpc3RvcnlcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlci5jYXJ0KTtcclxuICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHNSZWR1Y2VyLnByb2R1Y3RzKTtcclxuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0c1JlZHVjZXIubG9hZGVyKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy93aGVuIGNvbXBvbmVudCBtb3VudCBnZXQgYWxsIHByb2R1Y3RzXHJcbiAgICBkaXNwYXRjaChwcm9kdWN0c0FjdGlvbnMuZ2V0UHJvZHVjdHMoKSk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2lmIHRoZXJlIGFyZSBpdGVtcyBpbiBjYXJ0XHJcbiAgICBpZiAoY2FydCkge1xyXG4gICAgICAvL2dldCB0aGVyZSBpbmRleGVzIGluIHByb2R1Y3QgbGlzdFxyXG4gICAgICBsZXQgaW5kZXhlc09mQ2FydEl0ZW1zID0gY2FydC5tYXAoKGNhcnRJdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzLmZpbmRJbmRleCgoaXRlbXgpID0+IGl0ZW14LmlkID09PSBjYXJ0SXRlbS5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL3JlcGxhY2UgdGhlbSB3aXRoIGl0ZW1zIGluIHByb2R1Y3QgbGlzdFxyXG4gICAgICAvL3RvIGdldCB0aGVtIHVwZGF0ZWQgd2l0aCBsYXN0IHF1YW50aXR5IGFwcGxpZWQgaW4gY2FydCBhdCB0aGUgc2FtZSB0aW1lXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhlc09mQ2FydEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcHJvZHVjdHMuc3BsaWNlKGluZGV4ZXNPZkNhcnRJdGVtc1tpXSwgMSwgY2FydFtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcHJvZHVjdHMsIGNhcnRdKTtcclxuICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIC8vYWRkIGNsaWNrZWQgcHJvZHVjdCB0byBjYXJ0XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5hZGRJdGVtSW5DYXJ0KGl0ZW0pKTtcclxuICAgIC8vY2hlY2sgaWYgdGhpcyBpdGVtIGlzIGluIGNhcnQgJiBoYXMgcXVhbnRpdHkgcmV0dXJuIGl0IGFuZCB1cGRhdGUgcHJvZHVjdHNcclxuICAgIGNvbnN0IGNoZWNrUHJvZHVjdCA9IGNhcnQuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaXRlbS5pZCk7IC8vY2hlY2sgaWYgaXQgd2FzIGluIGNhcnRcclxuICAgIGlmIChjaGVja1Byb2R1Y3QpIHtcclxuICAgICAgY29uc3QgaXRlbUluZGV4SW5Qcm9kdWN0cyA9IHByb2R1Y3RzLmZpbmRJbmRleChcclxuICAgICAgICAoaXRlbXgpID0+IGl0ZW14LmlkID09PSBpdGVtLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIC8vZ2V0IGl0J3MgaW5kZXggZnJvbSBwcm9kdWN0c1xyXG4gICAgICBwcm9kdWN0c1tpdGVtSW5kZXhJblByb2R1Y3RzXSA9IGNoZWNrUHJvZHVjdDsgLy9yZXBsYWNlIGl0IHdpdGggb2xkIG9uZVxyXG4gICAgICBpZiAoaXRlbUluZGV4SW5Qcm9kdWN0cyAhPT0gLTEpIHtcclxuICAgICAgICBkaXNwYXRjaChwcm9kdWN0c0FjdGlvbnMuc2hvd1Byb2R1Y3RzKHByb2R1Y3RzKSk7IC8vdXBkYXRlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdHMpIHtcclxuICAgICAgcmV0dXJuIChwcm9kdWN0cyB8fCBbXSkubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRDdXN0b219PlxyXG4gICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0RGV0YWlsc05leHQvJHtwcm9kdWN0LmlkfWApfVxyXG4gICAgICAgICAgICAgIG1iPVwiMnJlbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVkaWFDYXJkXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRpc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgaW1nPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QucXVhbnRpdHkgPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxDcmVhdGVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgdGV4dD1cIkFkZCB0byBjYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtzdHlsZXMuUHJvZHVjdExpc3RDb250YWluZXJ9PlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIHtjcmVhdGVMaXN0KCl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlByb2R1Y3RMaXN0Q29udGFpbmVyXCI6IFwicHJvZHVjdExpc3RfUHJvZHVjdExpc3RDb250YWluZXJfXzNoOFFnXCIsXG5cdFwiZ3JpZEN1c3RvbVwiOiBcInByb2R1Y3RMaXN0X2dyaWRDdXN0b21fXzJiNWF1XCJcbn07XG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25UeXBlIGZyb20gXCIuLi9jb25zdGFudHMvYWN0aW9uVHlwZXNcIjtcclxuXHJcbi8vUFJPRFVDVFNcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzID0gKCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLlBST0RVQ1RfUkVRVUVTVCxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBzaG93UHJvZHVjdHMgPSAocmVzcG9uc2UpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5QUk9EVUNUX1JFU1BPTlNFLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHByb2R1Y3RzOiByZXNwb25zZSxcclxuICB9LFxyXG59KTtcclxuIiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzXCI7XHJcblxyXG4vL2NhcnRcclxuZXhwb3J0IGNvbnN0IGFkZEl0ZW1JbkNhcnQgPSAoaXRlbSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLkFERF9JVEVNX1RPX0NBUlQsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbmV3SXRlbTogaXRlbSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtSW5DYXJ0ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5ERUxFVEVfSVRFTV9JTl9DQVJULFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRlbGV0ZWRJdGVtOiBpdGVtLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudFF1YW50aXR5ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5JTkNSRU1FTlRfUVVBTlRJVFksXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaXRlbSxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGRlY3JlbWVudFF1YW50aXR5ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5ERUNSRU1FTlRfUVVBTlRJVFksXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaXRlbSxcclxuICB9LFxyXG59KTtcclxuIiwiLy9QUk9EVUNUU1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9SRVFVRVNUID0gXCJQUk9EVUNUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfUkVTUE9OU0UgPSBcIlBST0RVQ1RfUkVTUE9OU0VcIjtcclxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSBcIkxPQURJTkdcIjtcclxuXHJcbi8vU0lOR0xFIFBST0RVQ1RcclxuZXhwb3J0IGNvbnN0IFBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVCA9IFwiUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0lOR0xMRV9QUk9EVUNUID0gXCJHRVRfU0lOR0xMRV9QUk9EVUNUXCI7XHJcblxyXG4vL0NBUlRcclxuZXhwb3J0IGNvbnN0IEFERF9JVEVNX1RPX0NBUlQgPSBcIkFERF9JVEVNX1RPX0NBUlRcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNX0lOX0NBUlQgPSBcIkRFTEVURV9JVEVNX0lOX0NBUlRcIjtcclxuLy9xdWFudGl0eVxyXG5leHBvcnQgY29uc3QgSU5DUkVNRU5UX1FVQU5USVRZID0gXCJJTkNSRU1FTlRfUVVBTlRJVFlcIjtcclxuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVF9RVUFOVElUWSA9IFwiREVDUkVNRU5UX1FVQU5USVRZXCI7XHJcblxyXG4vL2xvZ2luXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJTX0ZST01fRkFLRV9BUEkgPSBcIlJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTX0ZST01fRkFLRV9BUEkgPSBcIkdFVF9VU0VSU19GUk9NX0ZBS0VfQVBJXCI7XHJcbmV4cG9ydCBjb25zdCBDSEVDS19MT0dJTl9VU0VSID0gXCJDSEVDS19MT0dJTl9VU0VSXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==