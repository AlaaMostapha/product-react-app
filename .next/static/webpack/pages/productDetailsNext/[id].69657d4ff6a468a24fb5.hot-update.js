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
    console.log(router.query.id); // request item from api

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3REZXRhaWxzTmV4dC8vaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbHMiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJzaW5nbGVQcm9kdWN0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNpbmdsZVByb2R1Y3RSZWR1Y2VyIiwiY2FydCIsImNhcnRSZWR1Y2VyIiwidXNlRWZmZWN0IiwicHJvZHVjdElkIiwicXVlcnkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0QWN0aW9ucyIsInByb2R1Y3QiLCJmaW5kIiwiYWRkSXRlbSIsImNhcnRBY3Rpb25zIiwiZGlzcGxheSIsInRleHRBbGlnbiIsImltYWdlIiwiYWx0IiwiaGVpZ2h0IiwibWFyZ2luIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQUE7O0FBQzdCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHQywrREFBVyxDQUM5QkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLG9CQUFOLENBQTJCSCxhQURQLENBQWpDO0FBR0EsUUFBTUksSUFBSSxHQUFHSCwrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0csV0FBTixDQUFrQkQsSUFBOUIsQ0FBeEI7QUFDQUUseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQSxVQUFNO0FBQUVDO0FBQUYsUUFBZ0JYLE1BQU0sQ0FBQ1ksS0FBUCxDQUFhQyxFQUFuQztBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsTUFBTSxDQUFDWSxLQUFQLENBQWFDLEVBQXpCLEVBSGMsQ0FJZDs7QUFDQVgsWUFBUSxDQUFDYyx1RUFBQSxDQUFnQ0wsU0FBaEMsQ0FBRCxDQUFSO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BRCx5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBLFVBQU1PLE9BQU8sR0FBR1QsSUFBSSxDQUFDVSxJQUFMLENBQVdELE9BQUQsSUFBYUEsT0FBTyxDQUFDSixFQUFSLEtBQWVULGFBQWEsQ0FBQ1MsRUFBcEQsQ0FBaEI7O0FBQ0EsUUFBSUksT0FBSixFQUFhO0FBQ1hmLGNBQVEsQ0FBQ2Msd0VBQUEsQ0FBaUNDLE9BQWpDLENBQUQsQ0FBUjtBQUNELEtBRkQsTUFFTztBQUNMZixjQUFRLENBQUNjLHdFQUFBLENBQWlDWixhQUFqQyxDQUFELENBQVI7QUFDRDtBQUNGLEdBUlEsRUFRTixDQUFDSSxJQUFELENBUk0sQ0FBVDs7QUFVQSxRQUFNVyxPQUFPLEdBQUlmLGFBQUQsSUFBbUI7QUFDakM7QUFDQUYsWUFBUSxDQUFDa0IsaUVBQUEsQ0FBMEJoQixhQUExQixDQUFELENBQVI7QUFDRCxHQUhEOztBQUlBLHNCQUNFLHFFQUFDLG1FQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUEsc0JBRUdBLGFBQWEsZ0JBQ1o7QUFBSyxXQUFLLEVBQUU7QUFBRWlCLGVBQU8sRUFBRSxNQUFYO0FBQW1CQyxpQkFBUyxFQUFFO0FBQTlCLE9BQVo7QUFBQSw4QkFDRTtBQUNFLFdBQUcsRUFBRWxCLGFBQWEsQ0FBQ21CLEtBRHJCO0FBRUUsV0FBRyxFQUFFbkIsYUFBYSxDQUFDb0IsR0FGckI7QUFHRSxhQUFLLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRSxPQUFWO0FBQW1CQyxnQkFBTSxFQUFFO0FBQTNCO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLdEIsYUFBYSxDQUFDdUI7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxvQkFBSXZCLGFBQWEsQ0FBQ3dCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRTtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzQkFBSXhCLGFBQWEsQ0FBQ3lCO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBUUd6QixhQUFhLENBQUMwQixRQUFkLGdCQUNDLHFFQUFDLHFFQUFEO0FBQVUsY0FBSSxFQUFFMUI7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxnQkFHQyxxRUFBQywyREFBRDtBQUNFLGVBQUssRUFBQyxTQURSO0FBRUUsY0FBSSxFQUFDLGFBRlA7QUFHRSxpQkFBTyxFQUFFLE1BQU1lLE9BQU8sQ0FBQ2YsYUFBRDtBQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURZLGdCQTJCWixxRUFBQyxxRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQTlEUU4sYztVQUNRRyxxRCxFQUNFRSx1RCxFQUNLRSx1RCxFQUdUQSx1RDs7O0tBTk5QLGM7QUFnRU1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3REZXRhaWxzTmV4dC9baWRdLjY5NjU3ZDRmZjZhNDY4YTI0ZmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RBY3Rpb25zIGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5mdW5jdGlvbiBQcm9kdWN0RGV0YWlscyhwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBzaW5nbGVQcm9kdWN0ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnNpbmdsZVByb2R1Y3RSZWR1Y2VyLnNpbmdsZVByb2R1Y3RcclxuICApO1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLmNhcnQpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBjb25zdCB7IHByb2R1Y3RJZCB9ID0gcHJvcHMubWF0Y2gucGFyYW1zO1xyXG4gICAgY29uc3QgeyBwcm9kdWN0SWQgfSA9IHJvdXRlci5xdWVyeS5pZDtcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5pZCk7XHJcbiAgICAvLyByZXF1ZXN0IGl0ZW0gZnJvbSBhcGlcclxuICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLmdldFNpbmdsZVByb2R1Y3QocHJvZHVjdElkKSk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2NoZWNrIGlmIHRoaXMgaXRlbSBpcyBpbiBjYXJ0IHJldHVybiBpdCBmcm9tIGNhcnQgd2l0aCBpdCdzIHF1YW50aXR5XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gY2FydC5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBzaW5nbGVQcm9kdWN0LmlkKTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLnNob3dTaW5nbGVQcm9kdWN0KHByb2R1Y3QpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKHByb2R1Y3RBY3Rpb25zLnNob3dTaW5nbGVQcm9kdWN0KHNpbmdsZVByb2R1Y3QpKTtcclxuICAgIH1cclxuICB9LCBbY2FydF0pO1xyXG5cclxuICBjb25zdCBhZGRJdGVtID0gKHNpbmdsZVByb2R1Y3QpID0+IHtcclxuICAgIC8vYWRkIGl0ZW0gdG8gY2FydFxyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuYWRkSXRlbUluQ2FydChzaW5nbGVQcm9kdWN0KSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XHJcbiAgICAgIHh4eFxyXG4gICAgICB7c2luZ2xlUHJvZHVjdCA/IChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB0ZXh0QWxpZ246IFwibGVmdFwiIH19PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e3NpbmdsZVByb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD17c2luZ2xlUHJvZHVjdC5hbHR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyNTBweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPntzaW5nbGVQcm9kdWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxoND5EZXNjcmlwdGlvbjo8L2g0PlxyXG4gICAgICAgICAgICA8cD57c2luZ2xlUHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGg0PlByaWNlOjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHA+e3NpbmdsZVByb2R1Y3QucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3NpbmdsZVByb2R1Y3QucXVhbnRpdHkgPyAoXHJcbiAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3NpbmdsZVByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIHRleHQ9XCJBZGQgdG8gY2FydFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHNpbmdsZVByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=