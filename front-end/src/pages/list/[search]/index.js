import React from 'react';
import { useRouter } from 'next/router';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import Head from '../../../infra/components/head';
import Header from '../../../patterns/header';
import Footer from '../../../patterns/footer';
import { ProductsSectionDisplay } from '../../../components/productsSectionDisplay';
import {
  SearchProductListPageContainer,
  SearchProductListPageFilterSection,
  SearchTitleContainer,
} from './styles';
import { VerticalDivider } from '../../../components/divider';
import { H1FirstLetterUppercase } from '../../../components/layout/h1Group';
import firstLetterUpercase from '../../../utils/firstLetterUpercase';
import OrderAndFilter from '../../../components/orderAndFilter';
import { searchProductListPageOrderStructure, searchProductListPageFilterStructure } from './structure';
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
          <SearchProductListPageFilterSection>
            <OrderAndFilter
              title='Ordenar'
              icon={<ImportExportOutlinedIcon />}
              structure={searchProductListPageOrderStructure}
            />

            <VerticalDivider />

            <OrderAndFilter
              title='Filtrar'
              icon={<FilterListOutlinedIcon />}
              structure={searchProductListPageFilterStructure}
            />
          </SearchProductListPageFilterSection>
          <SearchTitleContainer>
            <H1FirstLetterUppercase>{search}</H1FirstLetterUppercase>
          </SearchTitleContainer>
          <ProductsSectionDisplay productsArray={productsMock} />
        </SearchProductListPageContainer>
      </main>
      <Footer />
    </div>
  );
}

export default SearchProductListPage;
