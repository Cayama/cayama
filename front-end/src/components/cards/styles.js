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

const AnnouncementIconContent = styled.div`
  margin: 0 0 10px 0;
`;

const AnnouncementTitleH2 = styled.h2`
  font-size: 2.5rem;
`;

const IconOnlyCardContainer = styled.div`
  margin: 10px 10px 10px 10px;
`;

const CustomCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 1px 0 rgba(0,0,0,.05), 0 1px 2px 0 rgba(0,0,0,.15);
  font-family: "Proxima Nova",-apple-system,"Helvetica Neue",Helvetica,"Roboto",Arial,sans-serif;
`;

const CustomCardContent = styled.div`
  padding: 30px 25px 30px 25px;
`;

const CustomCategoryCardContainer = styled.div`
  padding: 30px 25px 30px 25px;
  cursor: pointer;
  border-bottom: 1px solid black;
  &:hover {
    background-color: #ededed;
  }
`;

const CategoryCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardWithSearchInputContainer = styled.div`
  width: 50vw;

  @media (max-width: 768px) {
    width 95vw;
  }
`;

const InputButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 30px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputContainer = styled.div`
  width: 82%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 10px 0;
  }
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
  AnnouncementIconContent,
  AnnouncementTitleH2,
  IconOnlyCardContainer,
  CustomCard,
  CardWithSearchInputContainer,
  CustomCardContent,
  InputButtonContainer,
  InputContainer,
  CustomCategoryCardContainer,
  CategoryCardContent,
};
