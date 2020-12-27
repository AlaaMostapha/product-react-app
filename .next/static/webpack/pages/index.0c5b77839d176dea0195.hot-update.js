webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/next/node_modules/sass-loader/dist/cjs.js?!./src/pages/header.module.scss":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./src/pages/header.js":
false,

/***/ "./src/pages/header.module.scss":
false,

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card/Card */ "./src/components/Card/Card.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/quantity/quantity */ "./src/components/quantity/quantity.js");
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/actions */ "./src/redux/actions/actions.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\index.js",
    _s = $RefreshSig$();

 // import styles from "../pages/productDetailsNext/productList.module.scss";
//material ui components




 //custom components



 //store



 //history



function ProductList() {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();
  const cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.cartReducer.cart);
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.productsReducer.products);
  const loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(state => state.productsReducer.loader);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //when component mount get all products
    dispatch(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__["getProducts"]());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //if there are items in cart
    if (cart) {
      //get there indexes in product list
      let indexesOfCartItems = cart.map(cartItem => {
        return products.findIndex(itemx => itemx.id === cartItem.id);
      }); //replace them with items in product list
      //to get them updated with last quantity applied in cart at the same time

      for (let i = 0; i < indexesOfCartItems.length; i++) {
        products.splice(indexesOfCartItems[i], 1, cart[i]);
      }
    }
  }, [products, cart]);

  const addItem = item => {
    //add clicked product to cart
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_11__["addItemInCart"](item)); //check if this item is in cart & has quantity return it and update products

    const checkProduct = cart.find(product => product.id === item.id); //check if it was in cart

    if (checkProduct) {
      const itemIndexInProducts = products.findIndex(itemx => itemx.id === item.id); //get it's index from products

      products[itemIndexInProducts] = checkProduct; //replace it with old one

      if (itemIndexInProducts !== -1) {
        dispatch(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__["showProducts"](products)); //update
      }
    }
  };

  const createList = () => {
    if (products) {
      return (products || []).map((product, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
          item: true,
          xs: 3,
          className: styles.gridCustom,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onClick: () => router.push(`/productDetailsNext/${product.id}`),
            mb: "2rem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
              title: product.title,
              discription: product.description,
              img: product.image,
              alt: product.title
            }, product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)
          }, product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center",
            style: {
              margin: "5px"
            },
            children: product.quantity > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_quantity_quantity__WEBPACK_IMPORTED_MODULE_7__["default"], {
              item: product
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "primary",
              text: "Add to cart",
              onClick: () => addItem(product)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)]
        }, product.id, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this);
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxWidth: "lg",
    className: styles.ProductListContainer,
    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      spacing: 2,
      children: createList()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

