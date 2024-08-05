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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Projects_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.css */ \"(app-pages-browser)/./src/app/components/Projects.css\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data/injecto.png */ \"(app-pages-browser)/./src/app/data/injecto.png\");\n/* harmony import */ var _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../data/freshsave.png */ \"(app-pages-browser)/./src/app/data/freshsave.png\");\n/* harmony import */ var _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../data/grfn.jpeg */ \"(app-pages-browser)/./src/app/data/grfn.jpeg\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogTitle/DialogTitle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst projects = [\n    {\n        id: 1,\n        title: \"Fresh Save\",\n        about: \"This is my project\",\n        ghlink: \"github.com/rena-hajjar/portfolio\",\n        background: _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        id: 2,\n        title: \"Good Reads For Nerds\",\n        about: \"This is my project\",\n        ghlink: \"github.com/rena-hajjar/portfolio\",\n        background: _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        id: 3,\n        title: \"Med-i Injection Simulator\",\n        about: \"This is my project\",\n        ghlink: \"github.com/rena-hajjar/portfolio\",\n        background: _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nfunction Projects() {\n    _s();\n    const [isDialogOpen, setIsDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [dialogTitle, setDialogTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function handleClose() {\n        setIsDialogOpen(false);\n    }\n    function handleClick(title, about, ghLink) {\n        setIsDialogOpen(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"projects-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"projects-title\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"project-cards-container\",\n                    children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-background\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                        className: \"motion-card\",\n                                        whileHover: {\n                                            scale: 1.2\n                                        },\n                                        style: {\n                                            background: \"pink\",\n                                            backgroundSize: \"cover\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                src: project.background,\n                                                alt: \"project pic\",\n                                                style: {\n                                                    height: 400,\n                                                    width: 400\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"project-card-title\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                className: \"project-more\",\n                                                onClick: handleClick(project.title, project.about, project.ghlink),\n                                                variant: \"contained\",\n                                                children: \"See More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    className: \"project-dialog\",\n                                    open: isDialogOpen,\n                                    onClose: handleClose,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            children: project.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"About me\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            children: \"GitHub logo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true))\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Projects, \"TkLDU/aKmd0+l7pXeZT01zMw4Gs=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2hCO0FBQ2U7QUFFUjtBQUNZO0FBQ0M7QUFDTDtBQUNxQjtBQUU1RCxNQUFNVSxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxZQUFZViwyREFBS0E7SUFDbkI7SUFDQTtRQUNFTSxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFlBQVlULHVEQUFJQTtJQUNsQjtJQUNBO1FBQ0VLLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsWUFBWVgseURBQU1BO0lBQ3BCO0NBQ0Q7QUFFYyxTQUFTWTs7SUFDdEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2tCLGFBQWFDLGVBQWUsR0FBR25CLCtDQUFRQSxDQUFDO0lBRS9DLFNBQVNvQjtRQUNQSCxnQkFBZ0I7SUFDbEI7SUFFQSxTQUFTSSxZQUFZVixLQUFhLEVBQUVDLEtBQWEsRUFBRVUsTUFBYztRQUMvREwsZ0JBQWdCO0lBRWxCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNNO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBS0QsV0FBVTs4QkFBaUI7Ozs7Ozs4QkFDakMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaZixTQUFTaUIsR0FBRyxDQUFDLENBQUNDLHdCQUNiOzs4Q0FDRSw4REFBQ0o7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUN2QixpREFBTUEsQ0FBQ3NCLEdBQUc7d0NBQ1RDLFdBQVU7d0NBQ1ZJLFlBQVk7NENBQUVDLE9BQU87d0NBQUk7d0NBQ3pCQyxPQUFPOzRDQUNMaEIsWUFBWTs0Q0FDWmlCLGdCQUFnQjt3Q0FDbEI7OzBEQUVBLDhEQUFDN0Isa0RBQUtBO2dEQUNKOEIsS0FBS0wsUUFBUWIsVUFBVTtnREFDdkJtQixLQUFJO2dEQUNKSCxPQUFPO29EQUFFSSxRQUFRO29EQUFLQyxPQUFPO2dEQUFJOzs7Ozs7MERBRW5DLDhEQUFDQztnREFBRVosV0FBVTswREFBc0JHLFFBQVFoQixLQUFLOzs7Ozs7MERBQ2hELDhEQUFDTCxxR0FBTUE7Z0RBQ0xrQixXQUFVO2dEQUNWYSxTQUFTaEIsWUFBWU0sUUFBUWhCLEtBQUssRUFBRWdCLFFBQVFmLEtBQUssRUFBRWUsUUFBUWQsTUFBTTtnREFDakV5QixTQUFROzBEQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FNTCw4REFBQy9CLHFHQUFNQTtvQ0FBQ2lCLFdBQVU7b0NBQWlCZSxNQUFNdkI7b0NBQWN3QixTQUFTcEI7O3NEQUM5RCw4REFBQ1osc0dBQVdBO3NEQUFFbUIsUUFBUWhCLEtBQUs7Ozs7Ozt3Q0FBZTtzREFFMUMsOERBQUNMLHFHQUFNQTtzREFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEI7R0F4RHdCUztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdHMudHN4PzcyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL1Byb2plY3RzLmNzc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVybCB9IGZyb20gXCJpbnNwZWN0b3JcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi8uLi9kYXRhL2luamVjdG8ucG5nXCI7XG5pbXBvcnQgZnJlc2ggZnJvbSBcIi4vLi4vZGF0YS9mcmVzaHNhdmUucG5nXCI7XG5pbXBvcnQgZ3JmbiBmcm9tIFwiLi8uLi9kYXRhL2dyZm4uanBlZ1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBEaWFsb2csIERpYWxvZ1RpdGxlIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJGcmVzaCBTYXZlXCIsXG4gICAgYWJvdXQ6IFwiVGhpcyBpcyBteSBwcm9qZWN0XCIsXG4gICAgZ2hsaW5rOiBcImdpdGh1Yi5jb20vcmVuYS1oYWpqYXIvcG9ydGZvbGlvXCIsXG4gICAgYmFja2dyb3VuZDogZnJlc2gsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJHb29kIFJlYWRzIEZvciBOZXJkc1wiLFxuICAgIGFib3V0OiBcIlRoaXMgaXMgbXkgcHJvamVjdFwiLFxuICAgIGdobGluazogXCJnaXRodWIuY29tL3JlbmEtaGFqamFyL3BvcnRmb2xpb1wiLFxuICAgIGJhY2tncm91bmQ6IGdyZm4sXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJNZWQtaSBJbmplY3Rpb24gU2ltdWxhdG9yXCIsXG4gICAgYWJvdXQ6IFwiVGhpcyBpcyBteSBwcm9qZWN0XCIsXG4gICAgZ2hsaW5rOiBcImdpdGh1Yi5jb20vcmVuYS1oYWpqYXIvcG9ydGZvbGlvXCIsXG4gICAgYmFja2dyb3VuZDogaW5qZWN0LFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IFtpc0RpYWxvZ09wZW4sIHNldElzRGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaWFsb2dUaXRsZSwgc2V0RGlhbG9nVGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgc2V0SXNEaWFsb2dPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKHRpdGxlOiBzdHJpbmcsIGFib3V0OiBzdHJpbmcsIGdoTGluazogc3RyaW5nKSB7XG4gICAgc2V0SXNEaWFsb2dPcGVuKHRydWUpO1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLWNvbnRhaW5lclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0cy10aXRsZVwiPlByb2plY3RzPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW90aW9uLWNhcmRcIlxuICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInBpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5iYWNrZ3JvdW5kfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9qZWN0IHBpY1wiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNDAwLCB3aWR0aDogNDAwIH19XG4gICAgICAgICAgICAgICAgICA+PC9JbWFnZT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZC10aXRsZVwiPntwcm9qZWN0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdC1tb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2socHJvamVjdC50aXRsZSwgcHJvamVjdC5hYm91dCwgcHJvamVjdC5naGxpbmspfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2VlIE1vcmVcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPERpYWxvZyBjbGFzc05hbWU9XCJwcm9qZWN0LWRpYWxvZ1wiIG9wZW49e2lzRGlhbG9nT3Blbn0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT57cHJvamVjdC50aXRsZX08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgIEFib3V0IG1lXG4gICAgICAgICAgICAgICAgPEJ1dHRvbj5HaXRIdWIgbG9nbzwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJJbWFnZSIsImluamVjdCIsImZyZXNoIiwiZ3JmbiIsIkJ1dHRvbiIsIkRpYWxvZyIsIkRpYWxvZ1RpdGxlIiwicHJvamVjdHMiLCJpZCIsInRpdGxlIiwiYWJvdXQiLCJnaGxpbmsiLCJiYWNrZ3JvdW5kIiwiUHJvamVjdHMiLCJpc0RpYWxvZ09wZW4iLCJzZXRJc0RpYWxvZ09wZW4iLCJkaWFsb2dUaXRsZSIsInNldERpYWxvZ1RpdGxlIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsImdoTGluayIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJtYXAiLCJwcm9qZWN0Iiwid2hpbGVIb3ZlciIsInNjYWxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwicCIsIm9uQ2xpY2siLCJ2YXJpYW50Iiwib3BlbiIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Projects.tsx\n"));

/***/ })

});