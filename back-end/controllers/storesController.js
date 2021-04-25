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

  validateSchemas(next, storeRegisterSchema, {
    storeName,
    email,
    password,
    confirmPassword,
    cnpj,
  });

  const storeExists = await storesService.getStoreByCnpj(cnpj);

  if (storeExists) next(Boom.conflict('Loja já cadastrada'));

  const { password: userPasswordFromDB, ...newStore } = await storesService.registerStore({
    storeData: {
      storePersonalData: {
        storeName,
        cnpj,
      },
      storeColorsData: {
        primaryColor: "#245BBD",
        secondaryColor: "#cad4e3",
      },
      carrosselImages: {
        productsImgUrls: [],
      },
      logoImage: {
        logoImgUrls: [],
      },
    },
    isInfluencer: false,
    haveStore: true,
    addresses: [],
    personalData: {},
    accountData: { email },
    password,
  });

  const token = createJwtToken(newStore);

  return res.status(201).json({ token, ...newStore });
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

const updateStoreDataCarrosselImages = rescue(async (req, res, next) => {
  const { carrosselImages: carrosselImagesToUpdate } = req.files;
  const { _id: userId } = req.user;

  const carrosselImgKeys = (carrosselImagesToUpdate || []).map((carrossel) => carrossel.key) || [];
  const carrosselImgUrls = (carrosselImagesToUpdate || []).map((carrossel) => carrossel.location)|| [];

  const carrosselImages = {
    carrosselImgKeys,
    carrosselImgUrls ,
  };

  const { _id, password, ...updatedCarrosselImages } = await storesService.updateStoreDataCarrosselImages(userId, carrosselImages);

  return res.status(200).json({ ...updatedCarrosselImages });
});

const updateStoreDataLogoImage = rescue(async (req, res, next) => {
  const { logoImage: logoImageToUpdate } = req.files;
  const { _id: userId } = req.user;

  const logoImgKeys = (logoImageToUpdate || []).map((logo) => logo.key) || [];
  const logoImgUrls = (logoImageToUpdate || []).map((logo) => logo.location)|| [];

  const logoImage = {
    logoImgKeys,
    logoImgUrls ,
  };

  const { _id, password, ...updatedLogoImage } = await storesService.updateStoreDataLogoImage(userId, logoImage);

  return res.status(200).json({ ...updatedLogoImage });
});

const updateFieldInStoreData = rescue(async (req, res, next) => {
  const { fieldToUpdate, newValue } = req.body;
  const { _id: userId } = req.user;

  const { _id, password, ...updatedStore } = await storesService.updateFieldInStoreData(userId, fieldToUpdate, newValue, next);

  return res.status(200).json({ ...updatedStore })

});

const getStorePageDataById = rescue(async (req, res, next) => {
  const { storeId } = req.body;

  const { storeData } = await storesService.getStorePageDataById(storeId, next);

  return res.status(200).json({ storeData });
})

module.exports = {
  updateProduct,
  registerStore,
  // registerProduct,
  deleteProduct,
  updateStoreDataCarrosselImages,
  updateFieldInStoreData,
  updateStoreDataLogoImage,
  getStorePageDataById,
};
