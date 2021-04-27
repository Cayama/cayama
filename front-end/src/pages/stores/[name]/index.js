import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Head from '../../../infra/components/head';
import Header from '../../../patterns/header';
import Footer from '../../../patterns/footer';
import { ProductsSectionDisplay } from '../../../components/productsSectionDisplay';
import StoreNav from '../../../components/storeNav';
import { handleUseRef } from '../../../utils/index';
import { CarrosselComponent } from '../../../components/carrossel';
import { SearchBarStore } from './styles';
import SearchBar from '../../../components/searchBar';

function CustomStore({ storeId = '608451cdf55b7554d48870a5' }) {
  const [loading, setLoading] = useState(true);
  const storeData = useRef({});
  const storeProducts = useRef([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL_STORE_PAGE_DATA}?storeId=${storeId}&page=1`)
    .then((res) => {
      console.log(res);
      handleUseRef(storeData, res.data.storeData);
      handleUseRef(storeProducts, res.data.storeProducts);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })

  }, []);

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <Head title='Cadastre seu produto' />
      <Header />
      <main>
        <StoreNav
          logoImageLink={storeData.current.logoImage.logoImgUrls[0]}
          storeLinksArray={storeData.current.storeCategoriesData}
          storeColors={storeData.current.storeColorsData}
        />
        <CarrosselComponent carrosselImageArray={storeData.current.carrosselImages.carrosselImgUrls} />
        <SearchBarStore>
          <SearchBar
            searchBarButtonColor={storeData.current.storeColorsData.secondaryColor}
            placeholderText={`Buscar produtos na ${storeData.current.storePersonalData.storeName}`}
            storeId={storeId}
          />
        </SearchBarStore>
        <ProductsSectionDisplay productsArray={storeProducts.current} storeName={storeData.current.storePersonalData.storeName} />
      </main>
      <Footer />
    </div>
  );
}

export default CustomStore;
