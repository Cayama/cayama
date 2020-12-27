const Boom = require('boom');
const rescue = require('express-rescue');
const { usersService } = require('../services/index');
const { createJwtToken } = require('../utils/index');
const {
  userRegisterSchema,
  loginSchema,
  userInfluencerSchema,
  updateRegisterInfoSchema,
} = require('../validationSchemas/usersSchemas/index');

const { validateSchemas } = require('../services/schemasService');

const registerUser = rescue(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    cpf,
    birthDate,
    addresses = [],
    influencer = {},
  } = req.body;

  validateSchemas(next, userRegisterSchema, {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    cpf,
    birthDate,
  });

  const userExists = await usersService.getUserByEmail(email);

  if (userExists) return next(Boom.conflict('Email já cadastrado'));

  if (influencer.socialMedia) {
    const { socialMedia, contentType, socialMediaName, influencerLink } = req.body.influencer;

    const influencerLinkCheck = await usersService.getInfluencerByLink(influencerLink);

    if (influencerLinkCheck) return next(Boom.conflict('Link já existente'));

    validateSchemas(next, userInfluencerSchema, {
      socialMedia: { field: 'socialMedia', value: socialMedia },
      contentType: { field: 'contentType', value: contentType },
      socialMediaName,
      influencerLink,
    });
  }

  const { cpf: usercpf, ...newUser } = await usersService.registerUser({
    firstName,
    lastName,
    email,
    password,
    cpf,
    birthDate,
    addresses,
    influencer,
  });

  const token = createJwtToken(newUser);

  return res.status(201).json({ token });
});

const userLogin = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  validateSchemas(next, loginSchema, { email, password });

  const user = await usersService.getUserByEmail(email);

  if (!user) return next(Boom.unauthorized('Email ou senha incorretos'));

  if (user.password !== password) return next(Boom.unauthorized('Email ou senha incorretos'));

  const token = createJwtToken(user);

  return res.status(200).json({ token });
});

const updateUserToInfluencer = rescue(async (req, res, next) => {
  const { socialMedia, contentType, socialMediaName, influencerLink } = req.body;

  validateSchemas(next, userInfluencerSchema, {
    socialMedia: { field: 'socialMedia', value: socialMedia },
    contentType: { field: 'contentType', value: contentType },
    socialMediaName,
    influencerLink,
  });

  const { _id } = req.user;

  const { influencer } = await usersService.updateUserToInfluencer(_id, {
    socialMedia,
    contentType,
    socialMediaName,
    influencerLink,
  });

  return res.status(200).json({ influencer });
});

const updateBasicRegistersData = rescue(async (req, res, next) => {
  const { fieldToUpdate, newValue } = req.body;
  const { _id } = req.user;

  validateSchemas(next, updateRegisterInfoSchema, {
    fieldToUpdate: { field: 'fieldToUpdate', value: fieldToUpdate },
    newValueObject: { newValue, fieldToUpdate },
  });

  const updatedUser = await usersService.updateBasicRegistersData(
    fieldToUpdate,
    newValue,
    _id,
  );

  return res.status(200).json({ updatedUser });
});

const getUserById = rescue(async (req, res, _next) => {
  const { _id } = req.user;
  const { password, ...user } = await usersService.getUserById(_id);

  return res.status(200).json({ user });
});

module.exports = {
  registerUser,
  userLogin,
  // updateUsersAddresses,
  // getAllAddresses,
  // createInfluencerLink,
  updateUserToInfluencer,
  // createBankAccount,
  updateBasicRegistersData,
  getUserById,
  // getPurchaseByField,
};
