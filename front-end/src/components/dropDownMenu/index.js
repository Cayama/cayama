import React from 'react';
import { DropDownContainer, DropDownContent } from './styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { NavBarDropDown } from '../../components/layout/listGroup'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 0,
    padding: 0,
  }
}));


function DropDownMenu({ userName, linksDropdownArr }) {
  const classes = useStyles();
  return (
    <DropDownContainer>
      <div className={classes.button}>{userName} <ExpandMoreIcon /></div>
      <DropDownContent>
        <NavBarDropDown
          navBarStructure={linksDropdownArr}
        />
      </DropDownContent>
    </DropDownContainer>
  );
}

export default DropDownMenu;
