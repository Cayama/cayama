import React, { useState } from 'react';
import { OrderWebContainer, OrderWebPhrase, OrderWebDropDown, OrderWebClickContainer } from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { ListItemContent } from '../../layout/listGroup';

import { searchProductListPageOrderStructure } from '../structure';

function OrderWeb() {
  const [open, setOpen] = useState(false);
  const [orderType, setOrderType] = useState('Mais relevante');

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <OrderWebContainer>
      <OrderWebPhrase>Ordenar por:</OrderWebPhrase>
      <div>
        <OrderWebClickContainer onClick={handleClick}>
          <span>{orderType}</span>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </OrderWebClickContainer>
        {open ?
          <OrderWebDropDown>
            {searchProductListPageOrderStructure.map(({ name }) => <ListItemContent>{name}</ListItemContent> )}
          </OrderWebDropDown>
          :
        null
        }
      </div>
    </OrderWebContainer>
  );
}

export default OrderWeb;
