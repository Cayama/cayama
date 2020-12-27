const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getInfluencerByLink = async (influencerLink) => {
  const db = await connection();
  const influencer = await db.collection('users')
    .findOne(
      { $and: [{ influencer: { $exists: true } }, { 'influencer.influencerLink': influencerLink }] },
    );

  return influencer;
};

const createInfluencerLink = async (_id, influencerLink) => {
  const db = await connection();
  const userWithLink = await db.collection('users')
    .findOneAndUpdate(
      { $and: [{ _id: ObjectId(_id) }, { influencer: { $exists: true } }] },
      { $set: { 'influencer.influencerLink': influencerLink } },
      { returnOriginal: false },
    );

  return userWithLink.value;
};

module.exports = {
  getInfluencerByLink,
  createInfluencerLink,
};
