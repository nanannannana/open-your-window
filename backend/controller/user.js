/* eslint-disable @typescript-eslint/no-var-requires */
const { User } = require('../model');
const path = require('path');
const sequelize = require('sequelize');
const Op = sequelize.Op;

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
  //   result ? result.
  res.send(result ? true : false);
};
