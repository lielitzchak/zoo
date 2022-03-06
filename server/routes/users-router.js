const UserModel = require("express").Router();
const UserController = require("../controller/users-controller");
UserModel.get("/", UserController.getAllUsers());
UserModel.get("/:id", UserController.getByIdUser());
UserModel.post("/", UserController.postUser());
UserModel.put("/:id", UserController.putUser());
UserModel.delete("/:id", UserController.deleteUser());
