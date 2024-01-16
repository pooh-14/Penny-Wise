// const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Expense = require("../models/Expense");

exports.addExpense = asyncHandler(async (req, res, next) => {
  const { date, description, category, amount, payment } = req.body;
  const { token } = req.body;

  sendTokenResponse(user, 200, res);

  // Add Expense
  const expense = await Expense.create({
    date,
    description,
    category,
    amount,
    payment,
  });

  res
        .status(status)
        .cookie('token', token, option)
        .json({success: true, token});
});
