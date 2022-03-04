module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
var _jsxFileName = "C:\\study\\LocalRentalKing\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // eslint-disable-next-line react/prop-types

function LocalRentalKing({
  Component
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("meate", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "\uC6B0\uB9AC\uB3D9\uB124 \uB80C\uD0C8\uB300\uC7A5")), __jsx(Component, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
}

LocalRentalKing.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2__["PropTypes"].elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(LocalRentalKing));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");



 // (이전상태,액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_COOP_POST_REQUEST, LOAD_COOP_POST_SUCCESS, LOAD_COOP_POST_FAILURE, LOAD_PLAY_POST_REQUEST, LOAD_PLAY_POST_SUCCESS, LOAD_PLAY_POST_FAILURE, LOAD_O_SEND_POST_REQUEST, LOAD_O_SEND_POST_SUCCESS, LOAD_O_SEND_POST_FAILURE, LOAD_O_RECIEVE_POST_REQUEST, LOAD_O_RECIEVE_POST_SUCCESS, LOAD_O_RECIEVE_POST_FAILURE, LOAD_T_SEND_POST_REQUEST, LOAD_T_SEND_POST_SUCCESS, LOAD_T_SEND_POST_FAILURE, LOAD_T_RECIEVE_POST_REQUEST, LOAD_T_RECIEVE_POST_SUCCESS, LOAD_T_RECIEVE_POST_FAILURE, MODIFY_POST_REQUEST, MODIFY_POST_SUCCESS, MODIFY_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RELATED_POST_REQUEST, LOAD_RELATED_POST_SUCCESS, LOAD_RELATED_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_LIKED_POSTS_REQUEST, LOAD_LIKED_POSTS_SUCCESS, LOAD_LIKED_POSTS_FAILURE, LOAD_SPOST_REQUEST, LOAD_SPOST_SUCCESS, LOAD_SPOST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COOP_POST_REQUEST", function() { return LOAD_COOP_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COOP_POST_SUCCESS", function() { return LOAD_COOP_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_COOP_POST_FAILURE", function() { return LOAD_COOP_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PLAY_POST_REQUEST", function() { return LOAD_PLAY_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PLAY_POST_SUCCESS", function() { return LOAD_PLAY_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PLAY_POST_FAILURE", function() { return LOAD_PLAY_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_O_SEND_POST_REQUEST", function() { return LOAD_O_SEND_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_O_SEND_POST_SUCCESS", function() { return LOAD_O_SEND_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_O_SEND_POST_FAILURE", function() { return LOAD_O_SEND_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_O_RECIEVE_POST_REQUEST", function() { return LOAD_O_RECIEVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_O_RECIEVE_POST_SUCCESS", function() { return LOAD_O_RECIEVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_O_RECIEVE_POST_FAILURE", function() { return LOAD_O_RECIEVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_T_SEND_POST_REQUEST", function() { return LOAD_T_SEND_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_T_SEND_POST_SUCCESS", function() { return LOAD_T_SEND_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_T_SEND_POST_FAILURE", function() { return LOAD_T_SEND_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_T_RECIEVE_POST_REQUEST", function() { return LOAD_T_RECIEVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_T_RECIEVE_POST_SUCCESS", function() { return LOAD_T_RECIEVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_T_RECIEVE_POST_FAILURE", function() { return LOAD_T_RECIEVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_REQUEST", function() { return MODIFY_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_SUCCESS", function() { return MODIFY_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODIFY_POST_FAILURE", function() { return MODIFY_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_REQUEST", function() { return LOAD_RELATED_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_SUCCESS", function() { return LOAD_RELATED_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RELATED_POST_FAILURE", function() { return LOAD_RELATED_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_REQUEST", function() { return LOAD_LIKED_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_SUCCESS", function() { return LOAD_LIKED_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIKED_POSTS_FAILURE", function() { return LOAD_LIKED_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_REQUEST", function() { return LOAD_SPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_SUCCESS", function() { return LOAD_SPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SPOST_FAILURE", function() { return LOAD_SPOST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  imagePaths: [],
  object_TagsData: ['공구', 'Books', 'Music', 'Sports'],
  talent_TagsData: ['공구', 'Books', 'Music', 'Sports'],
  cooperate_tagsData: ['공구', 'Books', 'Music', 'Sports'],
  play_tagsData: ['공구', 'Books', 'Music', 'Sports'],
  category: null,
  singlePost: null,
  hasMorePost: true,
  upLoadImagesLoading: false,
  upLoadImagesDone: false,
  upLoadImagesError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadSPostLoading: false,
  loadSPostDone: false,
  loadSPostError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadUserPostsLoading: false,
  loadUserPostsDone: false,
  loadUserPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  modifyPostLoading: false,
  modifyPostDone: false,
  modifyPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const LOAD_COOP_POST_REQUEST = 'LOAD_COOP_POST_REQUEST';
