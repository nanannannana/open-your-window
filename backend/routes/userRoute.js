/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const user = require('../controller/user');
const router = express.Router();

router.post('/signUp', user.signUp);
router.post('/signIn', user.signIn);

module.exports = router;
