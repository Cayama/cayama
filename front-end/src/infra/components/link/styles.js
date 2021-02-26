import styled from 'styled-components';

const MyLink = styled.div`
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${props => props.color ? props.color : ({ theme }) => theme.colors.primary};
  };
`

export { MyLink };
