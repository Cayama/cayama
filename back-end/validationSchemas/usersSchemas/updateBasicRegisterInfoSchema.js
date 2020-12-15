const Joi = require('joi');
const { fieldsToUpdateSchema, newValueSchema } = require('../inputSchemas');



module.exports = Joi.object({
  fieldToUpdate: fieldsToUpdateSchema,
  newValueObject: newValueSchema,
})
