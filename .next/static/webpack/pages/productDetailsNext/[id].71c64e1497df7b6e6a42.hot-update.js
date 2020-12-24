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
      productId
    } = router.query.id;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3REZXRhaWxzTmV4dC8vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbHMiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzaW5nbGVQcm9kdWN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNpbmdsZVByb2R1Y3RSZWR1Y2VyIiwiY2FydCIsImNhcnRSZWR1Y2VyIiwidXNlRWZmZWN0IiwicHJvZHVjdElkIiwicXVlcnkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0QWN0aW9ucyIsInByb2R1Y3QiLCJmaW5kIiwiYWRkSXRlbSIsImNhcnRBY3Rpb25zIiwiZGlzcGxheSIsInRleHRBbGlnbiIsImltYWdlIiwiYWx0IiwiaGVpZ2h0IiwibWFyZ2luIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHQywrREFBVyxDQUM5QkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLG9CQUFOLENBQTJCSCxhQURQLENBQWpDO0FBR0EsUUFBTUksSUFBSSxHQUFHSCwrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQsSUFBOUIsQ0FBeEI7QUFDQUUseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBZ0JYLE1BQU0sQ0FBQ1ksS0FBUCxDQUFhQyxFQUFuQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsTUFBTSxDQUFDWSxLQUFuQixFQUhjLENBSWQ7O0FBQ0FWLFlBQVEsQ0FBQ2MsdUVBQUEsQ0FBZ0NMLFNBQWhDLENBQUQsQ0FBUjtBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQUQseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQSxVQUFNTyxPQUFPLEdBQUdULElBQUksQ0FBQ1UsSUFBTCxDQUFXRCxPQUFELElBQWFBLE9BQU8sQ0FBQ0osRUFBUixLQUFlVCxhQUFhLENBQUNTLEVBQXBELENBQWhCOztBQUNBLFFBQUlJLE9BQUosRUFBYTtBQUNYZixjQUFRLENBQUNjLHdFQUFBLENBQWlDQyxPQUFqQyxDQUFELENBQVI7QUFDRCxLQUZELE1BRU87QUFDTGYsY0FBUSxDQUFDYyx3RUFBQSxDQUFpQ1osYUFBakMsQ0FBRCxDQUFSO0FBQ0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ0ksSUFBRCxDQVJNLENBQVQ7O0FBVUEsUUFBTVcsT0FBTyxHQUFJZixhQUFELElBQW1CO0FBQ2pDO0FBQ0FGLFlBQVEsQ0FBQ2tCLGlFQUFBLENBQTBCaEIsYUFBMUIsQ0FBRCxDQUFSO0FBQ0QsR0FIRDs7QUFJQSxzQkFDRSxxRUFBQyxtRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLGNBQ0dBLGFBQWEsZ0JBQ1o7QUFBSyxXQUFLLEVBQUU7QUFBRWlCLGVBQU8sRUFBRSxNQUFYO0FBQW1CQyxpQkFBUyxFQUFFO0FBQTlCLE9BQVo7QUFBQSw4QkFDRTtBQUNFLFdBQUcsRUFBRWxCLGFBQWEsQ0FBQ21CLEtBRHJCO0FBRUUsV0FBRyxFQUFFbkIsYUFBYSxDQUFDb0IsR0FGckI7QUFHRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRSxPQUFWO0FBQW1CQyxnQkFBTSxFQUFFO0FBQTNCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLdEIsYUFBYSxDQUFDdUI7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxvQkFBSXZCLGFBQWEsQ0FBQ3dCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBSXhCLGFBQWEsQ0FBQ3lCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBUUd6QixhQUFhLENBQUMwQixRQUFkLGdCQUNDLHFFQUFDLHFFQUFEO0FBQVUsY0FBSSxFQUFFMUI7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxnQkFHQyxxRUFBQywyREFBRDtBQUNFLGVBQUssRUFBQyxTQURSO0FBRUUsY0FBSSxFQUFDLGFBRlA7QUFHRSxpQkFBTyxFQUFFLE1BQU1lLE9BQU8sQ0FBQ2YsYUFBRDtBQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURZLGdCQTJCWixxRUFBQyxxRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNUJKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDs7R0E3RFFOLGM7VUFDUUcscUQsRUFDRUUsdUQsRUFDS0UsdUQsRUFHVEEsdUQ7OztLQU5OUCxjO0FBK0RNQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0RGV0YWlsc05leHQvW2lkXS43MWM2NGUxNDk3ZGY3YjZlNmE0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3JlYXRlQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0J0bi9CdG5cIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0QWN0aW9ucyBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9wcm9kdWN0XCI7XHJcbmltcG9ydCAqIGFzIGNhcnRBY3Rpb25zIGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRcIjtcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCBRdWFudGl0eSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9xdWFudGl0eS9xdWFudGl0eVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZnVuY3Rpb24gUHJvZHVjdERldGFpbHMocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgc2luZ2xlUHJvZHVjdCA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5zaW5nbGVQcm9kdWN0UmVkdWNlci5zaW5nbGVQcm9kdWN0XHJcbiAgKTtcclxuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlci5jYXJ0KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgeyBwcm9kdWN0SWQgfSA9IHByb3BzLm1hdGNoLnBhcmFtcztcclxuICAgIGNvbnN0IHsgcHJvZHVjdElkIH0gPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xyXG4gICAgLy8gcmVxdWVzdCBpdGVtIGZyb20gYXBpXHJcbiAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5nZXRTaW5nbGVQcm9kdWN0KHByb2R1Y3RJZCkpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9jaGVjayBpZiB0aGlzIGl0ZW0gaXMgaW4gY2FydCByZXR1cm4gaXQgZnJvbSBjYXJ0IHdpdGggaXQncyBxdWFudGl0eVxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGNhcnQuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gc2luZ2xlUHJvZHVjdC5pZCk7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5zaG93U2luZ2xlUHJvZHVjdChwcm9kdWN0KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaChwcm9kdWN0QWN0aW9ucy5zaG93U2luZ2xlUHJvZHVjdChzaW5nbGVQcm9kdWN0KSk7XHJcbiAgICB9XHJcbiAgfSwgW2NhcnRdKTtcclxuXHJcbiAgY29uc3QgYWRkSXRlbSA9IChzaW5nbGVQcm9kdWN0KSA9PiB7XHJcbiAgICAvL2FkZCBpdGVtIHRvIGNhcnRcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmFkZEl0ZW1JbkNhcnQoc2luZ2xlUHJvZHVjdCkpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICB7c2luZ2xlUHJvZHVjdCA/IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3NpbmdsZVByb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17c2luZ2xlUHJvZHVjdC5hbHR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyNTBweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPntzaW5nbGVQcm9kdWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxoND5EZXNjcmlwdGlvbjo8L2g0PlxyXG4gICAgICAgICAgICA8cD57c2luZ2xlUHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg0PlByaWNlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3NpbmdsZVByb2R1Y3QucXVhbnRpdHkgPyAoXHJcbiAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3NpbmdsZVByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJBZGQgdG8gY2FydFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHNpbmdsZVByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=