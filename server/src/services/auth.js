const { createUser, login } = require("../models/auth");

exports.userRegistration = async (userData) => await createUser(userData);
exports.login = async (userData) => await login(userData);
