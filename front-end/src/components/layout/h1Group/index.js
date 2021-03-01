import React from 'react';
import { H1 } from './styles';
import firstLetterUpercase from '../../../utils/firstLetterUpercase';

function H1FirstLetterUppercase({ children }) {
  return (
    <H1>
      {firstLetterUpercase(children)}
    </H1>
  );
}

export { H1FirstLetterUppercase };
