const express = require("express");
//const passport = require("passport");
//const bcrypt = require("bcrypt"); //해쉬화 알고리즘
const { Post, Image, Comment, User } = require("../models");
const { isLoggedIn } = require("./middlewares");
const { route } = require("./user");

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
    const fullPost = await Post.findOne({
      //부족한 정보들(이미지, 댓글,글쓴이 )을 합쳐서 프론트에 보내줌
      where: { id: post.id },
      include: [
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User, //게시글에 단 댓글 작성자
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, //게시글 작성자
          attributes: ["id", "nickname"],
        },
        {
          model: User, //게시글에 좋아요 누른 사람
          attributes: ["id"],
        },
      ],
    });
    res.status(201).json(fullPost); //프론트로 돌려줌
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//<-- 글쓰기 테스트 -->
router.post("/writeTest", async (req, res, next) => {
  // POST / post
  try {
    const post = await Post.create({
      title: req.body.title,
      content: req.body.content, //프론트와 이름을 맞춰야함
      tab: req.body.tab,
      category: req.body.category,
      price: req.body.price,
      //userId: req.user.id, //로그인 한 이후로는 라우터 접근할때 deserealizeUser가 실행됨
      //userId를 프론트에서 숨김으로 보내줌 hidden? form태그 안에 userId의 정보가 있고 그걸 브라우저단에 안보이게만 해서 서브밋할때 같이 넘엉오게

      //
    });
    res.status(201).json(post); //프론트로 돌려줌
  } catch (error) {
    console.error(error);
    next(error);
  }
});

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
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console(error);
    next(error);
  }
});

// <----댓글 작성 라우터 테스트---->
router.post("/:postId/comment", async (req, res, next) => {
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
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console(error);
    next(error);
  }
});

// <----- 게시글 좋아요 ----->
router.patch("/:postId/like", isLoggedIn, async (req, res, next) => {
  // PATCH /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다");
    }
    await post.addLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// <----- 게시글 좋아요 취소 ----->
router.delete("/:postId/like", isLoggedIn, (req, res, next) => {
  // DELETE /post/1/like
  try {
    const post = await Post.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다");
    }
    await post.removeLikers(req.user.id);
    res.json({ PostId: post.id, UserId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// //        <----- 게시글 수정 ----->
// route.patch("/logout", isLoggedIn, async (req, res, next) => {
//   try {
//     await User.update(
//       {
//         nickname: req.body.nickname, //프론트와 상의해서 넘겨받을 데이터 설정하기
//       },
//       {
//         where: { id: req.user.id },
//       }
//     );
//     res.status(200).json({ nickname: req.body.nickname });
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

//       <----- 게시글 삭제 ----->
router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  // DELETE /post / ?
  try {
    await Post.destroy({
      where: {
        id: req.params.postId, //게시글 id
        UserId: req.user.id, //그 게시글을 쓴 유저의 id  ~혹여나 다른사람이 삭제할때 url만바꿔서 요청보내면 다른사람글도 삭제가능하니까
      },
    });
    res.status(200).json({ PostId: parseInt(req.params.postId, 10) }); //params는 문자열로가서 int로 파싱
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch("/nickname", isLoggedIn, (req, res) => {});

module.exports = router;
