import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../../components/navBar';
import { MyHeader, MyLogo, HeaderInput, ContainerRow } from './styles';

function Header({ children }) {
  return (
    <MyHeader>
      <ContainerRow>
        <MyLogo>
          <Link href='/'>
            <Image src='/img/logoCayama.png' width={140} height={100} />
          </Link>
        </MyLogo>
        <HeaderInput placeholder='Buscar produtos' />
      </ContainerRow>
      <NavBar />
    </MyHeader>
  );
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header;
