import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { MyNavBar, NavBarDropDownBtn } from './styles.js';
import { ContainerRow, ContainerColumn } from '../dataGrid';
import NavBarSettings from './navBarSettings/index';

const NavBar = () => {
  const [settingsDropDown, setSettingsDropDown] = useState(false)
  return (
    <MyNavBar>
      <ContainerColumn>
        <NavBarDropDownBtn onClick={() => setSettingsDropDown(!settingsDropDown)}>
            <ContainerRow>
              Jafet Henrique
              <div>
                <BsChevronDown />
              </ div>
            </ContainerRow>
        </NavBarDropDownBtn>
        {settingsDropDown ? <NavBarSettings /> : null}
      </ContainerColumn>
    </MyNavBar>
  );
}

export default NavBar;
