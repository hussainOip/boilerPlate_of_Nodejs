const fs = require("fs");
var uc = require("upper-case");
const nodemailer = require("nodemailer");
require("dotenv").config();

const { email, password } = process.env;
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});
exports.post = async (req, res) => {
  try {
    //   res.send(uc.upperCase('hello world'))

    res.status(200).json({
      success: true,
      message: uc.upperCase("message"),
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

exports.email = async (req, res) => {
  try {
    var mailOptions = {
      from: email,
      to: req.body.email,
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(200).json({
          success: false,
          message: err.message,
        });
      } else {
        res.status(200).json({
          success: true,
          message: info.response,
        });
      }
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// event module learning

//SEND HTML file
exports.index = async (req, res) => {
  try {
    res.sendfile("index.html");
    // res.status(200).json({
    //     success: true,
    //     message: "message",
    //     data:data
    // })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
