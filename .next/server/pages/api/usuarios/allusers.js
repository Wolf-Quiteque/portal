"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/usuarios/allusers";
exports.ids = ["pages/api/usuarios/allusers"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = \"mongodb+srv://wolf:shinobi777@glabcluster.k4kiylg.mongodb.net/?retryWrites=true&w=majority\";\nconst options = {};\nlet client;\nlet clientPromise;\n\nif (false) {}\n\nif (true) {\n  // In development mode, use a global variable so that the value\n  // is preserved across module reloads caused by HMR (Hot Module Replacement).\n  if (!global._mongoClientPromise) {\n    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n    global._mongoClientPromise = client.connect();\n  }\n\n  clientPromise = global._mongoClientPromise;\n} else {} // Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLEdBQUcsR0FBR0MsNEZBQVo7QUFDQSxNQUFNRyxPQUFPLEdBQUcsRUFBaEI7QUFFQSxJQUFJQyxNQUFKO0FBQ0EsSUFBSUMsYUFBSjs7QUFFQSxJQUFJLEtBQUosRUFBMEMsRUFFekM7O0FBRUQsSUFBSSxNQUF3QztBQUMxQztBQUNBO0FBQ0EsTUFBSSxDQUFDRSxNQUFNLENBQUNDLG1CQUFaLEVBQWlDO0FBQy9CSixJQUFBQSxNQUFNLEdBQUcsSUFBSU4sZ0RBQUosQ0FBZ0JDLEdBQWhCLEVBQXFCSSxPQUFyQixDQUFUO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0MsbUJBQVAsR0FBNkJKLE1BQU0sQ0FBQ0ssT0FBUCxFQUE3QjtBQUNEOztBQUNESixFQUFBQSxhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQXZCO0FBQ0QsQ0FSRCxNQVFPLEdBTVA7QUFDQTs7O0FBQ0EsaUVBQWVILGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWxcIik7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NT05HT0RCX1VSSSIsIm9wdGlvbnMiLCJjbGllbnQiLCJjbGllbnRQcm9taXNlIiwiRXJyb3IiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/usuarios/allusers.js":
/*!****************************************!*\
  !*** ./pages/api/usuarios/allusers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n  if (req.method !== \"POST\") {\n    return;\n  }\n\n  const cliente = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  const data = req.body;\n  const {\n    page,\n    info\n  } = data;\n  const perPage = 9;\n  const currentPage = page || 1;\n  const db = cliente.db(\"anje\");\n\n  try {\n    const pipeline = []; // Match stage for your filter criteria\n\n    if (info) {\n      pipeline.push({\n        $match: info\n      });\n    } // Sort by email in ascending order (modify if you want descending order)\n\n\n    pipeline.push({\n      $sort: {\n        email: 1\n      }\n    }); // Skip and limit based on pagination\n\n    pipeline.push({\n      $skip: (currentPage - 1) * perPage\n    });\n    pipeline.push({\n      $limit: perPage\n    }); // Execute the aggregation pipeline\n\n    const results = await db.collection(\"usuarios\").aggregate(pipeline).toArray(); // Get the total count without pagination\n\n    const total = await db.collection(\"usuarios\").countDocuments(info); // Calculate the total number of pages\n\n    const totalPages = Math.ceil(total / perPage);\n    res.json({\n      pages: totalPages,\n      usuarios: results,\n      inscritos: total\n    });\n  } catch (error) {\n    console.error(\"Error in pagination:\", error);\n    res.status(500).json({\n      error: \"Internal Server Error\"\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXN1YXJpb3MvYWxsdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QjtBQUNEOztBQUVELFFBQU1DLE9BQU8sR0FBRyxNQUFNTCxvREFBdEI7QUFFQSxRQUFNTSxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBakI7QUFDQSxRQUFNO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUE7QUFBUixNQUFpQkgsSUFBdkI7QUFDQSxRQUFNSSxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxRQUFNQyxXQUFXLEdBQUdILElBQUksSUFBSSxDQUE1QjtBQUVBLFFBQU1JLEVBQUUsR0FBR1AsT0FBTyxDQUFDTyxFQUFSLENBQVcsTUFBWCxDQUFYOztBQUVBLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcsRUFBakIsQ0FERSxDQUdGOztBQUNBLFFBQUlKLElBQUosRUFBVTtBQUNSSSxNQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBYztBQUFFQyxRQUFBQSxNQUFNLEVBQUVOO0FBQVYsT0FBZDtBQUNELEtBTkMsQ0FRRjs7O0FBQ0FJLElBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjO0FBQUVFLE1BQUFBLEtBQUssRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFULEtBQWQsRUFURSxDQVdGOztBQUNBSixJQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBYztBQUFFSSxNQUFBQSxLQUFLLEVBQUUsQ0FBQ1AsV0FBVyxHQUFHLENBQWYsSUFBb0JEO0FBQTdCLEtBQWQ7QUFDQUcsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWM7QUFBRUssTUFBQUEsTUFBTSxFQUFFVDtBQUFWLEtBQWQsRUFiRSxDQWVGOztBQUNBLFVBQU1VLE9BQU8sR0FBRyxNQUFNUixFQUFFLENBQ3JCUyxVQURtQixDQUNSLFVBRFEsRUFFbkJDLFNBRm1CLENBRVRULFFBRlMsRUFHbkJVLE9BSG1CLEVBQXRCLENBaEJFLENBcUJGOztBQUNBLFVBQU1DLEtBQUssR0FBRyxNQUFNWixFQUFFLENBQUNTLFVBQUgsQ0FBYyxVQUFkLEVBQTBCSSxjQUExQixDQUF5Q2hCLElBQXpDLENBQXBCLENBdEJFLENBd0JGOztBQUNBLFVBQU1pQixVQUFVLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixLQUFLLEdBQUdkLE9BQWxCLENBQW5CO0FBRUFQLElBQUFBLEdBQUcsQ0FBQzBCLElBQUosQ0FBUztBQUFFQyxNQUFBQSxLQUFLLEVBQUVKLFVBQVQ7QUFBcUJLLE1BQUFBLFFBQVEsRUFBRVgsT0FBL0I7QUFBd0NZLE1BQUFBLFNBQVMsRUFBRVI7QUFBbkQsS0FBVDtBQUNELEdBNUJELENBNEJFLE9BQU9TLEtBQVAsRUFBYztBQUNkQyxJQUFBQSxPQUFPLENBQUNELEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ0EsS0FBdEM7QUFDQTlCLElBQUFBLEdBQUcsQ0FBQ2dDLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQjtBQUFFSSxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFyQjtBQUNEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXN1YXJpb3MvYWxsdXNlcnMuanM/Zjg2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCAhPT0gXCJQT1NUXCIpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsaWVudGUgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG5cclxuICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgY29uc3QgeyBwYWdlLCBpbmZvIH0gPSBkYXRhO1xyXG4gIGNvbnN0IHBlclBhZ2UgPSA5O1xyXG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gcGFnZSB8fCAxO1xyXG5cclxuICBjb25zdCBkYiA9IGNsaWVudGUuZGIoXCJhbmplXCIpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcGlwZWxpbmUgPSBbXTtcclxuXHJcbiAgICAvLyBNYXRjaCBzdGFnZSBmb3IgeW91ciBmaWx0ZXIgY3JpdGVyaWFcclxuICAgIGlmIChpbmZvKSB7XHJcbiAgICAgIHBpcGVsaW5lLnB1c2goeyAkbWF0Y2g6IGluZm8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU29ydCBieSBlbWFpbCBpbiBhc2NlbmRpbmcgb3JkZXIgKG1vZGlmeSBpZiB5b3Ugd2FudCBkZXNjZW5kaW5nIG9yZGVyKVxyXG4gICAgcGlwZWxpbmUucHVzaCh7ICRzb3J0OiB7IGVtYWlsOiAxIH0gfSk7XHJcblxyXG4gICAgLy8gU2tpcCBhbmQgbGltaXQgYmFzZWQgb24gcGFnaW5hdGlvblxyXG4gICAgcGlwZWxpbmUucHVzaCh7ICRza2lwOiAoY3VycmVudFBhZ2UgLSAxKSAqIHBlclBhZ2UgfSk7XHJcbiAgICBwaXBlbGluZS5wdXNoKHsgJGxpbWl0OiBwZXJQYWdlIH0pO1xyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGFnZ3JlZ2F0aW9uIHBpcGVsaW5lXHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZGJcclxuICAgICAgLmNvbGxlY3Rpb24oXCJ1c3Vhcmlvc1wiKVxyXG4gICAgICAuYWdncmVnYXRlKHBpcGVsaW5lKVxyXG4gICAgICAudG9BcnJheSgpO1xyXG5cclxuICAgIC8vIEdldCB0aGUgdG90YWwgY291bnQgd2l0aG91dCBwYWdpbmF0aW9uXHJcbiAgICBjb25zdCB0b3RhbCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c3Vhcmlvc1wiKS5jb3VudERvY3VtZW50cyhpbmZvKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlc1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbCAvIHBlclBhZ2UpO1xyXG5cclxuICAgIHJlcy5qc29uKHsgcGFnZXM6IHRvdGFsUGFnZXMsIHVzdWFyaW9zOiByZXN1bHRzLCBpbnNjcml0b3M6IHRvdGFsIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gcGFnaW5hdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY2xpZW50ZSIsImRhdGEiLCJib2R5IiwicGFnZSIsImluZm8iLCJwZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJkYiIsInBpcGVsaW5lIiwicHVzaCIsIiRtYXRjaCIsIiRzb3J0IiwiZW1haWwiLCIkc2tpcCIsIiRsaW1pdCIsInJlc3VsdHMiLCJjb2xsZWN0aW9uIiwiYWdncmVnYXRlIiwidG9BcnJheSIsInRvdGFsIiwiY291bnREb2N1bWVudHMiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJqc29uIiwicGFnZXMiLCJ1c3VhcmlvcyIsImluc2NyaXRvcyIsImVycm9yIiwiY29uc29sZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/usuarios/allusers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/usuarios/allusers.js"));
module.exports = __webpack_exports__;

})();