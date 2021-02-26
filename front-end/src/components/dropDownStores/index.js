import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DropDownStoreContainer, DropDownStoreLinksContent, DropDownStoreContent } from './styles';
import Link from '../../infra/components/link';

function DropDownStores({ children, storeLinksArray }) {
  return (
    <DropDownStoreContainer>
      <DropDownStoreContent>
        <div>{children} <ExpandMoreIcon /></div>
        <DropDownStoreLinksContent>
          {storeLinksArray.map(({ linkText, path }, index) => (
            <Link key={index} color='white' href={path}>{linkText}</Link>
          ))}
        </DropDownStoreLinksContent>
      </DropDownStoreContent>
    </DropDownStoreContainer>
  );
}

export default DropDownStores;
