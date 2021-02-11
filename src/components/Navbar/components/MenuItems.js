import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { IoIosCodeWorking } from "react-icons/io";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export default function MenuItems({ menuRef }) {
  return (
    <div className="menuItems" ref={menuRef}>
      <div className="information">
        <NavLink to="/" className="navItem" activeClassName="selected" exact>
          <BiHomeHeart />
        </NavLink>
        <NavLink to="/about" className="navItem" activeClassName="selected">
          <BsPerson />
        </NavLink>
        <NavLink to="/skills" className="navItem" activeClassName="selected">
          <GoSettings />
        </NavLink>
        <NavLink to="/projects" className="navItem" activeClassName="selected">
          <IoIosCodeWorking />
        </NavLink>
        <NavLink to="/contact" className="navItem" activeClassName="selected">
          <HiOutlineMail />
        </NavLink>
      </div>
      <div className="contact">
        <a
          href="https://www.linkedin.com/in/solmaz-seyedmousavi/"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinLine className="link" />
        </a>
        <a href="https://github.com/Solymaz/" target="_blank" rel="noreferrer">
          <RiGithubLine className="link" />
        </a>
      </div>
    </div>
  );
}
