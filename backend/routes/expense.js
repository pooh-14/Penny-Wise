const express = require('express');
const router = express.Router();
const {addExpense} = require('../controllers/expense');
const {protecter} = require('../middleware/auth');

router.post('/add-expense', addExpense);

module.exports = router;