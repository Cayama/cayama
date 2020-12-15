const Joi = require('joi');
const { ObjectId } = require('mongodb');

const registerNameSchema = Joi.string()
  .min(3)
  .max(40)
  .required();

const passwordSchema = Joi.string()
  .min(8)
  .alphanum()
  .required()
  .error(() => new Error('Senha deve conter 8 caracteres alfanuméricos'));

const emailSchema = Joi.string()
  .regex(
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
  .required()
  .error(() => new Error('Email inválido'));

const birthDateSchema = Joi.string();

const cepSchema = Joi.string()
  .length(8)
  .required();

const shippingAddressSchema = Joi.string()
  .required();

const phoneSchema = Joi.string()
  .length(11)
  .required()
  .error(() => new Error('Apenas números com DDD'));

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

const validateSocialMediaChoices = (value, helper) => {
  const array = ['YouTube', 'Instagram', 'Facebook', 'TikTok', 'Twitter'];
  if (!array.includes(value))
    return helper.error('Mídia Social inserida não esta entre as opções');
  return value;
};

const validateFieldToSearch = (value, helper) => {
  const array = ['buyerId', 'sellerId', 'influencerId'];
  if (!array.includes(value))
    return helper.error('FieldToSearch não esta entre as opções');
  return value;
};

const validateContentTypeChoices = (value, helper) => {
  const array = ['Tecnologia', 'Moda', 'Fitness', 'Saúde'];
  if (!array.includes(value)) {
    return helper.error('Tipo de Conteúdo inserido não esta entre as opções');
  }
  return value;
};

const validateProductCategoryChoices = (value, helper) => {
  const array = ['Tecnologia', 'Moda', 'Fitness', 'Saúde'];
  if (!array.includes(value)) {
    return helper.error('Tipo de Conteúdo inserido não esta entre as opções');
  }
  return value;
};

const validateMongoId = (value, helper) => {
  if (!ObjectId.isValid(value)) {
    return helper.error('Id inválido');
  }
  return value;
};

const validateFieldsToUpdate = (value, helper) => {
  const array = [
    'firstName', 'lastName', 'cpf', 'birthDate', 'storeName', 'cnpj', 'addresses', 'products'
  ];

  if (!array.includes(value)) {
    return helper.error('Opção para atualização inválida');
  }

  return value;
};

const addressesSchema = Joi.array().items(
  Joi.object({
  name: registerNameSchema,
  cep: cepSchema,
  state: shippingAddressSchema,
  city: shippingAddressSchema,
  neighborhood: shippingAddressSchema,
  street: shippingAddressSchema,
  number: shippingAddressSchema,
  complement: shippingAddressSchema,
  phone: phoneSchema,
  })
).required()

const registerProductsSchema = Joi.object({
    productName: registerNameSchema,
    price: productPriceSchema,
    category: categoryTypeSchema,
    stockQuantity: productStockQuantitySchema,
    description: productDescriptionSchema,
    videosPath: arrayReviewLinksSchema,
    keys: arrayLinksSchema,
    urls: arrayLinksSchema,
})

const choices = {
  'firstName': registerNameSchema,
  'lastName': registerNameSchema,
  'email': emailSchema,
  'cpf': cpfSchema,
  'birthDate': birthDateSchema,
  'storeName': registerNameSchema,
  'cnpj': cnpjSchema,
  'addresses': addressesSchema,
}

const validateRegisterInfo = (value, helper) => {
  const schema = choices[value.fieldToUpdate];
  const { error } = Joi.object({ newValue: schema }).validate({ newValue: value.newValue });
  if (error) {
    return helper.error(error);
  }

  return value.newValue;
};

const socialMediaSchema = Joi.string().custom(validateSocialMediaChoices);
const contentTypeSchema = Joi.string().custom(validateContentTypeChoices);
const categoryTypeSchema = Joi.string().custom(validateProductCategoryChoices);
const fieldToSearchSchema = Joi.string().custom(validateFieldToSearch);
const validateMongoIdSchema = Joi.custom(validateMongoId);
const fieldsToUpdateSchema = Joi.custom(validateFieldsToUpdate);
const newValueSchema = Joi.custom(validateRegisterInfo)

const influencerLinkSchema = Joi.string()
  .min(3)
  .max(30)
  .trim()
  .required();

const productPriceSchema = Joi.number()
  .required();

const productStockQuantitySchema = Joi.number()
  .integer()
  .positive()
  .required();

const productDescriptionSchema = Joi.string()
  .min(30)
  .max(400)
  .alphanum();

const arrayLinksSchema = Joi.array()
  .items(Joi.string())
  .required();

const arrayReviewLinksSchema = Joi.array()
  .items(Joi.string());

const arrayOfObjectsSchema = Joi.array()
  .items(Joi.object());

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
  socialMediaSchema,
  contentTypeSchema,
  influencerLinkSchema,
  productPriceSchema,
  productStockQuantitySchema,
  productDescriptionSchema,
  arrayLinksSchema,
  arrayReviewLinksSchema,
  categoryTypeSchema,
  fieldToSearchSchema,
  validateMongoIdSchema,
  arrayOfObjectsSchema,
  fieldsToUpdateSchema,
  newValueSchema
};
