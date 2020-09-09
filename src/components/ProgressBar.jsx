import React from 'react';

import '../assets/styles/ProgressBar.scss';

const ProgressBar = ({ progress }) => (
  <div className="progressbar">
    <li>
      <ul>0</ul>
      <ul>50</ul>
      <ul>100</ul>
    </li>
    <div className="progressbar__progress-container">
      <div
        style={{ width: `${progress}%` }}
        className="progressbar__progress-value"
      />
    </div>
    <p>%</p>
  </div>
);

export default ProgressBar;
