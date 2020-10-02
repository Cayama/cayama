const connection = require('./connection');

const getUserByEmail = async (email) => {
  const db = await connection();
  const user = db.collection('users').findOne({ email });

  return user;
};

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

module.exports = {
  getUserByEmail,
  registerUser,
  updateUserAddressesByEmail,
};
