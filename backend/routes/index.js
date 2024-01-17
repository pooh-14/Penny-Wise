const express = require('express');
const auth = require('./auth');
const expense = require('./expense');
const router = express.Router();

router.use('/auth', auth);
router.use('/expense', expense);

module.exports = router;