_s(ProductList, "WAHMS8hemmNjxS8Lcz0TTCl5pME=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c = ProductList;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

var _c;

$RefreshReg$(_c, "ProductList");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhcnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY2FydFJlZHVjZXIiLCJwcm9kdWN0cyIsInByb2R1Y3RzUmVkdWNlciIsImxvYWRpbmciLCJsb2FkZXIiLCJ1c2VFZmZlY3QiLCJwcm9kdWN0c0FjdGlvbnMiLCJpbmRleGVzT2ZDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0SXRlbSIsImZpbmRJbmRleCIsIml0ZW14IiwiaWQiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiYWRkSXRlbSIsIml0ZW0iLCJjYXJ0QWN0aW9ucyIsImNoZWNrUHJvZHVjdCIsImZpbmQiLCJwcm9kdWN0IiwiaXRlbUluZGV4SW5Qcm9kdWN0cyIsImNyZWF0ZUxpc3QiLCJpbmRleCIsInN0eWxlcyIsImdyaWRDdXN0b20iLCJwdXNoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibWFyZ2luIiwicXVhbnRpdHkiLCJQcm9kdWN0TGlzdENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNyQixRQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU1DLElBQUksR0FBR0MsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JILElBQTlCLENBQXhCO0FBQ0EsUUFBTUksUUFBUSxHQUFHSCwrREFBVyxDQUFFQyxLQUFELElBQVdB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QUE7QUFBQSxrQkFERixlQWNFO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQTZCLGlCQUFLLEVBQUU7QUFBRW1CLG9CQUFNLEVBQUU7QUFBVixhQUFwQztBQUFBLHNCQUNHVixPQUFPLENBQUNXLFFBQVIsR0FBbUIsQ0FBbkIsZ0JBQ0MscUVBQUMscUVBQUQ7QUFBVSxrQkFBSSxFQUFFWDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGdCQUdDLHFFQUFDLDJEQUFEO0FBQ0UsbUJBQUssRUFBQyxTQURSO0FBRUUsa0JBQUksRUFBQyxhQUZQO0FBR0UscUJBQU8sRUFBRSxNQUFNTCxPQUFPLENBQUNLLE9BQUQ7QUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEY7QUFBQSxXQUF1QkEsT0FBTyxDQUFDVCxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBNEJELE9BN0JNLENBQVA7QUE4QkQ7QUFDRixHQWpDRDs7QUFrQ0Esc0JBQ0UscUVBQUMsbUVBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFFYSxNQUFNLENBQUNRLG9CQUEzQztBQUFBLGNBQ0c5QixPQUFPLGdCQUNOLHFFQUFDLHFGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFHTixxRUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSxnQkFDR29CLFVBQVU7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBckZRL0IsVztVQUNRRSxzRCxFQUNFRSx1RCxFQUNKRSx1RCxFQUNJQSx1RCxFQUNEQSx1RDs7O0tBTFROLFc7QUF1Rk1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBjNWI3NzgzOWQxNzZkZWEwMTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3BhZ2VzL3Byb2R1Y3REZXRhaWxzTmV4dC9wcm9kdWN0TGlzdC5tb2R1bGUuc2Nzc1wiO1xyXG4vL21hdGVyaWFsIHVpIGNvbXBvbmVudHNcclxuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkL0NhcmRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuLy9jdXN0b20gY29tcG9uZW50c1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG4vL3N0b3JlXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0c0FjdGlvbnMgZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbi8vaGlzdG9yeVxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLmNhcnQpO1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0c1JlZHVjZXIucHJvZHVjdHMpO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzUmVkdWNlci5sb2FkZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL3doZW4gY29tcG9uZW50IG1vdW50IGdldCBhbGwgcHJvZHVjdHNcclxuICAgIGRpc3BhdGNoKHByb2R1Y3RzQWN0aW9ucy5nZXRQcm9kdWN0cygpKTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vaWYgdGhlcmUgYXJlIGl0ZW1zIGluIGNhcnRcclxuICAgIGlmIChjYXJ0KSB7XHJcbiAgICAgIC8vZ2V0IHRoZXJlIGluZGV4ZXMgaW4gcHJvZHVjdCBsaXN0XHJcbiAgICAgIGxldCBpbmRleGVzT2ZDYXJ0SXRlbXMgPSBjYXJ0Lm1hcCgoY2FydEl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdHMuZmluZEluZGV4KChpdGVteCkgPT4gaXRlbXguaWQgPT09IGNhcnRJdGVtLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vcmVwbGFjZSB0aGVtIHdpdGggaXRlbXMgaW4gcHJvZHVjdCBsaXN0XHJcbiAgICAgIC8vdG8gZ2V0IHRoZW0gdXBkYXRlZCB3aXRoIGxhc3QgcXVhbnRpdHkgYXBwbGllZCBpbiBjYXJ0IGF0IHRoZSBzYW1lIHRpbWVcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzT2ZDYXJ0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwcm9kdWN0cy5zcGxpY2UoaW5kZXhlc09mQ2FydEl0ZW1zW2ldLCAxLCBjYXJ0W2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0cywgY2FydF0pO1xyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgLy9hZGQgY2xpY2tlZCBwcm9kdWN0IHRvIGNhcnRcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmFkZEl0ZW1JbkNhcnQoaXRlbSkpO1xyXG4gICAgLy9jaGVjayBpZiB0aGlzIGl0ZW0gaXMgaW4gY2FydCAmIGhhcyBxdWFudGl0eSByZXR1cm4gaXQgYW5kIHVwZGF0ZSBwcm9kdWN0c1xyXG4gICAgY29uc3QgY2hlY2tQcm9kdWN0ID0gY2FydC5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpdGVtLmlkKTsgLy9jaGVjayBpZiBpdCB3YXMgaW4gY2FydFxyXG4gICAgaWYgKGNoZWNrUHJvZHVjdCkge1xyXG4gICAgICBjb25zdCBpdGVtSW5kZXhJblByb2R1Y3RzID0gcHJvZHVjdHMuZmluZEluZGV4KFxyXG4gICAgICAgIChpdGVteCkgPT4gaXRlbXguaWQgPT09IGl0ZW0uaWRcclxuICAgICAgKTtcclxuICAgICAgLy9nZXQgaXQncyBpbmRleCBmcm9tIHByb2R1Y3RzXHJcbiAgICAgIHByb2R1Y3RzW2l0ZW1JbmRleEluUHJvZHVjdHNdID0gY2hlY2tQcm9kdWN0OyAvL3JlcGxhY2UgaXQgd2l0aCBvbGQgb25lXHJcbiAgICAgIGlmIChpdGVtSW5kZXhJblByb2R1Y3RzICE9PSAtMSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHByb2R1Y3RzQWN0aW9ucy5zaG93UHJvZHVjdHMocHJvZHVjdHMpKTsgLy91cGRhdGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlTGlzdCA9ICgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0cykge1xyXG4gICAgICByZXR1cm4gKHByb2R1Y3RzIHx8IFtdKS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZEN1c3RvbX0+XHJcbiAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3REZXRhaWxzTmV4dC8ke3Byb2R1Y3QuaWR9YCl9XHJcbiAgICAgICAgICAgICAgbWI9XCIycmVtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZWRpYUNhcmRcclxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGlzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBpbWc9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC5xdWFudGl0eSA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8UXVhbnRpdHkgaXRlbT17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwiQWRkIHRvIGNhcnRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e3N0eWxlcy5Qcm9kdWN0TGlzdENvbnRhaW5lcn0+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAge2NyZWF0ZUxpc3QoKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==