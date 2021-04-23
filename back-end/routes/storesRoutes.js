const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware, multerMiddleware, redirectMiddleware } = require('../middlewares/index');
const { storesPaths: { registerStore, updateStoreDataCarrosselImages } } = require('./paths/index');

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
    .delete('/product/:id', jwtMiddleware, controllers.storesController.deleteProduct);

  return storesRoutes;
};
