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

/***/ "./components/card.css":
/*!*****************************!*\
  !*** ./components/card.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/card.css */ "./components/card.css");
/* harmony import */ var _components_card_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_card_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Bootcamp\\teamproject\\project\\LocalRentalKing\\front\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // eslint-disable-next-line react/prop-types

function LocalRentalKing({
  Component
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("meate", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "\uC6B0\uB9AC\uB3D9\uB124 \uB80C\uD0C8\uB300\uC7A5")), __jsx(Component, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // (이전상태,액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

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
/*! exports provided: initialState, UPDATE_SEARCH, UPDATE_BOARD, UPDATE_CHANGE_TAG_REQUEST, LOAD_CHANGE_TAG_REQUEST, LOAD_CHANGE_TAG_SUCCESS, LOAD_CHANGE_TAG_FAILURE, SEND_DUMMYPOST_REQUEST, SEND_DUMMYPOST_SUCCESS, SEND_DUMMYPOST_FAILURE, LOAD_SEARCH_POSTS_REQUEST, LOAD_SEARCH_POSTS_SUCCESS, LOAD_SEARCH_POSTS_FAILURE, MODIFY_POST_REQUEST, MODIFY_POST_SUCCESS, MODIFY_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RELATED_POST_REQUEST, LOAD_RELATED_POST_SUCCESS, LOAD_RELATED_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_LIKED_POSTS_REQUEST, LOAD_LIKED_POSTS_SUCCESS, LOAD_LIKED_POSTS_FAILURE, LOAD_SPOST_REQUEST, LOAD_SPOST_SUCCESS, LOAD_SPOST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, STATUS_POST_REQUEST, STATUS_POST_SUCCESS, STATUS_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_RENTAL_POST_REQUEST, LOAD_RENTAL_POST_SUCCESS, LOAD_RENTAL_POST_FAILURE, LOAD_WRITE_POST_REQUEST, LOAD_WRITE_POST_SUCCESS, LOAD_WRITE_POST_FAILURE, LOAD_SCHANGE_TAG_REQUEST, LOAD_SCHANGE_TAG_SUCCESS, LOAD_SCHANGE_TAG_FAILURE, REMOVE_IMAGE, UPDATE_TAG, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEARCH", function() { return UPDATE_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD", function() { return UPDATE_BOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CHANGE_TAG_REQUEST", function() { return UPDATE_CHANGE_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_REQUEST", function() { return LOAD_CHANGE_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_SUCCESS", function() { return LOAD_CHANGE_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CHANGE_TAG_FAILURE", function() { return LOAD_CHANGE_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_REQUEST", function() { return SEND_DUMMYPOST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_SUCCESS", function() { return SEND_DUMMYPOST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_DUMMYPOST_FAILURE", function() { return SEND_DUMMYPOST_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_POST_REQUEST", function() { return STATUS_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_POST_SUCCESS", function() { return STATUS_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_POST_FAILURE", function() { return STATUS_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_REQUEST", function() { return LOAD_RENTAL_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_SUCCESS", function() { return LOAD_RENTAL_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_RENTAL_POST_FAILURE", function() { return LOAD_RENTAL_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_REQUEST", function() { return LOAD_WRITE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_SUCCESS", function() { return LOAD_WRITE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_WRITE_POST_FAILURE", function() { return LOAD_WRITE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SCHANGE_TAG_REQUEST", function() { return LOAD_SCHANGE_TAG_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SCHANGE_TAG_SUCCESS", function() { return LOAD_SCHANGE_TAG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SCHANGE_TAG_FAILURE", function() { return LOAD_SCHANGE_TAG_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TAG", function() { return UPDATE_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  searchPosts: [],
  imagePaths: [],
  mainTalks: [],
  talkUsers: [],
  object_TagsData: ["전체", "공구", "의류", "전자기기", "서적", "게임/취미", "차량", "스포츠/래저", "뷰티/미용", "반려동물", "기타"],
  talent_TagsData: ["전체", "미술", "구충", "설치", "코칭", "촬영", "일손", "기타"],
  cooperate_tagsData: ["전체", "1+1", "배달", "공동구매", "기타"],
  play_tagsData: ["전체", "질문", "자유"],
  boardNum: null,
  inputSearch: null,
  select: null,
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
const UPDATE_SEARCH = "UPDATE_SEARCH";
const UPDATE_BOARD = "UPDATE_BOARD";
const UPDATE_CHANGE_TAG_REQUEST = "UPDATE_CHANGE_TAG_REQUEST";
const LOAD_CHANGE_TAG_REQUEST = "LOAD_CHANGE_TAG_REQUEST";
const LOAD_CHANGE_TAG_SUCCESS = "LOAD_CHANGE_TAG_SUCCESS";
const LOAD_CHANGE_TAG_FAILURE = "LOAD_CHANGE_TAG_FAILURE";
const SEND_DUMMYPOST_REQUEST = "SEND_DUMMYPOST_REQUEST";
const SEND_DUMMYPOST_SUCCESS = "SEND_DUMMYPOST_SUCCESS";
const SEND_DUMMYPOST_FAILURE = "SEND_DUMMYPOST_FAILURE";
const LOAD_SEARCH_POSTS_REQUEST = "LOAD_SEARCH_POSTS_REQUEST";
const LOAD_SEARCH_POSTS_SUCCESS = "LOAD_SEARCH_POSTS_SUCCESS";
const LOAD_SEARCH_POSTS_FAILURE = "LOAD_SEARCH_POSTS_FAILURE";
const MODIFY_POST_REQUEST = "MODIFY_POST_REQUEST";
const MODIFY_POST_SUCCESS = "MODIFY_POST_SUCCESS";
const MODIFY_POST_FAILURE = "MODIFY_POST_FAILURE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const LOAD_RELATED_POST_REQUEST = "LOAD_RELATED_POST_REQUEST";
const LOAD_RELATED_POST_SUCCESS = "LOAD_RELATED_POST_SUCCESS";
const LOAD_RELATED_POST_FAILURE = "LOAD_RELATED_POST_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const LOAD_LIKED_POSTS_REQUEST = "LOAD_LIKED_POSTS_REQUEST";
const LOAD_LIKED_POSTS_SUCCESS = "LOAD_LIKED_POSTS_SUCCESS";
const LOAD_LIKED_POSTS_FAILURE = "LOAD_LIKED_POSTS_FAILURE";
const LOAD_SPOST_REQUEST = "LOAD_SPOST_REQUEST";
const LOAD_SPOST_SUCCESS = "LOAD_SPOST_SUCCESS";
const LOAD_SPOST_FAILURE = "LOAD_SPOST_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const STATUS_POST_REQUEST = "STATUS_POST_REQUEST";
const STATUS_POST_SUCCESS = "STATUS_POST_SUCCESS";
const STATUS_POST_FAILURE = "STATUS_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const LOAD_RENTAL_POST_REQUEST = "LOAD_RENTAL_POST_REQUEST";
const LOAD_RENTAL_POST_SUCCESS = "LOAD_RENTAL_POST_SUCCESS";
const LOAD_RENTAL_POST_FAILURE = "LOAD_RENTAL_POST_FAILURE";
const LOAD_WRITE_POST_REQUEST = "LOAD_WRITE_POST_REQUEST";
const LOAD_WRITE_POST_SUCCESS = "LOAD_WRITE_POST_SUCCESS";
const LOAD_WRITE_POST_FAILURE = "LOAD_WRITE_POST_FAILURE";
const LOAD_SCHANGE_TAG_REQUEST = "LOAD_SCHANGE_TAG_REQUEST";
const LOAD_SCHANGE_TAG_SUCCESS = "LOAD_SCHANGE_TAG_SUCCESS";
const LOAD_SCHANGE_TAG_FAILURE = "LOAD_SCHANGE_TAG_FAILURE";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const UPDATE_TAG = "UPDATE_TAG";
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
    case UPDATE_BOARD:
      draft.boardNum = action.data;
      draft.mainPosts.length = 0;
      draft.imagePaths.length = 0;
      draft.searchPostLoading = false;
      draft.searchPostDone = false;
      draft.searchPostError = null;
      draft.loadProfilePostLoading = false;
      draft.loadProfilePostDone = false;
      draft.loadProfilePostError = null;
      draft.upLoadImagesLoading = false;
      draft.upLoadImagesDone = false;
      draft.upLoadImagesError = null;
      draft.likePostLoading = false;
      draft.likePostDone = false;
      draft.likePostError = null;
      draft.unlikePostLoading = false;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      draft.loadSPostLoading = false;
      draft.loadSPostDone = false;
      draft.loadSPostError = null;
      draft.loadPostLoading = false;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      draft.loadUserPostsLoading = false;
      draft.loadUserPostsDone = false;
      draft.loadUserPostsError = null;
      draft.addPostLoading = false;
      draft.addPostDone = false;
      draft.addPostError = null;
      draft.removePostLoading = false;
      draft.removePostDone = false;
      draft.removePostError = null;
      draft.modifyPostLoading = false;
      draft.modifyPostDone = false;
      draft.modifyPostError = null;
      draft.addCommentLoading = false;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case UPDATE_CHANGE_TAG_REQUEST:
      draft.searchPosts = draft.mainPosts.filter(v => v.category === action.data);
      break;

    case UPDATE_SEARCH:
      draft.inputSearch = action.data.searchword;
      draft.select = action.data.select;
      break;

    case LOAD_SCHANGE_TAG_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_SCHANGE_TAG_SUCCESS:
      draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.

      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      break;

    case LOAD_SCHANGE_TAG_FAILURE:
      draft.loadPostError = action.error;
      draft.loadPostLoading = false;
      break;

    case LOAD_CHANGE_TAG_REQUEST:
      draft.loadPostLoading = true;
      draft.loadPostDone = false;
      draft.loadPostError = null;
      break;

    case LOAD_CHANGE_TAG_SUCCESS:
      draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.

      draft.loadPostLoading = false;
      draft.loadPostDone = true;
      break;

    case LOAD_CHANGE_TAG_FAILURE:
      draft.loadPostError = action.error;
      draft.loadPostLoading = false;
      break;

    case LOAD_SEARCH_POSTS_REQUEST:
      draft.searchPostLoading = true;
      draft.searchPostDone = false;
      draft.searchPostError = null;
      break;

    case LOAD_SEARCH_POSTS_SUCCESS:
      draft.mainPosts = action.data;
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
      draft.hasMorePost = true;
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

    case STATUS_POST_REQUEST:
      draft.loadSPostLoading = true;
      draft.loadSPostDone = false;
      draft.loadSPostError = null;
      break;

    case STATUS_POST_SUCCESS:
      draft.singlePost.status = action.data.status;
      draft.loadSPostLoading = false;
      draft.loadSPostDone = true;
      break;

    case STATUS_POST_FAILURE:
      draft.loadSPostError = action.error;
      draft.loadSPostLoading = false;
      break;

    case LOAD_SPOST_REQUEST:
      draft.loadSPostLoading = true;
      draft.loadSPostDone = false;
      draft.loadSPostError = null;
      break;

    case LOAD_SPOST_SUCCESS:
      draft.singlePost = action.data;

      if (action.data.boardNum === 1 || action.data.boardNum === 2) {
        const totalPath = action.data.ProdPostImages.map(v => draft.imagePaths.concat(v.src.toString()));

        for (let i = 0; i < totalPath.length; i++) {
          draft.imagePaths = draft.imagePaths.concat(totalPath[i][0]);
        }
      } else if (action.data.boardNum === 3 || action.data.boardNum === 4) {
        const totalPath = action.data.PowerPostImages.map(v => draft.imagePaths.concat(v.src.toString()));

        for (let i = 0; i < totalPath.length; i++) {
          draft.imagePaths = draft.imagePaths.concat(totalPath[i][0]);
        }
      } else if (action.data.boardNum === 5) {
        const totalPath = action.data.TogetherPostImages.map(v => draft.imagePaths.concat(v.src.toString()));

        for (let i = 0; i < totalPath.length; i++) {
          draft.imagePaths = draft.imagePaths.concat(totalPath[i][0]);
        }
      }

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
      if (draft.mainPosts.length > 0) {
        // SSR로 처음에 들고오는 경우가 아닐때
        if (draft.mainPosts[0].category !== action.data[0].category || //카테고리 , 지역이 일치하지 않을때
        draft.mainPosts[0].location !== action.data[0].location) {
          draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.

          console.log("밀고 새로넣었음"); // draft.mainPosts = draft.mainPosts.concat(action.data);
        } else {
          console.log("쌓는중");
          draft.mainPosts = draft.mainPosts.concat(action.data); // 같은속성의 게시물을 쌓고있는 경우
        }
      } else {
        console.log("SSR OR NEW 10 POSTS");
        draft.mainPosts = draft.mainPosts.concat(action.data); // SSR로 처음에 들고올때
      }

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

    case SEND_DUMMYPOST_REQUEST:
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case SEND_DUMMYPOST_SUCCESS:
    case ADD_POST_SUCCESS:
      draft.mainPosts.unshift(action.data);
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.imagePaths = [];
      break;

    case SEND_DUMMYPOST_FAILURE:
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
      for (let i = 0; i < draft.mainPosts.length; i++) {
        if (draft.mainPosts[i].id == action.data.id) {
          draft.mainPosts = draft.mainPosts(i, 1, action.data);
        }
      }

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
/*! exports provided: initialState, UPDATE_LOCAL, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
  location: null,
  usersInfo: {},
  signUpData: {},
  loginData: {}
};
const UPDATE_LOCAL = "UPDATE_LOCAL";
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOAD_USERS_REQUEST = "LOAD_USERS_REQUEST";
const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";
const LOAD_USERS_FAILURE = "LOAD_USERS_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
}); // (이전상태,액션) => 다음상태

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case UPDATE_LOCAL:
      draft.location = action.data;
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
      draft.logInLoading = false; // 로그인 시도중

      draft.logInDone = false;
      draft.logInError = null;
      draft.logOutLoading = false; // 로그아웃 시도중

      draft.logOutDone = false;
      draft.logOutError = null;
      draft.signUpLoading = false; // 회원가입 시도중

      draft.signUpDone = false;
      draft.signUpError = null;
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
      draft.location = action.data.location;
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
      if (action.data.boardNum === 1 || 2) draft.me.ProdPosts = draft.me.ProdPosts.filter(v => v.id !== action.data.PostId);
      if (action.data.boardNum === 3 || 4) draft.me.PowerPosts = draft.me.PowerPosts.filter(v => v.id !== action.data.PostId);
      if (action.data.boardNum === 5) draft.me.TogetherPosts = draft.me.TogetherPosts.filter(v => v.id !== action.data.PostId);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post", data); // formdata 전송
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

function sendDummyPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post/write", data); // formdata 전송
}

function* sendDummyPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(sendDummyPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEND_DUMMYPOST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEND_DUMMYPOST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(postId, postBoardNum) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/delete?postId=${postId}&postBoardNum=${postBoardNum}`); // delete는 데이터를 가져갈 수 없다 data는 postId
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.postId, action.postBoardNum);
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

function loadPostAPI(data, lastId, boardNum, location) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${encodeURIComponent(data)}/post?lastId=${lastId || 0}&boardNum=${boardNum || 0}&location=${encodeURIComponent(location)}`); // api 서버 요청은 /user/:userId/posts
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data, action.lastId, action.boardNum, action.location);
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

function changeTagAPI(data, boardNum, location) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/${encodeURIComponent(data)}/tag?boardNum=${boardNum || 0}&location=${encodeURIComponent(location)}`); // api 서버 요청은 /user/:userId/posts
}

function* changeTag(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeTagAPI, action.data, action.boardNum, action.location);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CHANGE_TAG_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CHANGE_TAG_FAILURE"],
      error: err.response.data
    });
  }
}

function loadSearchPostAPI(select, searchword, location, boardNum, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/search?select=${encodeURIComponent(select)}&location=${encodeURIComponent(location)}
  &searchword=${encodeURIComponent(searchword)}&boardNum=${boardNum}&lastId=${lastId || 0}`);
} // api 서버 요청은 GET/posts/search/


function* loadSearchPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadSearchPostAPI, action.select, action.searchword, action.location, action.boardNum, action.lastId);
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

function loadChangeSearchPostAPI(select, searchword, location, boardNum, lastId, tag) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts/searchTag?select=${encodeURIComponent(select)}&location=${encodeURIComponent(location)}
  &searchword=${encodeURIComponent(searchword)}&boardNum=${boardNum}&lastId=${lastId || 0}&tag=${encodeURIComponent(tag)}`);
} // api 서버 요청은 GET/posts/search/


function* loadChangeSearchPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadChangeSearchPostAPI, action.select, action.searchword, action.location, action.boardNum, action.lastId, action.tag);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 비슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SCHANGE_TAG_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SCHANGE_TAG_FAILURE"],
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

function loadSPostAPI(postId, postBoardNum) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/singlepost?postId=${postId}&postBoardNum=${postBoardNum}`);
}

function* loadSPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadSPostAPI, action.postId, action.postBoardNum);
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

function updateSPostAPI(postId, postBoardNum, postStatus) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/post/status?postId=${postId}&postBoardNum=${postBoardNum}&postStatus=${postStatus}`);
}

function* updateSPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(updateSPostAPI, action.postId, action.postBoardNum, action.postStatus);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // put이 액션을 dispatch하는 역할과 빗슷하게 본다
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["STATUS_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["STATUS_POST_FAILURE"],
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post/images", data); // formdata는 { name: data } 같은 식으로 감싸버리면 json으로 자동 변환되버린다.
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/post/edit", data);
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

function* watchSendDummyPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEND_DUMMYPOST_REQUEST"], sendDummyPost);
}

function* watchLoadChangeTag() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_CHANGE_TAG_REQUEST"], changeTag);
}

function* watchloadChangeSearchPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_SCHANGE_TAG_REQUEST"], loadChangeSearchPost);
}

function* watchupdateSPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["STATUS_POST_REQUEST"], updateSPost);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadSPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRelatedPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadLikedtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchModifyPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadRentalPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadWritePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadSearchPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSendDummyPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadChangeTag), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchloadChangeSearchPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchupdateSPost)]);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/user");
}

function SignUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user", data);
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

function loadUsersAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/user/all");
}

function ChangeNickNameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/user/nickname", {
    nickname: data
  });
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/login", data);
}

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/logout", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJMb2NhbFJlbnRhbEtpbmciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2VhcmNoUG9zdHMiLCJpbWFnZVBhdGhzIiwibWFpblRhbGtzIiwidGFsa1VzZXJzIiwib2JqZWN0X1RhZ3NEYXRhIiwidGFsZW50X1RhZ3NEYXRhIiwiY29vcGVyYXRlX3RhZ3NEYXRhIiwicGxheV90YWdzRGF0YSIsImJvYXJkTnVtIiwiaW5wdXRTZWFyY2giLCJzZWxlY3QiLCJzZWxlY3RlZFRhZyIsImNhdGVnb3J5Iiwic2VhcmNoUmVzdWx0SWQiLCJzaW5nbGVQb3N0IiwiaGFzTW9yZVBvc3QiLCJzZWFyY2hQb3N0TG9hZGluZyIsInNlYXJjaFBvc3REb25lIiwic2VhcmNoUG9zdEVycm9yIiwibG9hZFByb2ZpbGVQb3N0TG9hZGluZyIsImxvYWRQcm9maWxlUG9zdERvbmUiLCJsb2FkUHJvZmlsZVBvc3RFcnJvciIsInVwTG9hZEltYWdlc0xvYWRpbmciLCJ1cExvYWRJbWFnZXNEb25lIiwidXBMb2FkSW1hZ2VzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRTUG9zdExvYWRpbmciLCJsb2FkU1Bvc3REb25lIiwibG9hZFNQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFVzZXJQb3N0c0xvYWRpbmciLCJsb2FkVXNlclBvc3RzRG9uZSIsImxvYWRVc2VyUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwibW9kaWZ5UG9zdExvYWRpbmciLCJtb2RpZnlQb3N0RG9uZSIsIm1vZGlmeVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJVUERBVEVfU0VBUkNIIiwiVVBEQVRFX0JPQVJEIiwiVVBEQVRFX0NIQU5HRV9UQUdfUkVRVUVTVCIsIkxPQURfQ0hBTkdFX1RBR19SRVFVRVNUIiwiTE9BRF9DSEFOR0VfVEFHX1NVQ0NFU1MiLCJMT0FEX0NIQU5HRV9UQUdfRkFJTFVSRSIsIlNFTkRfRFVNTVlQT1NUX1JFUVVFU1QiLCJTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTIiwiU0VORF9EVU1NWVBPU1RfRkFJTFVSRSIsIkxPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTIiwiTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRSIsIk1PRElGWV9QT1NUX1JFUVVFU1QiLCJNT0RJRllfUE9TVF9TVUNDRVNTIiwiTU9ESUZZX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTIiwiTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfTElLRURfUE9TVFNfUkVRVUVTVCIsIkxPQURfTElLRURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfTElLRURfUE9TVFNfRkFJTFVSRSIsIkxPQURfU1BPU1RfUkVRVUVTVCIsIkxPQURfU1BPU1RfU1VDQ0VTUyIsIkxPQURfU1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIlNUQVRVU19QT1NUX1JFUVVFU1QiLCJTVEFUVVNfUE9TVF9TVUNDRVNTIiwiU1RBVFVTX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkxPQURfUkVOVEFMX1BPU1RfUkVRVUVTVCIsIkxPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUyIsIkxPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSIsIkxPQURfV1JJVEVfUE9TVF9SRVFVRVNUIiwiTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MiLCJMT0FEX1dSSVRFX1BPU1RfRkFJTFVSRSIsIkxPQURfU0NIQU5HRV9UQUdfUkVRVUVTVCIsIkxPQURfU0NIQU5HRV9UQUdfU1VDQ0VTUyIsIkxPQURfU0NIQU5HRV9UQUdfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsIlVQREFURV9UQUciLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwibGVuZ3RoIiwiZmlsdGVyIiwidiIsInNlYXJjaHdvcmQiLCJlcnJvciIsImJvYXJkX2JvYXJkbnVtIiwiY29uY2F0IiwiaSIsImZpbmQiLCJpZCIsIlBvc3RJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJzdGF0dXMiLCJ0b3RhbFBhdGgiLCJQcm9kUG9zdEltYWdlcyIsIm1hcCIsInNyYyIsInRvU3RyaW5nIiwiUG93ZXJQb3N0SW1hZ2VzIiwiVG9nZXRoZXJQb3N0SW1hZ2VzIiwibG9jYXRpb24iLCJjb25zb2xlIiwibG9nIiwidW5zaGlmdCIsIkNvbW1lbnRzIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRVc2Vyc0xvYWRpbmciLCJsb2FkVXNlcnNEb25lIiwibG9hZFVzZXJzRXJyb3IiLCJsb2FkTXlJbmZvTG9hZGluZyIsImxvYWRNeUluZm9Eb25lIiwibG9hZE15SW5mb0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsInVzZXJJbmZvIiwibWUiLCJ1c2Vyc0luZm8iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiVVBEQVRFX0xPQ0FMIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9BRF9VU0VSU19SRVFVRVNUIiwiTE9BRF9VU0VSU19TVUNDRVNTIiwiTE9BRF9VU0VSU19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJuaWNrbmFtZSIsIlByb2RQb3N0cyIsIlBvd2VyUG9zdHMiLCJUb2dldGhlclBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsInNlbmREdW1teVBvc3RBUEkiLCJzZW5kRHVtbXlQb3N0IiwicmVtb3ZlUG9zdEFQSSIsInBvc3RJZCIsInBvc3RCb2FyZE51bSIsImRlbGV0ZSIsInJlbW92ZVBvc3QiLCJsb2FkUG9zdEFQSSIsImxhc3RJZCIsImdldCIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvYWRQb3N0IiwiY2hhbmdlVGFnQVBJIiwiY2hhbmdlVGFnIiwibG9hZFNlYXJjaFBvc3RBUEkiLCJsb2FkU2VhcmNoUG9zdCIsImxvYWRDaGFuZ2VTZWFyY2hQb3N0QVBJIiwidGFnIiwibG9hZENoYW5nZVNlYXJjaFBvc3QiLCJyZW50YWxQb3N0QVBJIiwicmVudGFsUG9zdCIsIndyaXRlUG9zdEFQSSIsIndyaXRlUG9zdCIsImxvYWRTUG9zdEFQSSIsImxvYWRTUG9zdCIsInVwZGF0ZVNQb3N0QVBJIiwicG9zdFN0YXR1cyIsInVwZGF0ZVNQb3N0IiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsInVubGlrZVBvc3QiLCJhZGRDb21tZW50QVBJIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibG9hZFVzZXJQb3N0c0FQSSIsImxvYWRVc2VyUG9zdHMiLCJSZWxhdGVkUG9zdEFQSSIsIlJlbGF0ZWRQb3N0IiwibG9hZEhhc2h0YWdQb3N0c0FQSSIsImxvYWRIYXNodGFnUG9zdHMiLCJsb2FkTGlrZWRQb3N0c0FQSSIsImxvYWRMaWtlZFBvc3RzIiwibW9kaWZ5UG9zdEFQSSIsIm1vZGlmeVBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTG9hZFNQb3N0Iiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hNb2RpZnlQb3N0Iiwid2F0Y2hMb2FkUmVsYXRlZFBvc3QiLCJ3YXRjaExvYWRMaWtlZHRhZ1Bvc3RzIiwid2F0Y2hMb2FkUmVudGFsUG9zdCIsIndhdGNoTG9hZFdyaXRlUG9zdCIsIndhdGNoTG9hZFNlYXJjaFBvc3QiLCJ3YXRjaFNlbmREdW1teVBvc3QiLCJ3YXRjaExvYWRDaGFuZ2VUYWciLCJ3YXRjaGxvYWRDaGFuZ2VTZWFyY2hQb3N0Iiwid2F0Y2h1cGRhdGVTUG9zdCIsImxvYWRNeUluZm9BUEkiLCJTaWduVXBBUEkiLCJsb2FkVXNlckFQSSIsImxvYWRVc2Vyc0FQSSIsIkNoYW5nZU5pY2tOYW1lQVBJIiwibG9nSW5BUEkiLCJsb2dPdXRBUEkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXIiLCJsb2FkVXNlcnMiLCJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImNoYW5nZU5pY2tOYW1lIiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaExvYWRNeUluZm8iLCJ3YXRjaENoYW5nZW5pY2tOYW1lIiwid2F0Y2hMb2FkVXNlckluZm8iLCJ3YXRjaExvYWRVc2Vyc0luZm8iLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLFNBQVNBLGVBQVQsQ0FBeUI7QUFBRUM7QUFBRixDQUF6QixFQUF3QztBQUN0QyxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLE9BQWY7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O0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpD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TUFBRCxJQUFZO0FBQ3pFNEosU0FBTyxDQUFDQyxHQUFSLENBQVk3SixNQUFaO0FBQ0EsU0FBT2tVLElBQUksQ0FBQ2xVLE1BQUQsQ0FBWDtBQUNELENBSEQ7O0FBS0EsTUFBTW1VLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBaUJMLGdCQUFqQixDQUFwQjtBQUNBLFFBQU1RLFFBQVEsR0FBRyxRQUNiQyxTQURhLEdBRWJDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FGdkI7QUFHQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUMxTSxpREFBRCxFQUFVcU0sUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQmxILDhDQUFuQixDQUFqQjtBQUNBLFNBQU8rRyxLQUFQO0FBQ0QsQ0FURDs7QUFXQSxNQUFNL1UsT0FBTyxHQUFHbVYsd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtBQUM1Q2EsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllcFYsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvY2FyZC5jc3MnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuZnVuY3Rpb24gTG9jYWxSZW50YWxLaW5nKHsgQ29tcG9uZW50IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZWF0ZSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8dGl0bGU+7Jqw66as64+Z64SkIOugjO2DiOuMgOyepTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbkxvY2FsUmVudGFsS2luZy5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChMb2NhbFJlbnRhbEtpbmcpO1xuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbi8vICjsnbTsoITsg4Htg5ws7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgdXNlcixcclxuICAgICAgICBwb3N0LFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgc2VhcmNoUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIG1haW5UYWxrczogW10sXHJcbiAgdGFsa1VzZXJzOiBbXSxcclxuICBvYmplY3RfVGFnc0RhdGE6IFtcclxuICAgIFwi7KCE7LK0XCIsXHJcbiAgICBcIuqzteq1rFwiLFxyXG4gICAgXCLsnZjrpZhcIixcclxuICAgIFwi7KCE7J6Q6riw6riwXCIsXHJcbiAgICBcIuyEnOyggVwiLFxyXG4gICAgXCLqsozsnoQv7Leo66+4XCIsXHJcbiAgICBcIuywqOufiVwiLFxyXG4gICAgXCLsiqTtj6zsuKAv656Y7KCAXCIsXHJcbiAgICBcIuu3sO2LsC/rr7jsmqlcIixcclxuICAgIFwi67CY66Ck64+Z66y8XCIsXHJcbiAgICBcIuq4sO2DgFwiLFxyXG4gIF0sXHJcbiAgdGFsZW50X1RhZ3NEYXRhOiBbXHJcbiAgICBcIuyghOyytFwiLFxyXG4gICAgXCLrr7jsiKBcIixcclxuICAgIFwi6rWs7LapXCIsXHJcbiAgICBcIuyEpOy5mFwiLFxyXG4gICAgXCLsvZTsua1cIixcclxuICAgIFwi7LSs7JiBXCIsXHJcbiAgICBcIuydvOyGkFwiLFxyXG4gICAgXCLquLDtg4BcIixcclxuICBdLFxyXG4gIGNvb3BlcmF0ZV90YWdzRGF0YTogW1wi7KCE7LK0XCIsIFwiMSsxXCIsIFwi67Cw64usXCIsIFwi6rO164+Z6rWs66ekXCIsIFwi6riw7YOAXCJdLFxyXG4gIHBsYXlfdGFnc0RhdGE6IFtcIuyghOyytFwiLCBcIuyniOusuFwiLCBcIuyekOycoFwiXSxcclxuICBib2FyZE51bTogbnVsbCxcclxuICBpbnB1dFNlYXJjaDogbnVsbCxcclxuICBzZWxlY3Q6IG51bGwsXHJcbiAgc2VsZWN0ZWRUYWc6IG51bGwsXHJcbiAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgc2VhcmNoUmVzdWx0SWQ6IG51bGwsXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICBzZWFyY2hQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgc2VhcmNoUG9zdERvbmU6IGZhbHNlLFxyXG4gIHNlYXJjaFBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUHJvZmlsZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUHJvZmlsZVBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUHJvZmlsZVBvc3RFcnJvcjogbnVsbCxcclxuICB1cExvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cExvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cExvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkU1Bvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkU1Bvc3REb25lOiBmYWxzZSxcclxuICBsb2FkU1Bvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkVXNlclBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFVzZXJQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBtb2RpZnlQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbW9kaWZ5UG9zdERvbmU6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VBUkNIID0gXCJVUERBVEVfU0VBUkNIXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQk9BUkQgPSBcIlVQREFURV9CT0FSRFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9DSEFOR0VfVEFHX1JFUVVFU1QgPSBcIlVQREFURV9DSEFOR0VfVEFHX1JFUVVFU1RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0NIQU5HRV9UQUdfUkVRVUVTVCA9IFwiTE9BRF9DSEFOR0VfVEFHX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfQ0hBTkdFX1RBR19TVUNDRVNTID0gXCJMT0FEX0NIQU5HRV9UQUdfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DSEFOR0VfVEFHX0ZBSUxVUkUgPSBcIkxPQURfQ0hBTkdFX1RBR19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0VORF9EVU1NWVBPU1RfUkVRVUVTVCA9IFwiU0VORF9EVU1NWVBPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyA9IFwiU0VORF9EVU1NWVBPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0VORF9EVU1NWVBPU1RfRkFJTFVSRSA9IFwiU0VORF9EVU1NWVBPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9SRVFVRVNUID0gXCJNT0RJRllfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9TVUNDRVNTID0gXCJNT0RJRllfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9GQUlMVVJFID0gXCJNT0RJRllfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gXCJVUExPQURfSU1BR0VTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9IFwiVVBMT0FEX0lNQUdFU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSBcIlVQTE9BRF9JTUFHRVNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gXCJMSUtFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSBcIkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9IFwiTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gXCJVTkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gXCJVTkxJS0VfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gXCJVTkxJS0VfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcIkxPQURfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gXCJMT0FEX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QgPSBcIkxPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUgPSBcIkxPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9IFwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gXCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfUkVRVUVTVCA9IFwiTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MgPSBcIkxPQURfTElLRURfUE9TVFNfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFID0gXCJMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX1JFUVVFU1QgPSBcIkxPQURfU1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9TVUNDRVNTID0gXCJMT0FEX1NQT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfRkFJTFVSRSA9IFwiTE9BRF9TUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTVEFUVVNfUE9TVF9SRVFVRVNUID0gXCJTVEFUVVNfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTVEFUVVNfUE9TVF9TVUNDRVNTID0gXCJTVEFUVVNfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTVEFUVVNfUE9TVF9GQUlMVVJFID0gXCJTVEFUVVNfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVOVEFMX1BPU1RfUkVRVUVTVCA9IFwiTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUkVOVEFMX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFID0gXCJMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVCA9IFwiTE9BRF9XUklURV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfV1JJVEVfUE9TVF9TVUNDRVNTID0gXCJMT0FEX1dSSVRFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUgPSBcIkxPQURfV1JJVEVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TQ0hBTkdFX1RBR19SRVFVRVNUID0gXCJMT0FEX1NDSEFOR0VfVEFHX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfU0NIQU5HRV9UQUdfU1VDQ0VTUyA9IFwiTE9BRF9TQ0hBTkdFX1RBR19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NDSEFOR0VfVEFHX0ZBSUxVUkUgPSBcIkxPQURfU0NIQU5HRV9UQUdfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1RBRyA9IFwiVVBEQVRFX1RBR1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCzslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgVVBEQVRFX0JPQVJEOlxyXG4gICAgICAgIGRyYWZ0LmJvYXJkTnVtID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cExvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFNQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlclBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tb2RpZnlQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9DSEFOR0VfVEFHX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKFxyXG4gICAgICAgICAgKHYpID0+IHYuY2F0ZWdvcnkgPT09IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfU0VBUkNIOlxyXG4gICAgICAgIGRyYWZ0LmlucHV0U2VhcmNoID0gYWN0aW9uLmRhdGEuc2VhcmNod29yZDtcclxuICAgICAgICBkcmFmdC5zZWxlY3QgPSBhY3Rpb24uZGF0YS5zZWxlY3Q7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9TQ0hBTkdFX1RBR19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9TQ0hBTkdFX1RBR19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhOyAvLyDquLDsobQg67Cw7Je0IOuwgOyWtOuyhOumrOqzoCDsg4jroa3qsowgMTDqsJzslKkg64Sj64qU64ukLlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9TQ0hBTkdFX1RBR19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9DSEFOR0VfVEFHX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0NIQU5HRV9UQUdfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTsgLy8g6riw7KG0IOuwsOyXtCDrsIDslrTrsoTrpqzqs6Ag7IOI66Gt6rKMIDEw6rCc7JSpIOuEo+uKlOuLpC5cclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfQ0hBTkdFX1RBR19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zZWFyY2hQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zZWFyY2hQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2VhcmNoUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5kYXRhWzBdLmJvYXJkX2JvYXJkbnVtID09PSAxIHx8IDIgfHwgMyB8fCA0KSB7XHJcbiAgICAgICAgICAvLyDroIztg4gg6rKM7Iuc66y87J20IOyMk+ydtOqzoCDsnojripTqsr3smrBcclxuICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyDso7zsoJzqsIAg64uk66W4IOqyjOyLnOusvCDrjanslrTrpqzrpbwg6rCA7KC47JisIOqyveyasFxyXG4gICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPQURfUkVOVEFMX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9XUklURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1dSSVRFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGlmIChhY3Rpb24uZGF0YVswXS5ib2FyZE51bSA9PT0gNSB8fCA2KSB7XHJcbiAgICAgICAgICAvLyDroIztg4gg6rKM7Iuc66y87J20IOyMk+ydtOqzoCDsnojripTqsr3smrBcclxuICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyDso7zsoJzqsIAg64uk66W4IOqyjOyLnOusvCDrjanslrTrpqzrpbwg6rCA7KC47JisIOqyveyasFxyXG4gICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExPQURfV1JJVEVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfVEFHOlxyXG4gICAgICAgIGRyYWZ0LnNlbGVjdGVkVGFnID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTVEFUVVNfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRTUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkU1Bvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU1RBVFVTX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5zaW5nbGVQb3N0LnN0YXR1cyA9IGFjdGlvbi5kYXRhLnN0YXR1cztcclxuICAgICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFNQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU1RBVFVTX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkU1Bvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9TUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRTUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkU1Bvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9TUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBpZiAoYWN0aW9uLmRhdGEuYm9hcmROdW0gPT09IDEgfHwgYWN0aW9uLmRhdGEuYm9hcmROdW0gPT09IDIpIHtcclxuICAgICAgICAgIGNvbnN0IHRvdGFsUGF0aCA9IGFjdGlvbi5kYXRhLlByb2RQb3N0SW1hZ2VzLm1hcCgodikgPT5cclxuICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocy5jb25jYXQodi5zcmMudG9TdHJpbmcoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsUGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5jb25jYXQodG90YWxQYXRoW2ldWzBdKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi5kYXRhLmJvYXJkTnVtID09PSAzIHx8IGFjdGlvbi5kYXRhLmJvYXJkTnVtID09PSA0KSB7XHJcbiAgICAgICAgICBjb25zdCB0b3RhbFBhdGggPSBhY3Rpb24uZGF0YS5Qb3dlclBvc3RJbWFnZXMubWFwKCh2KSA9PlxyXG4gICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzLmNvbmNhdCh2LnNyYy50b1N0cmluZygpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxQYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmNvbmNhdCh0b3RhbFBhdGhbaV1bMF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmRhdGEuYm9hcmROdW0gPT09IDUpIHtcclxuICAgICAgICAgIGNvbnN0IHRvdGFsUGF0aCA9IGFjdGlvbi5kYXRhLlRvZ2V0aGVyUG9zdEltYWdlcy5tYXAoKHYpID0+XHJcbiAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMuY29uY2F0KHYuc3JjLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuY29uY2F0KHRvdGFsUGF0aFtpXVswXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1NQT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFNQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTElLRURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgaWYgKGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAvLyBTU1LroZwg7LKY7J2M7JeQIOuTpOqzoOyYpOuKlCDqsr3smrDqsIAg7JWE64uQ65WMXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c1swXS5jYXRlZ29yeSAhPT0gYWN0aW9uLmRhdGFbMF0uY2F0ZWdvcnkgfHwgLy/subTthYzqs6DrpqwgLCDsp4Dsl63snbQg7J287LmY7ZWY7KeAIOyViuydhOuVjFxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNbMF0ubG9jYXRpb24gIT09IGFjdGlvbi5kYXRhWzBdLmxvY2F0aW9uXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7IC8vIOq4sOyhtCDrsLDsl7Qg67CA7Ja067KE66as6rOgIOyDiOuhreqyjCAxMOqwnOyUqSDrhKPripTri6QuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi67CA6rOgIOyDiOuhnOuEo+yXiOydjFwiKTtcclxuICAgICAgICAgICAgLy8gZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuyMk+uKlOykkVwiKTtcclxuICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7IC8vIOqwmeydgOyGjeyEseydmCDqsozsi5zrrLzsnYQg7IyT6rOg7J6I64qUIOqyveyasFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNTUiBPUiBORVcgMTAgUE9TVFNcIik7XHJcbiAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTsgLy8gU1NS66GcIOyymOydjOyXkCDrk6Tqs6DsmKzrlYxcclxuICAgICAgICB9XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdCA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRU5EX0RVTU1ZUE9TVF9SRVFVRVNUOlxyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTOlxyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRU5EX0RVTU1ZUE9TVF9GQUlMVVJFOlxyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcihcclxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWRcclxuICAgICAgICApO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTU9ESUZZX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tb2RpZnlQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE1PRElGWV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmFmdC5tYWluUG9zdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChkcmFmdC5tYWluUG9zdHNbaV0uaWQgPT0gYWN0aW9uLmRhdGEuaWQpIHtcclxuICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzKGksIDEsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tb2RpZnlQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTU9ESUZZX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5tb2RpZnlQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDri6Trpbgg7J207Jqp7J6QIOygleuztCDroZzrlKlcclxuICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyRXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJzTG9hZGluZzogZmFsc2UsIC8vIOyghOyytCDsnbTsmqnsnpAg66as7Iqk7Yq4IOuhnOuUqVxyXG4gIGxvYWRVc2Vyc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2Vyc0Vycm9yOiBudWxsLFxyXG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g64K07KCV67O0IOuhnOuUqSDsi5zrj4TspJFcclxuICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIHVzZXJJbmZvOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIGxvY2F0aW9uOiBudWxsLFxyXG4gIHVzZXJzSW5mbzoge30sXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTE9DQUwgPSBcIlVQREFURV9MT0NBTFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gXCJMT0FEX01ZX0lORk9fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSBcIkxPQURfTVlfSU5GT19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9IFwiTE9BRF9NWV9JTkZPX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSBcIkxPQURfVVNFUl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19SRVFVRVNUID0gXCJMT0FEX1VTRVJTX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSU19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX0ZBSUxVUkUgPSBcIkxPQURfVVNFUlNfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBVUERBVEVfTE9DQUw6XHJcbiAgICAgICAgZHJhZnQubG9jYXRpb24gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUlNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfVVNFUlNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkVXNlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXNlcnNJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRVc2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7IC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7IC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTsgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9jYXRpb24gPSBhY3Rpb24uZGF0YS5sb2NhdGlvbjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGlmIChhY3Rpb24uZGF0YS5ib2FyZE51bSA9PT0gMSB8fCAyKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIjEvMlwiKTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2coZHJhZnQubWUpO1xyXG4gICAgICAgICAgZHJhZnQubWUuUHJvZFBvc3RzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuaWQgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24uZGF0YS5ib2FyZE51bSA9PT0gMyB8fCA0KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIjMvNFwiKTtcclxuICAgICAgICAgIGRyYWZ0Lm1lLlBvd2VyUG9zdHMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5pZCB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi5kYXRhLmJvYXJkTnVtID09PSA1KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIjVcIik7XHJcbiAgICAgICAgICBkcmFmdC5tZS5Ub2dldGhlclBvc3RzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgIGlmIChhY3Rpb24uZGF0YS5ib2FyZE51bSA9PT0gMSB8fCAyKVxyXG4gICAgICAgICAgZHJhZnQubWUuUHJvZFBvc3RzID0gZHJhZnQubWUuUHJvZFBvc3RzLmZpbHRlcihcclxuICAgICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBpZiAoYWN0aW9uLmRhdGEuYm9hcmROdW0gPT09IDMgfHwgNClcclxuICAgICAgICAgIGRyYWZ0Lm1lLlBvd2VyUG9zdHMgPSBkcmFmdC5tZS5Qb3dlclBvc3RzLmZpbHRlcihcclxuICAgICAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBpZiAoYWN0aW9uLmRhdGEuYm9hcmROdW0gPT09IDUpXHJcbiAgICAgICAgICBkcmFmdC5tZS5Ub2dldGhlclBvc3RzID0gZHJhZnQubWUuVG9nZXRoZXJQb3N0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsocG9zdFNhZ2EpLFxuICAgIGZvcmsodXNlclNhZ2EpLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7XHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9DSEFOR0VfVEFHX0ZBSUxVUkUsXHJcbiAgTE9BRF9DSEFOR0VfVEFHX1JFUVVFU1QsXHJcbiAgTE9BRF9DSEFOR0VfVEFHX1NVQ0NFU1MsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfTElLRURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUkVOVEFMX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9TQ0hBTkdFX1RBR19GQUlMVVJFLFxyXG4gIExPQURfU0NIQU5HRV9UQUdfUkVRVUVTVCxcclxuICBMT0FEX1NDSEFOR0VfVEFHX1NVQ0NFU1MsXHJcbiAgTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9TUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfU1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1NQT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9XUklURV9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MsXHJcbiAgTU9ESUZZX1BPU1RfRkFJTFVSRSxcclxuICBNT0RJRllfUE9TVF9SRVFVRVNULFxyXG4gIE1PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgU0VORF9EVU1NWVBPU1RfRkFJTFVSRSxcclxuICBTRU5EX0RVTU1ZUE9TVF9SRVFVRVNULFxyXG4gIFNFTkRfRFVNTVlQT1NUX1NVQ0NFU1MsXHJcbiAgU1RBVFVTX1BPU1RfRkFJTFVSRSxcclxuICBTVEFUVVNfUE9TVF9SRVFVRVNULFxyXG4gIFNUQVRVU19QT1NUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3RcIiwgZGF0YSk7IC8vIGZvcm1kYXRhIOyghOyGoVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZER1bW15UG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcG9zdC93cml0ZVwiLCBkYXRhKTsgLy8gZm9ybWRhdGEg7KCE7IahXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZW5kRHVtbXlQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNlbmREdW1teVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VORF9EVU1NWVBPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKHBvc3RJZCwgcG9zdEJvYXJkTnVtKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShcclxuICAgIGAvcG9zdC9kZWxldGU/cG9zdElkPSR7cG9zdElkfSZwb3N0Qm9hcmROdW09JHtwb3N0Qm9hcmROdW19YFxyXG4gICk7IC8vIGRlbGV0ZeuKlCDrjbDsnbTthLDrpbwg6rCA7KC46rCIIOyImCDsl4bri6QgZGF0YeuKlCBwb3N0SWRcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoXHJcbiAgICAgIHJlbW92ZVBvc3RBUEksXHJcbiAgICAgIGFjdGlvbi5wb3N0SWQsXHJcbiAgICAgIGFjdGlvbi5wb3N0Qm9hcmROdW1cclxuICAgICk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSwgbGFzdElkLCBib2FyZE51bSwgbG9jYXRpb24pIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFxyXG4gICAgYC9wb3N0cy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0vcG9zdD9sYXN0SWQ9JHtsYXN0SWQgfHwgMH0mYm9hcmROdW09JHtcclxuICAgICAgYm9hcmROdW0gfHwgMFxyXG4gICAgfSZsb2NhdGlvbj0ke2VuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbil9YFxyXG4gICk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFxyXG4gICAgICBsb2FkUG9zdEFQSSxcclxuICAgICAgYWN0aW9uLmRhdGEsXHJcbiAgICAgIGFjdGlvbi5sYXN0SWQsXHJcbiAgICAgIGFjdGlvbi5ib2FyZE51bSxcclxuICAgICAgYWN0aW9uLmxvY2F0aW9uXHJcbiAgICApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRhZ0FQSShkYXRhLCBib2FyZE51bSwgbG9jYXRpb24pIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFxyXG4gICAgYC9wb3N0cy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0vdGFnP2JvYXJkTnVtPSR7XHJcbiAgICAgIGJvYXJkTnVtIHx8IDBcclxuICAgIH0mbG9jYXRpb249JHtlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24pfWBcclxuICApOyAvLyBhcGkg7ISc67KEIOyalOyyreydgCAvdXNlci86dXNlcklkL3Bvc3RzXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VUYWcoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoXHJcbiAgICAgIGNoYW5nZVRhZ0FQSSxcclxuICAgICAgYWN0aW9uLmRhdGEsXHJcbiAgICAgIGFjdGlvbi5ib2FyZE51bSxcclxuICAgICAgYWN0aW9uLmxvY2F0aW9uXHJcbiAgICApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX0NIQU5HRV9UQUdfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfQ0hBTkdFX1RBR19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRTZWFyY2hQb3N0QVBJKHNlbGVjdCwgc2VhcmNod29yZCwgbG9jYXRpb24sIGJvYXJkTnVtLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHMvc2VhcmNoP3NlbGVjdD0ke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgIHNlbGVjdFxyXG4gICl9JmxvY2F0aW9uPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uKX1cclxuICAmc2VhcmNod29yZD0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2h3b3JkKX0mYm9hcmROdW09JHtib2FyZE51bX0mbGFzdElkPSR7XHJcbiAgICBsYXN0SWQgfHwgMFxyXG4gIH1gKTtcclxufSAvLyBhcGkg7ISc67KEIOyalOyyreydgCBHRVQvcG9zdHMvc2VhcmNoL1xyXG5cclxuZnVuY3Rpb24qIGxvYWRTZWFyY2hQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFxyXG4gICAgICBsb2FkU2VhcmNoUG9zdEFQSSxcclxuICAgICAgYWN0aW9uLnNlbGVjdCxcclxuICAgICAgYWN0aW9uLnNlYXJjaHdvcmQsXHJcbiAgICAgIGFjdGlvbi5sb2NhdGlvbixcclxuICAgICAgYWN0aW9uLmJvYXJkTnVtLFxyXG4gICAgICBhY3Rpb24ubGFzdElkXHJcbiAgICApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkQ2hhbmdlU2VhcmNoUG9zdEFQSShcclxuICBzZWxlY3QsXHJcbiAgc2VhcmNod29yZCxcclxuICBsb2NhdGlvbixcclxuICBib2FyZE51bSxcclxuICBsYXN0SWQsXHJcbiAgdGFnXHJcbikge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy9zZWFyY2hUYWc/c2VsZWN0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgc2VsZWN0XHJcbiAgKX0mbG9jYXRpb249JHtlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24pfVxyXG4gICZzZWFyY2h3b3JkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNlYXJjaHdvcmQpfSZib2FyZE51bT0ke2JvYXJkTnVtfSZsYXN0SWQ9JHtcclxuICAgIGxhc3RJZCB8fCAwXHJcbiAgfSZ0YWc9JHtlbmNvZGVVUklDb21wb25lbnQodGFnKX1gKTtcclxufSAvLyBhcGkg7ISc67KEIOyalOyyreydgCBHRVQvcG9zdHMvc2VhcmNoL1xyXG5cclxuZnVuY3Rpb24qIGxvYWRDaGFuZ2VTZWFyY2hQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFxyXG4gICAgICBsb2FkQ2hhbmdlU2VhcmNoUG9zdEFQSSxcclxuICAgICAgYWN0aW9uLnNlbGVjdCxcclxuICAgICAgYWN0aW9uLnNlYXJjaHdvcmQsXHJcbiAgICAgIGFjdGlvbi5sb2NhdGlvbixcclxuICAgICAgYWN0aW9uLmJvYXJkTnVtLFxyXG4gICAgICBhY3Rpb24ubGFzdElkLFxyXG4gICAgICBhY3Rpb24udGFnXHJcbiAgICApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1NDSEFOR0VfVEFHX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1NDSEFOR0VfVEFHX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVudGFsUG9zdEFQSShkYXRhLCBsYXN0SWQpIHtcclxuICAvLyDrjIDsg4HsnKDsoIAgaWRcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHMvJHtkYXRhfS9wb3N0P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvLyBhcGkg7ISc67KEIOyalOyyreydgCAvdXNlci86dXNlcklkL3Bvc3RzXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW50YWxQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbnRhbFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlUG9zdEFQSShkYXRhLCBsYXN0SWQpIHtcclxuICAvLyDrjIDsg4HsnKDsoIAgaWRcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHMvJHtkYXRhfS9wb3N0P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvLyBhcGkg7ISc67KEIOyalOyyreydgCAvdXNlci86dXNlcklkL3Bvc3RzXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3cml0ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwod3JpdGVQb3N0QVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfV1JJVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFNQb3N0QVBJKHBvc3RJZCwgcG9zdEJvYXJkTnVtKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcclxuICAgIGAvcG9zdC9zaW5nbGVwb3N0P3Bvc3RJZD0ke3Bvc3RJZH0mcG9zdEJvYXJkTnVtPSR7cG9zdEJvYXJkTnVtfWBcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFNQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRTUG9zdEFQSSwgYWN0aW9uLnBvc3RJZCwgYWN0aW9uLnBvc3RCb2FyZE51bSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfU1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfU1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVTUG9zdEFQSShwb3N0SWQsIHBvc3RCb2FyZE51bSwgcG9zdFN0YXR1cykge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXHJcbiAgICBgL3Bvc3Qvc3RhdHVzP3Bvc3RJZD0ke3Bvc3RJZH0mcG9zdEJvYXJkTnVtPSR7cG9zdEJvYXJkTnVtfSZwb3N0U3RhdHVzPSR7cG9zdFN0YXR1c31gXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwZGF0ZVNQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFxyXG4gICAgICB1cGRhdGVTUG9zdEFQSSxcclxuICAgICAgYWN0aW9uLnBvc3RJZCxcclxuICAgICAgYWN0aW9uLnBvc3RCb2FyZE51bSxcclxuICAgICAgYWN0aW9uLnBvc3RTdGF0dXNcclxuICAgICk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFNUQVRVU19QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTVEFUVVNfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Bvc3QvaW1hZ2VzXCIsIGRhdGEpOyAvLyBmb3JtZGF0YeuKlCB7IG5hbWU6IGRhdGEgfSDqsJnsnYAg7Iud7Jy866GcIOqwkOyLuOuyhOumrOuptCBqc29u7Jy866GcIOyekOuPmSDrs4DtmZjrkJjrsoTrprDri6QuXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX0vcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlbGF0ZWRQb3N0QVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy9yZWxhdGVkP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogUmVsYXRlZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoUmVsYXRlZFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KFxyXG4gICAgYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRMaWtlZFBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9saWtlZD9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRMaWtlZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRMaWtlZFBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfTElLRURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTElLRURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goXCIvcG9zdC9lZGl0XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbW9kaWZ5UG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChtb2RpZnlQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLCAvLyBQb3N0SWQsVXNlcklkXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IE1PRElGWV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkU1Bvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1NQT1NUX1JFUVVFU1QsIGxvYWRTUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCwgbG9hZFVzZXJQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRIYXNodGFnUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCwgbG9hZEhhc2h0YWdQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaE1vZGlmeVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChNT0RJRllfUE9TVF9SRVFVRVNULCBtb2RpZnlQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFJlbGF0ZWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCwgUmVsYXRlZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTGlrZWR0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTElLRURfUE9TVFNfUkVRVUVTVCwgbG9hZExpa2VkUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmVudGFsUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUkVOVEFMX1BPU1RfUkVRVUVTVCwgcmVudGFsUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRXcml0ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVCwgd3JpdGVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFNlYXJjaFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNULCBsb2FkU2VhcmNoUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNlbmREdW1teVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTRU5EX0RVTU1ZUE9TVF9SRVFVRVNULCBzZW5kRHVtbXlQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZENoYW5nZVRhZygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfQ0hBTkdFX1RBR19SRVFVRVNULCBjaGFuZ2VUYWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hsb2FkQ2hhbmdlU2VhcmNoUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfU0NIQU5HRV9UQUdfUkVRVUVTVCwgbG9hZENoYW5nZVNlYXJjaFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2h1cGRhdGVTUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNUQVRVU19QT1NUX1JFUVVFU1QsIHVwZGF0ZVNQb3N0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFNQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFJlbGF0ZWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTGlrZWR0YWdQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXJQb3N0cyksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVuTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaE1vZGlmeVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFJlbnRhbFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRXcml0ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRTZWFyY2hQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hTZW5kRHVtbXlQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkQ2hhbmdlVGFnKSxcclxuICAgIGZvcmsod2F0Y2hsb2FkQ2hhbmdlU2VhcmNoUG9zdCksXHJcbiAgICBmb3JrKHdhdGNodXBkYXRlU1Bvc3QpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gIExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gIExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gIExPQURfVVNFUl9GQUlMVVJFLFxyXG4gIExPQURfVVNFUl9SRVFVRVNULFxyXG4gIExPQURfVVNFUl9TVUNDRVNTLFxyXG4gIExPQURfVVNFUlNfRkFJTFVSRSxcclxuICBMT0FEX1VTRVJTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSU19TVUNDRVNTLFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlclwiKTtcclxufVxyXG5mdW5jdGlvbiBTaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXJcIiwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24gbG9hZFVzZXJBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC91c2VyLyR7ZGF0YX1gKTtcclxufVxyXG5mdW5jdGlvbiBsb2FkVXNlcnNBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyL2FsbFwiKTtcclxufVxyXG5mdW5jdGlvbiBDaGFuZ2VOaWNrTmFtZUFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKFwiL3VzZXIvbmlja25hbWVcIiwgeyBuaWNrbmFtZTogZGF0YSB9KTtcclxufVxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9nb3V0XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkVXNlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfVVNFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfVVNFUlNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIGxvZ091dChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBjYWxsKFNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrTmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChDaGFuZ2VOaWNrTmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlbmlja05hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja05hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VySW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJzSW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUlNfUkVRVUVTVCwgbG9hZFVzZXJzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlckluZm8pLFxyXG4gICAgZm9yayh3YXRjaExvYWRVc2Vyc0luZm8pLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZW5pY2tOYW1lKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcblxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xuICByZXR1cm4gbmV4dChhY3Rpb24pO1xufTtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xuICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9