import Link from '../../../infra/components/link';
import Image from '../../../infra/components/image';
import { MyHeader, SimplerHeaderContainerRow } from '../styles';


function SimplerHeader({ children }) {
  return (
    <MyHeader>
      <SimplerHeaderContainerRow>
        <Link href='/'>
          <Image alt="logo" src='/img/logoCayama.png' width="150%" height="45%" />
        </Link>
      </SimplerHeaderContainerRow>
    </MyHeader>
  );
}

export default SimplerHeader;
