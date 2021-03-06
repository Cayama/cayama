const Joi = require('joi');
const { ObjectId } = require('mongodb');

const registerNameSchema = Joi.string().min(3).max(40).required();

const passwordSchema = Joi.string()
  .min(8)
  .alphanum()
  .required()
  .error(() => new Error('Senha deve conter 8 caracteres alfanuméricos'));

const emailSchema = Joi.string()
  .regex(
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  )
  .required()
  .error(() => new Error('Email inválido'));

const birthDateSchema = Joi.string();

const cepSchema = Joi.string().length(9).required().error(() => new Error('Cep deve conter 8 caracteres numéricos'));

const shippingAddressSchema = Joi.string().required();

const phoneSchema = Joi.string()
  .length(11)
  .required()
  .error(() => new Error('Apenas números (11) com DDD'));

const cpfSchema = Joi.string()
  .regex(/^[0-9]+$/)
  .length(11)
  .required()
  .error(() => new Error('Apenas 11 números são permitidos no cpf'));

const cnpjSchema = Joi.string()
  .regex(/^[0-9]+$/)
  .length(14)
  .required()
  .error(() => new Error('Apenas 14 números são permitidos no cnpj'));

const influencerLinkSchema = Joi.string().min(3).max(30).trim()
  .required();

// const productPriceSchema = Joi.string().regex(/\d+(?:\.\d{3})*?,\d{2}/).required();

const productPriceSchema = Joi.number().required();

const productStockQuantitySchema = Joi.number().integer().positive().required();

const productDescriptionSchema = Joi.string().min(0).max(400);

const arrayLinksSchema = Joi.array().items(Joi.string()).required();

const arrayReviewLinksSchema = Joi.array().items(Joi.string());

const arraySizesWithQuantitySchema = Joi.array().items(
  Joi.object({
    size: Joi.string().required(),
    stockQuantity: productStockQuantitySchema, 
  }
));

const newsAcceptanceSchema = Joi.boolean();
const privacyAndTermsSchema = Joi.boolean().truthy();

const isInfluencerSchema = Joi.boolean();

const hexColorSchema = Joi.string()
  .regex(
    /^#(?:[0-9a-fA-F]{3}){1,2}$/,
  )
  .required()
  .error(() => new Error('Cor inválida'));

const fieldsObjectManager = {
  categories: {
    array: ['tecnologia', 'moda', 'fitness', 'saúde', 'bebidas', 'Blusas', 'Calça', 'Bermuda', 'Top', 'Calçados', 'Chuteira', 'Jaqueta'],
    error: 'Tipo de Conteúdo inserido não esta entre as opções',
  },
  socialMedia: {
    array: ['YouTube', 'Instagram', 'Facebook', 'TikTok', 'Twitter', 'Outra'],
    error: 'Mídia Social inserida não esta entre as opções',
  },
  contentType: {
    array: ['Moda', 'Moda Fitness', 'Maquiagem', 'Beleza', 'Life Style', 'Saúde', 'Outra'],
    error: 'Tipo de Conteúdo inserido não esta entre as opções',
  },
  fieldSearch: {
    array: ['buyerId', 'sellerId', 'influencerId'],
    error: 'FieldToSearch não esta entre as opções',
  },
  fieldToUpdate: {
    array: [
      'firstName',
      'lastName',
      'cpf',
      'birthDate',
      'storePersonalData',
      'storeColorsData',
      'storeCategoriesData',
      'personalData',
      'accountData',
      'isInfluencer',
      'newsAcceptance',
      'password',
      'storeName',
      'cnpj',
      'addresses',
      'products',
      'influencer',
      'bankAccount',
    ],
    error: 'Opção para atualização inválida',
  },
  planChoice: {
    array: ['basicSeller', 'basicInfluencer', 'premiumSeller', 'premiumInfluencer'],
    error: 'Plano não esta entre as opções',
  },
  registerAs: {
    array: ['seller', 'influencer'],
    error: 'Tipo de registro não esta entre as opções',
  },
};

