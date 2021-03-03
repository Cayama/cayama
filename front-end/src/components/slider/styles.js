import styled from 'styled-components';

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0 0;
  width: 70%;

  @media (max-width: 768px) {
    width: 60vw;
    margin: 0 0 0 25px;
  };

`;

export { SliderContainer };
