const express = require("express");
const { Op } = require("sequelize");
const {
  User,
  ProdPost,
  ProdPostImage,
  ProdPostComment,
  PowerPost,
  PowerPostImage,
  PowerPostComment,
  TogetherPost,
  TogetherPostImage,
  TogetherPostComment,
} = require("../models");

const router = express.Router();

// <--------- 게시물 10개씩 렌더링---------->

// ** 지역별 검색 조건 추가 필요

//router.get("/", async (req, res, next) => {
router.get("/", async (req, res, next) => {
  //카테고리별 조회 //요청을 프론트에서 어떻게 받을지 상의필요, req.param으로 받을지, req.query로 받을지
  //return axios.get(`/posts/${encodeURIComponent(data)}/post?lastId=${lastId || 0}&boardNum=${boardNum || 0}`); 프론트 요청 예시
  //                            카테고리명 한글로         //lastId 없으면 0         //boardNum없으면 0
  //const category = decodeURIComponent(data);
  try {
    const where = {};
    const boardNum = req.query.boardNum;
    const category = req.query.category;
    let posts = {};
    if (parseInt(req.query.lastId, 10)) {
      //초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }; // sequelize operator
    }
    // <------- 물건을~ 조회 ------->
    if (boardNum == 1 || boardNum == 2) {
      posts = await ProdPost.findAll({
        //   limit: 10, // 10개만 가져와라
        //   offset: 0, // 시작인덱스. 0이면 1~10(limit)번 게시물까지 가져옴
        //   order : [['createdAt','DESC']] //최신게시물부터 가져옴. 2차원 배열인 이유는 여러 기준으로 정렬할수있기때문에
        // limit과 offset은 실무에서는 잘 안쓰는 방법, 중간에 게시글이 추가되거나 삭제되면 꼬여버리기때문에
        // 실무에서는 pagination구현을 위해 limit과 lastId방식을 많이쓴다
        // sql에서 지원하는 offset대신에 우리가 lastId 정보를 만들어서 조회하도록
        where: {
          boardNum: boardNum,
        },
        limit: 3, //테스트때는 우선은 2개씩만 렌더링하자 편의상
        order: [
          ["createdAt", "DESC"],
          [ProdPostComment, "createdAt", "DESC"], // 여기에서 댓글 내림차순정리
        ],
        include: [
          //데이터를 가져올때는 항상 완성해서 가져와야한다.
          {
            model: User, //작성자
            attributes: ["id", "nickname"],
          },
          {
            model: ProdPostImage, //이미지
          },
          {
            model: ProdPostComment, //댓글
            include: [
              {
                model: User, //댓글 작성자
                attributes: ["id", "nickname"],
                //attributes: ["id"], //댓글 수만 표시하면 되니까 // 따로 상세보기 요청이 없이 포스트카드 애초에 모든데이터를 프론트에 전달해야함
                //댓글들 정렬할때도 여기다가 order정렬을 하는게아니라
              },
            ],
          },
        ],
      });
    } else if (parseInt(req.query.lastId, 10)) {
      //초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    // <------- 힘을~ 조회 ------->
    if (boardNum == 3 || boardNum == 4) {
      posts = await PowerPost.findAll({
        where: {
          boardNum: boardNum,
        },
        limit: 3, //테스트때는 우선은 2개씩만 렌더링하자 편의상
        order: [
          ["createdAt", "DESC"],
          [PowerPostComment, "createdAt", "DESC"],
        ],
        include: [
          {
            model: User, //작성자
            attributes: ["id", "nickname"],
          },
          {
            model: PowerPostImage, //이미지
          },
          {
            model: PowerPostComment, //댓글
            include: [
              {
                model: User, //댓글 작성자
                //attributes: ["id"],
              },
            ],
          },
        ],
      });
    } else if (parseInt(req.query.lastId, 10)) {
      //초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    // <------- 같이하자 조회 ------->
    if (boardNum == 5) {
      posts = await TogetherPost.findAll({
        where: {
          boardNum: boardNum,
          category: category,
        },
        limit: 10, //테스트때는 우선은 2개씩만 렌더링하자 편의상
        order: [
          ["createdAt", "DESC"],
          [TogetherPostComment, "createdAt", "DESC"],
        ],
        include: [
          {
            model: User, //작성자
            attributes: ["id", "nickname"],
          },
          {
            model: TogetherPostImage, //이미지
          },
          {
            model: TogetherPostComment, //댓글
            include: [
              {
                model: User, //댓글 작성자
                //attributes: ["id"],
              },
            ],
          },
        ],
      });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
