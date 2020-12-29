import Link from '../../infra/components/link';
import Image from '../../infra/components/image';
import NavBar from '../../components/navBar';
import SearchBar from '../../components/searchBar';
import { MyHeader, HeaderContainerRow } from './styles';
import BurguerNav from '../../components/navBar/burguerNav';
import ShoppingCart from '../../components/shoppingCart';

function Header({ children }) {
  return (
    <MyHeader>
      <HeaderContainerRow>
        <Link href='/'>
          <Image alt="logo" src='/img/logoCayama.png' width="100%" height="30%" />
        </Link>
        <SearchBar />
        <ShoppingCart />
        <BurguerNav />
      </HeaderContainerRow>
      <NavBar />
    </MyHeader>
  );
}

export default Header;
