const request = require('supertest');
const faker = require('faker/locale/pt_BR');
const connection = require('../models/connection');
const httpServer = require('./testsUtils/serverTest');
const { resetTestingMongoDb, connectionTest, deleteAllData } = require('./testsUtils/dbTestConnection');
const { loginObj, loginObj2, addresses, incorrectValidToken } = require('./testsUtils/utils');

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

const addressesArrayRestored = [
  {
    name: faker.name.findName(),
    cep: '33450779',
    state: faker.address.state(),
    city: faker.address.city(),
    neighborhood: 'Sion',
    street: 'Av. Uruguai',
    number: '456',
    complement: 'apto 401',
    phone: '31999086754',
  },
];

const addAddress = {
  name: faker.name.findName(),
  cep: '33450779',
  state: faker.address.state(),
  city: faker.address.city(),
  neighborhood: 'Sion',
  street: 'Av. Uruguai',
  number: '456',
  complement: 'apto 401',
  phone: '31999086754',
};

describe('Addresses Controller Test', () => {
  let databaseTest;
  let server;
  let token;

  beforeAll(async (done) => {
    const { db } = await resetTestingMongoDb(deleteAllData);
    databaseTest = db;
    server = httpServer.listen(8087, () => done());
  });

  afterAll(async () => {
    databaseTest.close();
    return server && httpServer.close();
  });

  afterEach(() => {
    addresses[0].name = addressesArrayRestored[0].name;
    addresses[0].cep = addressesArrayRestored[0].cep;
    addresses[0].state = addressesArrayRestored[0].state;
    addresses[0].city = addressesArrayRestored[0].city;
    addresses[0].neighborhood = addressesArrayRestored[0].neighborhood;
    addresses[0].street = addressesArrayRestored[0].street;
    addresses[0].number = addressesArrayRestored[0].number;
    addresses[0].complement = addressesArrayRestored[0].complement;
    addresses[0].phone = addressesArrayRestored[0].phone;
  });

  describe('testing updateUsersAddresses', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Error: nothing is passed in addresses', async () => {
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({});

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"value\" is required');
    });

    test('Error: string is passed in addresses', async () => {
      const nothingAddresses = '';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses: nothingAddresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"value\" must be an array');
    });

    test('Error: incorrect name', async () => {
      addresses[0].name = '';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"[0].name\" is not allowed to be empty');
    });

    test('Error: incorrect cep', async () => {
      addresses[0].cep = '333';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Cep deve conter 8 caracteres numéricos');
    });

    test('Error: incorrect state', async () => {
      addresses[0].state = '';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"[0].state\" is not allowed to be empty');
    });

    test('Error: incorrect city', async () => {
      addresses[0].city = '';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"[0].city\" is not allowed to be empty');
    });

    test('Error: incorrect neighborhood', async () => {
      addresses[0].neighborhood = '';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"[0].neighborhood\" is not allowed to be empty');
    });

    test('Error: incorrect street', async () => {
      addresses[0].street = '';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"[0].street\" is not allowed to be empty');
    });

    test('Error: incorrect number', async () => {
      addresses[0].number = '';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"[0].number\" is not allowed to be empty');
    });

    test('Error: incorrect complement', async () => {
      addresses[0].complement = '';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"[0].complement\" is not allowed to be empty');
    });

    test('Error: incorrect phone', async () => {
      addresses[0].phone = '333';
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Apenas números (11) com DDD');
    });

    test('Successfull: updateUserAddresses with one address object', async () => {
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('addresses');
      expect(body.addresses.length).toBe(1);
      expect(body.addresses[0].name).toBe(addresses[0].name);
      expect(body.addresses[0].state).toContain(addresses[0].state);
    });

    test('Successfull: updateUserAddresses with two addresses object', async () => {
      addresses.push(addAddress);
      const { body } = await request(httpServer)
        .put('/user/addresses')
        .set('Authorization', token)
        .send({ addresses });

      expect(body).toHaveProperty('addresses');
      expect(body.addresses.length).toBe(2);
      expect(body.addresses[0].name).toBe(addresses[0].name);
      expect(body.addresses[0].state).toContain(addresses[0].state);
      expect(body.addresses[1].name).toBe(addAddress.name);
      expect(body.addresses[1].state).toContain(addAddress.state);
    });
  });

  describe('testing getAllAddresses', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Error: user does not have any addresses registered', async () => {
      const { body: loginBody } = await request(httpServer)
        .post('/user/login')
        .send(loginObj2);

      const { body } = await request(httpServer)
        .get('/user/addresses')
        .set('Authorization', loginBody.token);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Not Found');
      expect(body.err.message).toBe('Endereços não encontrados');
    });

    test('Successfull: get all addresses successfully', async () => {
      const { body } = await request(httpServer)
        .get('/user/addresses')
        .set('Authorization', token);

      expect(body).toHaveProperty('addresses');
      expect(body.addresses.length).toBe(2);
      expect(body.addresses[0].name).toBe(addresses[0].name);
      expect(body.addresses[0].state).toContain(addresses[0].state);
      expect(body.addresses[1].name).toBe(addAddress.name);
      expect(body.addresses[1].state).toContain(addAddress.state);
    });
  });
});
