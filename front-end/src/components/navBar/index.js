import React, { useState } from 'react';
import { DropdownButton } from '../layout/buttonGroup';
import { MyNavBar } from './styles.js';
import NavBarSettings from './navBarSettings/index';
import RightNav from './rightNave';

const NavBar = () => {
  return (
    <MyNavBar>
      <RightNav />
    </MyNavBar>
  );
}

export default NavBar;
