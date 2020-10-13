import React from "react";

import Image from "../../Assets/img/jpg/image1.jpg";

import "./Main.scss";

const Main = (props) => {
  return (
    <div className="main">
      <img src={Image} alt="" />
      <div className="main__container">
        <h2>{props.temperature}°</h2>
        <div className="main__container__description">
          <div className="main__container__description__left">
            <h2>{props.city}</h2>
            <p> {props.local_time} </p>
          </div>
          <div className="main__container__description__right">
            <h3>{props.weather_description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
