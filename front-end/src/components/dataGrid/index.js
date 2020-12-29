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
`

export { ContainerRow, ContainerColumn, ContainerRowButtons };
