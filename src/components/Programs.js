import React from "react";
import { programsData } from "./ProgramData";
import rightArrow from "../assets/rightArrow.png";
import "./Programs.css";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-title">
        <span>Explore Our</span>
        <span>Programs</span>
        <span>to Shape You</span>
      </div>
      <div className="program-type">
        {programsData.map((program) => {
          return (
            <div className="category">
              <img src={program.image} />
              <span>{program.title}</span>
              <span>{program.description}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img className="rightArrow" src={rightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
