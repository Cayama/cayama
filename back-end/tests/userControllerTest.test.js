const request = require('supertest');
const faker = require('faker/locale/pt_BR');
const connection = require('../models/connection');
const { resetTestingMongoDb, connectionTest, userTest1 } = require('./testsUtils/dbTestConnection');
const {
  generateFakeCpf,
  registerObj,
  loginObj,
  firstName,
  lastName,
  password,
  confirmPassword,
  birthDate,
  incorrectValidToken,
} = require('./testsUtils/utils');
const httpServer = require('./testsUtils/serverTest');

const deleteAllData = ['products', 'purchases', 'users'];

jest.mock('../models/connection');
connection.mockImplementation(connectionTest);

describe('UserController Test', () => {
  let databaseTest;
  let server;
  let token;

  beforeAll(async (done) => {
    const { db } = await resetTestingMongoDb(deleteAllData);
    databaseTest = db;
    server = httpServer.listen(8085, () => done());
  });

  afterAll(async () => {
    databaseTest.close();
    return server && server.close();
  });

  describe('testing registerUser - normal user', () => {
    afterEach(() => {
      const string11Elem = generateFakeCpf();
      registerObj.firstName = firstName;
      registerObj.lastName = lastName;
      registerObj.email = faker.internet.email();
      registerObj.password = password;
      registerObj.confirmPassword = confirmPassword;
      registerObj.cpf = string11Elem;
      registerObj.birthDate = birthDate;
    });
    test('Successfull: normal register', async () => {
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);

      expect(body.token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Error: email alredy exists', async () => {
      registerObj.email = userTest1.email;
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);
      expect(body.err.error).toBe('Conflict');
      expect(body.err.message).toBe('Email já cadastrado');
    });

    test('Error: confirmPassword diferent than password', async () => {
      registerObj.confirmPassword = '123d123t123r';
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);

      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('confirmPassword');
    });

    test.skip('Error: cpf alredy exists', async () => {
      registerObj.cpf = '11122233344';
      const { body } = await request(httpServer)
        .post('/user/register')
        .send(registerObj);
      expect(body.err.error).toBe('Conflict');
      expect(body.err.message).toBe('Apenas 11 números são permitidos no cpf');
    });
  });

  describe('testing userLogin', () => {
    afterEach(() => {
      loginObj.email = userTest1.email;
      loginObj.password = userTest1.password;
    });

    test('Successfull: user login', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      expect(body.token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Error: email inexistente', async () => {
      loginObj.email = 'jaffet@jaffet.com.br';
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      expect(body.err.error).toBe('Unauthorized');
      expect(body.err.message).toContain('Email ou senha incorretos');
    });

    test('Error: password errado', async () => {
      loginObj.password = '123l123o123u';
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      expect(body.err.error).toBe('Unauthorized');
      expect(body.err.message).toContain('Email ou senha incorretos');
    });
  });

  describe('testing updateUserToInfluencer', () => {
    const userToInfluencerObj = {
      socialMedia: 'YouTube',
      contentType: 'Tecnologia',
      socialMediaName: 'Canal You Technology',
      influencerLink: 'tech-tech',
    };

    afterEach(() => {
      const string11Elem = generateFakeCpf();
      userToInfluencerObj.socialMedia = 'YouTube';
      userToInfluencerObj.contentType = 'Tecnologia';
      userToInfluencerObj.socialMediaName = 'Canal You Technology';
      userToInfluencerObj.influencerLink = string11Elem;
    });

    test('Successfull: user login', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successful: update common user to influencer', async () => {
      const { body } = await request(httpServer)
        .put('/user/update-to-influencer')
        .set('Authorization', token)
        .send(userToInfluencerObj);

      expect(body.influencer.socialMedia).toBe('YouTube');
      expect(body.influencer.contentType).toBe('Tecnologia');
      expect(body.influencer.socialMediaName).toBe('Canal You Technology');
    });

    test('Error: incorrect Social Media', async () => {
      userToInfluencerObj.socialMedia = 'Youtube';
      const { body } = await request(httpServer)
        .put('/user/update-to-influencer')
        .set('Authorization', token)
        .send(userToInfluencerObj);
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Mídia Social inserida não esta entre as opções');
    });

    test.skip('Error: influencerLink alredy exists', async () => {
      userToInfluencerObj.influencerLink = 'tech-tech';
      const { body } = await request(httpServer)
        .put('/user/update-to-influencer')
        .set('Authorization', token)
        .send(userToInfluencerObj);

      expect(body.err.error).toBe('Conflict');
      expect(body.err.message).toBe('Link já existente');
    });

    test('Error: incorrect Content Type', async () => {
      userToInfluencerObj.contentType = 'Modaaa';
      const { body } = await request(httpServer)
        .put('/user/update-to-influencer')
        .set('Authorization', token)
        .send(userToInfluencerObj);
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Tipo de Conteúdo inserido não esta entre as opções');
    });
  });

  describe('testing updateBasicRegistersData', () => {
    const basicData = {
      fieldToUpdate: 'firstName',
      newValue: firstName,
    };

    afterAll(async () => {
      await resetTestingMongoDb(deleteAllData);
    });

    test('Successfull: user login', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successful: Changing firstName', async () => {
      const { body } = await request(httpServer)
        .put('/user/update-info')
        .set('Authorization', token)
        .send(basicData);

      expect(body.updatedUser.firstName).toBe(firstName);
    });

    test('Successful: Changing lastName', async () => {
      basicData.fieldToUpdate = 'lastName';
      basicData.newValue = lastName;
      const { body } = await request(httpServer)
        .put('/user/update-info')
        .set('Authorization', token)
        .send(basicData);

      expect(body.updatedUser.lastName).toBe(lastName);
    });

    test('Successful: Changing cpf', async () => {
      basicData.fieldToUpdate = 'cpf';
      const newCpf = generateFakeCpf();
      basicData.newValue = newCpf;
      const { body } = await request(httpServer)
        .put('/user/update-info')
        .set('Authorization', token)
        .send(basicData);
      expect(body.updatedUser.cpf).toBe(newCpf);
    });

    test('Successful: Changing birthDate', async () => {
      basicData.fieldToUpdate = 'birthDate';
      const newBirthDate = '30/11/1999';
      basicData.newValue = newBirthDate;
      const { body } = await request(httpServer)
        .put('/user/update-info')
        .set('Authorization', token)
        .send(basicData);

      expect(body.updatedUser.birthDate).toBe(newBirthDate);
    });

    test('Error: update option invalid', async () => {
      basicData.fieldToUpdate = 'buyerId';
      basicData.newValue = 'a2h22fgsd45654jh6ytf';
      const { body } = await request(httpServer)
        .put('/user/update-info')
        .set('Authorization', token)
        .send(basicData);
      expect(body.err.error).toBe('Unprocessable Entity');
      expect(body.err.message).toContain('Opção para atualização inválida');
    });
  });

  describe('testing getUserById', () => {
    test('Successfull: user login', async () => {
      const { body } = await request(httpServer)
        .post('/user/login')
        .send(loginObj);

      token = body.token;
      expect(token).toMatch(/[A-z-=0-9.]*/);
    });

    test('Successfull: get correct user searching by id', async () => {
      const { body } = await request(httpServer)
        .get('/user/profile')
        .set('Authorization', token);

      expect(body.user.firstName).toBe(userTest1.firstName);
      expect(body.user.lastName).toBe(userTest1.lastName);
      expect(body.user.email).toBe(userTest1.email);
    });
  });
});
