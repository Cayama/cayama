const Boom = require('boom');
const rescue = require('express-rescue');
const { usersService, influencerService } = require('../services/index');
const { createJwtToken } = require('../utils/index');
const {
  userRegisterSchema,
  loginSchema,
  userInfluencerSchema,
  updateRegisterInfoSchema,
} = require('../validationSchemas/usersSchemas/index');
const { mailer } = require('../utils/index');
const { validateSchemas } = require('../services/schemasService');

const registerUser = rescue(async (req, res, next) => {
  const {
    firstName,
    lastName,
    cpf,
    birthDate,
    email,
    password,
    confirmPassword,
    addresses = [],
    isInfluencer = false,
    influencer = {},
    newsAcceptance = false,
    privacyAndTerms,
  } = req.body;
  console.log(influencer)
  validateSchemas(next, userRegisterSchema, {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    cpf,
    birthDate,
    newsAcceptance,
    privacyAndTerms,
  });

  const userExists = await usersService.getUserByEmail(email);

  if (userExists) return next(Boom.conflict('Email já cadastrado'));

  if (influencer.socialMedia) {
    const { socialMedia, contentType, socialMediaName, influencerLink } = req.body.influencer;

    const influencerLinkCheck = await influencerService.getInfluencerByLink(influencerLink);

    if (influencerLinkCheck) return next(Boom.conflict('Link já existente'));

    validateSchemas(next, userInfluencerSchema, {
      socialMedia: { field: 'socialMedia', value: socialMedia },
      contentType: { field: 'contentType', value: contentType },
      socialMediaName,
      influencerLink,
    });
  }

  const { password: userPasswordFromDB, ...newUser } = await usersService.registerUser({
    personalData: {
      firstName,
      lastName,
      cpf,
      birthDate,
    },
    accountData: {
      email,
    },
    isInfluencer,
    password,
    addresses,
    influencer,
    newsAcceptance,
    privacyAndTerms,
  });

  const token = createJwtToken(newUser);

  const { _id, ...userDataToSendFront } = newUser;
  
  return res.status(201).json({ token, ...userDataToSendFront });
});

const userLogin = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  validateSchemas(next, loginSchema, { email, password });

  const user = await usersService.getUserByEmail(email);

  if (!user) return next(Boom.unauthorized('Email ou senha incorretos'));

  if (user.password !== password) return next(Boom.unauthorized('Email ou senha incorretos'));

  const token = createJwtToken(user);

  const { _id, password: userPasswordFromDB, ...userDataToSendFront } = user;

  return res.status(200).json({ token, ...userDataToSendFront });
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

  // validateSchemas(next, updateRegisterInfoSchema, {
  //   fieldToUpdate: { field: 'fieldToUpdate', value: fieldToUpdate },
  //   newValueObject: { newValue, fieldToUpdate },
  // });

  const { _id: dbId, password, ...updatedUser } = await usersService.updateBasicRegistersData(
    fieldToUpdate,
    newValue,
    _id,
  );
  console.log(updatedUser)
  return res.status(200).json({ ...updatedUser });
});

const getUserById = rescue(async (req, res, _next) => {
  const { _id } = req.user;
  const { password, ...user } = await usersService.getUserById(_id);

  return res.status(200).json({ user });
});

module.exports = {
  registerUser,
  userLogin,
  updateUserToInfluencer,
  updateBasicRegistersData,
  getUserById,
};
