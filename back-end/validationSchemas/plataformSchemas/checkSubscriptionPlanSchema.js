const Joi = require('joi');
const {
  validateFieldExistence,
} = require('../inputSchemas');

module.exports = Joi.object({
  planChoice: validateFieldExistence,
  registerAs: validateFieldExistence,
});
