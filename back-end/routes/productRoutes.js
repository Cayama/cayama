const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware, multerMiddleware } = require('../middlewares/index');
const {
  productPaths: {
    registerProduct,
    deleteProduct,
    getProductByField,
    updateProduct,
    getProductById
  }
} = require('./paths/index');

const productRoutes = Router();

module.exports = (io) => {
    productRoutes
      .get(getProductByField, controllers.productController.getProductByField)
      .get(getProductById, controllers.productController.getProductById)
      .post(
        registerProduct,
        jwtMiddleware,
        multerMiddleware.fields([
          { name: 'productImages', maxCount: 10 },
          { name: 'productSizeTableImage', maxCount: 1 },
        ]),
        controllers.productController.registerProduct
      )
      .put(
        updateProduct,
        jwtMiddleware,
        multerMiddleware.fields([
          { name: 'productImages', maxCount: 10 },
          { name: 'productSizeTableImage', maxCount: 1 },
        ]),
        controllers.productController.updateProduct,
      )
      .delete(deleteProduct, jwtMiddleware, controllers.productController.deleteProduct)
    return productRoutes;
  };
  