import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secundary};
`

const ButtonText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`

function Typography({ children, variant }) {
  const text = () => {
    switch(variant) {
      case 'h1': 
      return <Title>
        {children}
      </Title>
      case 'button':
      return <ButtonText>
        {children}
      </ButtonText>
      default:
      return <></>
    }
  }
  return (
    text()
  );
}

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string.isRequired,
}

export default Typography;
