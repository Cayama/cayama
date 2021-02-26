import { useEffect, useState } from 'react';
import Link from '../../infra/components/link';
import Image from '../../infra/components/image';
import NavBar from '../../components/navBar';
import SearchBar from '../../components/searchBar';
import { MyHeader, HeaderContainerRow } from './styles';
import BurguerNav from '../../components/navBar/burguerNav';
import ShoppingCart from '../../components/shoppingCart';

function Header({ children }) {
  const [positionHeader, setPositionHeader] = useState('0')
  let prevScrollPos = 0;
  useEffect(() => {
    if (typeof windows !== undefined) {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
          setPositionHeader('0')
        }
        if (prevScrollPos >= 106 && prevScrollPos < currentScrollPos) {
          setPositionHeader('-12vh')
        }
        prevScrollPos = currentScrollPos
      }
    }
  }, [])
  return (
    <MyHeader positionHeader={positionHeader}>
      <HeaderContainerRow>
        <Link href='/'>
          <Image alt="logo" src='/img/logoCayama.png' width="100%" height="30%" />
        </Link>
        <SearchBar placeholderText="Buscar produtos" />
        <ShoppingCart />
        <BurguerNav />
      </HeaderContainerRow>
      <NavBar />
    </MyHeader>
  );
}

export default Header;
