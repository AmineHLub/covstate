import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Calendar from './components/Calendar';
import Main from './components/Main';

function App() {
  const ObjOfTime = useSelector((state) => state.timeReducer);
  return (
    <>
      {!ObjOfTime ? <Calendar /> : null }
      {ObjOfTime ? <Main time={ObjOfTime} /> : null }
    </>
  );
}

export default App;
