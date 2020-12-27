const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

module.exports = {
  createBankAccount,
};
