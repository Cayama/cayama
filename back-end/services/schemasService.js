const Boom = require('boom');

const validateSchemas = (next, schema, objectToValidate, type = '') => {
  const { error } = schema.validate(objectToValidate, { abortEarly: false });
  // console.log(error)
  if (error) {
    error.type = type;
    throw next(Boom.badData(error));
  }
};

module.exports = {
  validateSchemas,
};
