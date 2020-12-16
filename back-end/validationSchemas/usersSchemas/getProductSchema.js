const Joi = require('joi');
const { fieldsExistenceSchema } = require('../inputSchemas');

module.exports = Joi.object({
  fieldToSearch: fieldsExistenceSchema,
});
