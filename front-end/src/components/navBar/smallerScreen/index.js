import React from 'react';
import { NavBarDropDown } from '../../layout/listGroup';
import { useDispatch, useSelector } from 'react-redux';
import navBarStructure from '../navBarSettings/navBarStructure';
import { hamburgerMenuAction } from '../../../redux/action/hamburgerMenuAction';
import { SmallerScreenMenuContainer, SmallerScreenButtonsContainer } from './styles';
import { ButtonsLink } from '../../layout/buttonGroup';

function MenuSmallerScreen({ open }) {
  const dispatch = useDispatch();
  const { firstName } = useSelector((state) => state.userDataReducer.userData)
  return (
    <SmallerScreenMenuContainer open={open}>
      <div>Olá, {firstName}</div>
      <SmallerScreenButtonsContainer>
        <ButtonsLink variant='contained' href='/login' text='Entre' color='primary' />
        <ButtonsLink variant='outlined' href='/register' text='Criar conta' color='secondary' />
      </SmallerScreenButtonsContainer>
      <NavBarDropDown
        onClick={() => dispatch(hamburgerMenuAction(!open))}
        navBarStructure={navBarStructure}
      />
    </SmallerScreenMenuContainer>
  );
};

export default MenuSmallerScreen;
