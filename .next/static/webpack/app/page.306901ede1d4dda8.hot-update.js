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

/***/ "(app-pages-browser)/./src/app/components/NavBar.tsx":
/*!***************************************!*\
  !*** ./src/app/components/NavBar.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _NavBar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.css */ \"(app-pages-browser)/./src/app/components/NavBar.css\");\n\n\nconst navOptions = [\n    {\n        id: \"Experience\",\n        title: \"Experience\"\n    },\n    {\n        id: \"Projects\",\n        title: \"Projects\"\n    },\n    {\n        id: \"Contact\",\n        title: \"Contact\"\n    }\n];\n//TODO: add scroll into views\nfunction NavBar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"navbar-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-logo\",\n                        children: \"RH\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renahajjar/portfolio/src/app/components/NavBar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"navbar-option-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"navbar-option\",\n                                children: \"Experience\"\n                            }, void 0, false, {\n                                fileName: \"/Users/renahajjar/portfolio/src/app/components/NavBar.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: navOptions.map(()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"/Users/renahajjar/portfolio/src/app/components/NavBar.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/renahajjar/portfolio/src/app/components/NavBar.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/renahajjar/portfolio/src/app/components/NavBar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renahajjar/portfolio/src/app/components/NavBar.tsx\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/NavBar.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9OYXZCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDcUI7QUFFckIsTUFBTUEsYUFBYTtJQUNqQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87SUFDVDtJQUNBO1FBQ0VELElBQUk7UUFDSkMsT0FBTztJQUNUO0lBQ0E7UUFDRUQsSUFBSTtRQUNKQyxPQUFPO0lBQ1Q7Q0FDRDtBQUdELDZCQUE2QjtBQUNkLFNBQVNDO0lBRXBCLHFCQUNFO2tCQUNFLDRFQUFDQztzQkFDQyw0RUFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBYzs7Ozs7O2tDQUM3Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBZ0I7Ozs7OzswQ0FDL0IsOERBQUNEOzBDQUNFTCxXQUFXTyxHQUFHLENBQUMsa0JBQ2QsOERBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5CO0tBbkJ3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL05hdkJhci50c3g/YzIyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vTmF2QmFyLmNzcydcblxuY29uc3QgbmF2T3B0aW9ucyA9IFtcbiAge1xuICAgIGlkOiAnRXhwZXJpZW5jZScsXG4gICAgdGl0bGU6ICdFeHBlcmllbmNlJ1xuICB9LCBcbiAge1xuICAgIGlkOiAnUHJvamVjdHMnLFxuICAgIHRpdGxlOiAnUHJvamVjdHMnXG4gIH0sXG4gIHtcbiAgICBpZDogJ0NvbnRhY3QnLFxuICAgIHRpdGxlOiAnQ29udGFjdCdcbiAgfVxuXVxuXG5cbi8vVE9ETzogYWRkIHNjcm9sbCBpbnRvIHZpZXdzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWxvZ29cIj5SSDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItb3B0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1vcHRpb25cIj5FeHBlcmllbmNlPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge25hdk9wdGlvbnMubWFwKCgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC8+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsibmF2T3B0aW9ucyIsImlkIiwidGl0bGUiLCJOYXZCYXIiLCJuYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/NavBar.tsx\n"));

/***/ })

});