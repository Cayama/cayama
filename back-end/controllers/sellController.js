const Boom = require("boom");
const rescue = require("express-rescue");
const { sellService, usersService } = require("../services/index");
const { purchaseSchema } = require("../validationSchemas/sellSchemas/index");

const createShoppingCart = rescue(async (req, res, next) => {});

const getShoppingCart = rescue(async (req, res, next) => {});

const updateShoppingCart = rescue(async (req, res, next) => {});

const purchase = rescue(async (req, res, next) => {
  const {
    userId: sellerId,
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

const deliveryCheck = rescue(async (req, res, next) => {});

const userApproveOfProduct = rescue(async (req, res, next) => {});

module.exports = {
  createShoppingCart,
  getShoppingCart,
  updateShoppingCart,
  purchase,
  deliveryCheck,
  userApproveOfProduct,
};
