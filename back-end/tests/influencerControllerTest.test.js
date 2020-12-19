const request = require('supertest');
const faker = require('faker/locale/pt_BR');
const connection = require('../models/connection');
const {
  resetTestingMongoDb,
  connectionTest,
  userTest1,
  userTest2,
} = require('./testsUtils/dbTestConnection');
const {
  generateFakeCpf,
  registerObj,
  loginObj,
  firstName,
  lastName,
  password,
  confirmPassword,
  birthDate,
} = require('./testsUtils/utils');
const httpServer = require('./testsUtils/serverTest');

const deleteAllData = ['products', 'purchases', 'users'];

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

describe('InfluencerController Test', () => {
  let databaseTest;
  let server;
  let token;

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
      const influencerRestored = {
        socialMedia: 'YouTube',
        contentType: 'Tecnologia',
        socialMediaName: 'Canal You Technology',
        influencerLink: 'tech-tech',
      };
      const string11Elem = generateFakeCpf();
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

    test('Error: invalid Social Media', async () => {
      registerObj.influencer.socialMedia = 'Youtube';
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);

      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Mídia Social inserida não esta entre as opções');
    });

    test('Error: influencerLink alredy exists', async () => {
      registerObj.influencer.influencerLink = userTest1.influencer.influencerLink;
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);

      expect(body.err.error).toBe('Conflict');
      expect(body.err.message).toBe('Link já existente');
    });

    test('Error: invalid Content Type', async () => {
      registerObj.influencer.contentType = 'Modaaa';
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Tipo de Conteúdo inserido não esta entre as opções');
    });

    test('Successfull: influencer register', async () => {
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);
      expect(body.token).toMatch(/[A-z-=0-9.]*/);
    });
  });

  describe('testing createInfluencerLink', () => {
    test('Successfull: userLogin', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Error: invalid influencerLink', async () => {
      const influencerLinkObj = { influencerLink: 'Js' };
      const { body } = await request(httpServer)
        .put('/user/create-link')
        .set('Authorization', token)
        .send(influencerLinkObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('\"influencerLink\" length must be at least 3 characters long');
    });

    test('Error: alredy exists influencerLink', async () => {
      const influencerLinkObj = { influencerLink: userTest1.influencer.influencerLink };
      const { body } = await request(httpServer)
        .put('/user/create-link')
        .set('Authorization', token)
        .send(influencerLinkObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Conflict');
      expect(body.err.message).toContain('Este link já esta sendo utilizado');
    });

    test('Successfull: createInfluencerLink', async () => {
      const influencerLinkObj = { influencerLink: 'techNews' };
      const { body } = await request(httpServer)
        .put('/user/create-link')
        .set('Authorization', token)
        .send(influencerLinkObj);
      expect(body.influencer).toHaveProperty('influencerLink');
      expect(body.influencer.influencerLink).toBe(influencerLinkObj.influencerLink);
    });

    test('Error: user is not an influencer yet', async () => {
      const { body: newLoginBody } = await request(httpServer)
        .post('/user/login')
        .send({
          email: userTest2.email,
          password: userTest2.password,
        });

      token = newLoginBody.token;

      const influencerLinkObj = { influencerLink: 'LuisTech' };
      const { body } = await request(httpServer)
        .put('/user/create-link')
        .set('Authorization', token)
        .send(influencerLinkObj);

      expect(body).toHaveProperty('err');
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Não é um influencer ainda');
    });
  });
});
