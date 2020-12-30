import styled from 'styled-components';

const CarouselImage = styled.img.attrs((props) => ({
  className: props.className,
}))`
  height: 40vh;
`;

export { CarouselImage };
