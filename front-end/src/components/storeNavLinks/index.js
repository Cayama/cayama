import React from 'react';
import Link from '../../infra/components/link';
import { StoreCategoriesContainer, StoreNavLinksContainer } from './styles';
import DropDownCustomizable from '../dropDownCustomizable';

function StoreNavLinks({ storeLinksArray }) {
  if (storeLinksArray.length > 4) {
    return (
      <StoreNavLinksContainer justifyContent='start'>
        <DropDownCustomizable linksArray={storeLinksArray}>
          Categorias
        </DropDownCustomizable>
      </StoreNavLinksContainer>
    )
  };
  return (
    <StoreNavLinksContainer justifyContent='space-around'>
      {storeLinksArray.map(({ linkText, path }, index) => (
        <StoreCategoriesContainer key={index}>
          <Link color='white' href={path}>{linkText}</Link>
        </StoreCategoriesContainer>
      ))}
    </StoreNavLinksContainer>
  );
}

export default StoreNavLinks;
