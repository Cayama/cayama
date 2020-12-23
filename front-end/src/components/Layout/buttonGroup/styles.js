import styled from 'styled-components';

const SearchButtonStyle = styled.button`
  background: ${({ theme }) => theme.colors.secundary};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  height: 40px;
`

const TextButtonStyle = styled.button`
background: ${({ theme }) => theme.colors.secundary};
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border: none;
height: 40px;
`

export { SearchButtonStyle, TextButtonStyle };