const {
  defaultErrorObject,
  userWithSameEmailErrorObject,
  userNotExistsErrorObject,
  passwordNotMatchErrorobject,
} = require("../constants/errors");
const UserModel = require("../../database/user");
const bcrypt = require("bcryptjs");

exports.checkEmailAlreadyExist = async (req, res, next) => {
  try {
    const { email, user_id } = req.body;
    const userWithEmail = await UserModel.findOne({ email }, "_id email");

    if (userWithEmail) {
      if (userWithEmail._id == user_id) {
        next();
      } else {
        res.status(500).json(userWithSameEmailErrorObject);
      }
    } else {
      next();
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorObject.error_type,
      error_message: error.errorMessage || defaultErrorObject.error_message,
    });
  }
};

exports.checkLoginCreds = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const User = await UserModel.findOne({ email }, "_id password");
    if (User) {
      const status = bcrypt.compareSync(password, User.password);
      if (!status) {
        res.status(500).json({
          error_type: passwordNotMatchErrorobject.error_type,
          error_message: passwordNotMatchErrorobject.error_message,
        });
      } else {
        next();
      }
    } else {
      res.status(500).json({
        error_type: userNotExistsErrorObject.error_type,
        error_message: userNotExistsErrorObject.error_message,
      });
    }
  } catch (error) {
    console.log("error",error);
    res.status(error.statusCode || 500).json({
      error_type: error.errorType || defaultErrorObject.error_type,
      error_message: error.errorMessage || defaultErrorObject.error_message,
    });
  }
};
