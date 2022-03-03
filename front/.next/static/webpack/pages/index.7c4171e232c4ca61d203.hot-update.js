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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\pages\\objectrecieve.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function ObjectRecieve() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__["useInView"])(),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 2),
      ref = _useInView2[0],
      inView = _useInView2[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost,
      loadPostLoading = _useSelector2.loadPostLoading,
      id = _useSelector2.id;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])( // 화면 사이즈에 따라 버그가 발생중 fix1
  function () {
    if (inView && hasMorePost && !loadPostLoading) {
      var _mainPosts;

      var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id; // 인피니트 스크롤 구현을 위해 프론트 서버의 현재 렌더링중인 게시글들중 가장 아래 게시물의 게시넘버를 lastId로

      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_O_RECIEVE_POST_REQUEST"],
        lastId: lastId,
        // 게시물 10개를 요청하고 인피니트 스크롤 구현을 위해 lastId를 전송하여 lastId 기준으로 10개를 잘라 받아온다.
        category: category // 매개변수로 어떤 카테고리의 게시물을 들고올지까지 정해준다면??

      });
    }
  }, [inView, hasMorePost, loadPostLoading, mainPosts, id, category]);

  if (!me) {
    return '내 정보 로딩중...';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "\uBB3C\uAC74\uC744 \uBE4C\uB824\uC918 | \uC6B0\uB9AC\uB3D9\uB124 \uB80C\uD0C8\uB300\uC7A5")), __jsx(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("span", {
    style: {
      marginRight: 8
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
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
        lineNumber: 46,
        columnNumber: 11
      }
    }, tag);
  }), me && __jsx(PostForm, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 16
    }
  }), mainPosts.map(function (post) {
    return __jsx(PostCard, {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 34
      }
    });
  }), __jsx("div", {
    ref: hasMorePost && !loadPostLoading ? ref : undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })));
}

