const express = require('express');
const statistics = express.Router();
const {protecter} = require('../middleware/auth');
const { totalMonthlyExpense } = require('../controllers/statistics');

statistics.post('/statistics',protecter, totalMonthlyExpense);

module.exports = statistics;