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
      local = _useSelector.local,
      boardNum = _useSelector.boardNum;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector2.userInfo,
      me = _useSelector2.me;

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
      search: search,
      boardNum: boardNum // boardNum 게시판의 select 요소를 기준으로 search 와 관련된 local 지역의 데이터를 가져온다.

    });
  }, []); // useEffect(() => {
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

_s(SearchResult, "apGujsKj0ssh/wIQdB39m6gr9eU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1tzZWFyY2hJbnB1dF0uanMiXSwibmFtZXMiOlsiU2VhcmNoUmVzdWx0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInNlYXJjaElucHV0IiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwibG9jYWwiLCJib2FyZE51bSIsInVzZXIiLCJ1c2VySW5mbyIsIm1lIiwiY2F0ZWdvcnlBbmRzZWFyY2giLCJzcGxpdCIsInNlbGVjdCIsInNlYXJjaHdvcmQiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3Iiwib25Td2l0Y2giLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCIsInNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUN0QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU9DLFdBQVAsR0FBc0JGLE1BQU0sQ0FBQ0csS0FBN0IsQ0FBT0QsV0FBUCxDQUhzQixDQUdjOztBQUNwQyxxQkFBb0VFLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQS9FO0FBQUEsTUFBT0MsU0FBUCxnQkFBT0EsU0FBUDtBQUFBLE1BQWtCQyxXQUFsQixnQkFBa0JBLFdBQWxCO0FBQUEsTUFBK0JDLGVBQS9CLGdCQUErQkEsZUFBL0I7QUFBQSxNQUFnREMsS0FBaEQsZ0JBQWdEQSxLQUFoRDtBQUFBLE1BQXdEQyxRQUF4RCxnQkFBd0RBLFFBQXhEOztBQUNBLHNCQUF1QlAsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDTyxJQUFqQjtBQUFBLEdBQUQsQ0FBbEM7QUFBQSxNQUFPQyxRQUFQLGlCQUFPQSxRQUFQO0FBQUEsTUFBaUJDLEVBQWpCLGlCQUFpQkEsRUFBakI7O0FBRUEsTUFBTUMsaUJBQWlCLEdBQUdiLFdBQVcsQ0FBQ2MsS0FBWixDQUFrQixHQUFsQixDQUExQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0YsaUJBQWlCLENBQUMsQ0FBRCxDQUFoQztBQUNBLE1BQU1HLFVBQVUsR0FBR0gsaUJBQWlCLENBQUMsQ0FBRCxDQUFwQzs7QUFFQSxrQkFBd0JJLHNEQUFRLENBQUMsSUFBRCxDQUFoQztBQUFBLE1BQU9DLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2pDRixXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0QsR0FGMkIsRUFFekIsQ0FBQ0EsSUFBRCxDQUZ5QixDQUE1QjtBQUlBSSx5REFBUyxDQUFDLFlBQU07QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVloQixLQUFaO0FBQ0FlLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFaO0FBQ0FRLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixVQUFaO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixRQUFaO0FBQ0FiLFlBQVEsQ0FBQztBQUFFO0FBQ1Q2QixVQUFJLEVBQUVDLHdFQURDO0FBRVBsQixXQUFLLEVBQUVBLEtBRkE7QUFHUE8sWUFBTSxFQUFFQSxNQUhEO0FBSVBZLFlBQU0sRUFBRUEsTUFKRDtBQUtQbEIsY0FBUSxFQUFFQSxRQUxILENBTVA7O0FBTk8sS0FBRCxDQUFSO0FBUUQsR0FiUSxFQWFOLEVBYk0sQ0FBVCxDQWpCc0IsQ0FnQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQW1CRDs7R0F0RVFkLFk7VUFDVUUsdUQsRUFDRkUscUQsRUFFcURHLHVELEVBQzdDQSx1RDs7O0tBTGhCUCxZO0FBd0VNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2gvW3NlYXJjaElucHV0XS4yNTEwZmI3ZjA0ZDExMGZiMjAxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcExheW91dC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge0xPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1R9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhZ3NcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQb3N0Q2FyZDEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQxXCI7XHJcbmltcG9ydCBQb3N0Q2FyZDIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQyXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hSZXN1bHQoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtzZWFyY2hJbnB1dH0gPSByb3V0ZXIucXVlcnk7IC8vIFt0YWddLmpzIO2MjOydvCDrqoXsnZggW10g67aA67aE7J20IOuTpOyWtOqwhOuLpFxyXG4gIGNvbnN0IHttYWluUG9zdHMsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcsIGxvY2FsICwgYm9hcmROdW19ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7dXNlckluZm8sIG1lfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5QW5kc2VhcmNoID0gc2VhcmNoSW5wdXQuc3BsaXQoJyonKTtcclxuICBjb25zdCBzZWxlY3QgPSBjYXRlZ29yeUFuZHNlYXJjaFswXTtcclxuICBjb25zdCBzZWFyY2h3b3JkID0gY2F0ZWdvcnlBbmRzZWFyY2hbMV07XHJcblxyXG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBvblN3aXRjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFZpZXcoIXZpZXcpO1xyXG4gIH0sIFt2aWV3XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbCk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3QpO1xyXG4gICAgY29uc29sZS5sb2coc2VhcmNod29yZCk7XHJcbiAgICBjb25zb2xlLmxvZyhib2FyZE51bSk7XHJcbiAgICBkaXNwYXRjaCh7IC8vIOqygOyDieyWtOulvCDsoJzrqqnsl5DshJwg7Y+s7ZWo7ZWY66mwLCDsp4Dsl63snbQg7J287LmY7ZWY64qUIOqyjOyLnOusvOuTpOydhCAxMOqwnOyUqeyalOyyrVxyXG4gICAgICB0eXBlOiBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNULFxyXG4gICAgICBsb2NhbDogbG9jYWwsXHJcbiAgICAgIHNlbGVjdDogc2VsZWN0LFxyXG4gICAgICBzZWFyY2g6IHNlYXJjaCxcclxuICAgICAgYm9hcmROdW06IGJvYXJkTnVtLFxyXG4gICAgICAvLyBib2FyZE51bSDqsozsi5ztjJDsnZggc2VsZWN0IOyalOyGjOulvCDquLDspIDsnLzroZwgc2VhcmNoIOyZgCDqtIDroKjrkJwgbG9jYWwg7KeA7Jet7J2YIOuNsOydtO2EsOulvCDqsIDsoLjsmKjri6QuXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAvLyAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgLy8gICAgICAgaWYgKGhhc01vcmVQb3N0ICYmICFsb2FkUG9zdExvYWRpbmcpIHtcclxuICAvLyAgICAgICAgIGRpc3BhdGNoKHsgLy8g6rKA7IOJ7Ja066W8IOygnOuqqeyXkOyEnCDtj6ztlajtlZjrqbAsIOyngOyXreydtCDsnbzsuZjtlZjripQg6rKM7Iuc66y865Ok7J2EIDEw6rCc7JSp7JqU7LKtXHJcbiAgLy8gICAgICAgICAgIHR5cGU6IExPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QsXHJcbiAgLy8gICAgICAgICAgIGxvY2FsOiBsb2NhbCxcclxuICAvLyAgICAgICAgICAgc2VsZWN0IDogc2VsZWN0LFxyXG4gIC8vICAgICAgICAgICBzZWFyY2g6IHNlYXJjaCxcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gIC8vICAgfTtcclxuICAvLyB9LCBbbWFpblBvc3RzLmxlbmd0aCwgaGFzTW9yZVBvc3QsIHNlYXJjaElucHV0LCBsb2FkUG9zdExvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKjxMYXlvdXQ+Ki99XHJcbiAgICAgIHsvKiAgdmlldyA/ICgqL31cclxuICAgICAgey8qICA8TGF5b3V0PiovfVxyXG4gICAgICB7LyogICAgPFRhZ3MgdGFnc0RhdGE9e29iamVjdF9UYWdzRGF0YX0gYm9hcmROdW09ezF9Lz4qL31cclxuICAgICAgey8qICAgIDxCdXR0b24gb25DbGljaz17b25Td2l0Y2h9PuyghO2ZmOyKpOychOy5mDwvQnV0dG9uPiovfVxyXG4gICAgICB7LyogICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZDEga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+KX0qL31cclxuICAgICAgey8qICA8L0xheW91dD4qL31cclxuICAgICAgey8qICApIDogKCovfVxyXG4gICAgICB7LyogIDxMYXlvdXQ+Ki99XHJcbiAgICAgIHsvKiAgICA8VGFncyB0YWdzRGF0YT17b2JqZWN0X1RhZ3NEYXRhfSBib2FyZE51bT17MX0vPiovfVxyXG4gICAgICB7LyogICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN3aXRjaH0+7KCE7ZmY7Iqk7JyE7LmYPC9CdXR0b24+Ki99XHJcbiAgICAgIHsvKiAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkMiBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfSovfVxyXG4gICAgICB7LyogIDwvTGF5b3V0PiovfVxyXG4gICAgICB7LyogICl9Ki99XHJcbiAgICAgIHsvKjwvTGF5b3V0Pn0qL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==