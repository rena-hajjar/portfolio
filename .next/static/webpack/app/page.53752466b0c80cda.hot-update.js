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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ProjectCard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard.css */ \"(app-pages-browser)/./src/app/components/ProjectCard.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst hoverMask = \"linear-gradient(rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0.45)), url(./../data/mereal.png)\";\nconst ProjectCard = (param)=>{\n    let { projectName, aboutProject, githubLink, projectPic } = param;\n    _s();\n    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"project-card-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                whileHover: {\n                    scale: 1.2\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {\n                        whileHover: {\n                            visibility: \"visible\"\n                        },\n                        children: projectName\n                    }, void 0, false, {\n                        fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        className: \"project-card-display\",\n                        onHoverStart: ()=>setIsHovered(true),\n                        onHoverEnd: ()=>setIsHovered(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n                lineNumber: 21,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/ProjectCard.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProjectCard, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n_c = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectCard);\nvar _c;\n$RefreshReg$(_c, \"ProjectCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkI7QUFDYTtBQUNEO0FBU3ZDLE1BQU1HLFlBQ0o7QUFFRixNQUFNQyxjQUE4QjtRQUFDLEVBQUNDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBQzs7SUFDdEYsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLHFCQUNFO2tCQUNFLDRFQUFDVTtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDVixpREFBTUEsQ0FBQ1MsR0FBRztnQkFBQ0UsWUFBWTtvQkFBRUMsT0FBTztnQkFBSTs7a0NBQ25DLDhEQUFDWixpREFBTUEsQ0FBQ2EsQ0FBQzt3QkFBQ0YsWUFBWTs0QkFBRUcsWUFBWTt3QkFBVTtrQ0FBSVg7Ozs7OztrQ0FDbEQsOERBQUNILGlEQUFNQSxDQUFDUyxHQUFHO3dCQUFDQyxXQUFVO3dCQUNwQkssY0FBYyxJQUFNUCxhQUFhO3dCQUNqQ1EsWUFBWSxJQUFNUixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjN0M7R0F4Qk1OO0tBQUFBO0FBMEJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3g/ZjhhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vUHJvamVjdENhcmQuY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9qZWN0TmFtZTogc3RyaW5nLFxuICBhYm91dFByb2plY3Q6IHN0cmluZyxcbiAgZ2l0aHViTGluazogc3RyaW5nLFxuICBwcm9qZWN0UGljOiBzdHJpbmdcbn1cblxuY29uc3QgaG92ZXJNYXNrID1cbiAgXCJsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDAsIDAsIDAuNDUpLCByZ2JhKDI1NSwgMCwgMCwgMC40NSkpLCB1cmwoLi8uLi9kYXRhL21lcmVhbC5wbmcpXCI7XG5cbmNvbnN0IFByb2plY3RDYXJkOlJlYWN0LkZDPFByb3BzPiA9ICh7cHJvamVjdE5hbWUsIGFib3V0UHJvamVjdCwgZ2l0aHViTGluaywgcHJvamVjdFBpY30pID0+IHtcbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC1jb250YWluZXJcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX0+XG4gICAgICAgICAgICA8bW90aW9uLnAgd2hpbGVIb3Zlcj17eyB2aXNpYmlsaXR5OiBcInZpc2libGVcIiB9fT57cHJvamVjdE5hbWV9PC9tb3Rpb24ucD5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0ncHJvamVjdC1jYXJkLWRpc3BsYXknIFxuICAgICAgICAgICAgICBvbkhvdmVyU3RhcnQ9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKSB9XG4gICAgICAgICAgICAgIG9uSG92ZXJFbmQ9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9PjwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLWRpc3BsYXlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LW5hbWVcIj57cHJvamVjdE5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtYWJvdXRcIj57YWJvdXRQcm9qZWN0fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaXRodWItbGlua1wiPntnaXRodWJMaW5rfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q2FyZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsImhvdmVyTWFzayIsIlByb2plY3RDYXJkIiwicHJvamVjdE5hbWUiLCJhYm91dFByb2plY3QiLCJnaXRodWJMaW5rIiwicHJvamVjdFBpYyIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImRpdiIsImNsYXNzTmFtZSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInAiLCJ2aXNpYmlsaXR5Iiwib25Ib3ZlclN0YXJ0Iiwib25Ib3ZlckVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectCard.tsx\n"));

/***/ })

});