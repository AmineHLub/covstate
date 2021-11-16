import React from 'react';
import { useDispatch } from 'react-redux';
import { resetTime } from '../../Redux/State/timeState';
import '../../styles/main-style/navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="navbar-container d-flex">
        <div className="go-back d-flex">
          <button type="button" onClick={() => dispatch(resetTime())}>
            {' '}
            {' '}
            {'<'}
            {' '}
            2021
          </button>
        </div>
        <div className="user-selection">
          countries
        </div>
        <div className="search-bar">
          <input />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
