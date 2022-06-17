const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const createError = require("../utils/createError.js");
const jwt = require("jsonwebtoken");

exports.registerUser = catchAsyncErrors(async (req, res, nex) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({ ...req.body, password: hash });
  const savedUser = await newUser.save();

  res.status(201).json({
    success: true,
    savedUser,
  });
});

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  let isUser = await User.findOne({ email: req.body.email });
  if (!isUser) {
    return next(createError(404, "email not found"));
  }
  const isPasswordOk = await bcrypt.compare(req.body.password, isUser.password);
  if (!isPasswordOk) {
    return next(createError(400, "wrong username or password"));
  }
  const { password, isAdmin, ...otherDetails } = isUser._doc;
  const token = jwt.sign(
    { id: isUser._id, isAdmin: isUser.isAdmin },
    "privatekey"
  );

  res
    .cookie("access-token", token, { httpOnly: true })
    .status(200)
    .json({
      details: { ...otherDetails },
      isAdmin,
    });
});
