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
    setSelectedTags.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextSelectedTags));
    console.log('You are interested in: ', nextSelectedTags);
    console.log('You are interested in: ', nextSelectedTags[0]);
    console.log('You are interested in: ', selectedTags);
    console.log('You are interested in: ', selectedTags[0]);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    style: {
      marginRight: 8
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
        lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib3RUYWdzLmpzIl0sIm5hbWVzIjpbIkhvdFRhZ3MiLCJDaGVja2FibGVUYWciLCJUYWciLCJ0YWdzRGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRUYWdzIiwic2V0U2VsZWN0ZWRUYWdzIiwic2VsZWN0ZWRUYWciLCJzZXRTZWxlY3RlZFRhZyIsImhhbmRsZUNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFnIiwiY2hlY2tlZCIsIm5leHRTZWxlY3RlZFRhZ3MiLCJmaWx0ZXIiLCJ0IiwiY29uc29sZSIsImxvZyIsIm1hcmdpblJpZ2h0IiwibWFwIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLE1BQVFDLFlBQVIsR0FBeUJDLHdDQUF6QixDQUFRRCxZQUFSO0FBRUEsTUFBTUUsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUIsUUFBekIsQ0FBakI7O0FBRUEsa0JBQXNDQyxzREFBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPQyxZQUFQO0FBQUEsTUFBb0JDLGVBQXBCOztBQUVBLG1CQUFvQ0Ysc0RBQVEsRUFBNUM7QUFBQSxNQUFPRyxXQUFQO0FBQUEsTUFBbUJDLGNBQW5COztBQUVBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDakQsUUFBTUMsZ0JBQWdCLEdBQUdELE9BQU8sSUFBS0QsR0FBTCxzR0FBWU4sWUFBWixLQUE2QkEsWUFBWSxDQUFDUyxNQUFiLENBQW9CLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLEtBQUtKLEdBQVY7QUFBQSxLQUFyQixDQUE3RDtBQUNBTCxtQkFBZSxNQUFmLHNHQUFtQk8sZ0JBQW5CO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDSixnQkFBdkM7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNKLGdCQUFnQixDQUFDLENBQUQsQ0FBdkQ7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNaLFlBQXZDO0FBQ0FXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDWixZQUFZLENBQUMsQ0FBRCxDQUFuRDtBQUNDLEdBUDZCLEVBTzVCLEVBUDRCLENBQWhDO0FBU0EsU0FDRSxtRUFDRTtBQUFNLFNBQUssRUFBRTtBQUFFYSxpQkFBVyxFQUFFO0FBQWYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUdmLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBYSxVQUFBUixHQUFHO0FBQUEsV0FDZixNQUFDLFlBQUQ7QUFDRSxTQUFHLEVBQUVBLEdBRFA7QUFFRSxhQUFPLEVBQUVOLFlBQVksQ0FBQ2UsT0FBYixDQUFxQlQsR0FBckIsSUFBNEIsQ0FBQyxDQUZ4QztBQUdFLGNBQVEsRUFBRSxrQkFBQUMsT0FBTztBQUFBLGVBQUlILFlBQVksQ0FBQ0UsR0FBRCxFQUFNQyxPQUFOLENBQWhCO0FBQUEsT0FIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHRCxHQUxILENBRGU7QUFBQSxHQUFoQixDQUZILENBREY7QUFjRDs7R0FqQ1FYLE87O0tBQUFBLE87QUFtQ01BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjYTYwZGJiODNhZGRhMzM4MmFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBUYWcgLCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuXHJcbmZ1bmN0aW9uIEhvdFRhZ3MoKSB7XHJcblxyXG4gIGNvbnN0IHsgQ2hlY2thYmxlVGFnIH0gPSBUYWc7XHJcblxyXG4gIGNvbnN0IHRhZ3NEYXRhID0gWyfqs7XqtawnLCAnQm9va3MnLCAnTXVzaWMnLCAnU3BvcnRzJ107XHJcblxyXG4gIGNvbnN0IFtzZWxlY3RlZFRhZ3Msc2V0U2VsZWN0ZWRUYWdzXSA9dXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRUYWcsc2V0U2VsZWN0ZWRUYWddID11c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSB1c2VDYWxsYmFjaygodGFnLCBjaGVja2VkKSA9PiB7XHJcbiAgICBjb25zdCBuZXh0U2VsZWN0ZWRUYWdzID0gY2hlY2tlZCA/IFsgdGFnLC4uLnNlbGVjdGVkVGFncyxdIDogc2VsZWN0ZWRUYWdzLmZpbHRlcih0ID0+IHQgIT09IHRhZyk7XHJcbiAgICBzZXRTZWxlY3RlZFRhZ3MoLi4ubmV4dFNlbGVjdGVkVGFncyk7XHJcbiAgICBjb25zb2xlLmxvZygnWW91IGFyZSBpbnRlcmVzdGVkIGluOiAnLCBuZXh0U2VsZWN0ZWRUYWdzKTtcclxuICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGludGVyZXN0ZWQgaW46ICcsIG5leHRTZWxlY3RlZFRhZ3NbMF0pO1xyXG4gICAgY29uc29sZS5sb2coJ1lvdSBhcmUgaW50ZXJlc3RlZCBpbjogJywgc2VsZWN0ZWRUYWdzKTtcclxuICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGludGVyZXN0ZWQgaW46ICcsIHNlbGVjdGVkVGFnc1swXSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiA4IH19PkNhdGVnb3JpZXM6PC9zcGFuPlxyXG4gICAgICB7dGFnc0RhdGEubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgPENoZWNrYWJsZVRhZ1xyXG4gICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRhZ3MuaW5kZXhPZih0YWcpID4gLTF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tlZCA9PiBoYW5kbGVDaGFuZ2UodGFnLCBjaGVja2VkKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGFnfVxyXG4gICAgICAgIDwvQ2hlY2thYmxlVGFnPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvdFRhZ3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=