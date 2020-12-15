const Joi = require('joi');
const { fieldToSearchSchema } = require('../inputSchemas')

module.exports = Joi.object({
  fieldToSearch: fieldToSearchSchema,
})
