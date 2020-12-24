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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\components\\quantity\\quantity.js";
// import "./quantity.scss";




function Quantity(props) {
  const {
    item
  } = props;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const inputRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(0); //set default value of input value with quantity from another pages

  const {
    0: inputValue,
    1: setinputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(item.quantity);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setinputValue(item.quantity);
  }, [item.quantity]);

  const decreaseValue = () => {
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_3__["decrementQuantity"](item));

    if (item.quantity <= 0) {
      item.quantity = 0;
      setinputValue(item.quantity);
    }

    setinputValue(item.quantity);
  };

  const increaseValue = () => {
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_3__["incrementQuantity"](item));
    setinputValue(item.quantity);
  };

  const handleChange = event => {// console.log(props)
    // setinputValue(event.target.value);
    //   console.log(onChangeQuantity(inputValue))
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "quantity",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "value-button",
      id: "decrease",
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
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "value-button",
      id: "increase",
      onClick: increaseValue,
      value: "Increase Value",
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnRuL0J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Byb2R1Y3REZXRhaWxzTmV4dC8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9jb25zdGFudHMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvYWRlci1zcGlubmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWFyZ2luIiwic3BhY2luZyIsIkNyZWF0ZUJ1dHRvbiIsInByb3BzIiwiY29sb3IiLCJ0ZXh0IiwiaHJlZiIsIm9uQ2xpY2siLCJyZXN0IiwiY2xhc3NlcyIsIkxvYWRpbmdJbmRpY2F0b3IiLCJRdWFudGl0eSIsIml0ZW0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW5wdXRSZWYiLCJSZWFjdCIsInVzZVJlZiIsImlucHV0VmFsdWUiLCJzZXRpbnB1dFZhbHVlIiwidXNlU3RhdGUiLCJxdWFudGl0eSIsInVzZUVmZmVjdCIsImRlY3JlYXNlVmFsdWUiLCJjYXJ0QWN0aW9ucyIsImluY3JlYXNlVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIlByb2R1Y3REZXRhaWxzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2luZ2xlUHJvZHVjdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaW5nbGVQcm9kdWN0UmVkdWNlciIsImNhcnQiLCJjYXJ0UmVkdWNlciIsImlkIiwicXVlcnkiLCJwcm9kdWN0QWN0aW9ucyIsInByb2R1Y3QiLCJmaW5kIiwiYWRkSXRlbSIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJpbWFnZSIsImFsdCIsImhlaWdodCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImFkZEl0ZW1JbkNhcnQiLCJ0eXBlIiwiYWN0aW9uVHlwZSIsInBheWxvYWQiLCJuZXdJdGVtIiwiZGVsZXRlSXRlbUluQ2FydCIsImRlbGV0ZWRJdGVtIiwiaW5jcmVtZW50UXVhbnRpdHkiLCJkZWNyZW1lbnRRdWFudGl0eSIsImdldFNpbmdsZVByb2R1Y3QiLCJzaW5nbGVQcm9kdWN0SWQiLCJzaG93U2luZ2xlUHJvZHVjdCIsInJlc3BvbnNlIiwiUFJPRFVDVF9SRVFVRVNUIiwiUFJPRFVDVF9SRVNQT05TRSIsIkxPQURJTkciLCJQUkVRVUVTVF9TSU5HTExFX1BST0RVQ1QiLCJHRVRfU0lOR0xMRV9QUk9EVUNUIiwiQUREX0lURU1fVE9fQ0FSVCIsIkRFTEVURV9JVEVNX0lOX0NBUlQiLCJJTkNSRU1FTlRfUVVBTlRJVFkiLCJERUNSRU1FTlRfUVVBTlRJVFkiLCJSRVFVRVNUX1VTRVJTX0ZST01fRkFLRV9BUEkiLCJHRVRfVVNFUlNfRlJPTV9G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QTFCLEM7Ozs7Ozs7Ozs7OztBQ1RQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCLEMsQ0FFUDs7QUFDTyxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUIsQyxDQUVQOztBQUNPLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QixDLENBQ1A7O0FBQ08sTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCLEMsQ0FFUDs7QUFDTyxNQUFNQywyQkFBMkIsR0FBRyw2QkFBcEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekIsQzs7Ozs7Ozs7Ozs7QUNuQlAscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvcHJvZHVjdERldGFpbHNOZXh0L1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9wcm9kdWN0RGV0YWlsc05leHQvW2lkXS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVCdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCB7IGNvbG9yLCB0ZXh0LCBocmVmLCBvbkNsaWNrLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgID5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ0luZGljYXRvcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8TG9hZGVyXHJcbiAgICAgICAgdHlwZT1cIlB1ZmZcIlxyXG4gICAgICAgIGNvbG9yPVwiIzAwQkZGRlwiXHJcbiAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICB0aW1lb3V0PXszMDAwfSAvLzMgc2Vjc1xyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBpbXBvcnQgXCIuL3F1YW50aXR5LnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG5cclxuZnVuY3Rpb24gUXVhbnRpdHkocHJvcHMpIHtcclxuICBjb25zdCB7IGl0ZW0gfSA9IHByb3BzO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigwKTtcclxuICAvL3NldCBkZWZhdWx0IHZhbHVlIG9mIGlucHV0IHZhbHVlIHdpdGggcXVhbnRpdHkgZnJvbSBhbm90aGVyIHBhZ2VzXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldGlucHV0VmFsdWVdID0gdXNlU3RhdGUoaXRlbS5xdWFudGl0eSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldGlucHV0VmFsdWUoaXRlbS5xdWFudGl0eSk7XHJcbiAgfSwgW2l0ZW0ucXVhbnRpdHldKTtcclxuXHJcbiAgY29uc3QgZGVjcmVhc2VWYWx1ZSA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmRlY3JlbWVudFF1YW50aXR5KGl0ZW0pKTtcclxuICAgIGlmIChpdGVtLnF1YW50aXR5IDw9IDApIHtcclxuICAgICAgaXRlbS5xdWFudGl0eSA9IDA7XHJcbiAgICAgIHNldGlucHV0VmFsdWUoaXRlbS5xdWFudGl0eSk7XHJcbiAgICB9XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluY3JlYXNlVmFsdWUgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5pbmNyZW1lbnRRdWFudGl0eShpdGVtKSk7XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIC8vIHNldGlucHV0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vICAgY29uc29sZS5sb2cob25DaGFuZ2VRdWFudGl0eShpbnB1dFZhbHVlKSlcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJ2YWx1ZS1idXR0b25cIlxyXG4gICAgICAgIGlkPVwiZGVjcmVhc2VcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2RlY3JlYXNlVmFsdWV9XHJcbiAgICAgICAgdmFsdWU9XCJEZWNyZWFzZSBWYWx1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICAtXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBpZD1cIm51bWJlclwiXHJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidmFsdWUtYnV0dG9uXCJcclxuICAgICAgICBpZD1cImluY3JlYXNlXCJcclxuICAgICAgICBvbkNsaWNrPXtpbmNyZWFzZVZhbHVlfVxyXG4gICAgICAgIHZhbHVlPVwiSW5jcmVhc2UgVmFsdWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgK1xyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUXVhbnRpdHk7XHJcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RBY3Rpb25zIGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHNpbmdsZVByb2R1Y3QgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuc2luZ2xlUHJvZHVjdFJlZHVjZXIuc2luZ2xlUHJvZHVjdFxyXG4gICk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIC8vIHJlcXVlc3QgaXRlbSBmcm9tIGFwaVxyXG4gICAgZGlzcGF0Y2gocHJvZHVjdEFjdGlvbnMuZ2V0U2luZ2xlUHJvZHVjdChpZCkpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9jaGVjayBpZiB0aGlzIGl0ZW0gaXMgaW4gY2FydCByZXR1cm4gaXQgZnJvbSBjYXJ0IHdpdGggaXQncyBxdWFudGl0eVxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGNhcnQuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gc2luZ2xlUHJvZHVjdC5pZCk7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5zaG93U2luZ2xlUHJvZHVjdChwcm9kdWN0KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5zaG93U2luZ2xlUHJvZHVjdChzaW5nbGVQcm9kdWN0KSk7XHJcbiAgICB9XHJcbiAgfSwgW2NhcnRdKTtcclxuXHJcbiAgY29uc3QgYWRkSXRlbSA9IChzaW5nbGVQcm9kdWN0KSA9PiB7XHJcbiAgICAvL2FkZCBpdGVtIHRvIGNhcnRcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmFkZEl0ZW1JbkNhcnQoc2luZ2xlUHJvZHVjdCkpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICB7c2luZ2xlUHJvZHVjdCA/IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3NpbmdsZVByb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17c2luZ2xlUHJvZHVjdC5hbHR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyNTBweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPntzaW5nbGVQcm9kdWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxoND5EZXNjcmlwdGlvbjo8L2g0PlxyXG4gICAgICAgICAgICA8cD57c2luZ2xlUHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg0PlByaWNlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3NpbmdsZVByb2R1Y3QucXVhbnRpdHkgPyAoXHJcbiAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3NpbmdsZVByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJBZGQgdG8gY2FydFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHNpbmdsZVByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5cclxuLy9jYXJ0XHJcbmV4cG9ydCBjb25zdCBhZGRJdGVtSW5DYXJ0ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5BRERfSVRFTV9UT19DQVJULFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG5ld0l0ZW06IGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbUluQ2FydCA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuREVMRVRFX0lURU1fSU5fQ0FSVCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkZWxldGVkSXRlbTogaXRlbSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRRdWFudGl0eSA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuSU5DUkVNRU5UX1FVQU5USVRZLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBkZWNyZW1lbnRRdWFudGl0eSA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuREVDUkVNRU5UX1FVQU5USVRZLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5cclxuLy9zaW5nbGUgcHJvZHVjdFxyXG5leHBvcnQgY29uc3QgZ2V0U2luZ2xlUHJvZHVjdCA9IChpZCkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLlBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBzaW5nbGVQcm9kdWN0SWQ6IGlkLFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2hvd1NpbmdsZVByb2R1Y3QgPSAocmVzcG9uc2UpID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5HRVRfU0lOR0xMRV9QUk9EVUNULFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIHNpbmdsZVByb2R1Y3Q6IHJlc3BvbnNlLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCIvL1BST0RVQ1RTXHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX1JFUVVFU1QgPSBcIlBST0RVQ1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9SRVNQT05TRSA9IFwiUFJPRFVDVF9SRVNQT05TRVwiO1xyXG5leHBvcnQgY29uc3QgTE9BRElORyA9IFwiTE9BRElOR1wiO1xyXG5cclxuLy9TSU5HTEUgUFJPRFVDVFxyXG5leHBvcnQgY29uc3QgUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUID0gXCJQUkVRVUVTVF9TSU5HTExFX1BST0RVQ1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9TSU5HTExFX1BST0RVQ1QgPSBcIkdFVF9TSU5HTExFX1BST0RVQ1RcIjtcclxuXHJcbi8vQ0FSVFxyXG5leHBvcnQgY29uc3QgQUREX0lURU1fVE9fQ0FSVCA9IFwiQUREX0lURU1fVE9fQ0FSVFwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0lURU1fSU5fQ0FSVCA9IFwiREVMRVRFX0lURU1fSU5fQ0FSVFwiO1xyXG4vL3F1YW50aXR5XHJcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfUVVBTlRJVFkgPSBcIklOQ1JFTUVOVF9RVUFOVElUWVwiO1xyXG5leHBvcnQgY29uc3QgREVDUkVNRU5UX1FVQU5USVRZID0gXCJERUNSRU1FTlRfUVVBTlRJVFlcIjtcclxuXHJcbi8vbG9naW5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSSA9IFwiUkVRVUVTVF9VU0VSU19GUk9NX0ZBS0VfQVBJXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUlNfRlJPTV9GQUtFX0FQSSA9IFwiR0VUX1VTRVJTX0ZST01fRkFLRV9BUElcIjtcclxuZXhwb3J0IGNvbnN0IENIRUNLX0xPR0lOX1VTRVIgPSBcIkNIRUNLX0xPR0lOX1VTRVJcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=