import React from 'react';
import { UlStyles } from './styles';

const Ul = ({ children, open }) => {
  return (
    <UlStyles open={open}>
      {children}
    </UlStyles>
  );
};

export default Ul;
