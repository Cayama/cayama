import React from 'react';
import { SimpleList } from '../../layout/listGroup';
import Hidden from '@material-ui/core/Hidden';
import { useDispatch } from 'react-redux';
import navBarStructure from '../navBarSettings/navBarStructure';
import { hamburgerMenuAction } from '../../../redux/action/hamburgerMenuAction';

function MenuSmallerScreen({ open }) {
  const dispatch = useDispatch()
  return (
    <Hidden lgUp>
      <SimpleList
        onClick={() => dispatch(hamburgerMenuAction(!open))}
        navBarStructure={navBarStructure}
      />
    </Hidden>
  );
}

export default MenuSmallerScreen;
