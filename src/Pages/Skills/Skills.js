import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../Style/Animations";
import "./skills.css";

const Skills = () => {
  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      className="skills"
    >
      <h1>Skills</h1>
      <ul className="skillTable">
        <li>HTML 5</li>
        <img src="./done.svg" className="done" />
        <li>CSS 3</li>
        <img src="./done.svg" className="done" />
        <li>JavaScript (ES6)</li>
        <img src="./done.svg" className="done" />
        <li>ReactJS 16 (React hooks)</li>
        <img src="./done.svg" className="done" />
        <li>CSS Grid</li>
        <img src="./done.svg" className="done" />
        <li>Bootstrap</li>
        <img src="./done.svg" className="done" />
        <li>Version control (Github)</li>
        <img src="./done.svg" className="done" />
        <li>Redux</li>
        <img src="./loading.gif" className="loading" />
      </ul>
    </motion.div>
  );
};

export default Skills;
