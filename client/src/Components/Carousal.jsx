import React from "react";
import { Carousel } from "antd";
import hero from "../Assests/Hero.png";
import hero2 from "../Assests/hero2.png";
import hero3 from "../Assests/hero3.png";
import hero4 from "../Assests/hero4.png";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Carousal = () => {
  return (
    <Carousel autoplay={{ delay: 200 }} loop={true}>
      <div style={{ border: "none" }}>
        <img src={hero} alt="" />
      </div>
      <div>
        <img src={hero2} alt="" />
      </div>
      <div>
        <img src={hero3} alt="" />
      </div>
      <div>
        <img src={hero4} alt="" />
      </div>
    </Carousel>
  );
};

export default Carousal;
