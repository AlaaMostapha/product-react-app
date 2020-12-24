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
            onClick: () => router.push(`/productDetailsNext/[${product.id}]`),
            mb: "2rem",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
            children: product.quantity > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_quantity_quantity__WEBPACK_IMPORTED_MODULE_8__["default"], {
              item: product
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_9__["default"], {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    maxWidth: "lg",
    className: "ProductListContainer",
    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadingIndicator_LoadingIndicator__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0TGlzdCIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImNhcnRSZWR1Y2VyIiwicHJvZHVjdHMiLCJwcm9kdWN0c1JlZHVjZXIiLCJsb2FkaW5nIiwibG9hZGVyIiwidXNlRWZmZWN0IiwicHJvZHVjdHNBY3Rpb25zIiwiaW5kZXhlc09mQ2FydEl0ZW1zIiwibWFwIiwiY2FydEl0ZW0iLCJmaW5kSW5kZXgiLCJpdGVteCIsImlkIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImFkZEl0ZW0iLCJpdGVtIiwiY2FydEFjdGlvbnMiLCJjaGVja1Byb2R1Y3QiLCJmaW5kIiwicHJvZHVjdCIsIml0ZW1JbmRleEluUHJvZHVjdHMiLCJjcmVhdGVMaXN0IiwiaW5kZXgiLCJwdXNoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibWFyZ2luIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUNyQixRQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxnRUFBVyxFQUE1QjtBQUNBLFFBQU1DLElBQUksR0FBR0MsZ0VBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JILElBQTlCLENBQXhCO0FBQ0EsUUFBTUksUUFBUSxHQUFHSCxnRUFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0csZUFBTixDQUFzQkQsUUFBbEMsQ0FBNUI7QUFDQSxRQUFNRSxPQUFPLEdBQUdMLGdFQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDRyxlQUFOLENBQXNCRSxNQUFsQyxDQUEzQjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBVixZQUFRLENBQUNXLG1FQUFBLEVBQUQsQ0FBUjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFJQUQseURBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDQSxRQUFJUixJQUFKLEVBQVU7QUFDUjtBQUNBLFVBQUlVLGtCQUFrQixHQUFHVixJQUFJLENBQUNXLEdBQUwsQ0FBVUMsUUFBRCxJQUFjO0FBQzlDLGVBQU9SLFFBQVEsQ0FBQ1MsU0FBVCxDQUFvQkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEVBQU4sS0FBYUgsUUFBUSxDQUFDRyxFQUFwRCxDQUFQO0FBQ0QsT0FGd0IsQ0FBekIsQ0FGUSxDQUtSO0FBQ0E7O0FBQ0EsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixrQkFBa0IsQ0FBQ08sTUFBdkMsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDbERaLGdCQUFRLENBQUNjLE1BQVQsQ0FBZ0JSLGtCQUFrQixDQUFDTSxDQUFELENBQWxDLEVBQXVDLENBQXZDLEVBQTBDaEIsSUFBSSxDQUFDZ0IsQ0FBRCxDQUE5QztBQUNEO0FBQ0Y7QUFDRixHQWJRLEVBYU4sQ0FBQ1osUUFBRCxFQUFXSixJQUFYLENBYk0sQ0FBVDs7QUFjQSxRQUFNbUIsT0FBTyxHQUFJQyxJQUFELElBQVU7QUFDeEI7QUFDQXRCLFlBQVEsQ0FBQ3VCLGtFQUFBLENBQTBCRCxJQUExQixDQUFELENBQVIsQ0FGd0IsQ0FHeEI7O0FBQ0EsVUFBTUUsWUFBWSxHQUFHdEIsSUFBSSxDQUFDdUIsSUFBTCxDQUFXQyxPQUFELElBQWFBLE9BQU8sQ0FBQ1QsRUFBUixLQUFlSyxJQUFJLENBQUNMLEVBQTNDLENBQXJCLENBSndCLENBSTZDOztBQUNyRSxRQUFJTyxZQUFKLEVBQWtCO0FBQ2hCLFlBQU1HLG1CQUFtQixHQUFHckIsUUFBUSxDQUFDUyxTQUFULENBQ3pCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsRUFBTixLQUFhSyxJQUFJLENBQUNMLEVBREgsQ0FBNUIsQ0FEZ0IsQ0FJaEI7O0FBQ0FYLGNBQVEsQ0FBQ3FCLG1CQUFELENBQVIsR0FBZ0NILFlBQWhDLENBTGdCLENBSzhCOztBQUM5QyxVQUFJRyxtQkFBbUIsS0FBSyxDQUFDLENBQTdCLEVBQWdDO0FBQzlCM0IsZ0JBQVEsQ0FBQ1csb0VBQUEsQ0FBNkJMLFFBQTdCLENBQUQsQ0FBUixDQUQ4QixDQUNvQjtBQUNuRDtBQUNGO0FBQ0YsR0FmRDs7QUFnQkEsUUFBTXNCLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFFBQUl0QixRQUFKLEVBQWM7QUFDWixhQUFPLENBQUNBLFFBQVEsSUFBSSxFQUFiLEVBQWlCTyxHQUFqQixDQUFxQixDQUFDYSxPQUFELEVBQVVHLEtBQVYsS0FBb0I7QUFDOUMsNEJBQ0UscUVBQUMsOERBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsQ0FBZjtBQUFtQyxtQkFBUyxFQUFDLGFBQTdDO0FBQUEsa0NBQ0UscUVBQUMsK0RBQUQ7QUFFRSxtQkFBTyxFQUFFLE1BQU0vQixNQUFNLENBQUNnQyxJQUFQLENBQWEsd0JBQXVCSixPQUFPLENBQUNULEVBQUcsR0FBL0MsQ0FGakI7QUFHRSxjQUFFLEVBQUMsTUFITDtBQUFBLG1DQUtFLHFFQUFDLDZEQUFEO0FBRUUsbUJBQUssRUFBRVMsT0FBTyxDQUFDSyxLQUZqQjtBQUdFLHlCQUFXLEVBQUVMLE9BQU8sQ0FBQ00sV0FIdkI7QUFJRSxpQkFBRyxFQUFFTixPQUFPLENBQUNPLEtBSmY7QUFLRSxpQkFBRyxFQUFFUCxPQUFPLENBQUNLO0FBTGYsZUFDT0wsT0FBTyxDQUFDVCxFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixhQUNPUyxPQUFPLENBQUNULEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQWNFO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQTZCLGlCQUFLLEVBQUU7QUFBRWlCLG9CQUFNLEVBQUU7QUFBVixhQUFwQztBQUFBLHNCQUNHUixPQUFPLENBQUNTLFFBQVIsR0FBbUIsQ0FBbkIsZ0JBQ0MscUVBQUMscUVBQUQ7QUFBVSxrQkFBSSxFQUFFVDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGdCQUdDLHFFQUFDLDJEQUFEO0FBQ0UsbUJBQUssRUFBQyxTQURSO0FBRUUsa0JBQUksRUFBQyxhQUZQO0FBR0UscUJBQU8sRUFBRSxNQUFNTCxPQUFPLENBQUNLLE9BQUQ7QUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZEY7QUFBQSxXQUF1QkEsT0FBTyxDQUFDVCxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBNEJELE9BN0JNLENBQVA7QUE4QkQ7QUFDRixHQWpDRDs7QUFrQ0Esc0JBQ0UscUVBQUMsbUVBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFDLHNCQUFuQztBQUFBLGNBQ0dULE9BQU8sZ0JBQ04scUVBQUMscUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGdCQUdOLHFFQUFDLDhEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUFBLGdCQUNHb0IsVUFBVTtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDs7R0FyRlEvQixXO1VBQ1FFLHNELEVBQ0VFLHdELEVBQ0pFLHdELEVBQ0lBLHdELEVBQ0RBLHdEOzs7S0FMVE4sVztBQXVGTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdExpc3ROZXh0L3Byb2R1Y3RMaXN0Ljg3NGMxYzIzYmI2YjAxMzMxNGEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vcHJvZHVjdExpc3QubW9kdWxlLnNjc3NcIjtcclxuLy9tYXRlcmlhbCB1aSBjb21wb25lbnRzXHJcbmltcG9ydCBNZWRpYUNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbi8vY3VzdG9tIGNvbXBvbmVudHNcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ0luZGljYXRvci9Mb2FkaW5nSW5kaWNhdG9yXCI7XHJcbmltcG9ydCBRdWFudGl0eSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9xdWFudGl0eS9xdWFudGl0eVwiO1xyXG5pbXBvcnQgQ3JlYXRlQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J0bi9CdG5cIjtcclxuLy9zdG9yZVxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgcHJvZHVjdHNBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2FjdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG4vL2hpc3RvcnlcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIFByb2R1Y3RMaXN0KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlci5jYXJ0KTtcclxuICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHNSZWR1Y2VyLnByb2R1Y3RzKTtcclxuICBjb25zdCBsb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0c1JlZHVjZXIubG9hZGVyKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy93aGVuIGNvbXBvbmVudCBtb3VudCBnZXQgYWxsIHByb2R1Y3RzXHJcbiAgICBkaXNwYXRjaChwcm9kdWN0c0FjdGlvbnMuZ2V0UHJvZHVjdHMoKSk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2lmIHRoZXJlIGFyZSBpdGVtcyBpbiBjYXJ0XHJcbiAgICBpZiAoY2FydCkge1xyXG4gICAgICAvL2dldCB0aGVyZSBpbmRleGVzIGluIHByb2R1Y3QgbGlzdFxyXG4gICAgICBsZXQgaW5kZXhlc09mQ2FydEl0ZW1zID0gY2FydC5tYXAoKGNhcnRJdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3RzLmZpbmRJbmRleCgoaXRlbXgpID0+IGl0ZW14LmlkID09PSBjYXJ0SXRlbS5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvL3JlcGxhY2UgdGhlbSB3aXRoIGl0ZW1zIGluIHByb2R1Y3QgbGlzdFxyXG4gICAgICAvL3RvIGdldCB0aGVtIHVwZGF0ZWQgd2l0aCBsYXN0IHF1YW50aXR5IGFwcGxpZWQgaW4gY2FydCBhdCB0aGUgc2FtZSB0aW1lXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhlc09mQ2FydEl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcHJvZHVjdHMuc3BsaWNlKGluZGV4ZXNPZkNhcnRJdGVtc1tpXSwgMSwgY2FydFtpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbcHJvZHVjdHMsIGNhcnRdKTtcclxuICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgIC8vYWRkIGNsaWNrZWQgcHJvZHVjdCB0byBjYXJ0XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5hZGRJdGVtSW5DYXJ0KGl0ZW0pKTtcclxuICAgIC8vY2hlY2sgaWYgdGhpcyBpdGVtIGlzIGluIGNhcnQgJiBoYXMgcXVhbnRpdHkgcmV0dXJuIGl0IGFuZCB1cGRhdGUgcHJvZHVjdHNcclxuICAgIGNvbnN0IGNoZWNrUHJvZHVjdCA9IGNhcnQuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gaXRlbS5pZCk7IC8vY2hlY2sgaWYgaXQgd2FzIGluIGNhcnRcclxuICAgIGlmIChjaGVja1Byb2R1Y3QpIHtcclxuICAgICAgY29uc3QgaXRlbUluZGV4SW5Qcm9kdWN0cyA9IHByb2R1Y3RzLmZpbmRJbmRleChcclxuICAgICAgICAoaXRlbXgpID0+IGl0ZW14LmlkID09PSBpdGVtLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIC8vZ2V0IGl0J3MgaW5kZXggZnJvbSBwcm9kdWN0c1xyXG4gICAgICBwcm9kdWN0c1tpdGVtSW5kZXhJblByb2R1Y3RzXSA9IGNoZWNrUHJvZHVjdDsgLy9yZXBsYWNlIGl0IHdpdGggb2xkIG9uZVxyXG4gICAgICBpZiAoaXRlbUluZGV4SW5Qcm9kdWN0cyAhPT0gLTEpIHtcclxuICAgICAgICBkaXNwYXRjaChwcm9kdWN0c0FjdGlvbnMuc2hvd1Byb2R1Y3RzKHByb2R1Y3RzKSk7IC8vdXBkYXRlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdHMpIHtcclxuICAgICAgcmV0dXJuIChwcm9kdWN0cyB8fCBbXSkubWFwKChwcm9kdWN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImdyaWQtY3VzdG9tXCI+XHJcbiAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Byb2R1Y3REZXRhaWxzTmV4dC9bJHtwcm9kdWN0LmlkfV1gKX1cclxuICAgICAgICAgICAgICBtYj1cIjJyZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lZGlhQ2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBkaXNjcmlwdGlvbj17cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIGltZz17cHJvZHVjdC5pbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0LnF1YW50aXR5ID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxRdWFudGl0eSBpdGVtPXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8Q3JlYXRlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJBZGQgdG8gY2FydFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0ocHJvZHVjdCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT1cIlByb2R1Y3RMaXN0Q29udGFpbmVyXCI+XHJcbiAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgIDxMb2FkaW5nSW5kaWNhdG9yIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAge2NyZWF0ZUxpc3QoKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==