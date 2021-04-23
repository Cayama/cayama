const Boom = require('boom');
const { userModel } = require('../models/index');
const { validateSchemas } = require('../services/schemasService');
const {
  userInfluencerSchema,
  updateRegisterInfoSchema,
  userAddressesSchema,
} = require('../validationSchemas/usersSchemas/index');

const getUserByEmail = async (email) => {
  const user = await userModel.getUserByEmail(email);
  return user;
};

const registerUser = async (userObj) => {
  const user = await userModel.registerUser(userObj);
  return user;
};

const updateUserToInfluencer = async (_id, influencerObj) => {
  const newInfluencer = await userModel.updateUserToInfluencer(_id, influencerObj);
  return newInfluencer;
};

const getUserById = async (userId) => {
  const user = await userModel.getUserById(userId);
  return user;
};

const updateBasicRegistersData = async (fieldToUpdate, newValue, id, next) => {
  switch (fieldToUpdate) {
    case 'influencer':
      validateSchemas(next, userInfluencerSchema, {
        socialMedia: { field: 'socialMedia', value: newValue.socialMedia },
        contentType: { field: 'contentType', value: newValue.contentType },
        socialMediaName: newValue.socialMediaName,
        influencerLink: newValue.influencerLink,
      });
      break;
    case 'storeData' || 'personalData':
      validateSchemas(next, updateRegisterInfoSchema, {
        fieldToUpdate: { field: 'fieldToUpdate', value: fieldToUpdate },
        newValueObject: { newValue, fieldToUpdate },
      });
      break;
    case 'addresses':
      validateSchemas(next, userAddressesSchema, newValue);
      break;
    default:
      console.log(fieldToUpdate);
      break;
  }

  const updatedUser = await userModel.updateBasicRegistersData(fieldToUpdate, newValue, id);
  return updatedUser;
};

const insertNewObjectData = async (id, next, newObjectData) => {
  if (newObjectData.error) return next(Boom.badData(newObjectData.error));

  const newUserData = await userModel.insertNewObjectData(id, newObjectData);
  return newUserData;
};

module.exports = {
  registerUser,
  getUserByEmail,
  updateUserToInfluencer,
  getUserById,
  updateBasicRegistersData,
  insertNewObjectData,
};
