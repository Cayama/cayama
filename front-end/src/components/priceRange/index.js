import React from 'react';
import { FilterPriceRangeContainer, FilterPriceContent } from './styles';


function PriceRange({ rangeOne, rangeTwo }) {
  return (
    <FilterPriceRangeContainer>
      <FilterPriceContent>{rangeOne}</FilterPriceContent>
      <FilterPriceContent>{rangeTwo}</FilterPriceContent>
    </FilterPriceRangeContainer>
  );
}

export { PriceRange };
