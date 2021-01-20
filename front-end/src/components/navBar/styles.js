import styled from 'styled-components';

const MyNavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

const StyledBurguer = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  top 15px;
  right: 20px;
  z-index: 20;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height : 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'}
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'}
    }
  }

  @media (max-width: 768px) {
    div {
      width: 1.6rem;
      margin-right: 5px;
    }
    height: 1.4rem;
  }

  @media (min-width: 1025px) {
    height: 3.5rem;
    width: 4.5rem;
    margin-right: 15px;
    div {
      width: 4.5rem;
      height: 0.5rem;
      margin-right: 5px;
    }
  }
`;

const ShippingAddressText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ShippingAddressContainer = styled.div`
  width: 15vw;
`;

export { MyNavBar, StyledBurguer, ShippingAddressContainer, ShippingAddressText };
