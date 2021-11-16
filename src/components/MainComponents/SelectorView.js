import React from 'react';
import '../../styles/main-style/selectormain.css';
import { useDispatch } from 'react-redux';
import { setContinent } from '../../Redux/State/continentSelection';
import asia from '../../assets/asia.png';
import africa from '../../assets/africa.png';
import europe from '../../assets/europe.png';
import australia from '../../assets/australia.png';
import northAmerica from '../../assets/north-america.png';
import southAmerica from '../../assets/south-america.png';

const SelectorView = () => {
  const dispatch = useDispatch();
  return (
    <div className="lower-container">
      <div className="stat-tag">countries</div>
      <div className="selector-main-container d-flex">
        <div className="cont-container" role="presentation" onClick={() => dispatch(setContinent({ selected: 'asia' }))}>
          <img src={asia} alt="continent-shape" />
          <p className="cont-name">Asia</p>
        </div>
        <div className="cont-container" role="presentation" onClick={() => dispatch(setContinent({ selected: 'europe' }))}>
          <img src={europe} alt="continent-shape" />
          <p className="cont-name">Europe</p>
        </div>
        <div className="cont-container" role="presentation" onClick={() => dispatch(setContinent({ selected: 'africa' }))}>
          <img src={africa} alt="continent-shape" />
          <p className="cont-name">Africa</p>
        </div>
        <div className="cont-container" role="presentation" onClick={() => dispatch(setContinent({ selected: 'namerica' }))}>
          <img src={northAmerica} alt="continent-shape" />
          <p className="cont-name">North America</p>
        </div>
        <div className="cont-container" role="presentation" onClick={() => dispatch(setContinent({ selected: 'samerica' }))}>
          <img src={southAmerica} alt="continent-shape" />
          <p className="cont-name">South America</p>
        </div>
        <div className="cont-container" role="presentation" onClick={() => dispatch(setContinent({ selected: 'australia' }))}>
          <img src={australia} alt="continent-shape" />
          <p className="cont-name">Australia</p>
        </div>
      </div>
    </div>
  );
};

export default SelectorView;
