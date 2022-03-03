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
      id = _useSelector2.id,
      category = _useSelector2.category;

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
        // 태그 버튼을 클릭함에 따라 post 리듀서의 카테고리 변수를 변경시키고 그에 따라 useEffect가 발동하게 하여
        // 해당 카테고리에 해당하는 포스트를 들고 오게 한다.
        // 이럼 게시글의 종류를 분류하는 변수가 두개가 필요하게됨. 해당 게시판 / 해당 카테고리

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
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "\uBB3C\uAC74\uC744 \uBE4C\uB824\uC918 | \uC6B0\uB9AC\uB3D9\uB124 \uB80C\uD0C8\uB300\uC7A5")), __jsx(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("span", {
    style: {
      marginRight: 8
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
        lineNumber: 50,
        columnNumber: 11
      }
    }, tag);
  }), me && __jsx(PostForm, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 16
    }
  }), mainPosts.map(function (post) {
    return __jsx(PostCard, {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 34
      }
    });
  }), __jsx("div", {
    ref: hasMorePost && !loadPostLoading ? ref : undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  })));
}

_s(ObjectRecieve, "KPRE/wvQPzbg8LYVpc+U2OxYAxM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb2JqZWN0cmVjaWV2ZS5qcyJdLCJuYW1lcyI6WyJPYmplY3RSZWNpZXZlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUluVmlldyIsInJlZiIsImluVmlldyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdExvYWRpbmciLCJpZCIsImNhdGVnb3J5IiwidXNlRWZmZWN0IiwibGFzdElkIiwibGVuZ3RoIiwidHlwZSIsIkxPQURfT19SRUNJRVZFX1BPU1RfUkVRVUVTVCIsIm1hcmdpblJpZ2h0IiwidGFnc0RhdGEiLCJtYXAiLCJ0YWciLCJzZWxlY3RlZFRhZ3MiLCJpbmRleE9mIiwiY2hlY2tlZCIsImhhbmRsZUNoYW5nZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUdBOztBQUVBLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFDdkIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxtQkFBc0JDLDZFQUFTLEVBQS9CO0FBQUE7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBWUMsTUFBWjs7QUFDQSxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLHNCQUFtRUgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FBOUU7QUFBQSxNQUFRQyxTQUFSLGlCQUFRQSxTQUFSO0FBQUEsTUFBbUJDLFdBQW5CLGlCQUFtQkEsV0FBbkI7QUFBQSxNQUFnQ0MsZUFBaEMsaUJBQWdDQSxlQUFoQztBQUFBLE1BQWlEQyxFQUFqRCxpQkFBaURBLEVBQWpEO0FBQUEsTUFBc0RDLFFBQXRELGlCQUFzREEsUUFBdEQ7O0FBRUFDLHlEQUFTLEVBQUU7QUFDVCxjQUFNO0FBQ0osUUFBSVgsTUFBTSxJQUFJTyxXQUFWLElBQXlCLENBQUNDLGVBQTlCLEVBQStDO0FBQUE7O0FBQzdDLFVBQU1JLE1BQU0saUJBQUdOLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDTyxNQUFWLEdBQW1CLENBQXBCLENBQVosK0NBQUcsV0FBaUNKLEVBQWhELENBRDZDLENBQ087O0FBQ3BEYixjQUFRLENBQUM7QUFDUGtCLFlBQUksRUFBRUMsMEVBREM7QUFFUEgsY0FBTSxFQUFOQSxNQUZPO0FBRUM7QUFDUkYsZ0JBQVEsRUFBUkEsUUFITyxDQUdHO0FBRVY7QUFDQTtBQUNBOztBQVBPLE9BQUQsQ0FBUjtBQVNEO0FBQ0YsR0FkTSxFQWVQLENBQUNWLE1BQUQsRUFBU08sV0FBVCxFQUFzQkMsZUFBdEIsRUFBdUNGLFNBQXZDLEVBQWtERyxFQUFsRCxFQUF1REMsUUFBdkQsQ0FmTyxDQUFUOztBQWtCQSxNQUFJLENBQUNOLEVBQUwsRUFBUztBQUNQLFdBQU8sYUFBUDtBQUNEOztBQUVELFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpR0FERixDQURGLEVBSUUsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxTQUFLLEVBQUU7QUFBRVksaUJBQVcsRUFBRTtBQUFmLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHQyxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFBQyxHQUFHO0FBQUEsV0FDZixNQUFDLFlBQUQ7QUFDRSxTQUFHLEVBQUVBLEdBRFA7QUFFRSxhQUFPLEVBQUVDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkYsR0FBckIsSUFBNEIsQ0FBQyxDQUZ4QztBQUdFLGNBQVEsRUFBRSxrQkFBQUcsT0FBTztBQUFBLGVBQUlDLFlBQVksQ0FBQ0osR0FBRCxFQUFNRyxPQUFOLENBQWhCO0FBQUEsT0FIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUtHSCxHQUxILENBRGU7QUFBQSxHQUFoQixDQUZILEVBV0dmLEVBQUUsSUFBSSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhULEVBWUdFLFNBQVMsQ0FBQ1ksR0FBVixDQUFjLFVBQUNiLElBQUQ7QUFBQSxXQUFVLE1BQUMsUUFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDSSxFQUFwQjtBQUF3QixVQUFJLEVBQUVKLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVjtBQUFBLEdBQWQsQ0FaSCxFQWFFO0FBQUssT0FBRyxFQUFFRSxXQUFXLElBQUksQ0FBQ0MsZUFBaEIsR0FBa0NULEdBQWxDLEdBQXdDeUIsU0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBSkYsQ0FERjtBQXVCRDs7R0FuRFE3QixhO1VBQ1VFLHVELEVBQ0tDLHFFLEVBQ1BHLHVELEVBQ29EQSx1RDs7O0tBSjVETixhOztBQXNFTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FiZmM3MDVlOTZmZDE2ZjZjNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dC9BcHBMYXlvdXQnO1xyXG5cclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5mdW5jdGlvbiBPYmplY3RSZWNpZXZlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0TG9hZGluZywgaWQgLCBjYXRlZ29yeSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCAvLyDtmZTrqbQg7IKs7J207KaI7JeQIOuUsOudvCDrsoTqt7jqsIAg67Cc7IOd7KSRIGZpeDFcclxuICAgICgpID0+IHtcclxuICAgICAgaWYgKGluVmlldyAmJiBoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RMb2FkaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQ7IC8vIOyduO2UvOuLiO2KuCDsiqTtgazroaQg6rWs7ZiE7J2EIOychO2VtCDtlITroaDtirgg7ISc67KE7J2YIO2YhOyerCDroIzrjZTrp4HspJHsnbgg6rKM7Iuc6riA65Ok7KSRIOqwgOyepSDslYTrnpgg6rKM7Iuc66y87J2YIOqyjOyLnOuEmOuyhOulvCBsYXN0SWTroZxcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICBsYXN0SWQsIC8vIOqyjOyLnOusvCAxMOqwnOulvCDsmpTssq3tlZjqs6Ag7J247ZS864uI7Yq4IOyKpO2BrOuhpCDqtaztmITsnYQg7JyE7ZW0IGxhc3RJZOulvCDsoITshqHtlZjsl6wgbGFzdElkIOq4sOykgOycvOuhnCAxMOqwnOulvCDsnpjrnbwg67Cb7JWE7Jio64ukLlxyXG4gICAgICAgICAgY2F0ZWdvcnksIC8vIOunpOqwnOuzgOyImOuhnCDslrTrlqQg7Lm07YWM6rOg66as7J2YIOqyjOyLnOusvOydhCDrk6Tqs6DsmKzsp4DquYzsp4Ag7KCV7ZW07KSA64uk66m0Pz9cclxuXHJcbiAgICAgICAgICAvLyDtg5zqt7gg67KE7Yq87J2EIO2BtOumre2VqOyXkCDrlLDrnbwgcG9zdCDrpqzrk4DshJzsnZgg7Lm07YWM6rOg66asIOuzgOyImOulvCDrs4Dqsr3si5ztgqTqs6Ag6re47JeQIOuUsOudvCB1c2VFZmZlY3TqsIAg67Cc64+Z7ZWY6rKMIO2VmOyXrFxyXG4gICAgICAgICAgLy8g7ZW064u5IOy5tO2FjOqzoOumrOyXkCDtlbTri7ntlZjripQg7Y+s7Iqk7Yq466W8IOuTpOqzoCDsmKTqsowg7ZWc64ukLlxyXG4gICAgICAgICAgLy8g7J2065+8IOqyjOyLnOq4gOydmCDsooXrpZjrpbwg67aE66WY7ZWY64qUIOuzgOyImOqwgCDrkZDqsJzqsIAg7ZWE7JqU7ZWY6rKM65CoLiDtlbTri7kg6rKM7Iuc7YyQIC8g7ZW064u5IOy5tO2FjOqzoOumrFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2luVmlldywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0TG9hZGluZywgbWFpblBvc3RzLCBpZCAsIGNhdGVnb3J5XSxcclxuICApO1xyXG5cclxuICBpZiAoIW1lKSB7XHJcbiAgICByZXR1cm4gJ+uCtCDsoJXrs7Qg66Gc65Sp7KSRLi4uJztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+66y86rG07J2EIOu5jOugpOykmCB8IOyasOumrOuPmeuEpCDroIztg4jrjIDsnqU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDggfX0+Q2F0ZWdvcmllczo8L3NwYW4+XHJcbiAgICAgICAge3RhZ3NEYXRhLm1hcCh0YWcgPT4gKFxyXG4gICAgICAgICAgPENoZWNrYWJsZVRhZ1xyXG4gICAgICAgICAgICBrZXk9e3RhZ31cclxuICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRUYWdzLmluZGV4T2YodGFnKSA+IC0xfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Y2hlY2tlZCA9PiBoYW5kbGVDaGFuZ2UodGFnLCBjaGVja2VkKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RhZ31cclxuICAgICAgICAgIDwvQ2hlY2thYmxlVGFnPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgICAgICA8ZGl2IHJlZj17aGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0TG9hZGluZyA/IHJlZiA6IHVuZGVmaW5lZH0gLz5cclxuICAgICAgICB7Lyog7JWE7KeBIOqyjOyLnOusvOydhCDsoITrtoAg7Je0656M7ZWY7KeAIOyViuyVmOqzoCAmJiDqsozsi5zrrLzsnYQg7JqU7LKt7ZWY64qUIOykkeydtCDslYTri5Dqsr3smrAg7J247ZS864uI7Yq4IOyKpO2BrOuhpCDrj5nsnpEgOiDslYTri5Dqsr3smrAgdW5kZWZpbmVkICovfVxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHsgLy8g7YOAIOycoOyggOqwhCDsv6DtgqTqsIAg6rO17Jyg65CY64qUIOusuOygnOulvCDrsKnsp4DtlZjquLAg7JyE7ZWoXHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfT19SRUNJRVZFX1BPU1RfUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPYmplY3RSZWNpZXZlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9