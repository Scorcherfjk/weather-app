import React from 'react';

import '../assets/styles/LargeCard.scss';

const LargeCard = () => {
  const fecha = new Date();
  return (
    <div className="large-card">
      <h4 className="large-card__title">{fecha.toDateString()}</h4>
      <div className="large-card__detail">detalle</div>
      <div className="large-card__optional">nada</div>
    </div>
  );
};

export default LargeCard;
