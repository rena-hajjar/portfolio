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

/***/ "(app-pages-browser)/./src/app/components/ProjectCard.tsx":
/*!********************************************!*\
  !*** ./src/app/components/ProjectCard.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ProjectCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard.css */ \"(app-pages-browser)/./src/app/components/ProjectCard.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\n\n\n\nfunction ProjectCard(param) {\n    let { title, background } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"project-card-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-background\",\n                style: {\n                    backgroundImage: url(background)\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    whileHover: {\n                        scale: 1.2\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"project-card-title\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"project-display\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUNhO0FBQ0Q7QUFHdkMsU0FBU0UsWUFBWSxLQUEwRDtRQUExRCxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBdUMsR0FBMUQ7SUFDbkIscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVO2dCQUFrQkMsT0FBTztvQkFBRUMsaUJBQWdCQyxJQUFJTDtnQkFBWTswQkFDeEUsNEVBQUNILGlEQUFNQSxDQUFDSSxHQUFHO29CQUFDSyxZQUFZO3dCQUFFQyxPQUFPO29CQUFJOztzQ0FDbkMsOERBQUNDOzRCQUFFTixXQUFVO3NDQUFzQkg7Ozs7OztzQ0FDbkMsOERBQUNVOzRCQUFLUCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtLQWJTSjtBQWVULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3g/ZjhhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL1Byb2plY3RDYXJkLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgU3RhdGljSW1hZ2VEYXRhIH0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZnVuY3Rpb24gUHJvamVjdENhcmQoeyB0aXRsZSwgYmFja2dyb3VuZCB9OiB7IHRpdGxlOnN0cmluZzsgYmFja2dyb3VuZDpzdHJpbmcgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJhY2tncm91bmRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6dXJsKGJhY2tncm91bmQpIH19PlxuICAgICAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC10aXRsZVwiPnt0aXRsZX08L3A+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LWRpc3BsYXlcIj48L3NwYW4+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIlByb2plY3RDYXJkIiwidGl0bGUiLCJiYWNrZ3JvdW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ1cmwiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJwIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectCard.tsx\n"));

/***/ })

});