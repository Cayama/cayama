import Link from '../../infra/components/link';
import Image from '../../infra/components/image';
import NavBar from '../../components/navBar';
import { MyHeader, HeaderInput } from './styles';
import { SearchButton, TextButton } from '../../components/Layout/buttonGroup';
import { ContainerRow } from '../../components/dataGrid';

function Header({ children }) {
  return (
    <MyHeader>
      <ContainerRow>
        <Link href='/'>
          <Image src='/img/logoCayama.png' width={140} height={100} />
        </Link>
        <HeaderInput placeholder='Buscar produtos' />
        <SearchButton />
        <TextButton text='Entre ou cadastre-se' onClick={() => console.log('kkk')} />
      </ContainerRow>
      <NavBar />
    </MyHeader>
  );
}

export default Header;
