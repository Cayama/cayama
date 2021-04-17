import styled from 'styled-components';

const ContainerRow = styled.div`
  display: flex;
  align-items: center;
`

const ContainerRowButtons = styled(ContainerRow)`
  justify-content: space-around;
`

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 70px 0px 70px;
  
  @media (max-width: 768px) {
    margin: 0px 30px 30px 0px;
  }
`

const ProductsCardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1vw;
`

export { ContainerRow, ContainerColumn, ContainerRowButtons, ProductsCardSection };
