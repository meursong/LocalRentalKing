webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/objectrecieve.js":
/*!********************************!*\
  !*** ./pages/objectrecieve.js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/dist/index.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\pages\\objectrecieve.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

function ObjectRecieve() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"])(),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost,
      loadPostLoading = _useSelector2.loadPostLoading,
      id = _useSelector2.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])("".concat(backUrl, "/user/followers?limit=").concat(followersLimit), fetcher),
      data = _useSWR.data,
      error = _useSWR.error;

  var CheckableTag = antd__WEBPACK_IMPORTED_MODULE_9__["Tag"].CheckableTag;
  var tagsData = ['공구', 'Books', 'Music', 'Sports'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      selectedTags = _useState[0],
      setSelectedTags = _useState[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (tag, checked) {
    var nextSelectedTags = checked ? [tag].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectedTags)) : selectedTags.filter(function (t) {
      return t !== tag;
    });
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])( // 화면 사이즈에 따라 버그가 발생중 fix1
  function () {
    if (inView && hasMorePost && !loadPostLoading) {
      var _mainPosts;

      var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id; // 인피니트 스크롤 구현을 위해 프론트 서버의 현재 렌더링중인 게시글들중 가장 아래 게시물의 게시넘버를 lastId로
      // dispatch({
      //   type: LOAD_O_RECIEVE_POST_REQUEST,
      //   lastId, // 게시물 10개를 요청하고 인피니트 스크롤 구현을 위해 lastId를 전송하여 lastId 기준으로 10개를 잘라 받아온다.
      // category, // 매개변수로 어떤 카테고리의 게시물을 들고올지까지 정해준다면??
      // });
    }
  }, [inView, hasMorePost, loadPostLoading, mainPosts, id]);

  if (!me) {
    return '내 정보 로딩중...';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "\uBB3C\uAC74\uC744 \uBE4C\uB824\uC918 | \uC6B0\uB9AC\uB3D9\uB124 \uB80C\uD0C8\uB300\uC7A5")), __jsx(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, me && __jsx(PostForm, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 16
    }
  }), mainPosts.map(function (post) {
    return __jsx(PostCard, {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 34
      }
    });
  }), __jsx("div", {
    ref: hasMorePost && !loadPostLoading ? ref : undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })));
}

_s(ObjectRecieve, "+h0mhpUIg+WRFDJz9NvppVhrV04=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_6__["useInView"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = ObjectRecieve;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (ObjectRecieve);

var _c;

$RefreshReg$(_c, "ObjectRecieve");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2JqZWN0cmVjaWV2ZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIk9iamVjdFJlY2lldmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5WaWV3IiwicmVmIiwiaW5WaWV3IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInBvc3QiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdCIsImxvYWRQb3N0TG9hZGluZyIsImlkIiwidXNlU1dSIiwiYmFja1VybCIsImZvbGxvd2Vyc0xpbWl0IiwiZXJyb3IiLCJDaGVja2FibGVUYWciLCJUYWciLCJ0YWdzRGF0YSIsInVzZVN0YXRlIiwic2VsZWN0ZWRUYWdzIiwic2V0U2VsZWN0ZWRUYWdzIiwiaGFuZGxlQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ0YWciLCJjaGVja2VkIiwibmV4dFNlbGVjdGVkVGFncyIsImZpbHRlciIsInQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibGFzdElkIiwibGVuZ3RoIiwibWFwIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBRUEsU0FBU0MsYUFBVCxHQUF5QjtBQUFBOztBQUFBOztBQUN2QixNQUFNQyxR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QUFrQ1QsR0FBbEMsR0FBd0NrQyxTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FKRixDQURGO0FBYUQ7O0dBbkRRdEMsYTtVQUNVRSx1RCxFQUNLQyxxRSxFQUNQRyx1RCxFQUN5Q0EsdUQsRUFFaENTLDJDOzs7S0FOakJmLGE7O0FBc0VNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YzQ4NzhiMmViNmUwOTI0MmYzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0L0FwcExheW91dCc7XHJcblxyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7VGFnfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpO1xyXG5cclxuZnVuY3Rpb24gT2JqZWN0UmVjaWV2ZSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcsIGlkIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vdXNlci9mb2xsb3dlcnM/bGltaXQ9JHtmb2xsb3dlcnNMaW1pdH1gLCBmZXRjaGVyKTtcclxuXHJcbiAgY29uc3QgeyBDaGVja2FibGVUYWcgfSA9IFRhZztcclxuXHJcbiAgY29uc3QgdGFnc0RhdGEgPSBbJ+qzteq1rCcsICdCb29rcycsICdNdXNpYycsICdTcG9ydHMnXTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkVGFncyxzZXRTZWxlY3RlZFRhZ3NdID11c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKCh0YWcsIGNoZWNrZWQpID0+IHtcclxuICAgIGNvbnN0IG5leHRTZWxlY3RlZFRhZ3MgPSBjaGVja2VkID8gWyB0YWcsLi4uc2VsZWN0ZWRUYWdzLF0gOiBzZWxlY3RlZFRhZ3MuZmlsdGVyKHQgPT4gdCAhPT0gdGFnKTtcclxuICAgIGNvbnNvbGUubG9nKCdZb3UgYXJlIGludGVyZXN0ZWQgaW46ICcsIG5leHRTZWxlY3RlZFRhZ3MpO1xyXG4gICAgc2V0U2VsZWN0ZWRUYWdzKG5leHRTZWxlY3RlZFRhZ3MpO1xyXG4gIH0sW10pO1xyXG5cclxuICB1c2VFZmZlY3QoIC8vIO2ZlOuptCDsgqzsnbTspojsl5Ag65Sw6528IOuyhOq3uOqwgCDrsJzsg53spJEgZml4MVxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAoaW5WaWV3ICYmIGhhc01vcmVQb3N0ICYmICFsb2FkUG9zdExvYWRpbmcpIHtcclxuICAgICAgICBjb25zdCBsYXN0SWQgPSBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdPy5pZDsgLy8g7J247ZS864uI7Yq4IOyKpO2BrOuhpCDqtaztmITsnYQg7JyE7ZW0IO2UhOuhoO2KuCDshJzrsoTsnZgg7ZiE7J6sIOugjOuNlOungeykkeyduCDqsozsi5zquIDrk6TspJEg6rCA7J6lIOyVhOuemCDqsozsi5zrrLzsnZgg6rKM7Iuc64SY67KE66W8IGxhc3RJZOuhnFxyXG4gICAgICAgIC8vIGRpc3BhdGNoKHtcclxuICAgICAgICAvLyAgIHR5cGU6IExPQURfT19SRUNJRVZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAvLyAgIGxhc3RJZCwgLy8g6rKM7Iuc66y8IDEw6rCc66W8IOyalOyyre2VmOqzoCDsnbjtlLzri4jtirgg7Iqk7YGs66GkIOq1rO2YhOydhCDsnITtlbQgbGFzdElk66W8IOyghOyGoe2VmOyXrCBsYXN0SWQg6riw7KSA7Jy866GcIDEw6rCc66W8IOyemOudvCDrsJvslYTsmKjri6QuXHJcbiAgICAgICAgLy8gY2F0ZWdvcnksIC8vIOunpOqwnOuzgOyImOuhnCDslrTrlqQg7Lm07YWM6rOg66as7J2YIOqyjOyLnOusvOydhCDrk6Tqs6DsmKzsp4DquYzsp4Ag7KCV7ZW07KSA64uk66m0Pz9cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtpblZpZXcsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcsIG1haW5Qb3N0cywgaWRdLFxyXG4gICk7XHJcblxyXG4gIGlmICghbWUpIHtcclxuICAgIHJldHVybiAn64K0IOygleuztCDroZzrlKnspJEuLi4nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7rrLzqsbTsnYQg67mM66Ck7KSYIHwg7Jqw66as64+Z64SkIOugjO2DiOuMgOyepTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEFwcExheW91dD5cclxuICAgICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPil9XHJcbiAgICAgICAgPGRpdiByZWY9e2hhc01vcmVQb3N0ICYmICFsb2FkUG9zdExvYWRpbmcgPyByZWYgOiB1bmRlZmluZWR9IC8+XHJcbiAgICAgICAgey8qIOyVhOyngSDqsozsi5zrrLzsnYQg7KCE67aAIOyXtOuejO2VmOyngCDslYrslZjqs6AgJiYg6rKM7Iuc66y87J2EIOyalOyyre2VmOuKlCDspJHsnbQg7JWE64uQ6rK97JqwIOyduO2UvOuLiO2KuCDsiqTtgazroaQg64+Z7J6RIDog7JWE64uQ6rK97JqwIHVuZGVmaW5lZCAqL31cclxuICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7IC8vIO2DgCDsnKDsoIDqsIQg7L+g7YKk6rCAIOqzteycoOuQmOuKlCDrrLjsoJzrpbwg67Cp7KeA7ZWY6riwIOychO2VqFxyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfVxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0UmVjaWV2ZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==