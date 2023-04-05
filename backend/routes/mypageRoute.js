/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const mypage = require('../controller/mypage');
const router = express.Router();

router.post('/user', mypage.userInfoFind);
router.patch('/user', mypage.userInfoUpdate);

module.exports = router;
