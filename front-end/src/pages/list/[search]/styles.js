import styled from 'styled-components';

const SearchProductListPageContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchProductListPageFilterSection = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  width: 25vw;

  @media (max-width: 768px) {
    width: 100vw;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 45px;
  }
`;

const SearchTitleContainer = styled.div`
  margin: 10px 0 0 3vw;

  h1 {
    font-size: 20px;
  }
`;

export {
  SearchProductListPageContainer,
  SearchProductListPageFilterSection,
  SearchTitleContainer,
};
