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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/ReviewOrder/ReviewOrder.js");
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

/***/ "./src/components/table/table.js":
/*!***************************************!*\
  !*** ./src/components/table/table.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicTable; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table.module.scss */ "./src/components/table/table.module.scss");
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_table_module_scss__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\components\\table\\table.js";










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  table: {
    minWidth: 650
  },
  tabelHeadings: {
    fontWeight: 800
  }
});
function BasicTable(props) {
  const {
    tableHeadings,
    arrayItems
  } = props;
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.table,
      "aria-label": "simple table",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_7___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8___default.a, {
          children: tableHeadings.map(tableHeading => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a, {
              className: classes.tabelHeadings,
              children: tableHeading
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 17
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: arrayItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/table/table.module.scss":
/*!************************************************!*\
  !*** ./src/components/table/table.module.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ "./src/pages/ReviewOrder/ReviewOrder.js":
/*!**********************************************!*\
  !*** ./src/pages/ReviewOrder/ReviewOrder.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewOrder_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewOrder.module.scss */ "./src/pages/ReviewOrder/ReviewOrder.module.scss");
/* harmony import */ var _ReviewOrder_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ReviewOrder_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/quantity/quantity */ "./src/components/quantity/quantity.js");
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/table/table */ "./src/components/table/table.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\ReviewOrder\\ReviewOrder.js";













function ReviewOrder(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartReducer.cart);
  const cartLoader = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartReducer.cartLoader); //each product display with quantity and delete btn //rest unit price and total price

  const {
    0: carttotal,
    1: setcarttotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setcarttotal(cart.reduce(function (accumlator, product) {
      return accumlator + product.price * product.quantity;
    }, 0).toFixed(3));
  }, [cart]);

  const removeItemFromCart = product => {
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_9__["deleteItemInCart"](product));
  };

  const redirectToUserForm = () => {
    return router.push(`/UserFormOrderNow/OrderNow`);
  };

  const tableHeadings = ["Item", "Unit Price", "Total Price", "Delete"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    maxWidth: "lg",
    className: "ProductListContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "text-center",
      children: "Review Your Order"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), cartLoader ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_table_table__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: _ReviewOrder_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.basicTable,
      tableHeadings: tableHeadings,
      arrayItems: cart.map((product, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableRow"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            component: "th",
            scope: "row",
            display: "flex",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  display: "flex",
                  alignItems: "center"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: product.image,
                  alt: product.title,
                  className: _ReviewOrder_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reviewPageImg
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 23
                }, this), product.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_quantity_quantity__WEBPACK_IMPORTED_MODULE_7__["default"], {
                item: product
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            children: product.price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            children: (product.price * product.quantity).toFixed(3)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "secondary",
              text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 27
              }, this),
              onClick: () => removeItemFromCart(product)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, this), index === cart.length - 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableRow"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            colSpan: 3,
            style: {
              textAlign: "center"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: carttotal
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, this)]
      }, void 0, true))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        textAlign: "center"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        color: "primary",
        text: "Order Now",
        onClick: redirectToUserForm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ReviewOrder);

/***/ }),

