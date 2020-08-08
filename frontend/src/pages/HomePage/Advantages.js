import React from 'react';
import { useSelector } from 'react-redux'

function Advantages() {
  const advantages = useSelector(state => state.homePageReducer.advantages)
  return (
    <div>
      {advantages.map(({ advantage }) => (
        <div key={advantage}>
          {advantage}
        </div>
      ))}
    </div>
  );
}

export default Advantages;