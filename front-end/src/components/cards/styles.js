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

const BriefingContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  height: 66px;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

const ActionsContainer = styled.div`
  display: flex;
  margin: 8px;
  justify-content: space-between;
`;

const ShippingTitle = styled.h4`
  @media screen and ( min-width : 700px ) {
    font-size: 3.2em;
  }
`;

export { CardContainer, CardContent, AllPromoCards, BriefingContainer, ActionsContainer, ShippingTitle };
