import React from "react";
import "./home.css";
import MouseTracker from "./components/MouseTracker/MouseTracker";

const Home = () => {
  return (
    <div className="home-content">
      <div className="intro">
        Hi,
        <br />
        I'm <img src="name.jpg" className="name" alt="name" />,
        <br />
        Front-end Developer
      </div>
      <div className="eyes">
        <MouseTracker />
      </div>
    </div>
  );
};

export default Home;
