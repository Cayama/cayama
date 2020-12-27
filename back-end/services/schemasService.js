const Boom = require('boom');

const validateSchemas = (next, schema, objectToValidate) => {
  const { error } = schema.validate(objectToValidate);

  if (error) return next(Boom.badData(error));
};

module.exports = {
  validateSchemas,
};
