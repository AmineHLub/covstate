/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/detail.css';

const Detail = ({ selectedCountry, selectedDate }) => {
  return (
    <div className="fixed-container">
      <section className="upper-country-detail">
        <div className="country-info-container d-flex">
          <img src={selectedCountry.link} alt="country-img" />
          <h2>{selectedCountry.selected.toUpperCase()}</h2>
        </div>
      </section>
      <section className="lower-covid-stats">
        <div className="dates-stats">
          <h3 className="time-indicator">
            {selectedDate.month}
            -
            {selectedDate.day}
            -2021
          </h3>
          <div className="stats-container d-flex">
            <p>Cases</p>
            <p>Recovered</p>
            <p>Passed</p>
          </div>
        </div>
        <div className="total-stats">
          <h3 className="time-indicator">Total</h3>
          <div className="stats-container d-flex">
            <p>Cases</p>
            <p>Recovered</p>
            <p>Passed</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
