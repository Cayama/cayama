import React from 'react';
import { MenuListComposition, SimpleMenu } from '../../layout/buttonGroup';
import Hidden from '@material-ui/core/Hidden';
import navBarStructure from '../navBarSettings/navBarStructure';

function DropDownMenuBigScreen() {
  return (
    <Hidden mdDown>
      <SimpleMenu linksDropdownArr={navBarStructure} userName='Jafet Henrique' />
    </Hidden>
  );
};

export default DropDownMenuBigScreen;
