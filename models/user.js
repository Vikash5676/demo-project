const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  skills: {
    type: Array,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
