const Joi = require('joi');
const {
  registerNameSchema,
  passwordSchema,
  emailSchema,
  birthDateSchema,
  cpfSchema,
  newsAcceptanceSchema,
  privacyAndTermsSchema,
} = require('../inputSchemas');

module.exports = Joi.object({
  firstName: registerNameSchema,
  lastName: registerNameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Joi.ref('password'),
  cpf: cpfSchema,
  birthDate: birthDateSchema,
  newsAcceptance: newsAcceptanceSchema,
  privacyAndTerms: privacyAndTermsSchema,
});
