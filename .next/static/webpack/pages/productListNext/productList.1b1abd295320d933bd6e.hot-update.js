webpackHotUpdate_N_E("pages/productListNext/productList",{

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./src/pages/productListNext/productList.js":
/*!**************************************************!*\
  !*** ./src/pages/productListNext/productList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Card/Card */ "./src/components/Card/Card.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/quantity/quantity */ "./src/components/quantity/quantity.js");
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/actions */ "./src/redux/actions/actions.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\productListNext\\productList.js",
    _s = $RefreshSig$();

 // import "./productList.scss";
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
          className: "grid-custom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onClick: () => router.push(`/products/${product.id}`, product),
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
    className: "ProductListContainer",
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjdHMiLCJwcm9kdWN0c1JlZHVjZXIiLCJsb2FkaW5nIiwibG9hZGVyIiwidXNlRWZmZWN0IiwicHJvZHVjdHNBY3Rpb25zIiwiaW5kZXhlc09mQ2FydEl0ZW1zIiwibWFwIiwiY2FydEl0ZW0iLCJmaW5kSW5kZXgiLCJpdGVteCIsImlkIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImFkZEl0ZW0iLCJpdGVtIiwiY2FydEFjdGlvbnMiLCJjaGVja1Byb2R1Y3QiLCJmaW5kIiwicHJvZHVjdCIsIml0ZW1JbmRleEluUHJvZHVjdHMiLCJjcmVhdGVMaXN0IiwiaW5kZXgiLCJwdXNoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibWFyZ2luIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUNBLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFDckIsUUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCSCxJQUE5QixDQUF4QjtBQUNBLFFBQU1JLFFBQVEsR0FBR0gsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNHLGVBQU4sQ0FBc0JELFFBQWxDLENB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QyxhQUFmO0FBQTZCLGlCQUFLLEVBQUU7QUFBRWlCLG9CQUFNLEVBQUU7QUFBVixhQUFwQztBQUFBLHNCQUNHUixPQUFPLENBQUNTLFFBQVIsR0FBbUIsQ0FBbkIsZ0JBQ0MscUVBQUMscUVBQUQ7QUFBVSxrQkFBSSxFQUFFVDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGdCQUdDLHFFQUFDLDJEQUFEO0FBQ0UsbUJBQUssRUFBQyxTQURSO0FBRUUsa0JBQUksRUFBQyxhQUZQO0FBR0UscUJBQU8sRUFBRSxNQUFNTCxPQUFPLENBQUNLLE9BQUQ7QUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEY7QUFBQSxXQUF1QkEsT0FBTyxDQUFDVCxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBNEJELE9BN0JNLENBQVA7QUE4QkQ7QUFDRixHQWpDRDs7QUFrQ0Esc0JBQ0UscUVBQUMsbUVBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLHNCQUFuQztBQUFBLGNBQ0dULE9BQU8sZ0JBQ04scUVBQUMscUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGdCQUdOLHFFQUFDLDhEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUFBLGdCQUNHb0IsVUFBVTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7R0FyRlEvQixXO1VBQ1FFLHNELEVBQ0VFLHVELEVBQ0pFLHVELEVBQ0lBLHVELEVBQ0RBLHVEOzs7S0FMVE4sVztBQXVGTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdExpc3ROZXh0L3Byb2R1Y3RMaXN0LjFiMWFiZDI5NTMyMGQ5MzNiZDZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBcIi4vcHJvZHVjdExpc3Quc2Nzc1wiO1xyXG4vL21hdGVyaWFsIHVpIGNvbXBvbmVudHNcclxuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXJkL0NhcmRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuLy9jdXN0b20gY29tcG9uZW50c1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG4vL3N0b3JlXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0c0FjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbi8vaGlzdG9yeVxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZnVuY3Rpb24gUHJvZHVjdExpc3QoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLmNhcnQpO1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0c1JlZHVjZXIucHJvZHVjdHMpO1xyXG4gIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzUmVkdWNlci5sb2FkZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL3doZW4gY29tcG9uZW50IG1vdW50IGdldCBhbGwgcHJvZHVjdHNcclxuICAgIGRpc3BhdGNoKHByb2R1Y3RzQWN0aW9ucy5nZXRQcm9kdWN0cygpKTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vaWYgdGhlcmUgYXJlIGl0ZW1zIGluIGNhcnRcclxuICAgIGlmIChjYXJ0KSB7XHJcbiAgICAgIC8vZ2V0IHRoZXJlIGluZGV4ZXMgaW4gcHJvZHVjdCBsaXN0XHJcbiAgICAgIGxldCBpbmRleGVzT2ZDYXJ0SXRlbXMgPSBjYXJ0Lm1hcCgoY2FydEl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdHMuZmluZEluZGV4KChpdGVteCkgPT4gaXRlbXguaWQgPT09IGNhcnRJdGVtLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vcmVwbGFjZSB0aGVtIHdpdGggaXRlbXMgaW4gcHJvZHVjdCBsaXN0XHJcbiAgICAgIC8vdG8gZ2V0IHRoZW0gdXBkYXRlZCB3aXRoIGxhc3QgcXVhbnRpdHkgYXBwbGllZCBpbiBjYXJ0IGF0IHRoZSBzYW1lIHRpbWVcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleGVzT2ZDYXJ0SXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwcm9kdWN0cy5zcGxpY2UoaW5kZXhlc09mQ2FydEl0ZW1zW2ldLCAxLCBjYXJ0W2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0cywgY2FydF0pO1xyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgLy9hZGQgY2xpY2tlZCBwcm9kdWN0IHRvIGNhcnRcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmFkZEl0ZW1JbkNhcnQoaXRlbSkpO1xyXG4gICAgLy9jaGVjayBpZiB0aGlzIGl0ZW0gaXMgaW4gY2FydCAmIGhhcyBxdWFudGl0eSByZXR1cm4gaXQgYW5kIHVwZGF0ZSBwcm9kdWN0c1xyXG4gICAgY29uc3QgY2hlY2tQcm9kdWN0ID0gY2FydC5maW5kKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBpdGVtLmlkKTsgLy9jaGVjayBpZiBpdCB3YXMgaW4gY2FydFxyXG4gICAgaWYgKGNoZWNrUHJvZHVjdCkge1xyXG4gICAgICBjb25zdCBpdGVtSW5kZXhJblByb2R1Y3RzID0gcHJvZHVjdHMuZmluZEluZGV4KFxyXG4gICAgICAgIChpdGVteCkgPT4gaXRlbXguaWQgPT09IGl0ZW0uaWRcclxuICAgICAgKTtcclxuICAgICAgLy9nZXQgaXQncyBpbmRleCBmcm9tIHByb2R1Y3RzXHJcbiAgICAgIHByb2R1Y3RzW2l0ZW1JbmRleEluUHJvZHVjdHNdID0gY2hlY2tQcm9kdWN0OyAvL3JlcGxhY2UgaXQgd2l0aCBvbGQgb25lXHJcbiAgICAgIGlmIChpdGVtSW5kZXhJblByb2R1Y3RzICE9PSAtMSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHByb2R1Y3RzQWN0aW9ucy5zaG93UHJvZHVjdHMocHJvZHVjdHMpKTsgLy91cGRhdGVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlTGlzdCA9ICgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0cykge1xyXG4gICAgICByZXR1cm4gKHByb2R1Y3RzIHx8IFtdKS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPVwiZ3JpZC1jdXN0b21cIj5cclxuICAgICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdHMvJHtwcm9kdWN0LmlkfWAsIHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgIG1iPVwiMnJlbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVkaWFDYXJkXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRpc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgaW1nPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QucXVhbnRpdHkgPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxDcmVhdGVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgdGV4dD1cIkFkZCB0byBjYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPVwiUHJvZHVjdExpc3RDb250YWluZXJcIj5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICB7Y3JlYXRlTGlzdCgpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9