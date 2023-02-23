import React from "react";
import "./Footer.css";
import git from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr></hr>
      <div className="footer">
        <div className="social-logo">
          <img src={git} alt="git" />
          <img src={instagram} alt="git" />
          <img src={linkedin} alt="git" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
