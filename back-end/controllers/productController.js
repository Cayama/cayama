const rescue = require('express-rescue');
const { productService } = require('../services/index');
const {
  productRegisterSchema,
} = require('../validationSchemas/productSchema/index');
const { validateSchemas } = require('../services/schemasService');
const { convertStringPriceToDouble } = require('../utils/index');

const registerProduct = rescue(async (req, res, next) => {
  const {
    productName,
    price: stringPrice,
    category,
    description,
    brand,
    color,
    freeShipping = false, // colocar no front ainda
    isNew = false, // colocar no front ainda
    withFees = false, // colocar no front ainda
    sizes: stringSizesArray = [],
    reviews: stringReviewsArray = [],
    storeCategory,
  } = req.body;

  const sizes = JSON.parse(stringSizesArray);
  const reviews = JSON.parse(stringReviewsArray);
  const price = convertStringPriceToDouble(stringPrice);

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
    description,
    reviews,
    brand,
    color,
    freeShipping,
    isNew,
    withFees,
    sizes,
    productsImgKeys,
    productsImgUrls,
    productSizeTableImgKeys,
    productSizeTableImgUrls,
    storeCategory,
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

  validateSchemas(next, productIdSchema, productId)

  const product = await productService.getProductById(productId, next);

  return res.status(200).json({ product });
});

const getProductsByFieldAndPaged = rescue(async (req, res, next) => {
  const { page = 1 } = req.query;
  const { field, fieldValue } = req.query;

  const products = await productService.getProductsByFieldAndPaged(page, field, fieldValue);

  return res.status(200).json({ products });
});

const updateProduct = rescue(async (req, res, next) => {
  const updatedProduct = await productService.updateProduct(req.body, req.user, req.files, next)

  return res.status(201).json(updatedProduct);
});

const getProductsInMarketplaceByTextAndPaged = rescue(async (req, res, next) => {
  const { searchText, page = 1, filtersAndOrderArray: filtersAndOrderArrayString } = req.query;
  const filtersAndOrderArray = JSON.parse(filtersAndOrderArrayString);

  const products = await productService.getProductsInMarketplaceByTextAndPaged(page, searchText, filtersAndOrderArray);
  return res.status(200).json({ products });
})

module.exports = {
  registerProduct,
  deleteProduct,
  getProductById,
  getProductsByFieldAndPaged,
  updateProduct,
  getProductsInMarketplaceByTextAndPaged,
}