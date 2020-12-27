import Image from '../../../infra/components/image';
import { SearchButtonStyle, TextButtonStyle } from './styles';
import { ButtonText } from '../../foundation/text';

const SearchButton = () => {
  return (
    <SearchButtonStyle>
      <Image src='/img/searchIcon.svg' width={40} height={40} />
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

export { SearchButton, TextButton };
