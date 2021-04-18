import styled from 'styled-components';

const EditButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CardDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  border-bottom: 1px solid black;
  width: 100%;
`;

const CardDataContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 10px;
`;

export {
  EditButtonContainer,
  CardDataContainer,
  CardDataContent,
};
