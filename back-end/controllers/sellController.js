const Boom = require("boom");
const rescue = require("express-rescue");
const { sellService, usersService, cartService } = require("../services/index");
const { purchaseSchema, purchaseIdSchema } = require("../validationSchemas/sellSchemas/index");
const { createCartSchema } = require("../validationSchemas/cartSchema/index");

const purchase = rescue(async (req, res, next) => {
  const {
    totalPrice,
    deliveryService,
    paymentMethod,
    installment,
    purchases,
  } = req.body;

  // deliveryTrack = temos que gerar

  const { error } = purchaseSchema.validate({
    sellerId,
    totalPrice,
    deliveryService,
    paymentMethod,
    installment,
    purchases,
  });

  if (error) return next(Boom.badData(error));

  const seller = await usersService.getUserById(sellerId);
  if (!seller) return next(Boom.notFound('Vendedor não encontrado'));

  const { _id: buyerId, email } = req.user;
  const user = await usersService.getUserByEmail(email);

  let influencerId = null;

  if (user.influencerLink) {
    const { _id } = await usersService.getInfluencerByLink(user.influencerLink);
    influencerId = _id;
  }

  await sellService.purchase({
    buyerId,
    sellerId: seller._id,
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

  const { error } = purchaseIdSchema.validate({ purchaseId });

  if (error) return next(Boom.badData(error));

  const purchase = await usersService.getProductByField("sellerId", sellerId);

  if (!purchase.sellerId.equals(sellerId)) return next(
    Boom.unauthorized('Você não tem permissão para alterar o status')
  );

  await sellService.deliveryCheck(purchaseId);

  return res.status(201).json({ response: 'Entrega realizada com sucesso' });
});

const userApproveOfProduct = rescue(async (req, res, next) => {
  const { purchaseId } = req.body;
  const { _id: buyerId } = req.user;

  const { error } = purchaseIdSchema.validate({ purchaseId });

  if (error) return next(Boom.badData(error));

  const purchase = await usersService.getProductByField("buyerId", buyerId);

  if (!purchase.buyerId.equals(buyerId)) return next(
    Boom.unauthorized('Você não tem permissão para alterar o status')
  );

  await sellService.userApproveOfProduct(purchaseId);

  return res.status(201).json({ response: 'Produto entregue sem problemas' });
});

module.exports = {
  purchase,
  deliveryCheck,
  userApproveOfProduct,
  deleteShoppingCart,
};
