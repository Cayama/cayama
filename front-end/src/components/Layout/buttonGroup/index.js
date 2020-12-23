import Image from '../../../infra/components/Image';
import { SearchButtonStyle, TextButtonStyle } from './styles';

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
      {Text}
    </TextButtonStyle>
  );
}

export { SearchButton, TextButton };
