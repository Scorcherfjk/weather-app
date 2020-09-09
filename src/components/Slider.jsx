import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

import '../assets/styles/Slider.scss';

import Ejm from '../assets/img/LightRain.png';

const Slider = ({ lat, lon, token }) => {
  const [weather, setWeather] = useState({
    list: [],
  });

  useEffect(() => {
    const getData = async () => {
      const resWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}`,
      );
      const dataWeather = await resWeather.json();
      setWeather(dataWeather);
    };
    getData();
  }, []);

  return (
    <div className="slider">
      {weather.list.map((ele, idx) => (
        <SmallCard
          key={'date' + idx}
          img={Ejm}
          date={ele.dt_txt}
          min={ele.main.temp_min}
          max={ele.main.temp_max}
          grades="°F"
        />
      ))}
    </div>
  );
};

export default Slider;
