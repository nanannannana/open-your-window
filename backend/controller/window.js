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

exports.postUpload = async (req, res) => {
  let image = '/img/' + req.file.filename;
  const date = new Date();
  let sqlInputDate = req.body.date
    ? req.body.date
    : date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
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

exports.postEdit = async (req, res) => {
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

exports.ImgFind = async (req, res) => {
  const result = await Window.findAll({
    raw: true,
    where: { country: req.query.country },
    limit: 8,
  });
  let arr = [10, 14, 9, 7, 8, 5, 12, 7];
  res.send({ result: result.map((v, i) => [arr[i], v.img]), info: result });
};
