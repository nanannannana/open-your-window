/* eslint-disable @typescript-eslint/no-var-requires */
const { Window, User } = require('../model');
const multer = require('multer');
const path = require('path');
const sequelize = require('sequelize');
const Op = sequelize.Op;

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
  console.log('tags 확인', req.body.tags);
  const result = await Window.create({
    country: req.body.country,
    city: req.body.city,
    window_date: sqlInputDate,
    img: image,
    comment: req.body.content,
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
