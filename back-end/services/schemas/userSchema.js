const Joi = require('@hapi/joi');
const {
  userNameSchema,
  passwordSchema,
  emailSchema,
  birthDateSchema
} = require('./inputSchemas');

module.exports = Joi.object({
  firstName: userNameSchema,
  lastName: userNameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Joi.ref('password'),
  birthDate: birthDateSchema,
});
