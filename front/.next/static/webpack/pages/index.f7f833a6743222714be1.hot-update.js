webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/swr/dist/index.esm.js":
false,

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
  }, [inView, hasMorePost, loadPostLoading, mainPosts, id]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2JqZWN0cmVjaWV2ZS5qcyJdLCJuYW1lcyI6WyJPYmplY3RSZWNpZXZlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdExvYWRpbmciLCJpZCIsInVzZUVmZmVjdCIsImxhc3RJZCIsImxlbmd0aCIsInR5cGUiLCJMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QiLCJjYXRlZ29yeSIsIm1hcmdpblJpZ2h0IiwidGFnc0RhdGEiLCJtYXAiLCJ0YWciLCJzZWxlY3RlZFRhZ3MiLCJpbmRleE9mIiwiY2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUdBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFDdkIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxtQkFBc0JDLDZFQUFTLEVBQS9CO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFDQSxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLHNCQUF3REgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FBbkU7QUFBQSxNQUFRQyxTQUFSLGlCQUFRQSxTQUFSO0FBQUEsTUFBbUJDLFdBQW5CLGlCQUFtQkEsV0FBbkI7QUFBQSxNQUFnQ0MsZUFBaEMsaUJBQWdDQSxlQUFoQztBQUFBLE1BQWlEQyxFQUFqRCxpQkFBaURBLEVBQWpEOztBQUVBQyx5REFBUyxFQUFFO0FBQ1QsY0FBTTtBQUNKLFFBQUlWLE1BQU0sSUFBSU8sV0FBVixJQUF5QixDQUFDQyxlQUE5QixFQUErQztBQUFBOztBQUM3QyxVQUFNRyxNQUFNLGlCQUFHTCxTQUFTLENBQUNBLFNBQVMsQ0FBQ00sTUFBVixHQUFtQixDQUFwQixDQUFaLCtDQUFHLFdBQWlDSCxFQUFoRCxDQUQ2QyxDQUNPOztBQUNwRGIsY0FBUSxDQUFDO0FBQ1BpQixZQUFJLEVBQUVDLDBFQURDO0FBRVBILGNBQU0sRUFBTkEsTUFGTztBQUVDO0FBQ1JJLGdCQUFRLEVBQVJBLFFBSE8sQ0FHRzs7QUFISCxPQUFELENBQVI7QUFLRDtBQUNGLEdBVk0sRUFXUCxDQUFDZixNQUFELEVBQVNPLFdBQVQsRUFBc0JDLGVBQXRCLEVBQXVDRixTQUF2QyxFQUFrREcsRUFBbEQsQ0FYTyxDQUFUOztBQWNBLE1BQUksQ0FBQ0wsRUFBTCxFQUFTO0FBQ1AsV0FBTyxhQUFQO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlHQURGLENBREYsRUFJRSxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFNBQUssRUFBRTtBQUFFWSxpQkFBVyxFQUFFO0FBQWYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUdDLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUFDLEdBQUc7QUFBQSxXQUNmLE1BQUMsWUFBRDtBQUNFLFNBQUcsRUFBRUEsR0FEUDtBQUVFLGFBQU8sRUFBRUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCRixHQUFyQixJQUE0QixDQUFDLENBRnhDO0FBR0UsY0FBUSxFQUFFLGtCQUFBRyxPQUFPO0FBQUEsZUFBSUMsWUFBWSxDQUFDSixHQUFELEVBQU1HLE9BQU4sQ0FBaEI7QUFBQSxPQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0dILEdBTEgsQ0FEZTtBQUFBLEdBQWhCLENBRkgsRUFXR2YsRUFBRSxJQUFJLE1BQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWFQsRUFZR0UsU0FBUyxDQUFDWSxHQUFWLENBQWMsVUFBQ2IsSUFBRDtBQUFBLFdBQVUsTUFBQyxRQUFEO0FBQVUsU0FBRyxFQUFFQSxJQUFJLENBQUNJLEVBQXBCO0FBQXdCLFVBQUksRUFBRUosSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFWO0FBQUEsR0FBZCxDQVpILEVBYUU7QUFBSyxPQUFHLEVBQUVFLFdBQVcsSUFBSSxDQUFDQyxlQUFoQixHQUFrQ1QsR0FBbEMsR0FBd0N5QixTQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsQ0FKRixDQURGO0FBdUJEOztHQS9DUTdCLGE7VUFDVUUsdUQsRUFDS0MscUUsRUFDUEcsdUQsRUFDeUNBLHVEOzs7S0FKakROLGE7O0FBa0VNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mN2Y4MzNhNjc0MzIyMjcxNGJlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0L0FwcExheW91dCc7XHJcblxyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmZ1bmN0aW9uIE9iamVjdFJlY2lldmUoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RMb2FkaW5nLCBpZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCAvLyDtmZTrqbQg7IKs7J207KaI7JeQIOuUsOudvCDrsoTqt7jqsIAg67Cc7IOd7KSRIGZpeDFcclxuICAgICgpID0+IHtcclxuICAgICAgaWYgKGluVmlldyAmJiBoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RMb2FkaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQ7IC8vIOyduO2UvOuLiO2KuCDsiqTtgazroaQg6rWs7ZiE7J2EIOychO2VtCDtlITroaDtirgg7ISc67KE7J2YIO2YhOyerCDroIzrjZTrp4HspJHsnbgg6rKM7Iuc6riA65Ok7KSRIOqwgOyepSDslYTrnpgg6rKM7Iuc66y87J2YIOqyjOyLnOuEmOuyhOulvCBsYXN0SWTroZxcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICBsYXN0SWQsIC8vIOqyjOyLnOusvCAxMOqwnOulvCDsmpTssq3tlZjqs6Ag7J247ZS864uI7Yq4IOyKpO2BrOuhpCDqtaztmITsnYQg7JyE7ZW0IGxhc3RJZOulvCDsoITshqHtlZjsl6wgbGFzdElkIOq4sOykgOycvOuhnCAxMOqwnOulvCDsnpjrnbwg67Cb7JWE7Jio64ukLlxyXG4gICAgICAgICAgY2F0ZWdvcnksIC8vIOunpOqwnOuzgOyImOuhnCDslrTrlqQg7Lm07YWM6rOg66as7J2YIOqyjOyLnOusvOydhCDrk6Tqs6DsmKzsp4DquYzsp4Ag7KCV7ZW07KSA64uk66m0Pz9cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtpblZpZXcsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcsIG1haW5Qb3N0cywgaWRdLFxyXG4gICk7XHJcblxyXG4gIGlmICghbWUpIHtcclxuICAgIHJldHVybiAn64K0IOygleuztCDroZzrlKnspJEuLi4nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7rrLzqsbTsnYQg67mM66Ck7KSYIHwg7Jqw66as64+Z64SkIOugjO2DiOuMgOyepTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEFwcExheW91dD5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogOCB9fT5DYXRlZ29yaWVzOjwvc3Bhbj5cclxuICAgICAgICB7dGFnc0RhdGEubWFwKHRhZyA9PiAoXHJcbiAgICAgICAgICA8Q2hlY2thYmxlVGFnXHJcbiAgICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZFRhZ3MuaW5kZXhPZih0YWcpID4gLTF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGVja2VkID0+IGhhbmRsZUNoYW5nZSh0YWcsIGNoZWNrZWQpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGFnfVxyXG4gICAgICAgICAgPC9DaGVja2FibGVUYWc+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgICAgIDxkaXYgcmVmPXtoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RMb2FkaW5nID8gcmVmIDogdW5kZWZpbmVkfSAvPlxyXG4gICAgICAgIHsvKiDslYTsp4Eg6rKM7Iuc66y87J2EIOyghOu2gCDsl7TrnoztlZjsp4Ag7JWK7JWY6rOgICYmIOqyjOyLnOusvOydhCDsmpTssq3tlZjripQg7KSR7J20IOyVhOuLkOqyveyasCDsnbjtlLzri4jtirgg7Iqk7YGs66GkIOuPmeyekSA6IOyVhOuLkOqyveyasCB1bmRlZmluZWQgKi99XHJcbiAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkgeyAvLyDtg4Ag7Jyg7KCA6rCEIOy/oO2CpOqwgCDqs7XsnKDrkJjripQg66y47KCc66W8IOuwqeyngO2VmOq4sCDsnITtlahcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH1cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9iamVjdFJlY2lldmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=