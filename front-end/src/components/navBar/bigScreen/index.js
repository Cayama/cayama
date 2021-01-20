import React from 'react';
import { SimpleMenu } from '../../layout/buttonGroup';
import DropDownMenu from '../../dropDownMenu';
import navBarStructure from '../navBarSettings/navBarStructure';
import Link from '../../../infra/components/link';
import {
  BiggerScreenMenuContainer,
  BiggerScreenMenuContainerEnd,
  BiggerScreenMenuContainerStart,
  BiggerScreenMenuContainerCenter,
  LoginRegisterContainer,
} from './styles';

function MenuBigScreen({ userName }) {

  return (
    <BiggerScreenMenuContainer>
      <BiggerScreenMenuContainerStart>
      </BiggerScreenMenuContainerStart>
      <BiggerScreenMenuContainerCenter>
      </BiggerScreenMenuContainerCenter>
      <BiggerScreenMenuContainerEnd>
        {userName ? <DropDownMenu linksDropdownArr={navBarStructure} userName={userName} /> :
          <LoginRegisterContainer>
            <Link href='/login'>Entre</Link>
            <Link href='/register'>Criar conta</Link>
          </LoginRegisterContainer>
        }
      </BiggerScreenMenuContainerEnd>
    </BiggerScreenMenuContainer>
  );
};

export default MenuBigScreen;
