/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import '../styles/detail.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryStats } from '../Redux/State/countryStats';
import loading from '../assets/loading.gif';

const Detail = ({ selectedCountry, selectedDate }) => {
  const [errorMsg, SetErrorMsg] = useState(`${selectedDate.day} - ${selectedDate.month}-2021`);
  let countryCases;
  if (selectedCountry.selected.includes('tates') && selectedCountry.selected.includes('ted')) {
    countryCases = 'US';
  } else { countryCases = selectedCountry.selected; }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountryStats(selectedDate, countryCases));
  }, []);
  const fetchedCountryData = useSelector((state) => state.countryStatsReducer);
  let baseApiDataLink;
  let changedCoutnryName;
  if (fetchedCountryData) {
    if (countryCases !== 'US') {
      changedCoutnryName = selectedCountry.selected.charAt(0).toUpperCase()
  + selectedCountry.selected.slice(1);
      if (selectedCountry.selected.includes('_')) {
        const newTempArr = changedCoutnryName.split('');
        newTempArr[changedCoutnryName.indexOf('_') + 1] = newTempArr[changedCoutnryName.indexOf('_') + 1].toUpperCase();
        newTempArr[changedCoutnryName.indexOf('_')] = ' ';
        changedCoutnryName = newTempArr.join('');
      }
    } else { changedCoutnryName = 'US'; }
    baseApiDataLink = fetchedCountryData.dates[`2021-${selectedDate.month}-${selectedDate.day}`].countries[changedCoutnryName];
  }
  setTimeout(() => {
    SetErrorMsg('If it is taking long we probably do not have data for this country');
  },
  2500);
  return (
    <div className="fixed-container">
      <section className="upper-country-detail">
        <div className="country-info-container d-flex">
          <img className="country-img" src={selectedCountry.link} alt="country-img" />
          <h2 className="country-name-stats">{selectedCountry.correct.toUpperCase()}</h2>
        </div>
      </section>
      { baseApiDataLink ? (
        <>
          <section className="lower-covid-stats">
            <div className="dates-stats">
              <h3 className="time-indicator">
                {selectedDate.day}
                -
                {selectedDate.month}
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
      )
        : (
          <section className="lower-covid-stats">
            <div className="dates-stats">
              <h3 className="time-indicator">
                {errorMsg}
              </h3>
              <div className="stats-container d-flex">
                <img src={loading} alt="loading-animation" />
              </div>
            </div>
            <div className="dates-stats">
              <div className="stats-container d-flex">
                <img className="loading-img" src={loading} alt="loading-animation" />
              </div>
            </div>
          </section>
        )}
    </div>
  );
};

export default Detail;
