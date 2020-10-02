const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const usersRoutes = Router();

usersRoutes
  .post('/register', controllers.usersController.registerUser)
  .post('/login', controllers.usersController.loginUser)
  .put('/addresses', jwtMiddleware(true), controllers.usersController.updateUsersAddresses)
  .get('/addresses', jwtMiddleware(true), controllers.usersController.getAllAddresses);

module.exports = usersRoutes;
