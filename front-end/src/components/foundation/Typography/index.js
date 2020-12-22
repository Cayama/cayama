import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

function Typography({ children }) {
  return (
    <Title>
      {children}
    </Title>
  );
}

Typography.propTypes = {
  children: PropTypes.node,
}

export default Typography;
