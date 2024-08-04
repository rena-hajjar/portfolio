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

/***/ "(app-pages-browser)/./src/app/Pages/Main/Projects.tsx":
/*!*****************************************!*\
  !*** ./src/app/Pages/Main/Projects.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Projects_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.css */ \"(app-pages-browser)/./src/app/Pages/Main/Projects.css\");\n/* harmony import */ var _data_mereal_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../data/mereal.png */ \"(app-pages-browser)/./src/app/data/mereal.png\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _data_injecto_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/injecto.png */ \"(app-pages-browser)/./src/app/data/injecto.png\");\n/* harmony import */ var _data_freshsave_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/freshsave.png */ \"(app-pages-browser)/./src/app/data/freshsave.png\");\n/* harmony import */ var _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../data/grfn.jpeg */ \"(app-pages-browser)/./src/app/data/grfn.jpeg\");\n\n\n\n\n\n\n\n\n\nconst projects = [\n    {\n        id: 1,\n        title: \"Fresh Save\",\n        background: _data_freshsave_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        id: 2,\n        title: \"Good Reads For Nerds\",\n        background: _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        id: 3,\n        title: \"Med-i Hacks Injection Simulator\",\n        background: _data_injecto_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        id: 4,\n        title: \"This website (meta!)\",\n        background: _data_mereal_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        id: 5,\n        title: \"ASL Translator\",\n        background: _data_mereal_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n];\nfunction Projects() {\n    // change the project cards to a map with a list of objects as each card\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"projects-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"projects-title\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/Projects.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"project-cards-container\",\n                    children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-background\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                    whileHover: {\n                                        scale: 1.2\n                                    },\n                                    style: {\n                                        background: \"pink\",\n                                        backgroundSize: \"cover\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            src: project.background,\n                                            alt: \"project pic\",\n                                            style: {\n                                                height: 400,\n                                                width: 400\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/Projects.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"project-card-title\",\n                                            style: {\n                                                zIndex: 10,\n                                                position: \"absolute\",\n                                                color: \"white\"\n                                            },\n                                            children: project.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/Projects.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"project-display\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/Projects.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/Projects.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/Projects.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false))\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/Projects.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/Pages/Main/Projects.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvUGFnZXMvTWFpbi9Qcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0Y7QUFDa0I7QUFDSDtBQUVSO0FBQ2U7QUFDQztBQUNMO0FBRTFDLE1BQU1PLFdBQVc7SUFDZjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsWUFBWUwsMkRBQUtBO0lBQ25CO0lBQ0E7UUFDRUcsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFlBQVlKLHVEQUFJQTtJQUNsQjtJQUNBO1FBQ0VFLElBQUk7UUFDSkMsT0FBTztRQUNQQyxZQUFZTix5REFBTUE7SUFDcEI7SUFDQTtRQUNFSSxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsWUFBWVQsd0RBQUdBO0lBQ2pCO0lBQ0E7UUFDRU8sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFlBQVlULHdEQUFHQTtJQUNqQjtDQUNEO0FBQ2MsU0FBU1U7SUFDdEIsd0VBQXdFO0lBQ3hFLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUtELFdBQVU7OEJBQWlCOzs7Ozs7OEJBQ2pDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWk4sU0FBU1EsR0FBRyxDQUFDLENBQUNDLHdCQUNiO3NDQUNFLDRFQUFDSjtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1gsaURBQU1BLENBQUNVLEdBQUc7b0NBQ1RLLFlBQVk7d0NBQUVDLE9BQU87b0NBQUk7b0NBQ3pCQyxPQUFPO3dDQUNMVCxZQUFZO3dDQUNaVSxnQkFBZ0I7b0NBQ2xCOztzREFFQSw4REFBQ2pCLGtEQUFLQTs0Q0FBQ2tCLEtBQUtMLFFBQVFOLFVBQVU7NENBQUVZLEtBQUk7NENBQWNILE9BQU87Z0RBQUVJLFFBQU87Z0RBQUtDLE9BQU07NENBQUk7Ozs7OztzREFDakYsOERBQUNDOzRDQUFFWixXQUFVOzRDQUFxQk0sT0FBTztnREFBRU8sUUFBTztnREFBSUMsVUFBUztnREFBWUMsT0FBTTs0Q0FBUTtzREFBSVosUUFBUVAsS0FBSzs7Ozs7O3NEQUMxRyw4REFBQ0s7NENBQUtELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDbEM7S0FsRXdCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1BhZ2VzL01haW4vUHJvamVjdHMudHN4PzM0YzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9Qcm9qZWN0cy5jc3NcIjtcbmltcG9ydCBwaWMgZnJvbSBcIi4vLi4vLi4vZGF0YS9tZXJlYWwucG5nXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXJsIH0gZnJvbSBcImluc3BlY3RvclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gJy4vLi4vLi4vZGF0YS9pbmplY3RvLnBuZyc7XG5pbXBvcnQgZnJlc2ggZnJvbSAnLi8uLi8uLi9kYXRhL2ZyZXNoc2F2ZS5wbmcnO1xuaW1wb3J0IGdyZm4gZnJvbSAnLi8uLi8uLi9kYXRhL2dyZm4uanBlZyc7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiRnJlc2ggU2F2ZVwiLFxuICAgIGJhY2tncm91bmQ6IGZyZXNoLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiR29vZCBSZWFkcyBGb3IgTmVyZHNcIixcbiAgICBiYWNrZ3JvdW5kOiBncmZuLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiTWVkLWkgSGFja3MgSW5qZWN0aW9uIFNpbXVsYXRvclwiLFxuICAgIGJhY2tncm91bmQ6IGluamVjdCxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIlRoaXMgd2Vic2l0ZSAobWV0YSEpXCIsXG4gICAgYmFja2dyb3VuZDogcGljLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6IFwiQVNMIFRyYW5zbGF0b3JcIixcbiAgICBiYWNrZ3JvdW5kOiBwaWMsXG4gIH1cbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgLy8gY2hhbmdlIHRoZSBwcm9qZWN0IGNhcmRzIHRvIGEgbWFwIHdpdGggYSBsaXN0IG9mIG9iamVjdHMgYXMgZWFjaCBjYXJkXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3RzLXRpdGxlXCI+UHJvamVjdHM8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkcy1jb250YWluZXJcIj5cbiAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicGlua1wiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9qZWN0LmJhY2tncm91bmR9IGFsdD1cInByb2plY3QgcGljXCIgc3R5bGU9e3sgaGVpZ2h0OjQwMCwgd2lkdGg6NDAwIH19PjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtdGl0bGVcIiBzdHlsZT17eyB6SW5kZXg6MTAsIHBvc2l0aW9uOlwiYWJzb2x1dGVcIiwgY29sb3I6XCJ3aGl0ZVwiIH19Pntwcm9qZWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3QtZGlzcGxheVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLXJvd1wiPlxuICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPXtcIkZvb2RTYXZlXCJ9XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ9XCIuLy4uL2RhdGEvcGVyay1kZW1vLmpwZWdcIlxuICAgICAgICAgICAgPjwvUHJvamVjdENhcmQ+XG4gICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJJbmplY3Rpb24gU2ltdWxhdG9yXCJcbiAgICAgICAgICAgICAgLy8gYWJvdXRQcm9qZWN0PVwiUHJvamVjdCBjYWxsZWQgaW5qZWN0aXNpbSBjb29vb29sXCJcbiAgICAgICAgICAgICAgLy8gZ2l0aHViTGluaz1cImh0dHBzOi8veW91cm1vdGhlci5jYVwiXG4gICAgICAgICAgICAgIC8vIHByb2plY3RQaWM9XCJcIlxuICAgICAgICAgICAgPjwvUHJvamVjdENhcmQ+XG4gICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAgdGl0bGU9XCJNb250eSBQeXRob1wiXG4gICAgICAgICAgICAgIC8vIGFib3V0UHJvamVjdD1cIlByb2plY3QgdGhhdCBpcyB0b3RhbGx5IGluY29tcGxldGUhISEhIVwiXG4gICAgICAgICAgICAgIC8vIGdpdGh1Ykxpbms9XCJodHRwczovL3lvdXJtb3RoZXIuY2FcIlxuICAgICAgICAgICAgICAvLyBwcm9qZWN0UGljPVwiXCJcbiAgICAgICAgICAgID48L1Byb2plY3RDYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLXJvd1wiPlxuICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwiQVNMIFRyYWluaW5nXCJcbiAgICAgICAgICAgICAgLy8gYWJvdXRQcm9qZWN0PVwiUHJvamVjdCBjYWxsZWQgZm9vZHNhdmUgY29vb29vbFwiXG4gICAgICAgICAgICAgIC8vIGdpdGh1Ykxpbms9XCJodHRwczovL3lvdXJtb3RoZXIuY2FcIlxuICAgICAgICAgICAgICAvLyBwcm9qZWN0UGljPVwiXCJcbiAgICAgICAgICAgID48L1Byb2plY3RDYXJkPlxuICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPVwiUmVhZHdpc2UgTm90ZWJvb2sgVUlcIlxuICAgICAgICAgICAgICAvLyBhYm91dFByb2plY3Q9XCJQcm9qZWN0IGNhbGxlZCBpbmplY3Rpc2ltIGNvb29vb2xcIlxuICAgICAgICAgICAgICAvLyBnaXRodWJMaW5rPVwiaHR0cHM6Ly95b3VybW90aGVyLmNhXCJcbiAgICAgICAgICAgICAgLy8gcHJvamVjdFBpYz1cIlwiXG4gICAgICAgICAgICA+PC9Qcm9qZWN0Q2FyZD5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICB0aXRsZT1cIlRoaXMgd2Vic2l0ZSAobWV0YSlcIlxuICAgICAgICAgICAgICAvLyBhYm91dFByb2plY3Q9XCJQcm9qZWN0IHRoYXQgaXMgdG90YWxseSBpbmNvbXBsZXRlISEhISFcIlxuICAgICAgICAgICAgICAvLyBnaXRodWJMaW5rPVwiaHR0cHM6Ly95b3VybW90aGVyLmNhXCJcbiAgICAgICAgICAgICAgLy8gcHJvamVjdFBpYz1cIlwiXG4gICAgICAgICAgICA+PC9Qcm9qZWN0Q2FyZD5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJwaWMiLCJtb3Rpb24iLCJJbWFnZSIsImluamVjdCIsImZyZXNoIiwiZ3JmbiIsInByb2plY3RzIiwiaWQiLCJ0aXRsZSIsImJhY2tncm91bmQiLCJQcm9qZWN0cyIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJtYXAiLCJwcm9qZWN0Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwicCIsInpJbmRleCIsInBvc2l0aW9uIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Pages/Main/Projects.tsx\n"));

/***/ })

});