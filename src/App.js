import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Calendar from './components/Calendar';

function App() {
  const ObjOfTime = useSelector((state) => state.timeReducer);
  return (
    <>
      {!ObjOfTime ? <Calendar /> : null }
      {ObjOfTime ? (
        <div>
          {ObjOfTime.day}
          {' '}
          {ObjOfTime.month}
        </div>
      ) : null }
    </>
  );
}

export default App;
