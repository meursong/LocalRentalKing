const express = require("express");
const { Message } = require("../models");
const { isLoggedIn } = require("./middlewares");
const router = express.Router();

// <------------ 쪽지 보내기(회원 아이디로 dm) ------------>
router.post("/userMessage", isLoggedIn, async (req, res, next) => {
  try {
    const message = await Message.create({
      title: req.body.title,
      content: req.body.content,
      isRead: false, // default - 읽지않음
      send_userId: req.body.send_userId,
      receive_userId: req.body.receive_userId,
    });
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// <------------ 쪽지 보내기(게시물 통해서 쪽지) ------------>
router.post("/postMessage", isLoggedIn, async (req, res, next) => {
  try {
    const message = await Message.create({
      title: req.body.title,
      content: req.body.content,
      isRead: false, // default - 읽지않음
      send_userId: req.body.send_userId,
      receive_userId: req.body.receive_userId,
    });
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
