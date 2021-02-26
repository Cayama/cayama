import React from 'react';
import { ProductsCardSection } from '../dataGrid';
import { ProductCard } from '../cards';

function ProductsSectionDisplay({ productsArray  }) {
  return (
    <ProductsCardSection>
      {productsArray.map(({ price, productName, shipping, category,storeName }) => (
        <ProductCard
          price={price}
          productName={productName}
          shipping={shipping}
          category={category}
          storeName={storeName}
        />
      ))}
    </ProductsCardSection>
  );
}

export { ProductsSectionDisplay };
