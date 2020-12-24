const connection = require('./connection');

const subscriptionPlan = async (newUser) => {
  const db = await connection();
  const newMember = await db.collection('subscriptionList').insertOne(newUser);

  return newMember.ops[0];
};

const updateSubscriptionPlan = async (
  userId, planChoice, registerAs, lastUpdate, obrigatoryPayment, status,
) => {
  const db = await connection();
  const newMember = await db.collection('subscriptionList')
    .findOneAndUpdate(
      { userId },
      { $set: { planChoice, registerAs, lastUpdate, obrigatoryPayment, status } },
      { returnOriginal: false },
    );
  return newMember.value;
};

const suspendSubscriptionPlan = async (userId) => {
  const db = await connection();
  const suspendedMember = await db.collection('subscriptionList')
    .findOneAndUpdate(
      { userId },
      { $set: { status: 'suspended' } },
      { returnOriginal: false },
    );
  return suspendedMember.value;
};

const getSubscriptionPlan = async (userId) => {
  const db = await connection();
  const plan = await db.collection('subscriptionList')
    .findOne({ userId });

  return plan;
};

module.exports = {
  subscriptionPlan,
  updateSubscriptionPlan,
  suspendSubscriptionPlan,
  getSubscriptionPlan,
};
