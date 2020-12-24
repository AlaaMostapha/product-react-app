webpackHotUpdate_N_E("pages/ReviewOrder/ReviewOrder",{

/***/ "./src/pages/ReviewOrder/ReviewOrder.js":
/*!**********************************************!*\
  !*** ./src/pages/ReviewOrder/ReviewOrder.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewOrder_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewOrder.module.scss */ "./src/pages/ReviewOrder/ReviewOrder.module.scss");
/* harmony import */ var _ReviewOrder_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ReviewOrder_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/quantity/quantity */ "./src/components/quantity/quantity.js");
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/table/table */ "./src/components/table/table.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\ReviewOrder\\ReviewOrder.js",
    _s = $RefreshSig$();













function ReviewOrder(props) {
  _s();

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
    return props.history.push(`/OrderNow`);
  };

  const tableHeadings = ["Item", "Unit Price", "Total Price", "Delete"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxWidth: "lg",
    className: "ProductListContainer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "text-center",
      children: "Review Your Order"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), cartLoader ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
                  lineNumber: 57,
                  columnNumber: 23
                }, this), product.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_quantity_quantity__WEBPACK_IMPORTED_MODULE_7__["default"], {
                item: product
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            children: product.price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            children: (product.price * product.quantity).toFixed(3)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "secondary",
              text: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 27
              }, this),
              onClick: () => removeItemFromCart(product)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 17
          }, this)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, this), index === cart.length - 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableRow"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["TableCell"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Total"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
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
              lineNumber: 85,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, this)]
      }, void 0, true))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
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
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(ReviewOrder, "9rFpPNTVCnKIa3Ev8T8Qg3SMFV8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = ReviewOrder;
/* harmony default export */ __webpack_exports__["default"] = (ReviewOrder);

var _c;

$RefreshReg$(_c, "ReviewOrder");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1Jldmlld09yZGVyL1Jldmlld09yZGVyLmpzIl0sIm5hbWVzIjpbIlJldmlld09yZGVyIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2FydCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXJ0UmVkdWNlciIsImNhcnRMb2FkZXIiLCJjYXJ0dG90YWwiLCJzZXRjYXJ0dG90YWwiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJlZHVjZSIsImFjY3VtbGF0b3IiLCJwcm9kdWN0IiwicHJpY2UiLCJxdWFudGl0eSIsInRvRml4ZWQiLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJjYXJ0QWN0aW9ucyIsInJlZGlyZWN0VG9Vc2VyRm9ybSIsImhpc3RvcnkiLCJwdXNoIiwidGFibGVIZWFkaW5ncyIsIm1hcCIsImluZGV4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImltYWdlIiwidGl0bGUiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDMUIsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JILElBQTlCLENBQXhCO0FBQ0EsUUFBTUksVUFBVSxHQUFHSCwrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsVUFBOUIsQ0FBOUIsQ0FIMEIsQ0FJMUI7O0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLENBQUQs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QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4QkY7QUFBQSxXQUFlVyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFpQ0dBLEtBQUssS0FBS3RCLElBQUksQ0FBQzRCLE1BQUwsR0FBYyxDQUF4QixpQkFDQyxxRUFBQywyREFBRDtBQUFBLGtDQUNFLHFFQUFDLDREQUFEO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUUscUVBQUMsNERBQUQ7QUFBVyxtQkFBTyxFQUFFLENBQXBCO0FBQXVCLGlCQUFLLEVBQUU7QUFBRUMsdUJBQVMsRUFBRTtBQUFiLGFBQTlCO0FBQUEsbUNBQ0U7QUFBQSx3QkFBSXhCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxDSjtBQUFBLHNCQURVO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBd0RFO0FBQUssV0FBSyxFQUFFO0FBQUV3QixpQkFBUyxFQUFFO0FBQWIsT0FBWjtBQUFBLDZCQUNFLHFFQUFDLDJEQUFEO0FBQ0UsYUFBSyxFQUFDLFNBRFI7QUFFRSxZQUFJLEVBQUMsV0FGUDtBQUdFLGVBQU8sRUFBRVo7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtFRDs7R0ExRlFyQixXO1VBQ1VHLHVELEVBQ0pFLHVELEVBQ01BLHVEOzs7S0FIWkwsVztBQTJGTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvUmV2aWV3T3JkZXIvUmV2aWV3T3JkZXIuMjAxODRjOWQxZmVhNWMyYWUyOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vUmV2aWV3T3JkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9EZWxldGVcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbmltcG9ydCBCYXNpY1RhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlXCI7XHJcbmltcG9ydCB7IFRhYmxlQ2VsbCwgVGFibGVSb3cgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuZnVuY3Rpb24gUmV2aWV3T3JkZXIocHJvcHMpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydCk7XHJcbiAgY29uc3QgY2FydExvYWRlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydExvYWRlcik7XHJcbiAgLy9lYWNoIHByb2R1Y3QgZGlzcGxheSB3aXRoIHF1YW50aXR5IGFuZCBkZWxldGUgYnRuIC8vcmVzdCB1bml0IHByaWNlIGFuZCB0b3RhbCBwcmljZVxyXG4gIGNvbnN0IFtjYXJ0dG90YWwsIHNldGNhcnR0b3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldGNhcnR0b3RhbChcclxuICAgICAgY2FydFxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtbGF0b3IsIHByb2R1Y3QpIHtcclxuICAgICAgICAgIHJldHVybiBhY2N1bWxhdG9yICsgcHJvZHVjdC5wcmljZSAqIHByb2R1Y3QucXVhbnRpdHk7XHJcbiAgICAgICAgfSwgMClcclxuICAgICAgICAudG9GaXhlZCgzKVxyXG4gICAgKTtcclxuICB9LCBbY2FydF0pO1xyXG4gIGNvbnN0IHJlbW92ZUl0ZW1Gcm9tQ2FydCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5kZWxldGVJdGVtSW5DYXJ0KHByb2R1Y3QpKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZGlyZWN0VG9Vc2VyRm9ybSA9ICgpID0+IHtcclxuICAgIHJldHVybiBwcm9wcy5oaXN0b3J5LnB1c2goYC9PcmRlck5vd2ApO1xyXG4gIH07XHJcbiAgY29uc3QgdGFibGVIZWFkaW5ncyA9IFtcIkl0ZW1cIiwgXCJVbml0IFByaWNlXCIsIFwiVG90YWwgUHJpY2VcIiwgXCJEZWxldGVcIl07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9XCJQcm9kdWN0TGlzdENvbnRhaW5lclwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5SZXZpZXcgWW91ciBPcmRlcjwvaDI+XHJcbiAgICAgIHtjYXJ0TG9hZGVyID8gKFxyXG4gICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEJhc2ljVGFibGVcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhc2ljVGFibGVcIlxyXG4gICAgICAgICAgdGFibGVIZWFkaW5ncz17dGFibGVIZWFkaW5nc31cclxuICAgICAgICAgIGFycmF5SXRlbXM9e2NhcnQubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiIGRpc3BsYXk9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV2aWV3UGFnZUltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwcm9kdWN0LnByaWNlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgeyhwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eSkudG9GaXhlZCgzKX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXs8RGVsZXRlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtRnJvbUNhcnQocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgIHtpbmRleCA9PT0gY2FydC5sZW5ndGggLSAxICYmIChcclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yj5Ub3RhbDwvYj5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sc3Bhbj17M30gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPntjYXJ0dG90YWx9PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICA8Q3JlYXRlQnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdGV4dD1cIk9yZGVyIE5vd1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXtyZWRpcmVjdFRvVXNlckZvcm19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld09yZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9