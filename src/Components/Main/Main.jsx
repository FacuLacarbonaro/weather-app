import React from "react";

import Image from "../../Assets/img/jpg/image1.jpg";

import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <img src={Image} alt="" />
      <div className="main__container">
          <h2>26°</h2>
          <div className='main__container__description'>
              <div className="main__container__description__left">

              <h2>London</h2>
              <p>10:36 - Tuesday, 22 Oct '19</p>
              </div>
              <div className="main__container__description__right">
                  <h3>Sunny</h3>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Main;
