const Joi = require('joi');
const { passwordSchema, emailSchema } = require('../inputSchemas');

module.exports = Joi.object({
  email: emailSchema,
  password: passwordSchema,
});