const validateFieldExistence = (value, helper) => {
  const validationObj = fieldsObjectManager[value.field];
  if (!validationObj.array.includes(value.value)) {
    return helper.error(validationObj.error);
  }
  return value.value;
};

const validateMongoId = (value, helper) => {
  console.log(value)
  if (!ObjectId.isValid(value)) {
    return helper.error('Id inválido');
  }
  return value;
};

const validateRegisterInfo = (value, helper) => {
  const schema = choices[value.fieldToUpdate];
  const { error } = Joi.object({ newValue: schema }).validate({
    newValue: value.newValue,
  });
  if (error) {
    return helper.error(error);
  }

  return value.newValue;
};

const fieldsExistenceSchema = Joi.custom(validateFieldExistence);
const validateMongoIdSchema = Joi.custom(validateMongoId);
const newValueSchema = Joi.custom(validateRegisterInfo);

const addressesSchema = Joi.array()
  .items(
    Joi.object({
      recipient: registerNameSchema,
      cep: cepSchema,
      state: shippingAddressSchema,
      city: shippingAddressSchema,
      neighborhood: shippingAddressSchema,
      address: shippingAddressSchema,
      number: shippingAddressSchema,
      complement: shippingAddressSchema,
      phone: phoneSchema,
      country: registerNameSchema,
    }),
  )
  .required();

const bankAccountSchema = Joi.object({
  bank: registerNameSchema,
  bankDigit: productStockQuantitySchema,
  accountNumberWithDigit: registerNameSchema,
  agency: productStockQuantitySchema,
});

const influencerSchema = Joi.object({
  socialMedia: fieldsExistenceSchema,
  contentType: fieldsExistenceSchema,
  socialMediaName: registerNameSchema,
  influencerLink: influencerLinkSchema,
});

const userAccountDataUpdateSchema = Joi.object({
  email: emailSchema,
});

const userPersonalDataSchema = Joi.object({
  firstName: registerNameSchema,
  lastName: registerNameSchema,
  cpf: cpfSchema,
  phone: phoneSchema,
});

const storeDataUpdateSchema = Joi.object({
  storeName: registerNameSchema,
  cnpj: cnpjSchema,
  phone: phoneSchema,
});

const storeCategoriesDataUpdateSchema = Joi.array().items(Joi.string())

const storeColorsDataUpdateSchema = Joi.object({
  primaryColor: hexColorSchema,
  secondaryColor: hexColorSchema,
});

const choices = {
  storeCategoriesData: storeCategoriesDataUpdateSchema,
  storeColorsData: storeColorsDataUpdateSchema,
  storePersonalData: storeDataUpdateSchema,
  personalData: userPersonalDataSchema,
  accountData: userAccountDataUpdateSchema,
  isInfluencer: isInfluencerSchema,
  newsAcceptance: newsAcceptanceSchema,
  password: passwordSchema,
  firstName: registerNameSchema,
  lastName: registerNameSchema,
  email: emailSchema,
  cpf: cpfSchema,
  birthDate: birthDateSchema,
  storeName: registerNameSchema,
  cnpj: cnpjSchema,
  addresses: addressesSchema,
  bankAccount: bankAccountSchema,
  influencer: influencerSchema,
};

const arrayOfObjectsSchema = Joi.array().min(1).items(Joi.object({
  name: registerNameSchema,
  sellerId: validateMongoIdSchema,
  productId: validateMongoIdSchema,
  quantity: shippingAddressSchema,
  price: shippingAddressSchema,
})).required();

module.exports = {
  registerNameSchema,
  passwordSchema,
  emailSchema,
  birthDateSchema,
  cepSchema,
  shippingAddressSchema,
  phoneSchema,
  cpfSchema,
  cnpjSchema,
  influencerLinkSchema,
  productPriceSchema,
  productStockQuantitySchema,
  productDescriptionSchema,
  arrayLinksSchema,
  arrayReviewLinksSchema,
  validateMongoIdSchema,
  arrayOfObjectsSchema,
  newValueSchema,
  fieldsExistenceSchema,
  newsAcceptanceSchema,
  privacyAndTermsSchema,
  isInfluencerSchema,
  arraySizesWithQuantitySchema,
};
