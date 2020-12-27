const Boom = require('boom');
const rescue = require('express-rescue');
const { ObjectId } = require('mongodb');
const { purchaseService, usersService, influencerService } = require('../services/index');
const { purchaseSchema, purchaseIdSchema } = require('../validationSchemas/purchaseSchemas/index');
const { getProductSchema } = require('../validationSchemas/usersSchemas/index');
const { validateSchemas } = require('../services/schemasService');

const purchase = rescue(async (req, res, next) => {
  const {
    totalPrice,
    deliveryService,
    paymentMethod,
    installment,
    purchases,
  } = req.body;

  // deliveryTrack = temos que gerar

  validateSchemas(next, purchaseSchema, {
    totalPrice,
    deliveryService,
    paymentMethod,
    installment,
    purchases,
  });

  const sellersIdArray = purchases.reduce((acc, { sellerId }) => {
    if (!acc.includes(sellerId)) {
      acc.push(sellerId);
      return acc;
    }
    return acc;
  }, []);

  Promise.all([sellersIdArray.map(async (sellerId) => {
    const seller = await usersService.getUserById(sellerId);
    if (!seller) return next(Boom.notFound('Vendedor não encontrado'));
  })]);

  const { _id: buyerId } = req.user;
  const user = await usersService.getUserById(buyerId);

  let influencerId = null;

  if (user.influencer.influencerLink) {
    const { _id } = await influencerService.getInfluencerByLink(user.influencerLink);
    influencerId = _id;
  }

  await purchaseService.purchase({
    buyerId,
    sellerId: sellersIdArray,
    influencerId,
    totalPrice,
    deliveryService,
    deliveryTrack: 'Temos que gerar ainda',
    status: 'preparando',
    paymentMethod,
    installment,
    purchases,
  });

  return res.status(201).json({ response: 'Compra realizada com sucesso' });
});

const deliveryCheck = rescue(async (req, res, next) => {
  const { purchaseId } = req.body;
  const { _id: sellerId } = req.user;

  validateSchemas(next, purchaseIdSchema, { purchaseId });

  console.log(purchaseId);
  const purchase = await purchaseService.getPurchaseByField('_id', purchaseId);
  console.log(purchase);

  if (!purchase[0].sellerId.equals(sellerId)) {
    return next(
      Boom.unauthorized('Você não tem permissão para alterar o status'),
    );
  }

  await purchaseService.deliveryCheck(purchaseId);

  return res.status(201).json({ response: 'Entrega realizada com sucesso' });
});

const userApproveOfProduct = rescue(async (req, res, next) => {
  const { purchaseId } = req.body;
  const { _id: buyerId } = req.user;

  validateSchemas(next, purchaseIdSchema, { purchaseId });

  const purchase = await purchaseService.getPurchaseByField('_id', purchaseId);

  if (!purchase[0].buyerId.equals(buyerId)) {
    return next(
      Boom.unauthorized('Você não tem permissão para alterar o status'),
    );
  }

  await purchaseService.userApproveOfProduct(purchaseId);

  return res.status(201).json({ response: 'Produto entregue sem problemas' });
});

const getPurchaseByField = rescue(async (req, res, next) => {
  const { fieldToSearch } = req.body;
  const { _id: userId } = req.user;

  validateSchemas(next, getProductSchema, { fieldToSearch:
    { field: 'fieldSearch', value: fieldToSearch },
  });

  const purchaseList = await purchaseService.getPurchaseByField(
    fieldToSearch,
    userId,
  );

  return res.status(200).json({ purchaseList });
});

module.exports = {
  purchase,
  deliveryCheck,
  userApproveOfProduct,
  getPurchaseByField,
};
