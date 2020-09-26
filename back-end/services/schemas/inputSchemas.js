const Joi = require('@hapi/joi');

const userNameSchema = Joi
  .string()
  .alphanum()
  .min(3)
  .max(30)
  .required()
  .error(() => new Error('Nome deve ter pelo menos 3 caracteres alfanuméricos'));

const passwordSchema = Joi
  .string()
  .min(8)
  .alphanum()
  .required()
  .error(() => new Error('Senha deve conter 8 caracteres alfanuméricos'));

const emailSchema = Joi
  .string()
  .regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  .required()
  .error(() => new Error('Email inválido'));

const birthDateSchema = Joi.string();

module.exports = {
  userNameSchema,
  passwordSchema,
  emailSchema,
  birthDateSchema,
};
