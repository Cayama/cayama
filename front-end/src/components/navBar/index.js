import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { MyNavBar, NavBarDropDownBtn } from './styles.js';
import { ContainerRow, ContainerColumn } from '../dataGrid';
import NavBarSettings from './navBarSettings/index';

const NavBar = () => {
  const [settingsDropDown, setSettingsDropDown] = useState(false)
  return (
    <MyNavBar>
      <NavBarDropDownBtn onClick={() => setSettingsDropDown(!settingsDropDown)}>
        <ContainerColumn>
          <ContainerRow>
            Jafet Henrique
            <div>
              <BsChevronDown />
            </ div>
          </ContainerRow>
          {settingsDropDown ? <NavBarSettings /> : null}
        </ContainerColumn>
      </NavBarDropDownBtn>
    </MyNavBar>
  );
}

export default NavBar;
