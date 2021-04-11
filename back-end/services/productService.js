const { productModel } = require('../models/index');
const {
  productRegisterSchema,
} = require('../validationSchemas/productSchema/index');
const { validateSchemas } = require('../services/schemasService');
const { deleteImage } = require('../utils/index');
const Boom = require('boom');

const registerProduct = async (productObj) => {
    const newProduct = await productModel.registerProduct(productObj);
    return newProduct;
};

const getProductById = async (productId) => {
  const newProduct = await productModel.getProductById(productId);
  return newProduct;
}

const getProductsByField = async (page, field, fieldValue) => {
  const PAGE_SIZE = 15;
  const pageInt = parseInt(page);
  const skip = (pageInt - 1) * PAGE_SIZE;
  const products = await productModel.getProductsByField(PAGE_SIZE, skip, field, fieldValue);

  return products;
};

const deleteProduct = async (userId, productId, next) => {
  const product = await getProductById(productId);
  
  if (!product.sellerId.equals(userId)) {
    throw next(Boom.unauthorized('Você não tem permissão para deletar esse produto'));
  }

  const productToDelete = await productModel.getProductById(productId);
  
  deleteImage(productToDelete);

  await productModel.deleteProductById(productId);

  return { message: "Produto deletado com sucesso" };
};
  
const updateProduct = async (body, user, files, next) => {
  const {
    productId,
    productName,
    price,
    category,
    stockQuantity = 1,
    description,
    brand,
    color,
    sizes = [],
    reviews = [],
  } = body;

  const { _id: userId } = user;

  const { productImages, productSizeTableImage } = files;
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

  const productBeforeUpdate = await getProductById(productId);
  console.log(productBeforeUpdate)
  if (!productBeforeUpdate.sellerId.equals(userId)) {
    throw next(Boom.unauthorized('Você não tem permissão para deletar esse produto'));
  };

  const setForProductImagesKeys = new Set(productsImgKeys);
  const diferenceInProductImagesKeys = [...productsImgKeys].filter((key) => !setForProductImagesKeys.has(key));

  const setForSizeTableImagesKeys = new Set(productSizeTableImgKeys);
  const diferenceInSizeTableImagesKeys = [...productSizeTableImgKeys].filter((key) => !setForSizeTableImagesKeys.has(key));

  deleteImage({ productsImgKeys: diferenceInProductImagesKeys, productSizeTableImgKeys: diferenceInSizeTableImagesKeys });

  const updatedProduct = await productModel.updateProduct(productId, {
    sellerId: userId,
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

  return updatedProduct;
};
  
module.exports = {
  registerProduct,
  deleteProduct,
  getProductById,
  updateProduct,
  getProductsByField,
};