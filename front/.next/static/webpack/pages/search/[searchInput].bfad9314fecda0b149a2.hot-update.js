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
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, view ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tagsData: object_TagsData,
    boardNum: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: onSwitch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "\uC804\uD658\uC2A4\uC704\uCE58"), mainPosts.map(function (post) {
    return __jsx(_components_PostCard1__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 36
      }
    });
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tagsData: object_TagsData,
    boardNum: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    onClick: onSwitch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "\uC804\uD658\uC2A4\uC704\uCE58"), mainPosts.map(function (post) {
    return __jsx(_components_PostCard2__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 36
      }
    });
  }))), "}");
}

_s(SearchResult, "5cwyBE0Et6gCpXVfQTzqQSayAQE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1tzZWFyY2hJbnB1dF0uanMiXSwibmFtZXMiOlsiU2VhcmNoUmVzdWx0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInNlYXJjaElucHV0IiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwiYm9hcmROdW0iLCJvYmplY3RfVGFnc0RhdGEiLCJ1c2VyIiwidXNlckluZm8iLCJtZSIsImxvY2FsIiwiY2F0ZWdvcnlBbmRzZWFyY2giLCJzcGxpdCIsInNlbGVjdCIsInNlYXJjaHdvcmQiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3Iiwib25Td2l0Y2giLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBT0MsV0FBUCxHQUFzQkYsTUFBTSxDQUFDRyxLQUE3QixDQUFPRCxXQUFQLENBSHNCLENBR2M7O0FBQ3BDLHFCQUE4RUUsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBekY7QUFBQSxNQUFPQyxTQUFQLGdCQUFPQSxTQUFQO0FBQUEsTUFBa0JDLFdBQWxCLGdCQUFrQkEsV0FBbEI7QUFBQSxNQUErQkMsZUFBL0IsZ0JBQStCQSxl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QXJCO0FBQXlCLFVBQUksRUFBRXpCLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVjtBQUFBLEdBQWQsQ0FIRCxDQVJKLENBREYsTUFERjtBQW1CRDs7R0F0RVFULFk7VUFDVUUsdUQsRUFDRkUscUQsRUFFK0RHLHVELEVBQ2pEQSx1RDs7O0tBTHRCUCxZO0FBd0VNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2gvW3NlYXJjaElucHV0XS5iZmFkOTMxNGZlY2RhMGIxNDlhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcExheW91dC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQge0xPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1R9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhZ3NcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQb3N0Q2FyZDEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQxXCI7XHJcbmltcG9ydCBQb3N0Q2FyZDIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQyXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hSZXN1bHQoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtzZWFyY2hJbnB1dH0gPSByb3V0ZXIucXVlcnk7IC8vIFt0YWddLmpzIO2MjOydvCDrqoXsnZggW10g67aA67aE7J20IOuTpOyWtOqwhOuLpFxyXG4gIGNvbnN0IHttYWluUG9zdHMsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcgLCBib2FyZE51bSAsb2JqZWN0X1RhZ3NEYXRhfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3Qge3VzZXJJbmZvLCBtZSxsb2NhbH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBjYXRlZ29yeUFuZHNlYXJjaCA9IHNlYXJjaElucHV0LnNwbGl0KCcqJyk7XHJcbiAgY29uc3Qgc2VsZWN0ID0gY2F0ZWdvcnlBbmRzZWFyY2hbMF07XHJcbiAgY29uc3Qgc2VhcmNod29yZCA9IGNhdGVnb3J5QW5kc2VhcmNoWzFdO1xyXG5cclxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3Qgb25Td2l0Y2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRWaWV3KCF2aWV3KTtcclxuICB9LCBbdmlld10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobG9jYWwpO1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKHNlYXJjaHdvcmQpO1xyXG4gICAgY29uc29sZS5sb2coYm9hcmROdW0pO1xyXG4gICAgZGlzcGF0Y2goeyAvLyDqsoDsg4nslrTrpbwg7KCc66qp7JeQ7IScIO2PrO2VqO2VmOupsCwg7KeA7Jet7J20IOydvOy5mO2VmOuKlCDqsozsi5zrrLzrk6TsnYQgMTDqsJzslKnsmpTssq1cclxuICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgbG9jYWw6IGxvY2FsLFxyXG4gICAgICBzZWxlY3Q6IHNlbGVjdCxcclxuICAgICAgc2VhcmNod29yZDogc2VhcmNod29yZCxcclxuICAgICAgYm9hcmROdW06IGJvYXJkTnVtLFxyXG4gICAgICAvLyBib2FyZE51bSDqsozsi5ztjJDsnZggc2VsZWN0IOyalOyGjOulvCDquLDspIDsnLzroZwgc2VhcmNod29yZCDsmYAg6rSA66Co65CcIGxvY2FsIOyngOyXreydmCDrjbDsnbTthLDrpbwg6rCA7KC47Jio64ukLlxyXG4gICAgfSk7XHJcbiAgfSwgW2xvY2FsLHNlbGVjdCxzZWFyY2h3b3JkLGJvYXJkTnVtXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAvLyAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgLy8gICAgICAgaWYgKGhhc01vcmVQb3N0ICYmICFsb2FkUG9zdExvYWRpbmcpIHtcclxuICAvLyAgICAgICAgIGRpc3BhdGNoKHsgLy8g6rKA7IOJ7Ja066W8IOygnOuqqeyXkOyEnCDtj6ztlajtlZjrqbAsIOyngOyXreydtCDsnbzsuZjtlZjripQg6rKM7Iuc66y865Ok7J2EIDEw6rCc7JSp7JqU7LKtXHJcbiAgLy8gICAgICAgICAgIHR5cGU6IExPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QsXHJcbiAgLy8gICAgICAgICAgIGxvY2FsOiBsb2NhbCxcclxuICAvLyAgICAgICAgICAgc2VsZWN0IDogc2VsZWN0LFxyXG4gIC8vICAgICAgICAgICBzZWFyY2g6IHNlYXJjaCxcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfVxyXG4gIC8vICAgfTtcclxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG4gIC8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gIC8vICAgfTtcclxuICAvLyB9LCBbbWFpblBvc3RzLmxlbmd0aCwgaGFzTW9yZVBvc3QsIHNlYXJjaElucHV0LCBsb2FkUG9zdExvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAge3ZpZXcgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgPFRhZ3MgdGFnc0RhdGE9e29iamVjdF9UYWdzRGF0YX0gYm9hcmROdW09ezF9Lz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25Td2l0Y2h9PuyghO2ZmOyKpOychOy5mDwvQnV0dG9uPlxyXG4gICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZDEga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+KX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgPFRhZ3MgdGFnc0RhdGE9e29iamVjdF9UYWdzRGF0YX0gYm9hcmROdW09ezF9Lz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25Td2l0Y2h9PuyghO2ZmOyKpOychOy5mDwvQnV0dG9uPlxyXG4gICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZDIga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fS8+KX1cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvTGF5b3V0Pn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==