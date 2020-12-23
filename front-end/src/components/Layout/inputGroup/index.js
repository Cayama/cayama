import Image from '../../../infra/components/Image';
import { SearchButtonStyle } from './styles';

function SearchButton() {
  return (
    <SearchButtonStyle>
      <HeaderInput placeholder='Buscar produtos' />
    </SearchButtonStyle>
  );
}

export { SearchButton };

      