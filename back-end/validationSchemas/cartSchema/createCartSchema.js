const Joi = require('joi');
const {
  productPriceSchema,
  arrayOfObjectsSchema,
} = require('../inputSchemas');

module.exports = Joi.object({
  totalPrice: productPriceSchema,
  purchases: arrayOfObjectsSchema,
});