/***/ "./src/pages/ReviewOrder/ReviewOrder.module.scss":
/*!*******************************************************!*\
  !*** ./src/pages/ReviewOrder/ReviewOrder.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"basicTable": "ReviewOrder_basicTable__2gvlB",
	"reviewPageImg": "ReviewOrder_reviewPageImg__3hxun"
};


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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

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

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnRuL0J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHkubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1Jldmlld09yZGVyL1Jldmlld09yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9SZXZpZXdPcmRlci9SZXZpZXdPcmRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9jb25zdGFudHMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW4iLCJzcGFjaW5nIiwiQ3JlYXRlQnV0dG9uIiwicHJvcHMiLCJjb2xvciIsInRleHQiLCJocmVmIiwib25DbGljayIsInJlc3QiLCJjbGFzc2VzIiwiTG9hZGluZ0luZGljYXRvciIsIlF1YW50aXR5IiwiaXRlbSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbnB1dFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiaW5wdXRWYWx1ZSIsInNldGlucHV0VmFsdWUiLCJ1c2VTdGF0ZSIsInF1YW50aXR5IiwidXNlRWZmZWN0IiwiZGVjcmVhc2VWYWx1ZSIsImNhcnRBY3Rpb25zIiwiaW5jcmVhc2VWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50Iiwic3R5bGVzIiwidmFsdWVCdXR0b24iLCJkZWNyZWFzZSIsImlucHV0U3R5bGUiLCJpbmNyZWFzZSIsInRhYmxlIiwibWluV2lkdGgiLCJ0YWJlbEhlYWRpbmdzIiwiZm9udFdlaWdodCIsIkJhc2ljVGFibGUiLCJ0YWJsZUhlYWRpbmdzIiwiYXJyYXlJdGVtcyIsIlBhcGVyIiwibWFwIiwidGFibGVIZWFkaW5nIiwiUmV2aWV3T3JkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNhcnRSZWR1Y2VyIiwiY2FydExvYWRlciIsImNhcnR0b3RhbCIsInNldGNhcnR0b3RhbCIsInJlZHVjZSIsImFjY3VtbGF0b3IiLCJwcm9kdWN0IiwicHJpY2UiLCJ0b0ZpeGVkIiwicmVtb3ZlSXRlbUZyb21DYXJ0IiwicmVkaXJlY3RUb1VzZXJGb3JtIiwicHVzaCIsImJhc2ljVGFibGUiLCJpbmRleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJpbWFnZSIsInRpdGxlIiwicmV2aWV3UGFnZUltZyIsImxlbmd0aCIsInRleHRBbGlnbiIsImFkZEl0ZW1JbkNhcnQiLCJ0eXBlIiwiYWN0aW9uVHlwZSIsInBheWxvYWQiLCJuZXdJdGVtIiwiZGVsZXRlSXRlbUluQ2FydCIsImRlbGV0ZWRJdGVtIiwiaW5jcmVtZW50UXVhbnRpdHkiLCJkZWNyZW1lbnRRdWFudGl0eSIsIlBST0RVQ1RfUkVRVUVTVCIsIlBST0RVQ1RfUkVTUE9OU0UiLCJMT0FESU5HIiwiUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUIiwiR0VUX1NJTkdMTEVfUFJPRFVDVCIsIkFERF9JVEVNX1RPX0NBUlQiLCJERUxFVEVfSVRFTV9JTl9DQVJUIiwiSU5DUkVNRU5UX1FVQU5USVRZIiwiREVDUkVNRU5UX1FVQU5USVRZIiwiUkVRVUVTVF9VU0VSU19GUk9NX0ZBS0VfQVBJIiwiR0VUX1VTRVJTX0ZST01fRkFLRV9BUEkiLCJDSEVDS19MT0dJTl9VU0VSIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QUFPLEVBQUU7QUFDUDlEO0FBRE87QUFGaUMsQ0FBWCxDQUExQixDOzs7Ozs7Ozs7Ozs7QUN2QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLE1BQU1vRSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCLEMsQ0FFUDs7QUFDTyxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUIsQyxDQUVQOztBQUNPLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QixDLENBQ1A7O0FBQ08sTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCLEMsQ0FFUDs7QUFDTyxNQUFNQywyQkFBMkIsR0FBRyw2QkFBcEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekIsQzs7Ozs7Ozs7Ozs7QUNuQlAsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvUmV2aWV3T3JkZXIvUmV2aWV3T3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9SZXZpZXdPcmRlci9SZXZpZXdPcmRlci5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBcIiYgPiAqXCI6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVCdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCB7IGNvbG9yLCB0ZXh0LCBocmVmLCBvbkNsaWNrLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgID5cclxuICAgICAgICB7dGV4dH1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ0luZGljYXRvcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8TG9hZGVyXHJcbiAgICAgICAgdHlwZT1cIlB1ZmZcIlxyXG4gICAgICAgIGNvbG9yPVwiIzAwQkZGRlwiXHJcbiAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICB0aW1lb3V0PXszMDAwfSAvLzMgc2Vjc1xyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3F1YW50aXR5Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIGNhcnRBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIFF1YW50aXR5KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpdGVtIH0gPSBwcm9wcztcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoMCk7XHJcbiAgLy9zZXQgZGVmYXVsdCB2YWx1ZSBvZiBpbnB1dCB2YWx1ZSB3aXRoIHF1YW50aXR5IGZyb20gYW5vdGhlciBwYWdlc1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRpbnB1dFZhbHVlXSA9IHVzZVN0YXRlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH0sIFtpdGVtLnF1YW50aXR5XSk7XHJcblxyXG4gIGNvbnN0IGRlY3JlYXNlVmFsdWUgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5kZWNyZW1lbnRRdWFudGl0eShpdGVtKSk7XHJcbiAgICBpZiAoaXRlbS5xdWFudGl0eSA8PSAwKSB7XHJcbiAgICAgIGl0ZW0ucXVhbnRpdHkgPSAwO1xyXG4gICAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgfVxyXG4gICAgc2V0aW5wdXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbmNyZWFzZVZhbHVlID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuaW5jcmVtZW50UXVhbnRpdHkoaXRlbSkpO1xyXG4gICAgc2V0aW5wdXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICAvLyBzZXRpbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9uQ2hhbmdlUXVhbnRpdHkoaW5wdXRWYWx1ZSkpXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUJ1dHRvbn1cclxuICAgICAgICBpZD17c3R5bGVzLmRlY3JlYXNlfVxyXG4gICAgICAgIG9uQ2xpY2s9e2RlY3JlYXNlVmFsdWV9XHJcbiAgICAgICAgdmFsdWU9XCJEZWNyZWFzZSBWYWx1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICAtXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBpZD1cIm51bWJlclwiXHJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIGNsYXNzPXtzdHlsZXMuaW5wdXRTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlQnV0dG9ufVxyXG4gICAgICAgIGlkPXtzdHlsZXMuaW5jcmVhc2V9XHJcbiAgICAgICAgb25DbGljaz17aW5jcmVhc2VWYWx1ZX1cclxuICAgICAgICB2YWx1ZT1cIkluY3JlYXNlIFZhbHVlXCJcclxuICAgICAgPlxyXG4gICAgICAgICtcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFF1YW50aXR5O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ2YWx1ZUJ1dHRvblwiOiBcInF1YW50aXR5X3ZhbHVlQnV0dG9uX18yM2dVZ1wiLFxuXHRcInF1YW50aXR5XCI6IFwicXVhbnRpdHlfcXVhbnRpdHlfXzM0cDQ1XCIsXG5cdFwiZGVjcmVhc2VcIjogXCJxdWFudGl0eV9kZWNyZWFzZV9fMUNqUlBcIixcblx0XCJpbmNyZWFzZVwiOiBcInF1YW50aXR5X2luY3JlYXNlX18yelk0eVwiLFxuXHRcImlucHV0LXdyYXBcIjogXCJxdWFudGl0eV9pbnB1dC13cmFwX195R19EOFwiLFxuXHRcIm51bWJlclwiOiBcInF1YW50aXR5X251bWJlcl9fMU4zRzBcIixcblx0XCJpbnB1dFN0eWxlXCI6IFwicXVhbnRpdHlfaW5wdXRTdHlsZV9fMzdSSnFcIixcblx0XCJxdWFudGl0eS1pbnB1dFwiOiBcInF1YW50aXR5X3F1YW50aXR5LWlucHV0X18yWE1sNlwiLFxuXHRcIk11aUlucHV0QmFzZS1yb290XCI6IFwicXVhbnRpdHlfTXVpSW5wdXRCYXNlLXJvb3RfXzNTOURtXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFwiLi90YWJsZS5tb2R1bGUuc2Nzc1wiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICB0YWJsZToge1xyXG4gICAgbWluV2lkdGg6IDY1MCxcclxuICB9LFxyXG4gIHRhYmVsSGVhZGluZ3M6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDgwMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFibGUocHJvcHMpIHtcclxuICBjb25zdCB7IHRhYmxlSGVhZGluZ3MsIGFycmF5SXRlbXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAge3RhYmxlSGVhZGluZ3MubWFwKCh0YWJsZUhlYWRpbmcpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9e2NsYXNzZXMudGFiZWxIZWFkaW5nc30+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWJsZUhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT57YXJyYXlJdGVtc308L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUmV2aWV3T3JkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbmltcG9ydCBCYXNpY1RhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlXCI7XHJcbmltcG9ydCB7IFRhYmxlQ2VsbCwgVGFibGVSb3cgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIFJldmlld09yZGVyKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLmNhcnQpO1xyXG4gIGNvbnN0IGNhcnRMb2FkZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLmNhcnRMb2FkZXIpO1xyXG4gIC8vZWFjaCBwcm9kdWN0IGRpc3BsYXkgd2l0aCBxdWFudGl0eSBhbmQgZGVsZXRlIGJ0biAvL3Jlc3QgdW5pdCBwcmljZSBhbmQgdG90YWwgcHJpY2VcclxuICBjb25zdCBbY2FydHRvdGFsLCBzZXRjYXJ0dG90YWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRjYXJ0dG90YWwoXHJcbiAgICAgIGNhcnRcclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhY2N1bWxhdG9yLCBwcm9kdWN0KSB7XHJcbiAgICAgICAgICByZXR1cm4gYWNjdW1sYXRvciArIHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnF1YW50aXR5O1xyXG4gICAgICAgIH0sIDApXHJcbiAgICAgICAgLnRvRml4ZWQoMylcclxuICAgICk7XHJcbiAgfSwgW2NhcnRdKTtcclxuICBjb25zdCByZW1vdmVJdGVtRnJvbUNhcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuZGVsZXRlSXRlbUluQ2FydChwcm9kdWN0KSk7XHJcbiAgfTtcclxuICBjb25zdCByZWRpcmVjdFRvVXNlckZvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcm91dGVyLnB1c2goYC9Vc2VyRm9ybU9yZGVyTm93L09yZGVyTm93YCk7XHJcbiAgfTtcclxuICBjb25zdCB0YWJsZUhlYWRpbmdzID0gW1wiSXRlbVwiLCBcIlVuaXQgUHJpY2VcIiwgXCJUb3RhbCBQcmljZVwiLCBcIkRlbGV0ZVwiXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT1cIlByb2R1Y3RMaXN0Q29udGFpbmVyXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlJldmlldyBZb3VyIE9yZGVyPC9oMj5cclxuICAgICAge2NhcnRMb2FkZXIgPyAoXHJcbiAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8QmFzaWNUYWJsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFzaWNUYWJsZX1cclxuICAgICAgICAgIHRhYmxlSGVhZGluZ3M9e3RhYmxlSGVhZGluZ3N9XHJcbiAgICAgICAgICBhcnJheUl0ZW1zPXtjYXJ0Lm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudD1cInRoXCIgc2NvcGU9XCJyb3dcIiBkaXNwbGF5PVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJldmlld1BhZ2VJbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwcm9kdWN0LnByaWNlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgeyhwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eSkudG9GaXhlZCgzKX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXs8RGVsZXRlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtRnJvbUNhcnQocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgIHtpbmRleCA9PT0gY2FydC5sZW5ndGggLSAxICYmIChcclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yj5Ub3RhbDwvYj5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sU3Bhbj17M30gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPntjYXJ0dG90YWx9PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICA8Q3JlYXRlQnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdGV4dD1cIk9yZGVyIE5vd1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXtyZWRpcmVjdFRvVXNlckZvcm19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld09yZGVyO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYXNpY1RhYmxlXCI6IFwiUmV2aWV3T3JkZXJfYmFzaWNUYWJsZV9fMmd2bEJcIixcblx0XCJyZXZpZXdQYWdlSW1nXCI6IFwiUmV2aWV3T3JkZXJfcmV2aWV3UGFnZUltZ19fM2h4dW5cIlxufTtcbiIsImltcG9ydCAqIGFzIGFjdGlvblR5cGUgZnJvbSBcIi4uL2NvbnN0YW50cy9hY3Rpb25UeXBlc1wiO1xyXG5cclxuLy9jYXJ0XHJcbmV4cG9ydCBjb25zdCBhZGRJdGVtSW5DYXJ0ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5BRERfSVRFTV9UT19DQVJULFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIG5ld0l0ZW06IGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbUluQ2FydCA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuREVMRVRFX0lURU1fSU5fQ0FSVCxcclxuICBwYXlsb2FkOiB7XHJcbiAgICBkZWxldGVkSXRlbTogaXRlbSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRRdWFudGl0eSA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuSU5DUkVNRU5UX1FVQU5USVRZLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcbmV4cG9ydCBjb25zdCBkZWNyZW1lbnRRdWFudGl0eSA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IGFjdGlvblR5cGUuREVDUkVNRU5UX1FVQU5USVRZLFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGl0ZW0sXHJcbiAgfSxcclxufSk7XHJcbiIsIi8vUFJPRFVDVFNcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfUkVRVUVTVCA9IFwiUFJPRFVDVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBQUk9EVUNUX1JFU1BPTlNFID0gXCJQUk9EVUNUX1JFU1BPTlNFXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FESU5HID0gXCJMT0FESU5HXCI7XHJcblxyXG4vL1NJTkdMRSBQUk9EVUNUXHJcbmV4cG9ydCBjb25zdCBQUkVRVUVTVF9TSU5HTExFX1BST0RVQ1QgPSBcIlBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1NJTkdMTEVfUFJPRFVDVCA9IFwiR0VUX1NJTkdMTEVfUFJPRFVDVFwiO1xyXG5cclxuLy9DQVJUXHJcbmV4cG9ydCBjb25zdCBBRERfSVRFTV9UT19DQVJUID0gXCJBRERfSVRFTV9UT19DQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfSVRFTV9JTl9DQVJUID0gXCJERUxFVEVfSVRFTV9JTl9DQVJUXCI7XHJcbi8vcXVhbnRpdHlcclxuZXhwb3J0IGNvbnN0IElOQ1JFTUVOVF9RVUFOVElUWSA9IFwiSU5DUkVNRU5UX1FVQU5USVRZXCI7XHJcbmV4cG9ydCBjb25zdCBERUNSRU1FTlRfUVVBTlRJVFkgPSBcIkRFQ1JFTUVOVF9RVUFOVElUWVwiO1xyXG5cclxuLy9sb2dpblxyXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSU19GUk9NX0ZBS0VfQVBJID0gXCJSRVFVRVNUX1VTRVJTX0ZST01fRkFLRV9BUElcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSU19GUk9NX0ZBS0VfQVBJID0gXCJHRVRfVVNFUlNfRlJPTV9GQUtFX0FQSVwiO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfTE9HSU5fVVNFUiA9IFwiQ0hFQ0tfTE9HSU5fVVNFUlwiO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvYWRlci1zcGlubmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9