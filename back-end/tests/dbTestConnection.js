const mongoClient = require('mongodb').MongoClient;

const usersTest = [
  {
    firstName: "Jafet Henrique",
    lastName: "Guerra Fagundes",
    email: "jafet@jafet.com.br",
    password: "a1234567",
    confirmPassword: "a1234567",
    cpf: "12345678901",
    birthDate: "02/07/1994",
    influencer: {
      socialMedia: "YouTube",
      socialMediaName: "Canal You Technology",
      contentType: "Tecnologia",
      influencerLink: 'jatech'
    }
  },
  {
    firstName: "Luis Eduardo",
    lastName: "Guerra Fagundes",
    email: "luis@luis.com.br",
    password: "a1234567",
    confirmPassword: "a1234567",
    cpf: "12345678902",
    birthDate: "10/11/1995",
    influencer: {
      socialMedia: "Instagram",
      socialMediaName: "EuSouLuis",
      contentType: "Life Style",
      influencerLink: 'luistyle'
    }
  },
  {
    storeName: "Cayama",
    email: "cayama@cayama.com",
    password: "cayama123",
    confirmPassword: "cayama123",
    cnpj: "01478899000138",
  }
];

const purchasesTest = [
  {
    sellerId: "5fa09e7a6265167b9d1b3324",
    buyerId: "6za01e7a6222567a9d1b3794",
    influencerId: "8ka23a7a6288667b9d1a1032",
    totalPrice: "300",
    deliveryService: "correios sedex",
    paymentMethod: "credit card",
    installment: 12,
    purchases: [
      {
        name: "Mouse Keychron",
        productId: "4fb09e7a6231163f4d1b9908",
        quantity: "100",
        price: "3",
      },
    ]
  },
  {
    sellerId: "5fa09e7a6265167b9d1b3324",
    buyerId: "6za01e7a6222567a9d1b3794",
    influencerId: "8ka23a7a6288667b9d1a1032",
    totalPrice: "3000",
    deliveryService: "correios sedex",
    paymentMethod: "credit card",
    installment: 3,
    purchases: [
      {
        name: "Teclado Keychron",
        productId: "8kj07u9a6162967b6c1b2254",
        quantity: "3",
        price: "1000",
      },
    ]
  }
];

const productsTest = [
  {
    userId: '5fa09e7a6265167b9d1b3324',
    productName: 'Teclado Keychron',
    price: '1000,00',
    category: 'Eletronicos',
    stockQuantity: 5,
    description: 'Teclado mecanico muito bom, confiavel.',
    urls: ['https://cayama-upload.s3.amazonaws.com/d4d2cc50c72532aab0d45edd7f787ca', 'https://cayama-upload.s3.amazonaws.com/f32fc2c4e2066e03d3d7ee0e680a6f'],
    videosPath: ['www.youtube.com.br/keychron-k2'],
    keys: ['31530333c183f1bb78f6e9e6be7bd504-Keychron-k2.jpg', 'f0e53de034270dcbee0add49d22dbbe7-Keychron-k2.jpg'],
  },
  {
    userId: '5fa09e7a6265167b9d1b3324',
    productName: 'Mouse Keychron',
    price: '100,00',
    category: 'Eletronicos',
    stockQuantity: 7,
    description: 'Mouse muito bom, confiavel.',
    urls: ['https://cayama-upload.s3.amazonaws.com/d4d2cc50v72532aab0d45edd7f787ca', 'https://cayama-upload.s3.amazonaws.com/f32fs2c4e2066e03d3d7ee0e680a6f'],
    videosPath: ['www.youtube.com.br/keychron-mouse'],
    keys: ['31530333c183f1bb78f6e9e6be7bd504-Keychron-mouse.jpg', 'f0e53de034270dcbee0add49d22dbbe7-Keychron-mouse.jpg'],
  }
];

const connectionTest = () =>
  mongoClient
    .connect('mongodb://localhost:27017/CayamaTest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('CayamaTest'))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });

const resetTestingMongoDb = async (collectionsToReset) => {
  const db = await connectionTest();

  await Promise.all([collectionsToReset.forEach((collection) => {
    return db.collection(collection).deleteMany()
  })]);

  await db.collection('users').insertMany(usersTest);

  await db.collection('purchases').insertMany(purchasesTest);

  await db.collection('products').insertMany(productsTest);

  return { db }
}

module.exports = {
  resetTestingMongoDb,
}
