import React from 'react';

import { LogoContainer, LogoImage } from './styles';

function StoreLogo({ logoImageLink }) {
  return (
    <LogoContainer>
      <LogoImage src={logoImageLink} />
    </LogoContainer>
  );
}

export default StoreLogo;
