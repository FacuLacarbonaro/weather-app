import React from "react";

import "./Sidebar.scss";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
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
                <li>City</li>
                <li>Country</li>
                <li>Local time</li>
                <li>Temperature</li>
                <li>Feels like</li>
                <li>Cloudy </li>
                <li>Visibility</li>
                <li>Precipitation</li>
                <li>Pressure</li>
                <li>Humidity </li>
                <li>Wind</li>
                <li>Wind direction</li>
              </ul>

              <ul>
                <li> {props.city} </li>
                <li> {props.country} </li>
                <li> {props.local_time} </li>
                <li> {props.temperature} °C </li>
                <li> {props.feels_like} °C</li>
                <li>Cloudy</li>
                <li>{props.visibility} km </li>
                <li>{props.precipitation}%</li>
                <li> {props.pressure} hPA </li>
                <li>{props.humidity}%</li>
                <li>{props.wind_speed} km/h</li>
                <li> {props.wind_direction} </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
