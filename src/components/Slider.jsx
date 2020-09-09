import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

import '../assets/styles/Slider.scss';

import Ejm from '../assets/img/LightRain.png';

const Slider = ({ lat, lon, token }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${token}`,
      );
      const dataWeather = await resWeather.json();

      let temp = dataWeather.list.map((ele) => {
        const day = new Date(ele.dt_txt).getDate();
        return {
          id: day,
          ...ele,
        };
      });

      const hash = {};
      temp = temp.filter((current) => {
        const today = new Date().getDate();

        if (today === current.id) return false;

        const exists = !hash[current.id];
        hash[current.id] = true;
        return exists;
      });

      console.log(temp);

      setWeather(temp);
    };
    getData();
  }, []);

  return (
    <div className="slider">
      {weather.map((ele, idx) => (
        <SmallCard
          key={'date' + idx}
          img={Ejm}
          date={ele.dt_txt}
          min={ele.main.temp_min}
          max={ele.main.temp_max}
          grades="C"
        />
      ))}
    </div>
  );
};

export default Slider;
