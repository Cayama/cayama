import React from 'react';
import Carousel from './Carousel';
import Advantages from './Advantages';
import ProductCardContainer from '../../components/ProductCardContainer';
import HomePageClientCss from './HomePageClient.module.css';

const HomePageClient = () => {
  return (
    <div>
      <Carousel />
      <div className={HomePageClientCss.contentContainer}>
        <Advantages />
        <ProductCardContainer />
      </div>
    </div>
  )
}

export default HomePageClient;
