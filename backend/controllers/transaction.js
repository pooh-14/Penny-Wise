const { default: mongoose } = require("mongoose");
const asyncHandler = require("../middleware/async");
const Transaction = require("../models/transaction");

exports.addUser = asyncHandler(async (req, res, next) => {
  const { name, balance } = req.body;
  console.log("name:", name, "balance:", balance);

  // Add Expense
  const users = await Transaction.create({
    name,
    balance,
  });

  res.status(200).json({ success: true, users: users });
});

exports.performMoneyTransfer = async (req, res) => {
  const { name, amount } = req.body;
  const { senderId } = req.query;

  console.log("name:", name);
  console.log("amount:", amount);
  console.log("senderId:", senderId);

  // Start a transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {

    // Update sender and receiver balances
    await Transaction.updateOne(
      { _id: senderId },
      { $inc: { balance: -amount } },
      { session }
    );
    await Transaction.updateOne(
      { name },
      { $inc: { balance: amount } },
      { session }
    );

    // If everything is successful, commit the transaction
    await session.commitTransaction();
    res.status(200).json({ success: true, message: "paisa transfer" });
  } catch (error) {
    // If any error occurs, abort the transaction
    await session.abortTransaction();
    res.status(400).json({ success: false, message: "paisa vapas!!" });
    throw error;
  } finally {
    // End the session
    session.endSession();
  }
};
