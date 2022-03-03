const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt"); //해쉬화 알고리즘
const { User, Post } = require("../models"); //User model require 26번라인 User.create를 사용하기위해서 '구조분해할당'
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
//const { format } = require("sequelize/types/utils"); //이부분 코드는?
//원래 db.User로 접근해야 하는데 {User}해놓으면 그냥 유저로 접근 가능
//const db=require('../models');이렇게 해놨으면 db.User로 접근

const router = express.Router();

// <------ 로그인 ----->
router.post("/login", isNotLoggedIn, (req, res, next) => {
  //이걸 미들웨어 확장이라고 한다. 원래 passport.authenticate는 req,res,next를 쓸수없는 미들웨어인데 그걸 확장해서 쓸수 있게하는 express기법
  passport.authenticate("local", (err, user, info) => {
    //passport전략실행 //passport의 done이 콜백같은거라 이게 여기로 전달됨
    if (err) {
      console.log(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason); //info - 클라측 에러
    }
    return req.login(user, async (loginErr) => {
      //req.login을 하면 같이 실행되는 코드는 index의 serializeUser와
      //여기서 로그인은 패스포트 로그인이다. 여기서 에러가 날 경우를 처리해주는 코드
      if (loginErr) {
        console.log(err);
        return next(loginErr);
      }
      const fullInfoUserWithoutPassword = await User.findOne({
        //비밀번호를 제외한 모든 사용자의 정보를 가지고있는 객체
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
          //비밀번호를 제외한 모든 컬럼 가져옴
        },
        include: [
          {
            model: Post, //내가 쓴 개시물들
          },
        ],
      });
      //로그인할때 내부적으로 res.setHeader('Cookie','afeaf'(랜덤문자열)) 이런 걸 보내준다, 세션도 연결해주고
      return res.status(200).json(fullInfoUserWithoutPassword); // 사용자정보를 프론트로 넘겨줌
    });
  });
});

// <------ 로그아웃 ----->
router.post("/logout", isLoggedIn, (req, res, next) => {
  req.logout();
  req._destroy();
  res.send("ok");
});

// <------ 회원가입 ----->
router.post("/", isNotLoggedIn, async (req, res, next) => {
  //  '/'와 app.js에 있는 app.use('/user',....)->POST/user/ 사가에서 axios.post('http://localhost:3065/user/')로 요청
  try {
    const exUser = await User.findOne({
      //이메일 중복체크
      where: {
        //조건
        email: req.body.email,
      },
    });
    if (exUser) {
      //exUser가 true는 중복된 유저가 있다는 이야기
      //exUser가 null인지를 체크해야하는거아냐? findOne의 반환이 promise객체아닌가?
      return res.status(403).send("이미 사용중인 아이디입니다"); //return이 없다면 밑에 res.send가 있어서 응답을 2번보내는셈이 돼버림
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10); //bcrypt로 패스워드 해쉬화, 2번째 인자는 saltRound로 높아질수록 보안은 올라가지만 속도는 느려진다.
    await User.create({
      //await이 없다면 뒤에 res.json()이 먼저 실행돼 버리기때문에 없어도 데이터는 들어가지만 순서를 맞춰주기위한 코드 await을 쓰려면 함수가 async함수여야함.
      //create는 원래 비동기 메서드. async, await는 세트로 비동기 메서드와 같이쓰임
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
      location: req.body.location,
      greeting: req.body.greeting,
      grade: req.body.grade,
      profileImgSrc: req.body.profileImgSrc,
    });
    res.status(200).send("ok");
    //res.json(); //제이슨으로 보내줌
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// // // <------ 회원가입테스트 ----->
// router.get("/signUp", (req, res) => {
//   User.create({
//     //create는 비동기 메서드. async, await는 세트로 비동기 메서드와 같이쓰임 - 공부필요
//     email: "singuptest1@gamil.com",
//     nickname: "singuptest1",
//     password: "singuptest1",
//     location: "singuptest1",
//     greeting: "singuptest1",
//     grade: "normal",
//     profileImgSrc: "singuptest1",
//   })
//     .then((result) => {
//       console.log("저장 성공: ", result);
//     })
//     .catch((err) => {
//       console.log("저장 Error: ", err);
//     });
// });

//  <------ findAll test ----->
router.get("/findAll", (req, res) => {
  //axios.get('http://localhost:3065/user/findAll')
  User.findAll().then((result) => {
    //findAll메서드 인자에 { raw : true }옵션을 추가하면 dataValues만 리턴 - 이러면 result가 비어있는 어레이객체로 반환됨
    console.log(result);
    //res.send(result); 이렇게 보내니까  postman에서 json배열로 받아지는데?
  });
});

//  <------ findOne test ----->
router.get("/findOne", (req, res) => {
  //axios.get('http://localhost:3065/user/findOne')
  User.findAll({
    where: {
      id: 2,
    },
  }).then((result) => {
    // then이란건 promise가 정상적으로 잘수행이 되어서 최종적으로 resolve라는 콜백함수로 전달한 값이 들어가있음
    //만약에 error가 발생했다면 rejected라는 함수를 통해서 new한 error객체를 보내준다
    //promise객체에 then이 호출이되면 다시 promise가 반환되기때문에 이 뒤로 catch같은 체이닝을 걸어줄수있음
    console.log(result);
    res.send(result);
  });
});

module.exports = router;

// 특정 필드(Column) [attributes 옵션 사용]
// /* SQL */
// SELECT name, married FROM users;
// ​
// /* 시퀄라이즈 */
// User.findAll({
//   attributes: ['name', 'married']
// });
