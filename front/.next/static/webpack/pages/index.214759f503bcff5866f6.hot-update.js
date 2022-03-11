webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.m.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Tags */ "./components/Tags.js");
/* harmony import */ var _components_PostCard1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PostCard1 */ "./components/PostCard1.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PostCard2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/PostCard2 */ "./components/PostCard2.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SearchBar */ "./components/SearchBar.js");
var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function Home() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      local = _useSelector.local;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost,
      loadPostLoading = _useSelector2.loadPostLoading,
      reTweetError = _useSelector2.reTweetError,
      id = _useSelector2.id,
      object_TagsData = _useSelector2.object_TagsData,
      selectedTag = _useSelector2.selectedTag;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      view = _useState[0],
      setView = _useState[1];

  var onSwitch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView(!view);
  }, [view]); // useEffect(()=>{
  //   if(local==="")
  //   dispatch({
  //     type:UPDATE_LOCAL,
  //     data:me.location,
  //   })
  // },[me.location]);

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var onScroll = function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100) {
        if (hasMorePost && !loadPostLoading) {
          var _mainPosts;

          var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id; // 인피니트 스크롤 구현을 위해 프론트 서버의 현재 렌더링중인 게시글들중 가장 아래 게시물의 게시넘버를 lastId로

          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POST_REQUEST"],
            data: selectedTag,
            boardNum: 1,
            lastId: lastId
          });
        } // 지역변수를 건드려봣자 어차피 렌더링이 되지 않는다. 실제 동작으로 테스트 해야할듯

      }
    };

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePost, loadPostLoading]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, view ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tagsData: object_TagsData,
    boardNum: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onSwitch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "\uC804\uD658\uC2A4\uC704\uCE58"), mainPosts.map(function (post) {
    return __jsx(_components_PostCard1__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 36
      }
    });
  })) : __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tagsData: object_TagsData,
    boardNum: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onSwitch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, "\uC804\uD658\uC2A4\uC704\uCE58"), mainPosts.map(function (post) {
    return __jsx(_components_PostCard2__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 36
      }
    });
  })));
}

_s(Home, "PRSNfpbUogBXhKuNmsQKgBIKEdw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9jYWwiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdExvYWRpbmciLCJyZVR3ZWV0RXJyb3IiLCJpZCIsIm9iamVjdF9UYWdzRGF0YSIsInNlbGVjdGVkVGFnIiwidXNlU3RhdGUiLCJ2aWV3Iiwic2V0VmlldyIsIm9uU3dpdGNoIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJvblNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJ0eXBlIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJkYXRhIiwiYm9hcmROdW0iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUNkLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQW9CQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUEvQjtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7QUFBQSxNQUFXQyxLQUFYLGdCQUFXQSxLQUFYOztBQUNBLHNCQVFJSiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNJLElBQWpCO0FBQUEsR0FBRCxD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VUFBQzdCLElBQUQ7QUFBQSxXQUFVLE1BQUMsOERBQUQ7QUFBVyxTQUFHLEVBQUVBLElBQUksQ0FBQ0ssRUFBckI7QUFBeUIsVUFBSSxFQUFFTCxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVY7QUFBQSxHQUFkLENBSEgsQ0FSSixDQURGO0FBaUJEOztHQS9EUVIsSTtVQUNVRSx1RCxFQUNHQyx1RCxFQVNoQkEsdUQ7OztLQVhHSCxJOztBQTRGTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjE0NzU5ZjUwM2JjZmY1ODY2ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHt1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCB7RU5EfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHtCdXR0b24sIENvbCwgUm93fSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQvQXBwTGF5b3V0JztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSc7XHJcblxyXG5pbXBvcnQge0xPQURfTVlfSU5GT19SRVFVRVNULCBsb2dvdXRSZXF1ZXN0QWN0aW9uLCBVUERBVEVfTE9DQUx9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQge0xPQURfUE9TVF9SRVFVRVNULCBURVNULCBVUERBVEVfQk9BUkQsIFVQREFURV9UQUd9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgVGFncyBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWdzXCI7XHJcbmltcG9ydCBQb3N0Q2FyZDEgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmQxXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFBvc3RDYXJkMiBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZDJcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHttZSwgbG9jYWx9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7XHJcbiAgICBtYWluUG9zdHMsXHJcbiAgICBoYXNNb3JlUG9zdCxcclxuICAgIGxvYWRQb3N0TG9hZGluZyxcclxuICAgIHJlVHdlZXRFcnJvcixcclxuICAgIGlkLFxyXG4gICAgb2JqZWN0X1RhZ3NEYXRhLFxyXG4gICAgc2VsZWN0ZWRUYWdcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3Qgb25Td2l0Y2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRWaWV3KCF2aWV3KTtcclxuICB9LCBbdmlld10pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAvLyAgIGlmKGxvY2FsPT09XCJcIilcclxuICAvLyAgIGRpc3BhdGNoKHtcclxuICAvLyAgICAgdHlwZTpVUERBVEVfTE9DQUwsXHJcbiAgLy8gICAgIGRhdGE6bWUubG9jYXRpb24sXHJcbiAgLy8gICB9KVxyXG4gIC8vIH0sW21lLmxvY2F0aW9uXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMTAwKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0ICYmICFsb2FkUG9zdExvYWRpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkOyAvLyDsnbjtlLzri4jtirgg7Iqk7YGs66GkIOq1rO2YhOydhCDsnITtlbQg7ZSE66Gg7Yq4IOyEnOuyhOydmCDtmITsnqwg66CM642U66eB7KSR7J24IOqyjOyLnOq4gOuTpOykkSDqsIDsnqUg7JWE656YIOqyjOyLnOusvOydmCDqsozsi5zrhJjrsoTrpbwgbGFzdElk66GcXHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBzZWxlY3RlZFRhZyxcclxuICAgICAgICAgICAgYm9hcmROdW06IDEsXHJcbiAgICAgICAgICAgIGxhc3RJZDogbGFzdElkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAvLyDsp4Dsl63rs4DsiJjrpbwg6rG065Oc66Ck67Sj7J6QIOyWtOywqO2UvCDroIzrjZTrp4HsnbQg65CY7KeAIOyViuuKlOuLpC4g7Iuk7KCcIOuPmeyekeycvOuhnCDthYzsiqTtirgg7ZW07JW87ZWg65OvXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2hhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt2aWV3ID8gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8VGFncyB0YWdzRGF0YT17b2JqZWN0X1RhZ3NEYXRhfSBib2FyZE51bT17MX0vPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN3aXRjaH0+7KCE7ZmY7Iqk7JyE7LmYPC9CdXR0b24+XHJcbiAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkMSBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8VGFncyB0YWdzRGF0YT17b2JqZWN0X1RhZ3NEYXRhfSBib2FyZE51bT17MX0vPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN3aXRjaH0+7KCE7ZmY7Iqk7JyE7LmYPC9CdXR0b24+XHJcbiAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkMiBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkgeyAvLyDtg4Ag7Jyg7KCA6rCEIOy/oO2CpOqwgCDqs7XsnKDrkJjripQg66y47KCc66W8IOuwqeyngO2VmOq4sCDsnITtlahcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH1cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogVVBEQVRFX1RBRyxcclxuICAgIGRhdGE6IFwi7KCE7LK0XCIsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBVUERBVEVfQk9BUkQsXHJcbiAgICBkYXRhOiAxLFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBcIuyghOyytFwiLFxyXG4gICAgYm9hcmROdW06IDEsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==