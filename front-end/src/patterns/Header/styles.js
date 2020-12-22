import styled from 'styled-components';

const MyHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: white;
  box-shadow: 0px 10px 100px #111;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`

const MyLogo = styled.div`
  cursor: pointer;
`

const HeaderInput = styled.input`
  background: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 5px;
  text-transform: none;
  width: 624px;
  height: 24px;
  padding: 8px 50px 8px 19px;
  font-size: 13px!important;
  word-spacing: 2px!important;
  font-weight: normal!important;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputTextColor};
  }
`

export { MyHeader, MyLogo, HeaderInput };