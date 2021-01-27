import React from "react";
import { BiHomeSmile } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { IoIosCodeWorking } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { VscGithubAlt } from "react-icons/vsc";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="logo.jpg" className="logo" />
      <BiHomeSmile className="icons" />
      <BsPerson className="icons" />
      <RiUserSettingsLine className="icons" />
      <IoIosCodeWorking className="icons" />
      <RiContactsLine className="icons" />
      <TiSocialLinkedin className="icons" />
      <VscGithubAlt className="icons" />
    </nav>
  );
};
export default Navbar;
