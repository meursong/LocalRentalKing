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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");


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
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, singlePost && __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    layout: "horizontal",
    form: form,
    initialValues: {
      layout: 'horizontal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, singlePost.ProdPostImages.length > 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    cover: __jsx(_components_PostImages__WEBPACK_IMPORTED_MODULE_7__["default"], {
      images: singlePost.ProdPostImages,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 18
      }
    }),
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 12
    }
  }, singlePost.content) : __jsx(antd__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    title: singlePost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdFBhZ2UiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0Iiwic2luZ2xlUG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwibG9hZFBvc3RMb2FkaW5nIiwibG9jYWwiLCJ1c2VyIiwidXNlckluZm8iLCJtZSIsImlkQW5kQm9hcmROdW0iLCJzcGxpdCIsInBvc3RJZCIsInBvc3RCb2FyZE51bSIsIkZvcm0iLCJ1c2VGb3JtIiwiZm9ybSIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1NQT1NUX1JFUVVFU1QiLCJsYXlvdXQiLCJQcm9kUG9zdEltYWdlcyIsImxlbmd0aCIsInRpdGxlIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFRQyxFQUFSLEdBQWVGLE1BQU0sQ0FBQ0csS0FBdEIsQ0FBUUQsRUFBUixDQUhrQixDQUdXOztBQUM3QixxQkFBdUVFLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQWxGO0FBQUEsTUFBUUMsVUFBUixnQkFBUUEsVUFBUjtBQUFBLE1BQW1CQyxTQUFuQixnQkFBbUJBLFNBQW5CO0FBQUEsTUFBOEJDLFdBQTlCLGdCQUE4QkEsV0FBOUI7QUFBQSxNQUEyQ0MsZUFBM0MsZ0JBQTJDQSxlQUEzQztBQUFBLE1BQTZEQyxLQUE3RCxnQkFBNkRBLEtBQTdEOztBQUNBLHNCQUF5QlAsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDTyxJQUFqQjtBQUFBLEdBQUQsQ0FBcEM7QUFBQSxNQUFRQyxRQUFSLGlCQUFRQSxRQUFSO0FBQUEsTUFBa0JDLEVBQWxCLGlCQUFrQkEsRUFBbEI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHYixFQUFFLENBQUNjLEtBQUgsQ0FBUyxHQUFULENBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRixhQUFhLENBQUMsQ0FBRCxDQUE1QjtBQUNBLE1BQU1HLFlBQVksR0FBR0gsYUFBYSxDQUFDLENBQUQsQ0FBbEM7O0FBRUEsc0JBQWVJLHlDQUFJLENBQUNDLE9BQUwsRUFBZjtBQUFBO0FBQUEsTUFBT0MsSUFBUDs7QUFFQUMseURBQVMsQ0FBQyxZQUFJO0FBQ1p4QixZQUFRLENBQUM7QUFDUHlCLFVBQUksRUFBQ0MsaUVBREU7QUFFUFAsWUFBTSxFQUFDQSxNQUZBO0FBR1BDLGtCQUFZLEVBQUNBO0FBSE4sS0FBRCxDQUFSO0FBS0QsR0FOUSxFQU1QLEVBTk8sQ0FBVDtBQVFBLFNBRUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dYLFVBQVUsSUFDWCxNQUFDLHlDQUFEO0FBQ0UsVUFBTSxFQUFDLFlBRFQ7QUFFRSxRQUFJLEVBQUVjLElBRlI7QUFHRSxpQkFBYSxFQUFFO0FBQ2JJLFlBQU0sRUFBRTtBQURLLEtBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR2xCLFVBQVUsQ0FBQ21CLGNBQVgsQ0FBMEJDLE1BQTFCLEdBQWtDLENBQWxDLEdBQ0UsTUFBQyx5Q0FBRDtBQUNELFNBQUssRUFBRSxNQUFDLDhEQUFEO0FBQVksWUFBTSxFQUFFcEIsVUFBVSxDQUFDbUIsY0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUROO0FBRUQsU0FBSyxFQUFFbkIsVUFBVSxDQUFDcUIsS0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlBckIsVUFBVSxDQUFDc0IsT0FKWCxDQURGLEdBUUcsTUFBQyx5Q0FBRDtBQUNFLFNBQUssRUFBRXRCLFVBQVUsQ0FBQ3FCLEtBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHR3JCLFVBQVUsQ0FBQ3NCLE9BSGQsQ0FmTixDQUZGLENBRkY7QUErQkQ7O0dBcERRaEMsUTtVQUNVRSx1RCxFQUNGRSxxRCxFQUV3REcsdUQsRUFDOUNBLHVELEVBTVZlLHlDQUFJLENBQUNDLE87OztLQVhidkIsUTtBQXNETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjJkOGFlYjY4YTdmNWM1YzE0YTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcExheW91dC9BcHBMYXlvdXQnO1xyXG5pbXBvcnQge0xPQURfU1BPU1RfUkVRVUVTVH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHtBdmF0YXIsIENhcmQsIEZvcm19IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3RQYWdlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7IC8vIFt0YWddLmpzIO2MjOydvCDrqoXsnZggW10g67aA67aE7J20IOuTpOyWtOqwhOuLpFxyXG4gIGNvbnN0IHsgc2luZ2xlUG9zdCxtYWluUG9zdHMsIGhhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmcgLCBsb2NhbCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IHVzZXJJbmZvLCBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgaWRBbmRCb2FyZE51bSA9IGlkLnNwbGl0KCcqJyk7XHJcbiAgY29uc3QgcG9zdElkID0gaWRBbmRCb2FyZE51bVswXTtcclxuICBjb25zdCBwb3N0Qm9hcmROdW0gPSBpZEFuZEJvYXJkTnVtWzFdO1xyXG5cclxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6TE9BRF9TUE9TVF9SRVFVRVNULFxyXG4gICAgICBwb3N0SWQ6cG9zdElkLFxyXG4gICAgICBwb3N0Qm9hcmROdW06cG9zdEJvYXJkTnVtLFxyXG4gICAgfSk7XHJcbiAgfSxbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPExheW91dD5cclxuICAgICAge3NpbmdsZVBvc3QgJiZcclxuICAgICAgPEZvcm1cclxuICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICBmb3JtPXtmb3JtfVxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgIGxheW91dDogJ2hvcml6b250YWwnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7c2luZ2xlUG9zdC5Qcm9kUG9zdEltYWdlcy5sZW5ndGggPjAgP1xyXG4gICAgICAgICAgKDxDYXJkXHJcbiAgICAgICAgICBjb3Zlcj17PFBvc3RJbWFnZXMgaW1hZ2VzPXtzaW5nbGVQb3N0LlByb2RQb3N0SW1hZ2VzfS8+fVxyXG4gICAgICAgICAgdGl0bGU9e3NpbmdsZVBvc3QudGl0bGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3NpbmdsZVBvc3QuY29udGVudH1cclxuICAgICAgICA8L0NhcmQ+ICk6XHJcbiAgICAgICAgICAoXHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgdGl0bGU9e3NpbmdsZVBvc3QudGl0bGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7c2luZ2xlUG9zdC5jb250ZW50fVxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIH1cclxuICAgIDwvTGF5b3V0PlxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==