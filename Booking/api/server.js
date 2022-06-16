const app =  require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();


//Data base connection
const mongo_connect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_KEY, () => {
        console.log("Mongoose connected successfully");
      });
    } catch (error) {
      console.log(error);
    }
  };

  mongo_connect();

app.listen(8080, () => {
    console.log("app is running on port 800");
  });