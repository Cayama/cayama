import React from 'react';
import { MenuListComposition, SimpleMenu } from '../../layout/buttonGroup';
import Li from '../../layout/liGroup';
import navBarStructure from '../navBarSettings/navBarStructure';

function DropDownMenuBigScreen() {
  return (
    <Li>
      <SimpleMenu linksDropdownArr={navBarStructure} userName='Jafet Henrique' />
    </Li>
  );
}

export default DropDownMenuBigScreen;
