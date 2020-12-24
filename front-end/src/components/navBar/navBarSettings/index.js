import React from 'react';
import Link from '../../../infra/components/link';
import { SettingsContainer } from './styles';

const NavBarSettings = () => {
  return (
    <SettingsContainer>
      <Link href='/settings/shippings'>
        Frete
      </Link>
    </SettingsContainer>
  );
}

export default NavBarSettings;
