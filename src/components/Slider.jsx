import React from 'react';
import SmallCard from './SmallCard';

import '../assets/styles/Slider.scss';

import Ejm from '../assets/img/LightRain.png';
import Ejm1 from '../assets/img/Clear.png';
import Ejm2 from '../assets/img/HeavyRain.png';
import Ejm3 from '../assets/img/Snow.png';
import Ejm4 from '../assets/img/Sleet.png';

const Slider = () => (
  <div className="slider">
    <SmallCard img={Ejm} date="Fri, Jun 10" min="14°C" max="22°C" />
    <SmallCard img={Ejm1} date="Sat, Jun 11" min="13°C" max="20°C" />
    <SmallCard img={Ejm2} date="Sun, Jun 12" min="10°C" max="21°C" />
    <SmallCard img={Ejm3} date="Mon, Jun 13" min="11°C" max="19°C" />
    <SmallCard img={Ejm4} date="Thu, Jun 14" min="5°C" max="18°C" />
  </div>
);

export default Slider;
