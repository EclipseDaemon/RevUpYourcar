const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Database Connnected !");
  } catch (err) {
    console.log("Database Connection Failed!", err);
    process.exit(1);
  }
};

module.exports = connectDb;
