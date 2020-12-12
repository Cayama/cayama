const { userModel } = require('../models/index');

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

const getInfluencerByLink = async (influencerLink) => {
  const influencer = await userModel.getInfluencerByLink(influencerLink);
  return influencer;
};

const createInfluencerLink = async (_id, influencerLink) => {
  const userWithLink = await userModel.createInfluencerLink(_id, influencerLink);
  return userWithLink
}

const updateUserToInfluencer = async (_id, influencerObj) => {
  const newInfluencer = await userModel.updateUserToInfluencer(_id, influencerObj);
  return newInfluencer;
}

module.exports = {
  registerUser,
  getUserByEmail,
  updateUserAddressesByEmail,
  getInfluencerByLink,
  createInfluencerLink,
  updateUserToInfluencer
};
