import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import bg from "../../../assets/bg.png"

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Spare Parts Expert</h1>
          <p>
          EXCLUSIVELY AT CHEAPEST PRICE NOW
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={bg} />
      </div>
    </div>
  );
};

export default Banner;
