import Image from '../../../infra/components/Image';
import { SearchButtonStyle, TextButtonStyle } from './styles';
import Typography from '../../foundation/Typography';

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
      <Typography variant='button'>
        {Text}
      </Typography>
    </TextButtonStyle>
  );
}

export { SearchButton, TextButton };
