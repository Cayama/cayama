import Image from '../../../infra/components/Image';
import { SearchButtonStyle, TextButtonStyle } from './styles';
import { ButtonText } from '../../foundation/text';

function SearchButton() {
  return (
    <SearchButtonStyle>
      <Image src='/img/searchIcon.svg' width={40} height={40} />
    </SearchButtonStyle>
  );
}

function TextButton({ Text }) {
  return (
    <TextButtonStyle>
      <ButtonText>
        {Text}
      </ButtonText>
    </TextButtonStyle>
  );
}

export { SearchButton, TextButton };
