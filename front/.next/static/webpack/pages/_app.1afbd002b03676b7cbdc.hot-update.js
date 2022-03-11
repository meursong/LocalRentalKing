webpackHotUpdate_N_E("pages/_app",{

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
  local: null,
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
        draft.local = "이건됌";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJzTG9hZGluZyIsImxvYWRVc2Vyc0RvbmUiLCJsb2FkVXNlcnNFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwidXNlckluZm8iLCJtZSIsImxvY2FsIiwidXNlcnNJbmZvIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIlVQREFURV9MT0NBTCIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUlNfUkVRVUVTVCIsIkxPQURfVVNFUlNfU1VDQ0VTUyIsIkxPQURfVVNFUlNfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsIm5pY2tuYW1lIiwiY29uc29sZSIsImxvZyIsImJvYXJkTnVtIiwiUHJvZFBvc3RzIiwicHVzaCIsImlkIiwiUG93ZXJQb3N0cyIsIlRvZ2V0aGVyUG9zdHMiLCJQb3N0cyIsImZpbHRlciIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLGlCQUFlLEVBQUUsS0FEUztBQUNGO0FBQ3hCQyxjQUFZLEVBQUUsS0FGWTtBQUcxQkMsZUFBYSxFQUFFLElBSFc7QUFJMUJDLGtCQUFnQixFQUFFLEtBSlE7QUFJRDtBQUN6QkMsZUFBYSxFQUFFLEtBTFc7QUFNMUJDLGdCQUFjLEVBQUUsSUFOVTtBQU8xQkMsbUJBQWlCLEVBQUUsS0FQTztBQU9BO0FBQzFCQyxnQkFBYyxFQUFFLEtBUlU7QUFTMUJDLGlCQUFlLEVBQUUsSUFUUztBQVUxQkMsY0FBWSxFQUFFLEtBVlk7QUFVTDtBQUNyQkMsV0FBUyxFQUFFLEtBWGU7QUFZMUJDLFlBQVUsRUFBRSxJQVpjO0FBYTFCQyxlQUFhLEVBQUUsS0FiVztBQWFKO0FBQ3RCQyxZQUFVLEVBQUUsS0FkYztBQWUxQkMsYUFBVyxFQUFFLElBZmE7QUFnQjFCQyxlQUFhLEVBQUUsS0FoQlc7QUFnQko7QUFDdEJDLFlBQVUsRUFB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QUssQ0FBQ3JDLEVBQU4sQ0FBUzhDLFVBQVQsQ0FBb0JGLElBQXBCLENBQXlCO0FBQUNDLGNBQUUsRUFBRVYsTUFBTSxDQUFDTCxJQUFQLENBQVllO0FBQWpCLFdBQXpCO0FBQ0QsU0FISSxNQUlBLElBQUdWLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZWSxRQUFaLEtBQXVCLENBQTFCLEVBQTRCO0FBQy9CRixpQkFBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNBSixlQUFLLENBQUNyQyxFQUFOLENBQVMrQyxhQUFULENBQXVCSCxJQUF2QixDQUE0QjtBQUFDQyxjQUFFLEVBQUVWLE1BQU0sQ0FBQ0wsSUFBUCxDQUFZZTtBQUFqQixXQUE1QjtBQUNEOztBQUNEOztBQUNGLFdBQUtqQixpQkFBTDtBQUNFUyxhQUFLLENBQUNyQyxFQUFOLENBQVNnRCxLQUFULEdBQWlCWCxLQUFLLENBQUNyQyxFQUFOLENBQVNnRCxLQUFULENBQWVDLE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNMLEVBQUYsS0FBU1YsTUFBTSxDQUFDTCxJQUF2QjtBQUFBLFNBQXRCLENBQWpCO0FBQ0E7O0FBQ0Y7QUFDRTtBQTFISjtBQTRIRCxHQTdId0QsQ0FBekM7QUFBQSxDQUFoQjs7QUErSGVHLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWFmYmQwMDJiMDM2NzZiN2NiZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g64uk66W4IOydtOyaqeyekCDsoJXrs7Qg66Gc65SpXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIGxvYWRVc2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDsoITssrQg7J207Jqp7J6QIOumrOyKpO2KuCDroZzrlKlcclxuICBsb2FkVXNlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlcnNFcnJvcjogbnVsbCxcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOuCtOygleuztCDroZzrlKkg7Iuc64+E7KSRXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICBsb2NhbDogbnVsbCxcclxuICB1c2Vyc0luZm86IHt9LFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0xPQ0FMID0gJ1VQREFURV9MT0NBTCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX1JFUVVFU1QgPSAnTE9BRF9VU0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19GQUlMVVJFID0gJ0xPQURfVVNFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCzslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVVBEQVRFX0xPQ0FMOlxyXG4gICAgICBkcmFmdC5sb2NhbCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXJzSW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvY2FsID0gXCLsnbTqsbTrkIxcIjtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICBpZihhY3Rpb24uZGF0YS5ib2FyZE51bT09PTF8fDIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjEvMlwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGRyYWZ0Lm1lKTtcclxuICAgICAgICBkcmFmdC5tZS5Qcm9kUG9zdHMucHVzaCh7aWQ6YWN0aW9uLmRhdGEuaWR9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGFjdGlvbi5kYXRhLmJvYXJkTnVtPT09M3x8NCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIzLzRcIik7XHJcbiAgICAgICAgZHJhZnQubWUuUG93ZXJQb3N0cy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuaWR9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKGFjdGlvbi5kYXRhLmJvYXJkTnVtPT09NSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCI1XCIpO1xyXG4gICAgICAgIGRyYWZ0Lm1lLlRvZ2V0aGVyUG9zdHMucHVzaCh7aWQ6IGFjdGlvbi5kYXRhLmlkfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9