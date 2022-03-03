const express = require("express");
//const passport = require("passport");
//const bcrypt = require("bcrypt"); //해쉬화 알고리즘
const { Post, Comment } = require("../models");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

// <----게시글 작성 라우터---->
router.post("/write", isLoggedIn, async (req, res, next) => {
  // POST / post
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content, //프론트와 이름을 맞춰야함
      tab: req.body.tab,
      category: req.body.category,
      price: req.body.price,
      UserId: req.user.id, //로그인 한 이후로는 라우터 접근할때 deserealizeUser가 실행됨
      //
    });
    res.status(201).json(post); //프론트로 돌려줌
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// //<-- 글쓰기 테스트 -->
// router.get("/writeTest", async (req, res, next) => {
//   // POST / post
//   try {
//     const post = await Post.create({
//       title: "Test2",
//       content: "Test1", //프론트와 이름을 맞춰야함
//       tab: "Test1",
//       category: "Test1",
//       price: "Test1",
//       UserId: 2, //로그인 한 이후로는 라우터 접근할때 deserealizeUser가 실행됨

//       //
//     });
//     res.status(201).json(post); //프론트로 돌려줌
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

// <----댓글 작성 라우터---->
router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  // POST / post / ? /comment
  //주소는 프론트와 백사이의 약속
  //주소에서 :postId는 요청만 보더라도 몇번 게시물에 댓글을 다는거구나~하고 한눈에 알수있게하려고
  //그런데 몇번 게시물에 요청할건지는 가변적. :postId로 파라미터로 받아서처리
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시물입니다.");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: req.params.postId,
      UserId: req.user.id,
    });
    res.status(201).json(comment);
  } catch (error) {
    console(error);
    next(error);
  }
});

module.exports = router;
