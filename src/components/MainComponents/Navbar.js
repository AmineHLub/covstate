/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetTime } from '../../Redux/State/timeState';
import { setContinent } from '../../Redux/State/continentSelection';
import { setCountry } from '../../Redux/State/countrySelection';
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
              if (selectedCountry) { dispatch(setCountry(null)); } else if (selectedContinent) {
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

export default Navbar;
