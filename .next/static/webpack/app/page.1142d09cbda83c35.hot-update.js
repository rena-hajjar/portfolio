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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ProjectCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard.css */ \"(app-pages-browser)/./src/app/components/ProjectCard.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst hoverMask = \"linear-gradient(rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0.45)), url(./../data/mereal.png)\";\nconst ProjectCard = (param)=>{\n    let { projectName, aboutProject, githubLink, projectPic } = param;\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"project-card-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                whileHover: {\n                    scale: 1.2\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {\n                        whileHover: {\n                            visibility: \"visible\"\n                        },\n                        children: projectName\n                    }, void 0, false, {\n                        fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"project-card-display\",\n                        onHoverStart: ()=>setIsHovered(true),\n                        onHoverEnd: ()=>setIsHovered(false),\n                        animate: isHovered !== null && isHovered !== void 0 ? isHovered : {}\n                    }, void 0, false, {\n                        fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                lineNumber: 21,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProjectCard, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkI7QUFDYTtBQUNEO0FBU3ZDLE1BQU1HLFlBQ0o7QUFFRixNQUFNQyxjQUE4QjtRQUFDLEVBQUNDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBQzs7SUFDdEYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLHFCQUNFO2tCQUNFLDRFQUFDVTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDVixpREFBTUEsQ0FBQ1MsR0FBRztnQkFBQ0UsWUFBWTtvQkFBRUMsT0FBTztnQkFBSTs7a0NBQ25DLDhEQUFDWixpREFBTUEsQ0FBQ2EsQ0FBQzt3QkFBQ0YsWUFBWTs0QkFBRUcsWUFBWTt3QkFBVTtrQ0FBSVg7Ozs7OztrQ0FDbEQsOERBQUNILGlEQUFNQSxDQUFDUyxHQUFHO3dCQUFDQyxXQUFVO3dCQUNwQkssY0FBYyxJQUFNUCxhQUFhO3dCQUNqQ1EsWUFBWSxJQUFNUixhQUFhO3dCQUMvQlMsU0FDRVYsc0JBQUFBLHVCQUFBQSxZQUFhLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWUvQjtHQTNCTUw7S0FBQUE7QUE2Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb2plY3RDYXJkLnRzeD9mOGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9Qcm9qZWN0Q2FyZC5jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHByb2plY3ROYW1lOiBzdHJpbmcsXG4gIGFib3V0UHJvamVjdDogc3RyaW5nLFxuICBnaXRodWJMaW5rOiBzdHJpbmcsXG4gIHByb2plY3RQaWM6IHN0cmluZ1xufVxuXG5jb25zdCBob3Zlck1hc2sgPVxuICBcImxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMCwgMCwgMC40NSksIHJnYmEoMjU1LCAwLCAwLCAwLjQ1KSksIHVybCguLy4uL2RhdGEvbWVyZWFsLnBuZylcIjtcblxuY29uc3QgUHJvamVjdENhcmQ6UmVhY3QuRkM8UHJvcHM+ID0gKHtwcm9qZWN0TmFtZSwgYWJvdXRQcm9qZWN0LCBnaXRodWJMaW5rLCBwcm9qZWN0UGljfSkgPT4ge1xuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fT5cbiAgICAgICAgICAgIDxtb3Rpb24ucCB3aGlsZUhvdmVyPXt7IHZpc2liaWxpdHk6IFwidmlzaWJsZVwiIH19Pntwcm9qZWN0TmFtZX08L21vdGlvbi5wPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPSdwcm9qZWN0LWNhcmQtZGlzcGxheScgXG4gICAgICAgICAgICAgIG9uSG92ZXJTdGFydD17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpIH1cbiAgICAgICAgICAgICAgb25Ib3ZlckVuZD17KCkgPT4gc2V0SXNIb3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICAgICAgYW5pbWF0ZSA9IHtcbiAgICAgICAgICAgICAgICBpc0hvdmVyZWQgPz8geyB9XG4gICAgICAgICAgICAgIH0+PC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtZGlzcGxheVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtbmFtZVwiPntwcm9qZWN0TmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1hYm91dFwiPnthYm91dFByb2plY3R9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdpdGh1Yi1saW5rXCI+e2dpdGh1Ykxpbmt9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDYXJkOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiaG92ZXJNYXNrIiwiUHJvamVjdENhcmQiLCJwcm9qZWN0TmFtZSIsImFib3V0UHJvamVjdCIsImdpdGh1YkxpbmsiLCJwcm9qZWN0UGljIiwiaXNIb3ZlcmVkIiwic2V0SXNIb3ZlcmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwid2hpbGVIb3ZlciIsInNjYWxlIiwicCIsInZpc2liaWxpdHkiLCJvbkhvdmVyU3RhcnQiLCJvbkhvdmVyRW5kIiwiYW5pbWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectCard.tsx\n"));

/***/ })

});