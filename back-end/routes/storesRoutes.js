const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware, multerMiddleware } = require('../middlewares/index');

const storesRoutes = Router();

module.exports = (io) => {
  storesRoutes
    .post('/register', controllers.storesController.registerStore)
    .post('/register-product',
      jwtMiddleware,
      multerMiddleware.array('productImages', 10),
      controllers.storesController.registerProduct)
    .delete('/product/:id', jwtMiddleware, controllers.storesController.deleteProduct);

  return storesRoutes;
};