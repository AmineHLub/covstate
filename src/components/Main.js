import React from 'react';
import Navbar from './MainComponents/Navbar';
import ViewMain from './MainComponents/ViewMain';
import SelectorView from './MainComponents/SelectorView';

const Main = () => {
  return (
    <>
      <Navbar />
      <ViewMain />
      <SelectorView />
    </>
  );
};

const wow = (
  <div>
    <img src="https://raw.githubusercontent.com/djaiss/mapsicon/master/europe/gb/128.png" alt="shape" />
  </div>
);

export default Main;
