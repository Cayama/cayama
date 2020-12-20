const Boom = require('boom');
const rescue = require('express-rescue');
const { plataformService } = require('../services/index');
const { checkSubscriptionPlanSchema } = require('../validationSchemas/plataformSchemas/index');

const callDate = () => {
  let today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  today = `${day}/${month}/${year}`;

  return today;
};

const testplan = (planChoice) => {
  if (planChoice === 'basicSeller' || planChoice === 'premiumSeller') return true;
  return false;
};

const subscriptionPlan = rescue(async (req, res, next) => {
  const { planChoice, registerAs } = req.body;
  const { _id: userId } = req.user;

  const { error } = checkSubscriptionPlanSchema.validate({
    planChoice: { field: 'planChoice', value: planChoice },
    registerAs: { field: 'registerAs', value: registerAs },
  });

  if (error) return next(Boom.badData(error));

  const registerDay = callDate();

  const lastUpdate = registerDay;

  const obrigatoryPayment = testplan(planChoice);

  const plan = await plataformService.subscriptionPlan({
    userId,
    planChoice,
    registerAs,
    registerDay,
    lastUpdate,
    obrigatoryPayment,
    status: 'active',
  });

  return res.status(201).json({ plan });
});

const updateSubscriptionPlan = rescue(async (req, res, next) => {
  const { planChoice, registerAs } = req.body;
  const { _id: userId } = req.user;

  const { error } = checkSubscriptionPlanSchema.validate({
    planChoice: { field: 'planChoice', value: planChoice },
    registerAs: { field: 'registerAs', value: registerAs },
  });

  if (error) return next(Boom.badData(error));

  const lastUpdate = callDate();

  const obrigatoryPayment = testplan(planChoice);

  const plan = await plataformService.updateSubscriptionPlan(
    userId,
    planChoice,
    registerAs,
    lastUpdate,
    obrigatoryPayment,
  );

  return res.status(201).json({ plan });
});

const suspendSubscriptionPlan = rescue(async (req, res, _next) => {
  const { _id: userId } = req.user;

  await plataformService.suspendSubscriptionPlan(userId);

  return res.status(200).json({ response: 'Plano suspenso com sucesso' });
});

const getSubscriptionPlan = rescue(async (req, res, _next) => {
  const { _id: userId } = req.user;

  const actualPlan = await plataformService.getSubscriptionPlan(userId);

  return res.status(200).json({ actualPlan });
});

module.exports = {
  subscriptionPlan,
  updateSubscriptionPlan,
  suspendSubscriptionPlan,
  getSubscriptionPlan,
};
