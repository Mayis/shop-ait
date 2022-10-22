import React from "react";

import "./CSS/style.css";
import FreeSlider from "./SWIPER-SLIDER/Free Mode Slider/FreeSlider";
function TopSellers() {
  return (
    <div id="top-sellers">
      <div className="top-description">
        <h1 className="topH1">TOP SELLERS</h1>
      </div>

      <FreeSlider />
    </div>
  );
}

export default TopSellers;
