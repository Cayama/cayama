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
  margin: 100px 0 50px 0;

  @media screen and (max-width: 415px) {
    width: 95vw;
    margin: 0px 0 30px 0;
  }
`;

const AddSizeButton = styled.button`
  border-radius: 4px;
  color: #FFFFFF;
  height: 46px;
  width: auto;
  padding: 0 8px 0 8px;
  background: ${({ theme }) => theme.colors.primary};


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

export { RegisterProductSection, RegisterProductContent, AddSizeButton, InputWithX, SizeText }
