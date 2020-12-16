const Joi = require('joi');
const { fieldsExistenceSchema, registerNameSchema, influencerLinkSchema } = require('../inputSchemas');

module.exports = Joi.object({
  socialMedia: fieldsExistenceSchema,
  contentType: fieldsExistenceSchema,
  socialMediaName: registerNameSchema,
  influencerLink: influencerLinkSchema,
});
