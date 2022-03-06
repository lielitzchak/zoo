const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const employeeModel = request("../models/employees-model.js");
const employeeModel = require("../models/employees-model");

module.exports = {
  getAllEmploys: async () => {
    return await employeeModel
      .find()
      .then((data) => response.json(data))
      .catch((error) => response.json({ error: error }));
  },
  getByIdEmploy: () => {
    return await employeeModel
      .findById(request.params.id)
      .then((data) => response.json(data))
      .catch((error) => response.json({ error: error }));
  },
  putEmploy: () => {
    return await employeeModel
      .findByIdAndUpdate(request.params.id, request.body)
      .then((data) => response.status(200).json(data))
      .catch((error) => response.json({ error: error }));
  },
  postEmploy: () => {
    return await employeeModel
      .insertMany(request.body)
      .then((data) => response.json(data))
      .catch((error) => response.json({ error: error }));
  },
  deleteEmploy: () => {
    return await employeeModel
      .findOneAndDelete(request.params.id)
      .then((data) => response.status(200).json(data))
      .catch((error) => response.json({ error: error }));
  },
};
