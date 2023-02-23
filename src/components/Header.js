import React from "react";
import "./Header.css";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="header">
      <Link to="home">
        <img className="Logo" src={Logo} alt="" />
      </Link>

      <ul className="header-menu">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="programs" span={true} smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="choose" span={true} smooth={true}>
            Why Us
          </Link>
        </li>
        <li>
          <Link to="plans" span={true} smooth={true}>
            Plans
          </Link>
        </li>
        <li>
          {" "}
          <Link to="testimonials" span={true} smooth={true}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
