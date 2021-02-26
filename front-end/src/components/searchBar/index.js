import { SearchButton, SearchInput, SearchContainerRow } from './styles';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ placeholderText }) => {
  return (
    <SearchContainerRow>
      <SearchInput placeholder={placeholderText} />
      <SearchButton>
        <BsSearch />
      </SearchButton>
    </SearchContainerRow>
  );
};

export default SearchBar;
