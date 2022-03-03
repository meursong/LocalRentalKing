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
  var tagsData = ['전체', '공구', 'Books', 'Music', 'Sports'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      selectedTags = _useState[0],
      setSelectedTags = _useState[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (tag, checked) {
    var nextSelectedTags = checked ? [tag].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedTags)) : selectedTags.filter(function (t) {
      return t !== tag;
    });
    setSelectedTags(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextSelectedTags)); //여기서 걍 다이렉트로 nextSelectedTags[0]를 category변수로 디스패치로 전송하면 되는거 아니야?
    //아니면 여기서는 post 리듀서의 카테고리 변수에 변화를 주고 렌더링중인 메인 페이지에서 useEffect로 카테고리 변수를 감시시켜서
    //해당하는 카테고리의 게시물을 10개 부르는 알고리즘으로 이어버리던가

    console.log('You are interested in: ', nextSelectedTags);
    console.log('You are interested in: ', nextSelectedTags[0]);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSelectedTags('전체');
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
        lineNumber: 30,
        columnNumber: 9
      }
    }, tag);
  }));
}

_s(HotTags, "9uabkMrkzA45HuqNQnC13RdRFao=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib3RUYWdzLmpzIl0sIm5hbWVzIjpbIkhvdFRhZ3MiLCJDaGVja2FibGVUYWciLCJUYWciLCJ0YWdzRGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRUYWdzIiwic2V0U2VsZWN0ZWRUYWdzIiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ0YWciLCJjaGVja2VkIiwibmV4dFNlbGVjdGVkVGFncyIsImZpbHRlciIsInQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibWFwIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBRWpCLE1BQVFDLFlBQVIsR0FBeUJDLHdDQUF6QixDQUFRRCxZQUFSO0FBRUEsTUFBTUUsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBWSxPQUFaLEVBQXFCLE9BQXJCLEVBQThCLFFBQTlCLENBQWpCOztBQUVBLGtCQUFzQ0Msc0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT0MsWUFBUDtBQUFBLE1BQW9CQyxlQUFwQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsR0FBRCxFQUFNQyxPQUFOLEVBQWtCO0FBQ2pELFFBQU1DLGdCQUFnQixHQUFHRCxPQUFPLElBQUtELEdBQUwsc0dBQVlKLFlBQVosS0FBNkJBLFlBQVksQ0FBQ08sTUFBYixDQUFvQixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxLQUFLSixHQUFWO0FBQUEsS0FBckIsQ0FBN0Q7QUFDQUgsbUJBQWUsQ0FBQyw2RkFBSUssZ0JBQUwsRUFBZixDQUZpRCxDQUdqRDtBQUNBO0FBQ0E7O0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDSixnQkFBdkM7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNKLGdCQUFnQixDQUFDLENBQUQsQ0FBdkQ7QUFDQyxHQVI2QixFQVE1QixFQVI0QixDQUFoQztBQVVBSyx5REFBUyxDQUFDLFlBQUk7QUFDWlYsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDRCxHQUZRLEVBRVAsRUFGTyxDQUFUO0FBSUEsU0FDRSxtRUFDR0gsUUFBUSxDQUFDYyxHQUFULENBQWEsVUFBQVIsR0FBRztBQUFBLFdBQ2YsTUFBQyxZQUFEO0FBQ0UsU0FBRyxFQUFFQSxHQURQO0FBRUUsYUFBTyxFQUFFSixZQUFZLENBQUNhLE9BQWIsQ0FBcUJULEdBQXJCLElBQTRCLENBQUMsQ0FGeEM7QUFHRSxjQUFRLEVBQUUsa0JBQUFDLE9BQU87QUFBQSxlQUFJSCxZQUFZLENBQUNFLEdBQUQsRUFBTUMsT0FBTixDQUFoQjtBQUFBLE9BSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR0QsR0FMSCxDQURlO0FBQUEsR0FBaEIsQ0FESCxDQURGO0FBYUQ7O0dBbkNRVCxPOztLQUFBQSxPO0FBcUNNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNWI1MmEwMGMwZjcyZDY2ZWExMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgVGFnICwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcblxyXG5mdW5jdGlvbiBIb3RUYWdzKCkge1xyXG5cclxuICBjb25zdCB7IENoZWNrYWJsZVRhZyB9ID0gVGFnO1xyXG5cclxuICBjb25zdCB0YWdzRGF0YSA9IFsn7KCE7LK0Jywn6rO16rWsJywgJ0Jvb2tzJywgJ011c2ljJywgJ1Nwb3J0cyddO1xyXG5cclxuICBjb25zdCBbc2VsZWN0ZWRUYWdzLHNldFNlbGVjdGVkVGFnc10gPXVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHRhZywgY2hlY2tlZCkgPT4ge1xyXG4gICAgY29uc3QgbmV4dFNlbGVjdGVkVGFncyA9IGNoZWNrZWQgPyBbIHRhZywuLi5zZWxlY3RlZFRhZ3MsXSA6IHNlbGVjdGVkVGFncy5maWx0ZXIodCA9PiB0ICE9PSB0YWcpO1xyXG4gICAgc2V0U2VsZWN0ZWRUYWdzKFsuLi5uZXh0U2VsZWN0ZWRUYWdzXSk7XHJcbiAgICAvL+yXrOq4sOyEnCDqsY0g64uk7J2066CJ7Yq466GcIG5leHRTZWxlY3RlZFRhZ3NbMF3rpbwgY2F0ZWdvcnnrs4DsiJjroZwg65SU7Iqk7Yyo7LmY66GcIOyghOyGoe2VmOuptCDrkJjripTqsbAg7JWE64uI7JW8P1xyXG4gICAgLy/slYTri4jrqbQg7Jes6riw7ISc64qUIHBvc3Qg66as65OA7ISc7J2YIOy5tO2FjOqzoOumrCDrs4DsiJjsl5Ag67OA7ZmU66W8IOyjvOqzoCDroIzrjZTrp4HspJHsnbgg66mU7J24IO2OmOydtOyngOyXkOyEnCB1c2VFZmZlY3TroZwg7Lm07YWM6rOg66asIOuzgOyImOulvCDqsJDsi5zsi5zsvJzshJxcclxuICAgIC8v7ZW064u57ZWY64qUIOy5tO2FjOqzoOumrOydmCDqsozsi5zrrLzsnYQgMTDqsJwg67aA66W064qUIOyVjOqzoOumrOymmOycvOuhnCDsnbTslrTrsoTrpqzrjZjqsIBcclxuICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGludGVyZXN0ZWQgaW46ICcsIG5leHRTZWxlY3RlZFRhZ3MpO1xyXG4gICAgY29uc29sZS5sb2coJ1lvdSBhcmUgaW50ZXJlc3RlZCBpbjogJywgbmV4dFNlbGVjdGVkVGFnc1swXSk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRTZWxlY3RlZFRhZ3MoJ+yghOyytCcpO1xyXG4gIH0sW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3RhZ3NEYXRhLm1hcCh0YWcgPT4gKFxyXG4gICAgICAgIDxDaGVja2FibGVUYWdcclxuICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRUYWdzLmluZGV4T2YodGFnKSA+IC0xfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2NoZWNrZWQgPT4gaGFuZGxlQ2hhbmdlKHRhZywgY2hlY2tlZCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RhZ31cclxuICAgICAgICA8L0NoZWNrYWJsZVRhZz5cclxuICAgICAgKSl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3RUYWdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9