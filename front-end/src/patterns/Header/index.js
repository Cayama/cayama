import PropTypes from 'prop-types';

import { SearchButton, TextButton } from '../../components/Layout/buttonGroup';
import Link from '../../infra/components/Link';
import { MyHeader, HeaderInput } from './styles';

function Header() {
  return (
    <MyHeader>
      <Link href='/' src='/img/logoCayama.png' width={140} height={100} />
      <HeaderInput placeholder='Buscar produtos' />
      <SearchButton />
      <TextButton Text='Entre ou cadastre-se' />
    </MyHeader>
  );
}

export default Header;
