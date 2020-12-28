import Image from '../../../infra/components/image';
import { SearchButtonStyle } from './styles';

function SearchButton() {
  return (
    <SearchButtonStyle>
      <HeaderInput placeholder='Buscar produtos' />
    </SearchButtonStyle>
  );
}

export { SearchButton };

