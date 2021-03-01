const kkk = () => console.log('lol');

const searchProductListPageOrderStructure = [
  {
    name: 'Mais relevantes',
    action: kkk,
  },
  {
    name: 'Menor preço',
    action: kkk,
  },
  {
    name: 'Maior preço',
    action: kkk,
  }
];

const searchProductListPageFilterStructure = [
  {
    name: 'Frete',
    subStructure: [
      {
        name: 'Grátis',
        action: kkk,
      },
    ],
  },
  {
    name: 'Pagamento',
    subStructure: [
      {
        name: 'Sem juros',
        action: kkk,
      },
    ],
  },
  {
    name: 'Condição',
    subStructure: [
      {
        name: 'Novo',
        action: kkk,
      },
      {
        name: 'Usado',
        action: kkk,
      },
    ],
  },
  {
    name: 'Preço',
    subStructure: [
      {
        name: 'Até ...',
        action: kkk,
      },
    ],
  },
];

export { searchProductListPageOrderStructure, searchProductListPageFilterStructure };
