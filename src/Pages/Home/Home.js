import React from "react";
import { motion } from "framer-motion";
import "./home.css";
import MouseTracker from "./components/MouseTracker/MouseTracker";
import { pageVariants, pageTransition } from "../../Style/Animations";

const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      className="home-content"
    >
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
    </motion.div>
  );
};

export default Home;
