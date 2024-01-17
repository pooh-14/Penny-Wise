const express = require('express');
const auth = express.Router();
const {register, login, getMe} = require('../controllers/auth');
const {protecter} = require('../middleware/auth');

auth.post('/register', register);

auth.post('/login', login);

auth.get('/me', protecter, getMe);

module.exports = auth;