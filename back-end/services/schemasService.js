const Boom = require('boom');

const validateSchemas = (next, schema, objectToValidate) => {
  const { error } = schema.validate(objectToValidate, { abortEarly: false });
  // console.log(error)
  if (error) throw next(Boom.badData(error));
};

module.exports = {
  validateSchemas,
};
