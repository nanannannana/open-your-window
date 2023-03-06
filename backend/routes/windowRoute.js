/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const window = require('../controller/window');
const multer = require('../middleware/multer');
const router = express.Router();

router.post('/postupload', multer.imgUpload, window.postUpload);
router.get('/postedit', window.postEdit);
router.patch('/postupdate', multer.imgUpload, window.postUpdate);
router.patch('/postupdate2', window.postUpdate2);
router.get('/postsShow', window.PostsShow);
router.get('/searchTag', window.searchTag);
router.delete('/postDelete', window.postDelete);

module.exports = router;
