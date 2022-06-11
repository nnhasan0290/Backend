import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import HotelRoutes from "./routes/hotels.js";

dotenv.config();
const app = express();

app.use(express.json());

//Routers
app.get("/get", (req, res) => {
  res.status(200).json("this is a get request");
})
app.use("/api/hotels", HotelRoutes);


// Database
const mongo_connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_KEY, () => {
      console.log("Mongoose connected successfully");
    });
  } catch (error) {
    console.log(error);
  }
};
app.listen(8080, () => {
  mongo_connect();
  console.log("app is running on port 800");
});
