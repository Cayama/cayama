import styled from 'styled-components';

const MyNavBar = styled.nav`
  display: flex;
  overflow: hidden;

  a {
    text-decoration: none;
  }
`;

const NavBarDropDownBtn = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  div {
    display: flex;
    margin-left: 5px;
  }
`;

export { NavBarDropDownBtn, MyNavBar };
