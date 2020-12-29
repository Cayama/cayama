import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hidden from '@material-ui/core/Hidden';
import { StyledBurguer } from './styles';
import { hamburgerMenuAction } from '../../redux/action/hamburgerMenuAction';

const BurguerNav = () => {
  const [open, setOpen] = useState(false);
  const reducerOpenStatus = useSelector((state) => state.hamburgerMenuReducer.status)
  const dispatch = useDispatch()

  useEffect(() => {
    setOpen(reducerOpenStatus)
  }, [reducerOpenStatus])

  return (
    <Hidden lgUp>
      <StyledBurguer open={open} onClick={() => {
        dispatch(hamburgerMenuAction(!open));
        setOpen(!open);
      }}>
        <div />
        <div />
        <div />
      </StyledBurguer>
    </Hidden>
  )
}

export default BurguerNav;
