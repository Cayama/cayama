const rescue = require('express-rescue');
const { bankService } = require('../services/index');
const { bankAccountSchema } = require('../validationSchemas/usersSchemas/index');

const { validateSchemas } = require('../services/schemasService');

const createBankAccount = rescue(async (req, res, next) => {
  const { bank, bankDigit, accountNumberWithDigit, agency } = req.body;
  const { _id } = req.user;

  validateSchemas(next, bankAccountSchema, {
    bank,
    bankDigit,
    accountNumberWithDigit,
    agency,
  });

  const { password, confirmPassword, ...userWithBank } = await bankService.createBankAccount(
    {
      bank,
      bankDigit,
      accountNumberWithDigit,
      agency,
    },
    _id,
  );

  return res.status(201).json({ userWithBank });
});

module.exports = {
  createBankAccount,
};
