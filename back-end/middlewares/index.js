const errorMiddleware = require('./errorMiddleware');
const jwtMiddleware = require('./jwtMiddleware');
const multerMiddleware = require('./multerMiddleware');
const redirectMiddleware = require('./redirectMiddleware');

module.exports = {
  errorMiddleware,
  jwtMiddleware,
  multerMiddleware,
  redirectMiddleware,
};
