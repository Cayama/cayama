import styled from 'styled-components';

const BiggerScreenMenuContainer = styled.div`
  list-style: none;
  width: 60vw;
  margin: 0 2vw 0 2vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  li {
    padding-right: 10px;
  }
`;

const BiggerScreenMenuContainerStart = styled.div`
  width: 15vw;
`;

const BiggerScreenMenuContainerCenter = styled.div`
  width: 30vw;
`;

const BiggerScreenMenuContainerEnd = styled.div`
  display: flex;
  width: 20vw;
  justify-content: space-between;
`;

const LoginRegisterContainer = styled.div`
  display: flex;
  width: 20vw;
  justify-content: space-around;
`;

export {
  BiggerScreenMenuContainer,
  BiggerScreenMenuContainerEnd,
  BiggerScreenMenuContainerStart,
  BiggerScreenMenuContainerCenter,
  LoginRegisterContainer,
};
