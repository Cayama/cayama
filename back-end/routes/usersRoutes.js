const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const usersRoutes = Router();

module.exports = (io) => {
  usersRoutes
    .post('/register', controllers.usersController.registerUser)
    .post('/login', controllers.usersController.loginUser)
    .put('/addresses', jwtMiddleware, controllers.usersController.updateUsersAddresses)
    .put('/create-link', jwtMiddleware, controllers.usersController.createInfluencerLink)
    .get('/addresses', jwtMiddleware, controllers.usersController.getAllAddresses)
    .get('/get-all-user-purchases', jwtMiddleware, controllers.usersController.getPurchaseByField)
    .get('/profile', jwtMiddleware, controllers.usersController.getUserById)
    .put('/bank-account-info', jwtMiddleware, controllers.usersController.createBankAccount)
    .put('/update-info', jwtMiddleware, controllers.usersController.updateBasicRegistersData)
    .put('/update-to-influencer', jwtMiddleware, controllers.usersController.updateUserToInfluencer);

  return usersRoutes;
};
