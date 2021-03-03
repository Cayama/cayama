import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
  OrderAndFilterContainer,
  IconsContainer,
  LinksToClickContainer,
  CloseIconContainer,
  TitleAndFilter,
} from './styles';
import NestedList from '../../../lists';

function OrderAndFilter({ title, icon, structure }) {
  const [isEnabled, setIsEnabled] = useState(false)
  return (
    <OrderAndFilterContainer>
      <IconsContainer onClick={() => setIsEnabled(!isEnabled)}>
        {icon} {title}
      </IconsContainer>
      <LinksToClickContainer isEnabled={isEnabled}>
        <CloseIconContainer onClick={() => setIsEnabled(!isEnabled)}>
          <CloseIcon fontSize="large" color="primary" />
        </CloseIconContainer>
        <TitleAndFilter>
          {title} por:
        </TitleAndFilter>
        <NestedList title={title} structure={structure} />
      </LinksToClickContainer>
    </OrderAndFilterContainer>
  );
};

export default OrderAndFilter;
