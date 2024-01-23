const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const bcrypt = require('bcrypt');

// @desc Register User
// @route POST /api/v1/auth/register
// @access Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Register user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  sendTokenResponse(user, 200, res);
});

// @desc Login User
// @eoute POST /api/v1/auth/login
// @access Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // get User
  const user = await User.findOne({ email }).select("+password");

  // User not found
  if (!user) {
    return next(new ErrorResponse(`User not found with email ${email}`, 401));
  }

  // compare password
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid email and password", 401));
  }

  sendTokenResponse(user, 200, res);
});

// Genrate JWT web token and cookies and send to res
const sendTokenResponse = (user, status, res) => {
  // get token
  const token = user.getJWTWebToken();

  console.log("Date.now : ", Date.now());
  console.log(
    "process.env.JWT_COOKIE_EXPIRE : ",
    process.env.JWT_COOKIE_EXPIRE
  );

  console.log("expire time : ", new Date(Date.now() + "30d"));

  const option = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    // Ensures that the cookie is accessible only through HTTP(S) and not through JavaScript.
    //  This is a security measure to prevent client-side scripts from accessing the cookie
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    option.secure = true;
  }

  res
    .status(status)
    .cookie("token", token, option)
    .json({ success: true, token });
};

// @desc Get login user
// @eoute Get /api/v1/auth/me
// @access Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  console.log();

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc Edit profile
// @eoute Get /api/v1/auth/edit-profile
// @access Private
exports.editProfile = asyncHandler(async (req, res, next) => {
  const { name, password, confirmPassword } = req.body;
  console.log("name:", name, "password:", password);
  const { id } = req.user;

  console.log(id, "userId");
//   console.log(req, "req");
  if (password !== confirmPassword) {
    return next(new ErrorResponse("Passwords do not match!", 401));
  }
  const editedProfile = await User.findByIdAndUpdate(
    id,
    {name, password },
    { new: true }
  );
  console.log(editedProfile, "editedProfile");

// // hash entered password
const salt = await bcrypt.genSalt(10);
editedProfile.password = await bcrypt.hash(password,salt);

await editedProfile.save()

  res.status(200).json({ success: true, editedProfile:editedProfile });
});
