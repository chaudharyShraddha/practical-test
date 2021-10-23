const bcrypt = require("bcryptjs");
const jwtUtil = require("../helpers/jwtUtils");

const UserModel = require("../../database/user");

exports.createUser = async (userData) => {
  try {
    const { fname, lname, email, password } = userData;

    //hash password
    const hashPassword = bcrypt.hashSync(password);

    const newUser = new UserModel({
      fname,
      lname,
      email,
      password: hashPassword,
    });
    const createdUser = await newUser.save();
    return createdUser;
  } catch (error) {
    console.log("error", error);
  }
};

exports.login = async (userData) => {
  try {
    const user = await UserModel.findOne({ email: userData.email });
    if (user) {
      const token = jwtUtil.getAuthToken({
        _id: user._id,
        email: user.email,
      });

      return token;
    }
  } catch (error) {
    console.log("error", error);
  }
};
