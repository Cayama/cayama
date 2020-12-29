import React from 'react';
import Li from '../../layout/liGroup';
import navBarStructure from '../navBarSettings/navBarStructure';
import Link from '../../../infra/components/link';

function MenuSmallerScreen({ open }) {
  return (
    <>
      {open ? (navBarStructure.map(({ url, name }) =>
      <Li>
        <Link key={name} href={url}>
          {name}
        </Link>
      </Li>
      )) : null}
    </>
  );
}

export default MenuSmallerScreen;
