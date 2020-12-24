webpackHotUpdate_N_E("pages/UserFormOrderNow/OrderNow",{

/***/ "./node_modules/history/esm/history.js":
false,

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
false,

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
false,

/***/ "./node_modules/react-router/esm/react-router.js":
false,

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
false,

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "./node_modules/value-equal/esm/value-equal.js":
false,

/***/ "./src/pages/UserFormOrderNow/OrderNow.js":
/*!************************************************!*\
  !*** ./src/pages/UserFormOrderNow/OrderNow.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Btn/Btn */ "./src/components/Btn/Btn.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _Form_FormikControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Form/FormikControl */ "./src/pages/Form/FormikControl.js");

var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\ibtikar\\projects\\product_task\\product\\src\\pages\\UserFormOrderNow\\OrderNow.js";







function OrderNow() {
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
    address: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().required("Adress is required"),
    phoneNumber: yup__WEBPACK_IMPORTED_MODULE_5__["number"]().required("phonenumber is required"),
    email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email("Email is invalid").required("Email is required")
  });
  const initialValues = {
    address: "",
    phoneNumber: "",
    email: ""
  };

  const onSubmit = values => {
    console.log("form data", values);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxWidth: "lg",
    style: {
      display: "flex",
      margin: "50px",
      justifyContent: "center"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: onSubmit,
      children: formik => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Form_FormikControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
          control: "input",
          label: "Address",
          name: "address",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Form_FormikControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
          control: "input",
          label: "Phone Number",
          name: "phoneNumber",
          type: "text"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Form_FormikControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
          control: "input",
          label: "Email",
          name: "email",
          type: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Btn_Btn__WEBPACK_IMPORTED_MODULE_3__["default"], {
          type: "submit",
          text: "submit",
          disabled: !(formik.dirty && formik.isValid)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_c = OrderNow;
/* harmony default export */ __webpack_exports__["default"] = (OrderNow);

var _c;

$RefreshReg$(_c, "OrderNow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1VzZXJGb3JtT3JkZXJOb3cvT3JkZXJOb3cuanMiXSwibmFtZXMiOlsiT3JkZXJOb3ciLCJ2YWxpZGF0aW9uU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJhZGRyZXNzIiwicmVxdWlyZWQiLCJwaG9uZU51bWJlciIsImVtYWlsIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsImZvcm1payIsImRpcnR5IiwiaXNWYWxpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLFFBQU1DLGdCQUFnQixHQUFHQywwQ0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQzFDQyxXQUFPLEVBQUVGLDBDQUFBLEdBQWFHLFFBQWIsQ0FBc0Isb0JBQXRCLENBRGlDO0FBRTFDQyxlQUFXLEVBQUVKLDBDQUFBLEdBQWFHLFFBQWIsQ0FBc0IseUJBQXRCLENBRjZCO0FBRzFDRSxTQUFLLEVBQUVMLDBDQUFBLEdBQWFLLEtBQWIsQ0FBbUIsa0JBQW5CLEVBQXVDRixRQUF2QyxDQUFnRCxtQkFBaEQ7QUFIbUMsR0FBbkIsQ0FBekI7QUFLQSxRQUFNRyxhQUFhLEdBQUc7QUFDcEJKLFdBQU8sRUFBRSxFQURXO0FBRXBCRSxlQUFXLEVBQUUsRUFGTztBQUdwQkMsU0FBSyxFQUFFO0FBSGEsR0FBdEI7O0FBS0EsUUFBTUUsUUFBUSxHQUFJQyxNQUFELElBQVk7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJGLE1BQXpCO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRSxxRUFBQyxtRUFBRDtBQUNFLFlBQVEsRUFBQyxJQURYO0FBRUUsU0FBSyxFQUFFO0FBQUVHLGFBQU8sRUFBRSxNQUFYO0FBQW1CQyxZQUFNLEVBQUUsTUFBM0I7QUFBbUNDLG9CQUFjLEVBQUU7QUFBbkQsS0FGVDtBQUFBLDJCQUlFLHFFQUFDLDZDQUFEO0FBQ0UsbUJBQWEsRUFBRVAsYUFEakI7QUFFRSxzQkFBZ0IsRUFBRVAsZ0JBRnBCO0FBR0UsY0FBUSxFQUFFUSxRQUhaO0FBQUEsZ0JBS0lPLE1BQUQsaUJBQ0MscUVBQUMsMkNBQUQ7QUFBQSxnQ0FDRSxxRUFBQywyREFBRDtBQUNFLGlCQUFPLEVBQUMsT0FEVjtBQUVFLGVBQUssRUFBQyxTQUZSO0FBR0UsY0FBSSxFQUFDLFNBSFA7QUFJRSxjQUFJLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0UscUVBQUMsMkRBQUQ7QUFDRSxpQkFBTyxFQUFDLE9BRFY7QUFFRSxlQUFLLEVBQUMsY0FGUjtBQUdFLGNBQUksRUFBQyxhQUhQO0FBSUUsY0FBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQWFFLHFFQUFDLDJEQUFEO0FBQ0UsaUJBQU8sRUFBQyxPQURWO0FBRUUsZUFBSyxFQUFDLE9BRlI7QUFHRSxjQUFJLEVBQUMsT0FIUDtBQUlFLGNBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkYsZUFtQkUscUVBQUMsMkRBQUQ7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0Usa0JBQVEsRUFBRSxFQUFFQSxNQUFNLENBQUNDLEtBQVAsSUFBZ0JELE1BQU0sQ0FBQ0UsT0FBekI7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0NEOztLQXREUWxCLFE7QUF3RE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1VzZXJGb3JtT3JkZXJOb3cvT3JkZXJOb3cuNzA1ODg1ZjQwNjFiZWM4NmE2ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBDcmVhdGVCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnRuL0J0blwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCI7XHJcbmltcG9ydCBGb3JtaWtDb250cm9sIGZyb20gXCIuLi9Gb3JtL0Zvcm1pa0NvbnRyb2xcIjtcclxuZnVuY3Rpb24gT3JkZXJOb3coKSB7XHJcbiAgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBhZGRyZXNzOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJBZHJlc3MgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBwaG9uZU51bWJlcjogWXVwLm51bWJlcigpLnJlcXVpcmVkKFwicGhvbmVudW1iZXIgaXMgcmVxdWlyZWRcIiksXHJcbiAgICBlbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKFwiRW1haWwgaXMgaW52YWxpZFwiKS5yZXF1aXJlZChcIkVtYWlsIGlzIHJlcXVpcmVkXCIpLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbiAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgcGhvbmVOdW1iZXI6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICB9O1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJmb3JtIGRhdGFcIiwgdmFsdWVzKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyXHJcbiAgICAgIG1heFdpZHRoPVwibGdcIlxyXG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luOiBcIjUwcHhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX1cclxuICAgID5cclxuICAgICAgPEZvcm1pa1xyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9XHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYT17dmFsaWRhdGlvblNjaGVtYX1cclxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgID5cclxuICAgICAgICB7KGZvcm1paykgPT4gKFxyXG4gICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgIDxGb3JtaWtDb250cm9sXHJcbiAgICAgICAgICAgICAgY29udHJvbD1cImlucHV0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtaWtDb250cm9sXHJcbiAgICAgICAgICAgICAgY29udHJvbD1cImlucHV0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBob25lTnVtYmVyXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtaWtDb250cm9sXHJcbiAgICAgICAgICAgICAgY29udHJvbD1cImlucHV0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDcmVhdGVCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICB0ZXh0PVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IShmb3JtaWsuZGlydHkgJiYgZm9ybWlrLmlzVmFsaWQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJOb3c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=