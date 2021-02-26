import React from 'react';
import Head from '../../../infra/components/head';
import Header from '../../../patterns/header';
import Footer from '../../../patterns/footer';
import { ProductsSectionDisplay } from '../../../components/productsSectionDisplay';
import StoreNav from '../../../components/storeNav';
import Grid from '@material-ui/core/Grid';
import Link from '../../../infra/components/link';
import { CarouselComponent } from '../../../components/carrossel';
import { SearchBarStore } from './styles';
import SearchBar from '../../../components/searchBar';

import productsMock from '../../../../dataMock/productsMock';
import mockStoreLink from '../../../../dataMock/storeLinkMock';
import carroselDataMock from '../../../../dataMock/carroselMock';

function CustomStore() {
  const storeName = 'Cayama'
  return (
    <div>
      <Head title='Cadastre seu produto' />
      <Header />
      <main>
        <StoreNav storeLinksArray={mockStoreLink} />
        <CarouselComponent carouselImageArray={carroselDataMock} />
        <SearchBarStore>
          <SearchBar placeholderText={`Buscar produtos na ${storeName}`} />
        </SearchBarStore>
        <ProductsSectionDisplay productsArray={productsMock} />
      </main>
      <Footer />
    </div>
  );
}

export default CustomStore;
