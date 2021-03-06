import styled from 'styled-components';
import { ContainerRow } from '../../components/dataGrid';

const MyHeader = styled.header`
  width: 100%;
  height: 12vh;
  position: fixed;
  top: 0;
  transform: ${props => `translateY(${props.positionHeader})`};
  transition: transform 0.5s ease-in-out;
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

const SimplerHeaderContainerRow = styled(HeaderContainerRow)`
  height: 100%;
`;

export { MyHeader, HeaderContainerRow, SimplerHeaderContainerRow };
