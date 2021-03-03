import styled from 'styled-components';

const OrderAndFilterContainer = styled.div`

`;

const IconsContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const LinksToClickContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 768px) {
    display: ${(props) => props.isEnabled ? 'flex' : 'none'};
    position: absolute;
    flex-direction: column;
    background-color: white;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99999999999999999;
  }
`;

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TitleAndFilter = styled.h2`
  color: black;
  margin: 30px 0 45px 15px;
`;

export {
  OrderAndFilterContainer,
  IconsContainer,
  LinksToClickContainer,
  CloseIconContainer,
  TitleAndFilter,
}
