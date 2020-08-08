
const INITIAL_STATE = {
  carousel: [
    { url: './apiMock/carrossel1.png' },
    { url: './apiMock/carrossel2.png' },
    { url: './apiMock/carrossel3.png' }
  ],
  advantages: [
    { advantage: 'Segurança no pagamento do início ao fim' },
    { advantage: 'Pagamento no crédito ou boleto' },
    { advantage: 'Mais barato que qualquer outro marketplace' },
    { advantage: 'Suporte todos os dias da semana' },
  ],
  stores: [
    { store: {
      name: 'Maquiagem',
      photo: './apiMock/store1.png',
      price: 15
      }
    },
    { store: {
      name: 'Batom',
      photo: './apiMock/store2.png',
      price: 8
      }
    },
    { store: {
      name: 'Relógio de Parede',
      photo: './apiMock/store3.png',
      price: 25
      }
    },
    { store: {
      name: 'Vinho',
      photo: './apiMock/store4.png',
      price: 35
      }
    }
  ],
  products: [
    { product: {
      name: 'Maquiagem',
      photo: './apiMock/product1.png',
      price: 15
      }
    },
    { product: {
      name: 'Batom',
      photo: './apiMock/product2.png',
      price: 8
      }
    },
    { product: {
      name: 'Relógio de Parede',
      photo: './apiMock/product3.png',
      price: 25
      }
    },
    { product: {
      name: 'Vinho',
      photo: './apiMock/product4.png',
      price: 35
      }
    }
  ],
  sellWithUs: {
    title: 'Porque Vender com a agente',
    photo: './apiMock/vendaConosco.png'
  },
  influenceWithUs: {
    title: 'Porque porque ser influencer com a agente',
    photo: './apiMock/influencieConosco.png'
  }
}

const homePageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'cayama':
      return {
        ...state
      };
    default: 
      return state;
  }
};

export default homePageReducer;

