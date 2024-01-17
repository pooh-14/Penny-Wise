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
  const { token } = req.body;

  if (!date || !description || !category || !amount || !payment || !token) {
    return res.json({ success: false, message: "All fields are required" });
  }

  const decode = jwt.verify(token, process.env.JWT_TOKEN_SECRET_KEY);
  console.log(decode);

  req.user = await User.findById(decode.id);
  console.log(req.user);
  if (!req.user) {
    return res.json({ success: false, message: "User not found" });
  }

  // Add Expense
  const expense = await Expense.create({
    date,
    description,
    category,
    amount,
    payment,
  });
  req.user.expenses.push(expense);
  console.log(expense)
  await req.user.save();

  res.status(200).json({ success: true, expense });
});
