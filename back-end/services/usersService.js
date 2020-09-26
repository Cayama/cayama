const userModel = require('../models/usersModel');

const getUserByEmail = async (email) => {
  const user = await userModel.getUserByEmail(email);
  return user;
}

const registerUser = async (userObj) => {
  const user = await userModel.registerUser(userObj);
  return user;
}

module.exports = {
  registerUser,
  getUserByEmail,
};
