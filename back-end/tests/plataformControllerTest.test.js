const request = require('supertest');
const { ObjectId } = require('mongodb');
const connection = require('../models/connection');
const httpServer = require('./testsUtils/serverTest');
const { callDate } = require('../controllers/plataformController');
const { resetTestingMongoDb, connectionTest, deleteAllData } = require('./testsUtils/dbTestConnection');
const { loginObj } = require('./testsUtils/utils');

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

describe('plataformController Test', () => {
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

  const plataformSellerObj = {
    planChoice: 'basicSeller',
    registerAs: 'seller',
  };

  const plataformInfluencerObj = {
    planChoice: 'basicInfluencer',
    registerAs: 'influencer',
  };

  const today = callDate();

  describe('testing subscriptionPlan', () => {
    test('Successfull: subscriptionPlan userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successfull: seller', async () => {
      const { body } = await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(plataformSellerObj);

      expect(body).toHaveProperty('plan');
      expect(body.plan.planChoice).toBe(plataformSellerObj.planChoice);
      expect(body.plan.registerAs).toBe(plataformSellerObj.registerAs);
      expect(body.plan.obrigatoryPayment).toBe(true);
      expect(body.plan.status).toBe('active');
      expect(body.plan.registerDay).toBe(today);
    });

    test('Successfull: influencer', async () => {
      const { body } = await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(plataformInfluencerObj);

      expect(body).toHaveProperty('plan');
      expect(body.plan.planChoice).toBe(plataformInfluencerObj.planChoice);
      expect(body.plan.registerAs).toBe(plataformInfluencerObj.registerAs);
      expect(body.plan.obrigatoryPayment).toBe(false);
      expect(body.plan.status).toBe('active');
      expect(body.plan.registerDay).toBe(today);
    });

    test('Error: invalid registerAs', async () => {
      const newPlanObj = {
        planChoice: plataformSellerObj.planChoice,
      };

      const { body } = await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(newPlanObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message)
        .toContain('Error code \"Tipo de registro não esta entre as opções\" is not defined, your custom type is missing the correct messages definition');
      // corrigir o erro code
    });

    test('Error: invalid planChoice', async () => {
      const newPlanObj = {
        registerAs: plataformSellerObj.registerAs,
      };

      const { body } = await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(newPlanObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message)
        .toContain('Error code \"Plano não esta entre as opções\" is not defined, your custom type is missing the correct messages definition');
      // corrigir o erro code
    });
  });

  describe('testing getSubscriptionPlan', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successfull: getSubscriptionPlan seller', async () => {
      await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(plataformSellerObj);

      const { body } = await request(httpServer)
        .get('/plataform/')
        .set('Authorization', token)
        .send({});

      expect(body).toHaveProperty('actualPlan');
      expect(body.actualPlan.planChoice).toBe(plataformSellerObj.planChoice);
      expect(body.actualPlan.registerAs).toBe(plataformSellerObj.registerAs);
      expect(body.actualPlan.obrigatoryPayment).toBe(true);
      expect(body.actualPlan.status).toBe('active');
      expect(body.actualPlan.registerDay).toBe(today);
    });

    test('Successfull: suspendSubscriptionPlan influencer', async () => {
      await request(httpServer)
        .put('/plataform/change')
        .set('Authorization', token)
        .send(plataformInfluencerObj);

      const { body } = await request(httpServer)
        .get('/plataform/')
        .set('Authorization', token)
        .send({});

      expect(body).toHaveProperty('actualPlan');
      expect(body.actualPlan.planChoice).toBe(plataformInfluencerObj.planChoice);
      expect(body.actualPlan.registerAs).toBe(plataformInfluencerObj.registerAs);
      expect(body.actualPlan.obrigatoryPayment).toBe(false);
      expect(body.actualPlan.status).toBe('active');
      expect(body.actualPlan.registerDay).toBe(today);
    });
  });

  describe('testing updateSubscriptionPlan', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successfull: updateSubscriptionPlan seller', async () => {
      await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(plataformSellerObj);

      const newPlanObj = {
        registerAs: plataformSellerObj.registerAs,
        planChoice: 'premiumSeller',
      };

      const { body } = await request(httpServer)
        .put('/plataform/change')
        .set('Authorization', token)
        .send(newPlanObj);

      expect(body).toHaveProperty('plan');
      expect(body.plan.planChoice).toBe(newPlanObj.planChoice);
      expect(body.plan.registerAs).toBe(plataformSellerObj.registerAs);
      expect(body.plan.obrigatoryPayment).toBe(true);
      expect(body.plan.status).toBe('active');
      expect(body.plan.registerDay).toBe(today);
    });

    test('Successfull: updateSubscriptionPlan influencer', async () => {
      await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(plataformInfluencerObj);

      const newPlanObj = {
        registerAs: plataformInfluencerObj.registerAs,
        planChoice: 'premiumInfluencer',
      };

      const { body } = await request(httpServer)
        .put('/plataform/change')
        .set('Authorization', token)
        .send(newPlanObj);

      expect(body).toHaveProperty('plan');
      expect(body.plan.planChoice).toBe(newPlanObj.planChoice);
      expect(body.plan.registerAs).toBe(plataformInfluencerObj.registerAs);
      expect(body.plan.obrigatoryPayment).toBe(false);
      expect(body.plan.status).toBe('active');
      expect(body.plan.registerDay).toBe(today);
    });

    test('Error: invalid registerAs', async () => {
      await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(plataformSellerObj);

      const newPlanObj = {
        planChoice: plataformSellerObj.planChoice,
      };

      const { body } = await request(httpServer)
        .put('/plataform/change')
        .set('Authorization', token)
        .send(newPlanObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message)
        .toContain('Error code \"Tipo de registro não esta entre as opções\" is not defined, your custom type is missing the correct messages definition');
      // corrigir o erro code
    });

    test('Error: invalid registerAs', async () => {
      await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(plataformSellerObj);

      const newPlanObj = {
        registerAs: plataformSellerObj.registerAs,
      };

      const { body } = await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(newPlanObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message)
        .toContain('Error code \"Plano não esta entre as opções\" is not defined, your custom type is missing the correct messages definition');
      // corrigir o erro code e ver porque ele voltou o erro errado
    });
  });

  describe('testing suspendSubscriptionPlan', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successfull: suspendSubscriptionPlan seller', async () => {
      await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(plataformSellerObj);

      const { body } = await request(httpServer)
        .put('/plataform/suspend')
        .set('Authorization', token)
        .send({});

      expect(body).toHaveProperty('response');
      expect(body.response).toBe('Plano suspenso com sucesso');
    });

    test('Successfull: suspendSubscriptionPlan influencer', async () => {
      await request(httpServer)
        .post('/plataform/')
        .set('Authorization', token)
        .send(plataformInfluencerObj);

      const { body } = await request(httpServer)
        .put('/plataform/suspend')
        .set('Authorization', token)
        .send({});

      expect(body).toHaveProperty('response');
      expect(body.response).toBe('Plano suspenso com sucesso');
    });
  });
});
