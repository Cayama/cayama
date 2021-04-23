const Joi = require('joi');
const {
  cepSchema,
  shippingAddressSchema,
  registerNameSchema,
  phoneSchema,
} = require('../inputSchemas');

module.exports = Joi.array()
  .items(
    Joi.object({
      recipient: registerNameSchema,
      cep: cepSchema,
      state: shippingAddressSchema,
      city: shippingAddressSchema,
      neighborhood: shippingAddressSchema,
      address: shippingAddressSchema,
      number: shippingAddressSchema,
      complement: shippingAddressSchema,
      phone: phoneSchema,
      country: registerNameSchema,
    }),
  )
  .required();