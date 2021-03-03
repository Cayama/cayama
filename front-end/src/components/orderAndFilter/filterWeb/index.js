import React, { useState } from 'react';
import { H1FirstLetterUppercase } from '../../layout/h1Group';
import {
  FilterWebSection,
  SearchTitleWebContainer,
  FilterWebContainer,
  SingleFilterContainer,
  H3SingleFilter,
  FilterClickAction,
  PriceFilterContainer,
} from './styles';
import { PriceRange } from '../../priceRange';
import { PriceFilterButton } from '../../layout/buttonGroup';
import { PriceFilterSlider } from '../../slider';

import { searchProductListPageFilterStructure } from '../structure';

function FilterWeb({ search }) {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <FilterWebSection>
      <SearchTitleWebContainer>
        <H1FirstLetterUppercase>{search}</H1FirstLetterUppercase>
      </SearchTitleWebContainer>
      <FilterWebContainer>
        {searchProductListPageFilterStructure.map(({ name, subStructure }) => {
          return (
            <SingleFilterContainer>
              <H3SingleFilter>{name}</H3SingleFilter>
              {subStructure.map(({ name }) => (<FilterClickAction>{name}</FilterClickAction>))}
            </SingleFilterContainer>
          )
        })}
        <SingleFilterContainer>
          <H3SingleFilter>Preço</H3SingleFilter>
          <PriceRange rangeOne={value[0]} rangeTwo={value[1]} />
          <PriceFilterContainer>
            <PriceFilterSlider
              value={value}
              handleChange={handleChange}
              min={0}
              max={1000}
            />
            <PriceFilterButton />
          </PriceFilterContainer>
        </SingleFilterContainer>
      </FilterWebContainer>
    </FilterWebSection>
  );
}

export default FilterWeb;
