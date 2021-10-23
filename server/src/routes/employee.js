const express = require("express");
const employeeController = require("../controllers/employee");
const { validateEmployeeData } = require("../validators/employee");

const AuthHelper = require("../helpers/auth");

const router = express.Router();

router.post("/employee", [
  AuthHelper.isAuthenticatedUser,
  validateEmployeeData,
  employeeController.addEmployee,
]);

router.get(
  "/employee",
  AuthHelper.isAuthenticatedUser,
  employeeController.getAllEmployee
);

router.get(
  "/employee/:employee_id",
  AuthHelper.isAuthenticatedUser,
  employeeController.getEmployeeById
);

module.exports = router;
