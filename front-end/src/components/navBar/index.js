import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MyNavBar } from './styles.js';
import RightNav from './rightNave';

const NavBar = () => {
  const hamburgerOpen = useSelector((state) => state.hamburgerMenuReducer.status);
  console.log(hamburgerOpen)
  return (
    <MyNavBar>
      <RightNav open={hamburgerOpen} />
    </MyNavBar>
  );
}

export default NavBar;
