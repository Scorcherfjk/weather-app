import React from 'react';

import '../assets/styles/LargeCard.scss';

const LargeCard = ({
  title, detail, metric, children,
}) => (
  <div className="large-card">
    <h4 className="large-card__title">{title}</h4>
    <div className="large-card__detail">
      {detail}
      <span>{metric}</span>
    </div>
    <div className="large-card__optional">{children}</div>
  </div>
);

export default LargeCard;
