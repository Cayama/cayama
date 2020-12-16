const Joi = require('joi');
const { fieldsExistenceSchema, newValueSchema } = require('../inputSchemas');

module.exports = Joi.object({
  fieldToUpdate: fieldsExistenceSchema,
  newValueObject: newValueSchema,
})
