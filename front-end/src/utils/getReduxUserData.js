import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

const getReduxUserData = () => {
  const allUserData = useSelector((state) => state.userDataReducer.userData);
  return allUserData;
}

export default getReduxUserData;
