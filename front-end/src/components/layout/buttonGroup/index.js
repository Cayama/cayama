import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Image from '../../../infra/components/image';
import { SearchButtonStyle, TextButtonStyle, CardButtonStyle, NavBarDropDownBtn } from './styles';
import { ContainerRow, ContainerColumn } from '../../dataGrid';
import { ButtonText } from '../../foundation/text';

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

const DropdownButton = ({ DropdownOptions }) => {
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
      {settingsDropDown ? <DropdownOptions /> : null}
    </ContainerColumn>
  );
};

export { SearchButton, TextButton, CardButton, DropdownButton };
