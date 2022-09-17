const mongoose = require("mongoose");
const User = require("../models/user");
const connectDB = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};
const models = { User };
module.exports = { connectDB, models };
