import React from 'react';
import '../../styles/main-style/selectormain.css';
import asia from '../../assets/asia.png';
import africa from '../../assets/africa.png';
import europe from '../../assets/europe.png';
import australia from '../../assets/australia.png';
import northAmerica from '../../assets/north-america.png';
import southAmerica from '../../assets/south-america.png';

const SelectorView = () => {
  return (
    <div className="lower-container">
      <div className="stat-tag">countries</div>
      <div className="selector-main-container d-flex">
        <div className="cont-container">
          <img src={asia} alt="continent-shape" />
          <p className="cont-name">Asia</p>
        </div>
        <div className="cont-container">
          <img src={europe} alt="continent-shape" />
          <p className="cont-name">Europe</p>
        </div>
        <div className="cont-container">
          <img src={africa} alt="continent-shape" />
          <p className="cont-name">Africa</p>
        </div>
        <div className="cont-container">
          <img src={northAmerica} alt="continent-shape" />
          <p className="cont-name">North America</p>
        </div>
        <div className="cont-container">
          <img src={southAmerica} alt="continent-shape" />
          <p className="cont-name">South America</p>
        </div>
        <div className="cont-container">
          <img src={australia} alt="continent-shape" />
          <p className="cont-name">Australia</p>
        </div>
      </div>
    </div>
  );
};

export default SelectorView;
