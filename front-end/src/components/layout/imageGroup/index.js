import { ImageSize } from './styles';

const ImageContainer = ({ children, width, height }) => {
  return (
    <ImageSize width={width} height={height}>
      {children}
    </ImageSize>
  )
}

export { ImageContainer };
