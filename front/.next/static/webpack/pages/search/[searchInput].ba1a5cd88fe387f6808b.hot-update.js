webpackHotUpdate_N_E("pages/search/[searchInput]",{

/***/ "./pages/search/[searchInput].js":
/*!***************************************!*\
  !*** ./pages/search/[searchInput].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Tags */ "./components/Tags.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_PostCard1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PostCard1 */ "./components/PostCard1.js");
/* harmony import */ var _components_PostCard2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PostCard2 */ "./components/PostCard2.js");
var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\pages\\search\\[searchInput].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function SearchResult() {
  _s();

  var _this = this;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var searchInput = router.query.searchInput; // [tag].js 파일 명의 [] 부분이 들어간다

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePost = _useSelector.hasMorePost,
      loadPostLoading = _useSelector.loadPostLoading,
      boardNum = _useSelector.boardNum,
      object_TagsData = _useSelector.object_TagsData;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector2.userInfo,
      me = _useSelector2.me,
      local = _useSelector2.local;

  var categoryAndsearch = searchInput.split('*');
  var select = categoryAndsearch[0];
  var searchword = categoryAndsearch[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      view = _useState[0],
      setView = _useState[1];

  var onSwitch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView(!view);
  }, [view]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(local);
    console.log(select);
    console.log(searchword);
    console.log(boardNum);
    dispatch({
      // 검색어를 제목에서 포함하며, 지역이 일치하는 게시물들을 10개씩요청
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_SEARCH_POSTS_REQUEST"],
      local: local,
      select: select,
      searchword: searchword,
      boardNum: boardNum // boardNum 게시판의 select 요소를 기준으로 searchword 와 관련된 local 지역의 데이터를 가져온다.

    });
  }, [local, select, searchword, boardNum]); // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
  //       if (hasMorePost && !loadPostLoading) {
  //         dispatch({ // 검색어를 제목에서 포함하며, 지역이 일치하는 게시물들을 10개씩요청
  //           type: LOAD_SEARCH_POSTS_REQUEST,
  //           local: local,
  //           select : select,
  //           search: search,
  //         });
  //       }
  //     }
  //   };
  //   window.addEventListener('scroll', onScroll);
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, [mainPosts.length, hasMorePost, searchInput, loadPostLoading]);

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, "view ? (", __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tagsData: object_TagsData,
    boardNum: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: onSwitch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, "\uC804\uD658\uC2A4\uC704\uCE58"), mainPosts.map(function (post) {
    return __jsx(_components_PostCard1__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 32
      }
    });
  }), ") : (", __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tagsData: object_TagsData,
    boardNum: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: onSwitch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, "\uC804\uD658\uC2A4\uC704\uCE58"), mainPosts.map(function (post) {
    return __jsx(_components_PostCard2__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 32
      }
    });
  }), ")} }");
}

