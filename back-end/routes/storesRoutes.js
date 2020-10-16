const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware, multerMiddleware } = require('../middlewares/index');

const storesRoutes = Router();

storesRoutes
  .post('/register', controllers.storesController.registerStore)
  .post('/register-product',
    jwtMiddleware(true),
    multerMiddleware.single('productImages'),
    controllers.storesController.registerProduct
  )
  .delete('/product/:id', jwtMiddleware(true), controllers.storesController.deleteProduct);

module.exports = storesRoutes;
