/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const window = require('../controller/window');
const router = express.Router();

router.post('/uploadConfirm', window.imgUpload, window.postUploadConfrim);
router.get('/uploadCheck', window.getUploadCheck);

module.exports = router;
