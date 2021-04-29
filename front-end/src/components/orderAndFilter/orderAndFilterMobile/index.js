import React from 'react';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import { VerticalDivider } from '../../divider';
import OrderAndFilter from './innerComponents';
import { OrderAndFilterMobileSection, SearchTitleContainer } from './styles';
import { H1FirstLetterUppercase } from '../../layout/h1Group';
import { CustomItensWithDeleteIcon } from '../../customPropertyAdd';
import { searchProductListPageOrderStructure, searchProductListPageFilterStructure } from '../structure';
import { NestedOrderList, NestedFilterList } from '../../lists';

function OrderAndFilterMobile({ search, setFiltersAndOrderArray, filtersAndOrderArray }) {
  const filtersAndOrderArrayOfStringDescriptions = filtersAndOrderArray.map((element) => element.description);

  const removeFilter = (filterDescription) => {
    const newFiltersAndOrderArray = filtersAndOrderArray.filter((element) => element.description !== filterDescription);
    return setFiltersAndOrderArray(newFiltersAndOrderArray);
  }

  return (
    <div>
      <OrderAndFilterMobileSection>
        <OrderAndFilter
          title='Ordenar'
          icon={<ImportExportOutlinedIcon />}
          structure={
            <NestedOrderList
              setFiltersAndOrderArray={setFiltersAndOrderArray}
              filtersAndOrderArray={filtersAndOrderArray}
            />
          }
        />

        <VerticalDivider />

        <OrderAndFilter
          title='Filtrar'
          icon={<FilterListOutlinedIcon />}
          structure={
            <NestedFilterList
              setFiltersAndOrderArray={setFiltersAndOrderArray}
              filtersAndOrderArray={filtersAndOrderArray}
            />
          }
        />
      </OrderAndFilterMobileSection>
      <SearchTitleContainer>
        <H1FirstLetterUppercase>{search}</H1FirstLetterUppercase>
      </SearchTitleContainer>
      <CustomItensWithDeleteIcon
        arrayOfStrings={filtersAndOrderArrayOfStringDescriptions}
        setRemoveItem={removeFilter}
      />
    </div>
  );
}

export default OrderAndFilterMobile;
