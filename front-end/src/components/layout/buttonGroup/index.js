import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Image from '../../../infra/components/image';
import Link from '../../../infra/components/link';
import { SearchButtonStyle, TextButtonStyle, CardButtonStyle, NavBarDropDownBtn, DropDownDiv } from './styles';
import { ContainerRow, ContainerColumn } from '../../dataGrid';
import { ButtonText } from '../../foundation/text';
import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';

const SearchButton = () => {
  return (
    <SearchButtonStyle>
      <Image src='/img/searchIcon.svg' width={30} height={30} />
    </SearchButtonStyle>
  );
}

const TextButton = ({ text, onClick }) => {
  return (
    <TextButtonStyle onClick={onClick}>
      <ButtonText>
        {text}
      </ButtonText>
    </TextButtonStyle>
  );
}

const CardButton = ({ text, onClick }) => {
  return (
    <CardButtonStyle onClick={onClick}>
      <ButtonText>
        {text}
      </ButtonText>
    </CardButtonStyle>
  )
}

const DropdownButton = ({ DropdownStructure, data }) => {
  const [settingsDropDown, setSettingsDropDown] = useState(false)

  return (
    <ContainerColumn>
      <NavBarDropDownBtn onClick={() => setSettingsDropDown(!settingsDropDown)}>
          <ContainerRow>
            Jafet Henrique
            <div>
              <BsChevronDown />
            </ div>
          </ContainerRow>
      </NavBarDropDownBtn>
      {settingsDropDown ? <DropdownStructure data={data} /> : null}
    </ContainerColumn>
  );
};


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  button: {
    minHeight: 0,
    minWidth: 0,
    padding: 0,
  },
}));

function SimpleMenu({ linksDropdownArr, userName }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DropDownDiv>
      <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {userName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        transformOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        {linksDropdownArr.map(({ url, name }) => (
          <MenuItem onClick={handleClose}>
            <Link key={name} href={url}>
              {name}
            </Link>
          </MenuItem>)
        )}
      </Menu>
    </DropDownDiv>
  );
}


export { SearchButton, TextButton, CardButton, DropdownButton, SimpleMenu };
