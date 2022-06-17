const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Hotel = require("../models/Hotel");
const createError = require("../utils/createError");

exports.createHotel = catchAsyncErrors(async (req, res, next) => {
  let newHotel = new Hotel(req.body);
  let savedHotel = await newHotel.save();
  res.status(201).json({
    success: true,
    savedHotel,
  });
});
exports.updateHotel = catchAsyncErrors(async (req, res, next) => {
  let updatedHotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json({
    success: true,
    updatedHotel,
  });
});

exports.deleteHotel = catchAsyncErrors(async (req, res, next) => {
  await Hotel.findByIdAndDelete(req.params.id);
  res.status(200).json("hotel has been deleted successfully");
});

exports.getSingleOne = catchAsyncErrors(async (req, res, next) => {
  const hotel = await Hotel.findById(req.params.id);
  res.status(200).json({
    success: true,
    hotel,
  });
});

exports.getAllHotels = catchAsyncErrors(async (req, res, next) => {
  return next("this is an error message");
  const hotels = await Hotel.find();
  res.status(200).json({
    success: true,
    hotels,
  });
});
