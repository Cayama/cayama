const rescue = require('express-rescue');
const Boom = require('boom');
const usersService = require('../services/usersService');
const userSchema = require('../services/schemas/userSchema');
const createJwtToken = require('../utils/createJwtToken');

const registerUser = rescue(async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword, birthDate } = req.body;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return next(Boom.badData('Faltando informações'));
  }

  const userExists = await usersService.getUserByEmail(email)

  if (userExists) return next(Boom.conflict('Email já cadastrado'));

  const { error } = userSchema.validate({
    firstName, lastName, email, password, confirmPassword, birthDate
  });

  if (error) return next(Boom.badData(error))

  const newUser = await usersService.registerUser({ firstName, lastName, email, password, birthDate });

  const token = createJwtToken(newUser)

  return res.status(201).json({ ...newUser, token });
});

module.exports = {
  registerUser,
};
