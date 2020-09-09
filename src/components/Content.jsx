import React, { useState, useEffect } from 'react';

import Slider from './Slider';
import Highlights from './Highlights';

import '../assets/styles/Content.scss';

const Content = () => {
  const token = '86d376975595fd9beeaa42e97b417da7';
  const [ip, setIp] = useState('');
  const [geo, setGeo] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const getData = async () => {
      const resIp = await fetch('https://api.ipify.org/?format=json');
      const dataIp = await resIp.json();
      setIp(dataIp.ip);

      const resGeo = await fetch(`https://ipapi.co/${ip}/json/`);
      const dataGeo = await resGeo.json();
      setGeo(dataGeo);
    };
    getData();
  }, []);

  return (
    <div className="content">
      <Slider lat={geo.latitude} lon={geo.longitude} token={token} />
      <Highlights lat={geo.latitude} lon={geo.longitude} token={token} />
    </div>
  );
};

export default Content;
