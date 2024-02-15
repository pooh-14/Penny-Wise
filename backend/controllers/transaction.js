const { default: mongoose } = require("mongoose");
const asyncHandler = require("../middleware/async");
const Transaction = require("../models/transaction");
const Hobbies = require("../models/hobbies");

// exports.addUser = asyncHandler(async (req, res, next) => {
//   const { name, balance } = req.body;
//   console.log("name:", name, "balance:", balance);

//   // Add Expense
//   const users = await Transaction.create({
//     name,
//     balance,
//   });

//   res.status(200).json({ success: true, users: users });
// });

exports.createAccount = async (req, res) => {
  const { name, balance } = req.body;
  console.log(name, "-name", balance, "-balance");

  const session = await mongoose.startSession();
  session.startTransaction();

  // console.log(session, "---session");

  try {
    await Transaction.create([{ name, balance }], { session });
    // console.log(name, "-name", balance, "-balance");
    await session.commitTransaction();
    res
      .status(201)
      .json({ success: true, message: "Account created successfully" });
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({ success: false, message: "Error creating account" });
    throw error;
  } finally {
    session.endSession();
  }
};

exports.addHobby = async (req, res) => {
  const { hobbies, id } = req.body;
  console.log(hobbies, "-hobby");

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const hobb = await Hobbies.create([{ hobbies, userId: id }], { session });
    await session.commitTransaction();
    res
      .status(201)
      .json({ success: true, message: "Hobby added successfully" });
    console.log(hobb);
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({ success: false, message: "Error adding a hobby" });
    throw error;
  } finally {
    session.endSession();
  }
};

exports.performMoneyTransfer = async (req, res) => {
  const { receiverId, amount } = req.body;
  const { senderId } = req.query;

  console.log("name:", receiverId);
  console.log("amount:", amount);
  console.log("senderId:", senderId);

  // Start a transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  const sender = await Transaction.findById({ _id: senderId }).session(session);
  if (!sender) throw new Error("Sender not found!");

  const receiver = await Transaction.findById({ _id: receiverId }).session(session);
  if (!receiver) throw new Error("Receiver not found!");

  try {
    await Transaction.updateOne(
      { _id: senderId },
      { $inc: { balance: -amount } },
      { session }
    );
    await Transaction.updateOne(
      { _id: receiverId },
      { $inc: { balance: amount } },
      { session }
    );

    await session.commitTransaction();
    res.status(200).json({ success: true, message: "paisa transfer" });
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({ success: false, message: error.message });
    throw error;
  } finally {
    session.endSession();
  }
};

exports.deleteHobby = async (req, res) => {
  const { userId, hobbiesId } = req.query;

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const user = await Transaction.findById({ _id: userId }).session(session);
    if (!user) throw new Error("User not found!");

    const hobby = await Hobbies.findById({ _id: hobbiesId }).session(session);
    if (!hobby) throw new Error("Hobbies not found!");

    // console.log(hobbiesId, "-hobbiesId");
    // console.log(userId, "-userId");
    // console.log(hobby.userId, "-hobby.userId");
    console.log(userId != hobby.userId, "-user == hobby.userId");

    if (userId != hobby.userId)
      throw new Error("Hobbies and user do match!");

    // console.log("deleted successfullyyyyyyy");

    await Hobbies.findByIdAndDelete(hobbiesId).session(session);

    await session.commitTransaction();
    res
      .status(200)
      .json({ success: true, message: "Hobbies deleted successfully" });
  } catch (error) {
    await session.abortTransaction();
    res.status(400).json({ success: false, message: error.message });
    throw error;
  } finally {
    session.endSession();
  }
};

exports.getBalance = async (req, res) => {
  const { name } = req.query;
  console.log(name);

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const data = await Transaction.findOne({ name })
      .select("balance -_id")
      .session(session);

    console.log(data, ": data");
    await session.commitTransaction();
    res.status(200).json({ success: true, data });
  } catch (error) {
    await session.abortTransaction();
    res.status(500).json({ success: false, message: "Error fetching balance" });
    throw error;
  } finally {
    session.endSession();
  }
};
