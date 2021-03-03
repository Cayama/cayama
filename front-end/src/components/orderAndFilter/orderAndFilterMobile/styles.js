import styled from 'styled-components';

const OrderAndFilterMobileSection = styled.div`
  @media (max-width: 768px) {
    display: flex;
    color: white;
    background-color: black;
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

export { OrderAndFilterMobileSection, SearchTitleContainer };
