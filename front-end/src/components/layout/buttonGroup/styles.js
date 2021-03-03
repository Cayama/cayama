import styled from 'styled-components';

const SearchButtonStyle = styled.button`
  background: ${({ theme }) => theme.colors.secundary};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  height: 40px;
`

const TextButtonStyle = styled.button`
  background: ${({ theme }) => theme.colors.secundary};
  border-radius: 5px;
  border: none;
  height: 40px;
`

const CardButtonStyle = styled.button`
  background: ${({ theme }) => theme.colors.secundary};
  border-radius: 7px;
  border: none;
  height: 25px;
`;

const NavBarDropDownBtn = styled.button`
  border: none;
  background: none;
  color: black;
  cursor: pointer;
  padding: 1px;
  display: flex;
  align-items: center;
  div {
    display: flex;
    margin-left: 5px;
  }
`;

const DropDownDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterPriceIconContainer = styled.div`
  @media (max-width: 768px) {
    margin: 0 0 0 40px;
  }
  margin: 0 0 0 20px;
  cursor: pointer;
`;

export {
  SearchButtonStyle,
  TextButtonStyle,
  CardButtonStyle,
  NavBarDropDownBtn,
  DropDownDiv,
  FilterPriceIconContainer,
};
