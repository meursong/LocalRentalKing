webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_PostImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PostImages */ "./components/PostImages.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\pages\\post\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function PostPage() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id; // [tag].js 파일 명의 [] 부분이 들어간다

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      singlePost = _useSelector.singlePost,
      mainPosts = _useSelector.mainPosts,
      hasMorePost = _useSelector.hasMorePost,
      loadPostLoading = _useSelector.loadPostLoading,
      local = _useSelector.local;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector2.userInfo,
      me = _useSelector2.me;

  var idAndBoardNum = id.split('*');
  var postId = idAndBoardNum[0];
  var postBoardNum = idAndBoardNum[1];

  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm(),
      _Form$useForm2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Form$useForm, 1),
      form = _Form$useForm2[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_SPOST_REQUEST"],
      postId: postId,
      postBoardNum: postBoardNum
    });
  }, []);
  return __jsx(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    layout: "horizontal",
    form: form,
    initialValues: {
      layout: 'horizontal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, singlePost && __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    cover: __jsx(_components_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: singlePost.ProdPostImages[0] && singlePost.ProdPostImages,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 18
      }
    }),
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, singlePost.content)));
}

_s(PostPage, "tiVFDE9kRTduMcgQjx1gtff3kLE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], antd__WEBPACK_IMPORTED_MODULE_6__["Form"].useForm];
});

_c = PostPage;
/* harmony default export */ __webpack_exports__["default"] = (PostPage);

var _c;

$RefreshReg$(_c, "PostPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdFBhZ2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0Iiwic2luZ2xlUG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwibG9jYWwiLCJ1c2VyIiwidXNlckluZm8iLCJtZSIsImlkQW5kQm9hcmROdW0iLCJzcGxpdCIsInBvc3RJZCIsInBvc3RCb2FyZE51bSIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1NQT1NUX1JFUVVFU1QiLCJsYXlvdXQiLCJQcm9kUG9zdEltYWdlcyIsInRpdGxlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFRQyxFQUFSLEdBQWVGLE1BQU0sQ0FBQ0csS0FBdEIsQ0FBUUQsRUFBUixDQUhrQixDQUdXOztBQUM3QixxQkFBdUVFLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQWxGO0FBQUEsTUFBUUMsVUFBUixnQkFBUUEsVUFBUjtBQUFBLE1BQW1CQyxTQUFuQixnQkFBbUJBLFNBQW5CO0FBQUEsTUFBOEJDLFdBQTlCLGdCQUE4QkEsV0FBOUI7QUFBQSxNQUEyQ0MsZUFBM0MsZ0JBQTJDQSxlQUEzQztBQUFBLE1BQTZEQyxLQUE3RCxnQkFBNkRBLEtBQTdEOztBQUNBLHNCQUF5QlAsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDTyxJQUFqQjtBQUFBLEdBQUQsQ0FBcEM7QUFBQSxNQUFRQyxRQUFSLGlCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLEVBQWxCLGlCQUFrQkEsRUFBbEI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHYixFQUFFLENBQUNjLEtBQUgsQ0FBUyxHQUFULENBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixhQUFhLENBQUMsQ0FBRCxDQUE1QjtBQUNBLE1BQU1HLFlBQVksR0FBR0gsYUFBYSxDQUFDLENBQUQsQ0FBbEM7O0FBRUEsc0JBQWVJLHlDQUFJLENBQUNDLE9BQUwsRUFBZjtBQUFBO0FBQUEsTUFBT0MsSUFBUDs7QUFFQUMseURBQVMsQ0FBQyxZQUFJO0FBQ1p4QixZQUFRLENBQUM7QUFDUHlCLFVBQUksRUFBQ0MsaUVBREU7QUFFUFAsWUFBTSxFQUFDQSxNQUZBO0FBR1BDLGtCQUFZLEVBQUNBO0FBSE4sS0FBRCxDQUFSO0FBS0QsR0FOUSxFQU1QLEVBTk8sQ0FBVDtBQVFBLFNBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUNFLFVBQU0sRUFBQyxZQURUO0FBRUUsUUFBSSxFQUFFRyxJQUZSO0FBR0UsaUJBQWEsRUFBRTtBQUNiSSxZQUFNLEVBQUU7QUFESyxLQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dsQixVQUFVLElBQ1gsTUFBQyx5Q0FBRDtBQUNFLFNBQUssRUFBRSxNQUFDLDhEQUFEO0FBQVksWUFBTSxFQUFFQSxVQUFVLENBQUNtQixjQUFYLENBQTBCLENBQTFCLEtBQThCbkIsVUFBVSxDQUFDbUIsY0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURUO0FBRUUsU0FBSyxFQUFFbkIsVUFBVSxDQUFDb0IsS0FGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHcEIsVUFBVSxDQUFDcUIsT0FKZCxDQVJGLENBREYsQ0FERjtBQXFCRDs7R0ExQ1EvQixRO1VBQ1VFLHVELEVBQ0ZFLHFELEVBRXdERyx1RCxFQUM5Q0EsdUQsRUFNVmUseUNBQUksQ0FBQ0MsTzs7O0tBWGJ2QixRO0FBNENNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uNWQ3OWUyZjRlNGNkYmQwMjVhZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0L0FwcExheW91dCc7XHJcbmltcG9ydCB7TE9BRF9TUE9TVF9SRVFVRVNUfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQge0F2YXRhciwgQ2FyZCwgRm9ybX0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdEltYWdlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gUG9zdFBhZ2UoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gW3RhZ10uanMg7YyM7J28IOuqheydmCBbXSDrtoDrtoTsnbQg65Ok7Ja06rCE64ukXHJcbiAgY29uc3QgeyBzaW5nbGVQb3N0LG1haW5Qb3N0cywgaGFzTW9yZVBvc3QsIGxvYWRQb3N0TG9hZGluZyAsIGxvY2FsIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IHsgdXNlckluZm8sIG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBpZEFuZEJvYXJkTnVtID0gaWQuc3BsaXQoJyonKTtcclxuICBjb25zdCBwb3N0SWQgPSBpZEFuZEJvYXJkTnVtWzBdO1xyXG4gIGNvbnN0IHBvc3RCb2FyZE51bSA9IGlkQW5kQm9hcmROdW1bMV07XHJcblxyXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpMT0FEX1NQT1NUX1JFUVVFU1QsXHJcbiAgICAgIHBvc3RJZDpwb3N0SWQsXHJcbiAgICAgIHBvc3RCb2FyZE51bTpwb3N0Qm9hcmROdW0sXHJcbiAgICB9KTtcclxuICB9LFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBsYXlvdXQ6ICdob3Jpem9udGFsJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3NpbmdsZVBvc3QgJiZcclxuICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgY292ZXI9ezxQb3N0SW1hZ2VzIGltYWdlcz17c2luZ2xlUG9zdC5Qcm9kUG9zdEltYWdlc1swXSYmc2luZ2xlUG9zdC5Qcm9kUG9zdEltYWdlc30vPn1cclxuICAgICAgICAgIHRpdGxlPXtzaW5nbGVQb3N0LnRpdGxlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzaW5nbGVQb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9