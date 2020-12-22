const path = require('path');
const express = require('express');
const {
  usersRoutes,
  storesRoutes,
  sellRoutes,
  plataformRoutes,
  cartRoutes,
  shippingRoutes,
} = require('./routes/index');
const { errorMiddleware } = require('./middlewares/index');

module.exports = (app, io) => {
  // app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/files', express.static(path.join(`${__dirname}/uploads`)));

  app.use('/user', usersRoutes(io));
  app.use('/store', storesRoutes(io));
  app.use('/sell', sellRoutes(io));
  app.use('/plataform', plataformRoutes(io));
  app.use('/cart', cartRoutes(io));
  app.use('/shipping', shippingRoutes(io));
  app.use('/test', (req, res) => res.json({ message: 'Chegou aqui' }));

  app.all('*', (_req, res) => res.status(404).json({ message: 'page not found' }));

  app.use(errorMiddleware);

  return app;
};
