const Boom = require('boom');
const rescue = require('express-rescue');
const { usersService, influencerService } = require('../services/index');
const { influencerLinkSchema } = require('../validationSchemas/usersSchemas/index');
const { validateSchemas } = require('../services/schemasService');

const createInfluencerLink = rescue(async (req, res, next) => {
  const { influencerLink } = req.body;
  const { _id } = req.user;

  validateSchemas(next, influencerLinkSchema, { influencerLink });

  const linkExists = await influencerService.getInfluencerByLink(influencerLink);

  if (linkExists) return next(Boom.conflict('Este link já esta sendo utilizado'));

  const user = await usersService.getUserById(_id);

  if (!user.influencer.influencerLink) return next(Boom.badData('Não é um influencer ainda'));

  const userWithLink = await influencerService.createInfluencerLink(
    _id,
    influencerLink,
  );

  const { influencer } = userWithLink;

  return res.status(201).json({ influencer });
});

module.exports = {
  createInfluencerLink,
};
