webpackHotUpdate_N_E("pages/ReviewOrder/ReviewOrder",{

/***/ "./node_modules/@redux-saga/core/dist/io-6de156f3.js":
false,

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-core.esm.js":
false,

/***/ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js":
false,

/***/ "./node_modules/@redux-saga/deferred/dist/redux-saga-deferred.esm.js":
false,

/***/ "./node_modules/@redux-saga/delay-p/dist/redux-saga-delay-p.esm.js":
false,

/***/ "./node_modules/@redux-saga/is/dist/redux-saga-is.esm.js":
false,

/***/ "./node_modules/@redux-saga/symbols/dist/redux-saga-symbols.esm.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/redux-devtools-extension/index.js":
false,

/***/ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js":
false,

/***/ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js":
false,

/***/ "./src/network/BaseUrl.js":
false,

/***/ "./src/network/api/login.js":
false,

/***/ "./src/network/api/product.js":
false,

/***/ "./src/network/api/products.js":
false,

/***/ "./src/network/handlers/login.js":
false,

/***/ "./src/network/handlers/product.js":
false,

/***/ "./src/network/handlers/products.js":
false,

/***/ "./src/network/login.js":
false,

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
        }, product.name, true, {
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

/***/ }),

/***/ "./src/redux/actions/actions.js":
false,

/***/ "./src/redux/actions/login.js":
false,

/***/ "./src/redux/actions/product.js":
false,

/***/ "./src/redux/reducers/cart.js":
false,

/***/ "./src/redux/reducers/index.js":
false,

/***/ "./src/redux/reducers/login.js":
false,

/***/ "./src/redux/reducers/product.js":
false,

/***/ "./src/redux/reducers/products.js":
false,

/***/ "./src/redux/saga/index.js":
false,

/***/ "./src/redux/saga/login.js":
false,

/***/ "./src/redux/saga/product.js":
false,

/***/ "./src/redux/saga/products.js":
false,

