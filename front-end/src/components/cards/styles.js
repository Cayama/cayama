import styled from 'styled-components';

const AllPromoCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1vw 2vw 1vw 2vw;
`;

const CardContainer = styled.div`
  width: 23.5vw;

  @media (max-width: 767px) {
    width: 48vw;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vw;
  display: flex;
`;

export { CardContainer, CardContent, AllPromoCards };
