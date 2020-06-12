const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    middlename: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    contactinfo: {
      type: String,
      default: "no info",
    },
    birthday: {
      type: Date,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
