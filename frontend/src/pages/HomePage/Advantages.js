import React from 'react';
import { useSelector } from 'react-redux';
import HomePageClientCss from './HomePageClient.module.css';

function Advantages() {
  const advantages = useSelector(state => state.homePageReducer.advantages)
  return (
    <div>
      {advantages.map(({ advantage }) => (
        <div className={HomePageClientCss.advantageBox} key={advantage}>
          {advantage}
        </div>
      ))}
    </div>
  );
}

export default Advantages;
