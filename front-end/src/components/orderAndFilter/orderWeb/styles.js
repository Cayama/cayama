import styled from 'styled-components';

const OrderWebContainer = styled.div`
  margin: 25px 60px 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const OrderWebPhrase = styled.span`
  margin: 0 5px 3px 0;
`;

const OrderWebDropDown = styled.div`
  display: flex;
  position: absolute;
  z-index: 100;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

const OrderWebClickContainer = styled.div`
  cursor: pointer;
`;

export { OrderWebContainer, OrderWebPhrase, OrderWebDropDown, OrderWebClickContainer };
