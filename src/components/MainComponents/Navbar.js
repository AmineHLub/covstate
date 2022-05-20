import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetTime } from '../../Redux/State/timeState';
import { setContinent } from '../../Redux/State/continentSelection';
import { setCountry } from '../../Redux/State/countrySelection';
import { resetCountryStats } from '../../Redux/State/countryStats';
import '../../styles/main-style/navbar.css';

const Navbar = ({ selectedContinent, setNavSearch, selectedCountry }) => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="navbar-container d-flex">
        <NavLink exact to="/" className="go-back d-flex">
          <button
            type="button"
            onClick={() => {
              if (selectedCountry) {
                dispatch(setCountry(null));
                dispatch(resetCountryStats(null));
              } else if (selectedContinent) {
                dispatch(setContinent(null));
              } else {
                dispatch(resetTime());
              }
            }}
          >
            {' '}
            {'<'}
            {' '}
          </button>
        </NavLink>
        <div className="user-selection">
          {' '}
        </div>
        <div className="search-bar">
          {(selectedContinent && !selectedCountry)
            ? <input onChange={(e) => setNavSearch(e.target.value)} /> : null}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  selectedContinent: PropTypes.shape({
    selected: PropTypes.string,
  }).isRequired,
  selectedCountry: PropTypes.shape({
    selected: PropTypes.string.isRequired,
  }).isRequired,
  setNavSearch: PropTypes.func.isRequired,
};

export default Navbar;
