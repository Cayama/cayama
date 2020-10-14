const Joi = require('joi');
const { emailSchema, registerNameSchema, passwordSchema, cnpjSchema } = require('../inputSchemas');

module.exports = Joi.object({
  storeName: registerNameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Joi.ref('password'),
  cnpj: cnpjSchema,
});
