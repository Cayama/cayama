import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
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
import OrderWeb from '../../../components/orderAndFilter/orderWeb';

import productsMock from '../../../../dataMock/productsMock';

function SearchProductListPage() {
  const { query: { search } } = useRouter();
  const [productsArray, setProductsArray] = useState([]);
  const [searchError, setSearchError] = useState(null);
  // const { productsArray } = useSelector((state) => state.productsDataReducer.userData);

  useEffect(() => {
    return axios.post(`${process.env.NEXT_PUBLIC_API_URL_SEARCH_PRODUCT_BY_TEXT}?searchText=${search}`)
    .then((res) => {
      if (!res) return setSearchError('Sem conexação')
      console.log(res)
      // dispatch(userDataAction(res.data.userData))
      return history.push('/');
    })
    .catch(({ response }) => {
      console.log(response)
      if (!response) return setSearchError('Sem conexação');
      setSearchError("Nenhum produto encontrado"); // Não quero que o cliente veja erro do site
    })
  }, [])

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
          <div>
            <Hidden mdDown>
              <OrderWeb />
            </Hidden>
            <ProductsSectionDisplay productsArray={productsMock} />
          </div>
        </SearchProductListPageContainer>
      </main>
      <Footer />
    </div>
  );
}

export default SearchProductListPage;
