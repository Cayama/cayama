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

const SuccessMessageCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 40%;
  left: 30%;
  width: 600px;
  height: 200px;
  z-index: 10;
  background-color: #fcfcfa;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  border: solid 1px ${(props) => props.theme.colors.primary};

  @media (max-width: 768px) {
    width: 100vw;
    top: 0;
    left: 0;
    height: 100vh;
  }
`;

const SuccessMessageCardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    font-size: 2.5rem;
  }
`;

const CheckIconContainer = styled.div`
  margin: 0 20px 0 0;
`;

const SuccessMessageCardLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 10px;
`;

export {
  CardContainer,
  CardContent,
  AllPromoCards,
  BriefingContainer,
  ActionsContainer,
  ShippingTitle,
  SuccessMessageCardContainer,
  CheckIconContainer,
  SuccessMessageCardContent,
  SuccessMessageCardLinks,
  ButtonContainer,
};
