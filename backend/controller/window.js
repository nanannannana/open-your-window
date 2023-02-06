/* eslint-disable @typescript-eslint/no-var-requires */
const { Window, User } = require('../model');
const multer = require('multer');
const path = require('path');
const sequelize = require('sequelize');
const Op = sequelize.Op;

const upload = multer({
  storage: multer.diskStorage({
    // 이미지 저장 경로: public/img
    destination(req, file, done) {
      done(null, '../public/img');
    },
    filename(req, file, done) {
      // 파일명 겹침 방지를 위해 timestamp로 파일명 지정
      done(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

exports.imgUpload = upload.single('img');

exports.postUpload = async (req, res) => {
  let image = '/img/' + req.file.filename;
  const date = new Date();
  //전달 받은 data의 date값이 빈 값이 아닌 경우, return 전달 받은 값
  // 빈 값일 경우, return 업로드 한 날짜
  let uploadDate = req.body.date
    ? req.body.date
    : date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  let uploadContent = req.body.content === 'undefined' ? '' : req.body.content;
  // console.log(req.file);
  console.log('전달 내용 확인', req.body);
  // console.log('이미지 경로', image);
  const result = await Window.create({
    country: req.body.country,
    city: req.body.city,
    window_date: uploadDate,
    img: image,
    comment: uploadContent,
    tags: req.body.tags,
    user_id: req.body.user_id,
  });
  res.send({ num: result.num });
};

exports.postEdit = async (req, res) => {
  const result = await Window.findOne({
    raw: true,
    where: { num: req.query.num },
    include: [
      {
        model: User,
        required: true,
        attributes: ['user_name'],
      },
    ],
  });
  res.send({ result: result });
};

exports.postUpdate = async (req, res) => {
  let image = '/img/' + req.file.filename;
  const date = new Date();
  //전달 받은 data의 date값이 빈 값이 아닌 경우, return 전달 받은 값
  // 빈 값일 경우, return 업로드 한 날짜
  let uploadDate = req.body.date
    ? req.body.date
    : date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  let uploadContent = req.body.content === 'undefined' ? '' : req.body.content;
  const result = await Window.update(
    {
      country: req.body.country,
      city: req.body.city,
      window_date: uploadDate,
      img: image,
      comment: uploadContent,
      tags: req.body.tags,
      user_id: req.body.user_id,
    },
    { where: { num: req.body.num } }
  );
  console.log('update', result);
};

exports.ImgFind = async (req, res) => {
  const result = await Window.findAll({
    raw: true,
    where: { country: req.query.country },
    include: [
      {
        model: User,
        required: true,
        attributes: ['user_name'],
      },
    ],
  });
  // console.log(req.query.country);
  // console.log(result);
  res.send({ countryTag: result });
};

exports.basicTag = async (req, res) => {
  const result = await Window.findAll({
    raw: true,
    include: [
      {
        model: User,
        required: true,
        attributes: ['user_name'],
      },
    ],
  });
  res.send({ basicTag: result });
};

exports.searchTag = async (req, res) => {
  const result = await Window.findAll({
    raw: true,
    where: {
      tags: {
        [Op.like]: '%' + req.query.tag + '%',
      },
    },
    include: [
      {
        model: User,
        required: true,
        attributes: ['user_name'],
      },
    ],
  });
  res.send({ searchTag: result });
};
