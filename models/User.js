const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  rate: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    validate: value => validator.isEmail(value)
  }
});

module.exports = mongoose.model("User", userSchema);
