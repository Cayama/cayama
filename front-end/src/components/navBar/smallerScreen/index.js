import React from 'react';
import { NavBarDropDown } from '../../layout/listGroup';
import { useDispatch } from 'react-redux';
import navBarStructure from '../navBarSettings/navBarStructure';
import { hamburgerMenuAction } from '../../../redux/action/hamburgerMenuAction';
import { SmallerScreenMenuContainer, SmallerScreenButtonsContainer } from './styles';
import { ButtonsLink } from '../../layout/buttonGroup';

function MenuSmallerScreen({ open, userName }) {
  const dispatch = useDispatch();
  // const { firstName } = useSelector((state) => state.userDataReducer.userData);
  const registerOrLogin = 'registre-se ou faça login!'
  return (
    <SmallerScreenMenuContainer open={open}>
      <div>Olá, {userName || registerOrLogin}</div>
      <SmallerScreenButtonsContainer>
        <ButtonsLink variant='contained' href='/login' text='Entre' color='primary' />
        <ButtonsLink variant='outlined' href='/register' text='Criar conta' color='secondary' />
      </SmallerScreenButtonsContainer>
      <NavBarDropDown
        onClick={() => dispatch(hamburgerMenuAction(!open))}
        navBarStructure={navBarStructure}
        firstName={userName}
      />
    </SmallerScreenMenuContainer>
  );
};

export default MenuSmallerScreen;
