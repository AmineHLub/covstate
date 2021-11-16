import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './MainComponents/Navbar';
import ViewMain from './MainComponents/ViewMain';
import SelectorView from './MainComponents/SelectorView';
import Continent from './MainComponents/Continent';

const Main = () => {
  const selectedContinent = useSelector((state) => state.continentReducer);
  const [navSearch, setNavSearch] = useState('');
  return (
    <>
      <Navbar setNavSearch={setNavSearch} />
      {!selectedContinent ? (
        <>
          <ViewMain />
          <SelectorView />
        </>
      ) : <Continent selectedContinent={selectedContinent} navSearch={navSearch} />}
    </>
  );
};

export default Main;
