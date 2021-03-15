import styled from 'styled-components';

const AddButton = styled.button`
  border-radius: 4px;
  color: #FFFFFF;
  height: 46px;
  width: auto;
  padding: 0 8px 0 8px;
  background: ${({ theme }) => theme.colors.primary};
  min-width: 150px;

`;

const InputWithX = styled.div`
  width: auto;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 3px;
  padding: 0 2px 0 2px;
  cursor: pointer;
  margin: 3px;
  display: flex;
  align-item: center;
`;

const SizeText = styled.div`
  margin: 0 5px 0 0;
`;

export { AddButton, InputWithX, SizeText };
