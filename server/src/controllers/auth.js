const { userRegistration, login } = require("../services/auth");

const { defaultErrorObject } = require("../constants/errors");

exports.authRegistration = async (req, res) => {
  try {
    const newUser = await userRegistration(req.body);
    if (newUser) {
      return res.status(200).json({
        status: true,
        message: "User created Successfully",
        user: newUser._id,
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json(defaultErrorObject);
  }
};

// login user
exports.login = async (req, res, next) => {
  try {
    const token = await login(req.body);
    if (token) {
      return res.status(200).json({
        status: true,
        message: "User login Successfully",
        token,
      });
    }
  } catch (error) {
    return res.status(error.statusCode || 500).json(defaultErrorObject);
  }
};
