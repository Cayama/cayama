const request = require('supertest');
const faker = require('faker/locale/pt_BR');
const connection = require('../models/connection');
const httpServer = require('./testsUtils/serverTest');
const { resetTestingMongoDb, connectionTest, deleteAllData } = require('./testsUtils/dbTestConnection');
const { loginObj, purchaseObj } = require('./testsUtils/utils');
const { usersPaths, purchasePaths } = require('../routes/paths/index');

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

describe('Purchases Test', () => {
  let databaseTest;
  let server;
  let token;

  beforeAll(async (done) => {
    const { db } = await resetTestingMongoDb(deleteAllData);
    databaseTest = db;
    server = httpServer.listen(8089, () => done());
  });

  afterAll(async () => {
    databaseTest.close();
    return server && httpServer.close();
  });

  describe('testing purchase', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post(`/user/${usersPaths.loginUser}`)
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Error: invalid totalPrice', async () => {
      const { body } = await request(httpServer)
        .post(`/purchase/${purchasePaths.createPurchase}`)
        .set('Authorization', token)
        .send(purchaseObj);
    });

    test('Error: deliveryService is not in options', async () => {

    });

    test('Error: paymentMethod is not in options', async () => {

    });

    test('Error: max installment is 12 ', async () => {

    });

    test('Error: purchases empty', async () => {

    });

    test('Error: purchases is not an array', async () => {

    });

    test('Successfull: purchases without influencer', async () => {

    });

    test('Successfull: purchases with influencer', async () => {

    });
  });

  describe('testing getPurchaseByField', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post(`/user/${usersPaths.loginUser}`)
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Error: testing get purchase with non existent field', async () => {
      const { body } = await request(httpServer)
        .get(`/purchase/${purchasePaths.getAllPurchases}`)
        .set('Authorization', token)
        .send({});

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('FieldToSearch não esta entre as opções');
    });

    test('Error: testing get purchase with non existent field', async () => {
      const { body } = await request(httpServer)
        .get(`/purchase/${purchasePaths.getAllPurchases}`)
        .set('Authorization', token)
        .send({ fieldToSearch: 'Tech' });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('FieldToSearch não esta entre as opções');
    });

    test('Successfull: testing get purchase with sellerId', async () => {

    });

    test('Successfull: testing get purchase with buyerId', async () => {

    });

    test('Successfull: testing get purchase with influencerId', async () => {

    });
  });
});
