import React from 'react';
import { ProductsCardSection } from '../dataGrid';
import { ProductCard } from '../cards';

function ProductsSectionDisplay({ productsArray  }) {
  return (
    <ProductsCardSection>
      {productsArray.map((productData) => (
        <ProductCard
          key={productData._id}
          productData={productData}
        />
      ))}
    </ProductsCardSection>
  );
}

export { ProductsSectionDisplay };
