import React from 'react';
import worldMap from '../../assets/worldmap.png';
import '../../styles/main-style/viewmain.css';

const ViewMain = () => {
  return (
    <div className="upper-container">
      <div className="view-main-container">
        <img src={worldMap} alt="map-world" />
        <div className="world-stats-container">
          <h3>Cases</h3>
          <h3>Recovered</h3>
          <h3>Passed</h3>
        </div>
      </div>
    </div>
  );
};

export default ViewMain;
