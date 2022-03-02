const express = require("express");
//const passport = require("passport");
const bcrypt = require("bcrypt"); //해쉬화 알고리즘
const { User } = require("../models"); //User model require 26번라인 User.create를 사용하기위해서.
//const { format } = require("sequelize/types/utils"); //이부분 코드는?
//원래 db.User로 접근해야 하는데 {User}해놓으면 그냥 유저로 접근 가능
//const db=require('../models');이렇게 해놨으면 db.User로 접근

const router = express.Router();

router.post("/", async (req, res) => {
  // 회원가입
  //  '/'와 app.js에 있는 app.use('/user',....)->POST/user/ 사가에서 axios.post('http://localhost:3065/user/')로 요청
  try {
    const exUser = await User.findOne({
      //이메일 중복체크
      where: {
        email: "1",
      },
    });
    if (exUser) {
      //exUser가 true는 중복된 유저가 있다는 이야기
      //exUser가 null인지를 체크해야하는거아냐? findOne의 반환이 promise객체아닌가?
      return res.status(403).send("이미 사용중인 아이디입니다");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10); //bcrypt로 패스워드 해쉬화, 2번째 인자는 saltRound로 높아질수록 보안은 올라가지만 속도는 느려진다.
    await User.create({
      //create는 비동기 메서드. async, await는 세트로 비동기 메서드와 같이쓰임 - 공부필요
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

router.get("/signUp", (req, res) => {
  User.create({
    //create는 비동기 메서드. async, await는 세트로 비동기 메서드와 같이쓰임 - 공부필요
    email: "singuptest1@gamil.com",
    nickname: "singuptest1",
    password: "singuptest1",
    location: "singuptest1",
    greeting: "singuptest1",
    grade: "normal",
    profileImgSrc: "singuptest1",
  })
    .then((result) => {
      console.log("저장 성공: ", result);
    })
    .catch((err) => {
      console.log("저장 Error: ", err);
    });
});

router.get("/findAll", (req, res) => {
  //axios.get('http://localhost:3065/user/findAll')
  User.findAll().then((result) => {
    //findAll메서드 인자에 { raw : true }옵션을 추가하면 dataValues만 리턴 - 이러면 result가 비어있는 어레이객체로 반환됨
    console.log(result);
  });
});

router.get("/findOne", (req, res) => {
  //axios.get('http://localhost:3065/user/findOne')
  User.findAll({
    where: {
      id: 1,
    },
  }).then((result) => {
    console.log(result);
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
