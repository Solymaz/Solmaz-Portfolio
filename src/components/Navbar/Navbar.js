import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { IoIosCodeWorking } from "react-icons/io";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "./navbar.css";

const Navbar = () => {
  const menuRef = useRef(null);
  const [menuShown, setMenuShown] = useState(false);

  const showMenu = () => {
    if (menuRef.current.style.display === "grid") {
      menuRef.current.style.display = "none";
      setMenuShown(false);
    } else {
      menuRef.current.style.display = "grid";
      setMenuShown(true);
    }
  };

  return (
    <nav className="navbar">
      <NavLink to="/" exact>
        <img src="logo.jpg" className="logo" alt="logo" />
      </NavLink>
      <div className="menu" onClick={showMenu}>
        {menuShown ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div
        className="menuItems"
        ref={menuRef}
        onClick={() => {
          menuShown && showMenu();
        }}
      >
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
          <NavLink
            to="/projects"
            className="navItem"
            activeClassName="selected"
          >
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
          <a
            href="https://github.com/Solymaz/"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubLine className="link" />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
