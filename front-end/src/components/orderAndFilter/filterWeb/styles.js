import styled from 'styled-components';

const FilterWebSection = styled.aside`
  display: flex;
  flex-direction: column;
  width: 13vw;
  margin: 0 0 0 40px;
`;
const SearchTitleWebContainer = styled.div`
  margin: 10px 0 0 0;

  h1 {
    font-size: 25px;
  }
`;

const FilterWebContainer = styled.div`

`;

const SingleFilterContainer = styled.div`
  margin: 30px 0 0 0;
`;

const H3SingleFilter = styled.h3`
  font-weight: bold;
`;

const FilterClickAction = styled.div`
  cursor: pointer;
`;

const PriceFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  FilterWebSection,
  SearchTitleWebContainer,
  FilterWebContainer,
  SingleFilterContainer,
  H3SingleFilter,
  FilterClickAction,
  PriceFilterContainer,
};
