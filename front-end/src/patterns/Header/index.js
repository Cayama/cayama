import React from 'react';
import PropTypes from 'prop-types';
import { BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

import { MyHeader, MyLogo, HeaderInput, NavBar, ContainerRow, NavBarDropDownBtn } from './styles';

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
      <NavBar>
        <NavBarDropDownBtn>
          kkk <BsChevronDown />
        </NavBarDropDownBtn>
      </NavBar>
    </MyHeader>
  );
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header;
