/* eslint-disable @typescript-eslint/no-var-requires */
const { Window, User } = require('../model');

exports.userInfoFind = async (req, res) => {
  console.log('user_id', req.body.user_id);
  const result = await Window.findAll({
    raw: true,
    include: [
      {
        model: User,
        required: true,
        attributes: ['user_id', 'user_pw', 'user_name', 'phone'],
      },
    ],
    where: {
      user_id: req.body.user_id,
    },
  });
  console.log('확인', result);
  res.send(result);
};
exports.userInfoUd = async (req, res) => {
  console.log(req.body);
  await User.update(
    {
      user_id: req.body.user_id,
      user_pw: req.body.user_pw,
      user_name: req.body.user_name,
      phone: req.body.phone,
    },
    { where: { user_id: req.body.user_id } }
  );
  res.send(true);
};
