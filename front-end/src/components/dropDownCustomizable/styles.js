import styled from 'styled-components';

const DropDownStoreLinksContent = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 5px;
  width: auto;
  z-index: 10000000;
  flex-direction: column;
`;

const DropDownStoreContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropDownStoreLinksContent} {
    display: flex;
  };

  &:active ${DropDownStoreLinksContent} {
    display: flex;
  };

  &:hover {
    cursor: pointer;
  };
`;

const DropDownStoreContent = styled.div`
  margin: 0 0 0 3px;
`;

export { DropDownStoreContainer, DropDownStoreLinksContent, DropDownStoreContent }
