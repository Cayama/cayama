const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const Joi = require('joi');
const Boom = require('boom');
const usersModel = require('../models/usersModel');

const jwtTokenSchema = Joi.string().required().error(() => new Error('token inválido'));

const { SECRET } = process.env;

module.exports = rescue(async (req, _res, next) => {
  const token = req.headers.authorization;
  const { error } = jwtTokenSchema.validate(token);

  if (error) return next(Boom.unauthorized(error));

  try {
    const decoded = jwt.verify(token, SECRET);

    const user = await usersModel.getUserByEmail(decoded.user.accountData.email);
    if (!user) return next(Boom.unauthorized('Usuário não encontrado'));

    req.user = user;

    return next();
  } catch (err) {
    err.type = 'jwtExpired';
    next(Boom.unauthorized(err));
  }
});
