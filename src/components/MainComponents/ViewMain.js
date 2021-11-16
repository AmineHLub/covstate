import React from 'react';
import worldMap from '../../assets/worldmap.png';
import '../../styles/main-style/viewmain.css';

const ViewMain = () => {
  return (
    <div className="upper-container">
      <div className="view-main-container">
        <img src={worldMap} alt="map-world" />
        <h2>Total</h2>
      </div>
    </div>
  );
};

export default ViewMain;
