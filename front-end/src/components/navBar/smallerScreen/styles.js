import styled from 'styled-components';
import { ContainerRow } from '../../dataGrid'

const SmallerScreenMenuContainer = styled.div`
  flex-flow: column nowrap;
  background: white;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;

  li {
    color: black;
  }
`;

const SmallerScreenButtonsContainer = styled(ContainerRow)`
  justify-content: center;
`;

export { SmallerScreenMenuContainer, SmallerScreenButtonsContainer };
