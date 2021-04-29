import React from 'react';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import { VerticalDivider } from '../../divider';
import OrderAndFilter from './innerComponents';
import { OrderAndFilterMobileSection, SearchTitleContainer } from './styles';
import { H1FirstLetterUppercase } from '../../layout/h1Group';
import { CustomItensWithDeleteIcon } from '../../customPropertyAdd';
import { NestedOrderList, NestedFilterList } from '../../lists';

function OrderAndFilterMobile({ search, setFiltersArray, filtersArray, setOrderObject }) {
  const filtersArrayOfStringDescriptions = filtersArray.map((element) => element.description);

  const removeFilter = (filterDescription) => {
    const newFiltersArray = filtersArray.filter((element) => element.description !== filterDescription);
    return setFiltersArray(newFiltersArray);
  }

  return (
    <div>
      <OrderAndFilterMobileSection>
        <OrderAndFilter
          title='Ordenar'
          icon={<ImportExportOutlinedIcon />}
          structure={
            <NestedOrderList
              setOrderObject={setOrderObject}
            />
          }
        />

        <VerticalDivider />

        <OrderAndFilter
          title='Filtrar'
          icon={<FilterListOutlinedIcon />}
          structure={
            <NestedFilterList
              setFiltersArray={setFiltersArray}
              filtersArray={filtersArray}
            />
          }
        />
      </OrderAndFilterMobileSection>
      <SearchTitleContainer>
        <H1FirstLetterUppercase>{search}</H1FirstLetterUppercase>
      </SearchTitleContainer>
      <CustomItensWithDeleteIcon
        arrayOfStrings={filtersArrayOfStringDescriptions}
        setRemoveItem={removeFilter}
      />
    </div>
  );
}

export default OrderAndFilterMobile;
