const express = require('express');
const router = express.Router();
const {register, login, getMe} = require('../controllers/auth');
const {protecter} = require('../middleware/auth');

router.post('/register', register);

router.post('/login', login);

router.get('/me', protecter, getMe);

module.exports = router;