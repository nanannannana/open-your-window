/* eslint-disable @typescript-eslint/no-var-requires */
const { User } = require('../model');
const { Window } = require('../model');
const path = require('path');
const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.signImg = async (req, res) => {
  const result = await Window.findOne({
    attributes: ['img'],
    order: [['num', 'DESC']],
    limit: 1,
  });
  res.send(result);
};

exports.checkEmail = async (req, res) => {
  console.log(req.body);
  const result = await User.findOne({
    where: {
      user_id: req.body.email,
    },
  });
  console.log(result);
  res.send(result === null ? true : false);
};

// exports.kakaoLogin = async (req, res) => {
//   console.log(req.body);
//   res.send(true);
// };

exports.signUp = async (req, res) => {
  console.log(req.body);
  const result = await User.create({
    user_id: req.body.email,
    user_name: req.body.nickname,
    user_pw: req.body.pw,
    phone: req.body.phone,
  });
  res.send(true);
};

exports.signIn = async (req, res) => {
  console.log(req.body);
  const result = await User.findOne({
    where: {
      user_id: req.body.email,
    },
  });
  console.log(result);
  res.send(result ? (result.user_pw == req.body.pw ? true : false) : false);
};

exports.delUser = async (req, res) => {
  console.log(req.body);
  let isKakao;
  const checkPW = await User.findOne({
    where: {
      user_id: req.body.email,
    },
  });
  isKakao = checkPW.user_pw === 'kakao' ? true : false;
  const result = await User.destroy({
    where: {
      user_id: req.body.email,
    },
  });
  res.send(isKakao);
};
