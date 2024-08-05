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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Projects_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.css */ \"(app-pages-browser)/./src/app/components/Projects.css\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data/injecto.png */ \"(app-pages-browser)/./src/app/data/injecto.png\");\n/* harmony import */ var _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../data/freshsave.png */ \"(app-pages-browser)/./src/app/data/freshsave.png\");\n/* harmony import */ var _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../data/grfn.jpeg */ \"(app-pages-browser)/./src/app/data/grfn.jpeg\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogTitle/DialogTitle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst projects = [\n    {\n        id: 1,\n        title: \"Fresh Save\",\n        background: _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        id: 2,\n        title: \"Good Reads For Nerds\",\n        background: _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        id: 3,\n        title: \"Med-i Injection Simulator\",\n        background: _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nfunction Projects() {\n    _s();\n    const [isDialogOpen, setIsDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleClose() {\n        setIsDialogOpen(false);\n    }\n    function handleClick() {\n        setIsDialogOpen(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"projects-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"projects-title\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"project-cards-container\",\n                    children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-background\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                        whileHover: {\n                                            scale: 1.2\n                                        },\n                                        style: {\n                                            background: \"pink\",\n                                            backgroundSize: \"cover\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                src: project.background,\n                                                alt: \"project pic\",\n                                                style: {\n                                                    height: 400,\n                                                    width: 400\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"project-card-title\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                className: \"project-more\",\n                                                onClick: handleClick,\n                                                variant: \"outlined\",\n                                                children: \"See More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    open: isDialogOpen,\n                                    onClose: handleClose,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            children: project.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            children: \"GitHub logo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true))\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Projects, \"kdxLf4O7tSmiZi3F0AsxHZT3Vao=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2hCO0FBQ2U7QUFFUjtBQUNZO0FBQ0M7QUFDTDtBQUNxQjtBQUU1RCxNQUFNVSxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFlBQVlSLDJEQUFLQTtJQUNuQjtJQUNBO1FBQ0VNLElBQUk7UUFDSkMsT0FBTztRQUNQQyxZQUFZUCx1REFBSUE7SUFDbEI7SUFDQTtRQUNFSyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsWUFBWVQseURBQU1BO0lBQ3BCO0NBQ0Q7QUFFYyxTQUFTVTs7SUFDdEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUM7SUFFakQsU0FBU2dCO1FBQ1BELGdCQUFnQjtJQUNsQjtJQUVBLFNBQVNFO1FBQ1BGLGdCQUFnQjtJQUNsQjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDRztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUtELFdBQVU7OEJBQWlCOzs7Ozs7OEJBQ2pDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWlYsU0FBU1ksR0FBRyxDQUFDLENBQUNDLHdCQUNiOzs4Q0FDRSw4REFBQ0o7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNsQixpREFBTUEsQ0FBQ2lCLEdBQUc7d0NBQ1RLLFlBQVk7NENBQUVDLE9BQU87d0NBQUk7d0NBQ3pCQyxPQUFPOzRDQUNMYixZQUFZOzRDQUNaYyxnQkFBZ0I7d0NBQ2xCOzswREFFQSw4REFBQ3hCLGtEQUFLQTtnREFDSnlCLEtBQUtMLFFBQVFWLFVBQVU7Z0RBQ3ZCZ0IsS0FBSTtnREFDSkgsT0FBTztvREFBRUksUUFBUTtvREFBS0MsT0FBTztnREFBSTs7Ozs7OzBEQUVuQyw4REFBQ0M7Z0RBQUVaLFdBQVU7MERBQXNCRyxRQUFRWCxLQUFLOzs7Ozs7MERBR2hELDhEQUFDTCxxR0FBTUE7Z0RBQ0xhLFdBQVU7Z0RBQ1ZhLFNBQVNmO2dEQUNUZ0IsU0FBUTswREFDVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBTUwsOERBQUMxQixxR0FBTUE7b0NBQUMyQixNQUFNcEI7b0NBQWNxQixTQUFTbkI7O3NEQUNuQyw4REFBQ1Isc0dBQVdBO3NEQUFFYyxRQUFRWCxLQUFLOzs7Ozs7c0RBQzNCLDhEQUFDTCxxR0FBTUE7c0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXhCO0dBdER3Qk87S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb2plY3RzLnRzeD83MjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9Qcm9qZWN0cy5jc3NcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1cmwgfSBmcm9tIFwiaW5zcGVjdG9yXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBpbmplY3QgZnJvbSAnLi8uLi9kYXRhL2luamVjdG8ucG5nJztcbmltcG9ydCBmcmVzaCBmcm9tICcuLy4uL2RhdGEvZnJlc2hzYXZlLnBuZyc7XG5pbXBvcnQgZ3JmbiBmcm9tICcuLy4uL2RhdGEvZ3Jmbi5qcGVnJztcbmltcG9ydCB7IEJ1dHRvbiwgRGlhbG9nLCBEaWFsb2dUaXRsZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiRnJlc2ggU2F2ZVwiLFxuICAgIGJhY2tncm91bmQ6IGZyZXNoLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiR29vZCBSZWFkcyBGb3IgTmVyZHNcIixcbiAgICBiYWNrZ3JvdW5kOiBncmZuLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiTWVkLWkgSW5qZWN0aW9uIFNpbXVsYXRvclwiLFxuICAgIGJhY2tncm91bmQ6IGluamVjdCxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xuICBjb25zdCBbaXNEaWFsb2dPcGVuLCBzZXRJc0RpYWxvZ09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xuICAgIHNldElzRGlhbG9nT3BlbihmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBzZXRJc0RpYWxvZ09wZW4odHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0cy10aXRsZVwiPlByb2plY3RzPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInBpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9qZWN0IHBpY1wiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNDAwLCB3aWR0aDogNDAwIH19XG4gICAgICAgICAgICAgICAgICA+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC10aXRsZVwiPntwcm9qZWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LWRpc3BsYXlcIj48L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3QtbW9yZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZWUgTW9yZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8RGlhbG9nIG9wZW49e2lzRGlhbG9nT3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT57cHJvamVjdC50aXRsZX08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgIDxCdXR0b24+R2l0SHViIGxvZ288L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiSW1hZ2UiLCJpbmplY3QiLCJmcmVzaCIsImdyZm4iLCJCdXR0b24iLCJEaWFsb2ciLCJEaWFsb2dUaXRsZSIsInByb2plY3RzIiwiaWQiLCJ0aXRsZSIsImJhY2tncm91bmQiLCJQcm9qZWN0cyIsImlzRGlhbG9nT3BlbiIsInNldElzRGlhbG9nT3BlbiIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwibWFwIiwicHJvamVjdCIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInAiLCJvbkNsaWNrIiwidmFyaWFudCIsIm9wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Projects.tsx\n"));

/***/ })

});