const Joi = require('joi');
const { influencerLinkSchema } = require('../inputSchemas');

module.exports = Joi.object({
  influencerLink: influencerLinkSchema,
});
