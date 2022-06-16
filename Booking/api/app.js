const express = require("express");
const app = express();
const { creatingHotel } = require("./routes/hotels");

app.use(express.json());

app.use("/api/hotel", creatingHotel);
module.exports = app;
