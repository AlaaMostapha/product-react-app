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
      className: "basicTable",
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
                  className: "reviewPageImg"
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
            colspan: 3,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnRuL0J0bi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1Jldmlld09yZGVyL1Jldmlld09yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9SZXZpZXdPcmRlci9SZXZpZXdPcmRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9jb25zdGFudHMvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW4iLCJzcGFjaW5nIiwiQ3JlYXRlQnV0dG9uIiwicHJvcHMiLCJjb2xvciIsInRleHQiLCJocmVmIiwib25DbGljayIsInJlc3QiLCJjbGFzc2VzIiwiTG9hZGluZ0luZGljYXRvciIsIlF1YW50aXR5IiwiaXRlbSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbnB1dFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiaW5wdXRWYWx1ZSIsInNldGlucHV0VmFsdWUiLCJ1c2VTdGF0ZSIsInF1YW50aXR5IiwidXNlRWZmZWN0IiwiZGVjcmVhc2VWYWx1ZSIsImNhcnRBY3Rpb25zIiwiaW5jcmVhc2VWYWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFibGUiLCJtaW5XaWR0aCIsInRhYmVsSGVhZGluZ3MiLCJmb250V2VpZ2h0IiwiQmFzaWNUYWJsZSIsInRhYmxlSGVhZGluZ3MiLCJhcnJheUl0ZW1zIiwiUGFwZXIiLCJtYXAiLCJ0YWJsZUhlYWRpbmciLCJSZXZpZXdPcmRlciIsInJvdXRlciIsInVzZVJvdXRlciIsImNhcnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY2FydFJlZHVjZXIiLCJjYXJ0TG9hZGVyIiwiY2FydHRvdGFsIiwic2V0Y2FydHRvdGFsIiwicmVkdWNlIiwiYWNjdW1sYXRvciIsInByb2R1Y3QiLCJwcmljZSIsInRvRml4ZWQiLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJyZWRpcmVjdFRvVXNlckZvcm0iLCJwdXNoIiwiaW5kZXgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaW1hZ2UiLCJ0aXRsZSIsImxlbmd0aCIsInRleHRBbGlnbiIsImFkZEl0ZW1JbkNhcnQiLCJ0eXBlIiwiYWN0aW9uVHlwZSIsInBheWxvYWQiLCJuZXdJdGVtIiwiZGVsZXRlSXRlbUluQ2FydCIsImRlbGV0ZWRJdGVtIiwiaW5jcmVtZW50UXVhbnRpdHkiLCJkZWNyZW1lbnRRdWFudGl0eSIsIlBST0RVQ1RfUkVRVUVTVCIsIlBST0RVQ1RfUkVTUE9OU0UiLCJMT0FESU5HIiwiUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUIiwiR0VUX1NJTkdMTEVfUFJPRFVDVCIsIkFERF9JVEVNX1RPX0NBUlQiLCJERUxFVEVfSVRFTV9JTl9DQVJUIiwiSU5DUkVNRU5UX1FVQU5USVRZIiwiREVDUkVNRU5UX1FVQU5USVRZIiwiUkVRVUVTVF9VU0VSU19GUk9NX0ZBS0VfQVBJIiwiR0VUX1VTRVJTX0ZST01fRkFLRV9BUEkiLCJDSEVDS19MT0dJTl9VU0VSIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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LE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQixDLENBRVA7O0FBQ08sTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCLEM7Ozs7Ozs7Ozs7O0FDbkJQLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1Jldmlld09yZGVyL1Jldmlld09yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvUmV2aWV3T3JkZXIvUmV2aWV3T3JkZXIuanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImID4gKlwiOiB7XHJcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlQnV0dG9uKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjb2xvciwgdGV4dCwgaHJlZiwgb25DbGljaywgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdJbmRpY2F0b3IoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgPExvYWRlclxyXG4gICAgICAgIHR5cGU9XCJQdWZmXCJcclxuICAgICAgICBjb2xvcj1cIiMwMEJGRkZcIlxyXG4gICAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgdGltZW91dD17MzAwMH0gLy8zIHNlY3NcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gaW1wb3J0IFwiLi9xdWFudGl0eS5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIGNhcnRBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIFF1YW50aXR5KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpdGVtIH0gPSBwcm9wcztcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoMCk7XHJcbiAgLy9zZXQgZGVmYXVsdCB2YWx1ZSBvZiBpbnB1dCB2YWx1ZSB3aXRoIHF1YW50aXR5IGZyb20gYW5vdGhlciBwYWdlc1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRpbnB1dFZhbHVlXSA9IHVzZVN0YXRlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH0sIFtpdGVtLnF1YW50aXR5XSk7XHJcblxyXG4gIGNvbnN0IGRlY3JlYXNlVmFsdWUgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5kZWNyZW1lbnRRdWFudGl0eShpdGVtKSk7XHJcbiAgICBpZiAoaXRlbS5xdWFudGl0eSA8PSAwKSB7XHJcbiAgICAgIGl0ZW0ucXVhbnRpdHkgPSAwO1xyXG4gICAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgfVxyXG4gICAgc2V0aW5wdXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbmNyZWFzZVZhbHVlID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuaW5jcmVtZW50UXVhbnRpdHkoaXRlbSkpO1xyXG4gICAgc2V0aW5wdXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICAvLyBzZXRpbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9uQ2hhbmdlUXVhbnRpdHkoaW5wdXRWYWx1ZSkpXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidmFsdWUtYnV0dG9uXCJcclxuICAgICAgICBpZD1cImRlY3JlYXNlXCJcclxuICAgICAgICBvbkNsaWNrPXtkZWNyZWFzZVZhbHVlfVxyXG4gICAgICAgIHZhbHVlPVwiRGVjcmVhc2UgVmFsdWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgLVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgaWQ9XCJudW1iZXJcIlxyXG4gICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInZhbHVlLWJ1dHRvblwiXHJcbiAgICAgICAgaWQ9XCJpbmNyZWFzZVwiXHJcbiAgICAgICAgb25DbGljaz17aW5jcmVhc2VWYWx1ZX1cclxuICAgICAgICB2YWx1ZT1cIkluY3JlYXNlIFZhbHVlXCJcclxuICAgICAgPlxyXG4gICAgICAgICtcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFF1YW50aXR5O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFwiLi90YWJsZS5tb2R1bGUuc2Nzc1wiO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICB0YWJsZToge1xyXG4gICAgbWluV2lkdGg6IDY1MCxcclxuICB9LFxyXG4gIHRhYmVsSGVhZGluZ3M6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDgwMCxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljVGFibGUocHJvcHMpIHtcclxuICBjb25zdCB7IHRhYmxlSGVhZGluZ3MsIGFycmF5SXRlbXMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XHJcbiAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAge3RhYmxlSGVhZGluZ3MubWFwKCh0YWJsZUhlYWRpbmcpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9e2NsYXNzZXMudGFiZWxIZWFkaW5nc30+XHJcbiAgICAgICAgICAgICAgICAgIHt0YWJsZUhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT57YXJyYXlJdGVtc308L1RhYmxlQm9keT5cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsImltcG9ydCBcIi4vUmV2aWV3T3JkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbmltcG9ydCBCYXNpY1RhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlXCI7XHJcbmltcG9ydCB7IFRhYmxlQ2VsbCwgVGFibGVSb3cgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIFJldmlld09yZGVyKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLmNhcnQpO1xyXG4gIGNvbnN0IGNhcnRMb2FkZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLmNhcnRMb2FkZXIpO1xyXG4gIC8vZWFjaCBwcm9kdWN0IGRpc3BsYXkgd2l0aCBxdWFudGl0eSBhbmQgZGVsZXRlIGJ0biAvL3Jlc3QgdW5pdCBwcmljZSBhbmQgdG90YWwgcHJpY2VcclxuICBjb25zdCBbY2FydHRvdGFsLCBzZXRjYXJ0dG90YWxdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRjYXJ0dG90YWwoXHJcbiAgICAgIGNhcnRcclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhY2N1bWxhdG9yLCBwcm9kdWN0KSB7XHJcbiAgICAgICAgICByZXR1cm4gYWNjdW1sYXRvciArIHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnF1YW50aXR5O1xyXG4gICAgICAgIH0sIDApXHJcbiAgICAgICAgLnRvRml4ZWQoMylcclxuICAgICk7XHJcbiAgfSwgW2NhcnRdKTtcclxuICBjb25zdCByZW1vdmVJdGVtRnJvbUNhcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuZGVsZXRlSXRlbUluQ2FydChwcm9kdWN0KSk7XHJcbiAgfTtcclxuICBjb25zdCByZWRpcmVjdFRvVXNlckZvcm0gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcm91dGVyLnB1c2goYC9Vc2VyRm9ybU9yZGVyTm93L09yZGVyTm93YCk7XHJcbiAgfTtcclxuICBjb25zdCB0YWJsZUhlYWRpbmdzID0gW1wiSXRlbVwiLCBcIlVuaXQgUHJpY2VcIiwgXCJUb3RhbCBQcmljZVwiLCBcIkRlbGV0ZVwiXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT1cIlByb2R1Y3RMaXN0Q29udGFpbmVyXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlJldmlldyBZb3VyIE9yZGVyPC9oMj5cclxuICAgICAge2NhcnRMb2FkZXIgPyAoXHJcbiAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8QmFzaWNUYWJsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWNUYWJsZVwiXHJcbiAgICAgICAgICB0YWJsZUhlYWRpbmdzPXt0YWJsZUhlYWRpbmdzfVxyXG4gICAgICAgICAgYXJyYXlJdGVtcz17Y2FydC5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCIgZGlzcGxheT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXZpZXdQYWdlSW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UXVhbnRpdHkgaXRlbT17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Byb2R1Y3QucHJpY2V9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICB7KHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnF1YW50aXR5KS50b0ZpeGVkKDMpfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8Q3JlYXRlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9ezxEZWxldGVJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW1Gcm9tQ2FydChwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAge2luZGV4ID09PSBjYXJ0Lmxlbmd0aCAtIDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPlRvdGFsPC9iPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xzcGFuPXszfSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e2NhcnR0b3RhbH08L2I+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgIDxDcmVhdGVCdXR0b25cclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICB0ZXh0PVwiT3JkZXIgTm93XCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3JlZGlyZWN0VG9Vc2VyRm9ybX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3T3JkZXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhc2ljVGFibGVcIjogXCJSZXZpZXdPcmRlcl9iYXNpY1RhYmxlX18yZ3ZsQlwiLFxuXHRcInJldmlld1BhZ2VJbWdcIjogXCJSZXZpZXdPcmRlcl9yZXZpZXdQYWdlSW1nX18zaHh1blwiXG59O1xuIiwiaW1wb3J0ICogYXMgYWN0aW9uVHlwZSBmcm9tIFwiLi4vY29uc3RhbnRzL2FjdGlvblR5cGVzXCI7XHJcblxyXG4vL2NhcnRcclxuZXhwb3J0IGNvbnN0IGFkZEl0ZW1JbkNhcnQgPSAoaXRlbSkgPT4gKHtcclxuICB0eXBlOiBhY3Rpb25UeXBlLkFERF9JVEVNX1RPX0NBUlQsXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgbmV3SXRlbTogaXRlbSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtSW5DYXJ0ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5ERUxFVEVfSVRFTV9JTl9DQVJULFxyXG4gIHBheWxvYWQ6IHtcclxuICAgIGRlbGV0ZWRJdGVtOiBpdGVtLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudFF1YW50aXR5ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5JTkNSRU1FTlRfUVVBTlRJVFksXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaXRlbSxcclxuICB9LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IGRlY3JlbWVudFF1YW50aXR5ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogYWN0aW9uVHlwZS5ERUNSRU1FTlRfUVVBTlRJVFksXHJcbiAgcGF5bG9hZDoge1xyXG4gICAgaXRlbSxcclxuICB9LFxyXG59KTtcclxuIiwiLy9QUk9EVUNUU1xyXG5leHBvcnQgY29uc3QgUFJPRFVDVF9SRVFVRVNUID0gXCJQUk9EVUNUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFBST0RVQ1RfUkVTUE9OU0UgPSBcIlBST0RVQ1RfUkVTUE9OU0VcIjtcclxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSBcIkxPQURJTkdcIjtcclxuXHJcbi8vU0lOR0xFIFBST0RVQ1RcclxuZXhwb3J0IGNvbnN0IFBSRVFVRVNUX1NJTkdMTEVfUFJPRFVDVCA9IFwiUFJFUVVFU1RfU0lOR0xMRV9QUk9EVUNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfU0lOR0xMRV9QUk9EVUNUID0gXCJHRVRfU0lOR0xMRV9QUk9EVUNUXCI7XHJcblxyXG4vL0NBUlRcclxuZXhwb3J0IGNvbnN0IEFERF9JVEVNX1RPX0NBUlQgPSBcIkFERF9JVEVNX1RPX0NBUlRcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNX0lOX0NBUlQgPSBcIkRFTEVURV9JVEVNX0lOX0NBUlRcIjtcclxuLy9xdWFudGl0eVxyXG5leHBvcnQgY29uc3QgSU5DUkVNRU5UX1FVQU5USVRZID0gXCJJTkNSRU1FTlRfUVVBTlRJVFlcIjtcclxuZXhwb3J0IGNvbnN0IERFQ1JFTUVOVF9RVUFOVElUWSA9IFwiREVDUkVNRU5UX1FVQU5USVRZXCI7XHJcblxyXG4vL2xvZ2luXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJTX0ZST01fRkFLRV9BUEkgPSBcIlJFUVVFU1RfVVNFUlNfRlJPTV9GQUtFX0FQSVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1VTRVJTX0ZST01fRkFLRV9BUEkgPSBcIkdFVF9VU0VSU19GUk9NX0ZBS0VfQVBJXCI7XHJcbmV4cG9ydCBjb25zdCBDSEVDS19MT0dJTl9VU0VSID0gXCJDSEVDS19MT0dJTl9VU0VSXCI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=