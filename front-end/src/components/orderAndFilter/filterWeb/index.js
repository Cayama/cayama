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

function FilterWeb({ search, filtersAndOrderArray, setFiltersAndOrderArray }) {
  const filtersAndOrderArrayOfStringDescriptions = filtersAndOrderArray.map((element) => element.description);
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const removeFilter = (filterDescription) => {
    const newFiltersAndOrderArray = filtersAndOrderArray.filter((element) => element.description !== filterDescription);
    return setFiltersAndOrderArray(newFiltersAndOrderArray);
  }

  const handleFilterAndOrder = (objectToAdd) => {
    const newFiltersAndOrderArray = filtersAndOrderArray.filter((element) => element.filter !== objectToAdd.filter) || [];
    newFiltersAndOrderArray.push(objectToAdd)
    return setFiltersAndOrderArray(newFiltersAndOrderArray);
  }

  const handlePriceRangeChange = () => {
    return handleFilterAndOrder({
      filter: 'priceRange',
      value: {
        first: parseFloat(value[0]),
        second: parseFloat(value[1]),
      },
      description: `Preço entre R$${value[0]} e R$${value[1]}`
    })
  }

  return (
    <FilterWebSection>
      <SearchTitleWebContainer>
        <H1FirstLetterUppercase>{search}</H1FirstLetterUppercase>
      </SearchTitleWebContainer>
      <CustomItensWithDeleteIcon
        arrayOfStrings={filtersAndOrderArrayOfStringDescriptions}
        setRemoveItem={removeFilter}
      />
      <FilterWebContainer>

        <SingleFilterContainer>
          <H3SingleFilter>Frete</H3SingleFilter>
          <FilterClickAction onClick={() => handleFilterAndOrder({ filter: 'shipping', value: true, description: 'Frete grátis' })}>
            Grátis
          </FilterClickAction>
        </SingleFilterContainer>

        <SingleFilterContainer>
          <H3SingleFilter>Pagamento</H3SingleFilter>
          <FilterClickAction onClick={() => handleFilterAndOrder({ filter: 'payment', value: false, description: 'Sem juros' })}>
            Sem Juros
          </FilterClickAction>
        </SingleFilterContainer>

        <SingleFilterContainer>
          <H3SingleFilter>Condição</H3SingleFilter>
          <FilterClickAction onClick={() => handleFilterAndOrder({ filter: 'condition', value: true, description: 'Novo' })}>
            Novo
          </FilterClickAction>
          <FilterClickAction onClick={() => handleFilterAndOrder({ filter: 'condition', value: false, description: 'Usado' })}>
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
