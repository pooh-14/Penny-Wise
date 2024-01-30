const asyncHandler = require("../middleware/async");
const Expense = require("../models/Expense");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const { default: mongoose } = require("mongoose");

exports.totalMonthlyExpense = asyncHandler(async (req, res, next) => {
  const currentUser = new mongoose.Types.ObjectId(req.user.id);
  const currentDate = new Date();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  console.log(currentUser, "-currentUser");
  console.log(currentDate, "-currentDate");
  console.log(firstDayOfMonth, "-firstDayOfMonth");
  console.log(lastDayOfMonth, "-lastDayOfMonth");

  const totalCount = await Expense.aggregate([
    {
      $match: {
        userId: currentUser,
        date: {
          // greater than equal to
          $gte: firstDayOfMonth,
          $lte: lastDayOfMonth,
        }
      },
    },
    {
      $group: {
        _id: null,
        totalAmount: { $sum: "$amount" },
        totalDocuments: { $sum: 1 },
      },
    },
  ]);
  res.status(200).json({ success: true, totalCount });
});
