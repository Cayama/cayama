import React from 'react';
import { StoreNavContent } from './styles';
import StoreLogo from '../storeLogo';
import Link from '../../infra/components/link';
import StoreNavLinks from '../storeNavLinks';

function StoreNav({ storeLinksArray }) {
  return (
    <StoreNavContent
      navColor='black'
      textColor='white'
    >
      <StoreLogo logoImageLink={"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"} />
      <StoreNavLinks storeLinksArray={storeLinksArray} />
    </StoreNavContent>
  );
}

export default StoreNav;
