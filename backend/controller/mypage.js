/* eslint-disable @typescript-eslint/no-var-requires */
const { Window, User } = require('../model');

exports.userInfoFind = async (req, res) => {
  console.log('user_id', req.body.user_id);
  const result = await Window.findAll({
    raw: true,
    where: {
      user_id: req.body.user_id,
    },
  });
  res.send(result);
};
exports.userInfoUd = async (req, res) => {
  console.log(req.body);
  // update문
};
