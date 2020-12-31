import React from 'react';
import { UlStylesBiggerScreenMenu, UlStylesSmallerScreenMenu } from './styles';

const UlSmallerScreenMenu = ({ children, open }) => {
  return (
    <UlStylesSmallerScreenMenu open={open}>
      {children}
    </UlStylesSmallerScreenMenu>
  );
};

const UlBiggerScreenMenu = ({ children }) => {
  return (
    <UlStylesBiggerScreenMenu>
      {children}
    </UlStylesBiggerScreenMenu>
  );
};

export { UlSmallerScreenMenu, UlBiggerScreenMenu };
