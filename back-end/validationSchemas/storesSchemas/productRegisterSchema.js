const Joi = require('joi');
const {
  registerNameSchema,
  productPriceSchema,
  productStockQuantitySchema,
  productDescriptionSchema,
  arrayLinksSchema,
} = require('../inputSchemas');

module.exports = Joi.object({
  productName: registerNameSchema,
  price: productPriceSchema,
  stockQuantity: productStockQuantitySchema,
  description: productDescriptionSchema,
  productImagesPath: arrayLinksSchema,
  videosPath: arrayLinksSchema,
});
