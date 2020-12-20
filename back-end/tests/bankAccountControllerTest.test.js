const request = require('supertest');
const faker = require('faker/locale/pt_BR');
const connection = require('../models/connection');
const httpServer = require('./testsUtils/serverTest');
const { resetTestingMongoDb, connectionTest } = require('./testsUtils/dbTestConnection');
const { loginObj, bankInfo } = require('./testsUtils/utils');

const deleteAllData = ['products', 'purchases', 'users'];

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

const bankInfoRestored = {
  bank: 'Inter',
  bankDigit: 77,
  accountNumberWithDigit: '451556346347',
  agency: '0001',
};

describe('BankAccount Test', () => {
  let databaseTest;
  let server;
  let token;
  beforeAll(async (done) => {
    const { db } = await resetTestingMongoDb(deleteAllData);
    databaseTest = db;
    server = httpServer.listen(8088, () => done());
  });

  afterAll(async () => {
    databaseTest.close();
    return server && httpServer.close();
  });

  describe('testing createBankAccount', () => {
    afterEach(() => {
      bankInfo.bank = bankInfoRestored.bank;
      bankInfo.bankDigit = bankInfoRestored.bankDigit;
      bankInfo.accountNumberWithDigit = bankInfoRestored.accountNumberWithDigit;
      bankInfo.agency = bankInfoRestored.agency;
    });

    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Error: invalid bank name', async () => {
      bankInfo.bank = '';
      const { body } = await request(httpServer)
        .put('/user/bank-account-info')
        .set('Authorization', token)
        .send(bankInfo);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('"bank" is not allowed to be empty');
    });

    test('Error: invalid bank number', async () => {
      bankInfo.bankDigit = -1;
      const { body } = await request(httpServer)
        .put('/user/bank-account-info')
        .set('Authorization', token)
        .send(bankInfo);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"bankDigit\" must be a positive number');
    });

    test('Error: invalid account number with digit', async () => {
      bankInfo.accountNumberWithDigit = '';
      const { body } = await request(httpServer)
        .put('/user/bank-account-info')
        .set('Authorization', token)
        .send(bankInfo);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"accountNumberWithDigit\" is not allowed to be empty');
    });

    test('Error: invalid account number with digit', async () => {
      delete bankInfo.accountNumberWithDigit;
      const { body } = await request(httpServer)
        .put('/user/bank-account-info')
        .set('Authorization', token)
        .send(bankInfo);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"accountNumberWithDigit\" is required');
    });

    test('Error: invalid account number with digit', async () => {
      delete bankInfo.accountNumberWithDigit;
      const { body } = await request(httpServer)
        .put('/user/bank-account-info')
        .set('Authorization', token)
        .send(bankInfo);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"accountNumberWithDigit\" is required');
    });

    test('Error: invalid agency number', async () => {
      bankInfo.agency = -1;
      const { body } = await request(httpServer)
        .put('/user/bank-account-info')
        .set('Authorization', token)
        .send(bankInfo);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"agency\" must be a positive number');
    });

    test('Error: invalid agency number', async () => {
      delete bankInfo.agency;
      const { body } = await request(httpServer)
        .put('/user/bank-account-info')
        .set('Authorization', token)
        .send(bankInfo);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"agency\" is required');
    });

    test('Successfull: user with bank account registered', async () => {
      const { body } = await request(httpServer)
        .put('/user/bank-account-info')
        .set('Authorization', token)
        .send(bankInfo);

      expect(body.userWithBank).toHaveProperty('bankAccount');
      expect(body.userWithBank.bankAccount.bank).toBe('Inter');
      expect(body.userWithBank.bankAccount.bankDigit).toBe(77);
    });
  });
});
