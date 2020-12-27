const Boom = require('boom');
const rescue = require('express-rescue');
const { usersService } = require('../services/index');
const { createJwtToken } = require('../utils/index');
const {
  userRegisterSchema,
  loginSchema,
  addressesSchema,
  userInfluencerSchema,
  influencerLinkSchema,
  getProductSchema,
  bankAccountSchema,
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

const getAllAddresses = rescue(async (req, res, next) => {
  const { _id } = req.user;

  const { addresses } = await usersService.getUserById(_id);

  if (!addresses.length) return next(Boom.notFound('Endereços não encontrados'));

  return res.status(200).json({ addresses });
});

const updateUsersAddresses = rescue(async (req, res, next) => {
  const { addresses } = req.body;
  const { _id } = req.user;

  const { error } = addressesSchema.validate(addresses);

  if (error) return next(Boom.badData(error));

  const {
    password, confirmPassword, ...updatedUser
  } = await usersService.updateUserAddressesById(_id, addresses);

  return res.status(201).json(updatedUser);
});

const createInfluencerLink = rescue(async (req, res, next) => {
  const { influencerLink } = req.body;
  const { _id } = req.user;

  validateSchemas(next, influencerLinkSchema, { influencerLink });

  const linkExists = await usersService.getInfluencerByLink(influencerLink);

  if (linkExists) return next(Boom.conflict('Este link já esta sendo utilizado'));

  const user = await usersService.getUserById(_id);

  if (!user.influencer.influencerLink) return next(Boom.badData('Não é um influencer ainda'));

  const userWithLink = await usersService.createInfluencerLink(
    _id,
    influencerLink,
  );

  const { influencer } = userWithLink;

  return res.status(201).json({ influencer });
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

const createBankAccount = rescue(async (req, res, next) => {
  const { bank, bankDigit, accountNumberWithDigit, agency } = req.body;
  const { _id } = req.user;

  validateSchemas(next, bankAccountSchema, {
    bank,
    bankDigit,
    accountNumberWithDigit,
    agency,
  });

  const { password, confirmPassword, ...userWithBank } = await usersService.createBankAccount(
    {
      bank,
      bankDigit,
      accountNumberWithDigit,
      agency,
    },
    _id,
  );

  return res.status(201).json({ userWithBank });
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

const getPurchaseByField = rescue(async (req, res, next) => {
  const { fieldToSearch } = req.body;
  const { _id: userId } = req.user;

  validateSchemas(next, getProductSchema, { fieldToSearch:
    { field: 'fieldSearch', value: fieldToSearch },
  });

  const purchaseList = await usersService.getPurchaseByField(
    fieldToSearch,
    userId,
  );

  return res.status(200).json({ purchaseList });
});

module.exports = {
  registerUser,
  userLogin,
  updateUsersAddresses,
  getAllAddresses,
  createInfluencerLink,
  updateUserToInfluencer,
  createBankAccount,
  updateBasicRegistersData,
  getUserById,
  getPurchaseByField,
};
