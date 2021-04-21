const Boom = require('boom');

module.exports = (err, _req, res, _next) => {
  console.log('error middleware');
  if (Boom.isBoom(err)) {
    const { statusCode, error, message } = err.output.payload;

    return res.status(statusCode).json({
      err: {
        error,
        message,
        details: err.details,
        stack: err.stack,
        type: err.type,
      },
    });
  }

  console.log(err);

  return res.status(500).json({
    err: {
      error: err.message,
      message: 'Internal Error',
      stack: err.stack,
    },
  });
};
