import styled from 'styled-components';

const MyGeneralCard = styled.div`
  box-shadow: 0px 0px 10px -5px rgba(0,0,0,0.75);
  border-radius: 3px;
  cursor: pointer;
  padding: 10px;
  border: 1px solid rgb(231, 231, 231);
`

const MyShippingCard = styled(MyGeneralCard)`
  width: 170px;
  height: 100px;
`

export { MyShippingCard };
