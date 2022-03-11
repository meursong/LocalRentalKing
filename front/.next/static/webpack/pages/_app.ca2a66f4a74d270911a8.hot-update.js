webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, SEND_DUMMYPOST_REQUEST, SEND_DUMMYPOST_SUCCESS, SEND_DUMMYPOST_FAILURE, LOAD_SEARCH_POSTS_REQUEST, LOAD_SEARCH_POSTS_SUCCESS, LOAD_SEARCH_POSTS_FAILURE, MODIFY_POST_REQUEST, MODIFY_POST_SUCCESS, MODIFY_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RELATED_POST_REQUEST, LOAD_RELATED_POST_SUCCESS, LOAD_RELATED_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_LIKED_POSTS_REQUEST, LOAD_LIKED_POSTS_SUCCESS, LOAD_LIKED_POSTS_FAILURE, LOAD_SPOST_REQUEST, LOAD_SPOST_SUCCESS, LOAD_SPOST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_RENTAL_POST_REQUEST, LOAD_RENTAL_POST_SUCCESS, LOAD_RENTAL_POST_FAILURE, LOAD_WRITE_POST_REQUEST, LOAD_WRITE_POST_SUCCESS, LOAD_WRITE_POST_FAILURE, REMOVE_IMAGE, UPDATE_TAG, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
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
var SEND_DUMMYPOST_REQUEST = 'SEND_DUMMYPOST_REQUEST';
var SEND_DUMMYPOST_SUCCESS = 'SEND_DUMMYPOST_SUCCESS';
var SEND_DUMMYPOST_FAILURE = 'SEND_DUMMYPOST_FAILURE';
var LOAD_SEARCH_POSTS_REQUEST = 'LOAD_SEARCH_POSTS_REQUEST';
var LOAD_SEARCH_POSTS_SUCCESS = 'LOAD_SEARCH_POSTS_SUCCESS';
var LOAD_SEARCH_POSTS_FAILURE = 'LOAD_SEARCH_POSTS_FAILURE';
var MODIFY_POST_REQUEST = 'MODIFY_POST_REQUEST';
var MODIFY_POST_SUCCESS = 'MODIFY_POST_SUCCESS';
var MODIFY_POST_FAILURE = 'MODIFY_POST_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var LOAD_RELATED_POST_REQUEST = 'LOAD_RELATED_POST_REQUEST';
var LOAD_RELATED_POST_SUCCESS = 'LOAD_RELATED_POST_SUCCESS';
var LOAD_RELATED_POST_FAILURE = 'LOAD_RELATED_POST_FAILURE';
var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var LOAD_LIKED_POSTS_REQUEST = 'LOAD_LIKED_POSTS_REQUEST';
var LOAD_LIKED_POSTS_SUCCESS = 'LOAD_LIKED_POSTS_SUCCESS';
var LOAD_LIKED_POSTS_FAILURE = 'LOAD_LIKED_POSTS_FAILURE';
var LOAD_SPOST_REQUEST = 'LOAD_SPOST_REQUEST';
var LOAD_SPOST_SUCCESS = 'LOAD_SPOST_SUCCESS';
var LOAD_SPOST_FAILURE = 'LOAD_SPOST_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var LOAD_RENTAL_POST_REQUEST = 'LOAD_RENTAL_POST_REQUEST';
var LOAD_RENTAL_POST_SUCCESS = 'LOAD_RENTAL_POST_SUCCESS';
var LOAD_RENTAL_POST_FAILURE = 'LOAD_RENTAL_POST_FAILURE';
var LOAD_WRITE_POST_REQUEST = 'LOAD_WRITE_POST_REQUEST';
var LOAD_WRITE_POST_SUCCESS = 'LOAD_WRITE_POST_SUCCESS';
var LOAD_WRITE_POST_FAILURE = 'LOAD_WRITE_POST_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var UPDATE_TAG = 'UPDATE_TAG';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
}; // (이전상태,액션) => 다음상태

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
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
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
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
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
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
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
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
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
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
        draft.mainPosts.find(function (v) {
          return v.id === action.data.PostId;
        }).content = action.data.content;
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
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post2.Comments.unshift(action.data);

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

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
  usersInfo: {},
  signUpData: {},
  loginData: {}
};
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

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sendDummyPost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPost),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadSearchPost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rentalPost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(writePost),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadSPost),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(likePost),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlikePost),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uploadImages),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadUserPosts),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(RelatedPost),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadHashtagPosts),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadLikedPosts),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(modifyPost),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked20 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked21 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPost),
    _marked22 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLikePost),
    _marked23 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnLikePost),
    _marked24 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUploadImages),
    _marked25 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadSPost),
    _marked26 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadUserPosts),
    _marked27 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadHashtagPosts),
    _marked28 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchModifyPost),
    _marked29 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadRelatedPost),
    _marked30 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadLikedtagPosts),
    _marked31 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadRentalPost),
    _marked32 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadWritePost),
    _marked33 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadSearchPost),
    _marked34 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSendDummyPost),
    _marked35 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);






