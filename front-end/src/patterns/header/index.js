import Link from '../../infra/components/link';
import Image from '../../infra/components/image';
import NavBar from '../../components/navBar';
import SearchBar from '../../components/searchBar';
import { MyHeader, HeaderContainerRow } from './styles';

function Header({ children }) {
  return (
    <MyHeader>
      <HeaderContainerRow>
        <Link href='/'>
          <Image src='/img/logoCayama.png' width="60%" height="60%" />
        </Link>
        <SearchBar />
      </HeaderContainerRow>
      <NavBar />
    </MyHeader>
  );
}

export default Header;
