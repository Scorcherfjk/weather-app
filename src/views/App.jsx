import React from 'react';

import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

import '../assets/styles/App.scss';

const App = () => (
  <div className="app">
    <Sidebar />
    <Content />
  </div>
);

export default App;
