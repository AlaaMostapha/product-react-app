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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\productListNext\\productList.js",
    _s = $RefreshSig$();

 // import "./productList.scss";
//material ui components




 //custom components



 //store



 //history



function ProductList() {
  _s();

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
            // onClick={() => history.push(`/products/${product.id}`, product)}
            mb: "2rem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
              title: product.title,
              discription: product.description,
              img: product.image,
              alt: product.title
            }, product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)
          }, product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
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
              lineNumber: 77,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "primary",
              text: "Add to cart",
              onClick: () => addItem(product)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, product.id, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
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
      lineNumber: 94,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      spacing: 2,
      children: createList()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

_s(ProductList, "yr6ArYn0FIPBn86S/sFkNovQ7tk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjdHMiLCJwcm9kdWN0c1JlZHVjZXIiLCJsb2FkaW5nIiwibG9hZGVyIiwidXNlRWZmZWN0IiwicHJvZHVjdHNBY3Rpb25zIiwiaW5kZXhlc09mQ2FydEl0ZW1zIiwibWFwIiwiY2FydEl0ZW0iLCJmaW5kSW5kZXgiLCJpdGVteCIsImlkIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImFkZEl0ZW0iLCJpdGVtIiwiY2FydEFjdGlvbnMiLCJjaGVja1Byb2R1Y3QiLCJmaW5kIiwicHJvZHVjdCIsIml0ZW1JbmRleEluUHJvZHVjdHMiLCJjcmVhdGVMaXN0IiwiaW5kZXgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJtYXJnaW4iLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNyQixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkgsSUFBOUIsQ0FBeEI7QUFDQSxRQUFNSSxRQUFRLEdBQUdILCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRyxlQUFOLENBQXNCRCxRQUFsQyxDQUE1QjtBQUNBLFFBQU1FLE9BQU8sR0FBR0wsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNHLGVBQU4sQ0FBc0JF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RCxnQkFHQyxxRUFBQywyREFBRDtBQUNFLG1CQUFLLEVBQUMsU0FEUjtBQUVFLGtCQUFJLEVBQUMsYUFGUDtBQUdFLHFCQUFPLEVBQUUsTUFBTUwsT0FBTyxDQUFDSyxPQUFEO0FBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGO0FBQUEsV0FBdUJBLE9BQU8sQ0FBQ1QsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQTRCRCxPQTdCTSxDQUFQO0FBOEJEO0FBQ0YsR0FqQ0Q7O0FBa0NBLHNCQUNFLHFFQUFDLG1FQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyxzQkFBbkM7QUFBQSxjQUNHVCxPQUFPLGdCQUNOLHFFQUFDLHFGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFHTixxRUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSxnQkFDR29CLFVBQVU7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0Q7O0dBcEZRN0IsVztVQUNVRSx1RCxFQUNKRSx1RCxFQUNJQSx1RCxFQUNEQSx1RDs7O0tBSlRKLFc7QUFzRk1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5iMmI4MzNjOWFmMjcwMTc4Y2UxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3Byb2R1Y3RMaXN0LnNjc3NcIjtcclxuLy9tYXRlcmlhbCB1aSBjb21wb25lbnRzXHJcbmltcG9ydCBNZWRpYUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbi8vY3VzdG9tIGNvbXBvbmVudHNcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCBRdWFudGl0eSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWFudGl0eS9xdWFudGl0eVwiO1xyXG5pbXBvcnQgQ3JlYXRlQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J0bi9CdG5cIjtcclxuLy9zdG9yZVxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdHNBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG4vL2hpc3RvcnlcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydCk7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzUmVkdWNlci5wcm9kdWN0cyk7XHJcbiAgY29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHNSZWR1Y2VyLmxvYWRlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vd2hlbiBjb21wb25lbnQgbW91bnQgZ2V0IGFsbCBwcm9kdWN0c1xyXG4gICAgZGlzcGF0Y2gocHJvZHVjdHNBY3Rpb25zLmdldFByb2R1Y3RzKCkpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9pZiB0aGVyZSBhcmUgaXRlbXMgaW4gY2FydFxyXG4gICAgaWYgKGNhcnQpIHtcclxuICAgICAgLy9nZXQgdGhlcmUgaW5kZXhlcyBpbiBwcm9kdWN0IGxpc3RcclxuICAgICAgbGV0IGluZGV4ZXNPZkNhcnRJdGVtcyA9IGNhcnQubWFwKChjYXJ0SXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5maW5kSW5kZXgoKGl0ZW14KSA9PiBpdGVteC5pZCA9PT0gY2FydEl0ZW0uaWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9yZXBsYWNlIHRoZW0gd2l0aCBpdGVtcyBpbiBwcm9kdWN0IGxpc3RcclxuICAgICAgLy90byBnZXQgdGhlbSB1cGRhdGVkIHdpdGggbGFzdCBxdWFudGl0eSBhcHBsaWVkIGluIGNhcnQgYXQgdGhlIHNhbWUgdGltZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ZXNPZkNhcnRJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHByb2R1Y3RzLnNwbGljZShpbmRleGVzT2ZDYXJ0SXRlbXNbaV0sIDEsIGNhcnRbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3RzLCBjYXJ0XSk7XHJcbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAvL2FkZCBjbGlja2VkIHByb2R1Y3QgdG8gY2FydFxyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuYWRkSXRlbUluQ2FydChpdGVtKSk7XHJcbiAgICAvL2NoZWNrIGlmIHRoaXMgaXRlbSBpcyBpbiBjYXJ0ICYgaGFzIHF1YW50aXR5IHJldHVybiBpdCBhbmQgdXBkYXRlIHByb2R1Y3RzXHJcbiAgICBjb25zdCBjaGVja1Byb2R1Y3QgPSBjYXJ0LmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGl0ZW0uaWQpOyAvL2NoZWNrIGlmIGl0IHdhcyBpbiBjYXJ0XHJcbiAgICBpZiAoY2hlY2tQcm9kdWN0KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1JbmRleEluUHJvZHVjdHMgPSBwcm9kdWN0cy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGl0ZW14KSA9PiBpdGVteC5pZCA9PT0gaXRlbS5pZFxyXG4gICAgICApO1xyXG4gICAgICAvL2dldCBpdCdzIGluZGV4IGZyb20gcHJvZHVjdHNcclxuICAgICAgcHJvZHVjdHNbaXRlbUluZGV4SW5Qcm9kdWN0c10gPSBjaGVja1Byb2R1Y3Q7IC8vcmVwbGFjZSBpdCB3aXRoIG9sZCBvbmVcclxuICAgICAgaWYgKGl0ZW1JbmRleEluUHJvZHVjdHMgIT09IC0xKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHJvZHVjdHNBY3Rpb25zLnNob3dQcm9kdWN0cyhwcm9kdWN0cykpOyAvL3VwZGF0ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVMaXN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3RzKSB7XHJcbiAgICAgIHJldHVybiAocHJvZHVjdHMgfHwgW10pLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30ga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJncmlkLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKGAvcHJvZHVjdHMvJHtwcm9kdWN0LmlkfWAsIHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgIG1iPVwiMnJlbVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVkaWFDYXJkXHJcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgIGRpc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgaW1nPXtwcm9kdWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17eyBtYXJnaW46IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QucXVhbnRpdHkgPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPFF1YW50aXR5IGl0ZW09e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxDcmVhdGVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgdGV4dD1cIkFkZCB0byBjYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPVwiUHJvZHVjdExpc3RDb250YWluZXJcIj5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPExvYWRpbmdJbmRpY2F0b3IgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICB7Y3JlYXRlTGlzdCgpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgKX1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9