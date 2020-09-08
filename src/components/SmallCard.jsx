import React from 'react';

import '../assets/styles/SmallCard.scss';

const SmallCard = ({
  img, date, min, max,
}) => (
  <div className="small-card">
    <h4 className="small-card__date">{date}</h4>
    <img className="small-card__image" src={img} alt="" />
    <ul className="small-card__list">
      <li>{min}</li>
      <li>{max}</li>
    </ul>
  </div>
);

export default SmallCard;
