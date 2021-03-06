import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MyNavBar, ShippingAddressContainer, ShippingAddressText } from './styles.js';
import MenuBigScreen from './bigScreen/index';
import MenuSmallerScreen from './smallerScreen/index';
import Hidden from '@material-ui/core/Hidden';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DropDownCustomizable from '../dropDownCustomizable';

import cayamaLinksMock from '../../../dataMock/cayamaLinksMock';

const NavBar = () => {
  const [token, setToken] = useState('');
  const hamburgerOpen = useSelector((state) => state.hamburgerMenuReducer.status);
  const { personalData: { firstName }, storeData: { storePersonalData: { storeName } }, addresses } = useSelector((state) => state.userDataReducer.userData);

  useEffect(() => {
    const browserLocalStorage = localStorage.getItem('token') || '';
    setToken(browserLocalStorage);
  }, [])

  return (
    <MyNavBar>
      <ShippingAddressContainer>
        {addresses && addresses.length > 0 ? (<ShippingAddressText><LocationOnOutlinedIcon /> {firstName || storeName}: {addresses[0].address} {addresses[0].number}</ShippingAddressText>) : null}
      </ShippingAddressContainer>
      <DropDownCustomizable linksArray={cayamaLinksMock}>
        Categorias
      </DropDownCustomizable>
      <Hidden mdDown>
        <MenuBigScreen userName={firstName || storeName} />
      </Hidden>
      <Hidden lgUp>
        <MenuSmallerScreen userName={firstName || storeName} open={hamburgerOpen} />
      </Hidden>
    </MyNavBar>
  );
};

export default NavBar;
