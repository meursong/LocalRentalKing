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
/*! exports provided: initialState, LOAD_SEARCH_POSTS_REQUEST, LOAD_SEARCH_POSTS_SUCCESS, LOAD_SEARCH_POSTS_FAILURE, MODIFY_POST_REQUEST, MODIFY_POST_SUCCESS, MODIFY_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RELATED_POST_REQUEST, LOAD_RELATED_POST_SUCCESS, LOAD_RELATED_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_LIKED_POSTS_REQUEST, LOAD_LIKED_POSTS_SUCCESS, LOAD_LIKED_POSTS_FAILURE, LOAD_SPOST_REQUEST, LOAD_SPOST_SUCCESS, LOAD_SPOST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_RENTAL_POST_REQUEST, LOAD_RENTAL_POST_SUCCESS, LOAD_RENTAL_POST_FAILURE, LOAD_WRITE_POST_REQUEST, LOAD_WRITE_POST_SUCCESS, LOAD_WRITE_POST_FAILURE, REMOVE_IMAGE, UPDATE_TAG, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_REQUEST", function() { return LOAD_SEARCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_SUCCESS", function() { return LOAD_SEARCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SEARCH_POSTS_FAILURE", function() { return LOAD_SEARCH_POSTS_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_REQUEST", function() { return LOAD_RENTAL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_SUCCESS", function() { return LOAD_RENTAL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_FAILURE", function() { return LOAD_RENTAL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_REQUEST", function() { return LOAD_WRITE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_SUCCESS", function() { return LOAD_WRITE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_FAILURE", function() { return LOAD_WRITE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TAG", function() { return UPDATE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  imagePaths: [],
  object_TagsData: ['전체', '공구', '의류', '전자기기', '서적', '게임/취미', '차량', '스포츠/래저', '뷰티/미용', '반려동물', '기타'],
  talent_TagsData: ['전체', '미술', '구충', '설치', '코칭', '촬영', '일손', '기타'],
  cooperate_tagsData: ['전체', '1+1', '배달', '공동구매', '기타'],
  play_tagsData: ['전체', '질문', '자유'],
  local: null,
  selectedTag: null,
  category: null,
  searchResultId: null,
  singlePost: null,
  hasMorePost: true,
  searchPostLoading: false,
  searchPostDone: false,
  searchPostError: null,
  loadProfilePostLoading: false,
  loadProfilePostDone: false,
  loadProfilePostError: null,
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
const LOAD_SEARCH_POSTS_REQUEST = 'LOAD_SEARCH_POSTS_REQUEST';
const LOAD_SEARCH_POSTS_SUCCESS = 'LOAD_SEARCH_POSTS_SUCCESS';
const LOAD_SEARCH_POSTS_FAILURE = 'LOAD_SEARCH_POSTS_FAILURE';
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
const LOAD_RENTAL_POST_REQUEST = 'LOAD_RENTAL_POST_REQUEST';
const LOAD_RENTAL_POST_SUCCESS = 'LOAD_RENTAL_POST_SUCCESS';
const LOAD_RENTAL_POST_FAILURE = 'LOAD_RENTAL_POST_FAILURE';
const LOAD_WRITE_POST_REQUEST = 'LOAD_WRITE_POST_REQUEST';
const LOAD_WRITE_POST_SUCCESS = 'LOAD_WRITE_POST_SUCCESS';
const LOAD_WRITE_POST_FAILURE = 'LOAD_WRITE_POST_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const UPDATE_TAG = 'UPDATE_TAG';
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
    case LOAD_SEARCH_POSTS_REQUEST:
      draft.searchPostLoading = true;
      draft.searchPostDone = false;
      draft.searchPostError = null;
      break;

    case LOAD_SEARCH_POSTS_SUCCESS:
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.searchPostLoading = false;
      draft.searchPostDone = true;
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_SEARCH_POSTS_FAILURE:
      draft.searchPostError = action.error;
      draft.searchPostLoading = false;
      break;

    case LOAD_RENTAL_POST_REQUEST:
      draft.loadProfilePostLoading = true;
      draft.loadProfilePostDone = false;
      draft.loadProfilePostError = null;
      break;

    case LOAD_RENTAL_POST_SUCCESS:
      {
        if (action.data[0].board_boardnum === 1 || 2 || 3 || 4) {
          // 렌탈 게시물이 쌓이고 있는경우
          draft.mainPosts = draft.mainPosts.concat(action.data);
        } else {
          // 주제가 다른 게시물 덩어리를 가져올 경우
          draft.mainPosts = action.data;
        }

        draft.loadProfilePostLoading = false;
        draft.loadProfilePostDone = true;
        break;
      }

    case LOAD_RENTAL_POST_FAILURE:
      draft.loadProfilePostError = action.error;
      draft.loadProfilePostLoading = false;
      break;

    case LOAD_WRITE_POST_REQUEST:
      draft.loadProfilePostLoading = true;
      draft.loadProfilePostDone = false;
      draft.loadProfilePostError = null;
      break;

    case LOAD_WRITE_POST_SUCCESS:
      {
        if (action.data[0].boardNum === 5 || 6) {
          // 렌탈 게시물이 쌓이고 있는경우
          draft.mainPosts = draft.mainPosts.concat(action.data);
        } else {
          // 주제가 다른 게시물 덩어리를 가져올 경우
          draft.mainPosts = action.data;
        }

        draft.loadProfilePostLoading = false;
        draft.loadProfilePostDone = true;
        break;
      }

    case LOAD_WRITE_POST_FAILURE:
      draft.loadProfilePostError = action.error;
      draft.loadProfilePostLoading = false;
      break;

    case UPDATE_TAG:
      draft.selectedTag = action.data;
      break;

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
    case LOAD_POST_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_LIKED_POSTS_SUCCESS:
    case LOAD_RELATED_POST_SUCCESS:
    case LOAD_USER_POSTS_SUCCESS:
    case LOAD_HASHTAG_POSTS_SUCCESS:
    case LOAD_POST_SUCCESS:
      // if(draft.mainPosts[0].post_category === action.data[0].post_category //카테고리 , 게시판넘버 , 지역이 일치할때
      // && draft.mainPosts[0].post_boardNum === action.data[0].post_boardNum
      // && draft.mainPosts[0].post_location === action.data[0].post_location) {
      //   draft.mainPosts = draft.mainPosts.concat(action.data);
      // }
      // else {
      //   draft.mainPosts = action.data;
      // }
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      draft.hasMorePost = action.data.length === 10;
      break;

    case LOAD_LIKED_POSTS_FAILURE:
    case LOAD_RELATED_POST_FAILURE:
    case LOAD_USER_POSTS_FAILURE:
    case LOAD_HASHTAG_POSTS_FAILURE:
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

function loadPostAPI(data, lastId, boardNum) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${encodeURIComponent(data)}/post?lastId=${lastId || 0}&boardNum=${boardNum || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data, action.lastId, action.boardNum);
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

function loadSearchPostAPI(data, lastId, local) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${encodeURIComponent(data)}/post?lastId=${lastId || 0}&local=${local || "선택안함"}`); // api 서버 요청은 /user/:userId/posts
}

function* loadSearchPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadSearchPostAPI, action.data, action.lastId, action.local);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SEARCH_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SEARCH_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function rentalPostAPI(data, lastId) {
  // 대상유저 id
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${data}/post?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* rentalPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(rentalPostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RENTAL_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RENTAL_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function writePostAPI(data, lastId) {
  // 대상유저 id
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${data}/post?lastId=${lastId || 0}`); // api 서버 요청은 /user/:userId/posts
}

function* writePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(writePostAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_WRITE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_WRITE_POST_FAILURE"],
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

function* watchLoadLikedtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIKED_POSTS_REQUEST"], loadLikedPosts);
}

function* watchLoadRentalPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_RENTAL_POST_REQUEST"], rentalPost);
}

function* watchLoadWritePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_WRITE_POST_REQUEST"], writePost);
}

function* watchLoadSearchPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SEARCH_POSTS_REQUEST"], loadSearchPost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadSPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRelatedPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadLikedtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchModifyPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRentalPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadWritePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadSearchPost)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJMb2NhbFJlbnRhbEtpbmciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJvYmplY3RfVGFnc0RhdGEiLCJ0YWxlbnRfVGFnc0RhdGEiLCJjb29wZXJhdGVfdGFnc0RhdGEiLCJwbGF5X3RhZ3NEYXRhIiwibG9jYWwiLCJzZWxlY3RlZFRhZyIsImNhdGVnb3J5Iiwic2VhcmNoUmVzdWx0SWQiLCJzaW5nbGVQb3N0IiwiaGFzTW9yZVBvc3QiLCJzZWFyY2hQb3N0TG9hZGluZyIsInNlYXJjaFBvc3REb25lIiwic2VhcmNoUG9zdEVycm9yIiwibG9hZFByb2ZpbGVQb3N0TG9hZGluZyIsImxvYWRQcm9maWxlUG9zdERvbmUiLCJsb2FkUHJvZmlsZVBvc3RFcnJvciIsInVwTG9hZEltYWdlc0xvYWRpbmciLCJ1cExvYWRJbWFnZXNEb25lIiwidXBMb2FkSW1hZ2VzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRTUG9zdExvYWRpbmciLCJsb2FkU1Bvc3REb25lIiwibG9hZFNQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFVzZXJQb3N0c0xvYWRpbmciLCJsb2FkVXNlclBvc3RzRG9uZSIsImxvYWRVc2VyUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwibW9kaWZ5UG9zdExvYWRpbmciLCJtb2RpZnlQb3N0RG9uZSIsIm1vZGlmeVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUIiwiTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyIsIkxPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUiLCJNT0RJRllfUE9TVF9SRVFVRVNUIiwiTU9ESUZZX1BPU1RfU1VDQ0VTUyIsIk1PRElGWV9QT1NUX0ZBSUxVUkUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUIiwiTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1NQT1NUX1JFUVVFU1QiLCJMT0FEX1NQT1NUX1NVQ0NFU1MiLCJMT0FEX1NQT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QiLCJMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVCIsIkxPQURfV1JJVEVfUE9TVF9TVUNDRVNTIiwiTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJVUERBVEVfVEFHIiwiYWRkUG9zdCIsImRhdGEiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwiYm9hcmRfYm9hcmRudW0iLCJib2FyZE51bSIsImZpbHRlciIsInYiLCJpIiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsInVuc2hpZnQiLCJjb250ZW50IiwiQ29tbWVudHMiLCJsb2FkVXNlckxvYWRpbmciLCJsb2FkVXNlckRvbmUiLCJsb2FkVXNlckVycm9yIiwibG9hZFVzZXJzTG9hZGluZyIsImxvYWRVc2Vyc0RvbmUiLCJsb2FkVXNlcnNFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwidXNlckluZm8iLCJtZSIsInVzZXJzSW5mbyIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX1VTRVJTX1JFUVVFU1QiLCJMT0FEX1VTRVJTX1NVQ0NFU1MiLCJMT0FEX1VTRVJTX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIm5pY2tuYW1lIiwiUG9zdHMiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0QVBJIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwicmVtb3ZlUG9zdEFQSSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJsb2FkUG9zdEFQSSIsImxhc3RJZCIsImdldCIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvYWRQb3N0IiwibG9hZFNlYXJjaFBvc3RBUEkiLCJsb2FkU2VhcmNoUG9zdCIsInJlbnRhbFBvc3RBUEkiLCJyZW50YWxQb3N0Iiwid3JpdGVQb3N0QVBJIiwid3JpdGVQb3N0IiwibG9hZFNQb3N0QVBJIiwibG9hZFNQb3N0IiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibG9hZFVzZXJQb3N0c0FQSSIsImxvYWRVc2VyUG9zdHMiLCJSZWxhdGVkUG9zdEFQSSIsIlJlbGF0ZWRQb3N0IiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImxvYWRIYXNodGFnUG9zdHMiLCJsb2FkTGlrZWRQb3N0c0FQSSIsImxvYWRMaWtlZFBvc3RzIiwibW9kaWZ5UG9zdEFQSSIsIm1vZGlmeVBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTG9hZFNQb3N0Iiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hNb2RpZnlQb3N0Iiwid2F0Y2hMb2FkUmVsYXRlZFBvc3QiLCJ3YXRjaExvYWRMaWtlZHRhZ1Bvc3RzIiwid2F0Y2hMb2FkUmVudGFsUG9zdCIsIndhdGNoTG9hZFdyaXRlUG9zdCIsIndhdGNoTG9hZFNlYXJjaFBvc3QiLCJsb2FkTXlJbmZvQVBJIiwiU2lnblVwQVBJIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlcnNBUEkiLCJDaGFuZ2VOaWNrTmFtZUFQSSIsImxvZ0luQVBJIiwibG9nT3V0QVBJIiwibG9hZE15SW5mbyIsImxvYWRVc2VyIiwibG9hZFVzZXJzIiwibG9nSW4iLCJsb2dPdXQiLCJzaWduVXAiLCJjaGFuZ2VOaWNrTmFtZSIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hDaGFuZ2VuaWNrTmFtZSIsIndhdGNoTG9hZFVzZXJJbmZvIiwid2F0Y2hMb2FkVXNlcnNJbmZvIiwibG9nZ2VyTWlkZGxld2FyZSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxTQUFTQSxlQUFULENBQXlCO0FBQUVDO0FBQUYsQ0FBekIsRUFBd0M7QUFDdEMsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FB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cUJBQTVCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcs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QUFNcVIsY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxFQUFpQkwsZ0JBQWpCLENBQXBCO0FBQ0EsUUFBTVEsUUFBUSxHQUFHLFFBQ2JDLFNBRGEsR0FFYkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZ2QjtBQUdBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQzlLLGlEQUFELEVBQVV5SyxRQUFWLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0UsUUFBTixHQUFpQlQsY0FBYyxDQUFDVSxHQUFmLENBQW1CbkcsOENBQW5CLENBQWpCO0FBQ0EsU0FBT2dHLEtBQVA7QUFDRCxDQVREOztBQVdBLE1BQU1qUyxPQUFPLEdBQUdxUyx3RUFBYSxDQUFDWixjQUFELEVBQWlCO0FBQzVDYSxPQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSWV0UyxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuZnVuY3Rpb24gTG9jYWxSZW50YWxLaW5nKHsgQ29tcG9uZW50IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1lYXRlIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPuyasOumrOuPmeuEpCDroIztg4jrjIDsnqU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbkxvY2FsUmVudGFsS2luZy5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KExvY2FsUmVudGFsS2luZyk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgIHVzZXIsXHJcbiAgICAgICAgcG9zdCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBvYmplY3RfVGFnc0RhdGE6IFsn7KCE7LK0JywgJ+qzteq1rCcsXHJcbiAgICAn7J2Y66WYJyxcclxuICAgICfsoITsnpDquLDquLAnLFxyXG4gICAgJ+yEnOyggScsXHJcbiAgICAn6rKM7J6EL+y3qOuvuCcsXHJcbiAgICAn7LCo65+JJyxcclxuICAgICfsiqTtj6zsuKAv656Y7KCAJyxcclxuICAgICfrt7Dti7Av66+47JqpJyxcclxuICAgICfrsJjroKTrj5nrrLwnLFxyXG4gICAgJ+q4sO2DgCcsXSxcclxuICB0YWxlbnRfVGFnc0RhdGE6IFsn7KCE7LK0JywgJ+uvuOyIoCcsICfqtazstqknLCAn7ISk7LmYJywgJ+y9lOy5rScsICfstKzsmIEnLCAn7J287IaQJywgJ+q4sO2DgCddLFxyXG4gIGNvb3BlcmF0ZV90YWdzRGF0YTogWyfsoITssrQnLCAnMSsxJywgJ+uwsOuLrCcsICfqs7Xrj5nqtazrp6QnLCAn6riw7YOAJ10sXHJcbiAgcGxheV90YWdzRGF0YTogWyfsoITssrQnLCAn7KeI66y4JywgJ+yekOycoCddLFxyXG4gIGxvY2FsOiBudWxsLFxyXG4gIHNlbGVjdGVkVGFnOiBudWxsLFxyXG4gIGNhdGVnb3J5OiBudWxsLFxyXG4gIHNlYXJjaFJlc3VsdElkOiBudWxsLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgc2VhcmNoUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHNlYXJjaFBvc3REb25lOiBmYWxzZSxcclxuICBzZWFyY2hQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFByb2ZpbGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFByb2ZpbGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFByb2ZpbGVQb3N0RXJyb3I6IG51bGwsXHJcbiAgdXBMb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFNQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlclBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgbW9kaWZ5UG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3REb25lOiBmYWxzZSxcclxuICBtb2RpZnlQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFID0gJ0xPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX1JFUVVFU1QgPSAnTU9ESUZZX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9TVUNDRVNTID0gJ01PRElGWV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfRkFJTFVSRSA9ICdNT0RJRllfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfTElLRURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfUkVRVUVTVCA9ICdMT0FEX1NQT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9TVUNDRVNTID0gJ0xPQURfU1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX0ZBSUxVUkUgPSAnTE9BRF9TUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFID0gJ0xPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX1JFUVVFU1QgPSAnTE9BRF9XUklURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9UQUcgPSAnVVBEQVRFX1RBRyc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBpZiAoYWN0aW9uLmRhdGFbMF0uYm9hcmRfYm9hcmRudW0gPT09IDEgfHwgMiB8fCAzIHx8IDQpIHsgLy8g66CM7YOIIOqyjOyLnOusvOydtCDsjJPsnbTqs6Ag7J6I64qU6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7IC8vIOyjvOygnOqwgCDri6Trpbgg6rKM7Iuc66y8IOuNqeyWtOumrOulvCDqsIDsoLjsmKwg6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfUkVOVEFMX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfV1JJVEVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1dSSVRFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBpZiAoYWN0aW9uLmRhdGFbMF0uYm9hcmROdW0gPT09IDUgfHwgNikgeyAvLyDroIztg4gg6rKM7Iuc66y87J20IOyMk+ydtOqzoCDsnojripTqsr3smrBcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgfSBlbHNlIHsgLy8g7KO87KCc6rCAIOuLpOuluCDqsozsi5zrrLwg642p7Ja066as66W8IOqwgOyguOyYrCDqsr3smrBcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgfVxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9XUklURV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUERBVEVfVEFHOlxyXG4gICAgICBkcmFmdC5zZWxlY3RlZFRhZyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaW5nbGVQb3N0ID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTElLRURfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgLy8gaWYoZHJhZnQubWFpblBvc3RzWzBdLnBvc3RfY2F0ZWdvcnkgPT09IGFjdGlvbi5kYXRhWzBdLnBvc3RfY2F0ZWdvcnkgLy/subTthYzqs6DrpqwgLCDqsozsi5ztjJDrhJjrsoQgLCDsp4Dsl63snbQg7J287LmY7ZWg65WMXHJcbiAgICAgIC8vICYmIGRyYWZ0Lm1haW5Qb3N0c1swXS5wb3N0X2JvYXJkTnVtID09PSBhY3Rpb24uZGF0YVswXS5wb3N0X2JvYXJkTnVtXHJcbiAgICAgIC8vICYmIGRyYWZ0Lm1haW5Qb3N0c1swXS5wb3N0X2xvY2F0aW9uID09PSBhY3Rpb24uZGF0YVswXS5wb3N0X2xvY2F0aW9uKSB7XHJcbiAgICAgIC8vICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gZWxzZSB7XHJcbiAgICAgIC8vICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIC8vIH1cclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIE1PRElGWV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpLmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5jb250ZW50O1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g64uk66W4IOydtOyaqeyekCDsoJXrs7Qg66Gc65SpXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG4gIGxvYWRVc2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDsoITssrQg7J207Jqp7J6QIOumrOyKpO2KuCDroZzrlKlcclxuICBsb2FkVXNlcnNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlcnNFcnJvcjogbnVsbCxcclxuICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8vIOuCtOygleuztCDroZzrlKkg7Iuc64+E7KSRXHJcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRNeUluZm9FcnJvcjogbnVsbCxcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICB1c2Vyc0luZm86IHt9LFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSAnTE9BRF9NWV9JTkZPX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSAnTE9BRF9NWV9JTkZPX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSAnTE9BRF9NWV9JTkZPX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX1JFUVVFU1QgPSAnTE9BRF9VU0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19GQUlMVVJFID0gJ0xPQURfVVNFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHtcclxuICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbn0pO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCzslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXNlckluZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXJzSW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1lLm5pY2tuYW1lID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICBmb3JrKHVzZXJTYWdhKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQge2FsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfTElLRURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTLCBMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFLCBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNULCBMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfU1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1NQT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9TUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gIExPQURfV1JJVEVfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfV1JJVEVfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfV1JJVEVfUE9TVF9TVUNDRVNTLFxyXG4gIE1PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgTU9ESUZZX1BPU1RfUkVRVUVTVCxcclxuICBNT0RJRllfUE9TVF9TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQge0FERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRX0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTsgLy8gZm9ybWRhdGEg7KCE7IahXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7IC8vIGRlbGV0ZeuKlCDrjbDsnbTthLDrpbwg6rCA7KC46rCIIOyImCDsl4bri6QgZGF0YeuKlCBwb3N0SWRcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEsIGxhc3RJZCAsIGJvYXJkTnVtKSB7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfS9wb3N0P2xhc3RJZD0ke2xhc3RJZCB8fCAwfSZib2FyZE51bT0ke2JvYXJkTnVtIHx8IDB9YCk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCAsIGFjdGlvbi5ib2FyZE51bSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFNlYXJjaFBvc3RBUEkoZGF0YSwgbGFzdElkICwgbG9jYWwpIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHMvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9L3Bvc3Q/bGFzdElkPSR7bGFzdElkIHx8IDB9JmxvY2FsPSR7bG9jYWwgfHwgXCLshKDtg53slYjtlahcIn1gKTsgLy8gYXBpIOyEnOuyhCDsmpTssq3snYAgL3VzZXIvOnVzZXJJZC9wb3N0c1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFNlYXJjaFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFNlYXJjaFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkICwgYWN0aW9uLmxvY2FsKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVudGFsUG9zdEFQSShkYXRhLCBsYXN0SWQpIHsgLy8g64yA7IOB7Jyg7KCAIGlkXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzLyR7KGRhdGEpfS9wb3N0P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvLyBhcGkg7ISc67KEIOyalOyyreydgCAvdXNlci86dXNlcklkL3Bvc3RzXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW50YWxQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbnRhbFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkICk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB3cml0ZVBvc3RBUEkoZGF0YSwgbGFzdElkKSB7IC8vIOuMgOyDgeycoOyggCBpZFxyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy8keyhkYXRhKX0vcG9zdD9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsgLy8gYXBpIOyEnOuyhCDsmpTssq3snYAgL3VzZXIvOnVzZXJJZC9wb3N0c1xyXG59XHJcblxyXG5mdW5jdGlvbiogd3JpdGVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHdyaXRlUG9zdEFQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQgKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1dSSVRFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU1Bvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRTUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkU1Bvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9TUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9TUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuXHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7IC8vIGZvcm1kYXRh64qUIHsgbmFtZTogZGF0YSB9IOqwmeydgCDsi53snLzroZwg6rCQ7Iu467KE66as66m0IGpzb27snLzroZwg7J6Q64+ZIOuzgO2ZmOuQmOuyhOumsOuLpC5cclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTsgLy8gYXBpIOyEnOuyhCDsmpTssq3snYAgL3VzZXIvOnVzZXJJZC9wb3N0c1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUmVsYXRlZFBvc3RBUEkobGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzL3JlbGF0ZWQ/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBSZWxhdGVkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChSZWxhdGVkUG9zdEFQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSGFzaHRhZ1Bvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRMaWtlZFBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9saWtlZD9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRMaWtlZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRMaWtlZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfTElLRURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTElLRURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YS5Qb3N0SWR9YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBtb2RpZnlQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKG1vZGlmeVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTU9ESUZZX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIC8vIFBvc3RJZCxVc2VySWRcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTU9ESUZZX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KCBMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkU1Bvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1NQT1NUX1JFUVVFU1QsIGxvYWRTUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1vZGlmeVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChNT0RJRllfUE9TVF9SRVFVRVNULCBtb2RpZnlQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFJlbGF0ZWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCwgUmVsYXRlZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTGlrZWR0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTElLRURfUE9TVFNfUkVRVUVTVCwgbG9hZExpa2VkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmVudGFsUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkVOVEFMX1BPU1RfUkVRVUVTVCwgcmVudGFsUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRXcml0ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVCwgd3JpdGVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFNlYXJjaFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNULCBsb2FkU2VhcmNoUG9zdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRTUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRSZWxhdGVkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEhhc2h0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZExpa2VkdGFnUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbkxpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hNb2RpZnlQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRSZW50YWxQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkV3JpdGVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkU2VhcmNoUG9zdCksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHthbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGV9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSU19GQUlMVVJFLFxyXG4gIExPQURfVVNFUlNfUkVRVUVTVCxcclxuICBMT0FEX1VTRVJTX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gIFNJR05fVVBfUkVRVUVTVCxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG59XHJcbmZ1bmN0aW9uIFNpZ25VcEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkVXNlcnNBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvYWxsJyk7XHJcbn1cclxuZnVuY3Rpb24gQ2hhbmdlTmlja05hbWVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaCgnL3VzZXIvbmlja25hbWUnLCB7bmlja25hbWU6IGRhdGF9KTtcclxufVxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gbG9nT3V0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JywgZGF0YSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkVXNlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfVVNFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUlNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIGxvZ091dChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKFNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrTmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChDaGFuZ2VOaWNrTmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRNeUluZm8pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZW5pY2tOYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tOYW1lKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlckluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2Vyc0luZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJTX1JFUVVFU1QsIGxvYWRVc2Vycyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvZ2luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlcnNJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VuaWNrTmFtZSksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxuICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=