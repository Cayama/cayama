const path = require('path');
const express = require('express');
const {
  usersRoutes,
  storesRoutes,
  purchaseRoutes,
  plataformRoutes,
  cartRoutes,
  shippingRoutes,
  addressesRoutes,
  bankRoutes,
  influencerRoutes,
  categoriesRoutes,
  productRoutes
} = require('./routes/index');
const { errorMiddleware } = require('./middlewares/index');

module.exports = (app, io) => {
  // app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/files', express.static(path.join(`${__dirname}/uploads`)));

  app.use('/user', usersRoutes(io));
  app.use('/store', storesRoutes(io));
  app.use('/product', productRoutes(io));
  app.use('/purchase', purchaseRoutes(io));
  app.use('/plataform', plataformRoutes(io));
  app.use('/cart', cartRoutes(io));
  app.use('/shipping', shippingRoutes(io));
  app.use('/addresses', addressesRoutes(io));
  app.use('/bank', bankRoutes(io));
  app.use('/influencer', influencerRoutes(io));
  app.use('/categories', categoriesRoutes(io));
  app.use('/test', (req, res) => res.json({ message: 'Chegou aqui' }));

  app.all('*', (_req, res) => res.status(404).json({ message: 'page not found' }));

  app.use(errorMiddleware);

  return app;
};
