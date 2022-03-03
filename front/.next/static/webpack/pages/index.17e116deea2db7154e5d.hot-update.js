webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HotTags.js":
/*!*******************************!*\
  !*** ./components/HotTags.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\components\\HotTags.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function HotTags() {
  _s();

  var _this = this;

  var CheckableTag = antd__WEBPACK_IMPORTED_MODULE_2__["Tag"].CheckableTag;
  var tagsData = ['공구', 'Books', 'Music', 'Sports'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      selectedTags = _useState[0],
      setSelectedTags = _useState[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (tag, checked) {
    var nextSelectedTags = checked ? [tag].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedTags)) : selectedTags.filter(function (t) {
      return t !== tag;
    });
    setSelectedTags(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextSelectedTags)); //여기서 걍 다이렉트로 nextSelectedTags[0]를 category변수로 디스패치로 전송하면 되는거 아니야?

    console.log('You are interested in: ', nextSelectedTags);
    console.log('You are interested in: ', nextSelectedTags[0]);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, tagsData.map(function (tag) {
    return __jsx(CheckableTag, {
      key: tag,
      checked: selectedTags.indexOf(tag) > -1,
      onChange: function onChange(checked) {
        return handleChange(tag, checked);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, tag);
  }));
}

_s(HotTags, "YoDZTBD9UP1TLZgOncRvzgQNOEM=");

_c = HotTags;
/* harmony default export */ __webpack_exports__["default"] = (HotTags);

var _c;

$RefreshReg$(_c, "HotTags");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib3RUYWdzLmpzIl0sIm5hbWVzIjpbIkhvdFRhZ3MiLCJDaGVja2FibGVUYWciLCJUYWciLCJ0YWdzRGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRUYWdzIiwic2V0U2VsZWN0ZWRUYWdzIiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ0YWciLCJjaGVja2VkIiwibmV4dFNlbGVjdGVkVGFncyIsImZpbHRlciIsInQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLE1BQVFDLFlBQVIsR0FBeUJDLHdDQUF6QixDQUFRRCxZQUFSO0FBRUEsTUFBTUUsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUIsUUFBekIsQ0FBakI7O0FBRUEsa0JBQXNDQyxzREFBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPQyxZQUFQO0FBQUEsTUFBb0JDLGVBQXBCOztBQUVBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDakQsUUFBTUMsZ0JBQWdCLEdBQUdELE9BQU8sSUFBS0QsR0FBTCxzR0FBWUosWUFBWixLQUE2QkEsWUFBWSxDQUFDTyxNQUFiLENBQW9CLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLEtBQUtKLEdBQVY7QUFBQSxLQUFyQixDQUE3RDtBQUNBSCxtQkFBZSxDQUFDLDZGQUFJSyxnQkFBTCxFQUFmLENBRmlELENBR2pEOztBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0osZ0JBQXZDO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDSixnQkFBZ0IsQ0FBQyxDQUFELENBQXZEO0FBQ0MsR0FONkIsRUFNNUIsRUFONEIsQ0FBaEM7QUFRQSxTQUNFLG1FQUNHUixRQUFRLENBQUNhLEdBQVQsQ0FBYSxVQUFBUCxHQUFHO0FBQUEsV0FDZixNQUFDLFlBQUQ7QUFDRSxTQUFHLEVBQUVBLEdBRFA7QUFFRSxhQUFPLEVBQUVKLFlBQVksQ0FBQ1ksT0FBYixDQUFxQlIsR0FBckIsSUFBNEIsQ0FBQyxDQUZ4QztBQUdFLGNBQVEsRUFBRSxrQkFBQUMsT0FBTztBQUFBLGVBQUlILFlBQVksQ0FBQ0UsR0FBRCxFQUFNQyxPQUFOLENBQWhCO0FBQUEsT0FIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHRCxHQUxILENBRGU7QUFBQSxHQUFoQixDQURILENBREY7QUFhRDs7R0E3QlFULE87O0tBQUFBLE87QUErQk1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE3ZTExNmRlZWEyZGI3MTU0ZTVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBUYWcgLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIEhvdFRhZ3MoKSB7XHJcblxyXG4gIGNvbnN0IHsgQ2hlY2thYmxlVGFnIH0gPSBUYWc7XHJcblxyXG4gIGNvbnN0IHRhZ3NEYXRhID0gWyfqs7XqtawnLCAnQm9va3MnLCAnTXVzaWMnLCAnU3BvcnRzJ107XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFRhZ3Msc2V0U2VsZWN0ZWRUYWdzXSA9dXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygodGFnLCBjaGVja2VkKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0U2VsZWN0ZWRUYWdzID0gY2hlY2tlZCA/IFsgdGFnLC4uLnNlbGVjdGVkVGFncyxdIDogc2VsZWN0ZWRUYWdzLmZpbHRlcih0ID0+IHQgIT09IHRhZyk7XHJcbiAgICBzZXRTZWxlY3RlZFRhZ3MoWy4uLm5leHRTZWxlY3RlZFRhZ3NdKTtcclxuICAgIC8v7Jes6riw7IScIOqxjSDri6TsnbTroIntirjroZwgbmV4dFNlbGVjdGVkVGFnc1swXeulvCBjYXRlZ29yeeuzgOyImOuhnCDrlJTsiqTtjKjsuZjroZwg7KCE7Iah7ZWY66m0IOuQmOuKlOqxsCDslYTri4jslbw/XHJcbiAgICBjb25zb2xlLmxvZygnWW91IGFyZSBpbnRlcmVzdGVkIGluOiAnLCBuZXh0U2VsZWN0ZWRUYWdzKTtcclxuICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGludGVyZXN0ZWQgaW46ICcsIG5leHRTZWxlY3RlZFRhZ3NbMF0pO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dGFnc0RhdGEubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgPENoZWNrYWJsZVRhZ1xyXG4gICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRhZ3MuaW5kZXhPZih0YWcpID4gLTF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tlZCA9PiBoYW5kbGVDaGFuZ2UodGFnLCBjaGVja2VkKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGFnfVxyXG4gICAgICAgIDwvQ2hlY2thYmxlVGFnPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvdFRhZ3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=