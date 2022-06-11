import express from "express";
const router = express.Router();
import HotelModel from "../models/Hotel.js";

router.post("/", async (req, res) => {
  const newHotel = new HotelModel(req.body);
  try {
    const savedHotel = await newHotel.save();
    console.log(savedHotel);
    res.status(200).json(savedHotel);
  } catch (error) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default router;
