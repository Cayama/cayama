import styled from 'styled-components';

const ContainerRow = styled.div`
  display: flex;
  align-items: center;
`;

const ContainerRowButtons = styled(ContainerRow)`
  justify-content: space-around;
`;

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 70px 0px 70px;
  
  @media (max-width: 768px) {
    margin: 0px 30px 30px 0px;
  }
`;

const ProductsCardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1vw;
`;

const PageContainerSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const PageContentDiv = styled.div`
  width: ${(props) => props.width ? props.width : "70vw"};
  background-color: ${({ theme }) => theme.colors.boxBase};
  border-radius: 4px;
  padding: 20px;
  margin: 0px 0 50px 0;

  @media screen and (max-width: 415px) {
    width: 95vw;
    margin: 0px 0 30px 0;
  }
`;

export {
  ContainerRow,
  ContainerColumn,
  ContainerRowButtons,
  ProductsCardSection,
  PageContainerSection,
  PageContentDiv,
};