function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post', data); // formdata 전송
}

function addPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 빗슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            error: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10]]);
}

function sendDummyPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post/write', data); // formdata 전송
}

function sendDummyPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sendDummyPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(sendDummyPostAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 빗슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["SEND_DUMMYPOST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: result.data
          });

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["SEND_DUMMYPOST_FAILURE"],
            error: _context2.t0.response.data
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(data)); // delete는 데이터를 가져갈 수 없다 data는 postId
}

function removePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 빗슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            data: result.data
          });

        case 8:
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            error: _context3.t0.response.data
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

function loadPostAPI(data, lastId, boardNum) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/posts/".concat(encodeURIComponent(data), "/post?lastId=").concat(lastId || 0, "&boardNum=").concat(boardNum || 0)); // api 서버 요청은 /user/:userId/posts
}

function loadPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data, action.lastId, action.boardNum);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context4.next = 13;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_FAILURE"],
            error: _context4.t0.response.data
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

function loadSearchPostAPI(data, lastId, local) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/posts/".concat(encodeURIComponent(data), "/post?lastId=").concat(lastId || 0, "&local=").concat(local || "선택안함")); // api 서버 요청은 /user/:userId/posts
}

function loadSearchPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadSearchPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadSearchPostAPI, action.data, action.lastId, action.local);

        case 3:
          result = _context5.sent;
          _context5.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_SEARCH_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context5.next = 13;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_SEARCH_POSTS_FAILURE"],
            error: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 8]]);
}

function rentalPostAPI(data, lastId) {
  // 대상유저 id
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/posts/".concat(data, "/post?lastId=").concat(lastId || 0)); // api 서버 요청은 /user/:userId/posts
}

function rentalPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rentalPost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(rentalPostAPI, action.data, action.lastId);

        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_RENTAL_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context6.next = 13;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_RENTAL_POST_FAILURE"],
            error: _context6.t0.response.data
          });

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

function writePostAPI(data, lastId) {
  // 대상유저 id
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/posts/".concat(data, "/post?lastId=").concat(lastId || 0)); // api 서버 요청은 /user/:userId/posts
}

function writePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function writePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(writePostAPI, action.data, action.lastId);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_WRITE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_WRITE_POST_FAILURE"],
            error: _context7.t0.response.data
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function loadSPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/post/".concat(data));
}

function loadSPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadSPost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadSPostAPI, action.data);

        case 3:
          result = _context8.sent;
          _context8.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 빗슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_SPOST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context8.next = 12;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          _context8.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_SPOST_FAILURE"],
            error: _context8.t0.response.data
          });

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 8]]);
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/post/".concat(data, "/like"));
}

function likePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function likePost$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 빗슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_SUCCESS"],
            data: result.data // PostId,UserId

          });

        case 6:
          _context9.next = 12;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          _context9.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_FAILURE"],
            error: _context9.t0.response.data
          });

        case 12:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("/post/".concat(data, "/like"));
}

function unlikePost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlikePost$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context10.sent;
          _context10.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 빗슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_SUCCESS"],
            data: result.data // PostId,UserId

          });

        case 6:
          _context10.next = 12;
          break;

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          _context10.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_FAILURE"],
            error: _context10.t0.response.data
          });

        case 12:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10, null, [[0, 8]]);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context11.next = 13;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.error(_context11.t0);
          _context11.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            error: _context11.t0.response.data
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/post/images', data); // formdata는 { name: data } 같은 식으로 감싸버리면 json으로 자동 변환되버린다.
}

function uploadImages(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uploadImages$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);

        case 3:
          result = _context12.sent;
          _context12.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });

        case 6:
          _context12.next = 13;
          break;

        case 8:
          _context12.prev = 8;
          _context12.t0 = _context12["catch"](0);
          console.error(_context12.t0);
          _context12.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_FAILURE"],
            error: _context12.t0.response.data
          });

        case 13:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12, null, [[0, 8]]);
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/user/".concat(data, "/posts?lastId=").concat(lastId || 0)); // api 서버 요청은 /user/:userId/posts
}

function loadUserPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadUserPosts$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadUserPostsAPI, action.data, action.lastId);

        case 3:
          result = _context13.sent;
          _context13.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context13.next = 13;
          break;

        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          _context13.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_FAILURE"],
            error: _context13.t0.response.data
          });

        case 13:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13, null, [[0, 8]]);
}

function RelatedPostAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/posts/related?lastId=".concat(lastId || 0));
}

_c = RelatedPostAPI;

function RelatedPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function RelatedPost$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(RelatedPostAPI, action.data, action.lastId);

        case 3:
          result = _context14.sent;
          _context14.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_RELATED_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context14.next = 13;
          break;

        case 8:
          _context14.prev = 8;
          _context14.t0 = _context14["catch"](0);
          console.error(_context14.t0);
          _context14.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_RELATED_POST_FAILURE"],
            error: _context14.t0.response.data
          });

        case 13:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14, null, [[0, 8]]);
}

_c2 = RelatedPost;

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/hashtag/".concat(encodeURIComponent(data), "?lastId=").concat(lastId || 0));
}

function loadHashtagPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadHashtagPosts$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadHashtagPostsAPI, action.data, action.lastId);

        case 3:
          result = _context15.sent;
          _context15.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context15.next = 13;
          break;

        case 8:
          _context15.prev = 8;
          _context15.t0 = _context15["catch"](0);
          console.error(_context15.t0);
          _context15.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_FAILURE"],
            error: _context15.t0.response.data
          });

        case 13:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15, null, [[0, 8]]);
}

function loadLikedPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/liked?lastId=".concat(lastId || 0));
}

function loadLikedPosts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadLikedPosts$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadLikedPostsAPI, action.data, action.lastId);

        case 3:
          result = _context16.sent;
          _context16.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 비슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_LIKED_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context16.next = 13;
          break;

        case 8:
          _context16.prev = 8;
          _context16.t0 = _context16["catch"](0);
          console.error(_context16.t0);
          _context16.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_LIKED_POSTS_FAILURE"],
            error: _context16.t0.response.data
          });

        case 13:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16, null, [[0, 8]]);
}

function modifyPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/post/".concat(data.PostId), data);
}

function modifyPost(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function modifyPost$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(modifyPostAPI, action.data);

        case 3:
          result = _context17.sent;
          _context17.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            // put이 액션을 dispatch하는 역할과 빗슷하게 본다
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["MODIFY_POST_SUCCESS"],
            data: result.data // PostId,UserId

          });

        case 6:
          _context17.next = 12;
          break;

        case 8:
          _context17.prev = 8;
          _context17.t0 = _context17["catch"](0);
          _context17.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["MODIFY_POST_FAILURE"],
            error: _context17.t0.response.data
          });

        case 12:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17, null, [[0, 8]]);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function watchLoadPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPost$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"], loadPost);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function watchLikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikePost$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function watchUnLikePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnLikePost$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UNLIKE_POST_REQUEST"], unlikePost);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

function watchUploadImages() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUploadImages$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"], uploadImages);

        case 2:
        case "end":
          return _context24.stop();
      }
    }
  }, _marked24);
}

function watchLoadSPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadSPost$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_SPOST_REQUEST"], loadSPost);

        case 2:
        case "end":
          return _context25.stop();
      }
    }
  }, _marked25);
}

function watchLoadUserPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadUserPosts$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);

        case 2:
        case "end":
          return _context26.stop();
      }
    }
  }, _marked26);
}

function watchLoadHashtagPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadHashtagPosts$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);

        case 2:
        case "end":
          return _context27.stop();
      }
    }
  }, _marked27);
}

function watchModifyPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchModifyPost$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          _context28.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["MODIFY_POST_REQUEST"], modifyPost);

        case 2:
        case "end":
          return _context28.stop();
      }
    }
  }, _marked28);
}

function watchLoadRelatedPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadRelatedPost$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_RELATED_POST_REQUEST"], RelatedPost);

        case 2:
        case "end":
          return _context29.stop();
      }
    }
  }, _marked29);
}

function watchLoadLikedtagPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadLikedtagPosts$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          _context30.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_LIKED_POSTS_REQUEST"], loadLikedPosts);

        case 2:
        case "end":
          return _context30.stop();
      }
    }
  }, _marked30);
}

function watchLoadRentalPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadRentalPost$(_context31) {
    while (1) {
      switch (_context31.prev = _context31.next) {
        case 0:
          _context31.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_RENTAL_POST_REQUEST"], rentalPost);

        case 2:
        case "end":
          return _context31.stop();
      }
    }
  }, _marked31);
}

function watchLoadWritePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadWritePost$(_context32) {
    while (1) {
      switch (_context32.prev = _context32.next) {
        case 0:
          _context32.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_WRITE_POST_REQUEST"], writePost);

        case 2:
        case "end":
          return _context32.stop();
      }
    }
  }, _marked32);
}

function watchLoadSearchPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadSearchPost$(_context33) {
    while (1) {
      switch (_context33.prev = _context33.next) {
        case 0:
          _context33.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_SEARCH_POSTS_REQUEST"], loadSearchPost);

        case 2:
        case "end":
          return _context33.stop();
      }
    }
  }, _marked33);
}

function watchSendDummyPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSendDummyPost$(_context34) {
    while (1) {
      switch (_context34.prev = _context34.next) {
        case 0:
          _context34.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["SEND_DUMMYPOST_REQUEST"], sendDummyPost);

        case 2:
        case "end":
          return _context34.stop();
      }
    }
  }, _marked34);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context35) {
    while (1) {
      switch (_context35.prev = _context35.next) {
        case 0:
          _context35.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadSPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadRelatedPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadLikedtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchModifyPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadRentalPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadWritePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadSearchPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSendDummyPost)]);

        case 2:
        case "end":
          return _context35.stop();
      }
    }
  }, _marked35);
}

var _c, _c2;

