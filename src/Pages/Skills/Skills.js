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
  repeat: Infinity,
  repeatDelay: 2.5,
};
const anime = {
  scale: [1, 1.5, 1],
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
        <div className="skill">
          <motion.div
            animate={anime}
            transition={{ ...transition, delay: 0.5 }}
          >
            <DiHtml5 />
          </motion.div>
          <div className="skillName ">HTML 5</div>
        </div>
        <div className="skill">
          <motion.div animate={anime} transition={{ ...transition, delay: 1 }}>
            <DiCss3 />
          </motion.div>
          <div className="skillName">CSS 3</div>
        </div>
        <div className="skill">
          <motion.div
            animate={anime}
            transition={{ ...transition, delay: 1.5 }}
          >
            <DiJavascript />
          </motion.div>
          <div className="skillName">JavaScript ES6</div>
        </div>
        <div className="skill">
          <motion.div animate={anime} transition={{ ...transition, delay: 2 }}>
            <DiReact />
          </motion.div>
          <div className="skillName">ReactJS 16.8</div>
        </div>
        <div className="skill">
          <motion.div
            animate={anime}
            transition={{ ...transition, delay: 2.5 }}
          >
            <DiBootstrap />
          </motion.div>
          <div className="skillName">Bootstrap</div>
        </div>
        <div className="skill">
          <motion.div animate={anime} transition={{ ...transition, delay: 3 }}>
            <AiOutlineGithub />
          </motion.div>
          <div className="skillName">GitHub</div>
        </div>
        <div>
          <motion.div
            animate={anime}
            transition={{ ...transition, delay: 3.5 }}
          >
            <SiRedux />
          </motion.div>
          <div className="skillName">Redux</div>
        </div>
        <div className="skill">
          <motion.div animate={anime} transition={{ ...transition, delay: 4 }}>
            <BsGrid1X2 />
          </motion.div>
          <div className="skillName">CSS Grid</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
