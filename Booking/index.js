import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Universe");
});

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
