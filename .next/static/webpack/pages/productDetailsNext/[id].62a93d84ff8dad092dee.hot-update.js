webpackHotUpdate_N_E("pages/productDetailsNext/[id]",{

/***/ "./src/pages/productDetailsNext/[id]/index.js":
/*!****************************************************!*\
  !*** ./src/pages/productDetailsNext/[id]/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../redux/actions/product */ "./src/redux/actions/product.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/quantity/quantity */ "./src/components/quantity/quantity.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\productDetailsNext\\[id]\\index.js",
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
      id
    } = router.query;
    console.log(router.query.id); // request item from api

    dispatch(_redux_actions_product__WEBPACK_IMPORTED_MODULE_5__["getSingleProduct"](id));
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
    children: ["xxx", singleProduct ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
        lineNumber: 43,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: singleProduct.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "Description:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: singleProduct.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            children: "Price:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: singleProduct.price
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, this), singleProduct.quantity ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: singleProduct
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_2__["default"], {
          color: "primary",
          text: "Add to cart",
          onClick: () => addItem(singleProduct)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3REZXRhaWxzTmV4dC8vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbHMiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzaW5nbGVQcm9kdWN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNpbmdsZVByb2R1Y3RSZWR1Y2VyIiwiY2FydCIsImNhcnRSZWR1Y2VyIiwidXNlRWZmZWN0IiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0QWN0aW9ucyIsInByb2R1Y3QiLCJmaW5kIiwiYWRkSXRlbSIsImNhcnRBY3Rpb25zIiwiZGlzcGxheSIsInRleHRBbGlnbiIsImltYWdlIiwiYWx0IiwiaGVpZ2h0IiwibWFyZ2luIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHQywrREFBVyxDQUM5QkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLG9CQUFOLENBQTJCSCxhQURQLENBQWpDO0FBR0EsUUFBTUksSUFBSSxHQUFHSCwrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQsSUFBOUIsQ0FBeEI7QUFDQUUseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBU1gsTUFBTSxDQUFDWSxLQUF0QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWQsTUFBTSxDQUFDWSxLQUFQLENBQWFELEVBQXpCLEVBSGMsQ0FJZDs7QUFDQVQsWUFBUSxDQUFDYSx1RUFBQSxDQUFnQ0osRUFBaEMsQ0FBRCxDQUFSO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BRCx5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBLFVBQU1NLE9BQU8sR0FBR1IsSUFBSSxDQUFDUyxJQUFMLENBQVdELE9BQUQsSUFBYUEsT0FBTyxDQUFDTCxFQUFSLEtBQWVQLGFBQWEsQ0FBQ08sRUFBcEQsQ0FBaEI7O0FBQ0EsUUFBSUssT0FBSixFQUFhO0FBQ1hkLGNBQVEsQ0FBQ2Esd0VBQUEsQ0FBaUNDLE9BQWpDLENBQUQsQ0FBUjtBQUNELEtBRkQsTUFFTztBQUNMZCxjQUFRLENBQUNhLHdFQUFBLENBQWlDWCxhQUFqQyxDQUFELENBQVI7QUFDRDtBQUNGLEdBUlEsRUFRTixDQUFDSSxJQUFELENBUk0sQ0FBVDs7QUFVQSxRQUFNVSxPQUFPLEdBQUlkLGFBQUQsSUFBbUI7QUFDakM7QUFDQUYsWUFBUSxDQUFDaUIsaUVBQUEsQ0FBMEJmLGFBQTFCLENBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBSUEsc0JBQ0UscUVBQUMsbUVBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQSxzQkFFR0EsYUFBYSxnQkFDWjtBQUFLLFdBQUssRUFBRTtBQUFFZ0IsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLGlCQUFTLEVBQUU7QUFBOUIsT0FBWjtBQUFBLDhCQUNFO0FBQ0UsV0FBRyxFQUFFakIsYUFBYSxDQUFDa0IsS0FEckI7QUFFRSxXQUFHLEVBQUVsQixhQUFhLENBQUNtQixHQUZyQjtBQUdFLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFLE9BQVY7QUFBbUJDLGdCQUFNLEVBQUU7QUFBM0I7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRTtBQUFBLGdDQUNFO0FBQUEsb0JBQUtyQixhQUFhLENBQUNzQjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLG9CQUFJdEIsYUFBYSxDQUFDdUI7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQUlFO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFBLHNCQUFJdkIsYUFBYSxDQUFDd0I7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFRR3hCLGFBQWEsQ0FBQ3lCLFFBQWQsZ0JBQ0MscUVBQUMscUVBQUQ7QUFBVSxjQUFJLEVBQUV6QjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGdCQUdDLHFFQUFDLDJEQUFEO0FBQ0UsZUFBSyxFQUFDLFNBRFI7QUFFRSxjQUFJLEVBQUMsYUFGUDtBQUdFLGlCQUFPLEVBQUUsTUFBTWMsT0FBTyxDQUFDZCxhQUFEO0FBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFksZ0JBMkJaLHFFQUFDLHFGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBOURRTixjO1VBQ1FHLHFELEVBQ0VFLHVELEVBQ0tFLHVELEVBR1RBLHVEOzs7S0FOTlAsYztBQWdFTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdERldGFpbHNOZXh0L1tpZF0uNjJhOTNkODRmZjhkYWQwOTJkZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENyZWF0ZUJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9CdG4vQnRuXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdEFjdGlvbnMgZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvcHJvZHVjdFwiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQgUXVhbnRpdHkgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHlcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHNpbmdsZVByb2R1Y3QgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZSkgPT4gc3RhdGUuc2luZ2xlUHJvZHVjdFJlZHVjZXIuc2luZ2xlUHJvZHVjdFxyXG4gICk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnN0IHsgcHJvZHVjdElkIH0gPSBwcm9wcy5tYXRjaC5wYXJhbXM7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuaWQpO1xyXG4gICAgLy8gcmVxdWVzdCBpdGVtIGZyb20gYXBpXHJcbiAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5nZXRTaW5nbGVQcm9kdWN0KGlkKSk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2NoZWNrIGlmIHRoaXMgaXRlbSBpcyBpbiBjYXJ0IHJldHVybiBpdCBmcm9tIGNhcnQgd2l0aCBpdCdzIHF1YW50aXR5XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gY2FydC5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBzaW5nbGVQcm9kdWN0LmlkKTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLnNob3dTaW5nbGVQcm9kdWN0KHByb2R1Y3QpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLnNob3dTaW5nbGVQcm9kdWN0KHNpbmdsZVByb2R1Y3QpKTtcclxuICAgIH1cclxuICB9LCBbY2FydF0pO1xyXG5cclxuICBjb25zdCBhZGRJdGVtID0gKHNpbmdsZVByb2R1Y3QpID0+IHtcclxuICAgIC8vYWRkIGl0ZW0gdG8gY2FydFxyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuYWRkSXRlbUluQ2FydChzaW5nbGVQcm9kdWN0KSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgIHh4eFxyXG4gICAgICB7c2luZ2xlUHJvZHVjdCA/IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3NpbmdsZVByb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17c2luZ2xlUHJvZHVjdC5hbHR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyNTBweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPntzaW5nbGVQcm9kdWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxoND5EZXNjcmlwdGlvbjo8L2g0PlxyXG4gICAgICAgICAgICA8cD57c2luZ2xlUHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg0PlByaWNlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3NpbmdsZVByb2R1Y3QucXVhbnRpdHkgPyAoXHJcbiAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3NpbmdsZVByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJBZGQgdG8gY2FydFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHNpbmdsZVByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=