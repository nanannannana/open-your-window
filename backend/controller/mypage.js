/* eslint-disable @typescript-eslint/no-var-requires */
const { Window, User } = require('../model');

exports.userInfoFind = async (req, res) => {
  const showPosts = await Window.findAndCountAll({
    raw: true,
    where: { user_id: req.body.user_id },
    offset: req.body.page * 5,
    limit: 5,
  });
  const userInfo = await User.findOne({
    raw: true,
    where: { user_id: req.body.user_id },
  });
  if (showPosts.length !== 0)
    return res.send({
      showPosts: showPosts.rows,
      postTotalNum: showPosts.count,
      userInfo: userInfo,
    });
  res.send({ userInfo: userInfo });
};
exports.userInfoUd = async (req, res) => {
  // console.log(req.body);
  await User.update(
    {
      user_id: req.body.user_id,
      user_pw: req.body.user_pw,
      user_name: req.body.user_name,
      phone: req.body.phone,
    },
    { where: { user_id: req.body.user_id } }
  );
  const userInfo = await User.findOne({
    raw: true,
    where: { user_id: req.body.user_id },
  });
  res.send(userInfo);
};
