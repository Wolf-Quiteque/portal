"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ \"./node_modules/bootstrap-icons/font/bootstrap-icons.css\");\n/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_7__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction App(_param) {\n    var Component = _param.Component, session = _param.pageProps.session, pageProps = _objectWithoutProperties(_param.pageProps, [\n        \"session\"\n    ]);\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var element = document.querySelector(\"body\");\n        element.classList.add(\"dark-mode\");\n        if (router.pathname == \"/login\" || router.pathname == \"/recuperacao\") {\n            var element1 = document.querySelector(\"body\");\n            element1.classList.add(\"hold-transition\", \"login-page\");\n        } else {\n            var element2 = document.querySelector(\"body\");\n            element2.classList.remove(\"login-page\");\n            element2.classList.add(\"hold-transition\", \"sidebar-mini\", \"layout-fixed\", \"auto\");\n        }\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_7__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"../plugin/fontawesome-free/css/all.min.css\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"../plugin/datatables-bs4/css/dataTables.bootstrap4.min.css\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"../plugin/datatables-responsive/css/responsive.bootstrap4.min.css\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"../plugin/datatables-buttons/css/buttons.bootstrap4.min.css\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"../dist/css/style.css\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"stylesheet\",\n                            href: \"../dist/css/adminlte.min.css\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            src: \"../plugin/jquery/jquery.min.js\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            src: \"../plugin/bootstrap/js/bootstrap.bundle.min.js\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                            src: \"../dist/js/adminlte.min.js\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"../dist/css/newstyle.css\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dwane\\\\Documents\\\\aefadmin-main\\\\demowhatsapbot\\\\pages\\\\_app.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n_s(App, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtDQUNIO0dBdER1QkYsR0FBRzs7UUFJVkYsa0RBQVM7OztBQUpGRSxLQUFBQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgXCJib290c3RyYXAtaWNvbnMvZm9udC9ib290c3RyYXAtaWNvbnMuY3NzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXRcIjtcbmltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IHVzZVJlZiwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrLW1vZGVcIik7XG4gICAgaWYgKHJvdXRlci5wYXRobmFtZSA9PSBcIi9sb2dpblwiIHx8IHJvdXRlci5wYXRobmFtZSA9PSBcIi9yZWN1cGVyYWNhb1wiKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJob2xkLXRyYW5zaXRpb25cIiwgXCJsb2dpbi1wYWdlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2dpbi1wYWdlXCIpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBcImhvbGQtdHJhbnNpdGlvblwiLFxuICAgICAgICBcInNpZGViYXItbWluaVwiLFxuICAgICAgICBcImxheW91dC1maXhlZFwiLFxuICAgICAgICBcImF1dG9cIlxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXJdKTtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cIi4uL3BsdWdpbi9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiLi4vcGx1Z2luL2RhdGF0YWJsZXMtYnM0L2Nzcy9kYXRhVGFibGVzLmJvb3RzdHJhcDQubWluLmNzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiLi4vcGx1Z2luL2RhdGF0YWJsZXMtcmVzcG9uc2l2ZS9jc3MvcmVzcG9uc2l2ZS5ib290c3RyYXA0Lm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cIi4uL3BsdWdpbi9kYXRhdGFibGVzLWJ1dHRvbnMvY3NzL2J1dHRvbnMuYm9vdHN0cmFwNC5taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIuLi9kaXN0L2Nzcy9zdHlsZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2Rpc3QvY3NzL2FkbWlubHRlLm1pbi5jc3NcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vcGx1Z2luL2pxdWVyeS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9wbHVnaW4vYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5idW5kbGUubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9kaXN0L2pzL2FkbWlubHRlLm1pbi5qc1wiPjwvc2NyaXB0PntcIiBcIn1cbiAgICAgICAgICA8bGluayBocmVmPVwiLi4vZGlzdC9jc3MvbmV3c3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkxheW91dCIsIiQiLCJ1c2VSZWYiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJTZXNzaW9uUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwicm91dGVyIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsInBhdGhuYW1lIiwicmVtb3ZlIiwibGluayIsInJlbCIsImhyZWYiLCJzY3JpcHQiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});