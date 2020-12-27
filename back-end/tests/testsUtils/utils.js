const faker = require('faker/locale/pt_BR');
const { ObjectId } = require('mongodb');
const { userTest1, userTest2 } = require('./dbTestConnection');

const generateFakeCpf = () => {
  const cpfArr = [];
  for (let i = 0; i < 11; i += 1) {
    cpfArr.push(Math.floor(Math.random() * 9).toString());
  }
  return cpfArr.join('');
};

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

const loginObj = {
  email: userTest1.email,
  password: userTest1.password,
};

const loginObj2 = {
  email: userTest2.email,
  password: userTest2.password,
};

const addresses = [
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

const bankInfo = {
  bank: 'Inter',
  bankDigit: 77,
  accountNumberWithDigit: '451556346347',
  agency: '0001',
};

const purchaseObj = {
  totalPrice: '3000',
  deliveryService: 'correios sedex',
  paymentMethod: 'credit card',
  installment: 12,
  purchases: [
    {
      name: 'Teclado Keychron',
      sellerId: new ObjectId('5fa09e7a6265167b9d1b3324'),
      productId: '5fa09e7a6265167b9d1b3324',
      quantity: '3',
      price: '1000',
    },
  ],
};

const incorrectValidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0TmFtZSI6IkphZmV0IEhlbnJpcXVlIiwibGFzdE5hbWUiOiJHdWVycmEgRmFndW5kZXMiLCJlbWFpbCI6ImphZmV0c3NAamFmZXRzcy5jb20uYnIiLCJiaXJ0aERhdGUiOiIwMi8wNy8xOTk0IiwiYWRkcmVzc2VzIjpbXSwiaW5mbHVlbmNlciI6eyJzb2NpYWxNZWRpYSI6IllvdVR1YmUiLCJzb2NpYWxNZWRpYU5hbWUiOiJDYW5hbCBZb3UgVGVjaG5vbG9neSIsImNvbnRlbnRUeXBlIjoiVGVjbm9sb2dpYSIsImluZmx1ZW5jZXJMaW5rIjoiSmF0ZWNoIn0sIl9pZCI6IjVmZGU0ODc4M2VhY2FiNTgwMjYzOWY4ZCJ9LCJpYXQiOjE2MDg0MDMwNjQsImV4cCI6MTYwODQwNjY2NH0.w1saswi1QzfELuj-Su2hvgwbV9-FkYQ46C2r29dbTrc';

module.exports = {
  generateFakeCpf,
  registerObj,
  loginObj,
  loginObj2,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  birthDate,
  cpf,
  influencer,
  addresses,
  incorrectValidToken,
  bankInfo,
  purchaseObj,
};
