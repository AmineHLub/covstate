import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Calendar from './components/Calendar';
import Main from './components/Main';

function App() {
  const ObjOfTime = useSelector((state) => state.timeReducer);
  return (
    <>
      {!ObjOfTime ? <Calendar /> : <Main /> }
    </>
  );
}

export default App;