const LOAD_COOP_POST_SUCCESS = 'LOAD_COOP_POST_SUCCESS';
const LOAD_COOP_POST_FAILURE = 'LOAD_COOP_POST_FAILURE';
const LOAD_PLAY_POST_REQUEST = 'LOAD_PLAY_POST_REQUEST';
const LOAD_PLAY_POST_SUCCESS = 'LOAD_PLAY_POST_SUCCESS';
const LOAD_PLAY_POST_FAILURE = 'LOAD_PLAY_POST_FAILURE';
const LOAD_O_SEND_POST_REQUEST = 'LOAD_O_SEND_POST_REQUEST';
const LOAD_O_SEND_POST_SUCCESS = 'LOAD_O_SEND_POST_SUCCESS';
const LOAD_O_SEND_POST_FAILURE = 'LOAD_O_SEND_POST_FAILURE';
const LOAD_O_RECIEVE_POST_REQUEST = 'LOAD_O_RECIEVE_POST_REQUEST';
const LOAD_O_RECIEVE_POST_SUCCESS = 'LOAD_O_RECIEVE_POST_SUCCESS';
const LOAD_O_RECIEVE_POST_FAILURE = 'LOAD_O_RECIEVE_POST_FAILURE';
const LOAD_T_SEND_POST_REQUEST = 'LOAD_T_SEND_POST_REQUEST';
const LOAD_T_SEND_POST_SUCCESS = 'LOAD_T_SEND_POST_SUCCESS';
const LOAD_T_SEND_POST_FAILURE = 'LOAD_T_SEND_POST_FAILURE';
const LOAD_T_RECIEVE_POST_REQUEST = 'LOAD_T_RECIEVE_POST_REQUEST';
const LOAD_T_RECIEVE_POST_SUCCESS = 'LOAD_T_RECIEVE_POST_SUCCESS';
const LOAD_T_RECIEVE_POST_FAILURE = 'LOAD_T_RECIEVE_POST_FAILURE';
const MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST';
const MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
const MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LOAD_RELATED_POST_REQUEST = 'LOAD_RELATED_POST_REQUEST';
const LOAD_RELATED_POST_SUCCESS = 'LOAD_RELATED_POST_SUCCESS';
const LOAD_RELATED_POST_FAILURE = 'LOAD_RELATED_POST_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_LIKED_POSTS_REQUEST = 'LOAD_LIKED_POSTS_REQUEST';
const LOAD_LIKED_POSTS_SUCCESS = 'LOAD_LIKED_POSTS_SUCCESS';
const LOAD_LIKED_POSTS_FAILURE = 'LOAD_LIKED_POSTS_FAILURE';
const LOAD_SPOST_REQUEST = 'LOAD_SPOST_REQUEST';
const LOAD_SPOST_SUCCESS = 'LOAD_SPOST_SUCCESS';
const LOAD_SPOST_FAILURE = 'LOAD_SPOST_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); // (이전상태,액션) => 다음상태

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.upLoadImagesLoading = true;
      draft.upLoadImagesDone = false;
      draft.upLoadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = action.data;
        draft.upLoadImagesLoading = false;
        draft.upLoadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.upLoadImagesError = action.error;
      draft.upLoadImagesLoading = false;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostError = action.error;
      draft.likePostLoading = false;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostError = action.error;
      draft.unlikePostLoading = false;
      break;

    case LOAD_SPOST_REQUEST:
      draft.loadSPostLoading = true;
      draft.loadSPostDone = false;
      draft.loadSPostError = null;
      break;

    case LOAD_SPOST_SUCCESS:
      // draft.mainPosts = [dummyPost(action.data), ...state.mainPosts];
      draft.singlePost = action.data;
      draft.loadSPostLoading = false;
      draft.loadSPostDone = true;
      break;

    case LOAD_SPOST_FAILURE:
      draft.loadSPostError = action.error;
      draft.loadSPostLoading = false;
      break;

    case LOAD_LIKED_POSTS_REQUEST:
    case LOAD_RELATED_POST_REQUEST:
    case LOAD_USER_POSTS_REQUEST:
    case LOAD_HASHTAG_POSTS_REQUEST:
    case LOAD_COOP_POST_REQUEST:
    case LOAD_PLAY_POST_REQUEST:
    case LOAD_O_SEND_POST_REQUEST:
    case LOAD_O_RECIEVE_POST_REQUEST:
    case LOAD_T_SEND_POST_REQUEST:
    case LOAD_T_RECIEVE_POST_REQUEST:
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_LIKED_POSTS_SUCCESS:
    case LOAD_RELATED_POST_SUCCESS:
    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_COOP_POST_SUCCESS:
    case LOAD_PLAY_POST_SUCCESS:
    case LOAD_O_SEND_POST_SUCCESS:
    case LOAD_O_RECIEVE_POST_SUCCESS:
    case LOAD_T_SEND_POST_SUCCESS:
    case LOAD_T_RECIEVE_POST_SUCCESS:
    case LOAD_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_LIKED_POSTS_FAILURE:
    case LOAD_RELATED_POST_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
    case LOAD_COOP_POST_FAILURE:
    case LOAD_PLAY_POST_FAILURE:
    case LOAD_O_SEND_POST_FAILURE:
    case LOAD_O_RECIEVE_POST_FAILURE:
    case LOAD_T_SEND_POST_FAILURE:
    case LOAD_T_RECIEVE_POST_FAILURE:
    case LOAD_POST_FAILURE:
      draft.loadPostError = action.error;
      draft.loadPostLoading = false;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.mainPosts.unshift(action.data);
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.imagePaths = [];
      break;

    case ADD_POST_FAILURE:
      draft.addPostError = action.error;
      draft.addPostLoading = false;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      draft.removePostLoading = false;
      draft.removePostDone = true;
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostError = action.error;
      draft.removePostLoading = false;
      break;

    case MODIFY_POST_REQUEST:
      draft.modifyPostLoading = true;
      draft.modifyPostDone = false;
      draft.modifyPostError = null;
      break;

    case MODIFY_POST_SUCCESS:
      draft.mainPosts.find(v => v.id === action.data.PostId).content = action.data.content;
      draft.modifyPostLoading = false;
      draft.modifyPostDone = true;
      break;

    case MODIFY_POST_FAILURE:
      draft.modifyPostError = action.error;
      draft.modifyPostLoading = false;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
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
  usersInfo: {},
  signUpData: {},
  loginData: {}
};
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOAD_USERS_REQUEST = 'LOAD_USERS_REQUEST';
const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
const LOAD_USERS_FAILURE = 'LOAD_USERS_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
}); // (이전상태,액션) => 다음상태

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
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
      draft.me.Posts.unshift({
        id: action.data
      });
      break;

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data); // formdata 전송
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`); // delete는 데이터를 가져갈 수 없다 data는 postId
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
} // function loadPostAPI(data) {
//   // 스위치 문을 통해서 각 카테고리들을 코드로 변경하여 넣어주자!
//   let category = null;
//   switch (data.category){
//     case "전체":
//       break;
//     default: category = "a0";
//     break;
//   }
//   return axios.post(`/posts?lastId=${data.lastId || 0}`,data);
// }
//
// function* loadPost(action) { // 일반게시물 불러오기
//   try {
//     const result = yield call(loadPostAPI, action.data);
//     yield put({ // put이 액션을 dispatch하는 역할과 빗슷하게 본다
//       type: LOAD_POST_SUCCESS,
//       data: result.data,
//     });
//   } catch (err) {
//     yield put({
//       type: LOAD_POST_FAILURE,
//       error: err.response.data,
//     });
//   }
// }


function loadPostAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${data}/post?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadSPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/${data}`);
}

function* loadSPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadSPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SPOST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SPOST_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data); // formdata는 { name: data } 같은 식으로 감싸버리면 json으로 자동 변환되버린다.
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function RelatedPostAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/related?lastId=${lastId || 0}`);
}

function* RelatedPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(RelatedPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RELATED_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RELATED_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadLikedPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/liked?lastId=${lastId || 0}`);
}

function* loadLikedPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadLikedPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function modifyPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data.PostId}`, data);
}

function* modifyPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(modifyPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["MODIFY_POST_SUCCESS"],
      data: result.data // PostId,UserId

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["MODIFY_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadCoopPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadCoopPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadCoopPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPlayPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPlayPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPlayPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadoSendPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadoSendPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadoSendPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadoRecievePostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadoRecievePosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadoRecievePostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadtSendPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadtSendPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadtSendPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadtRecievePostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadtRecievePosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadtRecievePostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLoadSPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SPOST_REQUEST"], loadSPost);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchModifyPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["MODIFY_POST_REQUEST"], modifyPost);
}

function* watchLoadRelatedPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RELATED_POST_REQUEST"], RelatedPost);
}

function* watchCoopLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_COOP_POST_REQUEST"], loadCoopPosts);
}

function* watchPlayLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_PLAY_POST_REQUEST"], loadPlayPosts);
}

function* watchoSendLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_O_SEND_POST_REQUEST"], loadoSendPosts);
}

function* watchoRecieveLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_O_RECIEVE_POST_REQUEST"], loadoRecievePosts);
}

function* watchtSendLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_T_SEND_POST_REQUEST"], loadtSendPosts);
}

function* watchtRecieveLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_T_RECIEVE_POST_REQUEST"], loadtRecievePosts);
}

function* watchLoadLikedtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_REQUEST"], loadLikedPosts);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadSPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRelatedPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadLikedtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchModifyPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchPlayLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCoopLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchoSendLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchoRecieveLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchtSendLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchtRecieveLoadPost)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function SignUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

function loadUsersAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/all');
}

function ChangeNickNameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
}

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout', data);
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function* loadUsers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUsersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USERS_FAILURE"],
      error: err.response.data
    });
  }
}

function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function* logOut(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function* signUp(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(SignUpAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function* changeNickName(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(ChangeNickNameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchChangenickName() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickName);
}

function* watchLoadUserInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchLoadUsersInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USERS_REQUEST"], loadUsers);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUsersInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangenickName)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJMb2NhbFJlbnRhbEtpbmciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJvYmplY3RfVGFnc0RhdGEiLCJ0YWxlbnRfVGFnc0RhdGEiLCJjb29wZXJhdGVfdGFnc0RhdGEiLCJwbGF5X3RhZ3NEYXRhIiwiY2F0ZWdvcnkiLCJzaW5nbGVQb3N0IiwiaGFzTW9yZVBvc3QiLCJ1cExvYWRJbWFnZXNMb2FkaW5nIiwidXBMb2FkSW1hZ2VzRG9uZSIsInVwTG9hZEltYWdlc0Vycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkU1Bvc3RMb2FkaW5nIiwibG9hZFNQb3N0RG9uZSIsImxvYWRTUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRVc2VyUG9zdHNMb2FkaW5nIiwibG9hZFVzZXJQb3N0c0RvbmUiLCJsb2FkVXNlclBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsIm1vZGlmeVBvc3RMb2FkaW5nIiwibW9kaWZ5UG9zdERvbmUiLCJtb2RpZnlQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiTE9BRF9DT09QX1BPU1RfUkVRVUVTVCIsIkxPQURfQ09PUF9QT1NUX1NVQ0NFU1MiLCJMT0FEX0NPT1BfUE9TVF9GQUlMVVJFIiwiTE9BRF9QTEFZX1BPU1RfUkVRVUVTVCIsIkxPQURfUExBWV9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BMQVlfUE9TVF9GQUlMVVJFIiwiTE9BRF9PX1NFTkRfUE9TVF9SRVFVRVNUIiwiTE9BRF9PX1NFTkRfUE9TVF9TVUNDRVNTIiwiTE9BRF9PX1NFTkRfUE9TVF9GQUlMVVJFIiwiTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNUIiwiTE9BRF9PX1JFQ0lFVkVfUE9TVF9TVUNDRVNTIiwiTE9BRF9PX1JFQ0lFVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9UX1NFTkRfUE9TVF9SRVFVRVNUIiwiTE9BRF9UX1NFTkRfUE9TVF9TVUNDRVNTIiwiTE9BRF9UX1NFTkRfUE9TVF9GQUlMVVJFIiwiTE9BRF9UX1JFQ0lFVkVfUE9TVF9SRVFVRVNUIiwiTE9BRF9UX1JFQ0lFVkVfUE9TVF9TVUNDRVNTIiwiTE9BRF9UX1JFQ0lFVkVfUE9TVF9GQUlMVVJFIiwiTU9ESUZZX1BPU1RfUkVRVUVTVCIsIk1PRElGWV9QT1NUX1NVQ0NFU1MiLCJNT0RJRllfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCIsIkxPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9TUE9TVF9SRVFVRVNUIiwiTE9BRF9TUE9TVF9TVUNDRVNTIiwiTE9BRF9TUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwiZXJyb3IiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiY29uY2F0IiwibGVuZ3RoIiwidW5zaGlmdCIsImNvbnRlbnQiLCJDb21tZW50cyIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2FkVXNlcnNMb2FkaW5nIiwibG9hZFVzZXJzRG9uZSIsImxvYWRVc2Vyc0Vycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJ1c2VySW5mbyIsIm1lIiwidXNlcnNJbmZvIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUlNfUkVRVUVTVCIsIkxPQURfVVNFUlNfU1VDQ0VTUyIsIkxPQURfVVNFUlNfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibmlja25hbWUiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsImxvYWRQb3N0QVBJIiwibGFzdElkIiwiZ2V0IiwibG9hZFBvc3QiLCJsb2FkU1Bvc3RBUEkiLCJsb2FkU1Bvc3QiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkVXNlclBvc3RzQVBJIiwibG9hZFVzZXJQb3N0cyIsIlJlbGF0ZWRQb3N0QVBJIiwiUmVsYXRlZFBvc3QiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRMaWtlZFBvc3RzQVBJIiwibG9hZExpa2VkUG9zdHMiLCJtb2RpZnlQb3N0QVBJIiwibW9kaWZ5UG9zdCIsImxvYWRDb29wUG9zdHNBUEkiLCJsb2FkQ29vcFBvc3RzIiwibG9hZFBsYXlQb3N0c0FQSSIsImxvYWRQbGF5UG9zdHMiLCJsb2Fkb1NlbmRQb3N0c0FQSSIsImxvYWRvU2VuZFBvc3RzIiwibG9hZG9SZWNpZXZlUG9zdHNBUEkiLCJsb2Fkb1JlY2lldmVQb3N0cyIsImxvYWR0U2VuZFBvc3RzQVBJIiwibG9hZHRTZW5kUG9zdHMiLCJsb2FkdFJlY2lldmVQb3N0c0FQSSIsImxvYWR0UmVjaWV2ZVBvc3RzIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbkxpa2VQb3N0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExvYWRTUG9zdCIsIndhdGNoTG9hZFVzZXJQb3N0cyIsIndhdGNoTG9hZEhhc2h0YWdQb3N0cyIsIndhdGNoTW9kaWZ5UG9zdCIsIndhdGNoTG9hZFJlbGF0ZWRQb3N0Iiwid2F0Y2hDb29wTG9hZFBvc3QiLCJ3YXRjaFBsYXlMb2FkUG9zdCIsIndhdGNob1NlbmRMb2FkUG9zdCIsIndhdGNob1JlY2lldmVMb2FkUG9zdCIsIndhdGNodFNlbmRMb2FkUG9zdCIsIndhdGNodFJlY2lldmVMb2FkUG9zdCIsIndhdGNoTG9hZExpa2VkdGFnUG9zdHMiLCJsb2FkTXlJbmZvQVBJIiwiU2lnblVwQVBJIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlcnNBUEkiLCJDaGFuZ2VOaWNrTmFtZUFQSSIsImxvZ0luQVBJIiwibG9nT3V0QVBJIiwibG9hZE15SW5mbyIsImxvYWRVc2VyIiwibG9hZFVzZXJzIiwibG9nSW4iLCJsb2dPdXQiLCJzaWduVXAiLCJjaGFuZ2VOaWNrTmFtZSIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hDaGFuZ2VuaWNrTmFtZSIsIndhdGNoTG9hZFVzZXJJbmZvIiwid2F0Y2hMb2FkVXNlcnNJbmZvIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiww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QUNBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUVBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUVBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUNBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUNBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUVBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUNBLE1BQU1DLDJCQUEyQixHQUFHLDZCQUFwQztBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztB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QUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELEVBQWlCTCxnQkFBakIsQ0FBcEI7QUFDQSxRQUFNUSxRQUFRLEdBQUcsUUFDYkMsU0FEYSxHQUViQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBRnZCO0FBR0EsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDckwsaURBQUQsRUFBVWdMLFFBQVYsQ0FBekI7QUFDQUksT0FBSyxDQUFDRSxRQUFOLEdBQWlCVCxjQUFjLENBQUNVLEdBQWYsQ0FBbUI1Ryw4Q0FBbkIsQ0FBakI7QUFDQSxTQUFPeUcsS0FBUDtBQUNELENBVEQ7O0FBV0EsTUFBTXZTLE9BQU8sR0FBRzJTLHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFDNUNhLE9BQUs7QUFEdUMsQ0FBakIsQ0FBN0I7QUFJZTVTLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG5mdW5jdGlvbiBMb2NhbFJlbnRhbEtpbmcoeyBDb21wb25lbnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWVhdGUgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8dGl0bGU+7Jqw66as64+Z64SkIOugjO2DiOuMgOyepTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTG9jYWxSZW50YWxLaW5nLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTG9jYWxSZW50YWxLaW5nKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbi8vICjsnbTsoITsg4Htg5ws7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIG9iamVjdF9UYWdzRGF0YSA6IFsn6rO16rWsJywgJ0Jvb2tzJywgJ011c2ljJywgJ1Nwb3J0cyddLFxyXG4gIHRhbGVudF9UYWdzRGF0YSA6IFsn6rO16rWsJywgJ0Jvb2tzJywgJ011c2ljJywgJ1Nwb3J0cyddLFxyXG4gIGNvb3BlcmF0ZV90YWdzRGF0YSA6IFsn6rO16rWsJywgJ0Jvb2tzJywgJ011c2ljJywgJ1Nwb3J0cyddLFxyXG4gIHBsYXlfdGFnc0RhdGEgOiBbJ+qzteq1rCcsICdCb29rcycsICdNdXNpYycsICdTcG9ydHMnXSxcclxuICBjYXRlZ29yeTpudWxsLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgdXBMb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFNQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlclBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgbW9kaWZ5UG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3REb25lOiBmYWxzZSxcclxuICBtb2RpZnlQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9DT09QX1BPU1RfUkVRVUVTVCA9ICdMT0FEX0NPT1BfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09PUF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9DT09QX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPT1BfUE9TVF9GQUlMVVJFID0gJ0xPQURfQ09PUF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUExBWV9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QTEFZX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BMQVlfUE9TVF9TVUNDRVNTID0gJ0xPQURfUExBWV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QTEFZX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BMQVlfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX09fU0VORF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9PX1NFTkRfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfT19TRU5EX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX09fU0VORF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9PX1NFTkRfUE9TVF9GQUlMVVJFID0gJ0xPQURfT19TRU5EX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNUID0gJ0xPQURfT19SRUNJRVZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX09fUkVDSUVWRV9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9PX1JFQ0lFVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfT19SRUNJRVZFX1BPU1RfRkFJTFVSRSA9ICdMT0FEX09fUkVDSUVWRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVF9TRU5EX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1RfU0VORF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9UX1NFTkRfUE9TVF9TVUNDRVNTID0gJ0xPQURfVF9TRU5EX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1RfU0VORF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9UX1NFTkRfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1RfUkVDSUVWRV9QT1NUX1JFUVVFU1QgPSAnTE9BRF9UX1JFQ0lFVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVF9SRUNJRVZFX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1RfUkVDSUVWRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9UX1JFQ0lFVkVfUE9TVF9GQUlMVVJFID0gJ0xPQURfVF9SRUNJRVZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfUkVRVUVTVCA9ICdNT0RJRllfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX1NVQ0NFU1MgPSAnTU9ESUZZX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9GQUlMVVJFID0gJ01PRElGWV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfTElLRURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9SRVFVRVNUID0gJ0xPQURfU1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX1NVQ0NFU1MgPSAnTE9BRF9TUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfRkFJTFVSRSA9ICdMT0FEX1NQT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCzslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX1NVQ0NFU1M6XHJcbiAgICAgIC8vIGRyYWZ0Lm1haW5Qb3N0cyA9IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9DT09QX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9QTEFZX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9PX1NFTkRfUE9TVF9SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfVF9TRU5EX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9UX1JFQ0lFVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfQ09PUF9QT1NUX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUExBWV9QT1NUX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfT19TRU5EX1BPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9PX1JFQ0lFVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1RfU0VORF9QT1NUX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfVF9SRUNJRVZFX1BPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfQ09PUF9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUExBWV9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfT19TRU5EX1BPU1RfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9PX1JFQ0lFVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX1RfU0VORF9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVF9SRUNJRVZFX1BPU1RfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g64uk66W4IOydtOyaqeyekCDsoJXrs7Qg66Gc65SpXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIGxvYWRVc2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDsoITssrQg7J207Jqp7J6QIOumrOyKpO2KuCDroZzrlKlcclxuICBsb2FkVXNlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlcnNFcnJvcjogbnVsbCxcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOuCtOygleuztCDroZzrlKkg7Iuc64+E7KSRXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICB1c2Vyc0luZm86IHt9LFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX1JFUVVFU1QgPSAnTE9BRF9VU0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19GQUlMVVJFID0gJ0xPQURfVVNFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCzslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXJzSW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICBmb3JrKHVzZXJTYWdhKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfTElLRURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfQ09PUF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9DT09QX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX0NPT1BfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUExBWV9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QTEFZX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1BMQVlfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfT19TRU5EX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX09fU0VORF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9PX1NFTkRfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfT19SRUNJRVZFX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX09fUkVDSUVWRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9PX1JFQ0lFVkVfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfVF9TRU5EX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1RfU0VORF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9UX1NFTkRfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfVF9SRUNJRVZFX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1RfUkVDSUVWRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9UX1JFQ0lFVkVfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfU1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1NQT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9TUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gIE1PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgTU9ESUZZX1BPU1RfUkVRVUVTVCxcclxuICBNT0RJRllfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpOyAvLyBmb3JtZGF0YSDsoITshqFcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTsgLy8gZGVsZXRl64qUIOuNsOydtO2EsOulvCDqsIDsoLjqsIgg7IiYIOyXhuuLpCBkYXRh64qUIHBvc3RJZFxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4vLyAgIC8vIOyKpOychOy5mCDrrLjsnYQg7Ya17ZW07IScIOqwgSDsubTthYzqs6Drpqzrk6TsnYQg7L2U65Oc66GcIOuzgOqyve2VmOyXrCDrhKPslrTso7zsnpAhXHJcbi8vICAgbGV0IGNhdGVnb3J5ID0gbnVsbDtcclxuLy8gICBzd2l0Y2ggKGRhdGEuY2F0ZWdvcnkpe1xyXG4vLyAgICAgY2FzZSBcIuyghOyytFwiOlxyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGRlZmF1bHQ6IGNhdGVnb3J5ID0gXCJhMFwiO1xyXG4vLyAgICAgYnJlYWs7XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdHM/bGFzdElkPSR7ZGF0YS5sYXN0SWQgfHwgMH1gLGRhdGEpO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHsgLy8g7J2867CY6rKM7Iuc66y8IOu2iOufrOyYpOq4sFxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbi8vICAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbi8vICAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4vLyAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgeWllbGQgcHV0KHtcclxuLy8gICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbi8vICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzLyR7ZGF0YX0vcG9zdD9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsgLy8gYXBpIOyEnOuyhCDsmpTssq3snYAgL3VzZXIvOnVzZXJJZC9wb3N0c1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU1Bvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRTUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkU1Bvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9TUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9TUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7IC8vIGZvcm1kYXRh64qUIHsgbmFtZTogZGF0YSB9IOqwmeydgCDsi53snLzroZwg6rCQ7Iu467KE66as66m0IGpzb27snLzroZwg7J6Q64+ZIOuzgO2ZmOuQmOuyhOumsOuLpC5cclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsgLy8gYXBpIOyEnOuyhCDsmpTssq3snYAgL3VzZXIvOnVzZXJJZC9wb3N0c1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVsYXRlZFBvc3RBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzL3JlbGF0ZWQ/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBSZWxhdGVkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChSZWxhdGVkUG9zdEFQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRMaWtlZFBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9saWtlZD9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRMaWtlZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRMaWtlZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfTElLRURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTElLRURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YS5Qb3N0SWR9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBtb2RpZnlQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKG1vZGlmeVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTU9ESUZZX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIC8vIFBvc3RJZCxVc2VySWRcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTU9ESUZZX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29vcFBvc3RzQVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRDb29wUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZENvb3BQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBsYXlQb3N0c0FQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUGxheVBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQbGF5UG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRvU2VuZFBvc3RzQVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRvU2VuZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRvU2VuZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2Fkb1JlY2lldmVQb3N0c0FQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2Fkb1JlY2lldmVQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2Fkb1JlY2lldmVQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkdFNlbmRQb3N0c0FQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkdFNlbmRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkdFNlbmRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZHRSZWNpZXZlUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZHRSZWNpZXZlUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZHRSZWNpZXZlUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KCBMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkU1Bvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1NQT1NUX1JFUVVFU1QsIGxvYWRTUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1vZGlmeVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChNT0RJRllfUE9TVF9SRVFVRVNULCBtb2RpZnlQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFJlbGF0ZWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCwgUmVsYXRlZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDb29wTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0NPT1BfUE9TVF9SRVFVRVNULCBsb2FkQ29vcFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUGxheUxvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QTEFZX1BPU1RfUkVRVUVTVCwgbG9hZFBsYXlQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaG9TZW5kTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX09fU0VORF9QT1NUX1JFUVVFU1QsIGxvYWRvU2VuZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNob1JlY2lldmVMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfT19SRUNJRVZFX1BPU1RfUkVRVUVTVCwgbG9hZG9SZWNpZXZlUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2h0U2VuZExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9UX1NFTkRfUE9TVF9SRVFVRVNULCBsb2FkdFNlbmRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaHRSZWNpZXZlTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1RfUkVDSUVWRV9QT1NUX1JFUVVFU1QsIGxvYWR0UmVjaWV2ZVBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZExpa2VkdGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QsIGxvYWRMaWtlZFBvc3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFNQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFJlbGF0ZWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTGlrZWR0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVuTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaE1vZGlmeVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoUGxheUxvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hDb29wTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaG9TZW5kTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaG9SZWNpZXZlTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaHRTZW5kTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaHRSZWNpZXZlTG9hZFBvc3QpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7YWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gIExPQURfVVNFUl9SRVFVRVNULFxyXG4gIExPQURfVVNFUl9TVUNDRVNTLFxyXG4gIExPQURfVVNFUlNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSU19TVUNDRVNTLFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5mdW5jdGlvbiBTaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFVzZXJzQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2FsbCcpO1xyXG59XHJcbmZ1bmN0aW9uIENoYW5nZU5pY2tOYW1lQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywge25pY2tuYW1lOiBkYXRhfSk7XHJcbn1cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcsIGRhdGEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZE15SW5mb0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRVc2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXJzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChTaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogY2hhbmdlTmlja05hbWUoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoQ2hhbmdlTmlja05hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VuaWNrTmFtZSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrTmFtZSk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcnNJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSU19SRVFVRVNULCBsb2FkVXNlcnMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2dpbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgZm9yayh3YXRjaExvYWRNeUluZm8pLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2VySW5mbyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJzSW5mbyksXHJcbiAgICBmb3JrKHdhdGNoQ2hhbmdlbmlja05hbWUpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9