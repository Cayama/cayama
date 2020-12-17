const request = require('supertest');
const connection = require('../models/connection');
const { resetTestingMongoDb, connectionTest } = require('./dbTestConnection');
const httpServer = require('./serverTest');

const deleteAllData = ['products', 'purchases', 'users'];

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

describe('UserController Test', () => {
  let databaseTest;

  beforeAll(async (done) => {
    const { db } = await resetTestingMongoDb(deleteAllData);
    databaseTest = db
    server = httpServer.listen(8085, () => done());
  })

  afterAll(async () => {
    databaseTest.close();
    return server && httpServer.close();
  })

  test('testing', async () => {
    const { body } = await request(httpServer)
      .post('/user/login')
      .send({
        "email": "jafet@jafet.com.br",
        "password": "a1234567"
      })

    console.log(body.token)
  })
})
