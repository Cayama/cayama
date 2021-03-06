import styled from 'styled-components';
import { ContainerRow } from '../../components/dataGrid';

const MyFooter = styled.footer`
  backgroundColor: grey;
  bottom: 0;
  left: 0;
  bottom: 0px;
  margin: 10px 0 0 0;
  padding: 3px 2px;
  width: 100%;
`;

const FooterContainer = styled(ContainerRow)`
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  width: 100%;
  margin: 10px 0 0 0;
`;

export { MyFooter, FooterContainer };
