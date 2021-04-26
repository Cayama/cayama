import styled from 'styled-components';
import { ContainerRow } from '../dataGrid';

const SearchInput = styled.input`
  background: ${({ theme }) => theme.colors.inputBackground};
  border: none;
  height: 100%;
  width: 90%;
  border-radius: 5px 0 0 5px;
  padding-left: 20px;
  padding-right 5px;
`;

const SearchButton = styled.button`
  background: ${({ theme, searchBarButtonColor }) => searchBarButtonColor || theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 5px 5px 0;
  border: none;
  height: 100%;
  width: 30px;
`;

const SearchContainerRow = styled(ContainerRow)`
  height: 45%;
  width: 62%;
  margin-left: 1%;
`;

export { SearchInput, SearchButton, SearchContainerRow };
