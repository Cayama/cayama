const request = require('supertest');
const faker = require('faker/locale/pt_BR');
const connection = require('../models/connection');
const httpServer = require('./testsUtils/serverTest');
const { resetTestingMongoDb, connectionTest, userTest1 } = require('./testsUtils/dbTestConnection');
// const {  } = require('./testsUtils/utils');

const deleteAllData = ['products', 'purchases', 'users'];

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

describe('Boilerplate for integration test', () => {
  let databaseTest;
  let server;
  beforeAll(async (done) => {
    const { db } = await resetTestingMongoDb(deleteAllData);
    databaseTest = db;
    server = httpServer.listen(8085, () => done());
  });

  afterAll(async () => {
    databaseTest.close();
    return server && httpServer.close();
  });

  describe('testing everything', () => {
    const state = faker.address.state();
    const name = faker.name.firstName();

    test('testing if database is responding', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send({
          email: 'jafet@jafet.com.br',
          password: 'a1234567',
        });
      console.log(state);
      console.log(name);
      console.log(body.token);
    });
  });
});
