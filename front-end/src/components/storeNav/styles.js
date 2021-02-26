import styled from 'styled-components';

const StoreNavContent = styled.nav`
  background-color: ${props => props.navColor};
  color: ${props => props.textColor};
  width: 100vw;
  height: 6vh;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto;
  font-size: 1.8rem;
  padding: 0 10px 0 10px;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StoreNavLinksContainer = styled.div`
  height: 5vh;
  background-color: red;
  grid-column-start: 2;
  grid-column-end: 13;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StoreCategoriesContainer = styled.div`
`;

export { StoreNavContent, StoreNavLinksContainer, StoreCategoriesContainer };
