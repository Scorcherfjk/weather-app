import React, { useState, useEffect } from 'react';
import LargeCard from './LargeCard';
import MediumCard from './MediumCard';
import ProgressBar from './ProgressBar';

import '../assets/styles/Highlights.scss';

const Highlights = ({ lat, lon, token }) => {
  const [weather, setWeather] = useState({
    visibility: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
    main: {
      humidity: 0,
      pressure: 0,
    },
  });

  useEffect(() => {
    const getData = async () => {
      const resWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}`,
      );
      const dataWeather = await resWeather.json();
      setWeather(dataWeather);
    };
    getData();
  }, []);

  return (
    <div className="highlights">
      <h2 className="highlights__title">Today’s Highlights</h2>
      <div className="highlights__cards">
        <LargeCard title="Wind status" detail={weather.wind.speed} metric="mps">
          {weather.wind.deg}
        </LargeCard>
        <LargeCard title="Humidity" detail={weather.main.humidity} metric="%">
          <ProgressBar progress={weather.main.humidity} />
        </LargeCard>
        <MediumCard title="Visibility" detail={weather.visibility} metric="miles" />
        <MediumCard title="Air Pressure" detail={weather.main.pressure} metric="mb" />
      </div>
    </div>
  );
};

export default Highlights;
