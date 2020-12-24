webpackHotUpdate_N_E("pages/productListNext/productList",{

/***/ "./src/containers/headerNext/Header.js":
/*!*********************************************!*\
  !*** ./src/containers/headerNext/Header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.module.scss */ "./src/containers/headerNext/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./src/containers/headerNext/style.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ "./node_modules/@material-ui/icons/AddShoppingCart.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Menu_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Menu/Menu */ "./src/components/Menu/Menu.js");
/* harmony import */ var _Cart_Cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Cart/Cart */ "./src/containers/Cart/Cart.js");
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var _Route_history__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Route/history */ "./src/Route/history.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_cart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/cart */ "./src/redux/actions/cart.js");



var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\containers\\headerNext\\Header.js",
    _s = $RefreshSig$();




 //material ui




 //custom components


 //route

 //actions




function Header(props) {
  _s();

  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_4__["useStyles"])(); //actions hooks

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"])();
  const cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(state => state.cartReducer.cart);
  const itemsNum = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(state => state.cartReducer.itemsNum);

  const removeItemFromCart = item => {
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_13__["deleteItemInCart"](item));
  };

  const redirectToReviewPage = () => {
    _Route_history__WEBPACK_IMPORTED_MODULE_11__["default"].push("/ReviewOrder");
  };

  const profileDropDownItems = ["View/ Edit Profile", "Sign out"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["AppBar"], {
      position: "static",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
          variant: "h6",
          className: classes.title,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/productListNext/productList",
            style: {
              color: "white",
              textDecoration: "none"
            } // onClick={() => history.push("/")}
            ,
            children: "Products"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
          "aria-label": "profile",
          iconType: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 23
          }, this),
          id: "profile",
          items: profileDropDownItems.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
            children: item
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
          "aria-label": "add to shopping cart",
          iconType: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
            badgeContent: itemsNum,
            color: "secondary",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_7___default.a, {
              style: {
                color: "white"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 15
          }, this),
          id: "cart",
          items: (cart || []).slice(0, 3).map((item, index) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Cart_Cart__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  title: item.title,
                  img: item.image,
                  onDelete: () => removeItemFromCart(item),
                  item: item
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 21
                }, this)
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 19
              }, this), index === (cart || []).slice(0, 3).length - 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
                style: {
                  justifyContent: "center"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  color: "primary",
                  text: "Review Order",
                  onClick: redirectToReviewPage
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 21
              }, this)]
            }, void 0, true);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

