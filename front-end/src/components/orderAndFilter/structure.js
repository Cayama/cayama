const kkk = () => console.log('lol');

const searchProductListPageOrderStructure = [
  {
    name: 'Mais relevantes',
    onClick: kkk,
  },
  {
    name: 'Menor preço',
    onClick: kkk,
  },
  {
    name: 'Maior preço',
    onClick: kkk,
  }
];

const searchProductListPageFilterStructure = [
  {
    name: 'Frete',
    subStructure: [
      {
        name: 'Grátis',
        onClick: kkk,
      },
    ],
  },
  {
    name: 'Pagamento',
    subStructure: [
      {
        name: 'Sem juros',
        onClick: kkk,
      },
    ],
  },
  {
    name: 'Condição',
    subStructure: [
      {
        name: 'Novo',
        onClick: kkk,
      },
      {
        name: 'Usado',
        onClick: kkk,
      },
    ],
  },
  {
    name: 'Preço',
    subStructure: [
      {
        name: 'Até ...',
        onClick: kkk,
      },
    ],
  },
];

export { searchProductListPageOrderStructure, searchProductListPageFilterStructure };
