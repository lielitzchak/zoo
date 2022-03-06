const mongoose = require("mongoose");
const animal = new mongoose.Schema({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  CageNumber: { type: Number, required: true },
  gender: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model("animal", animal);
