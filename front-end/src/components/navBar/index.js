import React from 'react';
import { useSelector } from 'react-redux';
import { MyNavBar, ShippingAddressContainer } from './styles.js';
import MenuBigScreen from './bigScreen/index';
import MenuSmallerScreen from './smallerScreen/index';
import Hidden from '@material-ui/core/Hidden';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const NavBar = () => {
  const hamburgerOpen = useSelector((state) => state.hamburgerMenuReducer.status);
  const { firstName, addresses } = useSelector((state) => state.userDataReducer.userData)
  return (
    <MyNavBar>
      <ShippingAddressContainer>
        <LocationOnOutlinedIcon /> {firstName}: {addresses[0].street} {addresses[0].number}
      </ShippingAddressContainer>
      <Hidden mdDown>
        <MenuBigScreen userName={firstName} />
      </Hidden>
      <Hidden lgUp>
        <MenuSmallerScreen open={hamburgerOpen} />
      </Hidden>
    </MyNavBar>
  );
};

export default NavBar;
