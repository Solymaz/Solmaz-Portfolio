import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        Hi, I'm{" "}
        <div className="S">
          <div className="eyes">
            <MouseTracker />
          </div>
          <img src="name.jpg" className="name" alt="logo" />
          <span className="ol">ol</span>
        </div>
        a curious Front-end Developer
        <div>
          <Link to="/contact">
            <button className="reachMe">Reach out to me</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
