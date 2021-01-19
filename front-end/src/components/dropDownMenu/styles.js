import styled from 'styled-components'

const DropDownContent = styled.div`
  display: none;
  position: absolute;
`;

const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropDownContent} {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
`;


export { DropDownContainer, DropDownContent }
