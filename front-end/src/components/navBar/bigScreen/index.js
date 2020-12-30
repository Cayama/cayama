import React from 'react';
import { SimpleMenu } from '../../layout/buttonGroup';
import navBarStructure from '../navBarSettings/navBarStructure';
import Link from '../../../infra/components/link';
import {
  BiggerScreenMenuContainer,
  BiggerScreenMenuContainerEnd,
  BiggerScreenMenuContainerStart,
  BiggerScreenMenuContainerCenter,
} from './styles';

function MenuBigScreen() {

  return (
    <BiggerScreenMenuContainer>
      <BiggerScreenMenuContainerStart>
      </BiggerScreenMenuContainerStart>
      <BiggerScreenMenuContainerCenter>
      </BiggerScreenMenuContainerCenter>
      <BiggerScreenMenuContainerEnd>
        <SimpleMenu linksDropdownArr={navBarStructure} userName='Jafet Henrique' />
        <Link href='/login'>Entre</Link>
        <Link href='/register'>Criar conta</Link>
      </BiggerScreenMenuContainerEnd>
    </BiggerScreenMenuContainer>
  );
};

export default MenuBigScreen;
