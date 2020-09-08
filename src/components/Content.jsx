import React from 'react';

import Slider from './Slider';
import Highlights from './Highlights';

import '../assets/styles/Content.scss';

const Content = () => (
  <div className="content">
    <Slider />
    <Highlights />
  </div>
);

export default Content;
