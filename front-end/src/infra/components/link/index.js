import PropTypes from 'prop-types';
import NextLink from 'next/link';

import { MyLink } from './styles';

const Link = ({ href, children, onClick, color }) => {
  return (
    <MyLink color={color} onClick={onClick}>
      <NextLink href={href}>
        {children}
      </NextLink>
    </MyLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
}

export default Link;
