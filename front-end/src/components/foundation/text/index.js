import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secundary};
`

const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`

export { Title, ButtonText };
