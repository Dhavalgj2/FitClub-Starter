import React from "react";
import Header from "./Header";
import "./Hero.css";
import heartImage from "../assets/heart.png";
import heroImage from "../assets/hero_image.png";
import heroImageBack from "../assets/hero_image_back.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-fit">
          <motion.div
            initial={{ left: "240px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">SHAPE</span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
          <div className="figures">
            <div>
              <span>+140</span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>+978</span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>+50</span>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button class="btn">Get Started</button>
            <button class="btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="right-h">
        <button className="right-btn">Join Now</button>
        <motion.div
          className="heart-right"
          initial={{ right: "-2px" }}
          whileInView={{ right: "30px" }}
          transition={{ ...transition, duration: 1, type: "tween" }}
        >
          <img src={heartImage} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img className="heroImage" src={heroImage} alt="" />

        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={{ ...transition, duration: 1, type: "tween" }}
          className="heroImageBack"
          src={heroImageBack}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
