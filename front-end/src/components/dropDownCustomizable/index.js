import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DropDownStoreContainer, DropDownStoreLinksContent, DropDownStoreContent } from './styles';
import Link from '../../infra/components/link';

function DropDownCustomizable({ children, linksArray }) {
  return (
    <DropDownStoreContainer>
      <DropDownStoreContent>
        <div>{children} <ExpandMoreIcon /></div>
        <DropDownStoreLinksContent>
          {linksArray.map(({ linkText, path }, index) => (
            <Link key={index} color='white' href={path}>{linkText}</Link>
          ))}
        </DropDownStoreLinksContent>
      </DropDownStoreContent>
    </DropDownStoreContainer>
  );
}

export default DropDownCustomizable;
