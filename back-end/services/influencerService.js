const { influencerModel } = require('../models/index');

const getInfluencerByLink = async (influencerLink) => {
  const influencer = await influencerModel.getInfluencerByLink(influencerLink);
  return influencer;
};

const createInfluencerLink = async (_id, influencerLink) => {
  const userWithLink = await influencerModel.createInfluencerLink(_id, influencerLink);
  return userWithLink;
};

module.exports = {
  getInfluencerByLink,
  createInfluencerLink,
};
