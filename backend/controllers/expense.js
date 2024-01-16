// const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Expense = require("../models/Expense");
const User = require("../models/User");

//@desc Add Expense
// @eoute POST /api/v1/auth/add-expense
// @access Public
exports.addExpense = asyncHandler(async (req, res, next) => {
  const { date, description, category, amount, payment } = req.body;
  const { token } = req.body;

  const user = await User.findById(req.user.id);

  // Add Expense
  const expense = await Expense.create({
    date,
    description,
    category,
    amount,
    payment,
  });

  res.status(200).json({ success: true, user, token, expense });
});
