const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = require("./routes/routes");
require("dotenv").config();
app.use(bodyParser.json());
app.use("/api", route);

app.use("/", (req, res, next) => {
  console.log(req.url);
  next();
});

const url = process.env.PORT && 3000;
app.listen(url, () => {
  console.log("Server is Running on port " + url);
});
