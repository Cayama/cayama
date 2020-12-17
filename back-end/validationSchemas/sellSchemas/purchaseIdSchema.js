const Joi = require('joi');
const { validateMongoIdSchema } = require('../inputSchemas');

module.exports = Joi.object({ purchaseId: validateMongoIdSchema });
