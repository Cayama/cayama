import styled from 'styled-components';
import { ContainerRow } from '../../components/dataGrid';

const MyHeader = styled.header`
  width: 100%;
  height: 12%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  padding-left: 10px;
  padding-bottom: 3px;
  flex-direction: column;
  background-color: white;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 768px) {
    padding-right: 5px;
    padding-left: 5px;
  }
`;

const HeaderContainerRow = styled(ContainerRow)`
  height: 70%;
  display: flex;
  align-itens: center;
  justify-content: space-around;
  width: 100%;
`;

export { MyHeader, HeaderContainerRow };
