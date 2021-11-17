import React, { useState } from 'react';
import '../styles/calendar.css';
import { useDispatch } from 'react-redux';
import { setGlobalTime } from '../Redux/State/timeState';
import mainLogo from '../assets/main-logo.svg';

const Calendar = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [errorMsg, setError] = useState('');
  const handleDayChange = (e) => {
    setDay(e.target.value);
  };
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const dispatch = useDispatch();
  const sendData = () => {
    const data = {
      day,
      month,
    };
    if (!data.day || !data.month) {
      setError('Invalid Date!');
      return null;
    }
    return dispatch(setGlobalTime(data));
  };
  const handleToday = () => {
    const data = new Date();
    return dispatch(setGlobalTime({
      day: `${data.getDate()}`,
      month: `${data.getMonth() + 1}`,
    }));
  };
  const arrOfDDs = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  const arrOfMMs = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  return (
    <div className="main-login-container d-flex">
      <div className="logo-login">
        {' '}
        <img src={mainLogo} alt="logo" />
        {' '}
      </div>
      <div className="calendar-container d-flex">
        {errorMsg ? <p className="error-msg-date">{errorMsg}</p> : null }
        <section className="selection d-flex">
          <select defaultValue="DD" onChange={(e) => handleDayChange(e)}>
            <option disabled>DD</option>
            {arrOfDDs.map((el) => (<option key={el}>{el}</option>))}
          </select>
          <select defaultValue="MM" onChange={(e) => handleMonthChange(e)}>
            <option disabled>MM</option>
            {arrOfMMs.map((el) => (<option key={el}>{el}</option>))}
          </select>
          <button type="button" className="send-btn" onClick={sendData}>Select</button>
        </section>
        <section className="today-container">
          <button type="button" className="send-btn today" onClick={handleToday}>Today</button>
        </section>
      </div>
    </div>
  );
};

export default Calendar;
