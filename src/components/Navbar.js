import React from "react";
import { BiHomeHeart } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { IoIosCodeWorking } from "react-icons/io";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="logo.jpg" className="logo" alt="logo" />
      <div className="information">
        <a href="#" rel="index" className="navItem">
          <BiHomeHeart />
        </a>
        <a href="#" rel="about" className="navItem">
          <BsPerson />
        </a>
        <a href="#" rel="skills" className="navItem">
          <GoSettings />
        </a>
        <a href="#" rel="projects" className="navItem">
          <IoIosCodeWorking />
        </a>
      </div>
      <div className="contact">
        <HiOutlineMail className="link" />
        <a
          href="https://www.linkedin.com/in/solmaz-seyedmousavi/"
          target="_blank"
        >
          <RiLinkedinLine className="link" />
        </a>
        <a href="https://github.com/Solymaz/" target="_blank">
          <RiGithubLine className="link" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
