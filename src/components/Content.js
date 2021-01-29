import React from "react";
import { BiHomeHeart } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import {
  IoIosCodeWorking,
  IoMdNotificationsOutline,
  IoIosRibbon,
} from "react-icons/io";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";

import "./content.css";

const Content = () => {
  return (
    <>
      <img src="logo.jpg" className="logo" alt="logo" />

      <a href="#" className="home" rel="index">
        <BiHomeHeart className="icons" />
        <span className="icon-title">HOME</span>
      </a>
      <a className="about">
        <BsPerson className="icons" /> <span className="icon-title">ABOUT</span>
      </a>
      <a className="skill">
        <GoSettings className="icons" />{" "}
        <span className="icon-title">SKILLS</span>
      </a>
      <div className="work-cert">
        <a className="work">
          <IoIosCodeWorking className="icons" />{" "}
          <span className="icon-title">MY WORK</span>
        </a>
        <a className="cert">
          <IoIosRibbon className="icons" />{" "}
          <span className="icon-title">ACCOMPLISHMENTS</span>
        </a>
      </div>

      <div className="contact">
        <IoMdNotificationsOutline className="icons" />
        <RiLinkedinLine className="icons" />
        <RiGithubLine className="icons" />
      </div>
    </>
  );
};
export default Content;
