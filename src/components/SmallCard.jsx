import React from 'react';

import '../assets/styles/SmallCard.scss';

const SmallCard = ({
  img, date, min, max, grades,
}) => {
  const fecha = new Date(date);
  return (
    <div className="small-card">
      <h4 className="small-card__date">{fecha.toDateString()}</h4>
      <img className="small-card__image" src={img} alt="" />
      <ul className="small-card__list">
        <li>{min + grades}</li>
        <li>{max + grades}</li>
      </ul>
    </div>
  );
};

export default SmallCard;
