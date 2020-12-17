const Joi = require('joi');
const {
  cepSchema,
  shippingAddressSchema,
  registerNameSchema,
  phoneSchema,
} = require('../inputSchemas');

module.exports = Joi.array().items(
  Joi.object({
    name: registerNameSchema,
    cep: cepSchema,
    state: shippingAddressSchema,
    city: shippingAddressSchema,
    neighborhood: shippingAddressSchema,
    street: shippingAddressSchema,
    number: shippingAddressSchema,
    complement: shippingAddressSchema,
    phone: phoneSchema,
  }),
).required();
