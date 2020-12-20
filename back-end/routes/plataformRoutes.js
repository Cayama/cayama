const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const plataformRoutes = Router();

module.exports = (io) => {
  plataformRoutes
    .post('/', jwtMiddleware, controllers.plataformRoutes.subscriptionPlan)
    .get('/plan', jwtMiddleware, controllers.plataformRoutes.getSubscriptionPlan)
    .put('/change', jwtMiddleware, controllers.plataformRoutes.updateSubscriptionPlan)
    .put('/suspend', jwtMiddleware, controllers.plataformRoutes.suspendSubscriptionPlan);
  return plataformRoutes;
};
