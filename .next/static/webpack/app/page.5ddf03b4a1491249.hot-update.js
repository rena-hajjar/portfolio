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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Projects_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.css */ \"(app-pages-browser)/./src/app/components/Projects.css\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data/injecto.png */ \"(app-pages-browser)/./src/app/data/injecto.png\");\n/* harmony import */ var _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../data/freshsave.png */ \"(app-pages-browser)/./src/app/data/freshsave.png\");\n/* harmony import */ var _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../data/grfn.jpeg */ \"(app-pages-browser)/./src/app/data/grfn.jpeg\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogTitle/DialogTitle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst projects = [\n    {\n        id: 1,\n        title: \"Fresh Save\",\n        background: _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        id: 2,\n        title: \"Good Reads For Nerds\",\n        background: _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        id: 3,\n        title: \"Med-i Injection Simulator\",\n        background: _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nfunction Projects() {\n    _s();\n    const [isDialogOpen, setIsDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [dialogTitle, setDialogTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function handleClose() {\n        setIsDialogOpen(false);\n    }\n    function handleClick(title) {\n        setIsDialogOpen(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"projects-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"projects-title\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"project-cards-container\",\n                    children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-background\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                        className: \"motion-card\",\n                                        whileHover: {\n                                            scale: 1.2\n                                        },\n                                        style: {\n                                            background: \"pink\",\n                                            backgroundSize: \"cover\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                src: project.background,\n                                                alt: \"project pic\",\n                                                style: {\n                                                    height: 400,\n                                                    width: 400\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"project-card-title\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                className: \"project-more\",\n                                                onClick: handleClick(),\n                                                variant: \"contained\",\n                                                children: \"See More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    className: \"project-dialog\",\n                                    open: isDialogOpen,\n                                    onClose: handleClose,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            children: project.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"About me\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            children: \"GitHub logo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true))\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Projects, \"TkLDU/aKmd0+l7pXeZT01zMw4Gs=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2hCO0FBQ2U7QUFFUjtBQUNZO0FBQ0M7QUFDTDtBQUNxQjtBQUU1RCxNQUFNVSxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFlBQVlSLDJEQUFLQTtJQUNuQjtJQUNBO1FBQ0VNLElBQUk7UUFDSkMsT0FBTztRQUNQQyxZQUFZUCx1REFBSUE7SUFDbEI7SUFDQTtRQUNFSyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsWUFBWVQseURBQU1BO0lBQ3BCO0NBQ0Q7QUFFYyxTQUFTVTs7SUFDdEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFFL0MsU0FBU2tCO1FBQ1BILGdCQUFnQjtJQUNsQjtJQUVBLFNBQVNJLFlBQVlSLEtBQWE7UUFDaENJLGdCQUFnQjtJQUVsQjtJQUVBLHFCQUNFO2tCQUNFLDRFQUFDSztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUtELFdBQVU7OEJBQWlCOzs7Ozs7OEJBQ2pDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWlosU0FBU2MsR0FBRyxDQUFDLENBQUNDLHdCQUNiOzs4Q0FDRSw4REFBQ0o7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNwQixpREFBTUEsQ0FBQ21CLEdBQUc7d0NBQ1RDLFdBQVU7d0NBQ1ZJLFlBQVk7NENBQUVDLE9BQU87d0NBQUk7d0NBQ3pCQyxPQUFPOzRDQUNMZixZQUFZOzRDQUNaZ0IsZ0JBQWdCO3dDQUNsQjs7MERBRUEsOERBQUMxQixrREFBS0E7Z0RBQ0oyQixLQUFLTCxRQUFRWixVQUFVO2dEQUN2QmtCLEtBQUk7Z0RBQ0pILE9BQU87b0RBQUVJLFFBQVE7b0RBQUtDLE9BQU87Z0RBQUk7Ozs7OzswREFFbkMsOERBQUNDO2dEQUFFWixXQUFVOzBEQUFzQkcsUUFBUWIsS0FBSzs7Ozs7OzBEQUNoRCw4REFBQ0wscUdBQU1BO2dEQUNMZSxXQUFVO2dEQUNWYSxTQUFTZjtnREFDVGdCLFNBQVE7MERBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQU1MLDhEQUFDNUIscUdBQU1BO29DQUFDYyxXQUFVO29DQUFpQmUsTUFBTXRCO29DQUFjdUIsU0FBU25COztzREFDOUQsOERBQUNWLHNHQUFXQTtzREFBRWdCLFFBQVFiLEtBQUs7Ozs7Ozt3Q0FBZTtzREFFMUMsOERBQUNMLHFHQUFNQTtzREFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEI7R0F4RHdCTztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzcyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL1Byb2plY3RzLmNzc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVybCB9IGZyb20gXCJpbnNwZWN0b3JcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi8uLi9kYXRhL2luamVjdG8ucG5nXCI7XG5pbXBvcnQgZnJlc2ggZnJvbSBcIi4vLi4vZGF0YS9mcmVzaHNhdmUucG5nXCI7XG5pbXBvcnQgZ3JmbiBmcm9tIFwiLi8uLi9kYXRhL2dyZm4uanBlZ1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBEaWFsb2csIERpYWxvZ1RpdGxlIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJGcmVzaCBTYXZlXCIsXG4gICAgYmFja2dyb3VuZDogZnJlc2gsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJHb29kIFJlYWRzIEZvciBOZXJkc1wiLFxuICAgIGJhY2tncm91bmQ6IGdyZm4sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJNZWQtaSBJbmplY3Rpb24gU2ltdWxhdG9yXCIsXG4gICAgYmFja2dyb3VuZDogaW5qZWN0LFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IFtpc0RpYWxvZ09wZW4sIHNldElzRGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaWFsb2dUaXRsZSwgc2V0RGlhbG9nVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgc2V0SXNEaWFsb2dPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBzZXRJc0RpYWxvZ09wZW4odHJ1ZSk7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3RzLXRpdGxlXCI+UHJvamVjdHM8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkcy1jb250YWluZXJcIj5cbiAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3Rpb24tY2FyZFwiXG4gICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicGlua1wiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmJhY2tncm91bmR9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2plY3QgcGljXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA0MDAsIHdpZHRoOiA0MDAgfX1cbiAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLXRpdGxlXCI+e3Byb2plY3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGljaygpfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2VlIE1vcmVcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPERpYWxvZyBjbGFzc05hbWU9XCJwcm9qZWN0LWRpYWxvZ1wiIG9wZW49e2lzRGlhbG9nT3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT57cHJvamVjdC50aXRsZX08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgIEFib3V0IG1lXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5HaXRIdWIgbG9nbzwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJJbWFnZSIsImluamVjdCIsImZyZXNoIiwiZ3JmbiIsIkJ1dHRvbiIsIkRpYWxvZyIsIkRpYWxvZ1RpdGxlIiwicHJvamVjdHMiLCJpZCIsInRpdGxlIiwiYmFja2dyb3VuZCIsIlByb2plY3RzIiwiaXNEaWFsb2dPcGVuIiwic2V0SXNEaWFsb2dPcGVuIiwiZGlhbG9nVGl0bGUiLCJzZXREaWFsb2dUaXRsZSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwibWFwIiwicHJvamVjdCIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInAiLCJvbkNsaWNrIiwidmFyaWFudCIsIm9wZW4iLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Projects.tsx\n"));

/***/ })

});