require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const connectDB = () => {
  main().catch((err) => console.log(err));

  async function main() {
    mongoose.connect(process.env.DB_URL).then(
      () => {
        console.log("connected to the DB");
      },
      (err) => {
        console.error(err);
      }
    );
  }
};

// create schema for blogs


module.exports = {  connectDB   };
