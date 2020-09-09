import React, { useState, useEffect } from 'react';
import LargeCard from './LargeCard';
import MediumCard from './MediumCard';

import '../assets/styles/Highlights.scss';

const Highlights = () => {
  const token = '86d376975595fd9beeaa42e97b417da7';
  const [ip, setIp] = useState('');
  const [geo, setGeo] = useState({
    latitude: 0,
    longitude: 0,
  });
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
      const resIp = await fetch('https://api.ipify.org/?format=json');
      const dataIp = await resIp.json();
      setIp(dataIp.ip);

      const resGeo = await fetch(`https://ipapi.co/${ip}/json/`);
      const dataGeo = await resGeo.json();
      setGeo(dataGeo);

      const resWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geo.latitude}&lon=${geo.longitude}&appid=${token}`,
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
        <LargeCard
          title="Wind status"
          detail={weather.wind.speed}
          optional={weather.wind.deg}
        />
        <LargeCard title="Humidity" detail={`${weather.main.humidity}%`} />
        <MediumCard title="Humidity" detail={weather.visibility} />
        <MediumCard title="Air Pressure" detail={weather.main.pressure} />
      </div>
    </div>
  );
};

export default Highlights;
