import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secundary};
`

const CardTitle = styled.h5`
  color: ${({ theme }) => theme.colors.primaryDark};
`

const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.button};
`

export { Title, ButtonText, CardTitle };
