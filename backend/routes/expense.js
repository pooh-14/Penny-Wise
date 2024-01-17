const express = require('express');
const expense = express.Router();
const {addExpense} = require('../controllers/expense');
const {protecter} = require('../middleware/auth');

expense.post('/add-expense', addExpense);

module.exports = expense;