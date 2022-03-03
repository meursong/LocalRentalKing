const express = require("express");

const { Post, User, Image, Comment } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      //   limit: 10, // 10개만 가져와라
      //   offset: 0, // 시작인덱스. 0이면 1~10(limit)번 게시물까지 가져옴
      //   order : [['createdAt','DESC']] //최신게시물부터 가져옴. 2차원 배열인 이유는 여러 기준으로 정렬할수있기때문에
      // limit과 offset은 실무에서는 잘 안쓰는 방법, 중간에 게시글이 추가되거나 삭제되면 꼬여버리기때문에
      // 실무에서는 pagination구현을 위해 limit과 lastId방식을 많이쓴다

      where: { id: lastId }, // sql에서 지원하는 offset대신에 우리가 lastId 정보를 만들어서 조회하도록
      limit: 2,
      order: [["createdAt", "DESC"]],
      include: [
        //데이터를 가져올때는 항상 완성해서 가져와야한다.
        {
          model: User, //작성자
        },
        {
          model: Image, //이미지
        },
        {
          model: Comment, //댓글
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
