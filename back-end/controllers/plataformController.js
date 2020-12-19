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
}

const testplan = (planChoice) => {
  if ( planChoice === 'basicSeller' || planChoice === 'premiumSeller') return true;
  return false;
}


const subscriptionPlan = rescue(async (req, res, next) => {
  const { planChoice, registerAs } = req.body;
  const { _id: userId } = req.user;

  const { error } = checkSubscriptionPlanSchema.validate({
    planChoice,
    registerAs,
  });

  if (error) return next(Boom.badData(error));

  const registerDay = await callDate();

  const lastUpdate = registerDay;

  const obrigatoryPaymente = await testplan(planChoice);

  await plataformService.subscriptionPlan({
    userId,
    planChoice,
    registerAs,
    registerDay,
    lastUpdate,
    obrigatoryPaymente,
    status: 'active',
  });

  return res.status(201).json({ response: 'Cadastro realizado com sucesso' });
});

const updateSubscriptionPlan = rescue(async (req, res, next) => {
  const { planChoice, registerAs } = req.body;
  const { _id: userId } = req.user;

  const { error } = checkSubscriptionPlanSchema.validate({
    planChoice,
    registerAs,
  });

  if (error) return next(Boom.badData(error));

  const lastUpdate = await callDate();

  const obrigatoryPaymente = await testplan(planChoice);

  const newplan = await plataformService.updateSubscriptionPlan(
    userId,
    planChoice,
    registerAs,
    lastUpdate,
    obrigatoryPaymente,
  );

  return res.status(201).json({ newplan });
});

const suspendSubscriptionPlan = rescue(async (req, res, _next) => {
  const { _id: userId } = req.user;

  await plataformService.getSubscriptionPlan(userId);

  return res.status(200).json({ response: 'Plano suspenso com sucesso' });
})

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
