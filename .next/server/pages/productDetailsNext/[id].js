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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/productDetailsNext/[id]/index.js");
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

/***/ "./src/pages/productDetailsNext/[id]/index.js":
/*!****************************************************!*\
  !*** ./src/pages/productDetailsNext/[id]/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/product */ "./src/redux/actions/product.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/quantity/quantity */ "./src/components/quantity/quantity.js");

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\productDetailsNext\\[id]\\index.js";










function ProductDetails(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const singleProduct = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.singleProductReducer.singleProduct);
  const cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.cartReducer.cart);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const {
      id
    } = router.query; // request item from api

    dispatch(_redux_actions_product__WEBPACK_IMPORTED_MODULE_6__["getSingleProduct"](id));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    //check if this item is in cart return it from cart with it's quantity
    const product = cart.find(product => product.id === singleProduct.id);

    if (product) {
      dispatch(_redux_actions_product__WEBPACK_IMPORTED_MODULE_6__["showSingleProduct"](product));
    } else {
      dispatch(_redux_actions_product__WEBPACK_IMPORTED_MODULE_6__["showSingleProduct"](singleProduct));
    }
  }, [cart]);

  const addItem = singleProduct => {
    //add item to cart
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_7__["addItemInCart"](singleProduct));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    maxWidth: "lg",
    children: singleProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: "flex",
        textAlign: "left"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: singleProduct.image,
        alt: singleProduct.alt,
        style: {
          height: "250px",
          margin: "10px"
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: singleProduct.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Description:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: singleProduct.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Price:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: singleProduct.price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this), singleProduct.quantity ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_quantity_quantity__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: singleProduct
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
          color: "primary",
          text: "Add to cart",
          onClick: () => addItem(singleProduct)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductDetails);

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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnRuL0J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3REZXRhaWxzTmV4dC8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9jb25zdGFudHMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRlci1zcGlubmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIkNyZWF0ZUJ1dHRvbiIsInByb3BzIiwiY29sb3IiLCJ0ZXh0IiwiaHJlZiIsIm9uQ2xpY2siLCJyZXN0IiwiY2xhc3NlcyIsIkxvYWRpbmdJbmRpY2F0b3IiLCJRdWFudGl0eSIsIml0ZW0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW5wdXRSZWYiLCJSZWFjdCIsInVzZVJlZiIsImlucHV0VmFsdWUiLCJzZXRpbnB1dFZhbHVlIiwidXNlU3RhdGUiLCJxdWFudGl0eSIsInVzZUVmZmVjdCIsImRlY3JlYXNlVmFsdWUiLCJjYXJ0QWN0aW9ucyIsImluY3JlYXNlVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInN0eWxlcyIsInZhbHVlQnV0dG9uIiwiZGVjcmVhc2UiLCJpbnB1dFN0eWxlIiwiaW5jcmVhc2UiLCJQcm9kdWN0RGV0YWlscyIsInJvdXRlciIsInVzZVJvdXRlciIsInNpbmdsZVByb2R1Y3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2luZ2xlUHJvZHVjdFJlZHVjZXIiLCJjYXJ0IiwiY2FydFJlZHVjZXIiLCJpZCIsInF1ZXJ5IiwicHJvZHVjdEFjdGlvbnMiLCJwcm9kdWN0IiwiZmluZCIsImFkZEl0ZW0iLCJkaXNwbGF5IiwidGV4dEFsaWduIiwiaW1hZ2UiLCJhbHQiLCJoZWlnaHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJhZGRJdGVtSW5DYXJ0IiwidHlwZSIsImFjdGlvblR5cGUiLCJwYXlsb2FkIiwibmV3SXRlbSIsImRlbGV0ZUl0ZW1JbkNhcnQiLCJkZWxldGVkSXRlbSIsImluY3JlbWVudFF1YW50aXR5IiwiZGVjcmVtZW50UXVhbnRpdHkiLCJnZXRTaW5nbGVQcm9kdWN0Iiwic2luZ2xlUHJvZHVjdElkIiwic2hvd1NpbmdsZVByb2R1Y3QiLCJyZXNwb25zZSIsIlBST0RVQ1RfUkVRVUVTVCIsIlBST0RVQ1RfUkVTUE9OU0UiLCJMT0FESU5HIiwiUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUIiwiR0VUX1NJTkdMTEVfUFJPRFVDVCIsIkFERF9JVEVNX1RPX0NBUlQiLCJERUxFVEVfSVRFTV9JTl9DQVJUIiwiSU5DUkVNRU5UX1FVQU5USVRZIiwiREVDUkVNRU5UX1FVQU5USVRZIiwiUkVRVUVTVF9VU0VSU19GUk9NX0ZBS0VfQVBJIiwiR0VUX1VTRVJTX0ZST01fRkFLRV9BUEkiLCJDSEVDS19MT0dJTl9VU0VSIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDdkNDLE1BQUksRUFBRTtBQUNKLGFBQVM7QUFDUEMsWUFBTSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBREQ7QUFETDtBQURpQyxDQUFaLENBQUQsQ0FBNUI7QUFRZSxTQUFTQyxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMxQyxRQUFNO0FBQUVDLFNBQUY7QUFBU0MsUUFBVDtBQUFlQyxRQUFmO0FBQXFCQztBQUFyQixNQUEwQ0osS0FBaEQ7QUFBQSxRQUF1Q0ssSUFBdkMsNEJBQWdETCxLQUFoRDs7QUFDQSxRQUFNTSxPQUFPLEdBQUdiLFNBQVMsRUFBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWEsT0FBTyxDQUFDVixJQUF4QjtBQUFBLDJCQUNFLHFFQUFDLCtEQUFEO0FBQ0UsYUFBTyxFQUFDLFdBRFY7QUFFRSxXQUFLLEVBQUVLLEtBRlQ7QUFHRSxVQUFJLEVBQUVFLElBSFI7QUFJRSxhQUFPLEVBQUVDO0FBSlgsT0FLTUMsSUFMTjtBQUFBLGdCQU9HSDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JEO0FBQ0E7QUFDZSxTQUFTSyxnQkFBVCxHQUE0QjtBQUN6QyxzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsMkJBQ0UscUVBQUMsMkRBQUQ7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLFdBQUssRUFBQyxTQUZSO0FBR0UsWUFBTSxFQUFFLEdBSFY7QUFJRSxXQUFLLEVBQUUsR0FKVDtBQUtFLGFBQU8sRUFBRSxJQUxYLENBS2lCOztBQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQlIsS0FBbEIsRUFBeUI7QUFDdkIsUUFBTTtBQUFFUztBQUFGLE1BQVdULEtBQWpCO0FBQ0EsUUFBTVUsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhLENBQWIsQ0FBakIsQ0FIdUIsQ0FJdkI7O0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQyxzREFBUSxDQUFDUixJQUFJLENBQUNTLFFBQU4sQ0FBNUM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RILGlCQUFhLENBQUNQLElBQUksQ0FBQ1MsUUFBTixDQUFiO0FBQ0QsR0FGUSxFQUVOLENBQUNULElBQUksQ0FBQ1MsUUFBTixDQUZNLENBQVQ7O0FBSUEsUUFBTUUsYUFBYSxHQUFHLE1BQU07QUFDMUJWLFlBQVEsQ0FBQ1cscUVBQUEsQ0FBOEJaLElBQTlCLENBQUQsQ0FBUjs7QUFDQSxRQUFJQSxJQUFJLENBQUNTLFFBQUwsSUFBaUIsQ0FBckIsRUFBd0I7QUFDdEJULFVBQUksQ0FBQ1MsUUFBTCxHQUFnQixDQUFoQjtBQUNBRixtQkFBYSxDQUFDUCxJQUFJLENBQUNTLFFBQU4sQ0FBYjtBQUNEOztBQUNERixpQkFBYSxDQUFDUCxJQUFJLENBQUNTLFFBQU4sQ0FBYjtBQUNELEdBUEQ7O0FBU0EsUUFBTUksYUFBYSxHQUFHLE1BQU07QUFDMUJaLFlBQVEsQ0FBQ1cscUVBQUEsQ0FBOEJaLElBQTlCLENBQUQsQ0FBUjtBQUNBTyxpQkFBYSxDQUFDUCxJQUFJLENBQUNTLFFBQU4sQ0FBYjtBQUNELEdBSEQ7O0FBSUEsUUFBTUssWUFBWSxHQUFJQyxLQUFELElBQVcsQ0FDOUI7QUFDQTtBQUNBO0FBQ0QsR0FKRDs7QUFLQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNERBQU0sQ0FBQ1AsUUFBdkI7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRU8sNERBQU0sQ0FBQ0MsV0FEcEI7QUFFRSxRQUFFLEVBQUVELDREQUFNLENBQUNFLFFBRmI7QUFHRSxhQUFPLEVBQUVQLGFBSFg7QUFJRSxXQUFLLEVBQUMsZ0JBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVNFO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFFLEVBQUMsUUFGTDtBQUdFLFdBQUssRUFBRUwsVUFIVDtBQUlFLFNBQUcsRUFBRUgsUUFKUDtBQUtFLGNBQVEsRUFBRVcsWUFMWjtBQU1FLFdBQUssRUFBRUUsNERBQU0sQ0FBQ0c7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBaUJFO0FBQ0UsZUFBUyxFQUFFSCw0REFBTSxDQUFDQyxXQURwQjtBQUVFLFFBQUUsRUFBRUQsNERBQU0sQ0FBQ0ksUUFGYjtBQUdFLGFBQU8sRUFBRVAsYUFIWDtBQUlFLFdBQUssRUFBQyxnQkFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7QUFDY2QsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNzQixjQUFULENBQXdCOUIsS0FBeEIsRUFBK0I7QUFDN0IsUUFBTStCLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNdEIsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU1zQixhQUFhLEdBQUdDLCtEQUFXLENBQzlCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0Msb0JBQU4sQ0FBMkJILGFBRFAsQ0FBakM7QUFHQSxRQUFNSSxJQUFJLEdBQUdILCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRyxXQUFOLENBQWtCRCxJQUE5QixDQUF4QjtBQUNBbEIseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTTtBQUFFb0I7QUFBRixRQUFTUixNQUFNLENBQUNTLEtBQXRCLENBRGMsQ0FFZDs7QUFDQTlCLFlBQVEsQ0FBQytCLHVFQUFBLENBQWdDRixFQUFoQyxDQUFELENBQVI7QUFDRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0FwQix5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBLFVBQU11QixPQUFPLEdBQUdMLElBQUksQ0FBQ00sSUFBTCxDQUFXRCxPQUFELElBQWFBLE9BQU8sQ0FBQ0gsRUFBUixLQUFlTixhQUFhLENBQUNNLEVBQXBELENBQWhCOztBQUNBLFFBQUlHLE9BQUosRUFBYTtBQUNYaEMsY0FBUSxDQUFDK0Isd0VBQUEsQ0FBaUNDLE9BQWpDLENBQUQsQ0FBUjtBQUNELEtBRkQsTUFFTztBQUNMaEMsY0FBUSxDQUFDK0Isd0VBQUEsQ0FBaUNSLGFBQWpDLENBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FSUSxFQVFOLENBQUNJLElBQUQsQ0FSTSxDQUFUOztBQVVBLFFBQU1PLE9BQU8sR0FBSVgsYUFBRCxJQUFtQjtBQUNqQztBQUNBdkIsWUFBUSxDQUFDVyxpRUFBQSxDQUEwQlksYUFBMUIsQ0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFJQSxzQkFDRSxxRUFBQyxrRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLGNBQ0dBLGFBQWEsZ0JBQ1o7QUFBSyxXQUFLLEVBQUU7QUFBRVksZUFBTyxFQUFFLE1BQVg7QUFBbUJDLGlCQUFTLEVBQUU7QUFBOUIsT0FBWjtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFFYixhQUFhLENBQUNjLEtBRHJCO0FBRUUsV0FBRyxFQUFFZCxhQUFhLENBQUNlLEdBRnJCO0FBR0UsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUUsT0FBVjtBQUFtQnBELGdCQUFNLEVBQUU7QUFBM0I7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFBLGdDQUNFO0FBQUEsb0JBQUtvQyxhQUFhLENBQUNpQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLG9CQUFJakIsYUFBYSxDQUFDa0I7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLHNCQUFJbEIsYUFBYSxDQUFDbUI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFRR25CLGFBQWEsQ0FBQ2YsUUFBZCxnQkFDQyxxRUFBQyxxRUFBRDtBQUFVLGNBQUksRUFBRWU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxnQkFHQyxxRUFBQywyREFBRDtBQUNFLGVBQUssRUFBQyxTQURSO0FBRUUsY0FBSSxFQUFDLGFBRlA7QUFHRSxpQkFBTyxFQUFFLE1BQU1XLE9BQU8sQ0FBQ1gsYUFBRDtBQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURZLGdCQTJCWixxRUFBQyxxRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDs7QUFFY0gsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNPLE1BQU11QixhQUFhLEdBQUk1QyxJQUFELEtBQVc7QUFDdEM2QyxNQUFJLEVBQUVDLHVFQURnQztBQUV0Q0MsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRWhEO0FBREY7QUFGNkIsQ0FBWCxDQUF0QjtBQU9BLE1BQU1pRCxnQkFBZ0IsR0FBSWpELElBQUQsS0FBVztBQUN6QzZDLE1BQUksRUFBRUMsMEVBRG1DO0FBRXpDQyxTQUFPLEVBQUU7QUFDUEcsZUFBVyxFQUFFbEQ7QUFETjtBQUZnQyxDQUFYLENBQXpCO0FBT0EsTUFBTW1ELGlCQUFpQixHQUFJbkQsSUFBRCxLQUFXO0FBQzFDNkMsTUFBSSxFQUFFQyx5RUFEb0M7QUFFMUNDLFNBQU8sRUFBRTtBQUNQL0M7QUFETztBQUZpQyxDQUFYLENBQTFCO0FBTUEsTUFBTW9ELGlCQUFpQixHQUFJcEQsSUFBRCxLQUFXO0FBQzFDNkMsTUFBSSxFQUFFQyx5RUFEb0M7QUFFMUNDLFNBQU8sRUFBRTtBQUNQL0M7QUFETztBQUZpQyxDQUFYLENBQTFCLEM7Ozs7Ozs7Ozs7OztBQ3ZCUDtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNPLE1BQU1xRCxnQkFBZ0IsR0FBSXZCLEVBQUQsS0FBUztBQUN2Q2UsTUFBSSxFQUFFQywrRUFEaUM7QUFFdkNDLFNBQU8sRUFBRTtBQUNQTyxtQkFBZSxFQUFFeEI7QUFEVjtBQUY4QixDQUFULENBQXpCO0FBTUEsTUFBTXlCLGlCQUFpQixHQUFJQyxRQUFELEtBQWU7QUFDOUNYLE1BQUksRUFBRUMsMEVBRHdDO0FBRTlDQyxTQUFPLEVBQUU7QUFDUHZCLGlCQUFhLEVBQUVnQztBQURSO0FBRnFDLENBQWYsQ0FBMUIsQzs7Ozs7Ozs7Ozs7O0FDVFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEIsQyxDQUVQOztBQUNPLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QixDLENBRVA7O0FBQ08sTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCLEMsQ0FDUDs7QUFDTyxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0IsQyxDQUVQOztBQUNPLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QixDOzs7Ozs7Ozs7OztBQ25CUCxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wcm9kdWN0RGV0YWlsc05leHQvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL3Byb2R1Y3REZXRhaWxzTmV4dC9baWRdL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiA+ICpcIjoge1xyXG4gICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IHsgY29sb3IsIHRleHQsIGhyZWYsIG9uQ2xpY2ssIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgIGhyZWY9e2hyZWZ9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgPlxyXG4gICAgICAgIHt0ZXh0fVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgIDxMb2FkZXJcclxuICAgICAgICB0eXBlPVwiUHVmZlwiXHJcbiAgICAgICAgY29sb3I9XCIjMDBCRkZGXCJcclxuICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgIHRpbWVvdXQ9ezMwMDB9IC8vMyBzZWNzXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcXVhbnRpdHkubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG5cclxuZnVuY3Rpb24gUXVhbnRpdHkocHJvcHMpIHtcclxuICBjb25zdCB7IGl0ZW0gfSA9IHByb3BzO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigwKTtcclxuICAvL3NldCBkZWZhdWx0IHZhbHVlIG9mIGlucHV0IHZhbHVlIHdpdGggcXVhbnRpdHkgZnJvbSBhbm90aGVyIHBhZ2VzXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldGlucHV0VmFsdWVdID0gdXNlU3RhdGUoaXRlbS5xdWFudGl0eSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldGlucHV0VmFsdWUoaXRlbS5xdWFudGl0eSk7XHJcbiAgfSwgW2l0ZW0ucXVhbnRpdHldKTtcclxuXHJcbiAgY29uc3QgZGVjcmVhc2VWYWx1ZSA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmRlY3JlbWVudFF1YW50aXR5KGl0ZW0pKTtcclxuICAgIGlmIChpdGVtLnF1YW50aXR5IDw9IDApIHtcclxuICAgICAgaXRlbS5xdWFudGl0eSA9IDA7XHJcbiAgICAgIHNldGlucHV0VmFsdWUoaXRlbS5xdWFudGl0eSk7XHJcbiAgICB9XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY3JlYXNlVmFsdWUgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5pbmNyZW1lbnRRdWFudGl0eShpdGVtKSk7XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIC8vIHNldGlucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vICAgY29uc29sZS5sb2cob25DaGFuZ2VRdWFudGl0eShpbnB1dFZhbHVlKSlcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1YW50aXR5fT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlQnV0dG9ufVxyXG4gICAgICAgIGlkPXtzdHlsZXMuZGVjcmVhc2V9XHJcbiAgICAgICAgb25DbGljaz17ZGVjcmVhc2VWYWx1ZX1cclxuICAgICAgICB2YWx1ZT1cIkRlY3JlYXNlIFZhbHVlXCJcclxuICAgICAgPlxyXG4gICAgICAgIC1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIGlkPVwibnVtYmVyXCJcclxuICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgY2xhc3M9e3N0eWxlcy5pbnB1dFN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVCdXR0b259XHJcbiAgICAgICAgaWQ9e3N0eWxlcy5pbmNyZWFzZX1cclxuICAgICAgICBvbkNsaWNrPXtpbmNyZWFzZVZhbHVlfVxyXG4gICAgICAgIHZhbHVlPVwiSW5jcmVhc2UgVmFsdWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgK1xyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUXVhbnRpdHk7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInZhbHVlQnV0dG9uXCI6IFwicXVhbnRpdHlfdmFsdWVCdXR0b25fXzIzZ1VnXCIsXG5cdFwicXVhbnRpdHlcIjogXCJxdWFudGl0eV9xdWFudGl0eV9fMzRwNDVcIixcblx0XCJkZWNyZWFzZVwiOiBcInF1YW50aXR5X2RlY3JlYXNlX18xQ2pSUFwiLFxuXHRcImluY3JlYXNlXCI6IFwicXVhbnRpdHlfaW5jcmVhc2VfXzJ6WTR5XCIsXG5cdFwiaW5wdXQtd3JhcFwiOiBcInF1YW50aXR5X2lucHV0LXdyYXBfX3lHX0Q4XCIsXG5cdFwibnVtYmVyXCI6IFwicXVhbnRpdHlfbnVtYmVyX18xTjNHMFwiLFxuXHRcImlucHV0U3R5bGVcIjogXCJxdWFudGl0eV9pbnB1dFN0eWxlX18zN1JKcVwiLFxuXHRcInF1YW50aXR5LWlucHV0XCI6IFwicXVhbnRpdHlfcXVhbnRpdHktaW5wdXRfXzJYTWw2XCIsXG5cdFwiTXVpSW5wdXRCYXNlLXJvb3RcIjogXCJxdWFudGl0eV9NdWlJbnB1dEJhc2Utcm9vdF9fM1M5RG1cIlxufTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RBY3Rpb25zIGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHNpbmdsZVByb2R1Y3QgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuc2luZ2xlUHJvZHVjdFJlZHVjZXIuc2luZ2xlUHJvZHVjdFxyXG4gICk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIC8vIHJlcXVlc3QgaXRlbSBmcm9tIGFwaVxyXG4gICAgZGlzcGF0Y2gocHJvZHVjdEFjdGlvbnMuZ2V0U2luZ2xlUHJvZHVjdChpZCkpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9jaGVjayBpZiB0aGlzIGl0ZW0gaXMgaW4gY2FydCByZXR1cm4gaXQgZnJvbSBjYXJ0IHdpdGggaXQncyBxdWFudGl0eVxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGNhcnQuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gc2luZ2xlUHJvZHVjdC5pZCk7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5zaG93U2luZ2xlUHJvZHVjdChwcm9kdWN0KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5zaG93U2luZ2xlUHJvZHVjdChzaW5nbGVQcm9kdWN0KSk7XHJcbiAgICB9XHJcbiAgfSwgW2NhcnRdKTtcclxuXHJcbiAgY29uc3QgYWRkSXRlbSA9IChzaW5nbGVQcm9kdWN0KSA9PiB7XHJcbiAgICAvL2FkZCBpdGVtIHRvIGNhcnRcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmFkZEl0ZW1JbkNhcnQoc2luZ2xlUHJvZHVjdCkpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICB7c2luZ2xlUHJvZHVjdCA/IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3NpbmdsZVByb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17c2luZ2xlUHJvZHVjdC5hbHR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyNTBweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPntzaW5nbGVQcm9kdWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxoND5EZXNjcmlwdGlvbjo8L2g0PlxyXG4gICAgICAgICAgICA8cD57c2luZ2xlUHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg0PlByaWNlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3NpbmdsZVByb2R1Y3QucXVhbnRpdHkgPyAoXHJcbiAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3NpbmdsZVByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJBZGQgdG8gY2FydFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHNpbmdsZVByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5cclxuLy9jYXJ0XHJcbmV4cG9ydCBjb25zdCBhZGRJdGVtSW5DYXJ0ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5BRERfSVRFTV9UT19DQVJULFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG5ld0l0ZW06IGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbUluQ2FydCA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuREVMRVRFX0lURU1fSU5fQ0FSVCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkZWxldGVkSXRlbTogaXRlbSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRRdWFudGl0eSA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuSU5DUkVNRU5UX1FVQU5USVRZLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBkZWNyZW1lbnRRdWFudGl0eSA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuREVDUkVNRU5UX1FVQU5USVRZLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5cclxuLy9zaW5nbGUgcHJvZHVjdFxyXG5leHBvcnQgY29uc3QgZ2V0U2luZ2xlUHJvZHVjdCA9IChpZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLlBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBzaW5nbGVQcm9kdWN0SWQ6IGlkLFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2hvd1NpbmdsZVByb2R1Y3QgPSAocmVzcG9uc2UpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5HRVRfU0lOR0xMRV9QUk9EVUNULFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHNpbmdsZVByb2R1Y3Q6IHJlc3BvbnNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCIvL1BST0RVQ1RTXHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX1JFUVVFU1QgPSBcIlBST0RVQ1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9SRVNQT05TRSA9IFwiUFJPRFVDVF9SRVNQT05TRVwiO1xyXG5leHBvcnQgY29uc3QgTE9BRElORyA9IFwiTE9BRElOR1wiO1xyXG5cclxuLy9TSU5HTEUgUFJPRFVDVFxyXG5leHBvcnQgY29uc3QgUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUID0gXCJQUkVRVUVTVF9TSU5HTExFX1BST0RVQ1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TSU5HTExFX1BST0RVQ1QgPSBcIkdFVF9TSU5HTExFX1BST0RVQ1RcIjtcclxuXHJcbi8vQ0FSVFxyXG5leHBvcnQgY29uc3QgQUREX0lURU1fVE9fQ0FSVCA9IFwiQUREX0lURU1fVE9fQ0FSVFwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0lURU1fSU5fQ0FSVCA9IFwiREVMRVRFX0lURU1fSU5fQ0FSVFwiO1xyXG4vL3F1YW50aXR5XHJcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfUVVBTlRJVFkgPSBcIklOQ1JFTUVOVF9RVUFOVElUWVwiO1xyXG5leHBvcnQgY29uc3QgREVDUkVNRU5UX1FVQU5USVRZID0gXCJERUNSRU1FTlRfUVVBTlRJVFlcIjtcclxuXHJcbi8vbG9naW5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSSA9IFwiUkVRVUVTVF9VU0VSU19GUk9NX0ZBS0VfQVBJXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUlNfRlJPTV9GQUtFX0FQSSA9IFwiR0VUX1VTRVJTX0ZST01fRkFLRV9BUElcIjtcclxuZXhwb3J0IGNvbnN0IENIRUNLX0xPR0lOX1VTRVIgPSBcIkNIRUNLX0xPR0lOX1VTRVJcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=