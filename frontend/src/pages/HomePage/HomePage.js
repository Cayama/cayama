import React from 'react';
import { useSelector } from 'react-redux'
import Carousel from './Carousel';

const HomePage = () => {
  const home = useSelector(state => state.homePageReducer)
  return (
    <div>
      <Carousel />
    </div>
  )
}

export default HomePage;
