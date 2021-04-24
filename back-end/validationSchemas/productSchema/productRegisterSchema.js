const Joi = require('joi');
const {
  registerNameSchema,
  productPriceSchema,
  productDescriptionSchema,
  arrayLinksSchema,
  arrayReviewLinksSchema,
  arraySizesWithQuantitySchema,
  fieldsExistenceSchema,
} = require('../inputSchemas');

module.exports = Joi.object({
  productName: registerNameSchema,
  price: productPriceSchema,
  brand: registerNameSchema,
  color: productDescriptionSchema,
  category: fieldsExistenceSchema,
  description: productDescriptionSchema,
  reviews: arrayReviewLinksSchema,
  sizes: arraySizesWithQuantitySchema,
  productsImgKeys: arrayLinksSchema,
  productsImgUrls: arrayLinksSchema,
  productSizeTableImgKeys: arrayLinksSchema,
  productSizeTableImgUrls: arrayLinksSchema,
});
