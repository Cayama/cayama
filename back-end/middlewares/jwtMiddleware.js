const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const Joi = require('joi');
const Boom = require('boom');
const usersModel = require('../models/usersModel');

const jwtTokenSchema = Joi.string().error(() => new Error('token inválido'));

const { SECRET } = process.env;

module.exports = (isNecessary = true) => rescue(async(req, _res, next) => {
  const token = req.headers.authorization;
  const { error } = jwtTokenSchema.validate(token);

  if (error) return next(Boom.unauthorized(error));

  const decoded = jwt.verify(token, SECRET);

  const user = await usersModel.getUserByEmail(decoded.user.email);

  if (!user) return next(Boom.notFound('Usuário não encontrado'));

  req.user = user;

  next();
});
