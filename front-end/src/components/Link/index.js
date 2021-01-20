import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../infra/components/link';
import Typography from '@material-ui/core/Typography';
import { LinkContainer } from './styles';


function SimpleLink({ variant, color, href, text }) {
  return (
    <Link href={href}>
      <Typography variant={variant} color={color}>{text}</Typography>
    </Link>
  );
}

function MultiLink({ linkArray }) {
  return (
    <LinkContainer>
      {linkArray.map(({ variant, color, href, text }) => (
        <Link key={href} href={href}>
          <Typography variant={variant} color={color}>{text}</Typography>
        </Link>
      ))}
    </LinkContainer>
  );
}

MultiLink.propTypes = {
  linkArray: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.string,
      color: PropTypes.string,
      href: PropTypes.string.isRequired,
      text: PropTypes.string,
    }),
  ),
}

SimpleLink.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export { SimpleLink, MultiLink };
