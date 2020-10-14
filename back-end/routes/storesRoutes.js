const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware, multerMiddleware } = require('../middlewares/index');

const storesRoutes = Router();

const uploadFields = [
  { name: 'logo', maxCount: 1 },
  { name: 'productImages', maxCount: 15 },
]

storesRoutes
  .post('/register', controllers.storesController.registerStore)
  .post('/register-product',
    jwtMiddleware(true),
    multerMiddleware.fields(uploadFields),
    controllers.storesController.registerProduct
  );

module.exports = storesRoutes;
