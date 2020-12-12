const path = require('path');
const express = require('express');
const { usersRoutes, storesRoutes } = require('./routes/index');
const { errorMiddleware } = require('./middlewares/index')

module.exports = (app, io) => {
  // app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/files', express.static(path.join(__dirname + '/uploads')));

  app.use('/user', usersRoutes(io));
  app.use('/store', storesRoutes(io));

  app.all('*', (_req, res) => res.status(404).json({ message: 'page not found'}));

  app.use(errorMiddleware);

  return app;
};
