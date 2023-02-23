import React from "react";
import "./Plan-container.css";
import { planData } from "./PlanData";
import rightTick from "../assets/whiteTick.png";
const PlanContainer = () => {
  return (
    <div className="plan-container" id="plans">
      <div className="plan-header">
        <span className="stroke-text">Ready to start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now withus</span>
      </div>
      {/* <div className="plan-blur"></div> */}

      <div className="plans">
        {/* <div className="plan">
            <img src="" alt="" />
        </div>
        <div className="plan"></div>
        <div className="plan"></div> */}
        {planData.map((plan) => {
          return (
            <div className="plan">
              <span>{plan.title}</span>
              <span>{plan.price}</span>
              <div className="features">
                {plan.feature.map((feature, i) => (
                  <div className="feature">
                    <img src={rightTick} alt="" />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
              </div>
              <div>
                <span>See more benefits -></span>
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlanContainer;
