import React from 'react';
import Head from '../../../infra/components/head';
import Header from '../../../patterns/header';
import Footer from '../../../patterns/footer';
import { ProductsSectionDisplay } from '../../../components/productsSectionDisplay';
import StoreNav from '../../../components/storeNav';
import Grid from '@material-ui/core/Grid';
import Link from '../../../infra/components/link';
// import { Container } from './styles';

import productsMock from '../../../../dataMock/productsMock';
import mockStoreLink from '../../../../dataMock/storeLinkMock';
function CustomStore() {
  return (
    <div>
      <Head title='Cadastre seu produto' />
      <Header />
      <main>
        <StoreNav storeLinksArray={mockStoreLink} />
        <ProductsSectionDisplay productsArray={productsMock} />
      </main>
      <Footer />
    </div>
  );
}

export default CustomStore;
