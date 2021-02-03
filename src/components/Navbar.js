import React from "react";
import { BiHomeHeart } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { IoIosCodeWorking, IoIosRibbon } from "react-icons/io";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="logo.jpg" className="logo" alt="logo" />
      <div className="information">
        <a href="#" className="home" rel="index">
          <BiHomeHeart className="icons" />
          <span className="icon-title">HOME</span>
        </a>
        <a>
          <BsPerson className="icons" />{" "}
          <span className="icon-title">ABOUT</span>
        </a>
        <a>
          <GoSettings className="icons" />{" "}
          <span className="icon-title">SKILLS</span>
        </a>
        <a>
          <IoIosCodeWorking className="icons" />{" "}
          <span className="icon-title">WORKS</span>
        </a>
      </div>
      <div className="contact">
        <HiOutlineMail className="icons" />
        <RiLinkedinLine className="icons" />
        <RiGithubLine className="icons" />
      </div>
    </nav>
  );
};
export default Navbar;
