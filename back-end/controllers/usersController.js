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

  const { error } = userRegisterSchema.validate({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    cpf,
    birthDate,
  });

  if (error) return next(Boom.badData(error));

  const userExists = await usersService.getUserByEmail(email);

  if (userExists) return next(Boom.conflict('Email já cadastrado'));

  if (influencer.socialMedia) {
    const { socialMedia, contentType, socialMediaName, influencerLink } = req.body.influencer;

    const influencerLinkCheck = await usersService.getInfluencerByLink(influencerLink);

    if (influencerLinkCheck) return next(Boom.conflict('Link já existente'));

    const { error: influencerError } = userInfluencerSchema.validate({
      socialMedia: { field: 'socialMedia', value: socialMedia },
      contentType: { field: 'contentType', value: contentType },
      socialMediaName,
      influencerLink,
    });
    if (influencerError) return next(Boom.badData(influencerError));
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

const loginUser = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password });

  if (error) return next(Boom.badData(error));

  const user = await usersService.getUserByEmail(email);

  if (!user) return next(Boom.unauthorized('Email ou senha incorretos'));

  if (user.password !== password) return next(Boom.unauthorized('Email ou senha incorretos'));

  const token = createJwtToken(user);

  return res.status(200).json({ token });
});

const getAllAddresses = rescue(async (req, res, next) => {
  const { email } = req.user;

  const { addresses } = await usersService.getUserByEmail(email);

  if (!addresses) return next(Boom.notFound('Endereços não encontrados'));

  return res.status(200).json({ addresses });
});

const updateUsersAddresses = rescue(async (req, res, next) => {
  const { addresses } = req.body;
  const { email } = req.user;

  const { error } = addressesSchema.validate(addresses);

  if (error) return next(Boom.badData(error));

  const {
    password,
    ...updatedUser
  } = await usersService.updateUserAddressesByEmail(email, addresses);

  return res.status(201).json(updatedUser);
});

const createInfluencerLink = rescue(async (req, res, next) => {
  const { influencerLink } = req.body;
  const { _id } = req.user;

  const { error } = influencerLinkSchema.validate({ influencerLink });

  if (error) return next(Boom.badData(error));

  const linkExists = await usersService.getInfluencerByLink(influencerLink);

  if (linkExists) return next(Boom.conflict('Este link já esta sendo utilizado'));

  const userWithLink = await usersService.createInfluencerLink(
    _id,
    influencerLink,
  );

  if (!userWithLink) return next(Boom.badData('Não é um influencer ainda'));

  const { influencer } = userWithLink;

  return res.status(201).json({ influencer });
});

const updateUserToInfluencer = rescue(async (req, res, next) => {
  const { socialMedia, contentType, socialMediaName, influencerLink } = req.body;

  const { error } = userInfluencerSchema.validate({
    socialMedia: { field: 'socialMedia', value: socialMedia },
    contentType: { field: 'contentType', value: contentType },
    socialMediaName,
    influencerLink,
  });

  if (error) return next(Boom.badData(error));

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

  const { error } = bankAccountSchema.validate({
    bank,
    bankDigit,
    accountNumberWithDigit,
    agency,
  });

  if (error) return next(Boom.badData(error));

  const userWithBank = await usersService.createBankAccount(
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

  const { error } = updateRegisterInfoSchema.validate({
    fieldToUpdate: { field: 'fieldToUpdate', value: fieldToUpdate },
    newValueObject: { newValue, fieldToUpdate },
  });

  if (error) return next(Boom.badData(error));

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

  const { error } = getProductSchema.validate({ fieldToSearch:
    { field: 'fieldSearch', value: fieldToSearch },
  });

  if (error) return next(Boom.badData(error));

  const purchaseList = await usersService.getPurchaseByField(
    fieldToSearch,
    userId,
  );

  return res.status(200).json({ purchaseList });
});

module.exports = {
  registerUser,
  loginUser,
  updateUsersAddresses,
  getAllAddresses,
  createInfluencerLink,
  updateUserToInfluencer,
  createBankAccount,
  updateBasicRegistersData,
  getUserById,
  getPurchaseByField,
};
