const { Router } = require('express');

const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const usersRoutes = Router();

usersRoutes
  .post('/register', controllers.usersController.registerUser);

module.exports = usersRoutes;
