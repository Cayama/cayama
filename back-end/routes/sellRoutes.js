const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const sellRoutes = Router();

module.exports = (io) => {
  return sellRoutes
}