_s(ObjectRecieve, "KwTAEW+prR9UNXNobwqa8bJC52k=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__["useInView"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2JqZWN0cmVjaWV2ZS5qcyJdLCJuYW1lcyI6WyJPYmplY3RSZWNpZXZlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdExvYWRpbmciLCJpZCIsInVzZUVmZmVjdCIsImxhc3RJZCIsImxlbmd0aCIsInR5cGUiLCJMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QiLCJjYXRlZ29yeSIsIm1hcmdpblJpZ2h0IiwidGFnc0RhdGEiLCJtYXAiLCJ0YWciLCJzZWxlY3RlZFRhZ3MiLCJpbmRleE9mIiwiY2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUdBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFDdkIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxtQkFBc0JDLDZFQUFTLEVBQS9CO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFDQSxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLHNCQUF3REgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FBbkU7QUFBQSxNQUFRQyxTQUFSLGlCQUFRQSxTQUFSO0FBQUEsTUFBbUJDLFdBQW5CLGlCQUFtQkEsV0FBbkI7QUFBQSxNQUFnQ0MsZUFBaEMsaUJBQWdDQSxlQUFoQztBQUFBLE1BQWlEQyxFQUFqRCxpQkFBaURBLEVBQWpEOztBQUVBQyx5REFBUyxFQUFFO0FBQ1QsY0FBTTtBQUNKLFFBQUlWLE1BQU0sSUFBSU8sV0FBVixJQUF5QixDQUFDQyxlQUE5QixFQUErQztBQUFBOztBQUM3QyxVQUFNRyxNQUFNLGlCQUFHTCxTQUFTLENBQUNBLFNBQVMsQ0FBQ00sTUFBVixHQUFtQixDQUFwQixDQUFaLCtDQUFHLFdBQWlDSCxFQUFoRCxDQUQ2QyxDQUNPOztBQUNwRGIsY0FBUSxDQUFDO0FBQ1BpQixZQUFJLEVBQUVDLDBFQURDO0FBRVBILGNBQU0sRUFBTkEsTUFGTztBQUVDO0FBQ1JJLGdCQUFRLEVBQVJBLFFBSE8sQ0FHRzs7QUFISCxPQUFELENBQVI7QUFLRDtBQUNGLEdBVk0sRUFXUCxDQUFDZixNQUFELEVBQVNPLFdBQVQsRUFBc0JDLGVBQXRCLEVBQXVDRixTQUF2QyxFQUFrREcsRUFBbEQsRUFBdURNLFFBQXZELENBWE8sQ0FBVDs7QUFjQSxNQUFJLENBQUNYLEVBQUwsRUFBUztBQUNQLFdBQU8sYUFBUDtBQUNEOztBQUVELFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpR0FERixDQURGLEVBSUUsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxTQUFLLEVBQUU7QUFBRVksaUJBQVcsRUFBRTtBQUFmLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHQyxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFBQyxHQUFHO0FBQUEsV0FDZixNQUFDLFlBQUQ7QUFDRSxTQUFHLEVBQUVBLEdBRFA7QUFFRSxhQUFPLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkYsR0FBckIsSUFBNEIsQ0FBQyxDQUZ4QztBQUdFLGNBQVEsRUFBRSxrQkFBQUcsT0FBTztBQUFBLGVBQUlDLFlBQVksQ0FBQ0osR0FBRCxFQUFNRyxPQUFOLENBQWhCO0FBQUEsT0FIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHSCxHQUxILENBRGU7QUFBQSxHQUFoQixDQUZILEVBV0dmLEVBQUUsSUFBSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhULEVBWUdFLFNBQVMsQ0FBQ1ksR0FBVixDQUFjLFVBQUNiLElBQUQ7QUFBQSxXQUFVLE1BQUMsUUFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDSSxFQUFwQjtBQUF3QixVQUFJLEVBQUVKLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVjtBQUFBLEdBQWQsQ0FaSCxFQWFFO0FBQUssT0FBRyxFQUFFRSxXQUFXLElBQUksQ0FBQ0MsZUFBaEIsR0FBa0NULEdBQWxDLEdBQXdDeUIsU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBSkYsQ0FERjtBQXVCRDs7R0EvQ1E3QixhO1VBQ1VFLHVELEVBQ0tDLHFFLEVBQ1BHLHVELEVBQ3lDQSx1RDs7O0tBSmpETixhOztBQWtFTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2M0MTcxZTIzMmM0Y2E2MWQyMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dC9BcHBMYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBPYmplY3RSZWNpZXZlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0TG9hZGluZywgaWQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIHVzZUVmZmVjdCggLy8g7ZmU66m0IOyCrOydtOymiOyXkCDrlLDrnbwg67KE6re46rCAIOuwnOyDneykkSBmaXgxXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGlmIChpblZpZXcgJiYgaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0TG9hZGluZykge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkOyAvLyDsnbjtlLzri4jtirgg7Iqk7YGs66GkIOq1rO2YhOydhCDsnITtlbQg7ZSE66Gg7Yq4IOyEnOuyhOydmCDtmITsnqwg66CM642U66eB7KSR7J24IOqyjOyLnOq4gOuTpOykkSDqsIDsnqUg7JWE656YIOqyjOyLnOusvOydmCDqsozsi5zrhJjrsoTrpbwgbGFzdElk66GcXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgbGFzdElkLCAvLyDqsozsi5zrrLwgMTDqsJzrpbwg7JqU7LKt7ZWY6rOgIOyduO2UvOuLiO2KuCDsiqTtgazroaQg6rWs7ZiE7J2EIOychO2VtCBsYXN0SWTrpbwg7KCE7Iah7ZWY7JesIGxhc3RJZCDquLDspIDsnLzroZwgMTDqsJzrpbwg7J6Y6528IOuwm+yVhOyYqOuLpC5cclxuICAgICAgICAgIGNhdGVnb3J5LCAvLyDrp6TqsJzrs4DsiJjroZwg7Ja065akIOy5tO2FjOqzoOumrOydmCDqsozsi5zrrLzsnYQg65Ok6rOg7Jis7KeA6rmM7KeAIOygle2VtOykgOuLpOuptD8/XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbaW5WaWV3LCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RMb2FkaW5nLCBtYWluUG9zdHMsIGlkICwgY2F0ZWdvcnldLFxyXG4gICk7XHJcblxyXG4gIGlmICghbWUpIHtcclxuICAgIHJldHVybiAn64K0IOygleuztCDroZzrlKnspJEuLi4nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7rrLzqsbTsnYQg67mM66Ck7KSYIHwg7Jqw66as64+Z64SkIOugjO2DiOuMgOyepTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEFwcExheW91dD5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogOCB9fT5DYXRlZ29yaWVzOjwvc3Bhbj5cclxuICAgICAgICB7dGFnc0RhdGEubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgICA8Q2hlY2thYmxlVGFnXHJcbiAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRhZ3MuaW5kZXhPZih0YWcpID4gLTF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja2VkID0+IGhhbmRsZUNoYW5nZSh0YWcsIGNoZWNrZWQpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGFnfVxyXG4gICAgICAgICAgPC9DaGVja2FibGVUYWc+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgICAgIDxkaXYgcmVmPXtoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RMb2FkaW5nID8gcmVmIDogdW5kZWZpbmVkfSAvPlxyXG4gICAgICAgIHsvKiDslYTsp4Eg6rKM7Iuc66y87J2EIOyghOu2gCDsl7TrnoztlZjsp4Ag7JWK7JWY6rOgICYmIOqyjOyLnOusvOydhCDsmpTssq3tlZjripQg7KSR7J20IOyVhOuLkOqyveyasCDsnbjtlLzri4jtirgg7Iqk7YGs66GkIOuPmeyekSA6IOyVhOuLkOqyveyasCB1bmRlZmluZWQgKi99XHJcbiAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkgeyAvLyDtg4Ag7Jyg7KCA6rCEIOy/oO2CpOqwgCDqs7XsnKDrkJjripQg66y47KCc66W8IOuwqeyngO2VmOq4sCDsnITtlahcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH1cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9iamVjdFJlY2lldmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=