/***/ "./src/redux/store/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1Jldmlld09yZGVyL1Jldmlld09yZGVyLmpzIl0sIm5hbWVzIjpbIlJldmlld09yZGVyIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiY2FydCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXJ0UmVkdWNlciIsImNhcnRMb2FkZXIiLCJjYXJ0dG90YWwiLCJzZXRjYXJ0dG90YWwiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJlZHVjZSIsImFjY3VtbGF0b3IiLCJwcm9kdWN0IiwicHJpY2UiLCJxdWFudGl0eSIsInRvRml4ZWQiLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJjYXJ0QWN0aW9ucyIsInJlZGlyZWN0VG9Vc2VyRm9ybSIsImhpc3RvcnkiLCJwdXNoIiwidGFibGVIZWFkaW5ncyIsIm1hcCIsImluZGV4IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImltYWdlIiwidGl0bGUiLCJuYW1lIiwibGVuZ3RoIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQzFCLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCSCxJQUE5QixDQUF4QjtBQUNBLFFBQU1JLFVBQVUsR0FBR0gsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLFVBQTlCLENBQTlCLENBSDBCLENBSTFCOztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxDQUFELENBQTFDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkRixnQkFBWSxDQUNWTixJQUFJLENBQ0RTLE1BREgsQ0FDVSxVQUFVQyxVQUFWLEVBQXNCQyxPQUF0QixFQUErQjtBQUNyQyxhQUFPRCxVQUFVLEdBQUdDLE9BQU8sQ0FBQ0MsS0FBUixHQUFnQkQsT0FBTyxDQUFDRSxRQUE1QztBQUNELEtBSEgsRUFHSyxDQUhMLEVBSUdDLE9BSkgsQ0FJVyxDQUpYLENBRFUsQ0FBWjtBQU9ELEdBUlEsRUFRTixDQUFDZCxJQUFELENBUk0sQ0FBVDs7QUFTQSxRQUFNZSxrQkFBa0IsR0FBSUosT0FBRCxJQUFhO0FBQ3RDYixZQUFRLENBQUNrQixvRUFBQSxDQUE2QkwsT0FBN0IsQ0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxRQUFNTSxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CLFdBQU9wQixLQUFLLENBQUNxQixPQUFOLENBQWNDLElBQWQsQ0FBb0IsV0FBcEIsQ0FBUDtBQUNELEdBRkQ7O0FBR0EsUUFBTUMsYUFBYSxHQUFHLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsYUFBdkIsRUFBc0MsUUFBdEMsQ0FBdEI7QUFFQSxzQkFDRSxxRUFBQyxtRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUF5QixhQUFTLEVBQUMsc0JBQW5DO0FBQUEsNEJBQ0U7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdoQixVQUFVLGdCQUNULHFFQUFDLHFGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEUyxnQkFHVCxxRUFBQyxnRUFBRDtBQUNFLGVBQVMsRUFBQyxZQURaO0FBRUUsbUJBQWEsRUFBRWdCLGFBRmpCO0FBR0UsZ0JBQVUsRUFBRXBCLElBQUksQ0FBQ3FCLEdBQUwsQ0FBUyxDQUFDVixPQUFELEVBQVVXLEtBQVYsa0JBQ25CO0FBQUEsZ0NBQ0UscUVBQUMsMkRBQUQ7QUFBQSxrQ0FDRSxxRUFBQyw0REFBRDtBQUFXLHFCQUFTLEVBQUMsSUFBckI7QUFBMEIsaUJBQUssRUFBQyxLQUFoQztBQUFzQyxtQkFBTyxFQUFDLE1BQTlDO0FBQUEsbUNBQ0U7QUFDRSxtQkFBSyxFQUFFO0FBQ0xDLHVCQUFPLEVBQUUsTUFESjtBQUVMQywwQkFBVSxFQUFFLFFBRlA7QUFHTEMsOEJBQWMsRUFBRTtBQUhYLGVBRFQ7QUFBQSxzQ0FPRTtBQUFLLHFCQUFLLEVBQUU7QUFBRUYseUJBQU8sRUFBRSxNQUFYO0FBQW1CQyw0QkFBVSxFQUFFO0FBQS9CLGlCQUFaO0FBQUEsd0NBQ0U7QUFDRSxxQkFBRyxFQUFFYixPQUFPLENBQUNlLEtBRGY7QUFFRSxxQkFBRyxFQUFFZixPQUFPLENBQUNnQixLQUZmO0FBR0UsMkJBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFNR2hCLE9BQU8sQ0FBQ2dCLEtBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGLGVBZUUscUVBQUMscUVBQUQ7QUFBVSxvQkFBSSxFQUFFaEI7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBb0JFLHFFQUFDLDREQUFEO0FBQUEsc0JBQVlBLE9BQU8sQ0FBQ0M7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwQkYsZUFxQkUscUVBQUMsNERBQUQ7QUFBQSxzQkFDRyxDQUFDRCxPQUFPLENBQUNDLEtBQVIsR0FBZ0JELE9BQU8sQ0FBQ0UsUUFBekIsRUFBbUNDLE9BQW5DLENBQTJDLENBQTNDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFyQkYsZUF3QkUscUVBQUMsNERBQUQ7QUFBQSxtQ0FDRSxxRUFBQywyREFBRDtBQUNFLG1CQUFLLEVBQUMsV0FEUjtBQUVFLGtCQUFJLGVBQUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGUjtBQUdFLHFCQUFPLEVBQUUsTUFBTUMsa0JBQWtCLENBQUNKLE9BQUQ7QUFIbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBeEJGO0FBQUEsV0FBZUEsT0FBTyxDQUFDaUIsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQWlDR04sS0FBSyxLQUFLdEIsSUFBSSxDQUFDNkIsTUFBTCxHQUFjLENBQXhCLGlCQUNDLHFFQUFDLDJEQUFEO0FBQUEsa0NBQ0UscUVBQUMsNERBQUQ7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRSxxRUFBQyw0REFBRDtBQUFXLG1CQUFPLEVBQUUsQ0FBcEI7QUFBdUIsaUJBQUssRUFBRTtBQUFFQyx1QkFBUyxFQUFFO0FBQWIsYUFBOUI7QUFBQSxtQ0FDRTtBQUFBLHdCQUFJekI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENKO0FBQUEsc0JBRFU7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUF3REU7QUFBSyxXQUFLLEVBQUU7QUFBRXlCLGlCQUFTLEVBQUU7QUFBYixPQUFaO0FBQUEsNkJBQ0UscUVBQUMsMkRBQUQ7QUFDRSxhQUFLLEVBQUMsU0FEUjtBQUVFLFlBQUksRUFBQyxXQUZQO0FBR0UsZUFBTyxFQUFFYjtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0VEOztHQTFGUXJCLFc7VUFDVUcsdUQsRUFDSkUsdUQsRUFDTUEsdUQ7OztLQUhaTCxXO0FBMkZNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9SZXZpZXdPcmRlci9SZXZpZXdPcmRlci5kM2I2NWY2ZGFiMWI4MGUxMTA2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9SZXZpZXdPcmRlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RlbGV0ZVwiO1xyXG5pbXBvcnQgUXVhbnRpdHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHlcIjtcclxuaW1wb3J0IENyZWF0ZUJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdG4vQnRuXCI7XHJcbmltcG9ydCAqIGFzIGNhcnRBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRcIjtcclxuaW1wb3J0IEJhc2ljVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdGFibGUvdGFibGVcIjtcclxuaW1wb3J0IHsgVGFibGVDZWxsLCBUYWJsZVJvdyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5mdW5jdGlvbiBSZXZpZXdPcmRlcihwcm9wcykge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlci5jYXJ0KTtcclxuICBjb25zdCBjYXJ0TG9hZGVyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlci5jYXJ0TG9hZGVyKTtcclxuICAvL2VhY2ggcHJvZHVjdCBkaXNwbGF5IHdpdGggcXVhbnRpdHkgYW5kIGRlbGV0ZSBidG4gLy9yZXN0IHVuaXQgcHJpY2UgYW5kIHRvdGFsIHByaWNlXHJcbiAgY29uc3QgW2NhcnR0b3RhbCwgc2V0Y2FydHRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Y2FydHRvdGFsKFxyXG4gICAgICBjYXJ0XHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjdW1sYXRvciwgcHJvZHVjdCkge1xyXG4gICAgICAgICAgcmV0dXJuIGFjY3VtbGF0b3IgKyBwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eTtcclxuICAgICAgICB9LCAwKVxyXG4gICAgICAgIC50b0ZpeGVkKDMpXHJcbiAgICApO1xyXG4gIH0sIFtjYXJ0XSk7XHJcbiAgY29uc3QgcmVtb3ZlSXRlbUZyb21DYXJ0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmRlbGV0ZUl0ZW1JbkNhcnQocHJvZHVjdCkpO1xyXG4gIH07XHJcbiAgY29uc3QgcmVkaXJlY3RUb1VzZXJGb3JtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHByb3BzLmhpc3RvcnkucHVzaChgL09yZGVyTm93YCk7XHJcbiAgfTtcclxuICBjb25zdCB0YWJsZUhlYWRpbmdzID0gW1wiSXRlbVwiLCBcIlVuaXQgUHJpY2VcIiwgXCJUb3RhbCBQcmljZVwiLCBcIkRlbGV0ZVwiXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT1cIlByb2R1Y3RMaXN0Q29udGFpbmVyXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlJldmlldyBZb3VyIE9yZGVyPC9oMj5cclxuICAgICAge2NhcnRMb2FkZXIgPyAoXHJcbiAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8QmFzaWNUYWJsZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWNUYWJsZVwiXHJcbiAgICAgICAgICB0YWJsZUhlYWRpbmdzPXt0YWJsZUhlYWRpbmdzfVxyXG4gICAgICAgICAgYXJyYXlJdGVtcz17Y2FydC5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cHJvZHVjdC5uYW1lfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiIGRpc3BsYXk9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV2aWV3UGFnZUltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwcm9kdWN0LnByaWNlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgeyhwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eSkudG9GaXhlZCgzKX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0PXs8RGVsZXRlSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtRnJvbUNhcnQocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgIHtpbmRleCA9PT0gY2FydC5sZW5ndGggLSAxICYmIChcclxuICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8Yj5Ub3RhbDwvYj5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29sc3Bhbj17M30gc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxiPntjYXJ0dG90YWx9PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICA8Q3JlYXRlQnV0dG9uXHJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgdGV4dD1cIk9yZGVyIE5vd1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXtyZWRpcmVjdFRvVXNlckZvcm19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld09yZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9