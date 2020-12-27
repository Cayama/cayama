const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');
const { usersPaths: {
  registerUser,
  loginUser,
  getProfile,
  updateUserInfo,
  updateToInfluencer
} } = require('./paths/index');

const usersRoutes = Router();

module.exports = (io) => {
  usersRoutes
    .post(registerUser, controllers.usersController.registerUser)
    .post(loginUser, controllers.usersController.userLogin)
    .get(getProfile, jwtMiddleware, controllers.usersController.getUserById)
    .put(updateUserInfo, jwtMiddleware, controllers.usersController.updateBasicRegistersData)
    .put(updateToInfluencer, jwtMiddleware, controllers.usersController.updateUserToInfluencer);

  return usersRoutes;
};
