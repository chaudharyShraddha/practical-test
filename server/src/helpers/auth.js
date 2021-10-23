const jwtUtil = require('./jwtUtils');
const utils = require('./utils');
const errorUtil = require('./error');
const userModel = require('../../database/user');
const auth = {};

// check autheticated user
auth.isAuthenticatedUser = async (req, res, next) => {
  let token = req.headers && req.headers['x-auth-token'];

  if (utils.empty(token)) {
    token = req.body && req.body['x-auth-token'];
  }
  const userTokenData = jwtUtil.decodeAuthToken(token);

  // console.log('userTokenData', userTokenData._id);

  if (utils.empty(userTokenData)) {
    return errorUtil.notAuthenticated(res, req);
  }

  // const fetchRole = await RoleModel.findById(userTokenData.role);

  const fetchUserDetails = await userModel.findById(userTokenData._id);
  if (fetchUserDetails) {
    req.userData = fetchUserDetails;
    return next();
  } else {
    return errorUtil.notAuthenticated(res, req);
  }
};

module.exports = auth;
