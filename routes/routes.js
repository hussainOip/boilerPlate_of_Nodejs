const express = require("express");
const app = express();
const post = require("./post");
const auth = require('./auth')

app.use('/post',post)
app.use("/auth", auth);
  

module.exports = app;
