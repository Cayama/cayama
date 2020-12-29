import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledBurguer } from './styles';
import { hamburgerMenuAction } from '../../redux/action/hamburgerMenuAction';

const BurguerNav = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  return (
    <StyledBurguer open={open} onClick={() => {
      dispatch(hamburgerMenuAction(!open));
      setOpen(!open);
    }}>
      <div />
      <div />
      <div />
    </StyledBurguer>
  )
}

export default BurguerNav;
