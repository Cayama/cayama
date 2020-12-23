import styled from 'styled-components';

const MyHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  background-color: white;
  box-shadow: 0px 10px 100px #111;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`

const HeaderInput = styled.input`
  background: ${({ theme }) => theme.colors.inputBackground};
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 13px!important;
  font-weight: normal!important;
  height: 24px;
  padding: 8px 50px 8px 19px;
  text-transform: none;
  word-spacing: 2px!important;
  width: 624px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.inputTextColor};
  }
`

const SearchButton = styled.button`
  background: ${({ theme }) => theme.colors.secundary};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  height: 40px;
  width: 40px;
`

export { MyHeader, HeaderInput, SearchButton };
