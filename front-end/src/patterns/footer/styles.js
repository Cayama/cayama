import styled from 'styled-components';
import { ContainerRow } from '../../components/dataGrid';

const MyFooter = styled.footer`
  backgroundColor: grey;
  bottom: 0;
  left: 0;
  bottom: 0px;
  marginTop: auto;
  padding: 3px 2px;
  position: fixed;
  width: 100%;
`;

const FooterContainer = styled(ContainerRow)`
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  width: 100%;
`;

export { MyFooter, FooterContainer };