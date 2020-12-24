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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);



var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\containers\\headerNext\\Header.js",
    _s = $RefreshSig$();




 //material ui




 //custom components


 //route

 //actions





function Header(props) {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();
  const classes = Object(_style__WEBPACK_IMPORTED_MODULE_4__["useStyles"])(); //actions hooks

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"])();
  const cart = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(state => state.cartReducer.cart);
  const itemsNum = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(state => state.cartReducer.itemsNum);

  const removeItemFromCart = item => {
    dispatch(_redux_actions_cart__WEBPACK_IMPORTED_MODULE_13__["deleteItemInCart"](item));
  };

  const redirectToReviewPage = () => {
    router.push(`/ReviewOrder`);
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
            lineNumber: 45,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
          "aria-label": "profile",
          iconType: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 23
          }, this),
          id: "profile",
          items: profileDropDownItems.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
            children: item
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
              lineNumber: 67,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
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
                  lineNumber: 75,
                  columnNumber: 21
                }, this)
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
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
                  lineNumber: 84,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 21
              }, this)]
            }, void 0, true);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(Header, "Ge4OkmQc7Pij35Cyc5ei+T7+Shk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"], _style__WEBPACK_IMPORTED_MODULE_4__["useStyles"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvaGVhZGVyTmV4dC9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhcnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY2FydFJlZHVjZXIiLCJpdGVtc051bSIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsIml0ZW0iLCJjYXJ0QWN0aW9ucyIsInJlZGlyZWN0VG9SZXZpZXdQYWdlIiwicHVzaCIsInByb2ZpbGVEcm9wRG93bkl0ZW1zIiwicm9vdCIsInRpdGxlIiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcCIsImluZGV4Iiwic2xpY2UiLCJpbWFnZSIsImlkIiwibGVuZ3RoIiwianVzdGlmeUNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBT0E7QUFDQTtDQUVBOztBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQ3JCLFFBQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdDLHdEQUFTLEVBQXpCLENBRnFCLENBR3JCOztBQUNBLFFBQU1DLFFBQVEsR0FBR0MsZ0VBQVcsRUFBNUI7QUFDQSxRQUFNQyxJQUFJLEdBQUdDLGdFQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCSCxJQUE5QixDQUF4QjtBQUNBLFFBQU1JLFFBQVEsR0FBR0gsZ0VBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLFdBQU4sQ0FBa0JDLFFBQTlCLENBQTVCOztBQUVBLFFBQU1DLGtCQUFrQixHQUFJQyxJQUFELElB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QUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMkREOztHQTFFUWhCLE07VUFDUUcsc0QsRUFDQ0UsZ0QsRUFFQ0Usd0QsRUFDSkUsd0QsRUFDSUEsd0Q7OztLQU5WVCxNO0FBNEVNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0TGlzdE5leHQvcHJvZHVjdExpc3QuNDg1ODQyNzQ2Yzk3MDc4Y2ZkYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCIuL0hlYWRlci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZVwiO1xyXG4vL21hdGVyaWFsIHVpXHJcbmltcG9ydCB7XHJcbiAgQXBwQmFyLFxyXG4gIFRvb2xiYXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBNZW51SXRlbSxcclxuICBCYWRnZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEFjY291bnRDaXJjbGUgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlXCI7XHJcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkU2hvcHBpbmdDYXJ0XCI7XHJcbmltcG9ydCBGYWRlTWVudSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZW51L01lbnVcIjtcclxuLy9jdXN0b20gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vQ2FydC9DYXJ0XCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG4vL3JvdXRlXHJcbmltcG9ydCBoaXN0b3J5IGZyb20gXCIuLi8uLi9Sb3V0ZS9oaXN0b3J5XCI7XHJcbi8vYWN0aW9uc1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0ICogYXMgY2FydEFjdGlvbnMgZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIC8vYWN0aW9ucyBob29rc1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjYXJ0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlci5jYXJ0KTtcclxuICBjb25zdCBpdGVtc051bSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydFJlZHVjZXIuaXRlbXNOdW0pO1xyXG5cclxuICBjb25zdCByZW1vdmVJdGVtRnJvbUNhcnQgPSAoaXRlbSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goY2FydEFjdGlvbnMuZGVsZXRlSXRlbUluQ2FydChpdGVtKSk7XHJcbiAgfTtcclxuICBjb25zdCByZWRpcmVjdFRvUmV2aWV3UGFnZSA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvUmV2aWV3T3JkZXJgKTtcclxuICB9O1xyXG4gIGNvbnN0IHByb2ZpbGVEcm9wRG93bkl0ZW1zID0gW1wiVmlldy8gRWRpdCBQcm9maWxlXCIsIFwiU2lnbiBvdXRcIl07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvcHJvZHVjdExpc3ROZXh0L3Byb2R1Y3RMaXN0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goXCIvXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHJvZHVjdHNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgIDxGYWRlTWVudVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJvZmlsZVwiXHJcbiAgICAgICAgICAgIGljb25UeXBlPXs8QWNjb3VudENpcmNsZSAvPn1cclxuICAgICAgICAgICAgaWQ9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgaXRlbXM9e3Byb2ZpbGVEcm9wRG93bkl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0+e2l0ZW19PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGYWRlTWVudVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWRkIHRvIHNob3BwaW5nIGNhcnRcIlxyXG4gICAgICAgICAgICBpY29uVHlwZT17XHJcbiAgICAgICAgICAgICAgPEJhZGdlIGJhZGdlQ29udGVudD17aXRlbXNOdW19IGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8QWRkU2hvcHBpbmdDYXJ0SWNvbiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZD1cImNhcnRcIlxyXG4gICAgICAgICAgICBpdGVtcz17KGNhcnQgfHwgW10pLnNsaWNlKDAsIDMpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcnRcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW1nPXtpdGVtLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHJlbW92ZUl0ZW1Gcm9tQ2FydChpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAge2luZGV4ID09PSAoY2FydCB8fCBbXSkuc2xpY2UoMCwgMykubGVuZ3RoIC0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiUmV2aWV3IE9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVkaXJlY3RUb1Jldmlld1BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==