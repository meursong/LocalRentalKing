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
  }, "view ? (", __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  })), ") : (", __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(_components_Tags__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  })), ")}"), "}");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoL1tzZWFyY2hJbnB1dF0uanMiXSwibmFtZXMiOlsiU2VhcmNoUmVzdWx0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInNlYXJjaElucHV0IiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwiYm9hcmROdW0iLCJvYmplY3RfVGFnc0RhdGEiLCJ1c2VyIiwidXNlckluZm8iLCJtZSIsImxvY2FsIiwiY2F0ZWdvcnlBbmRzZWFyY2giLCJzcGxpdCIsInNlbGVjdCIsInNlYXJjaHdvcmQiLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3Iiwib25Td2l0Y2giLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3RCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBT0MsV0FBUCxHQUFzQkYsTUFBTSxDQUFDRyxLQUE3QixDQUFPRCxXQUFQLENBSHNCLENBR2M7O0FBQ3BDLHFCQUE4RUUsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBekY7QUFBQSxNQUFPQyxTQUFQLGdCQUFPQSxTQUFQO0FBQUEsTUFBa0JDLFdBQWxCLGdCQUFrQkEsV0FBbEI7QUFBQSxNQUErQkMsZUFBL0IsZ0JBQStCQSxl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Q0FBQ3VCLEdBQVYsQ0FBYyxVQUFDeEIsSUFBRDtBQUFBLFdBQVUsTUFBQyw2REFBRDtBQUFXLFNBQUcsRUFBRUEsSUFBSSxDQUFDeUIsRUFBckI7QUFBeUIsVUFBSSxFQUFFekIsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFWO0FBQUEsR0FBZCxDQUhILENBUkYsT0FERixNQURGO0FBbUJEOztHQXRFUVQsWTtVQUNVRSx1RCxFQUNGRSxxRCxFQUUrREcsdUQsRUFDakRBLHVEOzs7S0FMdEJQLFk7QUF3RU1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC9bc2VhcmNoSW5wdXRdLmFhZWZiYTI4OTUxN2UxMzQ5ZDI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0L0FwcExheW91dCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7TE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IFRhZ3MgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFnc1wiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFBvc3RDYXJkMSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0Q2FyZDFcIjtcclxuaW1wb3J0IFBvc3RDYXJkMiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0Q2FyZDJcIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaFJlc3VsdCgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qge3NlYXJjaElucHV0fSA9IHJvdXRlci5xdWVyeTsgLy8gW3RhZ10uanMg7YyM7J28IOuqheydmCBbXSDrtoDrtoTsnbQg65Ok7Ja06rCE64ukXHJcbiAgY29uc3Qge21haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0TG9hZGluZyAsIGJvYXJkTnVtICxvYmplY3RfVGFnc0RhdGF9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7dXNlckluZm8sIG1lLGxvY2FsfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5QW5kc2VhcmNoID0gc2VhcmNoSW5wdXQuc3BsaXQoJyonKTtcclxuICBjb25zdCBzZWxlY3QgPSBjYXRlZ29yeUFuZHNlYXJjaFswXTtcclxuICBjb25zdCBzZWFyY2h3b3JkID0gY2F0ZWdvcnlBbmRzZWFyY2hbMV07XHJcblxyXG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBvblN3aXRjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldFZpZXcoIXZpZXcpO1xyXG4gIH0sIFt2aWV3XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhsb2NhbCk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3QpO1xyXG4gICAgY29uc29sZS5sb2coc2VhcmNod29yZCk7XHJcbiAgICBjb25zb2xlLmxvZyhib2FyZE51bSk7XHJcbiAgICBkaXNwYXRjaCh7IC8vIOqygOyDieyWtOulvCDsoJzrqqnsl5DshJwg7Y+s7ZWo7ZWY66mwLCDsp4Dsl63snbQg7J287LmY7ZWY64qUIOqyjOyLnOusvOuTpOydhCAxMOqwnOyUqeyalOyyrVxyXG4gICAgICB0eXBlOiBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNULFxyXG4gICAgICBsb2NhbDogbG9jYWwsXHJcbiAgICAgIHNlbGVjdDogc2VsZWN0LFxyXG4gICAgICBzZWFyY2h3b3JkOiBzZWFyY2h3b3JkLFxyXG4gICAgICBib2FyZE51bTogYm9hcmROdW0sXHJcbiAgICAgIC8vIGJvYXJkTnVtIOqyjOyLnO2MkOydmCBzZWxlY3Qg7JqU7IaM66W8IOq4sOykgOycvOuhnCBzZWFyY2h3b3JkIOyZgCDqtIDroKjrkJwgbG9jYWwg7KeA7Jet7J2YIOuNsOydtO2EsOulvCDqsIDsoLjsmKjri6QuXHJcbiAgICB9KTtcclxuICB9LCBbbG9jYWwsc2VsZWN0LHNlYXJjaHdvcmQsYm9hcmROdW1dKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xyXG4gIC8vICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAvLyAgICAgICBpZiAoaGFzTW9yZVBvc3QgJiYgIWxvYWRQb3N0TG9hZGluZykge1xyXG4gIC8vICAgICAgICAgZGlzcGF0Y2goeyAvLyDqsoDsg4nslrTrpbwg7KCc66qp7JeQ7IScIO2PrO2VqO2VmOupsCwg7KeA7Jet7J20IOydvOy5mO2VmOuKlCDqsozsi5zrrLzrk6TsnYQgMTDqsJzslKnsmpTssq1cclxuICAvLyAgICAgICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCxcclxuICAvLyAgICAgICAgICAgbG9jYWw6IGxvY2FsLFxyXG4gIC8vICAgICAgICAgICBzZWxlY3QgOiBzZWxlY3QsXHJcbiAgLy8gICAgICAgICAgIHNlYXJjaDogc2VhcmNoLFxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAvLyAgIHJldHVybiAoKSA9PiB7XHJcbiAgLy8gICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgLy8gICB9O1xyXG4gIC8vIH0sIFttYWluUG9zdHMubGVuZ3RoLCBoYXNNb3JlUG9zdCwgc2VhcmNoSW5wdXQsIGxvYWRQb3N0TG9hZGluZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICB2aWV3ID8gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8VGFncyB0YWdzRGF0YT17b2JqZWN0X1RhZ3NEYXRhfSBib2FyZE51bT17MX0vPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN3aXRjaH0+7KCE7ZmY7Iqk7JyE7LmYPC9CdXR0b24+XHJcbiAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkMSBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxUYWdzIHRhZ3NEYXRhPXtvYmplY3RfVGFnc0RhdGF9IGJvYXJkTnVtPXsxfS8+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3dpdGNofT7soITtmZjsiqTsnITsuZg8L0J1dHRvbj5cclxuICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQyIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPil9XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9MYXlvdXQ+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9