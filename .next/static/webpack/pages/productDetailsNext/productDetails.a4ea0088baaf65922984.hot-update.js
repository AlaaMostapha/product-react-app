webpackHotUpdate_N_E("pages/productDetailsNext/productDetails",{

/***/ "./src/pages/productDetailsNext/productDetails.js":
/*!********************************************************!*\
  !*** ./src/pages/productDetailsNext/productDetails.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/product */ "./src/redux/actions/product.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/quantity/quantity */ "./src/components/quantity/quantity.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\productDetailsNext\\productDetails.js",
    _s = $RefreshSig$();











function ProductDetails(props) {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const singleProduct = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.singleProductReducer.singleProduct);
  const cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.cartReducer.cart);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // const { productId } = props.match.params;
    const {
      productId
    } = router.query;
    console.log(router.query); // request item from api

    dispatch(_redux_actions_product__WEBPACK_IMPORTED_MODULE_5__["getSingleProduct"](productId));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //check if this item is in cart return it from cart with it's quantity
    const product = cart.find(product => product.id === singleProduct.id);

    if (product) {
      dispatch(_redux_actions_product__WEBPACK_IMPORTED_MODULE_5__["showSingleProduct"](product));
    } else {
      dispatch(_redux_actions_product__WEBPACK_IMPORTED_MODULE_5__["showSingleProduct"](singleProduct));
    }
  }, [cart]);

  const addItem = singleProduct => {
    //add item to cart
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_6__["addItemInCart"](singleProduct));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        lineNumber: 42,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: singleProduct.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Description:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: singleProduct.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Price:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: singleProduct.price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this), singleProduct.quantity ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: singleProduct
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          color: "primary",
          text: "Add to cart",
          onClick: () => addItem(singleProduct)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

