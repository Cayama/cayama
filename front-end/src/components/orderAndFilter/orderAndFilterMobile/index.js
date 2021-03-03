import React from 'react';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import { VerticalDivider } from '../../divider';
import OrderAndFilter from './innerComponents';
import { OrderAndFilterMobileSection, SearchTitleContainer } from './styles';
import { H1FirstLetterUppercase } from '../../layout/h1Group';
import { searchProductListPageOrderStructure, searchProductListPageFilterStructure } from '../structure';

function OrderAndFilterMobile({ search }) {
  return (
    <div>
      <OrderAndFilterMobileSection>
        <OrderAndFilter
          title='Ordenar'
          icon={<ImportExportOutlinedIcon />}
          structure={searchProductListPageOrderStructure}
        />

        <VerticalDivider />

        <OrderAndFilter
          title='Filtrar'
          icon={<FilterListOutlinedIcon />}
          structure={searchProductListPageFilterStructure}
        />
      </OrderAndFilterMobileSection>
      <SearchTitleContainer>
        <H1FirstLetterUppercase>{search}</H1FirstLetterUppercase>
      </SearchTitleContainer>
    </div>
  );
}

export default OrderAndFilterMobile;
