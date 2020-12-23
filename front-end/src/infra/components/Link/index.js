import PropTypes from 'prop-types';
import NextLink from 'next/link';

import { MyLink } from './styles';

function Link({ href, children }) {
  return (
    <MyLink>
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
