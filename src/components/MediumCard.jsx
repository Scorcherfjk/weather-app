import React from 'react';

import '../assets/styles/MediumCard.scss';

const MediumCard = () => {
  const fecha = new Date();
  return (
    <div className="medium-card">
      <h4 className="medium-card__title">{fecha.toDateString()}</h4>
      <div className="medium-card__detail">detalle</div>
    </div>
  );
};

export default MediumCard;
