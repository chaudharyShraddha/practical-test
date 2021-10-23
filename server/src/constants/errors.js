module.exports = {
  defaultErrorObject: {
    error_type: 'INTERNAL_SERVER_ERROR',
    error_message: 'Something went wrong. Please try again later',
  },
  userWithSameEmailErrorObject: {
    error_type: "USER_ALREADY_EXISTS",
    error_message: "user with this email already exists",
  },
  userNotExistsErrorObject: {
    error_type: "INVALID_CREDENTIALS",
    error_message: "User is not registered"
  },
  passwordNotMatchErrorobject: {
    error_type: 'INVALID_CREDENTIALS', 
    error_message: 'Incorrect email or password',
  },
  notAuthorizedErrorObject: {
    error_type: 'NOT_AUTHORIZED', 
    error_message: 'Not authorized user',
  }
};
