import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './MainComponents/Navbar';
import ViewMain from './MainComponents/ViewMain';
import SelectorView from './MainComponents/SelectorView';
import Continent from './MainComponents/Continent';

const Main = () => {
  const selectedContinent = useSelector((state) => state.continentReducer);
  return (
    <>
      <Navbar />
      {!selectedContinent ? (
        <>
          <ViewMain />
          <SelectorView />
        </>
      ) : <Continent />}
    </>
  );
};

const wow = (
  <div>
    <img src="https://raw.githubusercontent.com/djaiss/mapsicon/master/europe/gb/128.png" alt="shape" />
  </div>
);

export default Main;
