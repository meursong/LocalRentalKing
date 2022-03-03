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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedTag = _useState2[0],
      setSelectedTag = _useState2[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (tag, checked) {
    var nextSelectedTags = checked ? [tag].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedTags)) : selectedTags.filter(function (t) {
      return t !== tag;
    });
    setSelectedTags(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextSelectedTags)); //여기서 걍 다이렉트로 nextSelectedTags[0]를 디스패치로 전송하면 되는거 아니야?

    console.log('You are interested in: ', nextSelectedTags);
    console.log('You are interested in: ', nextSelectedTags[0]);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    style: {
      marginRight: 8
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Categories:"), tagsData.map(function (tag) {
    return __jsx(CheckableTag, {
      key: tag,
      checked: selectedTags.indexOf(tag) > -1,
      onChange: function onChange(checked) {
        return handleChange(tag, checked);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, tag);
  }));
}

_s(HotTags, "Absa4nB5+KD4SXX+uxU0J69fgbg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib3RUYWdzLmpzIl0sIm5hbWVzIjpbIkhvdFRhZ3MiLCJDaGVja2FibGVUYWciLCJUYWciLCJ0YWdzRGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRUYWdzIiwic2V0U2VsZWN0ZWRUYWdzIiwic2VsZWN0ZWRUYWciLCJzZXRTZWxlY3RlZFRhZyIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFnIiwiY2hlY2tlZCIsIm5leHRTZWxlY3RlZFRhZ3MiLCJmaWx0ZXIiLCJ0IiwiY29uc29sZSIsImxvZyIsIm1hcmdpblJpZ2h0IiwibWFwIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLE1BQVFDLFlBQVIsR0FBeUJDLHdDQUF6QixDQUFRRCxZQUFSO0FBRUEsTUFBTUUsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUIsUUFBekIsQ0FBakI7O0FBRUEsa0JBQXNDQyxzREFBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPQyxZQUFQO0FBQUEsTUFBb0JDLGVBQXBCOztBQUVBLG1CQUFxQ0Ysc0RBQVEsRUFBN0M7QUFBQSxNQUFPRyxXQUFQO0FBQUEsTUFBbUJDLGNBQW5COztBQUVBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDakQsUUFBTUMsZ0JBQWdCLEdBQUdELE9BQU8sSUFBS0QsR0FBTCxzR0FBWU4sWUFBWixLQUE2QkEsWUFBWSxDQUFDUyxNQUFiLENBQW9CLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLEtBQUtKLEdBQVY7QUFBQSxLQUFyQixDQUE3RDtBQUNBTCxtQkFBZSxDQUFDLDZGQUFJTyxnQkFBTCxFQUFmLENBRmlELENBR2pEOztBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0osZ0JBQXZDO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDSixnQkFBZ0IsQ0FBQyxDQUFELENBQXZEO0FBQ0MsR0FONkIsRUFNNUIsRUFONEIsQ0FBaEM7QUFRQSxTQUNFLG1FQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUVLLGlCQUFXLEVBQUU7QUFBZixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR2YsUUFBUSxDQUFDZ0IsR0FBVCxDQUFhLFVBQUFSLEdBQUc7QUFBQSxXQUNmLE1BQUMsWUFBRDtBQUNFLFNBQUcsRUFBRUEsR0FEUDtBQUVFLGFBQU8sRUFBRU4sWUFBWSxDQUFDZSxPQUFiLENBQXFCVCxHQUFyQixJQUE0QixDQUFDLENBRnhDO0FBR0UsY0FBUSxFQUFFLGtCQUFBQyxPQUFPO0FBQUEsZUFBSUgsWUFBWSxDQUFDRSxHQUFELEVBQU1DLE9BQU4sQ0FBaEI7QUFBQSxPQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0dELEdBTEgsQ0FEZTtBQUFBLEdBQWhCLENBRkgsQ0FERjtBQWNEOztHQWhDUVgsTzs7S0FBQUEsTztBQWtDTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTVjYzUyNzRlZjViM2NlMTRkOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFRhZyAsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5cclxuZnVuY3Rpb24gSG90VGFncygpIHtcclxuXHJcbiAgY29uc3QgeyBDaGVja2FibGVUYWcgfSA9IFRhZztcclxuXHJcbiAgY29uc3QgdGFnc0RhdGEgPSBbJ+qzteq1rCcsICdCb29rcycsICdNdXNpYycsICdTcG9ydHMnXTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkVGFncyxzZXRTZWxlY3RlZFRhZ3NdID11c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFRhZyxzZXRTZWxlY3RlZFRhZ10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygodGFnLCBjaGVja2VkKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0U2VsZWN0ZWRUYWdzID0gY2hlY2tlZCA/IFsgdGFnLC4uLnNlbGVjdGVkVGFncyxdIDogc2VsZWN0ZWRUYWdzLmZpbHRlcih0ID0+IHQgIT09IHRhZyk7XHJcbiAgICBzZXRTZWxlY3RlZFRhZ3MoWy4uLm5leHRTZWxlY3RlZFRhZ3NdKTtcclxuICAgIC8v7Jes6riw7IScIOqxjSDri6TsnbTroIntirjroZwgbmV4dFNlbGVjdGVkVGFnc1swXeulvCDrlJTsiqTtjKjsuZjroZwg7KCE7Iah7ZWY66m0IOuQmOuKlOqxsCDslYTri4jslbw/XHJcbiAgICBjb25zb2xlLmxvZygnWW91IGFyZSBpbnRlcmVzdGVkIGluOiAnLCBuZXh0U2VsZWN0ZWRUYWdzKTtcclxuICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGludGVyZXN0ZWQgaW46ICcsIG5leHRTZWxlY3RlZFRhZ3NbMF0pO1xyXG4gICAgfSxbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogOCB9fT5DYXRlZ29yaWVzOjwvc3Bhbj5cclxuICAgICAge3RhZ3NEYXRhLm1hcCh0YWcgPT4gKFxyXG4gICAgICAgIDxDaGVja2FibGVUYWdcclxuICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRUYWdzLmluZGV4T2YodGFnKSA+IC0xfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2NoZWNrZWQgPT4gaGFuZGxlQ2hhbmdlKHRhZywgY2hlY2tlZCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RhZ31cclxuICAgICAgICA8L0NoZWNrYWJsZVRhZz5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3RUYWdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9