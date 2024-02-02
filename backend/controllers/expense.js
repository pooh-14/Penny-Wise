// const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Expense = require("../models/Expense");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");

//@desc Add Expense
// @eoute POST /api/v1/expense/expense/add-expense
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
    userId: req.user.id, 
    // select -
    // cannot add future expense
  });

  res
    .status(200)
    .json({ success: true, expense: expense });
});

//@desc Get all Expenses
// @route GET /api/v1/expense/expense,get-expense
// @access Private
exports.getExpense = asyncHandler(async (req, res, next) => {
  const { id } = req.user;
  const { date, description, category, amount, payment, skipNo, takeNo } =
    req.query;
  console.log(req.user);
  const query = { userId: id };
  if (!skipNo) {
    return next(new ErrorResponse("Skip required!", 401));
  }
  if (!takeNo) {
    return next(new ErrorResponse("Take required!", 401));
  }
  if (date) {
    query["date"] = date;
  }
  if (description) {
    query["description"] = description;
  }
  if (category) {
    query["category"] = category;
  }
  if (amount) {
    query["amount"] = amount;
  }
  if (payment) {
    query["payment"] = payment;
  }
  const allExpense = await Expense.find(query).skip(skipNo).limit(takeNo);
  console.log(query, "query");
  console.log(allExpense, "allExpense");
  res.status(200).json({
    success: true,
    allExpense: allExpense,
    user: req.user.id,
  });
});

//@desc Edit Expense
// @eoute POST /api/v1/expense/expense/single-expense
// @access Private
exports.getSingleExpense = asyncHandler(async (req, res, next) => {
const {id}=req.params;
const singleExpense = await Expense.findById(id);
res.status(200).json({ success: true, singleExpense });
})

//@desc Edit Expense
// @eoute POST /api/v1/expense/expense/edit-expense
// @access Public
exports.editExpense = asyncHandler(async (req, res, next) => {
  const { date, description, category, amount, payment } = req.body;
  // console.log("dateee:", date, "description:", description);
  const { id } = req.params;

  // console.log(id, "expenseId");
  // console.log(req, "req");
  const editedExpense = await Expense.findByIdAndUpdate(
    id,
    { date, description, category, amount, payment },
    { new: true }
  );

  res.status(200).json({ success: true, editedExpense });
});

//@desc Delete Expense
// @eoute POST /api/v1/expense/expense/delete-expense
// @access Public
exports.deleteExpense = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  // console.log(req, "req");

  // delete Expense
  const deletedExpense = await Expense.findByIdAndDelete(id);

  res.status(200).json({ success: true, deletedExpense });
});
