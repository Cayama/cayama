
const { resetTestingMongoDb, databaseConnection, httpServer } = require('./dbTestConnection');

const deleteAllData = ['products', 'purchases', 'users'];

describe('UserController Test', () => {
  beforeAll(async () => {
    resetTestingMongoDb(deleteAllData);
    httpServer.listen(8085);
  })

  afterAll(async () => {
    databaseConnection.close();
    return httpServer.close();
  })

  test('testing', async () => {
    expect(1).not.toBe(2)
  })
})
