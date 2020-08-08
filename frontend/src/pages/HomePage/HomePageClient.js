import React from 'react';
import Carousel from './Carousel';
import Advantages from './Advantages';
import ProductCardContainer from '../../components/ProductCardContainer';

const HomePageClient = () => {
  return (
    <div>
      <Carousel />
      <Advantages />
      <ProductCardContainer />
    </div>
  )
}

export default HomePageClient;
