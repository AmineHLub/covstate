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
      ) : <Continent continent={selectedContinent} />}
    </>
  );
};

export default Main;
