import React from 'react';

import '../assets/styles/LargeCard.scss';

const LargeCard = ({ title, detail, optional }) => (
  <div className="large-card">
    <h4 className="large-card__title">{title}</h4>
    <div className="large-card__detail">{detail}</div>
    <div className="large-card__optional">{optional}</div>
  </div>
);

export default LargeCard;
