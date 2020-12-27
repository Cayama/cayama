const connection = require('./connection');

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

module.exports = {
  updateUserAddressesById,
};
