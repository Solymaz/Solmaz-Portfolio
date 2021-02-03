import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="navItem">
          <BiHomeHeart />
        </Link>
        <Link to="/about" className="navItem">
          <BsPerson />
        </Link>
        <Link to="/skills" className="navItem">
          <GoSettings />
        </Link>
        <Link to="/projects" className="navItem">
          <IoIosCodeWorking />
        </Link>
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
