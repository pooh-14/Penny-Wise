const express = require('express');
const auth = require('./auth');
const expense = require('./expense');
const statistics = require('./statistics');
const router = express.Router();

router.use('/auth', auth);
router.use('/expense', expense);
router.use('/statistics', statistics);

module.exports = router;