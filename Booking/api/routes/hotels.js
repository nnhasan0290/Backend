const express = require("express");
const router = express.Router();
const  HotelModel = require("../models/Hotel.js");

exports.creatingHotel = router.post("/", async (req, res) => {
  try {
    const savedHotel = await HotelModel.create(req.body);
    console.log(savedHotel);
    res.status(200).json(savedHotel);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

