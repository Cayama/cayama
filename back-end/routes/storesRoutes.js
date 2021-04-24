const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware, multerMiddleware, redirectMiddleware } = require('../middlewares/index');
const { storesPaths: {
  registerStore,
  updateStoreDataCarrosselImages,
  updateFieldInStoreData,
  updateStoreDataLogoImages,
} } = require('./paths/index');

const storesRoutes = Router();

module.exports = (io) => {
  storesRoutes
    .post(registerStore, controllers.storesController.registerStore)
    .put(updateStoreDataCarrosselImages,
      jwtMiddleware,
      multerMiddleware.fields([
        { name: 'carrosselImages', maxCount: 8 },
      ]),
      controllers.storesController.updateStoreDataCarrosselImages)
    .put(updateStoreDataLogoImages,
      jwtMiddleware,
      multerMiddleware.fields([
        { name: 'logoImage', maxCount: 1 },
      ]),
      controllers.storesController.updateStoreDataLogoImage)
    .put(updateFieldInStoreData, jwtMiddleware, controllers.storesController.updateFieldInStoreData)
    .delete('/product/:id', jwtMiddleware, controllers.storesController.deleteProduct);

  return storesRoutes;
};
