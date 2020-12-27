const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');
const { addressesPaths: { updateUserAddresses, getAllAddresses } } = require('./paths/index');

const addressesRoutes = Router();

module.exports = (io) => {
  addressesRoutes
    .put(updateUserAddresses, jwtMiddleware, controllers.addressesController.updateUsersAddresses)
    .get(getAllAddresses, jwtMiddleware, controllers.addressesController.getAllAddresses);

  return addressesRoutes;
};
