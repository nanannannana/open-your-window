/* eslint-disable @typescript-eslint/no-var-requires */
const { Window } = require('../model');
const multer = require('multer');
const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, '../public/img');
    },
    filename(req, file, done) {
      // 이름이 겹치지 않기 위해 timestamp로 파일 이름 지정
      done(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

exports.imgUpload = upload.single('img');

exports.postUploadConfrim = async (req, res) => {
  let image = '/img/' + req.file.filename;
  const date = new Date();
  let sqlInputDate = req.body.date
    ? req.body.date
    : date.getFullYear() +
      '/' +
      (date.getMonth() + 1) +
      '/' +
      (date.getDate() + 1);
  console.log(image);
  console.log(sqlInputDate);
  const result = await Window.create({
    country: req.body.country,
    city: req.body.city,
    window_date: sqlInputDate,
    img: image,
    comment: req.body.content,
    user_id: 'hello12',
  });
  res.send({ num: result.num });
};
exports.getUploadCheck = async (req, res) => {
  const result = await Window.findOne({
    raw: true,
    where: { num: req.query.num },
  });
  //   console.log(result);
  //   {
  //     num: 21,
  //     country: 'United States of America',
  //     city: 'd',
  //     win_date: 2023-01-25T15:00:00.000Z,
  //     img: '1675062995740.jpg',
  //     comment: 'd',
  //     user_id: 'hello12',
  //     like_num: 0
  //   }
  res.send({ result: result });
};
