const request = require('supertest');
const { ObjectId } = require('mongodb');
const connection = require('../models/connection');
const httpServer = require('./testsUtils/serverTest');
const { resetTestingMongoDb, connectionTest, deleteAllData } = require('./testsUtils/dbTestConnection');
const { loginObj, purchaseObj } = require('./testsUtils/utils');

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

describe('cartController Test', () => {
  let databaseTest;
  let server;
  let token;

  beforeAll(async (done) => {
    const { db } = await resetTestingMongoDb(deleteAllData);
    databaseTest = db;
    server = httpServer.listen(8090, () => done());
  });

  afterAll(async () => {
    databaseTest.close();
    return server && httpServer.close();
  });

  describe('testing createShoppingCart', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successfull: createShoppingCart', async () => {
      const { totalPrice, purchases } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases };

      const { body } = await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      expect(body).toHaveProperty('response');
      expect(body.response).toBe('Carrinho registrado com sucesso');
    });

    test('Error: invalid totalPrice', async () => {
      const { purchases } = purchaseObj;
      const shoppingCartObj = { purchases };

      const { body } = await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"totalPrice\" is required');
    });

    test('Error: invalid purchaseObj', async () => {
      const { totalPrice } = purchaseObj;
      const shoppingCartObj = { totalPrice };

      const { body } = await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"purchases\" is required');
    });

    test('Error: purchases empty', async () => {
      const { totalPrice } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases: [] };

      const { body } = await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"purchases\" must contain at least 1 items');
    });

    test('Error: purchases is not an array', async () => {
      const { totalPrice } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases: 'test' };

      const { body } = await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"purchases\" must be an array');
    });
  });

  describe('testing getShoppingCart', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successfull: getShoppingCart', async () => {
      const { totalPrice, purchases } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases };

      await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      const { body } = await request(httpServer)
        .get('/cart/')
        .set('Authorization', token)
        .send({});

      expect(body).toHaveProperty('cartList');
      expect(body.cartList.totalPrice).toBe(totalPrice);
      expect(body.cartList.purchases[0].name).toBe(purchases[0].name);
      expect(body.cartList.purchases[0].price).toBe(purchases[0].price);
      expect(body.cartList.purchases[0].productId).toBe(purchases[0].productId);
      expect(body.cartList.purchases[0].quantity).toBe(purchases[0].quantity);
    //   expect(body.cartList.purchases[0].sellerId).toBe(purchases[0].sellerId);
    // tem que ver um jeito de dar certo
    });
  });

  describe('testing updateShoppingCart', () => {
    const updateShoppingCartObj = {
      totalPrice: '1000',
      purchases: [
        {
          name: 'Teclado Keychron',
          sellerId: new ObjectId('5fa09e7a6265167b9d1b3324'),
          productId: new ObjectId('5f77540c9ca251495d861ca2'),
          quantity: '1',
          price: '1000',
        },
      ],
    };

    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successfull: updateShoppingCart', async () => {
      const { totalPrice, purchases } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases };

      await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      const { body } = await request(httpServer)
        .put('/cart/update')
        .set('Authorization', token)
        .send(updateShoppingCartObj);

      expect(body).toHaveProperty('newCart');
      expect(body.newCart.totalPrice).toBe(updateShoppingCartObj.totalPrice);
      expect(body.newCart.purchases[0].name).toBe(updateShoppingCartObj.purchases[0].name);
      expect(body.newCart.purchases[0].price).toBe(updateShoppingCartObj.purchases[0].price);
      expect(body.newCart.purchases[0].productId)
        .toBe(updateShoppingCartObj.purchases[0].productId.toString());
      expect(body.newCart.purchases[0].quantity).toBe(updateShoppingCartObj.purchases[0].quantity);
      expect(body.newCart.purchases[0].sellerId)
        .toBe(updateShoppingCartObj.purchases[0].sellerId.toString());
    });

    test('Error: invalid totalPrice', async () => {
      const { totalPrice, purchases } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases };

      await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      const newShoppingCartObj = {
        purchases: updateShoppingCartObj.purchases,
      };

      const { body } = await request(httpServer)
        .put('/cart/update')
        .set('Authorization', token)
        .send(newShoppingCartObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"totalPrice\" is required');
    });

    test('Error: invalid purchaseObj', async () => {
      const { totalPrice, purchases } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases };

      await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      const newShoppingCartObj = {
        totalPrice: updateShoppingCartObj.totalPrice,
      };

      const { body } = await request(httpServer)
        .put('/cart/update')
        .set('Authorization', token)
        .send(newShoppingCartObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"purchases\" is required');
    });

    test('Error: purchases empty', async () => {
      const { totalPrice, purchases } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases };

      await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      const newShoppingCartObj = {
        purchases: [],
        totalPrice: updateShoppingCartObj.totalPrice,
      };

      const { body } = await request(httpServer)
        .put('/cart/update')
        .set('Authorization', token)
        .send(newShoppingCartObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"purchases\" must contain at least 1 items');
    });

    test('Error: purchases is not an array', async () => {
      const { totalPrice, purchases } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases };

      await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      const newShoppingCartObj = {
        purchases: 'teste',
        totalPrice: updateShoppingCartObj.totalPrice,
      };

      const { body } = await request(httpServer)
        .put('/cart/update')
        .set('Authorization', token)
        .send(newShoppingCartObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"purchases\" must be an array');
    });
  });

  describe('testing deleteShoppingCart', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successfull: deleteShoppingCart', async () => {
      const { totalPrice, purchases } = purchaseObj;
      const shoppingCartObj = { totalPrice, purchases };

      await request(httpServer)
        .post('/cart/create')
        .set('Authorization', token)
        .send(shoppingCartObj);

      const { body } = await request(httpServer)
        .delete('/cart/delete')
        .set('Authorization', token)
        .send({});

      expect(body).toHaveProperty('newCart');
      expect(body.newCart.length).toBe(0);
    });
  });
});
