"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ResumeButton.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/ResumeButton.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResumeButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ResumeButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResumeButton.css */ \"(app-pages-browser)/./src/app/components/ResumeButton.css\");\n/* harmony import */ var _Download__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Download */ \"(app-pages-browser)/./src/app/components/Download.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\nfunction ResumeButton() {\n    //todo: acc download on click\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"resume-button\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {\n                href: Pdf,\n                without: true,\n                rel: \"noopener noreferrer\",\n                target: \"_blank\",\n                whileHover: {\n                    scale: 1.1\n                },\n                href: \"R\\xe9naHajjar_CV_2024.pdf\",\n                target: \"_blank\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"resume-text\",\n                        children: \"Resume\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renahajjar/portfolio/src/app/components/ResumeButton.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Download__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/renahajjar/portfolio/src/app/components/ResumeButton.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renahajjar/portfolio/src/app/components/ResumeButton.tsx\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/ResumeButton.tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = ResumeButton;\nvar _c;\n$RefreshReg$(_c, \"ResumeButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9SZXN1bWVCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQjtBQUNPO0FBQ0s7QUFHeEIsU0FBU0U7SUFDcEIsNkJBQTZCO0lBRTdCLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDSCxpREFBTUEsQ0FBQ0ksQ0FBQztnQkFDUEMsTUFBTUM7Z0JBQ05DLE9BQU87Z0JBQ1BDLEtBQUk7Z0JBQ0pDLFFBQU87Z0JBQ1BDLFlBQVk7b0JBQUVDLE9BQU87Z0JBQUk7Z0JBQ3pCTixNQUFLO2dCQUNMSSxRQUFPOztrQ0FFUCw4REFBQ1A7d0JBQUlDLFdBQVU7a0NBQWM7Ozs7OztrQ0FDN0IsOERBQUNKLGlEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7S0FyQndCRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUmVzdW1lQnV0dG9uLnRzeD9lOWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9SZXN1bWVCdXR0b24uY3NzJ1xuaW1wb3J0IERvd25sb2FkIGZyb20gJy4vRG93bmxvYWQnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgcGRmIGZyb20gJy4vLi4vZGF0YS9Sw6luYUhhamphcl9DVl8yMDI0LnBkZic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VtZUJ1dHRvbigpIHtcbiAgICAvL3RvZG86IGFjYyBkb3dubG9hZCBvbiBjbGlja1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdW1lLWJ1dHRvblwiPlxuICAgICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgICAgaHJlZj17UGRmfVxuICAgICAgICAgICAgd2l0aG91dFxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICBocmVmPVwiUsOpbmFIYWpqYXJfQ1ZfMjAyNC5wZGZcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS10ZXh0XCI+UmVzdW1lPC9kaXY+XG4gICAgICAgICAgICA8RG93bmxvYWQgLz5cbiAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG59Il0sIm5hbWVzIjpbIkRvd25sb2FkIiwibW90aW9uIiwiUmVzdW1lQnV0dG9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJQZGYiLCJ3aXRob3V0IiwicmVsIiwidGFyZ2V0Iiwid2hpbGVIb3ZlciIsInNjYWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ResumeButton.tsx\n"));

/***/ })

});