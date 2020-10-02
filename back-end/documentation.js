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
    contentType: "Technology",
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

// =================================== STORE DOCUMENTATION =========================================

const postRegisterStore = {
  storeName: "Cayama",
  email: "cayama@cayama.com",
  password: "cayama123",
  confirmPassword: "cayama123",
  cnpj: "01478899000138",
};