_s(Header, "tPGOstjxWaKAmxNKVAOe10nr/Wk=", false, function () {
  return [_style__WEBPACK_IMPORTED_MODULE_4__["useStyles"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvaGVhZGVyTmV4dC9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhcnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY2FydFJlZHVjZXIiLCJpdGVtc051bSIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsIml0ZW0iLCJjYXJ0QWN0aW9ucyIsInJlZGlyZWN0VG9SZXZpZXdQYWdlIiwiaGlzdG9yeSIsInB1c2giLCJwcm9maWxlRHJvcERvd25JdGVtcyIsInJvb3QiLCJ0aXRsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJtYXAiLCJpbmRleCIsInNsaWNlIiwiaW1hZ2UiLCJpZCIsImxlbmd0aCIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFPQTtBQUNBO0NBRUE7O0FBQ0E7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQ3JCLFFBQU1DLE9BQU8sR0FBR0Msd0RBQVMsRUFBekIsQ0FEcUIsQ0FFckI7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxnRUFBVyxFQUE1QjtBQUNBLFFBQU1DLElBQUksR0FBR0MsZ0VBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JILElBQTlCLENBQXhCO0FBQ0EsUUFBTUksUUFBUSxHQUFHSCxnRUFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkMsUUFBOUIsQ0FBNUI7O0FBRUEsUUFBTUMsa0JBQWtCLEdBQUlDLElBQUQsSUFBVTtBQUNuQ1IsWUFBUSxDQUFDUyxxRUFBQSxDQUE2QkQsSUFBN0IsQ0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQSxRQUFNRSxvQkFBb0IsR0FBRyxNQUFNO0FBQ2pDQywyREFBTyxDQUFDQyxJQUFSLENBQWEsY0FBYjtBQUNELEdBRkQ7O0FBR0EsUUFBTUMsb0JBQW9CLEdBQUcsQ0FBQyxvQkFBRCxFQUF1QixVQUF2QixDQUE3QjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFZixPQUFPLENBQUNnQixJQUF4QjtBQUFBLDJCQUNFLHFFQUFDLHdEQUFEO0FBQVEsY0FBUSxFQUFDLFFBQWpCO0FBQUEsNkJBQ0UscUVBQUMseURBQUQ7QUFBQSxnQ0FDRSxxRUFBQyw0REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBeUIsbUJBQVMsRUFBRWhCLE9BQU8sQ0FBQ2lCLEtBQTVDO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxnQkFBSSxFQUFDLDhCQURQO0FBRUUsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLDRCQUFjLEVBQUU7QUFBbEMsYUFGVCxDQUdFO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBV0UscUVBQUMsNkRBQUQ7QUFDRSx3QkFBVyxTQURiO0FBRUUsa0JBQVEsZUFBRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZaO0FBR0UsWUFBRSxFQUFDLFNBSEw7QUFJRSxlQUFLLEVBQUVKLG9CQUFvQixDQUFDSyxHQUFyQixDQUF5QixDQUFDVixJQUFELEVBQU9XLEtBQVAsa0JBQzlCLHFFQUFDLDBEQUFEO0FBQUEsc0JBQXVCWDtBQUF2QixhQUFlVyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREs7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLGVBb0JFLHFFQUFDLDZEQUFEO0FBQ0Usd0JBQVcsc0JBRGI7QUFFRSxrQkFBUSxlQUNOLHFFQUFDLHVEQUFEO0FBQU8sd0JBQVksRUFBRWIsUUFBckI7QUFBK0IsaUJBQUssRUFBQyxXQUFyQztBQUFBLG1DQUNFLHFFQUFDLHlFQUFEO0FBQXFCLG1CQUFLLEVBQUU7QUFBRVUscUJBQUssRUFBRTtBQUFUO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKO0FBT0UsWUFBRSxFQUFDLE1BUEw7QUFRRSxlQUFLLEVBQUUsQ0FBQ2QsSUFBSSxJQUFJLEVBQVQsRUFBYWtCLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUJGLEdBQXpCLENBQTZCLENBQUNWLElBQUQsRUFBT1csS0FBUCxLQUFpQjtBQUNuRCxnQ0FDRTtBQUFBLHNDQUNFLHFFQUFDLDBEQUFEO0FBQUEsdUNBQ0UscUVBQUMsa0RBQUQ7QUFDRSx1QkFBSyxFQUFFWCxJQUFJLENBQUNPLEtBRGQ7QUFFRSxxQkFBRyxFQUFFUCxJQUFJLENBQUNhLEtBRlo7QUFHRSwwQkFBUSxFQUFFLE1BQU1kLGtCQUFrQixDQUFDQyxJQUFELENBSHBDO0FBSUUsc0JBQUksRUFBRUE7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQWVBLElBQUksQ0FBQ2MsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQVNHSCxLQUFLLEtBQUssQ0FBQ2pCLElBQUksSUFBSSxFQUFULEVBQWFrQixLQUFiLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCRyxNQUF6QixHQUFrQyxDQUE1QyxpQkFDQyxxRUFBQywwREFBRDtBQUFVLHFCQUFLLEVBQUU7QUFBRUMsZ0NBQWMsRUFBRTtBQUFsQixpQkFBakI7QUFBQSx1Q0FDRSxxRUFBQyw0REFBRDtBQUNFLHVCQUFLLEVBQUMsU0FEUjtBQUVFLHNCQUFJLEVBQUMsY0FGUDtBQUdFLHlCQUFPLEVBQUVkO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBVko7QUFBQSw0QkFERjtBQXFCRCxXQXRCTTtBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyREQ7O0dBekVRZCxNO1VBQ1NHLGdELEVBRUNFLHdELEVBQ0pFLHdELEVBQ0lBLHdEOzs7S0FMVlAsTTtBQTJFTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdExpc3ROZXh0L3Byb2R1Y3RMaXN0LjM4MjdlNjM3ZWIwOTBlOGYyMzQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVcIjtcclxuLy9tYXRlcmlhbCB1aVxyXG5pbXBvcnQge1xyXG4gIEFwcEJhcixcclxuICBUb29sYmFyLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgTWVudUl0ZW0sXHJcbiAgQmFkZ2UsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZVwiO1xyXG5pbXBvcnQgQWRkU2hvcHBpbmdDYXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFNob3BwaW5nQ2FydFwiO1xyXG5pbXBvcnQgRmFkZU1lbnUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVudS9NZW51XCI7XHJcbi8vY3VzdG9tIGNvbXBvbmVudHNcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL0NhcnQvQ2FydFwiO1xyXG5pbXBvcnQgQ3JlYXRlQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J0bi9CdG5cIjtcclxuLy9yb3V0ZVxyXG5pbXBvcnQgaGlzdG9yeSBmcm9tIFwiLi4vLi4vUm91dGUvaGlzdG9yeVwiO1xyXG4vL2FjdGlvbnNcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCAqIGFzIGNhcnRBY3Rpb25zIGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2NhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAvL2FjdGlvbnMgaG9va3NcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuY2FydCk7XHJcbiAgY29uc3QgaXRlbXNOdW0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLml0ZW1zTnVtKTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlSXRlbUZyb21DYXJ0ID0gKGl0ZW0pID0+IHtcclxuICAgIGRpc3BhdGNoKGNhcnRBY3Rpb25zLmRlbGV0ZUl0ZW1JbkNhcnQoaXRlbSkpO1xyXG4gIH07XHJcbiAgY29uc3QgcmVkaXJlY3RUb1Jldmlld1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBoaXN0b3J5LnB1c2goXCIvUmV2aWV3T3JkZXJcIik7XHJcbiAgfTtcclxuICBjb25zdCBwcm9maWxlRHJvcERvd25JdGVtcyA9IFtcIlZpZXcvIEVkaXQgUHJvZmlsZVwiLCBcIlNpZ24gb3V0XCJdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdFwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKFwiL1wiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICA8RmFkZU1lbnVcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICBpY29uVHlwZT17PEFjY291bnRDaXJjbGUgLz59XHJcbiAgICAgICAgICAgIGlkPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgIGl0ZW1zPXtwcm9maWxlRHJvcERvd25JdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9PntpdGVtfTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8RmFkZU1lbnVcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImFkZCB0byBzaG9wcGluZyBjYXJ0XCJcclxuICAgICAgICAgICAgaWNvblR5cGU9e1xyXG4gICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9e2l0ZW1zTnVtfSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEFkZFNob3BwaW5nQ2FydEljb24gc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWQ9XCJjYXJ0XCJcclxuICAgICAgICAgICAgaXRlbXM9eyhjYXJ0IHx8IFtdKS5zbGljZSgwLCAzKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGltZz17aXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiByZW1vdmVJdGVtRnJvbUNhcnQoaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gKGNhcnQgfHwgW10pLnNsaWNlKDAsIDMpLmxlbmd0aCAtIDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlJldmlldyBPcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlZGlyZWN0VG9SZXZpZXdQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=