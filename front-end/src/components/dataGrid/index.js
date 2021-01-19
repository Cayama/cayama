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
  margin: 0px 10px 0px 10px;
`

const ProductsCardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1vw;
`

export { ContainerRow, ContainerColumn, ContainerRowButtons, ProductsCardSection };
