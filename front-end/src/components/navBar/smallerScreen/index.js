import React from 'react';
import { SimpleList } from '../../layout/listGroup';
import { useDispatch } from 'react-redux';
import navBarStructure from '../navBarSettings/navBarStructure';
import { hamburgerMenuAction } from '../../../redux/action/hamburgerMenuAction';
import { SmallerScreenMenuContainer, SmallerScreenButtonsContainer } from './styles';
import { ButtonsLink } from '../../layout/buttonGroup';

function MenuSmallerScreen({ open }) {
  const dispatch = useDispatch();

  return (
    <SmallerScreenMenuContainer open={open}>
      <SmallerScreenButtonsContainer>
        <ButtonsLink variant='contained' href='/login' text='Entre' color='primary' />
        <ButtonsLink variant='outlined' href='/register' text='Criar conta' color='secondary' />
      </SmallerScreenButtonsContainer>
      <SimpleList
        onClick={() => dispatch(hamburgerMenuAction(!open))}
        navBarStructure={navBarStructure}
      />
    </SmallerScreenMenuContainer>
  );
};

export default MenuSmallerScreen;
