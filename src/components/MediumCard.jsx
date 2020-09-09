import React from 'react';

import '../assets/styles/MediumCard.scss';

const MediumCard = ({ title, detail, metric }) => (
  <div className="medium-card">
    <h4 className="medium-card__title">{title}</h4>
    <div className="medium-card__detail">
      {detail}
      <span>{metric}</span>
    </div>
  </div>
);

export default MediumCard;
