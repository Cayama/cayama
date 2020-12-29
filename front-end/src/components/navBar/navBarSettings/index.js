import React from 'react';
import Link from '../../../infra/components/link';
import { SettingsContainer } from './styles';

const NavBarSettings = ({ data }) => {
  console.log(data)
  return (
    <SettingsContainer>
      {data.map(({ url, name }) => (
        <Link key={name} href={url}>
          {name}
        </Link>)
      )}
    </SettingsContainer>
  );
}

export default NavBarSettings;
