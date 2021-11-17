import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './MainComponents/Navbar';
import ViewMain from './MainComponents/ViewMain';
import SelectorView from './MainComponents/SelectorView';
import Continent from './MainComponents/Continent';
import Detail from './Detail';

const Main = () => {
  const selectedContinent = useSelector((state) => state.continentReducer);
  const selectedCountry = useSelector((state) => state.countryReducer);
  const [navSearch, setNavSearch] = useState('');
  return (
    <Router>
      <Navbar
        selectedContinent={selectedContinent}
        setNavSearch={setNavSearch}
        selectedCountry={selectedCountry}
      />
      <Switch>

        {!selectedContinent ? (
          <>
            <ViewMain />
            <SelectorView />
          </>
        ) : (
          <Route exact path="/">
            {' '}
            <Continent selectedContinent={selectedContinent} navSearch={navSearch} />
            {' '}
          </Route>
        )}

        <Route exact path="/Details">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
