/* eslint-disable @typescript-eslint/no-var-requires */
const { Window, User } = require('../model');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const fs = require('fs');
const dayjs = require('dayjs');

exports.postUpload = async (req, res) => {
  let image = '/img/' + req.file.filename;
  // 사용자가 date 미선택 시, 기본값 default
  // 전달받은 date값이 default일 경우, 현재 날짜 저장
  const today = dayjs().format('YYYY-MM-DD');
  let uploadDate = req.body.date !== 'default' ? req.body.date : today;
  // 사용자가 content 미작성 시, 기본값 undefined
  // 전달받은 content값이 undefined일 경우, 빈 값 저장
  let uploadContent = req.body.content === 'undefined' ? '' : req.body.content;

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
    attributes: {
      exclude: ['user_id'],
    },
    where: { num: req.query.num },
    include: [
      {
        model: User,
        required: true,
        attributes: ['user_name'],
      },
    ],
  });
  res.send(result);
};

exports.postUpdate_image = async (req, res) => {
  fs.unlinkSync(`../${process.env.FILE}${req.body.imgServer}`);
  let image = '/img/' + req.file.filename;
  let uploadContent = req.body.content === 'undefined' ? '' : req.body.content;
  await Window.update(
    {
      country: req.body.country,
      city: req.body.city,
      window_date: req.body.date,
      img: image,
      comment: uploadContent,
      tags: req.body.tags,
      user_id: req.body.user_id,
    },
    { where: { num: req.body.num } }
  );
  res.send(true);
};
exports.postUpdate = async (req, res) => {
  let updateContent = req.body.content === 'undefined' ? '' : req.body.content;
  let updateTags = req.body.tags.length === 0 ? '' : req.body.tags.join(',');
  await Window.update(
    {
      country: req.body.country,
      city: req.body.city,
      window_date: req.body.date,
      img: req.body.img,
      comment: updateContent,
      tags: updateTags,
      user_id: req.body.user_id,
    },
    { where: { num: req.body.num } }
  );
  res.send(true);
};

exports.getBoard = async (req, res) => {
  const offset = req.query.page * 8;
  if (!req.query.country && !req.query.tag) {
    // 전체 게시물 조회
    const result = await Window.findAndCountAll({
      raw: true,
      attributes: {
        exclude: ['user_id'],
      },
      include: [
        {
          model: User,
          required: true,
          attributes: ['user_name'],
        },
      ],
      offset: offset,
      limit: 8,
    });
    return res.send({ posts: result.rows, totalNum: result.count });
  } else if (req.query.tag) {
    // 검색 게시물 조회
    const result = await Window.findAndCountAll({
      raw: true,
      attributes: {
        exclude: ['user_id'],
      },
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
    res.send({ posts: result.rows, totalNum: result.count });
  } else {
    // 국가별 게시물 조회
    const result = await Window.findAndCountAll({
      raw: true,
      attributes: {
        exclude: ['user_id'],
      },
      where: { country: req.query.country },
      include: [
        {
          model: User,
          required: true,
          attributes: ['user_name'],
        },
      ],
      offset: offset,
      limit: 8,
    });
    return res.send({ posts: result.rows, totalNum: result.count });
  }
};

exports.postDelete = async (req, res) => {
  await Window.destroy({
    where: { img: req.body.deletePost },
  });
  fs.unlinkSync(`../${process.env.FILE}${req.body.deletePost}`);
  res.send(true);
};
