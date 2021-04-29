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
import { CustomItensWithDeleteIcon } from '../../customPropertyAdd';

function FilterWeb({ search, filtersArray, setFiltersArray }) {
  const filtersArrayOfStringDescriptions = filtersArray.map((element) => element.description);
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const removeFilter = (filterDescription) => {
    const newFiltersArray = filtersArray.filter((element) => element.description !== filterDescription);
    return setFiltersArray(newFiltersArray);
  }

  const handleFilter = (objectToAdd) => {
    const newFiltersArray = filtersArray.filter((element) => element.filter !== objectToAdd.filter) || [];
    newFiltersArray.push(objectToAdd)
    return setFiltersArray(newFiltersArray);
  }

  const handlePriceRangeChange = () => {
    return handleFilter({
      filter: 'priceRange',
      value: {
        first: parseFloat(value[0]),
        second: parseFloat(value[1]),
      },
      description: `De R$${value[0]} a R$${value[1]}`,
    })
  }

  return (
    <FilterWebSection>
      <SearchTitleWebContainer>
        <H1FirstLetterUppercase>{search}</H1FirstLetterUppercase>
      </SearchTitleWebContainer>
      <CustomItensWithDeleteIcon
        arrayOfStrings={filtersArrayOfStringDescriptions}
        setRemoveItem={removeFilter}
      />
      <FilterWebContainer>

        <SingleFilterContainer>
          <H3SingleFilter>Frete</H3SingleFilter>
          <FilterClickAction onClick={() => handleFilter({ filter: 'shipping', value: true, description: 'Frete grátis' })}>
            Grátis
          </FilterClickAction>
        </SingleFilterContainer>

        <SingleFilterContainer>
          <H3SingleFilter>Pagamento</H3SingleFilter>
          <FilterClickAction onClick={() => handleFilter({ filter: 'payment', value: false, description: 'Sem juros' })}>
            Sem Juros
          </FilterClickAction>
        </SingleFilterContainer>

        <SingleFilterContainer>
          <H3SingleFilter>Condição</H3SingleFilter>
          <FilterClickAction onClick={() => handleFilter({ filter: 'condition', value: true, description: 'Novo' })}>
            Novo
          </FilterClickAction>
          <FilterClickAction onClick={() => handleFilter({ filter: 'condition', value: false, description: 'Usado' })}>
            Usado
          </FilterClickAction>
        </SingleFilterContainer>

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
            <PriceFilterButton onClick={handlePriceRangeChange} />
          </PriceFilterContainer>
        </SingleFilterContainer>
      </FilterWebContainer>
    </FilterWebSection>
  );
}

export default FilterWeb;
