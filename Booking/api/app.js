const express = require("express");
const app = express();
const HotelRoutes = require("./routes/hotels");
const authRoutes = require("./routes/auth.js");
const errorHandler = require("./middlewares/error.js");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/hotel", HotelRoutes);
app.use("/api/auth", authRoutes);
app.use(errorHandler);
module.exports = app;
