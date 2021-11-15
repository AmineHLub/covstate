import React, { useState } from 'react';
import '../styles/calendar.css';
import { useDispatch } from 'react-redux';
import { setGlobalTime } from '../Redux/State/timeState';

const Calendar = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
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
  return (
    <div className="calendar-container d-flex">
      <section className="selection d-flex">
        <select defaultValue="MM" onChange={(e) => handleDayChange(e)}>
          <option disabled>MM</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <select defaultValue="DD" onChange={(e) => handleMonthChange(e)}>
          <option disabled>DD</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <button type="button" onClick={sendData}>Send</button>
      </section>
      <section className="today-container">
        <button type="button" onClick={handleToday}>Today</button>
      </section>
    </div>
  );
};

export default Calendar;
