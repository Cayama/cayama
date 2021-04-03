const rescue = require('express-rescue');
const { productService } = require('../services/index');
const {
  productRegisterSchema,
} = require('../validationSchemas/productSchema/index');
const { validateSchemas } = require('../services/schemasService');

const registerProduct = rescue(async (req, res, next) => {
  const {
    productName,
    price,
    category,
    stockQuantity = 1,
    description,
    brand,
    color,
    sizes = [],
    reviews = [],
  } = req.body;

  const { _id } = req.user;
  const { productImages, productSizeTableImage } = req.files;
  const productsImgKeys = (productImages || []).map((product) => product.key);
  const productsImgUrls = (productImages || []).map((product) => product.location);

  const productSizeTableImgKeys = (productSizeTableImage || []).map((product) => product.key);
  const productSizeTableImgUrls = (productSizeTableImage || []).map((product) => product.location);

  validateSchemas(next, productRegisterSchema, {
    productName,
    price,
    category: { field: 'categories', value: category },
    stockQuantity,
    description,
    reviews,
    productsImgKeys,
    productsImgUrls,
    productSizeTableImgKeys,
    productSizeTableImgUrls,
    brand,
    color,
    sizes,
  }, 'failedProductRegister');

  const addNewProduct = await productService.registerProduct({
    sellerId: _id,
    productName,
    price,
    category,
    stockQuantity,
    description,
    reviews,
    brand,
    color,
    sizes,
    productsImgKeys,
    productsImgUrls,
    productSizeTableImgKeys,
    productSizeTableImgUrls,
  });

  return res.status(201).json(addNewProduct);
});

const deleteProduct = rescue(async (req, res, next) => {
  const { _id: userId, email } = req.user;
  const { id: productId } = req.query;

  const { message } = await productService.deleteProduct(userId, productId, next);

  return res.status(200).json({ message });
});

const getProductById = rescue(async (req, res, next) => {
  const { productId } = req.body;

  const product = await productService.getProductById(productId, next);

  return res.status(200).json({ product });
});

const getProductByField = rescue(async (req, res, next) => {
  const { page } = req.query;
  const { field, fieldValue } = req.body;
  const products = await productService.getProductByField(page, field, fieldValue);
  
  return res.status(200).json({ products });
});

const updateProduct = rescue(async (req, res, next) => {
  const updatedProduct = await productService.updateProduct(req.body, req.user, req.files, next)

  return res.status(201).json(updatedProduct);
});

module.exports = {
  registerProduct,
  deleteProduct,
  getProductById,
  getProductByField,
  updateProduct
}