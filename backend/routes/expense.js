const express = require('express');
const expense = express.Router();
const {addExpense, getExpense, editExpense, deleteExpense, getSingleExpense} = require('../controllers/expense');
const {protecter} = require('../middleware/auth');

expense.post('/expense',protecter, addExpense);
expense.get('/expense',protecter, getExpense);

expense.get('/expense/:id',protecter, getSingleExpense);
expense.put('/expense/:id',protecter, editExpense);
expense.delete('/expense/:id',protecter, deleteExpense);

module.exports = expense;