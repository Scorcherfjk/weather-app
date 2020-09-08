import React from 'react';
import LargeCard from './LargeCard';
import MediumCard from './MediumCard';

import '../assets/styles/Highlights.scss';

const Highlights = () => (
  <div className="highlights">
    <h2 className="highlights__title">Today’s Highlights</h2>
    <div className="highlights__cards">
      <LargeCard />
      <LargeCard />
      <MediumCard />
      <MediumCard />
    </div>
  </div>
);

export default Highlights;
