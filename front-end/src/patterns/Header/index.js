import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Image from 'next/image';

import { MyHeader, MyLogo, HeaderInput } from './styles';

function Header({ children }) {
  return (
    <MyHeader>
      <MyLogo>
        <Link href='/'>
          <Image src='/img/logoCayama.png' width={140} height={100} />
        </Link>
      </MyLogo>
      <HeaderInput placeholder='Buscar produtos' />
    </MyHeader>
  );
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header;
