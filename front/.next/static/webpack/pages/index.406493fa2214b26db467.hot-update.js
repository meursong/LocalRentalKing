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
  }, [view]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (local === "없음") dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["UPDATE_LOCAL"],
      data: me.location
    });
  }, [me.location]);
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

_s(Home, "B2qFAKaxw5hh2NY5wKu3rdmflr8=", false, function () {
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

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, UPDATE_LOCAL, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LOCAL", function() { return UPDATE_LOCAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_REQUEST", function() { return LOAD_USERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_SUCCESS", function() { return LOAD_USERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_FAILURE", function() { return LOAD_USERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  loadUserLoading: false,
  // 다른 이용자 정보 로딩
  loadUserDone: false,
  loadUserError: null,
  loadUsersLoading: false,
  // 전체 이용자 리스트 로딩
  loadUsersDone: false,
  loadUsersError: null,
  loadMyInfoLoading: false,
  // 내정보 로딩 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  userInfo: null,
  me: null,
  local: "없음",
  usersInfo: {},
  signUpData: {},
  loginData: {}
};
var UPDATE_LOCAL = 'UPDATE_LOCAL';
var LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
var LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
var LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
var LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
var LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
}; // (이전상태,액션) => 다음상태

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case UPDATE_LOCAL:
        draft.local = action.data;
        break;

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.userInfo = action.data;
        draft.loadUserDone = true;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case LOAD_USERS_REQUEST:
        draft.loadUsersLoading = true;
        draft.loadUsersError = null;
        draft.loadUsersDone = false;
        break;

      case LOAD_USERS_SUCCESS:
        draft.loadUsersLoading = false;
        draft.usersInfo = action.data;
        draft.loadUsersDone = true;
        break;

      case LOAD_USERS_FAILURE:
        draft.loadUsersLoading = false;
        draft.loadUsersError = action.error;
        break;

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        console.log(action.data);

        if (action.data.boardNum === 1 || 2) {
          console.log("1/2"); //console.log(draft.me);

          draft.me.ProdPosts.push({
            id: action.data.id
          });
        } else if (action.data.boardNum === 3 || 4) {
          console.log("3/4");
          draft.me.PowerPosts.push({
            id: action.data.id
          });
        } else if (action.data.boardNum === 5) {
          console.log("5");
          draft.me.TogetherPosts.push({
            id: action.data.id
          });
        }

        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibG9jYWwiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJsb2FkUG9zdExvYWRpbmciLCJyZVR3ZWV0RXJyb3IiLCJpZCIsIm9iamVjdF9UYWdzRGF0YSIsInNlbGVjdGVkVGFnIiwidXNlU3RhdGUiLCJ2aWV3Iiwic2V0VmlldyIsIm9uU3dpdGNoIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiVVBEQVRFX0xPQ0FMIiwiZGF0YSIsImxvY2F0aW9uIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGFzdElkIiwibGVuZ3RoIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJib2FyZE51bSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaW5pdGlhbFN0YXRlIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRVc2Vyc0xvYWRpbmciLCJsb2FkVXNlcnNEb25lIiwibG9hZFVzZXJzRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsInVzZXJJbmZvIiwidXNlcnNJbmZvIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUlNfUkVRVUVTVCIsIkxPQURfVVNFUlNfU1VDQ0VTUyIsIkxPQURfVVNFUlNfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwicmVkdWNlciIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIiwiUHJvZFBvc3RzIiwicHVzaCIsIlBvd2VyUG9zdHMiLCJUb2dldGhlclBvc3RzIiwiUG9zdHMiLCJmaWx0ZXIiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQ2QsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBb0JDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQS9CO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDtBQUFBLE1BQVdDLEtBQVgsZ0JBQVdBLEtBQVg7O0FBQ0Esc0JBUUlKLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ksSUFBakI7QUFBQSxHQUFELENBUmY7QUFBQSxNQUNFQyxTQURGLGlCQUNFQSxTQURGO0FBQUEsTUFFRUMsV0FGRixpQkFFRUEsV0FGRjtBQUFBLE1BR0VDLGVBSEYsaUJBR0VBLGVBSEY7QUFBQSxNQUlFQyxZQUpGLGlCQUlFQSxZQUpGO0FBQUEsTUFLRUMsRUFMRixpQkFLRUEsRUFMRjtBQUFBLE1BTUVDLGVBTkYsaUJBTUVBLGVBTkY7QUFBQSxNQU9FQyxXQVBGLGlCQU9FQSxXQVBGOztBQVNBLGtCQUF3QkMsc0RBQVEsQ0FBQyxJQUFELENBQWhDO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDakNGLFdBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDRCxHQUYyQixFQUV6QixDQUFDQSxJQUFELENBRnlCLENBQTVCO0FBSUFJLHlEQUFTLENBQUMsWUFBSTtBQUNaLFFBQUdkLEtBQUssS0FBRyxJQUFYLEVBQ0FOLFFBQVEsQ0FBQztBQUNQcUIsVUFBSSxFQUFDQywyREFERTtBQUVQQyxVQUFJLEVBQUNsQixFQUFFLENBQUNtQjtBQUZELEtBQUQsQ0FBUjtBQUlELEdBTlEsRUFNUCxDQUFDbkIsRUFBRSxDQUFDbUIsUUFBSixDQU5PLENBQVQ7QUFRQUoseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixVQUFJQyxNQUFNLENBQUNDLFdBQVAsR0FBcUJDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBOUMsR0FBNkRGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0MsR0FBekcsRUFBOEc7QUFDNUcsWUFBSXRCLFdBQVcsSUFBSSxDQUFDQyxlQUFwQixFQUFxQztBQUFBOztBQUNuQyxjQUFNc0IsTUFBTSxpQkFBR3hCLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDeUIsTUFBVixHQUFtQixDQUFwQixDQUFaLCtDQUFHLFdBQWlDckIsRUFBaEQsQ0FEbUMsQ0FDaUI7O0FBQ3BEWixrQkFBUSxDQUFDO0FBQ1BxQixnQkFBSSxFQUFFYSxnRUFEQztBQUVQWCxnQkFBSSxFQUFFVCxXQUZDO0FBR1BxQixvQkFBUSxFQUFFLENBSEg7QUFJUEgsa0JBQU0sRUFBRUE7QUFKRCxXQUFELENBQVI7QUFNRCxTQVQyRyxDQVMxRzs7QUFDSDtBQUNGLEtBWkQ7O0FBYUFOLFVBQU0sQ0FBQ1UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NYLFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQ1csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNaLFFBQXJDO0FBQ0QsS0FGRDtBQUdELEdBbEJRLEVBa0JOLENBQUNoQixXQUFELEVBQWNDLGVBQWQsQ0FsQk0sQ0FBVDtBQW9CQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR00sSUFBSSxHQUNILE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxZQUFRLEVBQUVILGVBQWhCO0FBQWlDLFlBQVEsRUFBRSxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDJDQUFEO0FBQVEsV0FBTyxFQUFFSyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUZGLEVBR0dWLFNBQVMsQ0FBQzhCLEdBQVYsQ0FBYyxVQUFDL0IsSUFBRDtBQUFBLFdBQVUsTUFBQyw2REFBRDtBQUFXLFNBQUcsRUFBRUEsSUFBSSxDQUFDSyxFQUFyQjtBQUF5QixVQUFJLEVBQUVMLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBVjtBQUFBLEdBQWQsQ0FISCxDQURHLEdBT0gsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRU0sZUFBaEI7QUFBaUMsWUFBUSxFQUFFLENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVLLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRkYsRUFHR1YsU0FBUyxDQUFDOEIsR0FBVixDQUFjLFVBQUMvQixJQUFEO0FBQUEsV0FBVSxNQUFDLDhEQUFEO0FBQVcsU0FBRyxFQUFFQSxJQUFJLENBQUNLLEVBQXJCO0FBQXlCLFVBQUksRUFBRUwsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFWO0FBQUEsR0FBZCxDQUhILENBUkosQ0FERjtBQWlCRDs7R0EvRFFSLEk7VUFDVUUsdUQsRUFDR0MsdUQsRUFTaEJBLHVEOzs7S0FYR0gsSTs7QUE0Rk1BLG1FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU13QyxZQUFZLEdBQUc7QUFDMUJDLGlCQUFlLEVBQUUsS0FEUztBQUNGO0FBQ3hCQyxjQUFZLEVBQUUsS0FGWTtBQUcxQkMsZUFBYSxFQUFFLElBSFc7QUFJMUJDLGtCQUFnQixFQUFFLEtBSlE7QUFJRDtBQUN6QkMsZUFBYSxFQUFFLEtBTFc7QUFNMUJDLGdCQUFjLEVBQUUsSUFOVTtBQU8xQkMsbUJBQWlCLEVBQUUsS0FQTztBQU9BO0FBQzFCQyxnQkFBYyxFQUFFLEtBUlU7QUFTMUJDLGlCQUFlLEVBQUUsSUFUUztBQVUxQkMsY0FBWSxFQUFFLEtBVlk7QUFVTDtBQUNyQkMsV0FBUyxFQUFFLEtBWGU7QUFZMUJDLFlBQVUsRUFBRSxJQVpjO0FBYTFCQyxlQUFhLEVBQUUsS0FiVztBQWFKO0FBQ3RCQyxZQUFVLEVBQUUsS0FkYztBQWUxQkMsYUFBVyxFQUFFLElBZmE7QUFnQjFCQyxlQUFhLEVBQUUsS0FoQlc7QUFnQko7QUFDdEJDLFlBQVUsRUFBRSxLQWpCYztBQWtCMUJDLGFBQVcsRUFBRSxJQWxCYTtBQW1CMUJDLHVCQUFxQixFQUFFLEtBbkJHO0FBbUJJO0FBQzlCQyxvQkFBa0IsRUFBRSxLQXBCTTtBQXFCMUJDLHFCQUFtQixFQUFFLElBckJLO0FBc0IxQkMsVUFBUSxFQUFFLElBdEJnQjtBQXVCMUJ4RCxJQUFFLEVBQUUsSUF2QnNCO0FBd0IxQkMsT0FBSyxFQUFFLElBeEJtQjtBQXlCMUJ3RCxXQUFTLEVBQUUsRUF6QmU7QUEwQjFCQyxZQUFVLEVBQUUsRUExQmM7QUEyQjFCQyxXQUFTLEVBQUU7QUEzQmUsQ0FBckI7QUE4QkEsSUFBTTFDLFlBQVksR0FBRyxjQUFyQjtBQUVBLElBQU0yQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxJQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFFQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDakUsSUFBRDtBQUFBLFNBQVc7QUFDM0NGLFFBQUksRUFBRXFELGNBRHFDO0FBRTNDbkQsUUFBSSxFQUFKQTtBQUYyQyxHQUFYO0FBQUEsQ0FBM0I7QUFLQSxJQUFNa0UsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLFNBQU87QUFDeENwRSxRQUFJLEVBQUV3RDtBQURrQyxHQUFQO0FBQUEsQ0FBNUIsQyxDQUlQOztBQUNBLElBQU1hLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBQ3ZGLEtBQUQsdUVBQVNvQyxZQUFUO0FBQUEsTUFBdUJvRCxNQUF2QjtBQUFBLFNBQWtDQyxxREFBTyxDQUFDekYsS0FBRCxFQUFRLFVBQUMwRixLQUFELEVBQVc7QUFDMUUsWUFBUUYsTUFBTSxDQUFDdEUsSUFBZjtBQUNFLFdBQUtDLFlBQUw7QUFDRXVFLGFBQUssQ0FBQ3ZGLEtBQU4sR0FBY3FGLE1BQU0sQ0FBQ3BFLElBQXJCO0FBQ0E7O0FBQ0YsV0FBSzZDLGlCQUFMO0FBQ0V5QixhQUFLLENBQUNyRCxlQUFOLEdBQXdCLElBQXhCO0FBQ0FxRCxhQUFLLENBQUNuRCxhQUFOLEdBQXNCLElBQXRCO0FBQ0FtRCxhQUFLLENBQUNwRCxZQUFOLEdBQXFCLEtBQXJCO0FBQ0E7O0FBQ0YsV0FBSzRCLGlCQUFMO0FBQ0V3QixhQUFLLENBQUNyRCxlQUFOLEdBQXdCLEtBQXhCO0FBQ0FxRCxhQUFLLENBQUNoQyxRQUFOLEdBQWlCOEIsTUFBTSxDQUFDcEUsSUFBeEI7QUFDQXNFLGFBQUssQ0FBQ3BELFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDRixXQUFLNkIsaUJBQUw7QUFDRXVCLGFBQUssQ0FBQ3JELGVBQU4sR0FBd0IsS0FBeEI7QUFDQXFELGFBQUssQ0FBQ25ELGFBQU4sR0FBc0JpRCxNQUFNLENBQUNHLEtBQTdCO0FBQ0E7O0FBQ0YsV0FBS3ZCLGtCQUFMO0FBQ0VzQixhQUFLLENBQUNsRCxnQkFBTixHQUF5QixJQUF6QjtBQUNBa0QsYUFBSyxDQUFDaEQsY0FBTixHQUF1QixJQUF2QjtBQUNBZ0QsYUFBSyxDQUFDakQsYUFBTixHQUFzQixLQUF0QjtBQUNBOztBQUNGLFdBQUs0QixrQkFBTDtBQUNFcUIsYUFBSyxDQUFDbEQsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQWtELGFBQUssQ0FBQy9CLFNBQU4sR0FBa0I2QixNQUFNLENBQUNwRSxJQUF6QjtBQUNBc0UsYUFBSyxDQUFDakQsYUFBTixHQUFzQixJQUF0QjtBQUNBOztBQUNGLFdBQUs2QixrQkFBTDtBQUNFb0IsYUFBSyxDQUFDbEQsZ0JBQU4sR0FBeUIsS0FBekI7QUFDQWtELGFBQUssQ0FBQ2hELGNBQU4sR0FBdUI4QyxNQUFNLENBQUNHLEtBQTlCO0FBQ0E7O0FBQ0YsV0FBSzdCLG9CQUFMO0FBQ0U0QixhQUFLLENBQUMvQyxpQkFBTixHQUEwQixJQUExQjtBQUNBK0MsYUFBSyxDQUFDN0MsZUFBTixHQUF3QixJQUF4QjtBQUNBNkMsYUFBSyxDQUFDOUMsY0FBTixHQUF1QixLQUF2QjtBQUNBOztBQUNGLFdBQUttQixvQkFBTDtBQUNFMkIsYUFBSyxDQUFDL0MsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQStDLGFBQUssQ0FBQ3hGLEVBQU4sR0FBV3NGLE1BQU0sQ0FBQ3BFLElBQWxCO0FBQ0FzRSxhQUFLLENBQUM5QyxjQUFOLEdBQXVCLElBQXZCO0FBQ0E7O0FBQ0YsV0FBS29CLG9CQUFMO0FBQ0UwQixhQUFLLENBQUMvQyxpQkFBTixHQUEwQixLQUExQjtBQUNBK0MsYUFBSyxDQUFDN0MsZUFBTixHQUF3QjJDLE1BQU0sQ0FBQ0csS0FBL0I7QUFDQTs7QUFDRixXQUFLcEIsY0FBTDtBQUNFbUIsYUFBSyxDQUFDNUMsWUFBTixHQUFxQixJQUFyQjtBQUNBNEMsYUFBSyxDQUFDMUMsVUFBTixHQUFtQixJQUFuQjtBQUNBMEMsYUFBSyxDQUFDM0MsU0FBTixHQUFrQixLQUFsQjtBQUNBOztBQUNGLFdBQUt5QixjQUFMO0FBQ0VrQixhQUFLLENBQUM1QyxZQUFOLEdBQXFCLEtBQXJCO0FBQ0E0QyxhQUFLLENBQUN4RixFQUFOLEdBQVdzRixNQUFNLENBQUNwRSxJQUFsQjtBQUNBc0UsYUFBSyxDQUFDM0MsU0FBTixHQUFrQixJQUFsQjtBQUNBOztBQUNGLFdBQUswQixjQUFMO0FBQ0VpQixhQUFLLENBQUM1QyxZQUFOLEdBQXFCLEtBQXJCO0FBQ0E0QyxhQUFLLENBQUMxQyxVQUFOLEdBQW1Cd0MsTUFBTSxDQUFDRyxLQUExQjtBQUNBOztBQUNGLFdBQUtqQixlQUFMO0FBQ0VnQixhQUFLLENBQUN6QyxhQUFOLEdBQXNCLElBQXRCO0FBQ0F5QyxhQUFLLENBQUN2QyxXQUFOLEdBQW9CLElBQXBCO0FBQ0F1QyxhQUFLLENBQUN4QyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E7O0FBQ0YsV0FBS3lCLGVBQUw7QUFDRWUsYUFBSyxDQUFDekMsYUFBTixHQUFzQixLQUF0QjtBQUNBeUMsYUFBSyxDQUFDeEMsVUFBTixHQUFtQixJQUFuQjtBQUNBd0MsYUFBSyxDQUFDeEYsRUFBTixHQUFXLElBQVg7QUFDQTs7QUFDRixXQUFLMEUsZUFBTDtBQUNFYyxhQUFLLENBQUN6QyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0F5QyxhQUFLLENBQUN2QyxXQUFOLEdBQW9CcUMsTUFBTSxDQUFDRyxLQUEzQjtBQUNBOztBQUNGLFdBQUtkLGVBQUw7QUFDRWEsYUFBSyxDQUFDdEMsYUFBTixHQUFzQixJQUF0QjtBQUNBc0MsYUFBSyxDQUFDcEMsV0FBTixHQUFvQixJQUFwQjtBQUNBb0MsYUFBSyxDQUFDckMsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUNGLFdBQUt5QixlQUFMO0FBQ0VZLGFBQUssQ0FBQ3RDLGFBQU4sR0FBc0IsS0FBdEI7QUFDQXNDLGFBQUssQ0FBQ3JDLFVBQU4sR0FBbUIsSUFBbkI7QUFDQTs7QUFDRixXQUFLMEIsZUFBTDtBQUNFVyxhQUFLLENBQUN0QyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FzQyxhQUFLLENBQUNwQyxXQUFOLEdBQW9Ca0MsTUFBTSxDQUFDRyxLQUEzQjtBQUNBOztBQUNGLFdBQUtYLHVCQUFMO0FBQ0VVLGFBQUssQ0FBQ25DLHFCQUFOLEdBQThCLElBQTlCO0FBQ0FtQyxhQUFLLENBQUNqQyxtQkFBTixHQUE0QixJQUE1QjtBQUNBaUMsYUFBSyxDQUFDbEMsa0JBQU4sR0FBMkIsS0FBM0I7QUFDQTs7QUFDRixXQUFLeUIsdUJBQUw7QUFDRVMsYUFBSyxDQUFDeEYsRUFBTixDQUFTMEYsUUFBVCxHQUFvQkosTUFBTSxDQUFDcEUsSUFBUCxDQUFZd0UsUUFBaEM7QUFDQUYsYUFBSyxDQUFDbkMscUJBQU4sR0FBOEIsS0FBOUI7QUFDQW1DLGFBQUssQ0FBQ2xDLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0E7O0FBQ0YsV0FBSzBCLHVCQUFMO0FBQ0VRLGFBQUssQ0FBQ25DLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0FtQyxhQUFLLENBQUNqQyxtQkFBTixHQUE0QitCLE1BQU0sQ0FBQ0csS0FBbkM7QUFDQTs7QUFDRixXQUFLUixjQUFMO0FBQ0VVLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTixNQUFNLENBQUNwRSxJQUFuQjs7QUFDQSxZQUFHb0UsTUFBTSxDQUFDcEUsSUFBUCxDQUFZWSxRQUFaLEtBQXVCLENBQXZCLElBQTBCLENBQTdCLEVBQWdDO0FBQzlCNkQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFEOEIsQ0FFOUI7O0FBQ0FKLGVBQUssQ0FBQ3hGLEVBQU4sQ0FBUzZGLFNBQVQsQ0FBbUJDLElBQW5CLENBQXdCO0FBQUN2RixjQUFFLEVBQUMrRSxNQUFNLENBQUNwRSxJQUFQLENBQVlYO0FBQWhCLFdBQXhCO0FBQ0QsU0FKRCxNQUtLLElBQUcrRSxNQUFNLENBQUNwRSxJQUFQLENBQVlZLFFBQVosS0FBdUIsQ0FBdkIsSUFBMEIsQ0FBN0IsRUFBK0I7QUFDbEM2RCxpQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBSixlQUFLLENBQUN4RixFQUFOLENBQVMrRixVQUFULENBQW9CRCxJQUFwQixDQUF5QjtBQUFDdkYsY0FBRSxFQUFFK0UsTUFBTSxDQUFDcEUsSUFBUCxDQUFZWDtBQUFqQixXQUF6QjtBQUNELFNBSEksTUFJQSxJQUFHK0UsTUFBTSxDQUFDcEUsSUFBUCxDQUFZWSxRQUFaLEtBQXVCLENBQTFCLEVBQTRCO0FBQy9CNkQsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQUosZUFBSyxDQUFDeEYsRUFBTixDQUFTZ0csYUFBVCxDQUF1QkYsSUFBdkIsQ0FBNEI7QUFBQ3ZGLGNBQUUsRUFBRStFLE1BQU0sQ0FBQ3BFLElBQVAsQ0FBWVg7QUFBakIsV0FBNUI7QUFDRDs7QUFDRDs7QUFDRixXQUFLMkUsaUJBQUw7QUFDRU0sYUFBSyxDQUFDeEYsRUFBTixDQUFTaUcsS0FBVCxHQUFpQlQsS0FBSyxDQUFDeEYsRUFBTixDQUFTaUcsS0FBVCxDQUFlQyxNQUFmLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDNUYsRUFBRixLQUFTK0UsTUFBTSxDQUFDcEUsSUFBdkI7QUFBQSxTQUF0QixDQUFqQjtBQUNBOztBQUNGO0FBQ0U7QUF6SEo7QUEySEQsR0E1SHdELENBQXpDO0FBQUEsQ0FBaEI7O0FBOEhlbUUsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDA2NDkzZmEyMjE0YjI2ZGI0NjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHt1c2VJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XHJcbmltcG9ydCB7RU5EfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHtCdXR0b24sIENvbCwgUm93fSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQvQXBwTGF5b3V0JztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luRm9ybSc7XHJcblxyXG5pbXBvcnQge0xPQURfTVlfSU5GT19SRVFVRVNULCBsb2dvdXRSZXF1ZXN0QWN0aW9uLCBVUERBVEVfTE9DQUx9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQge0xPQURfUE9TVF9SRVFVRVNULCBURVNULCBVUERBVEVfQk9BUkQsIFVQREFURV9UQUd9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgVGFncyBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWdzXCI7XHJcbmltcG9ydCBQb3N0Q2FyZDEgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmQxXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFBvc3RDYXJkMiBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZDJcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hCYXJcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHttZSwgbG9jYWx9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7XHJcbiAgICBtYWluUG9zdHMsXHJcbiAgICBoYXNNb3JlUG9zdCxcclxuICAgIGxvYWRQb3N0TG9hZGluZyxcclxuICAgIHJlVHdlZXRFcnJvcixcclxuICAgIGlkLFxyXG4gICAgb2JqZWN0X1RhZ3NEYXRhLFxyXG4gICAgc2VsZWN0ZWRUYWdcclxuICB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3Qgb25Td2l0Y2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRWaWV3KCF2aWV3KTtcclxuICB9LCBbdmlld10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKGxvY2FsPT09XCLsl4bsnYxcIilcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTpVUERBVEVfTE9DQUwsXHJcbiAgICAgIGRhdGE6bWUubG9jYXRpb24sXHJcbiAgICB9KVxyXG4gIH0sW21lLmxvY2F0aW9uXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMTAwKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0ICYmICFsb2FkUG9zdExvYWRpbmcpIHtcclxuICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkOyAvLyDsnbjtlLzri4jtirgg7Iqk7YGs66GkIOq1rO2YhOydhCDsnITtlbQg7ZSE66Gg7Yq4IOyEnOuyhOydmCDtmITsnqwg66CM642U66eB7KSR7J24IOqyjOyLnOq4gOuTpOykkSDqsIDsnqUg7JWE656YIOqyjOyLnOusvOydmCDqsozsi5zrhJjrsoTrpbwgbGFzdElk66GcXHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBzZWxlY3RlZFRhZyxcclxuICAgICAgICAgICAgYm9hcmROdW06IDEsXHJcbiAgICAgICAgICAgIGxhc3RJZDogbGFzdElkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAvLyDsp4Dsl63rs4DsiJjrpbwg6rG065Oc66Ck67Sj7J6QIOyWtOywqO2UvCDroIzrjZTrp4HsnbQg65CY7KeAIOyViuuKlOuLpC4g7Iuk7KCcIOuPmeyekeycvOuhnCDthYzsiqTtirgg7ZW07JW87ZWg65OvXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2hhc01vcmVQb3N0LCBsb2FkUG9zdExvYWRpbmddKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHt2aWV3ID8gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8VGFncyB0YWdzRGF0YT17b2JqZWN0X1RhZ3NEYXRhfSBib2FyZE51bT17MX0vPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN3aXRjaH0+7KCE7ZmY7Iqk7JyE7LmYPC9CdXR0b24+XHJcbiAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkMSBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8VGFncyB0YWdzRGF0YT17b2JqZWN0X1RhZ3NEYXRhfSBib2FyZE51bT17MX0vPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN3aXRjaH0+7KCE7ZmY7Iqk7JyE7LmYPC9CdXR0b24+XHJcbiAgICAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkMiBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkgeyAvLyDtg4Ag7Jyg7KCA6rCEIOy/oO2CpOqwgCDqs7XsnKDrkJjripQg66y47KCc66W8IOuwqeyngO2VmOq4sCDsnITtlahcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH1cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogVVBEQVRFX1RBRyxcclxuICAgIGRhdGE6IFwi7KCE7LK0XCIsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBVUERBVEVfQk9BUkQsXHJcbiAgICBkYXRhOiAxLFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBcIuyghOyytFwiLFxyXG4gICAgYm9hcmROdW06IDEsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDri6Trpbgg7J207Jqp7J6QIOygleuztCDroZzrlKlcclxuICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJzTG9hZGluZzogZmFsc2UsIC8vIOyghOyytCDsnbTsmqnsnpAg66as7Iqk7Yq4IOuhnOuUqVxyXG4gIGxvYWRVc2Vyc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2Vyc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g64K07KCV67O0IOuhnOuUqSDsi5zrj4TspJFcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIGxvY2FsOiBcIuyXhuydjFwiLFxyXG4gIHVzZXJzSW5mbzoge30sXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9DQUwgPSAnVVBEQVRFX0xPQ0FMJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfUkVRVUVTVCA9ICdMT0FEX1VTRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19TVUNDRVNTID0gJ0xPQURfVVNFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBVUERBVEVfTE9DQUw6XHJcbiAgICAgIGRyYWZ0LmxvY2FsID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlcnNJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICBpZihhY3Rpb24uZGF0YS5ib2FyZE51bT09PTF8fDIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjEvMlwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRyYWZ0Lm1lKTtcclxuICAgICAgICBkcmFmdC5tZS5Qcm9kUG9zdHMucHVzaCh7aWQ6YWN0aW9uLmRhdGEuaWR9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGFjdGlvbi5kYXRhLmJvYXJkTnVtPT09M3x8NCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIzLzRcIik7XHJcbiAgICAgICAgZHJhZnQubWUuUG93ZXJQb3N0cy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuaWR9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGFjdGlvbi5kYXRhLmJvYXJkTnVtPT09NSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI1XCIpO1xyXG4gICAgICAgIGRyYWZ0Lm1lLlRvZ2V0aGVyUG9zdHMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLmlkfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9