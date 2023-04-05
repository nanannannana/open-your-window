/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const window = require('../controller/window');
const multer = require('../middleware/multer');
const router = express.Router();

router.post('/posts', multer.imgUpload, window.postUpload);
router.get('/posts', window.postEdit);
router.patch('/posts-image', multer.imgUpload, window.postUpdate_image);
router.patch('/posts', window.postUpdate);
router.get('/board', window.getBoard);
router.delete('/posts', window.postDelete);

module.exports = router;
