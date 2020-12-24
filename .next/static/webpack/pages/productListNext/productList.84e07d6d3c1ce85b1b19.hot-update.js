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
      Object.entries(products).map((product, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            href: "/products/[product.id]",
            as: "/product/",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: product.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: product.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)
        }, index, false, {
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
      lineNumber: 74,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      spacing: 2,
      children: ["xxxx", createList()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjdHMiLCJwcm9kdWN0c1JlZHVjZXIiLCJsb2FkaW5nIiwibG9hZGVyIiwidXNlRWZmZWN0IiwicHJvZHVjdHNBY3Rpb25zIiwiaW5kZXhlc09mQ2FydEl0ZW1zIiwibWFwIiwiY2FydEl0ZW0iLCJmaW5kSW5kZXgiLCJpdGVteCIsImlkIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImFkZEl0ZW0iLCJpdGVtIiwiY2FydEFjdGlvbnMiLCJjaGVja1Byb2R1Y3QiLCJmaW5kIiwicHJvZHVjdCIsIml0ZW1JbmRleEluUHJvZHVjdHMiLCJjcmVhdGVMaXN0IiwiT2JqZWN0IiwiZW50cmllcyIsImluZGV4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNyQixRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkgsSUFBOUIsQ0FBeEI7QUFDQSxRQUFNSSxRQUFRLEdBQUdILCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRyxlQUFOLENBQXNCRCxRQUFsQyxDQUE1QjtBQUNBLFFBQU1FLE9BQU8sR0FBR0wsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNHLGVBQU4sQ0FBc0JFLE1BQWxDLENB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akVRN0IsVztVQUNVRSx1RCxFQUNKRSx1RCxFQUNJQSx1RCxFQUNEQSx1RDs7O0tBSlRKLFc7QUFtRU1BLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC44NGUwN2Q2ZDNjMWNlODViMWIxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3Byb2R1Y3RMaXN0LnNjc3NcIjtcclxuLy9tYXRlcmlhbCB1aSBjb21wb25lbnRzXHJcbmltcG9ydCBNZWRpYUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbi8vY3VzdG9tIGNvbXBvbmVudHNcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCBRdWFudGl0eSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWFudGl0eS9xdWFudGl0eVwiO1xyXG5pbXBvcnQgQ3JlYXRlQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J0bi9CdG5cIjtcclxuLy9zdG9yZVxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdHNBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG4vL2hpc3RvcnlcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydCk7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzUmVkdWNlci5wcm9kdWN0cyk7XHJcbiAgY29uc3QgbG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHNSZWR1Y2VyLmxvYWRlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vd2hlbiBjb21wb25lbnQgbW91bnQgZ2V0IGFsbCBwcm9kdWN0c1xyXG4gICAgZGlzcGF0Y2gocHJvZHVjdHNBY3Rpb25zLmdldFByb2R1Y3RzKCkpO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9pZiB0aGVyZSBhcmUgaXRlbXMgaW4gY2FydFxyXG4gICAgaWYgKGNhcnQpIHtcclxuICAgICAgLy9nZXQgdGhlcmUgaW5kZXhlcyBpbiBwcm9kdWN0IGxpc3RcclxuICAgICAgbGV0IGluZGV4ZXNPZkNhcnRJdGVtcyA9IGNhcnQubWFwKChjYXJ0SXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0cy5maW5kSW5kZXgoKGl0ZW14KSA9PiBpdGVteC5pZCA9PT0gY2FydEl0ZW0uaWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgLy9yZXBsYWNlIHRoZW0gd2l0aCBpdGVtcyBpbiBwcm9kdWN0IGxpc3RcclxuICAgICAgLy90byBnZXQgdGhlbSB1cGRhdGVkIHdpdGggbGFzdCBxdWFudGl0eSBhcHBsaWVkIGluIGNhcnQgYXQgdGhlIHNhbWUgdGltZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ZXNPZkNhcnRJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHByb2R1Y3RzLnNwbGljZShpbmRleGVzT2ZDYXJ0SXRlbXNbaV0sIDEsIGNhcnRbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3RzLCBjYXJ0XSk7XHJcbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAvL2FkZCBjbGlja2VkIHByb2R1Y3QgdG8gY2FydFxyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuYWRkSXRlbUluQ2FydChpdGVtKSk7XHJcbiAgICAvL2NoZWNrIGlmIHRoaXMgaXRlbSBpcyBpbiBjYXJ0ICYgaGFzIHF1YW50aXR5IHJldHVybiBpdCBhbmQgdXBkYXRlIHByb2R1Y3RzXHJcbiAgICBjb25zdCBjaGVja1Byb2R1Y3QgPSBjYXJ0LmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGl0ZW0uaWQpOyAvL2NoZWNrIGlmIGl0IHdhcyBpbiBjYXJ0XHJcbiAgICBpZiAoY2hlY2tQcm9kdWN0KSB7XHJcbiAgICAgIGNvbnN0IGl0ZW1JbmRleEluUHJvZHVjdHMgPSBwcm9kdWN0cy5maW5kSW5kZXgoXHJcbiAgICAgICAgKGl0ZW14KSA9PiBpdGVteC5pZCA9PT0gaXRlbS5pZFxyXG4gICAgICApO1xyXG4gICAgICAvL2dldCBpdCdzIGluZGV4IGZyb20gcHJvZHVjdHNcclxuICAgICAgcHJvZHVjdHNbaXRlbUluZGV4SW5Qcm9kdWN0c10gPSBjaGVja1Byb2R1Y3Q7IC8vcmVwbGFjZSBpdCB3aXRoIG9sZCBvbmVcclxuICAgICAgaWYgKGl0ZW1JbmRleEluUHJvZHVjdHMgIT09IC0xKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHJvZHVjdHNBY3Rpb25zLnNob3dQcm9kdWN0cyhwcm9kdWN0cykpOyAvL3VwZGF0ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVMaXN0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3RzKSB7XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByb2R1Y3RzKS5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0cy9bcHJvZHVjdC5pZF1cIiBhcz17XCIvcHJvZHVjdC9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+e3Byb2R1Y3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9XCJQcm9kdWN0TGlzdENvbnRhaW5lclwiPlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIHh4eHhcclxuICAgICAgICAgIHtjcmVhdGVMaXN0KCl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=