const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const usersRoutes = Router();

module.exports = (io) => {

  usersRoutes
    .post('/register', controllers.usersController.registerUser)
    .post('/login', controllers.usersController.loginUser)
    .put('/addresses', jwtMiddleware(true), controllers.usersController.updateUsersAddresses)
    .put('/create-link', jwtMiddleware(true), controllers.usersController.createInfluencerLink)
    .get('/addresses', jwtMiddleware(true), controllers.usersController.getAllAddresses)
    .get('/get-all-user-purchases', jwtMiddleware(true), controllers.usersController.getProductByField)
    .get('/profile', jwtMiddleware(true), controllers.usersController.getUserById)
    .put('/update-to-influencer', jwtMiddleware(true), controllers.usersController.updateUserToInfluencer);

  return usersRoutes;
}


