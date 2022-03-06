const mongoose = require("mongoose");

const employees = new mongoose.Schema({
  name:{ type: String, required: true },
  role:{ type: String, required: true },
  email: { type: String, required: true },
  phone:{ type: Number, required: true },
});
module.exports = mongoose.model("Employees", employees);