_s(SearchResult, "lexoQhPUU5kS4mZRsB+1zYOlWLg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = SearchResult;
/* harmony default export */ __webpack_exports__["default"] = (SearchResult);

var _c;

$RefreshReg$(_c, "SearchResult");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1tzZWFyY2hJbnB1dF0uanMiXSwibmFtZXMiOlsiU2VhcmNoUmVzdWx0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInNlYXJjaElucHV0IiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwiYm9hcmROdW0iLCJvYmplY3RfVGFnc0RhdGEiLCJ1c2VyIiwidXNlckluZm8iLCJtZSIsImxvY2FsIiwiY2F0ZWdvcnlBbmRzZWFyY2giLCJzcGxpdCIsInNlbGVjdCIsInNlYXJjaHdvcmQiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3Iiwib25Td2l0Y2giLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBT0MsV0FBUCxHQUFzQkYsTUFBTSxDQUFDRyxLQUE3QixDQUFPRCxXQUFQLENBSHNCLENBR2M7O0FBQ3BDLHFCQUE2RUUsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBeEY7QUFBQSxNQUFPQyxTQUFQLGdCQUFPQSxTQUFQO0FBQUEsTUFBa0JDLFdBQWxCLGdCQUFrQkEsV0FBbEI7QUFBQSxNQUErQkMsZUFBL0IsZ0JBQStCQSxl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ZCxDQVpILFNBREY7QUFtQkQ7O0dBdEVRVCxZO1VBQ1VFLHVELEVBQ0ZFLHFELEVBRThERyx1RCxFQUMvQ0EsdUQ7OztLQUx2QlAsWTtBQXdFTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoL1tzZWFyY2hJbnB1dF0uYmExYTVjZDg4ZmUzODdmNjgwOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXQvQXBwTGF5b3V0JztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHtMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgVGFncyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdzXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUG9zdENhcmQxIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkMVwiO1xyXG5pbXBvcnQgUG9zdENhcmQyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RDYXJkMlwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoUmVzdWx0KCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7c2VhcmNoSW5wdXR9ID0gcm91dGVyLnF1ZXJ5OyAvLyBbdGFnXS5qcyDtjIzsnbwg66qF7J2YIFtdIOu2gOu2hOydtCDrk6TslrTqsITri6RcclxuICBjb25zdCB7bWFpblBvc3RzLCBoYXNNb3JlUG9zdCwgbG9hZFBvc3RMb2FkaW5nLCBib2FyZE51bSwgb2JqZWN0X1RhZ3NEYXRhfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3Qge3VzZXJJbmZvLCBtZSwgbG9jYWx9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlBbmRzZWFyY2ggPSBzZWFyY2hJbnB1dC5zcGxpdCgnKicpO1xyXG4gIGNvbnN0IHNlbGVjdCA9IGNhdGVnb3J5QW5kc2VhcmNoWzBdO1xyXG4gIGNvbnN0IHNlYXJjaHdvcmQgPSBjYXRlZ29yeUFuZHNlYXJjaFsxXTtcclxuXHJcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IG9uU3dpdGNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Vmlldyghdmlldyk7XHJcbiAgfSwgW3ZpZXddKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvY2FsKTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2h3b3JkKTtcclxuICAgIGNvbnNvbGUubG9nKGJvYXJkTnVtKTtcclxuICAgIGRpc3BhdGNoKHsgLy8g6rKA7IOJ7Ja066W8IOygnOuqqeyXkOyEnCDtj6ztlajtlZjrqbAsIOyngOyXreydtCDsnbzsuZjtlZjripQg6rKM7Iuc66y865Ok7J2EIDEw6rCc7JSp7JqU7LKtXHJcbiAgICAgIHR5cGU6IExPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgIGxvY2FsOiBsb2NhbCxcclxuICAgICAgc2VsZWN0OiBzZWxlY3QsXHJcbiAgICAgIHNlYXJjaHdvcmQ6IHNlYXJjaHdvcmQsXHJcbiAgICAgIGJvYXJkTnVtOiBib2FyZE51bSxcclxuICAgICAgLy8gYm9hcmROdW0g6rKM7Iuc7YyQ7J2YIHNlbGVjdCDsmpTshozrpbwg6riw7KSA7Jy866GcIHNlYXJjaHdvcmQg7JmAIOq0gOugqOuQnCBsb2NhbCDsp4Dsl63snZgg642w7J207YSw66W8IOqwgOyguOyYqOuLpC5cclxuICAgIH0pO1xyXG4gIH0sIFtsb2NhbCwgc2VsZWN0LCBzZWFyY2h3b3JkLCBib2FyZE51bV0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgLy8gICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gIC8vICAgICAgIGlmIChoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RMb2FkaW5nKSB7XHJcbiAgLy8gICAgICAgICBkaXNwYXRjaCh7IC8vIOqygOyDieyWtOulvCDsoJzrqqnsl5DshJwg7Y+s7ZWo7ZWY66mwLCDsp4Dsl63snbQg7J287LmY7ZWY64qUIOqyjOyLnOusvOuTpOydhCAxMOqwnOyUqeyalOyyrVxyXG4gIC8vICAgICAgICAgICB0eXBlOiBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNULFxyXG4gIC8vICAgICAgICAgICBsb2NhbDogbG9jYWwsXHJcbiAgLy8gICAgICAgICAgIHNlbGVjdCA6IHNlbGVjdCxcclxuICAvLyAgICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH07XHJcbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gIC8vICAgcmV0dXJuICgpID0+IHtcclxuICAvLyAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAvLyAgIH07XHJcbiAgLy8gfSwgW21haW5Qb3N0cy5sZW5ndGgsIGhhc01vcmVQb3N0LCBzZWFyY2hJbnB1dCwgbG9hZFBvc3RMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG5cclxuICAgICAgdmlldyA/IChcclxuXHJcbiAgICAgIDxUYWdzIHRhZ3NEYXRhPXtvYmplY3RfVGFnc0RhdGF9IGJvYXJkTnVtPXsxfS8+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25Td2l0Y2h9PuyghO2ZmOyKpOychOy5mDwvQnV0dG9uPlxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkMSBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG5cclxuICAgICAgKSA6IChcclxuXHJcbiAgICAgIDxUYWdzIHRhZ3NEYXRhPXtvYmplY3RfVGFnc0RhdGF9IGJvYXJkTnVtPXsxfS8+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25Td2l0Y2h9PuyghO2ZmOyKpOychOy5mDwvQnV0dG9uPlxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkMiBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG5cclxuICAgICAgKX1cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9