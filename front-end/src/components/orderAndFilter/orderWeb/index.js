import React, { useState } from 'react';
import { OrderWebContainer, OrderWebPhrase, OrderWebDropDown, OrderWebClickContainer } from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { ListItemContent } from '../../layout/listGroup';

function OrderWeb({ setOrderObject }) {
  const [open, setOpen] = useState(false);
  const [orderType, setOrderType] = useState('Mais relevante');

  const handleOpenClick = () => {
    setOpen(!open);
  }

  const handleOrderObject = (objectValue) => {
    handleOpenClick(!open);
    return setOrderObject(objectValue);
  }

  return (
    <OrderWebContainer>
      <OrderWebPhrase>Ordenar por:</OrderWebPhrase>
      <div>
        <OrderWebClickContainer onClick={handleOpenClick}>
          <span>{orderType}</span>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </OrderWebClickContainer>
        {open ?
          <OrderWebDropDown>
            <ListItemContent onClick={() => handleOrderObject({ order: 'Mais relevante' })}>Mais relevante</ListItemContent>
            <ListItemContent onClick={() => handleOrderObject({ order: 'Menor preço' })}>Menor preço</ListItemContent>
            <ListItemContent onClick={() => handleOrderObject({ order: 'Maior preço' })}>Maior preço</ListItemContent>
          </OrderWebDropDown>
          :
        null
        }
      </div>
    </OrderWebContainer>
  );
}

export default OrderWeb;
