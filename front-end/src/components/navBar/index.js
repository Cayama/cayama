import React from 'react';
import { useSelector } from 'react-redux';
import { MyNavBar } from './styles.js';
import Ul from '../../components/layout/ulGroup';
import DropDownMenuBigScreen from './bigScreen/index';
import MenuSmallerScreen from './smallerScreen/menuSmallerScreen';

const NavBar = () => {
  const hamburgerOpen = useSelector((state) => state.hamburgerMenuReducer.status);

  return (
    <MyNavBar>
      <Ul open={hamburgerOpen}>
        <DropDownMenuBigScreen />
        <MenuSmallerScreen open={hamburgerOpen} />
      </Ul>
    </MyNavBar>
  );
}

export default NavBar;
