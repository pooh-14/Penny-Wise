// const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Expense = require("../models/Expense");
const User = require("../models/User");
const jwt = require('jsonwebtoken');

//@desc Add Expense
// @eoute POST /api/v1/expense/add-expense
// @access Public
exports.addExpense = asyncHandler(async (req, res, next) => {
  const { date, description, category, amount, payment } = req.body;
  console.log("dateee:", date, "description:", description);

  // Add Expense
  const expense = await Expense.create({
    date,
    description,
    category,
    amount,
    payment,
    userId:req.user.id
  });

  res.status(200).json({ success: true, expense: expense,userId:req.user.id });
});
