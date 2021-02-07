import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../Style/Animations";
import { AiOutlineGithub } from "react-icons/ai";
import { BsGrid1X2 } from "react-icons/bs";
import {
  DiCss3,
  DiReact,
  DiBootstrap,
  DiJavascript,
  DiHtml5,
} from "react-icons/di";
import { SiRedux } from "react-icons/si";

import "./skills.css";

const transition = {
  duration: 2,
  loop: Infinity,
};
const anime1 = {
  scale: [1.25, 1.1, 1.25],
};
const anime2 = {
  scale: [1.1, 1.25, 1.1],
};

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
      <div className="skillTable">
        <div>
          <motion.div animate={anime1} transition={transition}>
            <DiHtml5 />
          </motion.div>
          <div className="skillName ">HTML 5</div>
        </div>
        <div>
          <motion.div animate={anime2} transition={transition}>
            <DiCss3 />
          </motion.div>
          <div className="skillName">CSS 3</div>
        </div>
        <div>
          <motion.div animate={anime1} transition={transition}>
            <DiJavascript />
          </motion.div>
          <div className="skillName">JavaScript ES6</div>
        </div>
        <div>
          <motion.div animate={anime2} transition={transition}>
            <DiReact />
          </motion.div>
          <div className="skillName">ReactJS 16.8</div>
        </div>
        <div>
          <motion.div animate={anime2} transition={transition}>
            <DiBootstrap />
          </motion.div>
          <div className="skillName">Bootstrap</div>
        </div>
        <div>
          <motion.div animate={anime1} transition={transition}>
            <AiOutlineGithub />
          </motion.div>
          <div className="skillName">GitHub</div>
        </div>
        <div>
          <motion.div animate={anime2} transition={transition}>
            <SiRedux />
          </motion.div>
          <div className="skillName">Redux</div>
        </div>
        <div>
          <motion.div animate={anime1} transition={transition}>
            <BsGrid1X2 />
          </motion.div>
          <div className="skillName">CSS Grid</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
