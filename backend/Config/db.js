
const mongoose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

module.exports = Connection;
