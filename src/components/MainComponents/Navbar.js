import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetTime } from '../../Redux/State/timeState';
import { setContinent } from '../../Redux/State/continentSelection';
import '../../styles/main-style/navbar.css';

const Navbar = () => {
  const selectedContinent = useSelector((state) => state.continentReducer);
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="navbar-container d-flex">
        <div className="go-back d-flex">
          <button
            type="button"
            onClick={() => {
              if (selectedContinent) { dispatch(setContinent(null)); } else {
                dispatch(resetTime());
              }
            }}
          >
            {' '}
            {'<'}
            {' '}
          </button>
        </div>
        <div className="user-selection">
          {' '}
        </div>
        <div className="search-bar">
          <input />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
