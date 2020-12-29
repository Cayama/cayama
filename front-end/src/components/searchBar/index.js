import { SearchButton, SearchInput, SearchContainerRow } from './styles';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <SearchContainerRow>
      <SearchInput placeholder='Buscar produtos' />
      <SearchButton>
        <BsSearch />
      </SearchButton>
    </SearchContainerRow>
  );
};

export default SearchBar;
