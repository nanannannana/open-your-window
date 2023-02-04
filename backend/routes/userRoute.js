/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const user = require('../controller/user');
const router = express.Router();

router.get('/signImg', user.signImg);
router.post('/checkEmail', user.checkEmail);

router.post('/signUp', user.signUp);
router.post('/signIn', user.signIn);
router.delete('/delUser', user.delUser);

module.exports = router;
