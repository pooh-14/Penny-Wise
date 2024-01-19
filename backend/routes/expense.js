const express = require('express');
const expense = express.Router();
const {addExpense, getExpense} = require('../controllers/expense');
const {protecter} = require('../middleware/auth');

expense.post('/add-expense',protecter, addExpense);
expense.get('/get-expense',protecter, getExpense);

module.exports = expense;