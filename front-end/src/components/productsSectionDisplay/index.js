import React from 'react';
import { ProductsCardSection } from '../dataGrid';
import { ProductCard } from '../cards';

function ProductsSectionDisplay({ productsArray, storeName }) {
  return (
    <ProductsCardSection>
      {productsArray.map((productData) => (
        <ProductCard
          key={productData._id}
          productData={productData}
          storeData={storeName}
        />
      ))}
    </ProductsCardSection>
  );
}

export { ProductsSectionDisplay };
