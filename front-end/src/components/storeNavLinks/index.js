import React from 'react';
import Link from '../../infra/components/link';
import { StoreCategoriesContainer, StoreNavLinksContainer } from './styles';

function StoreNavLinks({ storeLinksArray }) {
  if (storeLinksArray.length > 4) {

  }
  return (
    <StoreNavLinksContainer>
      {storeLinksArray.map(({ linkTex, path }) => (
        <StoreCategoriesContainer>
          <Link color='white' href={path}>{linkTex}</Link>
        </StoreCategoriesContainer>
      ))}
    </StoreNavLinksContainer>
  );
}

export default StoreNavLinks;
