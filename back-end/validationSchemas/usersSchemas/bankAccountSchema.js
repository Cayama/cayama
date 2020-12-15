const Joi = require('joi');
const { registerNameSchema, productStockQuantitySchema } = require('../inputSchemas');

module.exports = Joi.object({
  bank: registerNameSchema,
  bankDigit: productStockQuantitySchema,
  accountNumberWithDigit: registerNameSchema,
  agency: productStockQuantitySchema,
})
