const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const animalModel = require("../models/Animals-model");

module.exports = {
  getAllAnimals: async (request, response) => {
    return await animalModel
      .find()
      .then((data) => response.json(data))
      .catch((error) => response.json({ error: error }));
  },
  getByIdAnimal: async (request, response) => {
    return await animalModel
      .findById(request.params.id)
      .then((data) => response.json(data))
      .catch((error) => response.json({ error: error }));
  },
  postAnimal: async (request, response) => {
    return await animalModel
      .insertMany(request.body)
      .then((data) => response.json(data))
      .catch((error) => response.json({ error: error }));
  },
  putAnimal: async (request, response) => {
    return await animalModel
      .findByIdAndUpdate(request.params.id, request.body)
      .then((data) => response.status(200).json(data))
      .catch((error) => response.json({ error: error }));
  },
  deleteAnimal: async (request, response) => {
    return await animalModel
      .findOneAndDelete(request.params.id)
      .then((data) => response.status(200).json(data))
      .catch((error) => response.json({ error: error }));
  },
}; 

// register: async (request, response) => {
//   if (employeesModel.exists(request.body.email) == true)
//     return response.status(200).json({ massage: "email exist" });
//   bcrypt.hash(request.body.email, 10, async (error, hash) => {
//     if (error) return response.status(500).json({ massage: error });
//     request.body.password = hash;
//     await employeesModel
//       .create(request.body)
//       .then((result) =>
//         response.status(200).json({ massage: "added", result })
//       )
//       .catch((err) => response.status(500).json({ err }));
//   });
// },
