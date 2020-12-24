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
    _Route_history__WEBPACK_IMPORTED_MODULE_11__["default"].push("/ReviewOrder");
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
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
          "aria-label": "profile",
          iconType: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 23
          }, this),
          id: "profile",
          items: profileDropDownItems.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
            children: item
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
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
              lineNumber: 68,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
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
                  lineNumber: 76,
                  columnNumber: 21
                }, this)
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
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
                  lineNumber: 85,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, this)]
            }, void 0, true);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvaGVhZGVyTmV4dC9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhcnQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY2FydFJlZHVjZXIiLCJpdGVtc051bSIsInJlbW92ZUl0ZW1Gcm9tQ2FydCIsIml0ZW0iLCJjYXJ0QWN0aW9ucyIsInJlZGlyZWN0VG9SZXZpZXdQYWdlIiwiaGlzdG9yeSIsInB1c2giLCJwcm9maWxlRHJvcERvd25JdGVtcyIsInJvb3QiLCJ0aXRsZSIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJtYXAiLCJpbmRleCIsInNsaWNlIiwiaW1hZ2UiLCJpZCIsImxlbmd0aCIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQU9BO0FBQ0E7Q0FFQTs7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNyQixRQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyx3REFBUyxFQUF6QixDQUZxQixDQUdyQjs7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLGdFQUFXLEVBQTVCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxnRUFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsV0FBTixDQUFrQkgsSUFBOUIsQ0FBeEI7QUFDQSxRQUFNSSxRQUFRLEdBQUdILGdFQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxXQUFOLENBQWtCQyxRQUE5QixDQUE1Qjs7QUFFQSxRQUFNQyxrQkFBa0IsR0FB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QTtBQUFBO0FBQUEsc0JBVko7QUFBQSw0QkFERjtBQXFCRCxXQXRCTTtBQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyREQ7O0dBM0VRaEIsTTtVQUNRRyxzRCxFQUNDRSxnRCxFQUVDRSx3RCxFQUNKRSx3RCxFQUNJQSx3RDs7O0tBTlZULE07QUE2RU1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RMaXN0TmV4dC9wcm9kdWN0TGlzdC5lMzA2NjY3NmU2Y2Q3M2EwNzZjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBcIi4vSGVhZGVyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gXCIuL3N0eWxlXCI7XHJcbi8vbWF0ZXJpYWwgdWlcclxuaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgVG9vbGJhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIE1lbnVJdGVtLFxyXG4gIEJhZGdlLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIjtcclxuaW1wb3J0IEFkZFNob3BwaW5nQ2FydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BZGRTaG9wcGluZ0NhcnRcIjtcclxuaW1wb3J0IEZhZGVNZW51IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lbnUvTWVudVwiO1xyXG4vL2N1c3RvbSBjb21wb25lbnRzXHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9DYXJ0L0NhcnRcIjtcclxuaW1wb3J0IENyZWF0ZUJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdG4vQnRuXCI7XHJcbi8vcm91dGVcclxuaW1wb3J0IGhpc3RvcnkgZnJvbSBcIi4uLy4uL1JvdXRlL2hpc3RvcnlcIjtcclxuLy9hY3Rpb25zXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBjYXJ0QWN0aW9ucyBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5mdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgLy9hY3Rpb25zIGhvb2tzXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyLmNhcnQpO1xyXG4gIGNvbnN0IGl0ZW1zTnVtID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlci5pdGVtc051bSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUl0ZW1Gcm9tQ2FydCA9IChpdGVtKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjYXJ0QWN0aW9ucy5kZWxldGVJdGVtSW5DYXJ0KGl0ZW0pKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlZGlyZWN0VG9SZXZpZXdQYWdlID0gKCkgPT4ge1xyXG4gICAgaGlzdG9yeS5wdXNoKFwiL1Jldmlld09yZGVyXCIpO1xyXG4gICAgcm91dGVyLnB1c2goYC9SZXZpZXdPcmRlcmApO1xyXG4gIH07XHJcbiAgY29uc3QgcHJvZmlsZURyb3BEb3duSXRlbXMgPSBbXCJWaWV3LyBFZGl0IFByb2ZpbGVcIiwgXCJTaWduIG91dFwiXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0TGlzdE5leHQvcHJvZHVjdExpc3RcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaChcIi9cIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgPEZhZGVNZW51XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwcm9maWxlXCJcclxuICAgICAgICAgICAgaWNvblR5cGU9ezxBY2NvdW50Q2lyY2xlIC8+fVxyXG4gICAgICAgICAgICBpZD1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICBpdGVtcz17cHJvZmlsZURyb3BEb3duSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fT57aXRlbX08L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZhZGVNZW51XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJhZGQgdG8gc2hvcHBpbmcgY2FydFwiXHJcbiAgICAgICAgICAgIGljb25UeXBlPXtcclxuICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXtpdGVtc051bX0gY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIDxBZGRTaG9wcGluZ0NhcnRJY29uIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gLz5cclxuICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlkPVwiY2FydFwiXHJcbiAgICAgICAgICAgIGl0ZW1zPXsoY2FydCB8fCBbXSkuc2xpY2UoMCwgMykubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FydFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbWc9e2l0ZW0uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gcmVtb3ZlSXRlbUZyb21DYXJ0KGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICB7aW5kZXggPT09IChjYXJ0IHx8IFtdKS5zbGljZSgwLCAzKS5sZW5ndGggLSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJSZXZpZXcgT3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyZWRpcmVjdFRvUmV2aWV3UGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9