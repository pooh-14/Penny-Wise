const express = require('express');
const auth = express.Router();
const {register, login, getMe, editProfile} = require('../controllers/auth');
const {protecter} = require('../middleware/auth');
const { addUser, performMoneyTransfer } = require('../controllers/transaction');

auth.post('/register', register);

auth.post('/login', login);

auth.get('/me', protecter, getMe);

auth.put('/edit-profile', protecter, editProfile);

auth.post('/adduser', addUser);

auth.put('/money', performMoneyTransfer)
 
module.exports = auth;