import React from 'react';
import Li from '../../layout/liGroup';
import { useDispatch } from 'react-redux';
import navBarStructure from '../navBarSettings/navBarStructure';
import Link from '../../../infra/components/link';
import { hamburgerMenuAction } from '../../../redux/action/hamburgerMenuAction';

function MenuSmallerScreen({ open }) {
  const dispatch = useDispatch()
  return (
    <>
      {open ? (navBarStructure.map(({ url, name }) =>
      <Li key={name}>
        <Link onClick={() => dispatch(hamburgerMenuAction(!open))} href={url}>
          {name}
        </Link>
      </Li>
      )) : null}
    </>
  );
}

export default MenuSmallerScreen;
