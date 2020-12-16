const { Router } = require('express');
const controllers = require('../controllers/index');
const { jwtMiddleware } = require('../middlewares/index');

const plataformRoutes = Router();

module.exports = (io) => plataformRoutes;
