import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './MainComponents/Navbar';
import ViewMain from './MainComponents/ViewMain';
import SelectorView from './MainComponents/SelectorView';
import Continent from './MainComponents/Continent';
import Detail from './Detail';
import { fetchTotal } from '../Redux/State/totalStats';

const Main = () => {
  const selectedContinent = useSelector((state) => state.continentReducer);
  const selectedCountry = useSelector((state) => state.countryReducer);
  const selectedDate = useSelector((state) => state.timeReducer);
  const [navSearch, setNavSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTotal(selectedDate));
  }, []);
  return (
    <Router>
      <Navbar
        selectedContinent={selectedContinent}
        setNavSearch={setNavSearch}
        selectedCountry={selectedCountry}
      />
      <Switch>
        <Route exact path="/">
          {!selectedContinent ? (
            <>
              <ViewMain />
              <SelectorView />
            </>
          ) : (
            <Continent selectedContinent={selectedContinent} navSearch={navSearch} />

          )}
        </Route>

        <Route exact path="/Details">
          <Detail selectedCountry={selectedCountry} selectedDate={selectedDate} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Main;