_s(ProductDetails, "dR8pkg9bJGeaX1JywuESN2sAMkM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = ProductDetails;
/* harmony default export */ __webpack_exports__["default"] = (ProductDetails);

var _c;

$RefreshReg$(_c, "ProductDetails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3REZXRhaWxzTmV4dC9wcm9kdWN0RGV0YWlscy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInNpbmdsZVByb2R1Y3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2luZ2xlUHJvZHVjdFJlZHVjZXIiLCJjYXJ0IiwiY2FydFJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJwcm9kdWN0SWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0QWN0aW9ucyIsInByb2R1Y3QiLCJmaW5kIiwiaWQiLCJhZGRJdGVtIiwiY2FydEFjdGlvbnMiLCJkaXNwbGF5IiwidGV4dEFsaWduIiwiaW1hZ2UiLCJhbHQiLCJoZWlnaHQiLCJtYXJnaW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFDN0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNQyxhQUFhLEdBQUdDLCtEQUFXLENBQzlCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0Msb0JBQU4sQ0FBMkJILGFBRFAsQ0FBakM7QUFHQSxRQUFNSSxJQUFJLEdBQUdILCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRyxXQUFOLENBQWtCRCxJQUE5QixDQUF4QjtBQUNBRSx5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFnQlgsTUFBTSxDQUFDWSxLQUE3QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWQsTUFBTSxDQUFDWSxLQUFuQixFQUhjLENBSWQ7O0FBQ0FWLFlBQVEsQ0FBQ2EsdUVBQUEsQ0FBZ0NKLFNBQWhDLENBQUQsQ0FBUjtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQUQseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQSxVQUFNTSxPQUFPLEdBQUdSLElBQUksQ0FBQ1MsSUFBTCxDQUFXRCxPQUFELElBQWFBLE9BQU8sQ0FBQ0UsRUFBUixLQUFlZCxhQUFhLENBQUNjLEVBQXBELENBQWhCOztBQUNBLFFBQUlGLE9BQUosRUFBYTtBQUNYZCxjQUFRLENBQUNhLHdFQUFBLENBQWlDQyxPQUFqQyxDQUFELENBQVI7QUFDRCxLQUZELE1BRU87QUFDTGQsY0FBUSxDQUFDYSx3RUFBQSxDQUFpQ1gsYUFBakMsQ0FBRCxDQUFSO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ0ksSUFBRCxDQVJNLENBQVQ7O0FBVUEsUUFBTVcsT0FBTyxHQUFJZixhQUFELElBQW1CO0FBQ2pDO0FBQ0FGLFlBQVEsQ0FBQ2tCLGlFQUFBLENBQTBCaEIsYUFBMUIsQ0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFJQSxzQkFDRSxxRUFBQyxtRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLGNBQ0dBLGFBQWEsZ0JBQ1o7QUFBSyxXQUFLLEVBQUU7QUFBRWlCLGVBQU8sRUFBRSxNQUFYO0FBQW1CQyxpQkFBUyxFQUFFO0FBQTlCLE9BQVo7QUFBQSw4QkFDRTtBQUNFLFdBQUcsRUFBRWxCLGFBQWEsQ0FBQ21CLEtBRHJCO0FBRUUsV0FBRyxFQUFFbkIsYUFBYSxDQUFDb0IsR0FGckI7QUFHRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRSxPQUFWO0FBQW1CQyxnQkFBTSxFQUFFO0FBQTNCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLdEIsYUFBYSxDQUFDdUI7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxvQkFBSXZCLGFBQWEsQ0FBQ3dCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBSXhCLGFBQWEsQ0FBQ3lCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBUUd6QixhQUFhLENBQUMwQixRQUFkLGdCQUNDLHFFQUFDLHFFQUFEO0FBQVUsY0FBSSxFQUFFMUI7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxnQkFHQyxxRUFBQywyREFBRDtBQUNFLGVBQUssRUFBQyxTQURSO0FBRUUsY0FBSSxFQUFDLGFBRlA7QUFHRSxpQkFBTyxFQUFFLE1BQU1lLE9BQU8sQ0FBQ2YsYUFBRDtBQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURZLGdCQTJCWixxRUFBQyxxRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDs7R0E3RFFOLGM7VUFDUUcscUQsRUFDRUUsdUQsRUFDS0UsdUQsRUFHVEEsdUQ7OztLQU5OUCxjO0FBK0RNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0RGV0YWlsc05leHQvcHJvZHVjdERldGFpbHMuYTRlYTAwODhiYWFmNjU5MjI5ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENyZWF0ZUJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdG4vQnRuXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQgUXVhbnRpdHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHNpbmdsZVByb2R1Y3QgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuc2luZ2xlUHJvZHVjdFJlZHVjZXIuc2luZ2xlUHJvZHVjdFxyXG4gICk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnN0IHsgcHJvZHVjdElkIH0gPSBwcm9wcy5tYXRjaC5wYXJhbXM7XHJcbiAgICBjb25zdCB7IHByb2R1Y3RJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcclxuICAgIC8vIHJlcXVlc3QgaXRlbSBmcm9tIGFwaVxyXG4gICAgZGlzcGF0Y2gocHJvZHVjdEFjdGlvbnMuZ2V0U2luZ2xlUHJvZHVjdChwcm9kdWN0SWQpKTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vY2hlY2sgaWYgdGhpcyBpdGVtIGlzIGluIGNhcnQgcmV0dXJuIGl0IGZyb20gY2FydCB3aXRoIGl0J3MgcXVhbnRpdHlcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBjYXJ0LmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IHNpbmdsZVByb2R1Y3QuaWQpO1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgZGlzcGF0Y2gocHJvZHVjdEFjdGlvbnMuc2hvd1NpbmdsZVByb2R1Y3QocHJvZHVjdCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2gocHJvZHVjdEFjdGlvbnMuc2hvd1NpbmdsZVByb2R1Y3Qoc2luZ2xlUHJvZHVjdCkpO1xyXG4gICAgfVxyXG4gIH0sIFtjYXJ0XSk7XHJcblxyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoc2luZ2xlUHJvZHVjdCkgPT4ge1xyXG4gICAgLy9hZGQgaXRlbSB0byBjYXJ0XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5hZGRJdGVtSW5DYXJ0KHNpbmdsZVByb2R1Y3QpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIj5cclxuICAgICAge3NpbmdsZVByb2R1Y3QgPyAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgdGV4dEFsaWduOiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtzaW5nbGVQcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9e3NpbmdsZVByb2R1Y3QuYWx0fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjUwcHhcIiwgbWFyZ2luOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz57c2luZ2xlUHJvZHVjdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8aDQ+RGVzY3JpcHRpb246PC9oND5cclxuICAgICAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoND5QcmljZTo8L2g0PlxyXG4gICAgICAgICAgICAgIDxwPntzaW5nbGVQcm9kdWN0LnByaWNlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaW5nbGVQcm9kdWN0LnF1YW50aXR5ID8gKFxyXG4gICAgICAgICAgICAgIDxRdWFudGl0eSBpdGVtPXtzaW5nbGVQcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxDcmVhdGVCdXR0b25cclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiQWRkIHRvIGNhcnRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShzaW5nbGVQcm9kdWN0KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgLz5cclxuICAgICAgKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9