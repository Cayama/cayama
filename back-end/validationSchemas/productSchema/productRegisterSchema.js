const Joi = require('joi');
const {
  registerNameSchema,
  productPriceSchema,
  productStockQuantitySchema,
  productDescriptionSchema,
  arrayLinksSchema,
  arrayReviewLinksSchema,
  categoryTypeSchema,
  fieldsExistenceSchema,
} = require('../inputSchemas');

module.exports = Joi.object({
  productName: registerNameSchema,
  price: productPriceSchema,
  brand: registerNameSchema,
  color: productDescriptionSchema,
  category: fieldsExistenceSchema,
  stockQuantity: productStockQuantitySchema,
  description: productDescriptionSchema,
  reviews: arrayReviewLinksSchema,
  sizes: arrayReviewLinksSchema,
  productsImgKeys: arrayLinksSchema,
  productsImgUrls: arrayLinksSchema,
  productSizeTableImgKeys: arrayLinksSchema,
  productSizeTableImgUrls: arrayLinksSchema,
});
