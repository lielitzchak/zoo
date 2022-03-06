const animalModel = require("express").Router();
const animalsController = require("../controller/animals-controller");
animalModel.get("/", animalsController.getAllAnimals);
animalModel.post("/", animalsController.postAnimal);
animalModel.get("/:id", animalsController.getByIdAnimal);
animalModel.put("/:id", animalsController.putAnimal);
animalModel.delete("/:id", animalsController.deleteAnimal);
module.exports = animalModel;
