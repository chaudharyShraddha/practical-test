const express = require("express");
const authController = require("../controllers/auth");
const { validateUser, validateAuthLogin } = require("../validators/auth");
const {
  checkEmailAlreadyExist,
  checkLoginCreds,
} = require("../middlewares/auth");

const router = express.Router();

router.post("/auth/registration", [
  validateUser,
  checkEmailAlreadyExist,
  authController.authRegistration,
]);

router.post(
  "/auth/login",
  validateAuthLogin,
  checkLoginCreds,
  authController.login
);

module.exports = router;
