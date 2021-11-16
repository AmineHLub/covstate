import React from 'react';
import worldMap from '../../assets/worldmap.png';
import '../../styles/main-style/viewmain.css';
import '../../styles/main-style/selectormain.css';

const Continent = () => {
  return (
    <>
      <div className="upper-container">
        <div className="view-main-container">
          <img src={worldMap} alt="map-world" />
          <h2>Total</h2>
        </div>
      </div>
      <div className="lower-container">
        <div className="stat-tag">countries</div>
        <div className="selector-main-container d-flex">

          <div className="cont-container" role="presentation">
            <img alt="continent-shape" />
            <p className="cont-name">Asia</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Continent;
