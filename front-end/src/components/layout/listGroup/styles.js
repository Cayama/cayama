import styled from 'styled-components';

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  height: 45px;

  @media (max-width: 768px) {
    margin: 0 0 0 15px;
    height: 60px;
  }
`;

export { ListItemContainer };
