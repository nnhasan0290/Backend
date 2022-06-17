const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleOne,
  getAllHotels,
} = require("../controllers/hotelController.js");
const router = express.Router();

router.route("/new").post(createHotel);
router.route("/:id").put(updateHotel).delete(deleteHotel).get(getSingleOne);
router.route("/").get(getAllHotels);

module.exports = router;
