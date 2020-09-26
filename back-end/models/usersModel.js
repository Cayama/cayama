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

module.exports = {
  getUserByEmail,
  registerUser,
};
