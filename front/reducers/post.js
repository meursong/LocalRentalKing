import produce from "immer";

export const initialState = {
  mainPosts: [],
  searchPosts: [],
  imagePaths: [],
  mainTalks: [],
  talkUsers: [],
  object_TagsData: [
    "전체",
    "공구",
    "의류",
    "전자기기",
    "서적",
    "게임/취미",
    "차량",
    "스포츠/래저",
    "뷰티/미용",
    "반려동물",
    "기타",
  ],
  talent_TagsData: [
    "전체",
    "미술",
    "구충",
    "설치",
    "코칭",
    "촬영",
    "일손",
    "기타",
  ],
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
  addCommentError: null,
};

export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const UPDATE_BOARD = "UPDATE_BOARD";

export const UPDATE_CHANGE_TAG_REQUEST = "UPDATE_CHANGE_TAG_REQUEST";

export const LOAD_CHANGE_TAG_REQUEST = "LOAD_CHANGE_TAG_REQUEST";
export const LOAD_CHANGE_TAG_SUCCESS = "LOAD_CHANGE_TAG_SUCCESS";
export const LOAD_CHANGE_TAG_FAILURE = "LOAD_CHANGE_TAG_FAILURE";

export const SEND_DUMMYPOST_REQUEST = "SEND_DUMMYPOST_REQUEST";
export const SEND_DUMMYPOST_SUCCESS = "SEND_DUMMYPOST_SUCCESS";
export const SEND_DUMMYPOST_FAILURE = "SEND_DUMMYPOST_FAILURE";

export const LOAD_SEARCH_POSTS_REQUEST = "LOAD_SEARCH_POSTS_REQUEST";
export const LOAD_SEARCH_POSTS_SUCCESS = "LOAD_SEARCH_POSTS_SUCCESS";
export const LOAD_SEARCH_POSTS_FAILURE = "LOAD_SEARCH_POSTS_FAILURE";

export const MODIFY_POST_REQUEST = "MODIFY_POST_REQUEST";
export const MODIFY_POST_SUCCESS = "MODIFY_POST_SUCCESS";
export const MODIFY_POST_FAILURE = "MODIFY_POST_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

export const LOAD_RELATED_POST_REQUEST = "LOAD_RELATED_POST_REQUEST";
export const LOAD_RELATED_POST_SUCCESS = "LOAD_RELATED_POST_SUCCESS";
export const LOAD_RELATED_POST_FAILURE = "LOAD_RELATED_POST_FAILURE";

export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";

export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

export const LOAD_LIKED_POSTS_REQUEST = "LOAD_LIKED_POSTS_REQUEST";
export const LOAD_LIKED_POSTS_SUCCESS = "LOAD_LIKED_POSTS_SUCCESS";
export const LOAD_LIKED_POSTS_FAILURE = "LOAD_LIKED_POSTS_FAILURE";

export const LOAD_SPOST_REQUEST = "LOAD_SPOST_REQUEST";
export const LOAD_SPOST_SUCCESS = "LOAD_SPOST_SUCCESS";
export const LOAD_SPOST_FAILURE = "LOAD_SPOST_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const STATUS_POST_REQUEST = "STATUS_POST_REQUEST";
export const STATUS_POST_SUCCESS = "STATUS_POST_SUCCESS";
export const STATUS_POST_FAILURE = "STATUS_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const LOAD_RENTAL_POST_REQUEST = "LOAD_RENTAL_POST_REQUEST";
export const LOAD_RENTAL_POST_SUCCESS = "LOAD_RENTAL_POST_SUCCESS";
export const LOAD_RENTAL_POST_FAILURE = "LOAD_RENTAL_POST_FAILURE";

export const LOAD_WRITE_POST_REQUEST = "LOAD_WRITE_POST_REQUEST";
export const LOAD_WRITE_POST_SUCCESS = "LOAD_WRITE_POST_SUCCESS";
export const LOAD_WRITE_POST_FAILURE = "LOAD_WRITE_POST_FAILURE";

export const LOAD_SCHANGE_TAG_REQUEST = "LOAD_SCHANGE_TAG_REQUEST";
export const LOAD_SCHANGE_TAG_SUCCESS = "LOAD_SCHANGE_TAG_SUCCESS";
export const LOAD_SCHANGE_TAG_FAILURE = "LOAD_SCHANGE_TAG_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const UPDATE_TAG = "UPDATE_TAG";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

