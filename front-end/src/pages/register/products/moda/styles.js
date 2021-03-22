import styled from 'styled-components';

const RegisterProductSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const RegisterProductContent = styled.div`
  width: 70vw;
  background-color: ${({ theme }) => theme.colors.boxBase};
  border-radius: 4px;
  padding: 20px;
  margin: 0px 0 50px 0;

  @media screen and (max-width: 415px) {
    width: 95vw;
    margin: 0px 0 30px 0;
  }
`;

const RegisterProductButton = styled.button`
  border-radius: 4px;
  color: #FFFFFF;
  height: 46px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 1.8rem;
`;

export {
  RegisterProductSection,
  RegisterProductContent,
  RegisterProductButton,
}
