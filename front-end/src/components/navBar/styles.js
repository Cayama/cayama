import styled from 'styled-components';

const MyNavBar = styled.nav`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 30%;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding-right: 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;

    li {
      color: black;
    }
  }
`;



export { MyNavBar, Ul };
