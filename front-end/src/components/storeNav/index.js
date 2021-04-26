import React from 'react';
import { StoreNavContent } from './styles';
import StoreLogo from '../storeLogo';
import Link from '../../infra/components/link';
import StoreNavLinks from '../storeNavLinks';

function StoreNav({ storeLinksArray, logoImageLink, storeColors }) {
  return (
    <StoreNavContent
      navColor={storeColors.primaryColor}
      textColor='white'
    >
      <StoreLogo logoImageLink={logoImageLink} />
      <StoreNavLinks storeLinksArray={storeLinksArray} />
    </StoreNavContent>
  );
}

export default StoreNav;
