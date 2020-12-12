const Boom = require('boom');
const rescue = require('express-rescue');
const { usersService } = require('../services/index');
const createJwtToken = require('../utils/createJwtToken');
const {
  userRegisterSchema,
  loginSchema,
  addressesSchema,
  userInfluencerSchema,
  influencerLinkSchema
} = require('../validationSchemas/usersSchemas/index');

const registerUser = rescue(async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword, cpf, birthDate } = req.body;

  const { error } = userRegisterSchema.validate({
    firstName, lastName, email, password, confirmPassword, cpf, birthDate
  });

  if (error) return next(Boom.badData(error));

  const userExists = await usersService.getUserByEmail(email);

  if (userExists) return next(Boom.conflict('Email já cadastrado'));

  if (req.body.influencer) {
    const { socialMedia, contentType, socialMediaName } = req.body.influencer;
    const { error } = userInfluencerSchema.validate({ socialMedia, contentType, socialMediaName });
    if (error) return next(Boom.badData(error));
  }

  const { cpf:usercpf, ...newUser } = await usersService.registerUser(req.body);

  const token = createJwtToken(newUser);

  return res.status(201).json({ token });
});

const loginUser = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password });

  if (error) return next(boom.badData(error));

  const user = await usersService.getUserByEmail(email);

  if (user.password !== password) return next(Boom.unauthorized('Email ou senha incorretos'));

  const token = createJwtToken(user);

  return res.status(200).json({ token });
});

const getAllAddresses = rescue(async(req, res, next) => {
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

  const { password, ...updatedUser } = await usersService.updateUserAddressesByEmail(email, addresses);

  return res.status(201).json(updatedUser);

});

const createInfluencerLink = rescue(async (req, res, next) => {
  const { influencerLink } = req.body;
  const { _id } = req.user;

  const { error } = influencerLinkSchema.validate({ influencerLink });

  if (error) return next(Boom.badData(error));

  const linkExists = await usersService.getInfluencerByLink(influencerLink);

  if (linkExists) return next(Boom.conflict('Este link já esta sendo utilizado'));

  const userWithLink = await usersService.createInfluencerLink(_id, influencerLink);

  if (!userWithLink) return next(Boom.badData('Não é um influencer ainda'));

  const influencer = userWithLink.influencer;

  return res.status(201).json({ influencer });
});

const updateUserToInfluencer = rescue(async (req, res, next) => {
  const { socialMedia, contentType, socialMediaName } = req.body;

  const { error } = userInfluencerSchema.validate({ socialMedia, contentType, socialMediaName });

  if (error) return next(Boom.badData(error));

  const { _id } = req.user;

  const newInfluencer = await usersService.updateUserToInfluencer(_id, {
    socialMedia, contentType, socialMediaName
  });

  const influencer = newInfluencer.influencer;

  return res.status(200).json({ influencer });
});

module.exports = {
  registerUser,
  loginUser,
  updateUsersAddresses,
  getAllAddresses,
  createInfluencerLink,
  updateUserToInfluencer,
};
