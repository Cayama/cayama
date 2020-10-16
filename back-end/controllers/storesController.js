const fs = require('fs').promises;
const path = require('path');
const Boom = require('boom');
const rescue = require('express-rescue');
const aws = require('aws-sdk');
const storesService = require('../services/storesService');
const usersService = require('../services/usersService');
const createJwtToken = require('../utils/createJwtToken');
const {
  storeRegisterSchema,
  productRegisterSchema
} = require('../validationSchemas/storesSchemas/index');


const registerStore = rescue(async (req, res, next) => {
  const { storeName, email, password, confirmPassword, cnpj } = req.body;

  if (!storeName || !email || !password || !cnpj) return next(Boom.badData('Faltando informações'));

  const storeExists = await storesService.getStoreByCnpj(cnpj);

  if (storeExists) next(Boom.conflict('Loja já cadastrada'));

  const { error } = storeRegisterSchema.validate({
    storeName, email, password, confirmPassword, cnpj
  })

  if (error) return next(Boom.badData(error));

  const newStore = await storesService.registerStore({ storeName, email, password, cnpj });

  const token = createJwtToken(newStore);

  return res.status(201).json({ token });
});

const registerProduct = rescue(async (req, res, next) => {
  const { productName, price, stockQuantity = 1, description, videosPath } = req.body;
  const { _id } = req.user;
  console.log(req.file)
  const { key, location: url = '' } = req.file;

  if (!productName || !price) return next(Boom.badData('Faltando informações'));

  // const { error } = productRegisterSchema.validate({
  //   productName, price, stockQuantity, description, videosPath
  // });

  // if (error) return next(Boom.badData(error));

  const addNewProduct = await storesService.addNewProduct(_id, {
    productName, price, stockQuantity, description, url, videosPath, url, key,
  });

  return res.status(201).json(addNewProduct);
})

const deleteProduct = rescue(async (req, res, next) => {
  const { _id, email } = req.user;
  const { id: productId } = req.params;

  const user = await usersService.getUserByEmail(email);

  if (!user._id.equals(_id)) return next(Boom.unauthorized('Você não tem permissão para deletar esse produto'));

  const productToDeleted = user.products.find((product) => product._id.equals(productId));

  const newProducts = user.products.filter((product) => !product._id.equals(productId));

  const updatedProducts = await storesService.updatedProducts(_id, newProducts);

  if (process.env.STORAGE_TYPE === 's3') {
    const s3 = new aws.S3();
    await s3.deleteObject({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: productToDeleted.key,
    }).promise();
  } else {
    await fs.unlink(path.resolve(__dirname, '..', 'uploads', productToDeleted.key));
  };
  // deletar no s3, do disco e do banco de dados (depende do tipo que estamos utilizando.)

  return res.status(200).json({ updatedProducts });
})

module.exports = {
  registerStore,
  registerProduct,
  deleteProduct,
};
