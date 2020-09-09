import React from 'react';

import '../assets/styles/SmallCard.scss';

const SmallCard = ({
  img, date, min, max, grades,
}) => {
  const fecha = new Date(date);
  let minT;
  let maxT;

  if (grades === 'C') {
    minT = (min - 273.15).toFixed(2);
    maxT = (max - 273.15).toFixed(2);
  } else {
    minT = min;
    maxT = max;
  }

  return (
    <div className="small-card">
      <h4 className="small-card__date">{fecha.toDateString()}</h4>
      <img className="small-card__image" src={img} alt="" />
      <ul className="small-card__list">
        <li>{`${minT}°${grades}`}</li>
        <li>{`${maxT}°${grades}`}</li>
      </ul>
    </div>
  );
};

export default SmallCard;
