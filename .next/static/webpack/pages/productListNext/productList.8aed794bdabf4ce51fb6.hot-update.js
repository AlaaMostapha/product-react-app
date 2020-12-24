webpackHotUpdate_N_E("pages/productListNext/productList",{

/***/ "./src/components/quantity/quantity.js":
/*!*********************************************!*\
  !*** ./src/components/quantity/quantity.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quantity.module.scss */ "./src/components/quantity/quantity.module.scss");
/* harmony import */ var _quantity_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_quantity_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\components\\quantity\\quantity.js",
    _s = $RefreshSig$();






function Quantity(props) {
  _s();

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

_s(Quantity, "BWGTbX9UPH1jtp+wKDkYCh+vw0Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = Quantity;
/* harmony default export */ __webpack_exports__["default"] = (Quantity);

var _c;

$RefreshReg$(_c, "Quantity");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHkuanMiXSwibmFtZXMiOlsiUXVhbnRpdHkiLCJwcm9wcyIsIml0ZW0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW5wdXRSZWYiLCJSZWFjdCIsInVzZVJlZiIsImlucHV0VmFsdWUiLCJzZXRpbnB1dFZhbHVlIiwidXNlU3RhdGUiLCJxdWFudGl0eSIsInVzZUVmZmVjdCIsImRlY3JlYXNlVmFsdWUiLCJjYXJ0QWN0aW9ucyIsImluY3JlYXNlVmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInN0eWxlcyIsInZhbHVlQnV0dG9uIiwiZGVjcmVhc2UiLCJpbnB1dFN0eWxlIiwiaW5jcmVhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFFBQU07QUFBRUM7QUFBRixNQUFXRCxLQUFqQjtBQUNBLFFBQU1FLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxDQUFiLENBQWpCLENBSHVCLENBSXZCOztBQUNBLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsc0RBQVEsQ0FBQ1IsSUFBSSxDQUFDUyxRQUFOLENBQTVDO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkSCxpQkFBYSxDQUFDUCxJQUFJLENBQUNTLFFBQU4sQ0FBYjtBQUNELEdBRlEsRUFFTixDQUFDVCxJQUFJLENBQUNTLFFBQU4sQ0FGTSxDQUFUOztBQUlBLFFBQU1FLGFBQWEsR0FBRyxNQUFNO0FBQzFCVixZQUFRLENBQUNXLHFFQUFBLENBQThCWixJQUE5QixDQUFELENBQVI7O0FBQ0EsUUFBSUEsSUFBSSxDQUFDUyxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3RCVCxVQUFJLENBQUNTLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQUYsbUJBQWEsQ0FBQ1AsSUFBSSxDQUFDUyxRQUFOLENBQWI7QUFDRDs7QUFDREYsaUJBQWEsQ0FBQ1AsSUFBSSxDQUFDUyxRQUFOLENBQWI7QUFDRCxHQVBEOztBQVNBLFFBQU1JLGFBQWEsR0FBRyxNQUFNO0FBQzFCWixZQUFRLENBQUNXLHFFQUFBLENBQThCWixJQUE5QixDQUFELENBQVI7QUFDQU8saUJBQWEsQ0FBQ1AsSUFBSSxDQUFDUyxRQUFOLENBQWI7QUFDRCxHQUhEOztBQUlBLFFBQU1LLFlBQVksR0FBSUMsS0FBRCxJQUFXLENBQzlCO0FBQ0E7QUFDQTtBQUNELEdBSkQ7O0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDREQUFNLENBQUNQLFFBQXZCO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVPLDREQUFNLENBQUNDLFdBRHBCO0FBRUUsUUFBRSxFQUFFRCw0REFBTSxDQUFDRSxRQUZiO0FBR0UsYUFBTyxFQUFFUCxhQUhYO0FBSUUsV0FBSyxFQUFDLGdCQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRTtBQUNFLFVBQUksRUFBQyxRQURQO0FBRUUsUUFBRSxFQUFDLFFBRkw7QUFHRSxXQUFLLEVBQUVMLFVBSFQ7QUFJRSxTQUFHLEVBQUVILFFBSlA7QUFLRSxjQUFRLEVBQUVXLFlBTFo7QUFNRSxXQUFLLEVBQUVFLDREQUFNLENBQUNHO0FBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQWlCRTtBQUNFLGVBQVMsRUFBRUgsNERBQU0sQ0FBQ0MsV0FEcEI7QUFFRSxRQUFFLEVBQUVELDREQUFNLENBQUNJLFFBRmI7QUFHRSxhQUFPLEVBQUVQLGFBSFg7QUFJRSxXQUFLLEVBQUMsZ0JBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBeERRZixRO1VBRVVJLHVEOzs7S0FGVkosUTtBQXlETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdExpc3ROZXh0L3Byb2R1Y3RMaXN0LjhhZWQ3OTRiZGFiZjRjZTUxZmI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3F1YW50aXR5Lm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIGNhcnRBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIFF1YW50aXR5KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpdGVtIH0gPSBwcm9wcztcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYoMCk7XHJcbiAgLy9zZXQgZGVmYXVsdCB2YWx1ZSBvZiBpbnB1dCB2YWx1ZSB3aXRoIHF1YW50aXR5IGZyb20gYW5vdGhlciBwYWdlc1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRpbnB1dFZhbHVlXSA9IHVzZVN0YXRlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gIH0sIFtpdGVtLnF1YW50aXR5XSk7XHJcblxyXG4gIGNvbnN0IGRlY3JlYXNlVmFsdWUgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5kZWNyZW1lbnRRdWFudGl0eShpdGVtKSk7XHJcbiAgICBpZiAoaXRlbS5xdWFudGl0eSA8PSAwKSB7XHJcbiAgICAgIGl0ZW0ucXVhbnRpdHkgPSAwO1xyXG4gICAgICBzZXRpbnB1dFZhbHVlKGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgfVxyXG4gICAgc2V0aW5wdXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbmNyZWFzZVZhbHVlID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuaW5jcmVtZW50UXVhbnRpdHkoaXRlbSkpO1xyXG4gICAgc2V0aW5wdXRWYWx1ZShpdGVtLnF1YW50aXR5KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICAvLyBzZXRpbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKG9uQ2hhbmdlUXVhbnRpdHkoaW5wdXRWYWx1ZSkpXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWFudGl0eX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUJ1dHRvbn1cclxuICAgICAgICBpZD17c3R5bGVzLmRlY3JlYXNlfVxyXG4gICAgICAgIG9uQ2xpY2s9e2RlY3JlYXNlVmFsdWV9XHJcbiAgICAgICAgdmFsdWU9XCJEZWNyZWFzZSBWYWx1ZVwiXHJcbiAgICAgID5cclxuICAgICAgICAtXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBpZD1cIm51bWJlclwiXHJcbiAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIGNsYXNzPXtzdHlsZXMuaW5wdXRTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlQnV0dG9ufVxyXG4gICAgICAgIGlkPXtzdHlsZXMuaW5jcmVhc2V9XHJcbiAgICAgICAgb25DbGljaz17aW5jcmVhc2VWYWx1ZX1cclxuICAgICAgICB2YWx1ZT1cIkluY3JlYXNlIFZhbHVlXCJcclxuICAgICAgPlxyXG4gICAgICAgICtcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFF1YW50aXR5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9