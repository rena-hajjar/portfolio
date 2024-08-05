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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Projects_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.css */ \"(app-pages-browser)/./src/app/components/Projects.css\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../data/injecto.png */ \"(app-pages-browser)/./src/app/data/injecto.png\");\n/* harmony import */ var _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../data/freshsave.png */ \"(app-pages-browser)/./src/app/data/freshsave.png\");\n/* harmony import */ var _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../data/grfn.jpeg */ \"(app-pages-browser)/./src/app/data/grfn.jpeg\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogTitle!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogTitle/DialogTitle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst projects = [\n    {\n        id: 1,\n        title: \"Fresh Save\",\n        about: \"This is my project\",\n        ghLink: \"github.com/rena-hajjar/portfolio\",\n        background: _data_freshsave_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    },\n    {\n        id: 2,\n        title: \"Good Reads For Nerds\",\n        about: \"This is my project\",\n        ghLink: \"github.com/rena-hajjar/portfolio\",\n        background: _data_grfn_jpeg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        id: 3,\n        title: \"Med-i Injection Simulator\",\n        about: \"This is my project\",\n        ghlink: \"github.com/rena-hajjar/portfolio\",\n        background: _data_injecto_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }\n];\nfunction Projects() {\n    _s();\n    const [isDialogOpen, setIsDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [dialogTitle, setDialogTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function handleClose() {\n        setIsDialogOpen(false);\n    }\n    function handleClick(title, about, ghLink) {\n        setIsDialogOpen(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"projects-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"projects-title\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"project-cards-container\",\n                    children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-background\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                        className: \"motion-card\",\n                                        whileHover: {\n                                            scale: 1.2\n                                        },\n                                        style: {\n                                            background: \"pink\",\n                                            backgroundSize: \"cover\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                src: project.background,\n                                                alt: \"project pic\",\n                                                style: {\n                                                    height: 400,\n                                                    width: 400\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"project-card-title\",\n                                                children: project.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                className: \"project-more\",\n                                                onClick: handleClick(project.title, project.about, project.ghlink),\n                                                variant: \"contained\",\n                                                children: \"See More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    className: \"project-dialog\",\n                                    open: isDialogOpen,\n                                    onClose: handleClose,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            children: project.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"About me\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogTitle_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            children: \"GitHub logo\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true))\n                }, void 0, false, {\n                    fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renahajjar/portfolio/src/app/components/Projects.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Projects, \"TkLDU/aKmd0+l7pXeZT01zMw4Gs=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2hCO0FBQ2U7QUFFUjtBQUNZO0FBQ0M7QUFDTDtBQUNxQjtBQUU1RCxNQUFNVSxXQUFXO0lBQ2Y7UUFDRUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxZQUFZViwyREFBS0E7SUFDbkI7SUFDQTtRQUNFTSxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFlBQVlULHVEQUFJQTtJQUNsQjtJQUNBO1FBQ0VLLElBQUk7UUFDSkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BHLFFBQVE7UUFDUkQsWUFBWVgseURBQU1BO0lBQ3BCO0NBQ0Q7QUFFYyxTQUFTYTs7SUFDdEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ21CLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBRS9DLFNBQVNxQjtRQUNQSCxnQkFBZ0I7SUFDbEI7SUFFQSxTQUFTSSxZQUFZWCxLQUFhLEVBQUVDLEtBQWEsRUFBRUMsTUFBYztRQUMvREssZ0JBQWdCO0lBRWxCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNLO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBS0QsV0FBVTs4QkFBaUI7Ozs7Ozs4QkFDakMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaZixTQUFTaUIsR0FBRyxDQUFDLENBQUNDLHdCQUNiOzs4Q0FDRSw4REFBQ0o7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUN2QixpREFBTUEsQ0FBQ3NCLEdBQUc7d0NBQ1RDLFdBQVU7d0NBQ1ZJLFlBQVk7NENBQUVDLE9BQU87d0NBQUk7d0NBQ3pCQyxPQUFPOzRDQUNMaEIsWUFBWTs0Q0FDWmlCLGdCQUFnQjt3Q0FDbEI7OzBEQUVBLDhEQUFDN0Isa0RBQUtBO2dEQUNKOEIsS0FBS0wsUUFBUWIsVUFBVTtnREFDdkJtQixLQUFJO2dEQUNKSCxPQUFPO29EQUFFSSxRQUFRO29EQUFLQyxPQUFPO2dEQUFJOzs7Ozs7MERBRW5DLDhEQUFDQztnREFBRVosV0FBVTswREFBc0JHLFFBQVFoQixLQUFLOzs7Ozs7MERBQ2hELDhEQUFDTCxxR0FBTUE7Z0RBQ0xrQixXQUFVO2dEQUNWYSxTQUFTZixZQUFZSyxRQUFRaEIsS0FBSyxFQUFFZ0IsUUFBUWYsS0FBSyxFQUFFZSxRQUFRWixNQUFNO2dEQUNqRXVCLFNBQVE7MERBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQU1MLDhEQUFDL0IscUdBQU1BO29DQUFDaUIsV0FBVTtvQ0FBaUJlLE1BQU10QjtvQ0FBY3VCLFNBQVNuQjs7c0RBQzlELDhEQUFDYixzR0FBV0E7c0RBQUVtQixRQUFRaEIsS0FBSzs7Ozs7O3dDQUFlO3NEQUUxQyw4REFBQ0wscUdBQU1BO3NEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF4QjtHQXhEd0JVO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/NzI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vUHJvamVjdHMuY3NzXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXJsIH0gZnJvbSBcImluc3BlY3RvclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLy4uL2RhdGEvaW5qZWN0by5wbmdcIjtcbmltcG9ydCBmcmVzaCBmcm9tIFwiLi8uLi9kYXRhL2ZyZXNoc2F2ZS5wbmdcIjtcbmltcG9ydCBncmZuIGZyb20gXCIuLy4uL2RhdGEvZ3Jmbi5qcGVnXCI7XG5pbXBvcnQgeyBCdXR0b24sIERpYWxvZywgRGlhbG9nVGl0bGUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIkZyZXNoIFNhdmVcIixcbiAgICBhYm91dDogXCJUaGlzIGlzIG15IHByb2plY3RcIixcbiAgICBnaExpbms6IFwiZ2l0aHViLmNvbS9yZW5hLWhhamphci9wb3J0Zm9saW9cIixcbiAgICBiYWNrZ3JvdW5kOiBmcmVzaCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIkdvb2QgUmVhZHMgRm9yIE5lcmRzXCIsXG4gICAgYWJvdXQ6IFwiVGhpcyBpcyBteSBwcm9qZWN0XCIsXG4gICAgZ2hMaW5rOiBcImdpdGh1Yi5jb20vcmVuYS1oYWpqYXIvcG9ydGZvbGlvXCIsXG4gICAgYmFja2dyb3VuZDogZ3JmbixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIk1lZC1pIEluamVjdGlvbiBTaW11bGF0b3JcIixcbiAgICBhYm91dDogXCJUaGlzIGlzIG15IHByb2plY3RcIixcbiAgICBnaGxpbms6IFwiZ2l0aHViLmNvbS9yZW5hLWhhamphci9wb3J0Zm9saW9cIixcbiAgICBiYWNrZ3JvdW5kOiBpbmplY3QsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgY29uc3QgW2lzRGlhbG9nT3Blbiwgc2V0SXNEaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2RpYWxvZ1RpdGxlLCBzZXREaWFsb2dUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpIHtcbiAgICBzZXRJc0RpYWxvZ09wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2sodGl0bGU6IHN0cmluZywgYWJvdXQ6IHN0cmluZywgZ2hMaW5rOiBzdHJpbmcpIHtcbiAgICBzZXRJc0RpYWxvZ09wZW4odHJ1ZSk7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2plY3RzLXRpdGxlXCI+UHJvamVjdHM8L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkcy1jb250YWluZXJcIj5cbiAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3Rpb24tY2FyZFwiXG4gICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicGlua1wiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmJhY2tncm91bmR9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2plY3QgcGljXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA0MDAsIHdpZHRoOiA0MDAgfX1cbiAgICAgICAgICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkLXRpdGxlXCI+e3Byb2plY3QudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0LW1vcmVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGljayhwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmFib3V0LCBwcm9qZWN0LmdobGluayl9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTZWUgTW9yZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8RGlhbG9nIGNsYXNzTmFtZT1cInByb2plY3QtZGlhbG9nXCIgb3Blbj17aXNEaWFsb2dPcGVufSBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlPntwcm9qZWN0LnRpdGxlfTwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgQWJvdXQgbWVcbiAgICAgICAgICAgICAgICA8QnV0dG9uPkdpdEh1YiBsb2dvPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkltYWdlIiwiaW5qZWN0IiwiZnJlc2giLCJncmZuIiwiQnV0dG9uIiwiRGlhbG9nIiwiRGlhbG9nVGl0bGUiLCJwcm9qZWN0cyIsImlkIiwidGl0bGUiLCJhYm91dCIsImdoTGluayIsImJhY2tncm91bmQiLCJnaGxpbmsiLCJQcm9qZWN0cyIsImlzRGlhbG9nT3BlbiIsInNldElzRGlhbG9nT3BlbiIsImRpYWxvZ1RpdGxlIiwic2V0RGlhbG9nVGl0bGUiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIm1hcCIsInByb2plY3QiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiLCJwIiwib25DbGljayIsInZhcmlhbnQiLCJvcGVuIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Projects.tsx\n"));

/***/ })

});