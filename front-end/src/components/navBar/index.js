import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { MyNavBar, NavBarDropDownBtn, ContainerRow, ContainerColumn } from './styles.js'
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
