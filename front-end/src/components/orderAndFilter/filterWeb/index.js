import React from 'react';
import { H1FirstLetterUppercase } from '../../layout/h1Group';
import {
  FilterWebSection,
  SearchTitleWebContainer,
  FilterWebContainer,
  SingleFilterContainer,
  H3SingleFilter,
  FilterAction,
} from './styles';

import { searchProductListPageFilterStructure } from '../structure';

function FilterWeb({ search }) {
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
              {subStructure.map(({ name }) => (<FilterAction>{name}</FilterAction>))}
            </SingleFilterContainer>
          )
        })}
      </FilterWebContainer>
    </FilterWebSection>
  );
}

export default FilterWeb;
