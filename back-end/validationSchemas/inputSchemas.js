const Joi = require("joi");

const registerNameSchema = Joi.string()
  .min(3)
  .max(40)
  .required()
  .error(
    () => new Error("Nome deve ter pelo menos 3 caracteres alfanuméricos")
  );

const passwordSchema = Joi.string()
  .min(8)
  .alphanum()
  .required()
  .error(() => new Error("Senha deve conter 8 caracteres alfanuméricos"));

const emailSchema = Joi.string()
  .regex(
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
  .required()
  .error(() => new Error("Email inválido"));

const birthDateSchema = Joi.string();

const cepSchema = Joi.string()
  .length(8)
  .required()
  .error(() => new Error("CEP inválido"));

const shippingAddressSchema = Joi.string()
  .required()
  .error(() => new Error("Dados precisam ser do tipo string"));

const phoneSchema = Joi.string()
  .length(11)
  .required()
  .error(() => new Error("Apenas números com DDD"));

const cpfSchema = Joi.string()
    .regex(/^[0-9]+$/)
    .length(11)
    .error(() => new Error("Apenas números são permitidos no cpf"));

const cnpjSchema = Joi.string()
  .regex(/^[0-9]+$/)
  .length(14)
  .error(() => new Error("Apenas números são permitidos no cnpj"));


const validateSocialMediaChoices = (value, helper) => {
  const array = ['YouTube', 'Instagram', 'Facebook', 'TikTok', 'Twitter'];
  if (!array.includes(value)) return helper.error('Mídia Social inserida não esta entre as opções');
  return value
}

const validateContentTypeChoices = (value, helper) => {
  const array = ['Tecnologia', 'Moda', 'Fitness', 'Saúde'];
  if (!array.includes(value)) {
    return helper.error('Tipo de Conteúdo inserido não esta entre as opções');
  }
  return value
}

const socialMediaSchema = Joi.string().custom(validateSocialMediaChoices);
const contentTypeSchema = Joi.string().custom(validateContentTypeChoices);

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
};
