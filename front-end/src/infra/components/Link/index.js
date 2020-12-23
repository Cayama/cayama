import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Image from '../Image/index';

import { MyLogo } from './styles';

function Link({ href, src, width, height }) {
  return (
    <MyLogo>
      <NextLink href={href}>
        <Image src={src} width={width} height={height} />
      </NextLink>
    </MyLogo>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default Link;