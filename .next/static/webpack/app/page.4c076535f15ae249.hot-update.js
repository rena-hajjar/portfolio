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

/***/ "(app-pages-browser)/./src/app/Pages/Main/HeroTimeline.tsx":
/*!*********************************************!*\
  !*** ./src/app/Pages/Main/HeroTimeline.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeroTimeline; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _HeroTimeline_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeroTimeline.css */ \"(app-pages-browser)/./src/app/Pages/Main/HeroTimeline.css\");\n\n\nfunction HeroTimeline() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"hero-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hero-welcome\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"url(./../../data/image 296.png\",\n                            alt: \"wave\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/HeroTimeline.tsx\",\n                            lineNumber: 9,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"welcome-title\",\n                            children: \"Welcome!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/HeroTimeline.tsx\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/HeroTimeline.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this),\n                \"This website as close as we can connect by static media. I’ll try my best to give you a full impression of who I am.\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hero-image\"\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/HeroTimeline.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/HeroTimeline.tsx\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = HeroTimeline;\nvar _c;\n$RefreshReg$(_c, \"HeroTimeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUGFnZXMvTWFpbi9IZXJvVGltZWxpbmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkI7QUFFWixTQUFTQTtJQUVwQixxQkFDRTtrQkFDRSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlDLEtBQUk7NEJBQWlDQyxLQUFJOzs7Ozs7c0NBQzlDLDhEQUFDSjs0QkFBSUMsV0FBVTtzQ0FBZ0I7Ozs7Ozs7Ozs7OztnQkFDM0I7OEJBR04sOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7O0FBSXpCO0tBZndCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1BhZ2VzL01haW4vSGVyb1RpbWVsaW5lLnRzeD81MmY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9IZXJvVGltZWxpbmUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXJvVGltZWxpbmUoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby13ZWxjb21lXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cInVybCguLy4uLy4uL2RhdGEvaW1hZ2UgMjk2LnBuZ1wiIGFsdD1cIndhdmVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLXRpdGxlXCI+V2VsY29tZSE8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBUaGlzIHdlYnNpdGUgYXMgY2xvc2UgYXMgd2UgY2FuIGNvbm5lY3QgYnkgc3RhdGljIG1lZGlhLiBJ4oCZbGwgdHJ5IG15XG4gICAgICAgICAgYmVzdCB0byBnaXZlIHlvdSBhIGZ1bGwgaW1wcmVzc2lvbiBvZiB3aG8gSSBhbS5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8taW1hZ2VcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJIZXJvVGltZWxpbmUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Pages/Main/HeroTimeline.tsx\n"));

/***/ })

});