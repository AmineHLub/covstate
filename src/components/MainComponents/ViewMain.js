import React from 'react';
import { useSelector } from 'react-redux';
import worldMap from '../../assets/worldmap.png';
import '../../styles/main-style/viewmain.css';

const ViewMain = () => {
  const totalData = useSelector((state) => state.totalStats);
  return (
    <div className="upper-container">
      <div className="view-main-container">
        <img src={worldMap} alt="map-world" />
        <div className="world-stats-container">
          <h3 className="total-stats-data">
            Cases :
            {' '}
            {totalData.total.today_confirmed}
          </h3>
          <h3 className="total-stats-data">
            Recovered :
            {' '}
            {totalData.total.today_recovered}
          </h3>
          <h3 className="total-stats-data">
            Passed :
            {' '}
            {totalData.total.today_deaths}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ViewMain;
