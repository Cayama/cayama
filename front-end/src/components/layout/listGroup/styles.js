import styled from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 15px;
  height: 60px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

export { ListItemContainer };
