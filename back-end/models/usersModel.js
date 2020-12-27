const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getUserByEmail = async (email) => {
  const db = await connection();
  const user = db.collection('users').findOne({ email });

  return user;
};

const getUserById = async (id) => {
  const db = await connection();
  const user = db.collection('users').findOne({ _id: ObjectId(id) });

  return user;
};

const registerUser = async (userObj) => {
  const db = await connection();
  const user = await db.collection('users').insertOne(userObj);

  return user.ops[0];
};

const updateUserAddressesById = async (id, addresses) => {
  const db = await connection();
  const updatedUser = await db.collection('users')
    .findOneAndUpdate(
      { _id: id },
      { $set: { addresses } },
      { returnOriginal: false },
    );

  return updatedUser.value;
};

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

const updateUserToInfluencer = async (_id, influencerObj) => {
  const db = await connection();
  const newInfluencer = await db.collection('users')
    .findOneAndUpdate(
      { _id: ObjectId(_id) },
      { $set: { influencer: influencerObj } },
      { returnOriginal: false },
    );

  return newInfluencer.value;
};

const getPurchaseByField = async (fieldToSearch, userId) => {
  const db = await connection();
  const purchaseList = await db.collection('purchases')
    .find({ [fieldToSearch]: ObjectId(userId) }).toArray();

  return purchaseList;
};

const createBankAccount = async (bankAccount, id) => {
  const db = await connection();
  const bankAccountInfo = await db.collection('users')
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { bankAccount } },
      { returnOriginal: false },
    );

  return bankAccountInfo.value;
};

const updateBasicRegistersData = async (fieldToUpdate, newValue, id) => {
  const db = await connection();
  const updatedUser = await db.collection('users')
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { [fieldToUpdate]: newValue } },
      { returnOriginal: false },
    );

  return updatedUser.value;
};

const insertNewObjectData = async (id, newObjectData) => {
  const db = await connection();

  const newUserData = await db.collection('users')
    .findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: { melhorEnvioTokenData: newObjectData } },
      { returnOriginal: false },
    );

  return newUserData.value;
};

module.exports = {
  getUserByEmail,
  registerUser,
  updateUserAddressesById,
  getInfluencerByLink,
  createInfluencerLink,
  updateUserToInfluencer,
  getPurchaseByField,
  getUserById,
  createBankAccount,
  updateBasicRegistersData,
  insertNewObjectData,
};