$RefreshReg$(_c, "RelatedPostAPI");
$RefreshReg$(_c2, "RelatedPost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwib2JqZWN0X1RhZ3NEYXRhIiwidGFsZW50X1RhZ3NEYXRhIiwiY29vcGVyYXRlX3RhZ3NEYXRhIiwicGxheV90YWdzRGF0YSIsImxvY2FsIiwic2VsZWN0ZWRUYWciLCJjYXRlZ29yeSIsInNlYXJjaFJlc3VsdElkIiwic2luZ2xlUG9zdCIsImhhc01vcmVQb3N0Iiwic2VhcmNoUG9zdExvYWRpbmciLCJzZWFyY2hQb3N0RG9uZSIsInNlYXJjaFBvc3RFcnJvciIsImxvYWRQcm9maWxlUG9zdExvYWRpbmciLCJsb2FkUHJvZmlsZVBvc3REb25lIiwibG9hZFByb2ZpbGVQb3N0RXJyb3IiLCJ1cExvYWRJbWFnZXNMb2FkaW5nIiwidXBMb2FkSW1hZ2VzRG9uZSIsInVwTG9hZEltYWdlc0Vycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkU1Bvc3RMb2FkaW5nIiwibG9hZFNQb3N0RG9uZSIsImxvYWRTUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRVc2VyUG9zdHNMb2FkaW5nIiwibG9hZFVzZXJQb3N0c0RvbmUiLCJsb2FkVXNlclBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsIm1vZGlmeVBvc3RMb2FkaW5nIiwibW9kaWZ5UG9zdERvbmUiLCJtb2RpZnlQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiU0VORF9EVU1NWVBPU1RfUkVRVUVTVCIsIlNFTkRfRFVNTVlQT1NUX1NVQ0NFU1MiLCJTRU5EX0RVTU1ZUE9TVF9GQUlMVVJFIiwiTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCIsIkxPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFIiwiTU9ESUZZX1BPU1RfUkVRVUVTVCIsIk1PRElGWV9QT1NUX1NVQ0NFU1MiLCJNT0RJRllfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCIsIkxPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9TUE9TVF9SRVFVRVNUIiwiTE9BRF9TUE9TVF9TVUNDRVNTIiwiTE9BRF9TUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUIiwiTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTIiwiTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFIiwiTE9BRF9XUklURV9QT1NUX1JFUVVFU1QiLCJMT0FEX1dSSVRFX1BPU1RfU1VDQ0VTUyIsIkxPQURfV1JJVEVfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiVVBEQVRFX1RBRyIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsImJvYXJkX2JvYXJkbnVtIiwiYm9hcmROdW0iLCJmaWx0ZXIiLCJ2IiwiaSIsInBvc3QiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwidW5zaGlmdCIsImNvbnRlbnQiLCJDb21tZW50cyIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJsb2FkVXNlcnNMb2FkaW5nIiwibG9hZFVzZXJzRG9uZSIsImxvYWRVc2Vyc0Vycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJ1c2VySW5mbyIsIm1lIiwidXNlcnNJbmZvIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfVVNFUlNfUkVRVUVTVCIsIkxPQURfVVNFUlNfU1VDQ0VTUyIsIkxPQURfVVNFUlNfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIiwiUHJvZFBvc3RzIiwiUG93ZXJQb3N0cyIsIlRvZ2V0aGVyUG9zdHMiLCJQb3N0cyIsInNlbmREdW1teVBvc3QiLCJyZW1vdmVQb3N0IiwibG9hZFBvc3QiLCJsb2FkU2VhcmNoUG9zdCIsInJlbnRhbFBvc3QiLCJ3cml0ZVBvc3QiLCJsb2FkU1Bvc3QiLCJsaWtlUG9zdCIsInVubGlrZVBvc3QiLCJ1cGxvYWRJbWFnZXMiLCJsb2FkVXNlclBvc3RzIiwiUmVsYXRlZFBvc3QiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwibG9hZExpa2VkUG9zdHMiLCJtb2RpZnlQb3N0Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTG9hZFNQb3N0Iiwid2F0Y2hMb2FkVXNlclBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hNb2RpZnlQb3N0Iiwid2F0Y2hMb2FkUmVsYXRlZFBvc3QiLCJ3YXRjaExvYWRMaWtlZHRhZ1Bvc3RzIiwid2F0Y2hMb2FkUmVudGFsUG9zdCIsIndhdGNoTG9hZFdyaXRlUG9zdCIsIndhdGNoTG9hZFNlYXJjaFBvc3QiLCJ3YXRjaFNlbmREdW1teVBvc3QiLCJwb3N0U2FnYSIsImFkZFBvc3RBUEkiLCJheGlvcyIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJyZXNwb25zZSIsInNlbmREdW1teVBvc3RBUEkiLCJyZW1vdmVQb3N0QVBJIiwibG9hZFBvc3RBUEkiLCJsYXN0SWQiLCJnZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2FkU2VhcmNoUG9zdEFQSSIsInJlbnRhbFBvc3RBUEkiLCJ3cml0ZVBvc3RBUEkiLCJsb2FkU1Bvc3RBUEkiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwidW5saWtlUG9zdEFQSSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ1cGxvYWRJbWFnZXNBUEkiLCJsb2FkVXNlclBvc3RzQVBJIiwiUmVsYXRlZFBvc3RBUEkiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwibG9hZExpa2VkUG9zdHNBUEkiLCJtb2RpZnlQb3N0QVBJIiwidGFrZUxhdGVzdCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QXNCLEdBQUcsd0JBQS9CO0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsSUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsSUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsSUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsSUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsSUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsSUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsSUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsSUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsSUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsSUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsSUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsSUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsSUFBTUMsd0JB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LENBVEksRUFVUjBDLCtEQUFJLENBQUM5QyxlQUFELENBVkksRUFXUjhDLCtEQUFJLENBQUNyQyxlQUFELENBWEksRUFZUnFDLCtEQUFJLENBQUM3QyxlQUFELENBWkksRUFhUjZDLCtEQUFJLENBQUN6QyxpQkFBRCxDQWJJLEVBY1J5QywrREFBSSxDQUFDbEMsbUJBQUQsQ0FkSSxFQWVSa0MsK0RBQUksQ0FBQ2pDLGtCQUFELENBZkksRUFnQlJpQywrREFBSSxDQUFDaEMsbUJBQUQsQ0FoQkksRUFpQlJnQywrREFBSSxDQUFDL0Isa0JBQUQsQ0FqQkksQ0FBRCxDQUFUOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2EyYTY2ZjRhNzRkMjcwOTExYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBvYmplY3RfVGFnc0RhdGE6IFsn7KCE7LK0JywgJ+qzteq1rCcsXHJcbiAgICAn7J2Y66WYJyxcclxuICAgICfsoITsnpDquLDquLAnLFxyXG4gICAgJ+yEnOyggScsXHJcbiAgICAn6rKM7J6EL+y3qOuvuCcsXHJcbiAgICAn7LCo65+JJyxcclxuICAgICfsiqTtj6zsuKAv656Y7KCAJyxcclxuICAgICfrt7Dti7Av66+47JqpJyxcclxuICAgICfrsJjroKTrj5nrrLwnLFxyXG4gICAgJ+q4sO2DgCcsXSxcclxuICB0YWxlbnRfVGFnc0RhdGE6IFsn7KCE7LK0JywgJ+uvuOyIoCcsICfqtazstqknLCAn7ISk7LmYJywgJ+y9lOy5rScsICfstKzsmIEnLCAn7J287IaQJywgJ+q4sO2DgCddLFxyXG4gIGNvb3BlcmF0ZV90YWdzRGF0YTogWyfsoITssrQnLCAnMSsxJywgJ+uwsOuLrCcsICfqs7Xrj5nqtazrp6QnLCAn6riw7YOAJ10sXHJcbiAgcGxheV90YWdzRGF0YTogWyfsoITssrQnLCAn7KeI66y4JywgJ+yekOycoCddLFxyXG4gIGxvY2FsOiBudWxsLFxyXG4gIHNlbGVjdGVkVGFnOiBudWxsLFxyXG4gIGNhdGVnb3J5OiBudWxsLFxyXG4gIHNlYXJjaFJlc3VsdElkOiBudWxsLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3Q6IHRydWUsXHJcbiAgc2VhcmNoUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHNlYXJjaFBvc3REb25lOiBmYWxzZSxcclxuICBzZWFyY2hQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFByb2ZpbGVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFByb2ZpbGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFByb2ZpbGVQb3N0RXJyb3I6IG51bGwsXHJcbiAgdXBMb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBMb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFNQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFNQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFVzZXJQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlclBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgbW9kaWZ5UG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3REb25lOiBmYWxzZSxcclxuICBtb2RpZnlQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU0VORF9EVU1NWVBPU1RfUkVRVUVTVCA9ICdTRU5EX0RVTU1ZUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFTkRfRFVNTVlQT1NUX1NVQ0NFU1MgPSAnU0VORF9EVU1NWVBPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTRU5EX0RVTU1ZUE9TVF9GQUlMVVJFID0gJ1NFTkRfRFVNTVlQT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTID0gJ0xPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1NFQVJDSF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9SRVFVRVNUID0gJ01PRElGWV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfU1VDQ0VTUyA9ICdNT0RJRllfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX0ZBSUxVUkUgPSAnTU9ESUZZX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9SRUxBVEVEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfTElLRURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX1JFUVVFU1QgPSAnTE9BRF9TUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1NQT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9GQUlMVVJFID0gJ0xPQURfU1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUID0gJ0xPQURfUkVOVEFMX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfV1JJVEVfUE9TVF9SRVFVRVNUID0gJ0xPQURfV1JJVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfV1JJVEVfUE9TVF9TVUNDRVNTID0gJ0xPQURfV1JJVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfV1JJVEVfUE9TVF9GQUlMVVJFID0gJ0xPQURfV1JJVEVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVEFHID0gJ1VQREFURV9UQUcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCzslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhWzBdLmJvYXJkX2JvYXJkbnVtID09PSAxIHx8IDIgfHwgMyB8fCA0KSB7IC8vIOugjO2DiCDqsozsi5zrrLzsnbQg7IyT7J206rOgIOyeiOuKlOqyveyasFxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICB9IGVsc2UgeyAvLyDso7zsoJzqsIAg64uk66W4IOqyjOyLnOusvCDrjanslrTrpqzrpbwg6rCA7KC47JisIOqyveyasFxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9XUklURV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgaWYgKGFjdGlvbi5kYXRhWzBdLmJvYXJkTnVtID09PSA1IHx8IDYpIHsgLy8g66CM7YOIIOqyjOyLnOusvOydtCDsjJPsnbTqs6Ag7J6I64qU6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7IC8vIOyjvOygnOqwgCDri6Trpbgg6rKM7Iuc66y8IOuNqeyWtOumrOulvCDqsIDsoLjsmKwg6rK97JqwXHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIH1cclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIExPQURfV1JJVEVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVVBEQVRFX1RBRzpcclxuICAgICAgZHJhZnQuc2VsZWN0ZWRUYWcgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIC8vIGlmKGRyYWZ0Lm1haW5Qb3N0c1swXS5wb3N0X2NhdGVnb3J5ID09PSBhY3Rpb24uZGF0YVswXS5wb3N0X2NhdGVnb3J5IC8v7Lm07YWM6rOg66asICwg6rKM7Iuc7YyQ64SY67KEICwg7KeA7Jet7J20IOydvOy5mO2VoOuVjFxyXG4gICAgICAvLyAmJiBkcmFmdC5tYWluUG9zdHNbMF0ucG9zdF9ib2FyZE51bSA9PT0gYWN0aW9uLmRhdGFbMF0ucG9zdF9ib2FyZE51bVxyXG4gICAgICAvLyAmJiBkcmFmdC5tYWluUG9zdHNbMF0ucG9zdF9sb2NhdGlvbiA9PT0gYWN0aW9uLmRhdGFbMF0ucG9zdF9sb2NhdGlvbikge1xyXG4gICAgICAvLyAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAvLyAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNFTkRfRFVNTVlQT1NUX1JFUVVFU1Q6XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNFTkRfRFVNTVlQT1NUX1NVQ0NFU1M6XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTRU5EX0RVTU1ZUE9TVF9GQUlMVVJFOlxyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKS5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTU9ESUZZX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOuLpOuluCDsnbTsmqnsnpAg7KCV67O0IOuhnOuUqVxyXG4gIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuICBsb2FkVXNlcnNMb2FkaW5nOiBmYWxzZSwgLy8g7KCE7LK0IOydtOyaqeyekCDrpqzsiqTtirgg66Gc65SpXHJcbiAgbG9hZFVzZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFVzZXJzRXJyb3I6IG51bGwsXHJcbiAgbG9hZE15SW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDrgrTsoJXrs7Qg66Gc65SpIOyLnOuPhOykkVxyXG4gIGxvYWRNeUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgdXNlckluZm86IG51bGwsXHJcbiAgbWU6IG51bGwsXHJcbiAgdXNlcnNJbmZvOiB7fSxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19SRVFVRVNUID0gJ0xPQURfVVNFUlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfRkFJTFVSRSA9ICdMT0FEX1VTRVJTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpID0+ICh7XHJcbiAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG59KTtcclxuXHJcbi8vICjsnbTsoITsg4Htg5ws7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfVVNFUlNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFVzZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2Vyc0luZm8gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1VTRVJTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGlmKGFjdGlvbi5kYXRhLmJvYXJkTnVtPT09MXx8Mikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMS8yXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZHJhZnQubWUpO1xyXG4gICAgICAgIGRyYWZ0Lm1lLlByb2RQb3N0cy5wdXNoKHtpZDphY3Rpb24uZGF0YS5pZH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoYWN0aW9uLmRhdGEuYm9hcmROdW09PT0zfHw0KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjMvNFwiKTtcclxuICAgICAgICBkcmFmdC5tZS5Qb3dlclBvc3RzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5pZH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYoYWN0aW9uLmRhdGEuYm9hcmROdW09PT01KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjVcIik7XHJcbiAgICAgICAgZHJhZnQubWUuVG9nZXRoZXJQb3N0cy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuaWR9KTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7YWxsLCBjYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3R9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgQUREX1BPU1RfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULFxyXG4gIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFLFxyXG4gIExPQURfTElLRURfUE9TVFNfUkVRVUVTVCxcclxuICBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSxcclxuICBMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNULFxyXG4gIExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfUkVOVEFMX1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1JFTlRBTF9QT1NUX1NVQ0NFU1MsIExPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUsIExPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QsIExPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9TUE9TVF9GQUlMVVJFLFxyXG4gIExPQURfU1BPU1RfUkVRVUVTVCxcclxuICBMT0FEX1NQT1NUX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgTE9BRF9XUklURV9QT1NUX0ZBSUxVUkUsXHJcbiAgTE9BRF9XUklURV9QT1NUX1JFUVVFU1QsXHJcbiAgTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MsXHJcbiAgTU9ESUZZX1BPU1RfRkFJTFVSRSxcclxuICBNT0RJRllfUE9TVF9SRVFVRVNULFxyXG4gIE1PRElGWV9QT1NUX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFNFTkRfRFVNTVlQT1NUX0ZBSUxVUkUsIFNFTkRfRFVNTVlQT1NUX1JFUVVFU1QsIFNFTkRfRFVNTVlQT1NUX1NVQ0NFU1MsXHJcbiAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7QUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpOyAvLyBmb3JtZGF0YSDsoITshqFcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmREdW1teVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC93cml0ZScsIGRhdGEpOyAvLyBmb3JtZGF0YSDsoITshqFcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlbmREdW1teVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2VuZER1bW15UG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRU5EX0RVTU1ZUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTsgLy8gZGVsZXRl64qUIOuNsOydtO2EsOulvCDqsIDsoLjqsIgg7IiYIOyXhuuLpCBkYXRh64qUIHBvc3RJZFxyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruZfsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSwgbGFzdElkICwgYm9hcmROdW0pIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHMvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9L3Bvc3Q/bGFzdElkPSR7bGFzdElkIHx8IDB9JmJvYXJkTnVtPSR7Ym9hcmROdW0gfHwgMH1gKTsgLy8gYXBpIOyEnOuyhCDsmpTssq3snYAgL3VzZXIvOnVzZXJJZC9wb3N0c1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkICwgYWN0aW9uLmJvYXJkTnVtKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkU2VhcmNoUG9zdEFQSShkYXRhLCBsYXN0SWQgLCBsb2NhbCkge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0vcG9zdD9sYXN0SWQ9JHtsYXN0SWQgfHwgMH0mbG9jYWw9JHtsb2NhbCB8fCBcIuyEoO2DneyViO2VqFwifWApOyAvLyBhcGkg7ISc67KEIOyalOyyreydgCAvdXNlci86dXNlcklkL3Bvc3RzXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkU2VhcmNoUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkU2VhcmNoUG9zdEFQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQgLCBhY3Rpb24ubG9jYWwpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW50YWxQb3N0QVBJKGRhdGEsIGxhc3RJZCkgeyAvLyDrjIDsg4HsnKDsoIAgaWRcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHMvJHsoZGF0YSl9L3Bvc3Q/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vIGFwaSDshJzrsoQg7JqU7LKt7J2AIC91c2VyLzp1c2VySWQvcG9zdHNcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbnRhbFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVudGFsUG9zdEFQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQgKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyaXRlUG9zdEFQSShkYXRhLCBsYXN0SWQpIHsgLy8g64yA7IOB7Jyg7KCAIGlkXHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzLyR7KGRhdGEpfS9wb3N0P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvLyBhcGkg7ISc67KEIOyalOyyreydgCAvdXNlci86dXNlcklkL3Bvc3RzXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3cml0ZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwod3JpdGVQb3N0QVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCApO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1dSSVRFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfV1JJVEVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRTUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFNQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRTUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMT0FEX1NQT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1NQT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIC8vIFBvc3RJZCxVc2VySWRcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5l+yKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIC8vIFBvc3RJZCxVc2VySWRcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG5cclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTsgLy8gZm9ybWRhdGHripQgeyBuYW1lOiBkYXRhIH0g6rCZ7J2AIOyLneycvOuhnCDqsJDsi7jrsoTrpqzrqbQganNvbuycvOuhnCDsnpDrj5kg67OA7ZmY65CY67KE66aw64ukLlxyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mE7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFVzZXJQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApOyAvLyBhcGkg7ISc67KEIOyalOyyreydgCAvdXNlci86dXNlcklkL3Bvc3RzXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlclBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBSZWxhdGVkUG9zdEFQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHMvcmVsYXRlZD9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIFJlbGF0ZWRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFJlbGF0ZWRQb3N0QVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRIYXNodGFnUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2hhc2h0YWcvJHtlbmNvZGVVUklDb21wb25lbnQoZGF0YSl9P2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEhhc2h0YWdQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkSGFzaHRhZ1Bvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICB5aWVsZCBwdXQoeyAvLyBwdXTsnbQg7JWh7IWY7J2EIGRpc3BhdGNo7ZWY64qUIOyXre2VoOqzvCDruYTsirftlZjqsowg67O464ukXHJcbiAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZExpa2VkUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChgL2xpa2VkP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZExpa2VkUG9zdHMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZExpa2VkUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgIHlpZWxkIHB1dCh7IC8vIHB1dOydtCDslaHshZjsnYQgZGlzcGF0Y2jtlZjripQg7Jet7ZWg6rO8IOu5hOyKt+2VmOqyjCDrs7jri6RcclxuICAgICAgdHlwZTogTE9BRF9MSUtFRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhLlBvc3RJZH1gLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIG1vZGlmeVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobW9kaWZ5UG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHsgLy8gcHV07J20IOyVoeyFmOydhCBkaXNwYXRjaO2VmOuKlCDsl63tlaDqs7wg67mX7Iq37ZWY6rKMIOuzuOuLpFxyXG4gICAgICB0eXBlOiBNT0RJRllfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSwgLy8gUG9zdElkLFVzZXJJZFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBNT0RJRllfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoIExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5MaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRTUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfU1BPU1RfUkVRVUVTVCwgbG9hZFNQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTW9kaWZ5UG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KE1PRElGWV9QT1NUX1JFUVVFU1QsIG1vZGlmeVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUmVsYXRlZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNULCBSZWxhdGVkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRMaWtlZHRhZ1Bvc3RzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNULCBsb2FkTGlrZWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRSZW50YWxQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9SRU5UQUxfUE9TVF9SRVFVRVNULCByZW50YWxQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFdyaXRlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfV1JJVEVfUE9TVF9SRVFVRVNULCB3cml0ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkU2VhcmNoUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QsIGxvYWRTZWFyY2hQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2VuZER1bW15UG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFTkRfRFVNTVlQT1NUX1JFUVVFU1QsIHNlbmREdW1teVBvc3QpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkU1Bvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUmVsYXRlZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRMaWtlZHRhZ1Bvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkVXNlclBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTW9kaWZ5UG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUmVudGFsUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFdyaXRlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFNlYXJjaFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFNlbmREdW1teVBvc3QpLFxyXG4gIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=