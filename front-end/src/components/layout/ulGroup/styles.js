import styled from 'styled-components';

const UlStyles = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding-right: 10px;
  }

  @media (max-width: 1025px) {
    flex-flow: column nowrap;
    background: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
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

export { UlStyles };
