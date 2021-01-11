import PropTypes from 'prop-types';
import NextImage from 'next/image';

function Image({ src, width, height, alt }) {
  return (
    <NextImage alt={alt} src={src} width={width} height={height} />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
}

export default Image;
