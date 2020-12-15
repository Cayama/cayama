// =================================== USER DOCUMENTATION ==========================================

const postRegisterUser = {
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
  },
};

const postLogin = {
  email: "jafet@jafet.com.br",
  password: "a1234567",
};

const putAddresses = {
  addresses: [
    {
      name: "Jafet Henrique Guerra Fagundes",
      cep: "30350660",
      state: "Minas Gerais",
      city: "Belo Horizonte",
      neighborhood: "São Bento",
      street: "Rua Doutor Mario Pires",
      number: "91",
      complement: "Casa",
      phone: "31996471888",
    },
  ],
};

const putCreateLink = {
  influencerLink: 'canal-you-technology',
};

const putUpdateIoInfluencer = {
  socialMedia: "YouTube",
  socialMediaName: "Canal You Technology",
  contentType: "Tecnologia",
},

// =================================== STORE DOCUMENTATION =========================================

const postRegisterStore = {
  storeName: "Cayama",
  email: "cayama@cayama.com",
  password: "cayama123",
  confirmPassword: "cayama123",
  cnpj: "01478899000138",
};

// =================================== SELL DOCUMENTATION =========================================

const PostPurchase = {
  sellerId: "5fa09e7a6265167b9d1b3324",
  influencerId: "5fa09e7a6265167b9d1b3324", // não é obrigatorio
  totalPrice: "300",
  deliveryService: "correios sedex",
  paymentMethod: "credit card",
  installment: 12,
  purchases: [
    {
      name: "Teclado Keychron",
      productId: "5fa09e7a6265167b9d1b3324",
      quantity: "100",
      price: "3",
    },
  ]
}

const getProductByField = {
  fieldToSearch: "buyerId",
}

const postCreateBankAccount = {
  bank: "Inter",
  bankDigit: 077,
  accountNumberWithDigit: "451556346347",
  agency: "0001",
}

const putUpdateBasicInfo = {
  fieldToUpdate: 'cpf',
  newValue: '123.111.333-01'
}

const putUpdateArraysInfo = {
  fieldToUpdate: 'addresses',
  newValue: [ // ou recebe products ou qualquer outro array
    {
      name: "Jafet Henrique Guerra Fagundes",
      cep: "30350660",
      state: "Minas Gerais",
      city: "Belo Horizonte",
      neighborhood: "São Bento",
      street: "Rua Doutor Mario Pires",
      number: "91",
      complement: "Casa",
      phone: "31996471888",
    },
  ],
}
