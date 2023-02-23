import React, { useState } from "react";
import { testimonialsData } from "../data/testimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { motion } from "framer-motion";
import "./testimonial.css";
const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };

  const [next, setNext] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>say about us</span>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        >
          {testimonialsData[next].review}
        </motion.span>
        <span>
          <span>{testimonialsData[next].name}</span> -
          {testimonialsData[next].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={{ next }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[next].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() => {
              next === 0 ? setNext(tlength - 1) : setNext((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              next === tlength - 1 ? setNext(0) : setNext((next) => next + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
