const express = require("express");
//const passport = require("passport");
//const bcrypt = require("bcrypt"); //해쉬화 알고리즘
const { Post } = require("../models");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content, //프론트와 이름을 맞춰야함
    });
    res.status(201).json(post); //프론트로 돌려줌
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
