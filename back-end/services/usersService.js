const userModel = require('../models/usersModel');

const getUserByEmail = async (email) => {
  const user = await userModel.getUserByEmail(email);
  return user;
}

const registerUser = async (userObj) => {
  const user = await userModel.registerUser(userObj);
  return user;
}

const updateUserAddressesByEmail = async (email, addresses) => {
  const updatedUser = await userModel.updateUserAddressesByEmail(email, addresses);
  return updatedUser;
};

module.exports = {
  registerUser,
  getUserByEmail,
  updateUserAddressesByEmail,
};
