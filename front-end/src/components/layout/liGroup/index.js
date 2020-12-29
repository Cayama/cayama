import React from 'react';
import { LiStyles } from './styles';

const Li = ({ children }) => {
  return (
    <LiStyles>
      {children}
    </LiStyles>
  );
};

export default Li;
