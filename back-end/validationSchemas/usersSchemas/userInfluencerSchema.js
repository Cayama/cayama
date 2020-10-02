const Joi = require('joi');
const { contentTypeSchema, socialMediaSchema, registerNameSchema } = require('../inputSchemas');

module.exports = Joi.object({
  socialMedia: socialMediaSchema,
  contentType: contentTypeSchema,
  socialMediaName: registerNameSchema,
});
