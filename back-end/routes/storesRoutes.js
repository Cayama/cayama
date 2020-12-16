const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware, multerMiddleware } = require('../middlewares/index');

const storesRoutes = Router();

module.exports = (io) => {
  storesRoutes
    .post('/register', controllers.storesController.registerStore)
    .post('/register-product',
      jwtMiddleware(true),
      multerMiddleware.array('productImages', 10),
      controllers.storesController.registerProduct)
    .delete('/product/:id', jwtMiddleware(true), controllers.storesController.deleteProduct);

  return storesRoutes;
};
