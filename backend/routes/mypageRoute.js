/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const mypage = require('../controller/mypage');
const router = express.Router();

router.post('/userinfofind', mypage.userInfoFind);

module.exports = router;
