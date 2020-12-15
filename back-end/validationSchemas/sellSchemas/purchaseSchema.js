const Joi = require("joi");
const {
  validateMongoIdSchema,
  shippingAddressSchema,
  productStockQuantitySchema,
  arrayOfObjectsSchema,
} = require("../inputSchemas");

module.exports = Joi.object({
  sellerId: validateMongoIdSchema,
  totalPrice: shippingAddressSchema,
  deliveryService: shippingAddressSchema,
  paymentMethod: shippingAddressSchema,
  installment: productStockQuantitySchema,
  purchases: arrayOfObjectsSchema,
});
