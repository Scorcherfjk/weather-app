import React from 'react';

import '../assets/styles/Arrow.scss';

const Arrow = ({ rotate }) => (
  <div
    className="arrow"
    style={{
      transform: `rotate(${rotate}deg)`,
    }}
  >
    &#x2b9d;
  </div>
);

export default Arrow;
