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

/***/ "(app-pages-browser)/./src/app/components/Projects.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/Projects.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Projects_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.css */ \"(app-pages-browser)/./src/app/components/Projects.css\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data/injecto.png */ \"(app-pages-browser)/./src/app/data/injecto.png\");\n/* harmony import */ var _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../data/freshsave.png */ \"(app-pages-browser)/./src/app/data/freshsave.png\");\n/* harmony import */ var _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../data/grfn.jpeg */ \"(app-pages-browser)/./src/app/data/grfn.jpeg\");\n/* harmony import */ var _barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst projects = [\n    {\n        id: 1,\n        title: \"Fresh Save\",\n        background: _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        id: 2,\n        title: \"Good Reads For Nerds\",\n        background: _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        id: 3,\n        title: \"Med-i Injection Simulator\",\n        background: _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nfunction Projects() {\n    _s();\n    const [isDialogOpen, setIsDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleClose() {\n        setIsDialogOpen(false);\n    }\n    function handleClick() {\n        setIsDialogOpen(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"projects-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"projects-title\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"project-cards-container\",\n                    children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"card-background\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    whileHover: {\n                                        scale: 1.2\n                                    },\n                                    style: {\n                                        background: \"pink\",\n                                        backgroundSize: \"cover\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            src: project.background,\n                                            alt: \"project pic\",\n                                            style: {\n                                                height: 400,\n                                                width: 400\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"project-card-title\",\n                                            children: project.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            className: \"project-more\",\n                                            onClick: handleClick,\n                                            variant: \"outlined\",\n                                            children: \"See More\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false))\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Projects, \"kdxLf4O7tSmiZi3F0AsxHZT3Vao=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNoQjtBQUNlO0FBRVI7QUFDWTtBQUNDO0FBQ0w7QUFDQTtBQUV2QyxNQUFNUSxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFlBQVlOLDJEQUFLQTtJQUNuQjtJQUNBO1FBQ0VJLElBQUk7UUFDSkMsT0FBTztRQUNQQyxZQUFZTCx1REFBSUE7SUFDbEI7SUFDQTtRQUNFRyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsWUFBWVAseURBQU1BO0lBQ3BCO0NBQ0Q7QUFFYyxTQUFTUTs7SUFDdEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFFakQsU0FBU2M7UUFDUEQsZ0JBQWdCO0lBQ2xCO0lBRUEsU0FBU0U7UUFDUEYsZ0JBQWdCO0lBQ2xCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBS0QsV0FBVTs4QkFBaUI7Ozs7Ozs4QkFDakMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaVixTQUFTWSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2I7c0NBQ0UsNEVBQUNKO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDaEIsaURBQU1BLENBQUNlLEdBQUc7b0NBQ1RLLFlBQVk7d0NBQUVDLE9BQU87b0NBQUk7b0NBQ3pCQyxPQUFPO3dDQUNMYixZQUFZO3dDQUNaYyxnQkFBZ0I7b0NBQ2xCOztzREFFQSw4REFBQ3RCLGtEQUFLQTs0Q0FDSnVCLEtBQUtMLFFBQVFWLFVBQVU7NENBQ3ZCZ0IsS0FBSTs0Q0FDSkgsT0FBTztnREFBRUksUUFBUTtnREFBS0MsT0FBTzs0Q0FBSTs7Ozs7O3NEQUVuQyw4REFBQ0M7NENBQUVaLFdBQVU7c0RBQXNCRyxRQUFRWCxLQUFLOzs7Ozs7c0RBRWhELDhEQUFDSCxrRkFBTUE7NENBQ0xXLFdBQVU7NENBQ1ZhLFNBQVNmOzRDQUNUZ0IsU0FBUTtzREFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYW5CO0dBbER3QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/NzI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vUHJvamVjdHMuY3NzXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXJsIH0gZnJvbSBcImluc3BlY3RvclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gJy4vLi4vZGF0YS9pbmplY3RvLnBuZyc7XG5pbXBvcnQgZnJlc2ggZnJvbSAnLi8uLi9kYXRhL2ZyZXNoc2F2ZS5wbmcnO1xuaW1wb3J0IGdyZm4gZnJvbSAnLi8uLi9kYXRhL2dyZm4uanBlZyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkZyZXNoIFNhdmVcIixcbiAgICBiYWNrZ3JvdW5kOiBmcmVzaCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIkdvb2QgUmVhZHMgRm9yIE5lcmRzXCIsXG4gICAgYmFja2dyb3VuZDogZ3JmbixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIk1lZC1pIEluamVjdGlvbiBTaW11bGF0b3JcIixcbiAgICBiYWNrZ3JvdW5kOiBpbmplY3QsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgY29uc3QgW2lzRGlhbG9nT3Blbiwgc2V0SXNEaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpIHtcbiAgICBzZXRJc0RpYWxvZ09wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgc2V0SXNEaWFsb2dPcGVuKHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1jb250YWluZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdHMtdGl0bGVcIj5Qcm9qZWN0czwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJwaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuYmFja2dyb3VuZH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvamVjdCBwaWNcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDQwMCwgd2lkdGg6IDQwMCB9fVxuICAgICAgICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LWNhcmQtdGl0bGVcIj57cHJvamVjdC50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwicHJvamVjdC1kaXNwbGF5XCI+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1tb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNlZSBNb3JlXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkltYWdlIiwiaW5qZWN0IiwiZnJlc2giLCJncmZuIiwiQnV0dG9uIiwicHJvamVjdHMiLCJpZCIsInRpdGxlIiwiYmFja2dyb3VuZCIsIlByb2plY3RzIiwiaXNEaWFsb2dPcGVuIiwic2V0SXNEaWFsb2dPcGVuIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJtYXAiLCJwcm9qZWN0Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwicCIsIm9uQ2xpY2siLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Projects.tsx\n"));

/***/ })

});