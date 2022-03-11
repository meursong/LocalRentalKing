webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, UPDATE_SEARCH, UPDATE_BOARD, LOAD_CHANGE_TAG_REQUEST, LOAD_CHANGE_TAG_SUCCESS, LOAD_CHANGE_TAG_FAILURE, SEND_DUMMYPOST_REQUEST, SEND_DUMMYPOST_SUCCESS, SEND_DUMMYPOST_FAILURE, LOAD_SEARCH_POSTS_REQUEST, LOAD_SEARCH_POSTS_SUCCESS, LOAD_SEARCH_POSTS_FAILURE, MODIFY_POST_REQUEST, MODIFY_POST_SUCCESS, MODIFY_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_RELATED_POST_REQUEST, LOAD_RELATED_POST_SUCCESS, LOAD_RELATED_POST_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_LIKED_POSTS_REQUEST, LOAD_LIKED_POSTS_SUCCESS, LOAD_LIKED_POSTS_FAILURE, LOAD_SPOST_REQUEST, LOAD_SPOST_SUCCESS, LOAD_SPOST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_RENTAL_POST_REQUEST, LOAD_RENTAL_POST_SUCCESS, LOAD_RENTAL_POST_FAILURE, LOAD_WRITE_POST_REQUEST, LOAD_WRITE_POST_SUCCESS, LOAD_WRITE_POST_FAILURE, REMOVE_IMAGE, UPDATE_TAG, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SEARCH", function() { return UPDATE_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BOARD", function() { return UPDATE_BOARD; });
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
  boardNum: null,
  search: null,
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
var UPDATE_SEARCH = 'UPDATE_SEARCH';
var UPDATE_BOARD = 'UPDATE_BOARD';
var LOAD_CHANGE_TAG_REQUEST = 'LOAD_CHANGE_TAG_REQUEST';
var LOAD_CHANGE_TAG_SUCCESS = 'LOAD_CHANGE_TAG_SUCCESS';
var LOAD_CHANGE_TAG_FAILURE = 'LOAD_CHANGE_TAG_FAILURE';
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
      case UPDATE_BOARD:
        draft.boardNum = action.data;
        break;

      case UPDATE_SEARCH:
        console.log(action.data);
        draft.search = action.data.search;
        draft.select = action.data.select;
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
        draft.hasMorePost = true;
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
        if (draft.mainPosts.length > 0) {
          // SSR로 처음에 들고오는 경우가 아닐때
          if (draft.mainPosts[0].category !== action.data[0].category //카테고리 , 지역이 일치하지 않을때
          && draft.mainPosts[0].location !== action.data[0].location) {
            draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.
            // draft.mainPosts = draft.mainPosts.concat(action.data);
          } else {
            draft.mainPosts = draft.mainPosts.concat(action.data); // 같은속성의 게시물을 쌓고있는 경우
          }
        } else {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwib2JqZWN0X1RhZ3NEYXRhIiwidGFsZW50X1RhZ3NEYXRhIiwiY29vcGVyYXRlX3RhZ3NEYXRhIiwicGxheV90YWdzRGF0YSIsImJvYXJkTnVtIiwic2VhcmNoIiwic2VsZWN0Iiwic2VsZWN0ZWRUYWciLCJjYXRlZ29yeSIsInNlYXJjaFJlc3VsdElkIiwic2luZ2xlUG9zdCIsImhhc01vcmVQb3N0Iiwic2VhcmNoUG9zdExvYWRpbmciLCJzZWFyY2hQb3N0RG9uZSIsInNlYXJjaFBvc3RFcnJvciIsImxvYWRQcm9maWxlUG9zdExvYWRpbmciLCJsb2FkUHJvZmlsZVBvc3REb25lIiwibG9hZFByb2ZpbGVQb3N0RXJyb3IiLCJ1cExvYWRJbWFnZXNMb2FkaW5nIiwidXBMb2FkSW1hZ2VzRG9uZSIsInVwTG9hZEltYWdlc0Vycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkU1Bvc3RMb2FkaW5nIiwibG9hZFNQb3N0RG9uZSIsImxvYWRTUG9zdEVycm9yIiwibG9hZFBvc3RMb2FkaW5nIiwibG9hZFBvc3REb25lIiwibG9hZFBvc3RFcnJvciIsImxvYWRVc2VyUG9zdHNMb2FkaW5nIiwibG9hZFVzZXJQb3N0c0RvbmUiLCJsb2FkVXNlclBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsIm1vZGlmeVBvc3RMb2FkaW5nIiwibW9kaWZ5UG9zdERvbmUiLCJtb2RpZnlQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiVVBEQVRFX1NFQVJDSCIsIlVQREFURV9CT0FSRCIsIkxPQURfQ0hBTkdFX1RBR19SRVFVRVNUIiwiTE9BRF9DSEFOR0VfVEFHX1NVQ0NFU1MiLCJMT0FEX0NIQU5HRV9UQUdfRkFJTFVSRSIsIlNFTkRfRFVNTVlQT1NUX1JFUVVFU1QiLCJTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTIiwiU0VORF9EVU1NWVBPU1RfRkFJTFVSRSIsIkxPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTIiwiTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRSIsIk1PRElGWV9QT1NUX1JFUVVFU1QiLCJNT0RJRllfUE9TVF9TVUNDRVNTIiwiTU9ESUZZX1BPU1RfRkFJTFVSRSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTIiwiTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSIsIkxPQURfVVNFUl9QT1NUU19SRVFVRVNUIiwiTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSIsIkxPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSIsIkxPQURfTElLRURfUE9TVFNfUkVRVUVTVCIsIkxPQURfTElLRURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfTElLRURfUE9TVFNfRkFJTFVSRSIsIkxPQURfU1BPU1RfUkVRVUVTVCIsIkxPQURfU1BPU1RfU1VDQ0VTUyIsIkxPQURfU1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkxPQURfUkVOVEFMX1BPU1RfUkVRVUVTVCIsIkxPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUyIsIkxPQURfUkVOVEFMX1BPU1RfRkFJTFVSRSIsIkxPQURfV1JJVEVfUE9TVF9SRVFVRVNUIiwiTE9BRF9XUklURV9QT1NUX1NVQ0NFU1MiLCJMT0FEX1dSSVRFX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsIlVQREFURV9UQUciLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiY29uY2F0IiwibGVuZ3RoIiwiYm9hcmRfYm9hcmRudW0iLCJmaWx0ZXIiLCJ2IiwiaSIsInBvc3QiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwibG9jYXRpb24iLCJ1bnNoaWZ0IiwiY29udGVudCIsIkNvbW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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R0FBRyxjQUFyQjtBQUVBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUNBLElBQU1DLHNCQUFzQixHQUFHLHdCQUEvQjtBQUVBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUVBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLElBQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLElBQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUVBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLElBQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUVBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLHVCQUF1QixH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S0FBMUI7QUFDQXFFLGVBQUssQ0FBQ3BFLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTtBQUNEOztBQUNELFdBQUttRCxtQkFBTDtBQUNFaUIsYUFBSyxDQUFDckUsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQXFFLGFBQUssQ0FBQ25FLGVBQU4sR0FBd0JpRSxNQUFNLENBQUNLLEtBQS9CO0FBQ0E7O0FBQ0Y7QUFDRTtBQXBQSjtBQXNQRCxHQXZQd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUF5UGVQLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTA4NGYyMWYxMWFiOWVkMzE4NzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBvYmplY3RfVGFnc0RhdGE6IFsn7KCE7LK0JywgJ+qzteq1rCcsXHJcbiAgICAn7J2Y66WYJyxcclxuICAgICfsoITsnpDquLDquLAnLFxyXG4gICAgJ+yEnOyggScsXHJcbiAgICAn6rKM7J6EL+y3qOuvuCcsXHJcbiAgICAn7LCo65+JJyxcclxuICAgICfsiqTtj6zsuKAv656Y7KCAJyxcclxuICAgICfrt7Dti7Av66+47JqpJyxcclxuICAgICfrsJjroKTrj5nrrLwnLFxyXG4gICAgJ+q4sO2DgCcsXSxcclxuICB0YWxlbnRfVGFnc0RhdGE6IFsn7KCE7LK0JywgJ+uvuOyIoCcsICfqtazstqknLCAn7ISk7LmYJywgJ+y9lOy5rScsICfstKzsmIEnLCAn7J287IaQJywgJ+q4sO2DgCddLFxyXG4gIGNvb3BlcmF0ZV90YWdzRGF0YTogWyfsoITssrQnLCAnMSsxJywgJ+uwsOuLrCcsICfqs7Xrj5nqtazrp6QnLCAn6riw7YOAJ10sXHJcbiAgcGxheV90YWdzRGF0YTogWyfsoITssrQnLCAn7KeI66y4JywgJ+yekOycoCddLFxyXG4gIGJvYXJkTnVtOm51bGwsXHJcbiAgc2VhcmNoOm51bGwsXHJcbiAgc2VsZWN0Om51bGwsXHJcbiAgc2VsZWN0ZWRUYWc6IG51bGwsXHJcbiAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgc2VhcmNoUmVzdWx0SWQ6IG51bGwsXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBoYXNNb3JlUG9zdDogdHJ1ZSxcclxuICBzZWFyY2hQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgc2VhcmNoUG9zdERvbmU6IGZhbHNlLFxyXG4gIHNlYXJjaFBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUHJvZmlsZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUHJvZmlsZVBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUHJvZmlsZVBvc3RFcnJvcjogbnVsbCxcclxuICB1cExvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICB1cExvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICB1cExvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkU1Bvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkU1Bvc3REb25lOiBmYWxzZSxcclxuICBsb2FkU1Bvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICBsb2FkVXNlclBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFVzZXJQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRVc2VyUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBtb2RpZnlQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbW9kaWZ5UG9zdERvbmU6IGZhbHNlLFxyXG4gIG1vZGlmeVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0VBUkNIID0gJ1VQREFURV9TRUFSQ0gnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0JPQVJEID0gJ1VQREFURV9CT0FSRCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9DSEFOR0VfVEFHX1JFUVVFU1QgPSAnTE9BRF9DSEFOR0VfVEFHX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DSEFOR0VfVEFHX1NVQ0NFU1MgPSAnTE9BRF9DSEFOR0VfVEFHX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9DSEFOR0VfVEFHX0ZBSUxVUkUgPSAnTE9BRF9DSEFOR0VfVEFHX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTkRfRFVNTVlQT1NUX1JFUVVFU1QgPSAnU0VORF9EVU1NWVBPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTRU5EX0RVTU1ZUE9TVF9TVUNDRVNTID0gJ1NFTkRfRFVNTVlQT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VORF9EVU1NWVBPU1RfRkFJTFVSRSA9ICdTRU5EX0RVTU1ZUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1NFQVJDSF9QT1NUU19SRVFVRVNUID0gJ0xPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9TRUFSQ0hfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1NFQVJDSF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9TRUFSQ0hfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTU9ESUZZX1BPU1RfUkVRVUVTVCA9ICdNT0RJRllfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IE1PRElGWV9QT1NUX1NVQ0NFU1MgPSAnTU9ESUZZX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBNT0RJRllfUE9TVF9GQUlMVVJFID0gJ01PRElGWV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUkVMQVRFRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRUxBVEVEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1JFTEFURURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUkVMQVRFRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9SRUxBVEVEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJS0VEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTElLRURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfTElLRURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9TUE9TVF9SRVFVRVNUID0gJ0xPQURfU1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1NQT1NUX1NVQ0NFU1MgPSAnTE9BRF9TUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfU1BPU1RfRkFJTFVSRSA9ICdMT0FEX1NQT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUkVOVEFMX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1JFTlRBTF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTID0gJ0xPQURfUkVOVEFMX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1JFTlRBTF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1dSSVRFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1dSSVRFX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1dSSVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1dSSVRFX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1dSSVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1RBRyA9ICdVUERBVEVfVEFHJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbi8vICjsnbTsoITsg4Htg5ws7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFVQREFURV9CT0FSRDpcclxuICAgICAgZHJhZnQuYm9hcmROdW0gPSBhY3Rpb24uZGF0YTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQREFURV9TRUFSQ0g6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuc2VhcmNoID0gYWN0aW9uLmRhdGEuc2VhcmNoO1xyXG4gICAgICBkcmFmdC5zZWxlY3QgPSBhY3Rpb24uZGF0YS5zZWxlY3Q7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0NIQU5HRV9UQUdfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9DSEFOR0VfVEFHX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhOyAvLyDquLDsobQg67Cw7Je0IOuwgOyWtOuyhOumrOqzoCDsg4jroa3qsowgMTDqsJzslKkg64Sj64qU64ukLlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfQ0hBTkdFX1RBR19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU0VBUkNIX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU0VBUkNIX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zZWFyY2hQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU0VBUkNIX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNlYXJjaFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQuc2VhcmNoUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUkVOVEFMX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9SRU5UQUxfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGlmIChhY3Rpb24uZGF0YVswXS5ib2FyZF9ib2FyZG51bSA9PT0gMSB8fCAyIHx8IDMgfHwgNCkgeyAvLyDroIztg4gg6rKM7Iuc66y87J20IOyMk+ydtOqzoCDsnojripTqsr3smrBcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgfSBlbHNlIHsgLy8g7KO87KCc6rCAIOuLpOuluCDqsozsi5zrrLwg642p7Ja066as66W8IOqwgOyguOyYrCDqsr3smrBcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgfVxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTE9BRF9SRU5UQUxfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9XUklURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUHJvZmlsZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfV1JJVEVfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGlmIChhY3Rpb24uZGF0YVswXS5ib2FyZE51bSA9PT0gNSB8fCA2KSB7IC8vIOugjO2DiCDqsozsi5zrrLzsnbQg7IyT7J206rOgIOyeiOuKlOqyveyasFxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICB9IGVsc2UgeyAvLyDso7zsoJzqsIAg64uk66W4IOqyjOyLnOusvCDrjanslrTrpqzrpbwg6rCA7KC47JisIOqyveyasFxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICB9XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBMT0FEX1dSSVRFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFByb2ZpbGVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmxvYWRQcm9maWxlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQREFURV9UQUc6XHJcbiAgICAgIGRyYWZ0LnNlbGVjdGVkVGFnID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0ID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudXBMb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVwTG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC51cExvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0Lkxpa2Vycy5wdXNoKHtpZDogYWN0aW9uLmRhdGEuVXNlcklkfSk7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX1NQT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfU1BPU1RfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRTUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9TUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkU1Bvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgZHJhZnQubG9hZFNQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9SRVFVRVNUOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0xJS0VEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfUkVMQVRFRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcclxuICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGlmIChkcmFmdC5tYWluUG9zdHMubGVuZ3RoID4gMCkgeyAvLyBTU1LroZwg7LKY7J2M7JeQIOuTpOqzoOyYpOuKlCDqsr3smrDqsIAg7JWE64uQ65WMXHJcbiAgICAgICAgaWYgKGRyYWZ0Lm1haW5Qb3N0c1swXS5jYXRlZ29yeSAhPT0gYWN0aW9uLmRhdGFbMF0uY2F0ZWdvcnkgLy/subTthYzqs6DrpqwgLCDsp4Dsl63snbQg7J287LmY7ZWY7KeAIOyViuydhOuVjFxyXG4gICAgICAgICAgJiYgZHJhZnQubWFpblBvc3RzWzBdLmxvY2F0aW9uICE9PSBhY3Rpb24uZGF0YVswXS5sb2NhdGlvbikge1xyXG4gICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7IC8vIOq4sOyhtCDrsLDsl7Qg67CA7Ja067KE66as6rOgIOyDiOuhreqyjCAxMOqwnOyUqSDrhKPripTri6QuXHJcbiAgICAgICAgICAvLyBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7IC8vIOqwmeydgOyGjeyEseydmCDqsozsi5zrrLzsnYQg7IyT6rOg7J6I64qUIOqyveyasFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTsgLy8gU1NS66GcIOyymOydjOyXkCDrk6Tqs6DsmKzrlYxcclxuICAgICAgfVxyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9MSUtFRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX1JFTEFURURfUE9TVF9GQUlMVVJFOlxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNFTkRfRFVNTVlQT1NUX1JFUVVFU1Q6XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFNFTkRfRFVNTVlQT1NUX1NVQ0NFU1M6XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTRU5EX0RVTU1ZUE9TVF9GQUlMVVJFOlxyXG4gICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1vZGlmeVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBNT0RJRllfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKS5jb250ZW50ID0gYWN0aW9uLmRhdGEuY29udGVudDtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTU9ESUZZX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubW9kaWZ5UG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBkcmFmdC5tb2RpZnlQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9