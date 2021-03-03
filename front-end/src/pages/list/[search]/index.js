import React from 'react';
import { useRouter } from 'next/router';
import Hidden from '@material-ui/core/Hidden';
import Head from '../../../infra/components/head';
import Header from '../../../patterns/header';
import Footer from '../../../patterns/footer';
import { ProductsSectionDisplay } from '../../../components/productsSectionDisplay';
import { SearchProductListPageContainer } from './styles';
import firstLetterUpercase from '../../../utils/firstLetterUpercase';
import OrderAndFilterMobile from '../../../components/orderAndFilter/orderAndFilterMobile';
import FilterWeb from '../../../components/orderAndFilter/filterWeb';

import productsMock from '../../../../dataMock/productsMock';

function SearchProductListPage() {
  const { query: { search } } = useRouter();

  if (!search) return <div>Loading...</div>

  return (
    <div>
      <Head title={`${firstLetterUpercase(search)}- Cayama`} />
      <Header />
      <main>
        <SearchProductListPageContainer>
          <Hidden mdUp>
            <OrderAndFilterMobile search={search} />
          </Hidden>
          <Hidden mdDown>
            <FilterWeb search={search} />
          </Hidden>
          <ProductsSectionDisplay productsArray={productsMock} />
        </SearchProductListPageContainer>
      </main>
      <Footer />
    </div>
  );
}

export default SearchProductListPage;
