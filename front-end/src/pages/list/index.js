import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useRouter } from 'next/router';
import Hidden from '@material-ui/core/Hidden';
import Head from '../../infra/components/head';
import Header from '../../patterns/header';
import Footer from '../../patterns/footer';
import { ProductsSectionDisplay } from '../../components/productsSectionDisplay';
import { SearchProductListPageContainer } from './styles';
import firstLetterUpercase from '../../utils/firstLetterUpercase';
import OrderAndFilterMobile from '../../components/orderAndFilter/orderAndFilterMobile';
import FilterWeb from '../../components/orderAndFilter/filterWeb';
import OrderWeb from '../../components/orderAndFilter/orderWeb';

function SearchProductListPage() {
  const { query: { search = 'Busque um Produto', page } } = useRouter();
  const [loading, setLoading] = useState(true);
  const [pageToSearch, setPageToSearch] = useState(page || 1);
  const [productsArray, setProductsArray] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [filtersArray, setFiltersArray] = useState([]);
  const [orderObject, setOrderObject] = useState({});

  const getProducts = () => {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL_SEARCH_PRODUCT_IN_MARKETPLACE}?searchText=${search}&page=${pageToSearch}&filtersArray=${JSON.stringify(filtersArray)}&orderObject=${JSON.stringify(orderObject)}`)
      .then((res) => {
        if (!res) return setSearchError('Sem conexação')
        console.log(res);
        setProductsArray(res.data.products)
        setLoading(false);
      })
      .catch(({ response }) => {
        console.log(response)
        if (!response) return setSearchError('Sem conexação');
        setSearchError("Nenhum produto encontrado"); // Não quero que o cliente veja erro do site
      })
  }


  useEffect(() => {
    if (search !== 'Busque um Produto') {
      setLoading(true);
      getProducts()
    }
  }, [search, filtersArray, orderObject])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <Head title={`${firstLetterUpercase(search)}- Cayama`} />
      <Header page={page} />
      <main>
        <SearchProductListPageContainer>
          <Hidden mdUp>
          <OrderAndFilterMobile
            filtersArray={filtersArray}
            setFiltersArray={setFiltersArray}
            setOrderObject={setOrderObject}
            search={search}
          />
          </Hidden>
          <Hidden mdDown>
            <FilterWeb
              filtersArray={filtersArray}
              setFiltersArray={setFiltersArray}
              search={search}
            />
          </Hidden>
          <div>
            <Hidden mdDown>
              <OrderWeb
                setOrderObject={setOrderObject}
              />
            </Hidden>
            <ProductsSectionDisplay productsArray={productsArray} />
          </div>
        </SearchProductListPageContainer>
      </main>
      <Footer />
    </div>
  );
}

export default SearchProductListPage;
