import React from 'react';

function ProductCard({ name, photo, price,freeShipping }) {
  return (
    <div>
      <span>{freeShipping ? "Frete grátis" : "" }</span>
      <img src={photo} alt={name} width="7%" />
      <span>{name}</span>
      <span>Preço: {`R$${price},00`}</span>
    </div>
  )
}

export default ProductCard;
