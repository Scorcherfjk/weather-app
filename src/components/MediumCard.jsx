import React from 'react';

import '../assets/styles/MediumCard.scss';

const MediumCard = ({ title, detail }) => (
  <div className="medium-card">
    <h4 className="medium-card__title">{title}</h4>
    <div className="medium-card__detail">{detail}</div>
  </div>
);

export default MediumCard;
