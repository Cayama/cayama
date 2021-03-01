import styled from 'styled-components';

const ContainerVertical = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    height: 60%;
    border: 1px solid white;
  }
`;

export { ContainerVertical };
