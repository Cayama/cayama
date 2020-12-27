const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');
const { purchasePaths: {
  getAllPurchases,
  createPurchase,
  deliveryCheck,
  acceptancePurchase,
} } = require('./paths/index');

const sellRoutes = Router();

module.exports = (io) => {
  sellRoutes
    .get(getAllPurchases, jwtMiddleware, controllers.usersController.getPurchaseByField)
    .post(createPurchase, jwtMiddleware, controllers.purchaseController.purchase)
    .put(deliveryCheck, jwtMiddleware, controllers.purchaseController.deliveryCheck)
    .put(acceptancePurchase, jwtMiddleware, controllers.purchaseController.userApproveOfProduct);
  return sellRoutes;
};
