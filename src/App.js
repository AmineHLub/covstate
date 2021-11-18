import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Calendar from './components/Calendar';
import Main from './components/Main';

function App() {
  const ObjOfTime = useSelector((state) => state.timeReducer);
  return (
    <>
      <Router>
        {!ObjOfTime ? <Route exact path="/"><Calendar /></Route> : <Main /> }
      </Router>

    </>
  );
}

export default App;
