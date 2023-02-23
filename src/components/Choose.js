import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";
import nike from "../assets/nike.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";

import "./Choose.css";
const Choose = () => {
  return (
    <div className="choose" id="choose">
      <div className="choose-left">
        <img className="gridImage1" src={image1} alt="" />
        <img className="gridImage2" src={image2} alt="" />
        <img className="gridImage3" src={image3} alt="" />
        <img className="gridImage4" src={image4} alt="" />
      </div>
      <div className="choose-right">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span>choose us?</span>
        </div>
        <div className="right-details">
          <div>
            <img src={tick} alt="" />
            <span>Over 140+ Expert Coachs</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span> 1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span className="partner">OUR PARTNERS</span>
        <div className="partnerImage">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Choose;
