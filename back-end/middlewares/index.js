const errorMiddleware = require('./errorMiddleware');
const jwtMiddleware = require('./jwtMiddleware');
const multerMiddleware = require('./multerMiddleware');

module.exports = {
  errorMiddleware,
  jwtMiddleware,
  multerMiddleware,
};
