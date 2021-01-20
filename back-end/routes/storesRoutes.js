const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware, multerMiddleware, redirectMiddleware } = require('../middlewares/index');
const { storesPaths: { registerStore } } = require('./paths/index');

const storesRoutes = Router();

module.exports = (io) => {
  storesRoutes
    .post(registerStore, controllers.storesController.registerStore)
    .post('/register-product',
      jwtMiddleware,
      multerMiddleware.array('productImages', 10),
      controllers.storesController.registerProduct)
    .delete('/product/:id', jwtMiddleware, controllers.storesController.deleteProduct);

  return storesRoutes;
};
