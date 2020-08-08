import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
 
function ProductCardContainer() {
  const products = useSelector(state => state.homePageReducer.products)
  return (
    <div>
      {products.map(({ product: { id, name, photo, price, freeShipping }}) => (
        <ProductCard key={id} name={name} photo={photo} price={price} freeShipping={freeShipping} />
      ))}
    </div>
  )
}

export default ProductCardContainer;
