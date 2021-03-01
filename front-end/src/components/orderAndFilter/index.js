import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
  OrderAndFilterContainer,
  IconsContainer,
  LinksToClickContainer,
  CloseIconContainer,
} from './styles';

function OrderAndFilter({ title, icon, structure }) {
  const [isEnabled, setIsEnabled] = useState(false)
  return (
    <OrderAndFilterContainer>
      <IconsContainer onClick={() => setIsEnabled(!isEnabled)}>
        {icon} {title}
      </IconsContainer>
      <LinksToClickContainer isEnabled={isEnabled}>
        <CloseIconContainer onClick={() => setIsEnabled(!isEnabled)}>
          <CloseIcon fontSize="large" />
        </CloseIconContainer>
        <div>{structure[0].name}</div>
        <div>aaaaa</div>
      </LinksToClickContainer>
    </OrderAndFilterContainer>
  );
}

export default OrderAndFilter;
