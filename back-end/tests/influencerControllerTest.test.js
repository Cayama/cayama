const request = require('supertest');
const faker = require('faker/locale/pt_BR');
const connection = require('../models/connection');
const { resetTestingMongoDb, connectionTest } = require('./dbTestConnection');
const { generateFakeCpf } = require('./utils');
const httpServer = require('./serverTest');

const deleteAllData = ['products', 'purchases', 'users'];

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const password = '123a123b123c';
const confirmPassword = password;
const birthDate = '01/05/1990';
const cpf = '11122233344';
const influencer = {
  socialMedia: 'YouTube',
  contentType: 'Tecnologia',
  socialMediaName: 'Canal You Technology',
  influencerLink: 'tech-tech',
};

const registerObj = {
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  cpf,
  birthDate,
  influencer,
};

describe('InfluencerController Test', () => {
  let databaseTest;
  let server;
  beforeAll(async (done) => {
    const { db } = await resetTestingMongoDb(deleteAllData);
    databaseTest = db;
    server = httpServer.listen(8086, () => done());
  });

  afterAll(async () => {
    databaseTest.close();
    return server && httpServer.close();
  });

  describe('testing registerUser - influencer user', () => {
    afterEach(() => {
      const string11Elem = generateFakeCpf();
      const influencerRestored = {
        socialMedia: 'YouTube',
        contentType: 'Tecnologia',
        socialMediaName: 'Canal You Technology',
        influencerLink: 'tech-tech',
      };
      registerObj.firstName = firstName;
      registerObj.lastName = lastName;
      registerObj.email = faker.internet.email();
      registerObj.password = password;
      registerObj.confirmPassword = confirmPassword;
      registerObj.cpf = string11Elem;
      registerObj.birthDate = birthDate;
      registerObj.influencer = influencerRestored;
      registerObj.influencer.influencerLink = string11Elem;
    });

    test('Successfull: influencer register', async () => {
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);
      expect(body.token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Error: incorrect Social Media', async () => {
      registerObj.influencer.socialMedia = 'Youtube';
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);

      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Mídia Social inserida não esta entre as opções');
    });

    test('Error: influencerLink alredy exists', async () => {
      registerObj.influencer.influencerLink = 'tech-tech';
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);

      expect(body.err.error).toBe('Conflict');
      expect(body.err.message).toBe('Link já existente');
    });

    test('Error: incorrect Content Type', async () => {
      registerObj.influencer.contentType = 'Modaaa';
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Tipo de Conteúdo inserido não esta entre as opções');
    });
  });
});
