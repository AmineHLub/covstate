/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import '../styles/detail.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryStats } from '../Redux/State/countryStats';

const Detail = ({ selectedCountry, selectedDate }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountryStats(selectedDate, selectedCountry.selected));
  }, []);
  const fetchedCountryData = useSelector((state) => state.countryStatsReducer);
  let baseApiDataLink;
  if (fetchedCountryData) {
    const changedCoutnryName = selectedCountry.selected.charAt(0).toUpperCase()
    + selectedCountry.selected.slice(1);
    baseApiDataLink = fetchedCountryData.dates[`2021-${selectedDate.month}-${selectedDate.day}`].countries[changedCoutnryName];
  }
  return (
    <div className="fixed-container">
      <section className="upper-country-detail">
        <div className="country-info-container d-flex">
          <img src={selectedCountry.link} alt="country-img" />
          <h2>{selectedCountry.selected.toUpperCase()}</h2>
        </div>
      </section>
      { baseApiDataLink ? (
        <>
          <section className="lower-covid-stats">
            <div className="dates-stats">
              <h3 className="time-indicator">
                {selectedDate.month}
                -
                {selectedDate.day}
                -2021
              </h3>
              <div className="stats-container d-flex">
                <p>
                  Cases :
                  {' '}
                  {baseApiDataLink.today_new_confirmed}
                </p>
                <p>
                  Recovered :
                  {' '}
                  {baseApiDataLink.today_new_recovered}
                </p>
                <p>
                  Passed :
                  {' '}
                  {baseApiDataLink.today_new_deaths}
                </p>
              </div>
            </div>
            <div className="total-stats">
              <h3 className="time-indicator">Total</h3>
              <div className="stats-container d-flex">
                <p>
                  Cases :
                  {' '}
                  {baseApiDataLink.today_confirmed}
                </p>
                <p>
                  Recovered :
                  {' '}
                  {baseApiDataLink.today_deaths}
                </p>
                <p>
                  Passed :
                  {' '}
                  {baseApiDataLink.today_recovered}
                </p>
              </div>
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
};

export default Detail;
