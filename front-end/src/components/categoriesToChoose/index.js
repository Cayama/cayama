import React from 'react';
import { CategoriesCard } from '../cards';
import { CategoriesToChooseContainer } from './styles';

function CategoriesToChoose({ categoriesArray, typeOfAnnouncement }) {
  return (
    <CategoriesToChooseContainer>
      {categoriesArray.map(({ categoryName, path }) => (
        <CategoriesCard key={categoryName} typeOfAnnouncement={typeOfAnnouncement} path={path} categoryName={categoryName} />
      ))}
    </CategoriesToChooseContainer>
  );
};

export default CategoriesToChoose;
