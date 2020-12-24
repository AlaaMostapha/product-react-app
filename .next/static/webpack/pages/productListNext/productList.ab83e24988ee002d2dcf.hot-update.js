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
            onClick: () => history.push(`/products/${product.id}`, product),
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
      children: ["xxxx", createList()]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjdHMiLCJwcm9kdWN0c1JlZHVjZXIiLCJsb2FkaW5nIiwibG9hZGVyIiwidXNlRWZmZWN0IiwicHJvZHVjdHNBY3Rpb25zIiwiaW5kZXhlc09mQ2FydEl0ZW1zIiwibWFwIiwiY2FydEl0ZW0iLCJmaW5kSW5kZXgiLCJpdGVteCIsImlkIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImFkZEl0ZW0iLCJpdGVtIiwiY2FydEFjdGlvbnMiLCJjaGVja1Byb2R1Y3QiLCJmaW5kIiwicHJvZHVjdCIsIml0ZW1JbmRleEluUHJvZHVjdHMiLCJjcmVhdGVMaXN0IiwiaW5kZXgiLCJoaXN0b3J5IiwicHVzaCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIm1hcmdpbiIsInF1YW50aXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFDQSxTQUFTQSxXQUFULEdBQXVCO0FBQUE7O0FBQ3JCLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCSCxJQUE5QixDQUF4QjtBQUNBLFFBQU1JLFFBQVEsR0FBR0gsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNHLGVBQU4sQ0FBc0JELFFBQWxDLENBQTVCO0FBQ0EsUUFBTUUsT0FBTyxHQUFHTCwrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUss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QSxzQkFDR1QsT0FBTyxDQUFDVSxRQUFSLEdBQW1CLENBQW5CLGdCQUNDLHFFQUFDLHFFQUFEO0FBQVUsa0JBQUksRUFBRVY7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxnQkFHQyxxRUFBQywyREFBRDtBQUNFLG1CQUFLLEVBQUMsU0FEUjtBQUVFLGtCQUFJLEVBQUMsYUFGUDtBQUdFLHFCQUFPLEVBQUUsTUFBTUwsT0FBTyxDQUFDSyxPQUFEO0FBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGO0FBQUEsV0FBdUJBLE9BQU8sQ0FBQ1QsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQTRCRCxPQTdCTSxDQUFQO0FBOEJEO0FBQ0YsR0FqQ0Q7O0FBa0NBLHNCQUNFLHFFQUFDLG1FQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBQyxzQkFBbkM7QUFBQSxjQUNHVCxPQUFPLGdCQUNOLHFFQUFDLHFGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFHTixxRUFBQyw4REFBRDtBQUFNLGVBQVMsTUFBZjtBQUFnQixhQUFPLEVBQUUsQ0FBekI7QUFBQSx5QkFFR29CLFVBQVUsRUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FyRlE3QixXO1VBQ1VFLHVELEVBQ0pFLHVELEVBQ0lBLHVELEVBQ0RBLHVEOzs7S0FKVEosVztBQXVGTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdExpc3ROZXh0L3Byb2R1Y3RMaXN0LmFiODNlMjQ5ODhlZTAwMmQyZGNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBcIi4vcHJvZHVjdExpc3Quc2Nzc1wiO1xyXG4vL21hdGVyaWFsIHVpIGNvbXBvbmVudHNcclxuaW1wb3J0IE1lZGlhQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DYXJkL0NhcmRcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuLy9jdXN0b20gY29tcG9uZW50c1xyXG5pbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nSW5kaWNhdG9yL0xvYWRpbmdJbmRpY2F0b3JcIjtcclxuaW1wb3J0IFF1YW50aXR5IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3F1YW50aXR5L3F1YW50aXR5XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG4vL3N0b3JlXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBwcm9kdWN0c0FjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbi8vaGlzdG9yeVxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlci5jYXJ0KTtcclxuICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHNSZWR1Y2VyLnByb2R1Y3RzKTtcclxuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0c1JlZHVjZXIubG9hZGVyKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy93aGVuIGNvbXBvbmVudCBtb3VudCBnZXQgYWxsIHByb2R1Y3RzXHJcbiAgICBkaXNwYXRjaChwcm9kdWN0c0FjdGlvbnMuZ2V0UHJvZHVjdHMoKSk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2lmIHRoZXJlIGFyZSBpdGVtcyBpbiBjYXJ0XHJcbiAgICBpZiAoY2FydCkge1xyXG4gICAgICAvL2dldCB0aGVyZSBpbmRleGVzIGluIHByb2R1Y3QgbGlzdFxyXG4gICAgICBsZXQgaW5kZXhlc09mQ2FydEl0ZW1zID0gY2FydC5tYXAoKGNhcnRJdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzLmZpbmRJbmRleCgoaXRlbXgpID0+IGl0ZW14LmlkID09PSBjYXJ0SXRlbS5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL3JlcGxhY2UgdGhlbSB3aXRoIGl0ZW1zIGluIHByb2R1Y3QgbGlzdFxyXG4gICAgICAvL3RvIGdldCB0aGVtIHVwZGF0ZWQgd2l0aCBsYXN0IHF1YW50aXR5IGFwcGxpZWQgaW4gY2FydCBhdCB0aGUgc2FtZSB0aW1lXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhlc09mQ2FydEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcHJvZHVjdHMuc3BsaWNlKGluZGV4ZXNPZkNhcnRJdGVtc1tpXSwgMSwgY2FydFtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcHJvZHVjdHMsIGNhcnRdKTtcclxuICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIC8vYWRkIGNsaWNrZWQgcHJvZHVjdCB0byBjYXJ0XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5hZGRJdGVtSW5DYXJ0KGl0ZW0pKTtcclxuICAgIC8vY2hlY2sgaWYgdGhpcyBpdGVtIGlzIGluIGNhcnQgJiBoYXMgcXVhbnRpdHkgcmV0dXJuIGl0IGFuZCB1cGRhdGUgcHJvZHVjdHNcclxuICAgIGNvbnN0IGNoZWNrUHJvZHVjdCA9IGNhcnQuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaXRlbS5pZCk7IC8vY2hlY2sgaWYgaXQgd2FzIGluIGNhcnRcclxuICAgIGlmIChjaGVja1Byb2R1Y3QpIHtcclxuICAgICAgY29uc3QgaXRlbUluZGV4SW5Qcm9kdWN0cyA9IHByb2R1Y3RzLmZpbmRJbmRleChcclxuICAgICAgICAoaXRlbXgpID0+IGl0ZW14LmlkID09PSBpdGVtLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIC8vZ2V0IGl0J3MgaW5kZXggZnJvbSBwcm9kdWN0c1xyXG4gICAgICBwcm9kdWN0c1tpdGVtSW5kZXhJblByb2R1Y3RzXSA9IGNoZWNrUHJvZHVjdDsgLy9yZXBsYWNlIGl0IHdpdGggb2xkIG9uZVxyXG4gICAgICBpZiAoaXRlbUluZGV4SW5Qcm9kdWN0cyAhPT0gLTEpIHtcclxuICAgICAgICBkaXNwYXRjaChwcm9kdWN0c0FjdGlvbnMuc2hvd1Byb2R1Y3RzKHByb2R1Y3RzKSk7IC8vdXBkYXRlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdHMpIHtcclxuICAgICAgcmV0dXJuIChwcm9kdWN0cyB8fCBbXSkubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImdyaWQtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goYC9wcm9kdWN0cy8ke3Byb2R1Y3QuaWR9YCwgcHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgbWI9XCIycmVtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZWRpYUNhcmRcclxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGlzY3JpcHRpb249e3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBpbWc9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpbjogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICB7cHJvZHVjdC5xdWFudGl0eSA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8UXVhbnRpdHkgaXRlbT17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwiQWRkIHRvIGNhcnRcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHByb2R1Y3QpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9XCJQcm9kdWN0TGlzdENvbnRhaW5lclwiPlxyXG4gICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICA8TG9hZGluZ0luZGljYXRvciAvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgIHh4eHhcclxuICAgICAgICAgIHtjcmVhdGVMaXN0KCl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=