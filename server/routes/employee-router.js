const employeeModel = require("express").Router();
const employeeController = require("../controller/employee-controller");
employeeModel.get("/", employeeController.getAllEmploys());
employeeModel.get("/:id", employeeController.getByIdEmploy());
employeeModel.post("/", employeeController.postEmploy());
employeeModel.put("/:id", employeeController.putEmploy());
employeeModel.delete("/:id", employeeController.deleteEmploy());
