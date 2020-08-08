import React from 'react';
import { useSelector } from 'react-redux'

const HomePage = () => {
  const home = useSelector(state => state.homePageReducer)
  return (
    <div>
      {home.advantages.map((element) => (<li>{element.advantage}</li>))}
    </div>
  )
}

export default HomePage;
