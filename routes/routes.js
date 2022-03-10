const express = require("express");
const Router = express.Router();
const post = require("../controller/post");
const router = () => {
  Router.post("/add", post.post);
  Router.get("/index", post.index);
  Router.post("/email", post.email);
  return Router;

  
};

module.exports = router();
