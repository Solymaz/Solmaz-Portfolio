import React from "react";
import "./home.css";
import MouseTracker from "./MouseTracker";

const Home = () => {
  return (
    <>
      <div className="home-content">
        Hi,
        <br />
        I'm <img src="name.jpg" className="name" alt="name" />,
        <br />
        Front-end Developer
      </div>
      <MouseTracker />
    </>
  );
};

export default Home;
