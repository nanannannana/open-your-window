/* eslint-disable @typescript-eslint/no-var-requires */
const { Window } = require('../model');

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
