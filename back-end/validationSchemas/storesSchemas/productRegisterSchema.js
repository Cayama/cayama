const Joi = require('joi');
const {
  registerNameSchema,
  productPriceSchema,
  productStockQuantitySchema,
  productDescriptionSchema,
  arrayLinksSchema,
  arrayReviewLinksSchema,
  categoryTypeSchema,
} = require('../inputSchemas');

module.exports = Joi.object({
  productName: registerNameSchema,
  price: productPriceSchema,
  category: categoryTypeSchema,
  stockQuantity: productStockQuantitySchema,
  description: productDescriptionSchema,
  videosPath: arrayReviewLinksSchema,
  keys: arrayLinksSchema,
  urls: arrayLinksSchema,
});
