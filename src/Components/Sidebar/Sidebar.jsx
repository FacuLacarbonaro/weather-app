import React from "react";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <iv className="sidebar__container">
        <div className="sidebar__container__locations">
          <input type="text" placeholder="Another location" />
          <hr />
          <div className="sidebar__container__locations__others">
            <ul>
              <li>Birmingham</li>
              <li>Manchester</li>
              <li>New York</li>
              <li>California</li>
            </ul>
          </div>
          <hr />
          <div className="sidebar__container__details">
            <h2>Weather details</h2>
            <div className="sidebar__container__details__list">
              <ul>
                <li>Cloudy </li>
                <li>Humidity </li>
                <li>Wind</li>
                <li>Rain</li>
              </ul>

              <ul>
                <li>12%</li>
                <li>78%</li>
                <li>1 km/h</li>
                <li>0 mm</li>
              </ul>
            </div>
          </div>
          <hr/>
        </div>
      </iv>
    </div>
  );
};

export default Sidebar;
