const express = require('express');
const auth = express.Router();
const {register, login, getMe, editProfile} = require('../controllers/auth');
const {protecter} = require('../middleware/auth');
const { addUser, performMoneyTransfer, createAccount, deleteAccount, getBalance, addHobby, deleteHobby } = require('../controllers/transaction');

auth.post('/register', register);

auth.post('/login', login);

auth.get('/me', protecter, getMe);

auth.put('/edit-profile', protecter, editProfile);

auth.post('/create', createAccount);

auth.put('/money', performMoneyTransfer)

auth.delete('/delete', deleteHobby)

auth.get('/get', getBalance)
 
auth.post('/addHobby', addHobby)

module.exports = auth;