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
}

function loadPostAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.lastId);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJMb2NhbFJlbnRhbEtpbmciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJvYmplY3RfVGFnc0RhdGEiLCJ0YWxlbnRfVGFnc0RhdGEiLCJjb29wZXJhdGVfdGFnc0RhdGEiLCJwbGF5X3RhZ3NEYXRhIiwiY2F0ZWdvcnkiLCJzaW5nbGVQb3N0IiwiaGFzTW9yZVBvc3QiLCJ1cExvYWRJbWFnZXNMb2FkaW5nIiwidXBMb2FkSW1hZ2VzRG9uZSIsInVwTG9hZEltYWdlc0Vycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkU1Bvc3RMb2FkaW5nIiwibG9hZFNQb3N0RG9uZSIsImxvYWRTUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRVc2VyUG9zdHNMb2FkaW5nIiwibG9hZFVzZXJQb3N0c0RvbmUiLCJsb2FkVXNlclBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsIm1vZGlmeVBvc3RMb2FkaW5nIiwibW9kaWZ5UG9zdERvbmUiLCJtb2RpZnlQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiTE9BRF9DT09QX1BPU1RfUkVRVUVTVCIsIkxPQURfQ09PUF9QT1NUX1NVQ0NFU1MiLCJMT0FEX0NPT1BfUE9TVF9GQUlMVVJFIiwiTE9BRF9QTEFZX1BPU1RfUkVRVUVTVCIsIkxPQURfUExBWV9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BMQVlfUE9TVF9GQUlMVVJFIiwiTE9BRF9PX1NFTkRfUE9TVF9SRVFVRVNUIiwiTE9BRF9PX1NFTkRfUE9TVF9TVUNDRVNTIiwiTE9BRF9PX1NFTkRfUE9TVF9GQUlMVVJFIiwiTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNUIiwiTE9BRF9PX1JFQ0lFVkVfUE9TVF9TVUNDRVNTIiwiTE9BRF9PX1JFQ0lFVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9UX1NFTkRfUE9TVF9SRVFVRVNUIiwiTE9BRF9UX1NFTkRfUE9TVF9TVUNDRVNTIiwiTE9BRF9UX1NFTkRfUE9TVF9GQUlMVVJFIiwiTE9BRF9UX1JFQ0lFVkVfUE9TVF9SRVFVRVNUIiwiTE9BRF9UX1JFQ0lFVkVfUE9TVF9TVUNDRVNTIiwiTE9BRF9UX1JFQ0lFVkVfUE9TVF9GQUlMVVJFIiwiTU9ESUZZX1BPU1RfUkVRVUVTVCIsIk1PRElGWV9QT1NUX1NVQ0NFU1MiLCJNT0RJRllfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCIsIkxPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9TUE9TVF9SRVFVRVNUIiwiTE9BRF9TUE9TVF9TVUNDRVNTIiwiTE9BRF9TUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJpIiwiZXJyb3IiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiY29uY2F0IiwibGVuZ3RoIiwidW5zaGlmdCIsImNvbnRlbnQiLCJDb21tZW50cyIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2FkVXNlcnNMb2FkaW5nIiwibG9hZFVzZXJzRG9uZSIsImxvYWRVc2Vyc0Vycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJ1c2VySW5mbyIsIm1lIiwidXNlcnNJbmZvIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUlNfUkVRVUVTVCIsIkxPQURfVVNFUlNfU1VDQ0VTUyIsIkxPQURfVVNFUlNfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibmlja25hbWUiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsImxvYWRQb3N0QVBJIiwibGFzdElkIiwiZ2V0IiwibG9hZFBvc3QiLCJsb2FkU1Bvc3RBUEkiLCJsb2FkU1Bvc3QiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkVXNlclBvc3RzQVBJIiwibG9hZFVzZXJQb3N0cyIsIlJlbGF0ZWRQb3N0QVBJIiwiUmVsYXRlZFBvc3QiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsImxvYWRMaWtlZFBvc3RzQVBJIiwibG9hZExpa2VkUG9zdHMiLCJtb2RpZnlQb3N0QVBJIiwibW9kaWZ5UG9zdCIsImxvYWRDb29wUG9zdHNBUEkiLCJsb2FkQ29vcFBvc3RzIiwibG9hZFBsYXlQb3N0c0FQSSIsImxvYWRQbGF5UG9zdHMiLCJsb2Fkb1NlbmRQb3N0c0FQSSIsImxvYWRvU2VuZFBvc3RzIiwibG9hZG9SZWNpZXZlUG9zdHNBUEkiLCJsb2Fkb1JlY2lldmVQb3N0cyIsImxvYWR0U2VuZFBvc3RzQVBJIiwibG9hZHRTZW5kUG9zdHMiLCJsb2FkdFJlY2lldmVQb3N0c0FQSSIsImxvYWR0UmVjaWV2ZVBvc3RzIiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsIndhdGNoTG9hZFBvc3QiLCJ0aHJvdHRsZSIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTG9hZFNQb3N0Iiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hNb2RpZnlQb3N0Iiwid2F0Y2hMb2FkUmVsYXRlZFBvc3QiLCJ3YXRjaENvb3BMb2FkUG9zdCIsIndhdGNoUGxheUxvYWRQb3N0Iiwid2F0Y2hvU2VuZExvYWRQb3N0Iiwid2F0Y2hvUmVjaWV2ZUxvYWRQb3N0Iiwid2F0Y2h0U2VuZExvYWRQb3N0Iiwid2F0Y2h0UmVjaWV2ZUxvYWRQb3N0Iiwid2F0Y2hMb2FkTGlrZWR0YWdQb3N0cyIsImxvYWRNeUluZm9BUEkiLCJTaWduVXBBUEkiLCJsb2FkVXNlckFQSSIsImxvYWRVc2Vyc0FQSSIsIkNoYW5nZU5pY2tOYW1lQVBJIiwibG9nSW5BUEkiLCJsb2dPdXRBUEkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXIiLCJsb2FkVXNlcnMiLCJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImNoYW5nZU5pY2tOYW1lIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaENoYW5nZW5pY2tOYW1lIiwid2F0Y2hMb2FkVXNlckluZm8iLCJ3YXRjaExvYWRVc2Vyc0luZm8iLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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QUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBQ0EsTUFBTUMsMkJBQTJCLEdBQUcsNkJBQXBDO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdB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QUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQjdHLDhDQUFuQixDQUFqQjtBQUNBLFNBQU8wRyxLQUFQO0FBQ0QsQ0FURDs7QUFXQSxNQUFNeFMsT0FBTyxHQUFHNFMsd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtBQUM1Q2EsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllN1Msc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmZ1bmN0aW9uIExvY2FsUmVudGFsS2luZyh7IENvbXBvbmVudCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZWF0ZSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDx0aXRsZT7smrDrpqzrj5nrhKQg66CM7YOI64yA7J6lPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5Mb2NhbFJlbnRhbEtpbmcucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChMb2NhbFJlbnRhbEtpbmcpO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCzslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgb2JqZWN0X1RhZ3NEYXRhIDogWyfqs7XqtawnLCAnQm9va3MnLCAnTXVzaWMnLCAnU3BvcnRzJ10sXHJcbiAgdGFsZW50X1RhZ3NEYXRhIDogWyfqs7XqtawnLCAnQm9va3MnLCAnTXVzaWMnLCAnU3BvcnRzJ10sXHJcbiAgY29vcGVyYXRlX3RhZ3NEYXRhIDogWyfqs7XqtawnLCAnQm9va3MnLCAnTXVzaWMnLCAnU3BvcnRzJ10sXHJcbiAgcGxheV90YWdzRGF0YSA6IFsn6rO16rWsJywgJ0Jvb2tzJywgJ011c2ljJywgJ1Nwb3J0cyddLFxyXG4gIGNhdGVnb3J5Om51bGwsXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICB1cExvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cExvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cExvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkU1Bvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkU1Bvc3REb25lOiBmYWxzZSxcclxuICBsb2FkU1Bvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkVXNlclBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFVzZXJQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBtb2RpZnlQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbW9kaWZ5UG9zdERvbmU6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NPT1BfUE9TVF9SRVFVRVNUID0gJ0xPQURfQ09PUF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DT09QX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX0NPT1BfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfQ09PUF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9DT09QX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QTEFZX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BMQVlfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUExBWV9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QTEFZX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BMQVlfUE9TVF9GQUlMVVJFID0gJ0xPQURfUExBWV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfT19TRU5EX1BPU1RfUkVRVUVTVCA9ICdMT0FEX09fU0VORF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9PX1NFTkRfUE9TVF9TVUNDRVNTID0gJ0xPQURfT19TRU5EX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX09fU0VORF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9PX1NFTkRfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QgPSAnTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfT19SRUNJRVZFX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX09fUkVDSUVWRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9PX1JFQ0lFVkVfUE9TVF9GQUlMVVJFID0gJ0xPQURfT19SRUNJRVZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9UX1NFTkRfUE9TVF9SRVFVRVNUID0gJ0xPQURfVF9TRU5EX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1RfU0VORF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9UX1NFTkRfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVF9TRU5EX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1RfU0VORF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVF9SRUNJRVZFX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1RfUkVDSUVWRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9UX1JFQ0lFVkVfUE9TVF9TVUNDRVNTID0gJ0xPQURfVF9SRUNJRVZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1RfUkVDSUVWRV9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9UX1JFQ0lFVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9SRVFVRVNUID0gJ01PRElGWV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfU1VDQ0VTUyA9ICdNT0RJRllfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX0ZBSUxVUkUgPSAnTU9ESUZZX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfTElLRURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX1JFUVVFU1QgPSAnTE9BRF9TUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1NQT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9GQUlMVVJFID0gJ0xPQURfU1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfU1VDQ0VTUzpcclxuICAgICAgLy8gZHJhZnQubWFpblBvc3RzID0gW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTElLRURfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX0NPT1BfUE9TVF9SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1BMQVlfUE9TVF9SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX09fU0VORF9QT1NUX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfT19SRUNJRVZFX1BPU1RfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9UX1NFTkRfUE9TVF9SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1RfUkVDSUVWRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9DT09QX1BPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9QTEFZX1BPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9PX1NFTkRfUE9TVF9TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX09fUkVDSUVWRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfVF9TRU5EX1BPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9UX1JFQ0lFVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9DT09QX1BPU1RfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9QTEFZX1BPU1RfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9PX1NFTkRfUE9TVF9GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX09fUkVDSUVWRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVF9TRU5EX1BPU1RfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9UX1JFQ0lFVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTU9ESUZZX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTU9ESUZZX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCkuY29udGVudCA9IGFjdGlvbi5kYXRhLmNvbnRlbnQ7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDri6Trpbgg7J207Jqp7J6QIOygleuztCDroZzrlKlcclxuICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJzTG9hZGluZzogZmFsc2UsIC8vIOyghOyytCDsnbTsmqnsnpAg66as7Iqk7Yq4IOuhnOuUqVxyXG4gIGxvYWRVc2Vyc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2Vyc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g64K07KCV67O0IOuhnOuUqSDsi5zrj4TspJFcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHVzZXJzSW5mbzoge30sXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfUkVRVUVTVCA9ICdMT0FEX1VTRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19TVUNDRVNTID0gJ0xPQURfVVNFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlcnNJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfTElLRURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9DT09QX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX0NPT1BfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfQ09PUF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QTEFZX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1BMQVlfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUExBWV9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9PX1NFTkRfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfT19TRU5EX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX09fU0VORF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9PX1JFQ0lFVkVfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfT19SRUNJRVZFX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX09fUkVDSUVWRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9UX1NFTkRfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfVF9TRU5EX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1RfU0VORF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9UX1JFQ0lFVkVfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfVF9SRUNJRVZFX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1RfUkVDSUVWRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9TUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfU1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1NQT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTU9ESUZZX1BPU1RfRkFJTFVSRSxcclxuICBNT0RJRllfUE9TVF9SRVFVRVNULFxyXG4gIE1PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7IC8vIGZvcm1kYXRhIOyghOyGoVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApOyAvLyBkZWxldGXripQg642w7J207YSw66W8IOqwgOyguOqwiCDsiJgg7JeG64ukIGRhdGHripQgcG9zdElkXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFNQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkU1Bvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFNQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfU1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfU1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSwgLy8gUG9zdElkLFVzZXJJZFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSwgLy8gUG9zdElkLFVzZXJJZFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcblxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpOyAvLyBmb3JtZGF0YeuKlCB7IG5hbWU6IGRhdGEgfSDqsJnsnYAg7Iud7Jy866GcIOqwkOyLuOuyhOumrOuptCBqc29u7Jy866GcIOyekOuPmSDrs4DtmZjrkJjrsoTrprDri6QuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbGF0ZWRQb3N0QVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy9yZWxhdGVkP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogUmVsYXRlZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoUmVsYXRlZFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTGlrZWRQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvbGlrZWQ/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTGlrZWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTGlrZWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5UG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGEuUG9zdElkfWAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbW9kaWZ5UG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChtb2RpZnlQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZENvb3BQb3N0c0FQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkQ29vcFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRDb29wUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQbGF5UG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBsYXlQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUGxheVBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2Fkb1NlbmRQb3N0c0FQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2Fkb1NlbmRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2Fkb1NlbmRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZG9SZWNpZXZlUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZG9SZWNpZXZlUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZG9SZWNpZXZlUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZHRTZW5kUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZHRTZW5kUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZHRTZW5kUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWR0UmVjaWV2ZVBvc3RzQVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWR0UmVjaWV2ZVBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWR0UmVjaWV2ZVBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoMjAwMCwgTE9BRF9QT1NUX1JFUVVFU1QsIGxvYWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFNQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9TUE9TVF9SRVFVRVNULCBsb2FkU1Bvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlclBvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsIGxvYWRVc2VyUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hNb2RpZnlQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTU9ESUZZX1BPU1RfUkVRVUVTVCwgbW9kaWZ5UG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRSZWxhdGVkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QsIFJlbGF0ZWRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ29vcExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9DT09QX1BPU1RfUkVRVUVTVCwgbG9hZENvb3BQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFBsYXlMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUExBWV9QT1NUX1JFUVVFU1QsIGxvYWRQbGF5UG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hvU2VuZExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9PX1NFTkRfUE9TVF9SRVFVRVNULCBsb2Fkb1NlbmRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaG9SZWNpZXZlTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX09fUkVDSUVWRV9QT1NUX1JFUVVFU1QsIGxvYWRvUmVjaWV2ZVBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNodFNlbmRMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVF9TRU5EX1BPU1RfUkVRVUVTVCwgbG9hZHRTZW5kUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2h0UmVjaWV2ZUxvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9UX1JFQ0lFVkVfUE9TVF9SRVFVRVNULCBsb2FkdFJlY2lldmVQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRMaWtlZHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNULCBsb2FkTGlrZWRQb3N0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRTUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRSZWxhdGVkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZExpa2VkdGFnUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbkxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hNb2RpZnlQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaFBsYXlMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQ29vcExvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hvU2VuZExvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hvUmVjaWV2ZUxvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2h0U2VuZExvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2h0UmVjaWV2ZUxvYWRQb3N0KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQge2FsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICBMT0FEX1VTRVJTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSU19SRVFVRVNULFxyXG4gIExPQURfVVNFUlNfU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuZnVuY3Rpb24gU2lnblVwQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG59XHJcbmZ1bmN0aW9uIGxvYWRVc2Vyc0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9hbGwnKTtcclxufVxyXG5mdW5jdGlvbiBDaGFuZ2VOaWNrTmFtZUFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKCcvdXNlci9uaWNrbmFtZScsIHtuaWNrbmFtZTogZGF0YX0pO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnLCBkYXRhKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIGxvYWRVc2VycyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9VU0VSU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogbG9nT3V0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKGxvZ091dEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGNhbGwoU2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tOYW1lKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKENoYW5nZU5pY2tOYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlbmlja05hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja05hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VySW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJzSW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUlNfUkVRVUVTVCwgbG9hZFVzZXJzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlckluZm8pLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2Vyc0luZm8pLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZW5pY2tOYW1lKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==