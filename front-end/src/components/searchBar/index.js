import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import { SearchButton, SearchInput, SearchContainerRow } from './styles';
import { BsSearch } from 'react-icons/bs';
import { handleUseRef } from '../../utils/index';

const SearchBar = ({ placeholderText, searchBarButtonColor = null, searchURL = null, page = 1 }) => {
  const history = useRouter();
  const searchText = useRef('');

  const sendToProductsPageList = (e) => {
    e.preventDefault();
    if (searchText.current !== '') {
      return history.push(searchURL || `/list?search=${searchText.current}&page=${page}`);
    }
  };

  return (
    <SearchContainerRow>
      <SearchInput placeholder={placeholderText} onChange={(e) => handleUseRef(searchText, e.target.value)} />
      <SearchButton searchBarButtonColor={searchBarButtonColor} onClick={(e) => sendToProductsPageList(e)}>
        <BsSearch />
      </SearchButton>
    </SearchContainerRow>
  );
};

export default SearchBar;
