const { plataformModel } = require('../models/index');

const subscriptionPlan = async (planObject) => {
  const newMember = await plataformModel.subscriptionPlan(planObject);
  return newMember;
};

const updateSubscriptionPlan = async (
  userId, planChoice, registerAs, lastUpdate, obrigatoryPaymente, status,
) => {
  const newMember = await plataformModel.updateSubscriptionPlan(
    userId,
    planChoice,
    registerAs,
    lastUpdate,
    obrigatoryPaymente,
    status,
  );
  return newMember;
};

const suspendSubscriptionPlan = async (userId) => {
  const suspendedMembership = await plataformModel.suspendSubscriptionPlan(userId);
  return suspendedMembership;
};

const getSubscriptionPlan = async (userId) => {
  const plan = await plataformModel.getSubscriptionPlan(userId);
  return plan;
};

module.exports = {
  subscriptionPlan,
  updateSubscriptionPlan,
  suspendSubscriptionPlan,
  getSubscriptionPlan,
};
