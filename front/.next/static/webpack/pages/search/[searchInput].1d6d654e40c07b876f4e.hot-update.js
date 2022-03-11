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

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var searchInput = router.query.searchInput; // [tag].js 파일 명의 [] 부분이 들어간다

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePost = _useSelector.hasMorePost,
      loadPostLoading = _useSelector.loadPostLoading,
      boardNum = _useSelector.boardNum;

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
  });
}

_s(SearchResult, "F7Y3rWNlZW8D9xK00YpIdm6pSGs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1tzZWFyY2hJbnB1dF0uanMiXSwibmFtZXMiOlsiU2VhcmNoUmVzdWx0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInNlYXJjaElucHV0IiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwiYm9hcmROdW0iLCJ1c2VyIiwidXNlckluZm8iLCJtZSIsImxvY2FsIiwiY2F0ZWdvcnlBbmRzZWFyY2giLCJzcGxpdCIsInNlbGVjdCIsInNlYXJjaHdvcmQiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3Iiwib25Td2l0Y2giLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUN0QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU9DLFdBQVAsR0FBc0JGLE1BQU0sQ0FBQ0csS0FBN0IsQ0FBT0QsV0FBUCxDQUhzQixDQUdjOztBQUNwQyxxQkFBNkRFLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQXhFO0FBQUEsTUFBT0MsU0FBUCxnQkFBT0EsU0FBUDtBQUFBLE1BQWtCQyxXQUFsQixnQkFBa0JBLFdBQWxCO0FBQUEsTUFBK0JDLGVBQS9CLGdCQUErQkEsZUFBL0I7QUFBQSxNQUFpREMsUUFBakQsZ0JBQWlEQSxRQUFqRDs7QUFDQSxzQkFBNkJOLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ00sSUFBakI7QUFBQSxHQUFELENBQXhDO0FBQUEsTUFBT0MsUUFBUCxpQkFBT0EsUUFBUDtBQUFBLE1BQWlCQyxFQUFqQixpQkFBaUJBLEVBQWpCO0FBQUEsTUFBb0JDLEtBQXBCLGlCQUFvQkEsS0FBcEI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUdiLFdBQVcsQ0FBQ2MsS0FBWixDQUFrQixHQUFsQixDQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0YsaUJBQWlCLENBQUMsQ0FBRCxDQUFoQztBQUNBLE1BQU1HLFVBQVUsR0FBR0gsaUJBQWlCLENBQUMsQ0FBRCxDQUFwQzs7QUFFQSxrQkFBd0JJLHNEQUFRLENBQUMsSUFBRCxDQUFoQztBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2pDRixXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0QsR0FGMkIsRUFFekIsQ0FBQ0EsSUFBRCxDQUZ5QixDQUE1QjtBQUlBSSx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQVo7QUFDQVcsV0FBTyxDQUFDQyxHQUFSLENBQVlULE1BQVo7QUFDQVEsV0FBTyxDQUFDQyxHQUFSLENBQVlSLFVBQVo7QUFDQU8sV0FBTyxDQUFDQyxHQUFSLENBQVloQixRQUFaO0FBQ0FaLFlBQVEsQ0FBQztBQUFFO0FBQ1Q2QixVQUFJLEVBQUVDLHdFQURDO0FBRVBkLFdBQUssRUFBRUEsS0FGQTtBQUdQRyxZQUFNLEVBQUVBLE1BSEQ7QUFJUEMsZ0JBQVUsRUFBRUEsVUFKTDtBQUtQUixjQUFRLEVBQUVBLFFBTEgsQ0FNUDs7QUFOTyxLQUFELENBQVI7QUFRRCxHQWJRLEVBYU4sQ0FBQ0ksS0FBRCxFQUFPRyxNQUFQLEVBQWNDLFVBQWQsRUFBeUJSLFFBQXpCLENBYk0sQ0FBVCxDQWpCc0IsQ0FnQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQW1CRDs7R0F0RVFiLFk7VUFDVUUsdUQsRUFDRkUscUQsRUFFOENHLHVELEVBQ2hDQSx1RDs7O0tBTHRCUCxZO0FBd0VNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2gvW3NlYXJjaElucHV0XS4xZDZkNjU0ZTQwYzA3Yjg3NmY0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcExheW91dC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge0xPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1R9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhZ3NcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQb3N0Q2FyZDEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQxXCI7XHJcbmltcG9ydCBQb3N0Q2FyZDIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQyXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hSZXN1bHQoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtzZWFyY2hJbnB1dH0gPSByb3V0ZXIucXVlcnk7IC8vIFt0YWddLmpzIO2MjOydvCDrqoXsnZggW10g67aA67aE7J20IOuTpOyWtOqwhOuLpFxyXG4gIGNvbnN0IHttYWluUG9zdHMsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcgLCBib2FyZE51bX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHt1c2VySW5mbywgbWUsbG9jYWx9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlBbmRzZWFyY2ggPSBzZWFyY2hJbnB1dC5zcGxpdCgnKicpO1xyXG4gIGNvbnN0IHNlbGVjdCA9IGNhdGVnb3J5QW5kc2VhcmNoWzBdO1xyXG4gIGNvbnN0IHNlYXJjaHdvcmQgPSBjYXRlZ29yeUFuZHNlYXJjaFsxXTtcclxuXHJcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IG9uU3dpdGNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Vmlldyghdmlldyk7XHJcbiAgfSwgW3ZpZXddKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvY2FsKTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2h3b3JkKTtcclxuICAgIGNvbnNvbGUubG9nKGJvYXJkTnVtKTtcclxuICAgIGRpc3BhdGNoKHsgLy8g6rKA7IOJ7Ja066W8IOygnOuqqeyXkOyEnCDtj6ztlajtlZjrqbAsIOyngOyXreydtCDsnbzsuZjtlZjripQg6rKM7Iuc66y865Ok7J2EIDEw6rCc7JSp7JqU7LKtXHJcbiAgICAgIHR5cGU6IExPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgIGxvY2FsOiBsb2NhbCxcclxuICAgICAgc2VsZWN0OiBzZWxlY3QsXHJcbiAgICAgIHNlYXJjaHdvcmQ6IHNlYXJjaHdvcmQsXHJcbiAgICAgIGJvYXJkTnVtOiBib2FyZE51bSxcclxuICAgICAgLy8gYm9hcmROdW0g6rKM7Iuc7YyQ7J2YIHNlbGVjdCDsmpTshozrpbwg6riw7KSA7Jy866GcIHNlYXJjaHdvcmQg7JmAIOq0gOugqOuQnCBsb2NhbCDsp4Dsl63snZgg642w7J207YSw66W8IOqwgOyguOyYqOuLpC5cclxuICAgIH0pO1xyXG4gIH0sIFtsb2NhbCxzZWxlY3Qsc2VhcmNod29yZCxib2FyZE51bV0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgLy8gICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gIC8vICAgICAgIGlmIChoYXNNb3JlUG9zdCAmJiAhbG9hZFBvc3RMb2FkaW5nKSB7XHJcbiAgLy8gICAgICAgICBkaXNwYXRjaCh7IC8vIOqygOyDieyWtOulvCDsoJzrqqnsl5DshJwg7Y+s7ZWo7ZWY66mwLCDsp4Dsl63snbQg7J287LmY7ZWY64qUIOqyjOyLnOusvOuTpOydhCAxMOqwnOyUqeyalOyyrVxyXG4gIC8vICAgICAgICAgICB0eXBlOiBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNULFxyXG4gIC8vICAgICAgICAgICBsb2NhbDogbG9jYWwsXHJcbiAgLy8gICAgICAgICAgIHNlbGVjdCA6IHNlbGVjdCxcclxuICAvLyAgICAgICAgICAgc2VhcmNoOiBzZWFyY2gsXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH07XHJcbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gIC8vICAgcmV0dXJuICgpID0+IHtcclxuICAvLyAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAvLyAgIH07XHJcbiAgLy8gfSwgW21haW5Qb3N0cy5sZW5ndGgsIGhhc01vcmVQb3N0LCBzZWFyY2hJbnB1dCwgbG9hZFBvc3RMb2FkaW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Lyo8TGF5b3V0PiovfVxyXG4gICAgICB7LyogIHZpZXcgPyAoKi99XHJcbiAgICAgIHsvKiAgPExheW91dD4qL31cclxuICAgICAgey8qICAgIDxUYWdzIHRhZ3NEYXRhPXtvYmplY3RfVGFnc0RhdGF9IGJvYXJkTnVtPXsxfS8+Ki99XHJcbiAgICAgIHsvKiAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3dpdGNofT7soITtmZjsiqTsnITsuZg8L0J1dHRvbj4qL31cclxuICAgICAgey8qICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQxIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPil9Ki99XHJcbiAgICAgIHsvKiAgPC9MYXlvdXQ+Ki99XHJcbiAgICAgIHsvKiAgKSA6ICgqL31cclxuICAgICAgey8qICA8TGF5b3V0PiovfVxyXG4gICAgICB7LyogICAgPFRhZ3MgdGFnc0RhdGE9e29iamVjdF9UYWdzRGF0YX0gYm9hcmROdW09ezF9Lz4qL31cclxuICAgICAgey8qICAgIDxCdXR0b24gb25DbGljaz17b25Td2l0Y2h9PuyghO2ZmOyKpOychOy5mDwvQnV0dG9uPiovfVxyXG4gICAgICB7LyogICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZDIga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+KX0qL31cclxuICAgICAgey8qICA8L0xheW91dD4qL31cclxuICAgICAgey8qICApfSovfVxyXG4gICAgICB7Lyo8L0xheW91dD59Ki99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hSZXN1bHQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=