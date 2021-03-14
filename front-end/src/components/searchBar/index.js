import React, { useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import { SearchButton, SearchInput, SearchContainerRow } from './styles';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ placeholderText }) => {
  const [searchText, setSearchText] = useState(null);
  const history = useRouter();

  const handleChange = ({ target: { value } }) => {
    setSearchText(value);
  };

  const sendToProductsPageList = (e) => {
    e.preventDefault();
    if (searchText) {
      return history
        .push(`${process.env.NEXT_PUBLIC_FRONT_URL_PRODUCT_LIST_PAGE}${searchText}`)
    }
  };

  return (
    <SearchContainerRow>
      <SearchInput placeholder={placeholderText} onChange={(event) => handleChange(event)} />
      <SearchButton onClick={(e) => sendToProductsPageList(e)}>
        <BsSearch />
      </SearchButton>
    </SearchContainerRow>
  );
};

export default SearchBar;