// (이전상태,액션) => 다음상태
<<<<<<< HEAD
const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
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
        draft.searchPosts = draft.mainPosts.filter(
          (v) => v.category === action.data
        );
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
      case LOAD_RENTAL_POST_SUCCESS: {
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
      case LOAD_WRITE_POST_SUCCESS: {
        if (action.data[0].boardNum === 5 || 6) {
          // 렌탈 게시물이 쌓이고 있는경우
          draft.mainPosts = draft.mainPosts.concat(action.data);
        } else {
          // 주제가 다른 게시물 덩어리를 가져올 경우
          draft.mainPosts = action.data;
=======
const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case UPDATE_BOARD:
      draft.boardNum = action.data;
      draft.mainPosts.length = 0 ;
      draft.imagePaths.length = 0;
      draft.searchPostLoading= false;
      draft.searchPostDone= false;
      draft.searchPostError= null;
      draft.loadProfilePostLoading= false;
      draft.loadProfilePostDone= false;
      draft.loadProfilePostError= null;
      draft.upLoadImagesLoading= false;
      draft.upLoadImagesDone= false;
      draft.upLoadImagesError= null;
      draft.likePostLoading= false;
      draft.likePostDone= false;
      draft.likePostError= null;
      draft.unlikePostLoading= false;
      draft.unlikePostDone= false;
      draft.unlikePostError= null;
      draft.loadSPostLoading= false;
      draft.loadSPostDone=false;
      draft.loadSPostError= null;
      draft.loadPostLoading= false;
      draft.loadPostDone= false;
      draft.loadPostError= null;
      draft.loadUserPostsLoading= false;
      draft.loadUserPostsDone= false;
      draft.loadUserPostsError= null;
      draft.addPostLoading= false;
      draft.addPostDone= false;
      draft.addPostError= null;
      draft.removePostLoading= false;
      draft.removePostDone= false;
      draft.removePostError= null;
      draft.modifyPostLoading= false;
      draft.modifyPostDone= false;
      draft.modifyPostError= null;
      draft.addCommentLoading= false;
      draft.addCommentDone= false;
      draft.addCommentError= null;
      break;
    case UPDATE_CHANGE_TAG_REQUEST:
      draft.searchPosts = draft.mainPosts.filter((v) => v.category === action.data);
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
      draft.hasMorePost = true;
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
    case LOAD_RENTAL_POST_SUCCESS: {
      if (action.data[0].board_boardnum === 1 || 2 || 3 || 4) { // 렌탈 게시물이 쌓이고 있는경우
        draft.mainPosts = draft.mainPosts.concat(action.data);
      } else { // 주제가 다른 게시물 덩어리를 가져올 경우
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
    case LOAD_WRITE_POST_SUCCESS: {
      if (action.data[0].boardNum === 5 || 6) { // 렌탈 게시물이 쌓이고 있는경우
        draft.mainPosts = draft.mainPosts.concat(action.data);
      } else { // 주제가 다른 게시물 덩어리를 가져올 경우
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
    case UPLOAD_IMAGES_SUCCESS: {
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
    case LIKE_POST_SUCCESS: {
      const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
      post.Likers.push({id: action.data.UserId});
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
    case UNLIKE_POST_SUCCESS: {
      const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
      post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
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
      if(action.data.boardNum ===1 || action.data.boardNum ===2){
        const totalPath = action.data.ProdPostImages.map((v)=> draft.imagePaths.concat(v.src.toString()));
        for (let i = 0; i < totalPath.length; i++) {
          draft.imagePaths=draft.imagePaths.concat(totalPath[i][0]);
        }
      } else if(action.data.boardNum === 3 || action.data.boardNum ===4){
        const totalPath = action.data.PowerPostImages.map((v)=> draft.imagePaths.concat(v.src.toString()));
        for (let i = 0; i < totalPath.length; i++) {
          draft.imagePaths=draft.imagePaths.concat(totalPath[i][0]);
        }
      } else if(action.data.boardNum === 5){
        const totalPath = action.data.TogetherPostImages.map((v)=> draft.imagePaths.concat(v.src.toString()));
        for (let i = 0; i < totalPath.length; i++) {
          draft.imagePaths=draft.imagePaths.concat(totalPath[i][0]);
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
      draft.mainPosts = draft.mainPosts.concat(action.data); // 같은속성의 게시물을 쌓고있는 경우
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
      draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
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
        if(draft.mainPosts[i].id == action.data.id){
          draft.mainPosts = draft.mainPosts(i,1,action.data);
>>>>>>> 784189f3ec8b510e0cde9460e6425d5fdadc39c7
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
      case UPLOAD_IMAGES_SUCCESS: {
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
      case LIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers.push({ id: action.data.UserId });
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
      case UNLIKE_POST_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
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
          const totalPath = action.data.ProdPostImages.map((v) =>
            draft.imagePaths.concat(v.src.toString())
          );
          for (let i = 0; i < totalPath.length; i++) {
            draft.imagePaths = draft.imagePaths.concat(totalPath[i][0]);
          }
        } else if (action.data.boardNum === 3 || action.data.boardNum === 4) {
          const totalPath = action.data.PowerPostImages.map((v) =>
            draft.imagePaths.concat(v.src.toString())
          );
          for (let i = 0; i < totalPath.length; i++) {
            draft.imagePaths = draft.imagePaths.concat(totalPath[i][0]);
          }
        } else if (action.data.boardNum === 5) {
          const totalPath = action.data.TogetherPostImages.map((v) =>
            draft.imagePaths.concat(v.src.toString())
          );
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
          if (
            draft.mainPosts[0].category !== action.data[0].category || //카테고리 , 지역이 일치하지 않을때
            draft.mainPosts[0].location !== action.data[0].location
          ) {
            draft.mainPosts = action.data; // 기존 배열 밀어버리고 새롭게 10개씩 넣는다.
            console.log("밀고 새로넣었음");
            // draft.mainPosts = draft.mainPosts.concat(action.data);
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
        draft.mainPosts = draft.mainPosts.filter(
          (v) => v.id !== action.data.PostId
        );
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
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
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

export default reducer;
