import React from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { CartContainer } from './styles';

const ShoppingCart = () => {
  return (
    <CartContainer>
      <RiShoppingCartLine color={'black'} size={27} />
    </CartContainer>
  )
}

export default ShoppingCart;
