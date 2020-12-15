const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getUserByEmail = async (email) => {
  const db = await connection();
  const user = db.collection('users').findOne({ email });

  return user;
};

const getUserById = async (id) => {
  const db = await connection();
  const user = db.collection('users').findOne({ _id: ObjectId(id) })

  return user;
}

const registerUser = async (userObj) => {
  const db = await connection();
  const user = await db.collection('users').insertOne(userObj);

  return user.ops[0];
}

const updateUserAddressesByEmail = async (email, addresses) => {
  const db = await connection();
  const updatedUser = await db.collection('users')
    .findOneAndUpdate(
      { email },
      { $set: { addresses } },
      { returnOriginal: false }
    );

  return updatedUser.value;
}

const getInfluencerByLink = async (influencerLink) => {
  const db = await connection();
  const influencer = await db.collection('users')
    .findOne(
      { $and: [ { influencer: { $exists: true }}, { 'influencer.influencerLink': influencerLink } ] }
    );

  return influencer;
}

const createInfluencerLink = async (_id, influencerLink) => {
  const db = await connection();
  const userWithLink = await db.collection('users')
    .findOneAndUpdate(
      { $and: [ { _id: ObjectId(_id) }, { influencer: { $exists: true }} ] },
      { $set: { 'influencer.influencerLink': influencerLink } },
      { returnOriginal: false },
    );

  return userWithLink.value;
};

const updateUserToInfluencer = async (_id, influencerObj) => {
  const db = await connection();
  const newInfluencer = await db.collection('users')
    .findOneAndUpdate(
      { _id: ObjectId(_id) },
      { $set: { influencer: influencerObj } },
      { returnOriginal: false },
    );

  return newInfluencer.value;
}

const getProductByField = async (fieldToSearch, userId) => {
  const db = await connection();
  const purchaseList = await db.collection('purchases')
    .find({ [fieldToSearch]: ObjectId(userId) }).toArray();

  return purchaseList;
}

module.exports = {
  getUserByEmail,
  registerUser,
  updateUserAddressesByEmail,
  getInfluencerByLink,
  createInfluencerLink,
  updateUserToInfluencer,
  getProductByField,
  getUserById,
};
