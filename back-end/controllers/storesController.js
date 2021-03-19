const fs = require('fs').promises;
const path = require('path');
const Boom = require('boom');
const rescue = require('express-rescue');
const aws = require('aws-sdk');
const { usersService, storesService } = require('../services/index');
const { createJwtToken } = require('../utils/index');
const {
  storeRegisterSchema,
  productRegisterSchema,
} = require('../validationSchemas/storesSchemas/index');
const { validateSchemas } = require('../services/schemasService');

const registerStore = rescue(async (req, res, next) => {
  const { storeName, email, password, confirmPassword, cnpj } = req.body;
  console.log(req.body);
  validateSchemas(next, storeRegisterSchema, {
    storeName,
    email,
    password,
    confirmPassword,
    cnpj,
  });

  const storeExists = await storesService.getStoreByCnpj(cnpj);

  if (storeExists) next(Boom.conflict('Loja já cadastrada'));

  const newStore = await storesService.registerStore({
    storeName,
    email,
    password,
    cnpj,
  });

  const token = createJwtToken(newStore);

  const userData = { firstName: storeName, addresses: [] };

  return res.status(201).json({ token, userData });
});

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
  console.log(req.files);
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
  });

  const addNewProduct = await storesService.addNewProduct({
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
  const { _id, email } = req.user;
  const { id: productId } = req.params;

  const user = await usersService.getUserByEmail(email);

  if (!user._id.equals(_id)) {
    return next(
      Boom.unauthorized('Você não tem permissão para deletar esse produto'),
    );
  }

  const productToDeleted = user.products.find((product) => product._id.equals(productId));

  const newProducts = user.products.filter((product) => !product._id.equals(productId));

  const updatedProducts = await storesService.updatedProducts(_id, newProducts);

  if (process.env.STORAGE_TYPE === 's3') {
    const s3 = new aws.S3();
    await s3
      .deleteObject({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: productToDeleted.key,
      })
      .promise();
  } else {
    await fs.unlink(
      path.resolve(__dirname, '..', 'uploads', productToDeleted.key),
    );
  }
  // deletar no s3, do disco e do banco de dados (depende do tipo que estamos utilizando.)

  return res.status(200).json({ updatedProducts });
});

const updateProduct = rescue(async (req, res, next) => {});

module.exports = {
  updateProduct,
  registerStore,
  registerProduct,
  deleteProduct,
};
