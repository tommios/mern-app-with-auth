const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required!"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email field is required!"],
  },
  password: {
    type: String,
    required: [true, "Password field is required!"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userScheme.plugin(uniqueValidator);

module.exports = User = mongoose.model("user", UserSchema);
