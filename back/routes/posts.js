const express = require("express");
const { Op } = require("sequelize");
const {
  Post,
  User,
  Image,
  Comment,
  Community1,
  Community2,
  Community3,
  Community4,
} = require("../models");

const router = express.Router();

// <--------- 게시물 10개씩 렌더링---------->
//router.get("/", async (req, res, next) => {
router.get("/", async (req, res, next) => {
  //카테고리별 조회 //요청을 프론트에서 어떻게 받을지 상의필요, req.param으로 받을지, req.query로 받을지
  try {
    const where = {};
    const comNum = req.query.communityNum;
    if (parseInt(req.query.lastId, 10)) {
      //초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }; // Op.lt ~보다작은 *operator
    }
    // where.communityNum = {
    //   //where절안에 있으면 lastId가 없을때 tab으로 구분해서 못보여줌
    //   [Op.eq]: req.query.communityNum, //eq  equal
    //};
    if (comNum == "community1") {
      const posts = await Post.findAll({
        //   limit: 10, // 10개만 가져와라
        //   offset: 0, // 시작인덱스. 0이면 1~10(limit)번 게시물까지 가져옴
        //   order : [['createdAt','DESC']] //최신게시물부터 가져옴. 2차원 배열인 이유는 여러 기준으로 정렬할수있기때문에
        // limit과 offset은 실무에서는 잘 안쓰는 방법, 중간에 게시글이 추가되거나 삭제되면 꼬여버리기때문에
        // 실무에서는 pagination구현을 위해 limit과 lastId방식을 많이쓴다

        where, // sql에서 지원하는 offset대신에 우리가 lastId 정보를 만들어서 조회하도록
        limit: 3, //테스트때는 우선은 2개씩만 렌더링하자 편의상
        order: [
          ["createdAt", "DESC"],
          [Comment, "createdAt", "DESC"], // 여기에서 댓글 내림차순정리
        ],
        include: [
          //데이터를 가져올때는 항상 완성해서 가져와야한다.
          {
            model: User, //작성자
            attributes: ["id", "nickname"],
          },
          {
            model: Image, //이미지
          },
          {
            model: Comment, //댓글
            include: [
              {
                model: User, //댓글 작성자
                attributes: ["id"], //댓글 수만 표시하면 되니까
                //댓글들 정렬할때도 여기다가 order정렬을 하는게아니라
              },
            ],
          },
          {
            model: Community1,
          },
          // //게시글이 몇개의 좋아요를 받고있는지 표시해주는부분. 구현미정, 구현방법미정
          // {
          //   model: User,
          //   attributes: ["id"],
          // },
        ],
      });
    } else if (comNum == "community2") {
      const posts = await Post.findAll({
        where,
        limit: 3,
        order: [
          ["createdAt", "DESC"],
          [Comment, "createdAt", "DESC"],
        ],
        include: [
          {
            model: User, //작성자
            attributes: ["id", "nickname"],
          },
          {
            model: Image, //이미지
          },
          {
            model: Comment, //댓글
            include: [
              {
                model: User, //댓글 작성자
                attributes: ["id"], //댓글 수만 표시하면 되니까
              },
            ],
          },
          {
            model: Community2,
          },
        ],
      });
    } else if (comNum == "community3") {
      const posts = await Post.findAll({
        where,
        limit: 3,
        order: [
          ["createdAt", "DESC"],
          [Comment, "createdAt", "DESC"],
        ],
        include: [
          {
            model: User, //작성자
            attributes: ["id", "nickname"],
          },
          {
            model: Image, //이미지
          },
          {
            model: Comment, //댓글
            include: [
              {
                model: User, //댓글 작성자
                attributes: ["id"], //댓글 수만 표시하면 되니까
              },
            ],
          },
          {
            model: Community3,
          },
        ],
      });
    } else if (comNum == "community4") {
      const posts = await Post.findAll({
        where,
        limit: 3,
        order: [
          ["createdAt", "DESC"],
          [Comment, "createdAt", "DESC"],
        ],
        include: [
          {
            model: User, //작성자
            attributes: ["id", "nickname"],
          },
          {
            model: Image, //이미지
          },
          {
            model: Comment, //댓글
            include: [
              {
                model: User, //댓글 작성자
                attributes: ["id"], //댓글 수만 표시하면 되니까
              },
            ],
          },
          {
            model: Community4,
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
