import React from 'react';
import { useSelector } from 'react-redux';
import { MyNavBar } from './styles.js';
import MenuBigScreen from './bigScreen/index';
import MenuSmallerScreen from './smallerScreen/index';
import Hidden from '@material-ui/core/Hidden';

const NavBar = () => {
  const hamburgerOpen = useSelector((state) => state.hamburgerMenuReducer.status);

  return (
    <MyNavBar>
      <Hidden mdDown>
        <MenuBigScreen />
      </Hidden>
      <Hidden lgUp>
        <MenuSmallerScreen open={hamburgerOpen} />
      </Hidden>
    </MyNavBar>
  );
};

export default NavBar;
