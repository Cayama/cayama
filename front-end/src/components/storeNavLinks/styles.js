import styled from 'styled-components';

const StoreNavLinksContainer = styled.div`
  height: 5vh;
  grid-column-start: 2;
  grid-column-end: 13;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
`;

const StoreCategoriesContainer = styled.div`
`;

export { StoreCategoriesContainer, StoreNavLinksContainer }
