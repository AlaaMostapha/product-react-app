webpackHotUpdate_N_E("pages/productListNext/productList",{

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
/* harmony import */ var _productList_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productList.module.scss */ "./src/pages/productListNext/productList.module.scss");
/* harmony import */ var _productList_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_productList_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Card/Card */ "./src/components/Card/Card.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/LoadingIndicator/LoadingIndicator */ "./src/components/LoadingIndicator/LoadingIndicator.js");
/* harmony import */ var _components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/quantity/quantity */ "./src/components/quantity/quantity.js");
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/actions */ "./src/redux/actions/actions.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\productListNext\\productList.js",
    _s = $RefreshSig$();


 //material ui components




 //custom components



 //store



 //history



function ProductList() {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();
  const cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.cartReducer.cart);
  const products = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.productsReducer.products);
  const loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(state => state.productsReducer.loader);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //when component mount get all products
    dispatch(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_11__["getProducts"]());
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
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_12__["addItemInCart"](item)); //check if this item is in cart & has quantity return it and update products

    const checkProduct = cart.find(product => product.id === item.id); //check if it was in cart

    if (checkProduct) {
      const itemIndexInProducts = products.findIndex(itemx => itemx.id === item.id); //get it's index from products

      products[itemIndexInProducts] = checkProduct; //replace it with old one

      if (itemIndexInProducts !== -1) {
        dispatch(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_11__["showProducts"](products)); //update
      }
    }
  };

  const createList = () => {
    if (products) {
      return (products || []).map((product, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          item: true,
          xs: 3,
          className: "grid-custom",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
            onClick: () => router.push(`/productDetailsNext/productDetails`, product.id),
            mb: "2rem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
              title: product.title,
              discription: product.description,
              img: product.image,
              alt: product.title
            }, product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
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
            children: product.quantity > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__["default"], {
              item: product
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
              color: "primary",
              text: "Add to cart",
              onClick: () => addItem(product)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxWidth: "lg",
    className: "ProductListContainer",
    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      container: true,
      spacing: 2,
      children: createList()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 5
  }, this);
}

_s(ProductList, "WAHMS8hemmNjxS8Lcz0TTCl5pME=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjdHMiLCJwcm9kdWN0c1JlZHVjZXIiLCJsb2FkaW5nIiwibG9hZGVyIiwidXNlRWZmZWN0IiwicHJvZHVjdHNBY3Rpb25zIiwiaW5kZXhlc09mQ2FydEl0ZW1zIiwibWFwIiwiY2FydEl0ZW0iLCJmaW5kSW5kZXgiLCJpdGVteCIsImlkIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImFkZEl0ZW0iLCJpdGVtIiwiY2FydEFjdGlvbnMiLCJjaGVja1Byb2R1Y3QiLCJmaW5kIiwicHJvZHVjdCIsIml0ZW1JbmRleEluUHJvZHVjdHMiLCJjcmVhdGVMaXN0IiwiaW5kZXgiLCJwdXNoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibWFyZ2luIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNyQixRQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxnRUFBVyxFQUE1QjtBQUNBLFFBQU1DLElBQUksR0FBR0MsZ0VBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JILElBQTlCLENBQXhCO0FBQ0EsUUFBTUksUUFBUSxHQUFHSCxnRUFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0csZUFBTixDQUFzQkQsUUFBbEMsQ0FBNUI7QUFD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LEVBQUU7QUFBRWlCLG9CQUFNLEVBQUU7QUFBVixhQUFwQztBQUFBLHNCQUNHUixPQUFPLENBQUNTLFFBQVIsR0FBbUIsQ0FBbkIsZ0JBQ0MscUVBQUMscUVBQUQ7QUFBVSxrQkFBSSxFQUFFVDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGdCQUdDLHFFQUFDLDJEQUFEO0FBQ0UsbUJBQUssRUFBQyxTQURSO0FBRUUsa0JBQUksRUFBQyxhQUZQO0FBR0UscUJBQU8sRUFBRSxNQUFNTCxPQUFPLENBQUNLLE9BQUQ7QUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEJGO0FBQUEsV0FBdUJBLE9BQU8sQ0FBQ1QsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQThCRCxPQS9CTSxDQUFQO0FBZ0NEO0FBQ0YsR0FuQ0Q7O0FBb0NBLHNCQUNFLHFFQUFDLG1FQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyxzQkFBbkM7QUFBQSxjQUNHVCxPQUFPLGdCQUNOLHFFQUFDLHFGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFHTixxRUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSxnQkFDR29CLFVBQVU7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBdkZRL0IsVztVQUNRRSxzRCxFQUNFRSx3RCxFQUNKRSx3RCxFQUNJQSx3RCxFQUNEQSx3RDs7O0tBTFROLFc7QUF5Rk1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5lMTZlNzRkNmYzMzFlOTk5NWZjZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL3Byb2R1Y3RMaXN0Lm1vZHVsZS5zY3NzXCI7XHJcbi8vbWF0ZXJpYWwgdWkgY29tcG9uZW50c1xyXG5pbXBvcnQgTWVkaWFDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmQvQ2FyZFwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG4vL2N1c3RvbSBjb21wb25lbnRzXHJcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdJbmRpY2F0b3IvTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQgUXVhbnRpdHkgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcXVhbnRpdHkvcXVhbnRpdHlcIjtcclxuaW1wb3J0IENyZWF0ZUJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdG4vQnRuXCI7XHJcbi8vc3RvcmVcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIHByb2R1Y3RzQWN0aW9ucyBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9hY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIGNhcnRBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRcIjtcclxuLy9oaXN0b3J5XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydCk7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzUmVkdWNlci5wcm9kdWN0cyk7XHJcbiAgY29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHNSZWR1Y2VyLmxvYWRlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vd2hlbiBjb21wb25lbnQgbW91bnQgZ2V0IGFsbCBwcm9kdWN0c1xyXG4gICAgZGlzcGF0Y2gocHJvZHVjdHNBY3Rpb25zLmdldFByb2R1Y3RzKCkpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9pZiB0aGVyZSBhcmUgaXRlbXMgaW4gY2FydFxyXG4gICAgaWYgKGNhcnQpIHtcclxuICAgICAgLy9nZXQgdGhlcmUgaW5kZXhlcyBpbiBwcm9kdWN0IGxpc3RcclxuICAgICAgbGV0IGluZGV4ZXNPZkNhcnRJdGVtcyA9IGNhcnQubWFwKChjYXJ0SXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5maW5kSW5kZXgoKGl0ZW14KSA9PiBpdGVteC5pZCA9PT0gY2FydEl0ZW0uaWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9yZXBsYWNlIHRoZW0gd2l0aCBpdGVtcyBpbiBwcm9kdWN0IGxpc3RcclxuICAgICAgLy90byBnZXQgdGhlbSB1cGRhdGVkIHdpdGggbGFzdCBxdWFudGl0eSBhcHBsaWVkIGluIGNhcnQgYXQgdGhlIHNhbWUgdGltZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ZXNPZkNhcnRJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHByb2R1Y3RzLnNwbGljZShpbmRleGVzT2ZDYXJ0SXRlbXNbaV0sIDEsIGNhcnRbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3RzLCBjYXJ0XSk7XHJcbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAvL2FkZCBjbGlja2VkIHByb2R1Y3QgdG8gY2FydFxyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuYWRkSXRlbUluQ2FydChpdGVtKSk7XHJcbiAgICAvL2NoZWNrIGlmIHRoaXMgaXRlbSBpcyBpbiBjYXJ0ICYgaGFzIHF1YW50aXR5IHJldHVybiBpdCBhbmQgdXBkYXRlIHByb2R1Y3RzXHJcbiAgICBjb25zdCBjaGVja1Byb2R1Y3QgPSBjYXJ0LmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGl0ZW0uaWQpOyAvL2NoZWNrIGlmIGl0IHdhcyBpbiBjYXJ0XHJcbiAgICBpZiAoY2hlY2tQcm9kdWN0KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1JbmRleEluUHJvZHVjdHMgPSBwcm9kdWN0cy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGl0ZW14KSA9PiBpdGVteC5pZCA9PT0gaXRlbS5pZFxyXG4gICAgICApO1xyXG4gICAgICAvL2dldCBpdCdzIGluZGV4IGZyb20gcHJvZHVjdHNcclxuICAgICAgcHJvZHVjdHNbaXRlbUluZGV4SW5Qcm9kdWN0c10gPSBjaGVja1Byb2R1Y3Q7IC8vcmVwbGFjZSBpdCB3aXRoIG9sZCBvbmVcclxuICAgICAgaWYgKGl0ZW1JbmRleEluUHJvZHVjdHMgIT09IC0xKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHJvZHVjdHNBY3Rpb25zLnNob3dQcm9kdWN0cyhwcm9kdWN0cykpOyAvL3VwZGF0ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVMaXN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3RzKSB7XHJcbiAgICAgIHJldHVybiAocHJvZHVjdHMgfHwgW10pLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30ga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJncmlkLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdERldGFpbHNOZXh0L3Byb2R1Y3REZXRhaWxzYCwgcHJvZHVjdC5pZClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbWI9XCIycmVtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZWRpYUNhcmRcclxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGlzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBpbWc9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC5xdWFudGl0eSA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8UXVhbnRpdHkgaXRlbT17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwiQWRkIHRvIGNhcnRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9XCJQcm9kdWN0TGlzdENvbnRhaW5lclwiPlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIHtjcmVhdGVMaXN0KCl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=