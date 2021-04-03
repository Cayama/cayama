const { productModel } = require('../models/index');
const fs = require('fs').promises;
const path = require('path');
const aws = require('aws-sdk');
const Boom = require('boom');
const {
  productIdSchema,
} = require('../validationSchemas/productSchema/index');
const { validateSchemas } = require('../services/schemasService');

const registerProduct = async (productObj) => {
    const newProduct = await productModel.registerProduct(productObj);
    return newProduct;
};

const getProductById = async (productId) => {
  const newProduct = await productModel.getProductById(productId);
  return newProduct;
}

const getProductByField = async (page, field, fieldValue) => {
  const PAGE_SIZE = 15;
  const pageInt = parseInt(page);
  const skip = (pageInt - 1) * PAGE_SIZE;
  const products = await productModel.getProductByField(PAGE_SIZE, skip, field, fieldValue);

  return products;
};

const deleteProduct = async (email, userId, productId, next) => {
  const product = await getProductById(productId);
  
  if (!product.sellerId.equals(userId)) {
    throw next(Boom.unauthorized('Você não tem permissão para deletar esse produto'));
  }

  const productToDelete = await productModel.getProductById(productId);

  await productModel.deleteProductById(productId);

  if (process.env.STORAGE_TYPE === 's3') {
    const s3 = new aws.S3();
    await s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: productToDelete.key,
      })
      .promise();
  } else {
    await fs.unlink(
      path.resolve(__dirname, '..', 'uploads', productToDelete.key),
    );
  }

  return { message: "Produto deletado com sucesso" };
};
  
//   const updatedProducts = async (userId, newProductsArray) => {
//     const newProducts = await productModel.updatedProducts(userId, newProductsArray);
//     return newProducts;
//   };
  
  module.exports = {
    registerProduct,
    deleteProduct,
    getProductById,
    // updatedProducts,
    getProductByField,
  };