const express = require("express");
const leavesController = require("../controllers/leaves");
const { validateLeaveData } = require("../validators/leaves");

const AuthHelper = require("../helpers/auth");

const router = express.Router();

router.post("/leave", [
  AuthHelper.isAuthenticatedUser,
  validateLeaveData,
  leavesController.addLeave,
]);

router.get(
  "/leave/:employee_id",
  AuthHelper.isAuthenticatedUser,
  leavesController.getLeaveByEmployeeId
);

module.exports = router;
